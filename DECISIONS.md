# Decisions Log

Append-only record of project decisions. Agents: add an entry whenever a non-trivial decision is made during a session (structural changes, venue choices, theoretical commitments, scope changes, reviewer feedback acted on). Keep entries short.

Format: `## YYYY-MM-DD` then bullet points with **bold topic** and brief rationale.

---

## 2026-06-04

- **Machine-readable paper mirrors:** Add Markdown/BibTeX mirrors for a first set of eight core research-program papers. Treat these as author-manuscript mirrors for accessibility, search, and LLM retrieval; canonical citation targets remain the linked DOI, publisher, LingBuzz, PhilArchive, arXiv, or Zenodo records.
- **Regeneration workflow:** Generate mirrors from local LaTeX sources with `scripts/generate-paper-mirrors.mjs` rather than editing generated Markdown by hand. The generator publicifies blind-review conditionals and normalizes known local citation aliases for citeproc.

## 2026-06-13

- **Public OKF export:** Publish a curated public Open Knowledge Format surface at `/okf/`, with raw bundle files under `/okf/bundle/`. Treat these as public-safe project-context exports, not canonical citation records.
- **Crawler and agent discovery:** Link the OKF export from the homepage, machine-readable papers page, `llms.txt`, `robots.txt`, and `sitemap.xml` so both humans and agents can discover it.

## 2026-06-22

- **Site-wide dark mode:** Add a shared `theme.js` toggle and CSS variables so common-shell pages support system dark mode plus a persistent explicit light/dark choice. Leave slide decks, standalone experiments, and copied reference pages outside the shared toggle.

## 2026-07-02

- **Workflow essay:** Add `why-i-work-this-way.html` as a public essay explaining the late-2025/2026 research sprint as a method: speed plus infrastructure for keeping projectibility questions live, naming agentic Codex/Claude Code-style tools as part of the method while preserving guardrails against redescription outrunning confirmation.

## 2026-07-04

- **Unlisted PM dashboard:** Add `dashboard-2b91a1.html`, an interactive portfolio dashboard (review pipeline, preprint bench, active work, blocks; group/sort/filter/search built from PORTFOLIO.md as of 4 Jul). Deliberately unlisted: no links from any page, kept out of `sitemap.xml` and `llms.txt`, `noindex, nofollow` meta, tokened filename against URL guessing. Caveat: the repo is public, so the file is visible to anyone browsing GitHub.
