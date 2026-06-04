# Decisions Log

Append-only record of project decisions. Agents: add an entry whenever a non-trivial decision is made during a session (structural changes, venue choices, theoretical commitments, scope changes, reviewer feedback acted on). Keep entries short.

Format: `## YYYY-MM-DD` then bullet points with **bold topic** and brief rationale.

---

## 2026-06-04

- **Machine-readable paper mirrors:** Add Markdown/BibTeX mirrors for a first set of eight core research-program papers. Treat these as author-manuscript mirrors for accessibility, search, and LLM retrieval; canonical citation targets remain the linked DOI, publisher, LingBuzz, PhilArchive, arXiv, or Zenodo records.
- **Regeneration workflow:** Generate mirrors from local LaTeX sources with `scripts/generate-paper-mirrors.mjs` rather than editing generated Markdown by hand. The generator publicifies blind-review conditionals and normalizes known local citation aliases for citeproc.
