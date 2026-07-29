# Synthesis: round 3, generative board on metaphor coherence
<!-- SUMMARY: 6 generative reviewers (2 Opus, 2 Fable, 2 Codex); 6/6 locate the schema problem in heading copy and the role line, not the layout; 4/6 reject field tags outright; recommended path is three free textual fixes plus maturity labels, with Victor's crossing matrix as the ambitious option · status: complete · updated: 2026-07-29 -->

Run: `review-board-20260729-r3-metaphor`. Baseline: `index-v3.html` at commit
`3f35621c`. Generative commission, not a critique.

| Reviewer | Model | Verdict on field tags |
|---|---|---|
| Lakoff | Opus | Reject: the visual should go silent, not assert a better schema |
| Victor | Opus | Reject: answers a filing question no reader has |
| Appleton | Fable | Reject: weightless, redundant, rot-prone. Encode maturity instead |
| Brown | Fable | Reject: taxonomy the archive can't hold. Fix the prose |
| Tufte | Codex | Accept, but as a plain-text `Fields:` line, item-level |
| Vignelli | Codex | Accept, but as a plain-text `Bears on` line with a bold chief field |

## 1. Unanimous: the schema problem is in the words

All six locate it in copy, not geometry. Vertical stacking on the web is
conventional enough to read as priority order rather than narrative. What
narrates a career is:

- **the role line**: "currently in AI evaluation and assurance, and for the last
  two decades in English grammar" (Brown, Vignelli, Victor);
- **two headings**: "The idea **behind** it" and "Where it **applies**", which
  make the idea prior and linguistics downstream (Lakoff, Tufte, Victor,
  Appleton).

My original structural diagnosis was wrong. The metaphor analysis found a real
phenomenon and misattributed its carrier. The layout was innocent; my own
sentences said it outright.

## 2. The strongest argument against tags

Victor's, and it is a theory argument rather than a design one:

> A tag can express *both*. It cannot express *different but equally real*.

The projectibility-first claim is that two fields track **different** categories
through much of the same material. A tag saying a paper belongs to linguistics
and AI evaluation asserts the weaker, more ordinary thing. So the repair
under-describes the theory it was invented to rescue.

He adds that field metadata does have a right home on this site: `llms.txt`, the
OKF export, and the `/papers/` mirrors, where a consumer genuinely wants a
`field` column. Structured metadata for machines, a picture for people.

Lakoff's independent version: the page's verbal metaphors run on force,
enablement, and support (license, standing, warrant, support grade, demotion,
audit, adjudication, roughly 25 tokens in 600 words). No CSS primitive renders
force-dynamics. So the visual should stop making category claims rather than try
to make the right one.

Tufte and Vignelli both **independently reject pill badges** on the grounds that
a pill is a miniature container, which is the exact metaphor being escaped. The
graded small-caps labels in `index-v4.html` avoid that trap but neither reviewer
was shown them.

## 3. Three free fixes, converged on

1. **Rewrite the role line** to state simultaneity rather than sequence.
2. **Merge or retitle the two work sections** so nothing is "behind" or "applied
   to" anything. (`index-v4.html` already merged them.)
3. **Promote `.thesis-q` from `<p>` to `<h2>`.** Verified zero-cost: `.thesis-q`
   at (0,1,0) already overrides all six properties the `h2` rule sets, so no
   stylesheet edit is needed. Also fixes the headingless-section flaw round 2
   flagged.

## 4. The two substantive alternatives

**Appleton: encode maturity, not field.** A closed four-word vocabulary,
Published / Under review / Preprint / In preparation, opening each meta line.

Two arguments for it. It enacts Brett's own theory (support grades and demotion
rules, applied to his own record), so the mechanism is an instance of the
framework rather than a taxonomy borrowed to patch a metaphor. And it fixes a
**verified** problem: both round-2 audience proxies hit exactly this, the AI lead
unable to sort published from aspirational, the editor reading "under review at
*Synthese*" as leaning on a submission destination. Field tags fix a problem only
the author and I noticed.

**Victor: the crossing matrix.** Rows are questions about what a label licenses,
columns are fields, and a cell is a *result*, not a membership. Works that state
the method span all columns with `colspan`. Nothing is filed, because every row
is a crossing by construction. This is the only proposal that can express
"different but equally real": the same question, answered on different evidence
in different fields.

Cost: real editorial work. Brett has to decide the row questions, and a work that
cannot say what it licenses you to predict does not get a row. Victor notes that
is the discipline the theory demands anyway.

**Caveat Victor flagged himself:** he assigned papers to cells from public titles
and blurbs, not from reading the papers. The cell assignments need checking,
especially *Truth-tracking profiles* and *Delegation assurance*.

## 5. Recommendation

Ship the three free fixes and Appleton's maturity labels. Drop the field tags
from `index-v4.html`. Hold the crossing matrix as a deliberate next step, not a
same-session change, because it needs Brett's own judgment about which questions
are real and which works answer them.

## 6. Board self-check

The prompts stated my diagnosis, which risks anchoring, and five of six rejected
it anyway, so anchoring was not decisive here. But all six read the same brief
written by the same author, and the convergence on "it's the copy" may partly
reflect that the brief quoted the copy. The tag verdict is the more trustworthy
signal, since two reviewers were briefed to argue for tags and both narrowed
them to a plain-text line rather than endorsing the mechanism as built.
