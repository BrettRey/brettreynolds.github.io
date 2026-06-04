# Machine-Readable Papers Plan
Date: 2026-06-04
## Goal
Add a machine-readable publication layer to `brettreynolds.ca` without changing the plain static-site architecture.
## Scope
Start with current research-program papers where Brett owns the author manuscript and the public preprint already exists:

- Not every stable cluster is homeostatic
- Effective without warrant
- What do we mean by _language_?
- English determinatives as nouns
- What English interjections let us predict
- Why clause structure is judged like tense and agreement
- LLMs as boundary phenomena
- Reference as a cluster concept

Older publisher-controlled final versions should not get full-text mirrors unless rights are clear.
## Implementation
1. Add `papers/<slug>/` pages with:

   - `index.html` as a compact landing page
   - `paper.md` as a Markdown author-manuscript mirror
   - `cite.bib` with one BibTeX record

2. Add `/llms.txt` as a curated agent-facing index.

3. Add `/papers/index.html` as a human and machine-readable list of mirrored papers.

4. Add `Markdown` links from `publications.html` for mirrored papers.

5. Add JSON-LD `ScholarlyArticle` metadata to the new paper landing pages.

## Conversion Policy
Use `pandoc` from local LaTeX sources where available, then add a short YAML header with title, author, year, status, canonical URL, website URL, version date, and keywords.

Do not claim these are publisher versions. Label them as author-manuscript mirrors or preprint mirrors.
## Verification
- Check every generated link exists.
- Open the static HTML locally.
- Confirm `/llms.txt` and the Markdown files are plain text and crawlable.
- Leave existing unrelated untracked files alone.
