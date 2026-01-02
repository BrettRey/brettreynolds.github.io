# Personal Website Design

**Date:** 2026-01-02
**Status:** Implemented

## Summary

Personal academic website for Brett Reynolds at brettreynolds.ca. Plain HTML/CSS static site hosted on GitHub Pages with Cloudflare DNS.

## Design Decisions

### Architecture: Plain HTML/CSS (not Hugo/Jekyll)

**Rationale:** For a 2-page site with infrequent updates, static generators add unnecessary complexity. Plain HTML won't break when dependencies update, is trivially portable, and can be edited in any text editor.

### Typography: EB Garamond + Maroon Links

Matches Brett's LaTeX house style:
- EB Garamond via Google Fonts (Georgia fallback)
- Link color: #800020 (maroon)
- Headings: small-caps
- Old-style numerals where supported
- En-dashes with spaces for parentheticals (never em-dashes)

### Layout: Two-Column Header

Photo floats left (~180px), name/bio flows beside it. Works well with portrait-orientation photo. Links displayed as inline list below.

### CV: PDF Only

No HTML version. Brett produces CVs in LaTeX; the PDF is the canonical artifact. Avoids maintenance burden of keeping two formats in sync.

### Publications: Grouped by Type

Sections: Books, Journal Articles, Preprints & Under Review, Conference Proceedings, Book Chapters, Educational Materials, Popular Writing. Chronological within each section.

## File Structure

```
personal-website/
├── index.html           # Landing page
├── publications.html    # Publication list
├── style.css            # Stylesheet
├── cv.pdf               # Downloadable CV
├── Brett_Reynolds.jpg   # Photo
├── CNAME                # GitHub Pages custom domain
├── CLAUDE.md            # AI assistant guidance
├── STATUS.md            # Project status
└── docs/plans/
    └── 2026-01-02-website-design.md  # This file
```

## Deployment Steps

1. Create GitHub repo `brettreynolds/brettreynolds.github.io`
2. Push all files (excluding CLAUDE.md, STATUS.md, docs/ if desired)
3. Enable GitHub Pages (Settings > Pages > Source: main)
4. Configure Cloudflare DNS:
   - Add CNAME record: `@` -> `brettreynolds.github.io`
   - Or use A records with GitHub Pages IPs
5. Wait for DNS propagation (~15 min to 24 hours)
6. Verify HTTPS works (GitHub Pages + Cloudflare handles this)

## Future Maintenance

- **Update CV:** Replace cv.pdf, commit, push
- **Add publication:** Edit publications.html, add `<li>` entry
- **Update bio:** Edit index.html `<p class="bio">`
- **Add page:** Create new .html file, link from index
