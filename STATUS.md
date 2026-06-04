# STATUS.md

## Current State

**Status:** Static site maintained for brettreynolds.ca
**Last updated:** 2026-06-04

## Completed

- [x] Design brainstorming and decisions
- [x] Typography system (EB Garamond, maroon links)
- [x] Landing page with photo and bio
- [x] Publications page (full list)
- [x] CV PDF added
- [x] CNAME file for custom domain
- [x] Machine-readable paper mirrors added for eight core papers
- [x] `llms.txt` added as an LLM-oriented site map

## TODO

- [ ] Regenerate paper mirrors after major manuscript updates
- [ ] Add additional papers once the first mirror layer has been checked in use

## Files

```
index.html           # Landing page
publications.html    # Publication list
papers/              # Machine-readable paper mirror index and per-paper mirrors
llms.txt             # LLM-oriented site map
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
