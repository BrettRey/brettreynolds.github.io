#!/usr/bin/env python3
"""Rot check for the homepage Open questions section.

Runs from a PostToolUse hook whenever the personal-website homepage is edited.
Nothing here can decide whether a question is still open; only Brett can. What
it can do is refuse to let the section age silently, and flag the two states
that reliably mean an entry has gone stale:

  1. The review stamp is old.
  2. A work an entry depends on has changed publication state, which usually
     means the question moved even if the prose didn't.

Exit code is always 0. This warns; it never blocks an edit.
"""

import datetime
import pathlib
import re
import sys

SITE = pathlib.Path(__file__).resolve().parent.parent
INDEX = SITE / "index.html"
PUBS = SITE / "publications.html"

STALE_AFTER_DAYS = 90

# Each open question depends on a claim in a specific work. If that work's
# state changes, the question and its defeat condition need re-reading.
# key: a distinctive phrase in the question -> phrase identifying the work.
DEPENDS_ON = {
    "fail to compose": "Adversarial Pragmatics",
    "conditioned stability": "Grammaticality de-idealized",
    "constrained order": "homeostatic maintenance of English countability",
    "corrective control": "Not every stable cluster is homeostatic",
}

SETTLED_MARKERS = ("Published", "Accepted", "forthcoming")


def main() -> int:
    if not INDEX.exists():
        return 0
    html = INDEX.read_text(encoding="utf-8", errors="replace")

    if 'id="open-questions"' not in html:
        print("[openq] WARNING: the Open questions section is gone from index.html.")
        print("[openq] If that was deliberate, drop this hook. If not, restore it.")
        return 0

    warnings = []

    stamp = re.search(r"OPENQ-REVIEWED:\s*(\d{4}-\d{2}-\d{2})", html)
    if not stamp:
        warnings.append("no OPENQ-REVIEWED stamp found; add one to the section.")
        age = None
    else:
        reviewed = datetime.date.fromisoformat(stamp.group(1))
        age = (datetime.date.today() - reviewed).days
        if age >= STALE_AFTER_DAYS:
            warnings.append(
                f"last reviewed {reviewed} ({age} days ago, threshold {STALE_AFTER_DAYS})."
            )

    questions = re.findall(r'<span class="q">(.*?)</span>', html, re.S)
    questions = [re.sub(r"<[^>]+>", "", q).strip() for q in questions]

    missing_defeat = len(questions) - html.count('class="defeat"')
    if missing_defeat > 0:
        warnings.append(f"{missing_defeat} question(s) have no defeat condition.")

    # A dependency that has become published usually means the question moved.
    if PUBS.exists():
        pubs = PUBS.read_text(encoding="utf-8", errors="replace")
        for q_phrase, work in DEPENDS_ON.items():
            if not any(q_phrase in q for q in questions):
                continue
            idx = pubs.find(work)
            if idx == -1:
                continue
            context = pubs[max(0, idx - 400): idx + 400]
            if any(m in context for m in SETTLED_MARKERS):
                warnings.append(
                    f'"{work}" now reads as published/accepted in publications.html; '
                    f"re-read the question about \"{q_phrase}\"."
                )

    if not warnings:
        note = f"{len(questions)} questions, reviewed {age} days ago" if age is not None else ""
        print(f"[openq] OK. {note}")
        return 0

    print("[openq] The Open questions section needs a look before this ships:")
    for w in warnings:
        print(f"[openq]   - {w}")
    print("[openq] Current questions:")
    for q in questions:
        print(f"[openq]   * {q}")
    print("[openq] For each: still open? still the right defeat condition?")
    print("[openq] When re-reviewed, update the OPENQ-REVIEWED stamp in index.html.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
