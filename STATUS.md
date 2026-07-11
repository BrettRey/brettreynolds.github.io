# STATUS.md

## Current State

**Status:** Static site maintained for brettreynolds.ca
**Last updated:** 2026-07-09

### 2026-07-09 Session Notes
- Removed stale public "under review at Canadian Journal of Linguistics / Revue canadienne de linguistique" wording for the expert-grammaticality-judges paper after the 2026-07-09 CJL/RCL rejection. Public pages now show the paper as a preprint; the unlisted PM dashboard records the retarget/rebuild status.
- Rebuilt `personal/CV/main.pdf` and copied it to `cv.pdf` so the public CV no longer lists that paper as under review.

### 2026-07-07 Session Notes
- Removed stale public "under review at Glossa" status for the focus-modifiers squib after the 2026-07-07 Glossa rejection. Public pages now show the LingBuzz preprint only; the private dashboard marks the item rejected/parked and notes that Glossa is free for stronger future submissions.

### 2026-07-05 Session Notes
- Refreshed `dashboard-2b91a1.html` after Brett noticed missing projects. Item count expanded from 76 to 92 by adding public/research projects grounded in local `STATUS.md`/`CLAUDE.md` files, including announcement-drop, Bard magnitude-estimation reassessment, Bresnan dative validation, CGEL fragments, field-relative HPC categories, grammaticality judgments as detectors, semantic maps as bridge principles, countability for SEGU, and the Lingputation codebook registry.
- Second audit pass after Brett noted that 92 still was not complete: dashboard expanded from 92 to 110 by adding public-safe first-level omissions and real nested research subprojects, including CGELBank Lean formalization, the asterisk-de-idealized paper, etiological grammaticality, observer-interface, tree-independence polynomials, ABM exploration, autoresearch, English-Corpora.org wrapper, kindred/hpctools, pdf-to-md, UD English retagging, the JWLLP keynote, LLMs-and-truth-theories, and HPC Lean formalization.
- Added `Claim DAG Audit` as item 111 after creating the new standalone tool under `tools/claim-dag-audit/`.
- Kept private/admin/sensitive or non-dashboard material off the online surface: the private metaphysics/statistics WIP, evolutionary DAG workbench, SWF anonymizer, snapshots, generated worktrees, demos, and personal/Humber/admin folders. Local inventory notes are in `Project-Management/notes/dashboard-inventory-audit-2026-07-05.md` and `Project-Management/notes/full-project-inventory-2026-07-05.md`.
- Corrected stale dashboard statuses: SSHRC IDG is denied/closed; `Grammaticality de-idealized` is now LingBuzz 010118 and needs a journal venue; adversarial pragmatics is now arXiv 2607.01153 and needs a downstream venue choice; Glossa/Folia rows record the 2026-07-04 nudges. Superseded for Glossa focus-modifiers by the 2026-07-07 rejection/parked update above.
- The dashboard remains unlisted/noindex and still omits personal/private projects from the online surface.

### 2026-07-04 Session Notes
- Added `dashboard-2b91a1.html`: unlisted interactive PM dashboard (76 portfolio items; group/sort/filter/search; data hardcoded from PORTFOLIO.md as of 4 Jul). Unlisted posture: no inbound links, out of sitemap.xml and llms.txt, `noindex, nofollow` meta, tokened filename; repo is public, so the file is browsable on GitHub.
- Deploy hit a transient GitHub Pages "Deployment failed, try again later"; unstuck via forced Pages build + empty trigger commit (`74c581f`); page verified live.
- Dashboard is now a maintained surface in the `status-surface-update` skill (refreshes on every PORTFOLIO.md status change). Maintenance pointer added to this project's CLAUDE.md; decisions logged in DECISIONS.md.

## Completed

- [x] Design brainstorming and decisions
- [x] Typography system (EB Garamond, maroon links)
- [x] Landing page with photo and bio
- [x] Publications page (full list)
- [x] CV PDF added
- [x] CNAME file for custom domain
- [x] Machine-readable paper mirrors added for eight core papers
- [x] `llms.txt` added as an LLM-oriented site map
- [x] Public OKF export added under `/okf/` with raw bundle at `/okf/bundle/`
- [x] `robots.txt` and `sitemap.xml` added for crawler discovery

## TODO

- [ ] Regenerate paper mirrors after major manuscript updates
- [ ] Add additional papers once the first mirror layer has been checked in use

## Files

```
index.html           # Landing page
publications.html    # Publication list
papers/              # Machine-readable paper mirror index and per-paper mirrors
okf/                 # Public OKF landing page and generated public bundle
llms.txt             # LLM-oriented site map
robots.txt           # Crawler policy with sitemap pointer
sitemap.xml          # Minimal sitemap for key public surfaces
scripts/             # Local generation scripts
style.css            # Stylesheet
cv.pdf               # CV download
Brett_Reynolds.jpg   # Photo
CNAME                # Custom domain
```

## Session Log

- **2025-12-09:** Project folder created, initial plan (Hugo-based)
- **2026-01-02:** Redesigned as plain HTML/CSS. Built landing page, publications page, stylesheet. Ready for deployment.
- **2026-06-04:** Added Markdown/BibTeX mirrors for eight core papers, with per-paper landing pages and `llms.txt`.
- **2026-06-13:** Added public OKF export surface under `/okf/`, with generated public-safe bundle files under `/okf/bundle/` and discovery links from the homepage, papers index, and `llms.txt`.
- **2026-06-13:** Added `robots.txt` and `sitemap.xml` so the OKF page and bundle index are explicitly discoverable by crawlers.
- **2026-07-02:** Added `why-i-work-this-way.html` and linked it from `essays.html`, `sitemap.xml`, and `llms.txt`; kept the Markdown draft in `docs/drafts/why-i-work-this-way.md`.
