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
- **Dashboard stays current via status-surface-update:** The unlisted PM dashboard is now a listed surface in the `status-surface-update` skill, refreshed on every PORTFOLIO.md status change alongside publications.html, llms.txt, and the CV. Per Brett's approval, the dashboard may carry manuscript IDs and desk-rejection history that the linked public pages omit; personal projects and reviewer/editor links stay excluded.

## 2026-07-17

- **The First Descent interactive companion:** Add `first-descent.html`, a playable single-file explainer for the Poisson–binomial manuscript (coin-tray game scoring V·δ at the first descent, three-depth explanation tabs, proof map, open-problem band for c★ ∈ [1/4, 1/3]). Before deployment, the page was audited line by line against `paper/poisson_binomial/main.tex` in the erdos-problem-993 repo; one directional slip in the Bobkov–Marsiglietti–Melbourne gloss was fixed, the "New mathematics" medal threshold was tightened to exactly 1/3, and persistence was moved to `localStorage` for static hosting.
- **Manuscript PDF hosted on site:** Add `variance-scaled-turan.pdf` (current XeLaTeX build of the ECP-targeted manuscript) so the companion and publications entry have a stable readable link; the PDF is gitignored in the source repo, and canonical source remains `paper/poisson_binomial/` on GitHub. ECP permits preprints, so the public copy doesn't affect the venue plan. Refresh this copy whenever the manuscript changes.
- **Publications entry for the Poisson–binomial manuscript:** List it under Preprints & Under Review as "Manuscript" (no venue claim), adjacent to the sibling tree-unimodality Zenodo entry, with PDF, interactive companion, and code/certificates links. Also indexed in `sitemap.xml` and `llms.txt` (Project Pages).

## 2026-07-18

- **The Valley Hunt interactive companion:** Add `valley-hunt.html`, a playable explainer for Erdős problem #993 (tree independence-sequence unimodality), sibling to `first-descent.html` in the same visual system. Tree workshop with exact BigInt independence-polynomial engine, near-miss-ratio scoreboard, and calibrated challenges. Every displayed fact audited against `paper/main_v2.tex` in erdos-problem-993; the engine was validated against the paper's champion nm values (0.9437/0.9575/0.9792) and reproduces the two published Kadrawi n=26 log-concavity-failure polynomials exactly. Cross-linked both ways with The First Descent; tree-paper entry in publications.html gains an "Interactive companion" link; indexed in sitemap.xml and llms.txt.
- **Restored The First Descent llms.txt entry:** the 2026-07-17 walkthrough session's Project Pages rewrite had dropped it; re-added alongside the new Valley Hunt entry.
