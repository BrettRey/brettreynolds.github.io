# CLAUDE.md

This file provides guidance to Claude Code when working with this project.

## Project Status

**Type:** Personal academic website
**Status:** Built, ready for deployment
**Domain:** brettreynolds.ca (registered with Cloudflare)

## Architecture

Plain HTML/CSS static site. No build step, no dependencies.

```
personal-website/
├── index.html           # Landing page (bio + links)
├── publications.html    # Full publication list
├── style.css            # Typography and layout
├── cv.pdf               # Downloadable CV
├── Brett_Reynolds.jpg   # Photo
├── CNAME                # GitHub Pages custom domain
└── docs/
    └── plans/
        └── 2026-01-02-website-design.md
```

## Typography

Matches Brett's LaTeX house style:
- **Font:** EB Garamond (Google Fonts), Georgia fallback
- **Links:** Maroon #800020
- **Headings:** Small caps
- **Dashes:** En-dash with spaces for parentheticals (never em-dashes)

## Deployment

1. Create GitHub repo `brettreynolds/brettreynolds.github.io`
2. Push all files
3. Enable GitHub Pages (Settings → Pages → Source: main branch)
4. Configure Cloudflare DNS:
   - CNAME record: `@` → `brettreynolds.github.io`
   - Or A records pointing to GitHub Pages IPs

## Updating Content

- **CV:** Replace `cv.pdf` with new version
- **Publications:** Edit `publications.html` directly (add `<li>` entries)
- **Bio:** Edit the `<p class="bio">` in `index.html`

## Multi-Agent Dispatch (MANDATORY)

Before dispatching multiple agents, ALWAYS ask Brett:
1. **Which model(s)?** Claude, Codex, Gemini, Copilot
2. **Redundant outputs?** Multiple models on same task for different perspectives?

See portfolio-level `CLAUDE.md` for CLI command patterns.
