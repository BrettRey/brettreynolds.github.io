# Review: brettreynolds.ca homepage v2

**Reviewer persona:** Oliver Reichenstein (iA), reconstructed.
**Target:** `index-new.html` + `style-v2.css`, against `index.html`, `style.css`, `about.html`, `publications.html`.
**Date:** 2026-07-29

## Source-grounding notice, read this first

I am writing in the voice and priorities of a real, living designer. Everything
below that sounds like a position of his is **my reconstruction**, inferred from
the one thing the brief actually establishes: that he published an essay titled
"Web Design is 95% Typography" (iA, 2006). I have not read that essay in this
session and I quote nothing from it. No sentence below should be attributed to
Oliver Reichenstein in print, in a talk, or in a footnote without you reading
the original and confirming it. Treat the persona as a lens, not a source.

I cannot run a browser. Every pixel figure below is **computed from the CSS**,
not measured from a rendering. I show the arithmetic so you can check it. Base
is `html { font-size: 18px }`, so 1rem = 18px throughout.

---

## 0. The question you actually asked

You said you were happy with the typography and asked whether "a more radical
design issue" was holding the page back. That question has a hidden premise:
that typography is one thing (fonts, sizes, the look of the words) and design is
another, bigger thing sitting behind it.

On a page like yours, that premise is close to false, and it is the reason the
redesign came back with an answer that sounds structural and is not.

Your homepage has no imagery except a portrait, no product, no interface, no
data, no motion. It is text. On a text page, nearly everything a designer
controls *is* typography, once you stop using that word to mean "which face and
what size" and start using it the way typographers do: the organisation of text
in space. Size, weight, case, colour, measure, leading, the intervals between
blocks, the order in which the eye takes things. Macro-typography is layout.
Layout is macro-typography. There isn't a separate discipline underneath.

Now look at the six moves the redesign made:

1. Promote a sentence to a display line. (Type size.)
2. Name the programme on the page. (Copy.)
3. Two content columns instead of a flat link row. (Macro-typography.)
4. A lighter third band. (Type size and colour.)
5. Tier the nav into two rows. (Type size and colour.)
6. Cap the measure at 31em. (Measure, the oldest typographic parameter there is.)

Five of six are typography. The sixth is writing. Not one of them is structural
in any sense that a typographer would call non-typographic.

So, adjudicating your question directly:

- **Your framing was wrong, but your instinct was right.** You were correct that
  the problem wasn't the font, the maroon, or the small caps. You were wrong to
  conclude from that that the problem must therefore live somewhere other than
  typography. The hierarchy is typography, and the hierarchy was the problem.
- **The redesign's answer, "the page is flat, not heavy," is correct as a
  diagnosis and misleading as a label.** "Flat" is a typographic word. It means
  insufficient contrast between levels. The old page had one type size doing the
  work of five, and that is exactly what "flat" describes.
- **Yes, the redesign fixed a typographic problem while calling it a structural
  one.** That mislabelling is not a harmless naming quibble. It let both parties
  off the hook. You get to keep "I'm happy with the typography." The redesign
  gets to claim a radical diagnosis. And the thing that genuinely *is*
  structural, the information architecture, went untouched. Section 3 is about
  that.

There is also a second-order problem: having fixed the top of the page
typographically, the redesign then rebuilt the flatness lower down without
noticing. Details in §3.1.

---

## 1. What this design is doing, in plain language

Credit where it is due, because several of these moves are right.

**It changes the page from a list into a sequence.** The old page was one
undifferentiated block: photo, name, 202-word bio, a research-focus line, then
13 links in a centred flex row at one size. Everything arrived at once. The new
page gives the reader four stops in order: who, what question, the two bodies of
work, the utilities. That is a real improvement and it's the main thing the
redesign got right.

**It introduces a first-read.** `.thesis-line` at `2rem` (36px), regular case,
`line-height: 1.25`, against body text at 18px, is a 2:1 size ratio. That is
enough contrast to create an unambiguous entry point where there was none. Good.

**It builds a repeatable citation unit.** Inside each door, every item is
title / gloss / where-to-find-it, with the "where" row set small (`0.85rem`) and
subtle. That pattern is the best thing on this page. It's honest, it scales to
81 publications, and it should become the site's standard object.

**It caps the measure.** `--measure: 31em`, applied at each block's own font
size, gives roughly the same character count per line in every block regardless
of that block's size. That is the correct way to express a measure. Your comment
in the CSS estimates ~68 characters; for a Garamond at 2.2 to 2.5 characters per
em, 31em lands somewhere around 68 to 78. Close enough, and a large improvement
on the previous ~100.

**It de-escalates the utilities.** Two rows, 1rem and 0.85rem, with the second
in `--muted` rather than maroon. Correct instinct.

What it is *not* doing, which matters: it is not reorganising the site, it is
not reducing the number of things on the page, and it is not touching any page
other than the homepage and one new bio page.

---

## 2. The claim the layout makes, and whether it survives

The layout makes a specific, checkable claim, and you should know what it is,
because it is not the claim your prose makes.

**Two equal columns, side by side, under one thesis, is the standard visual
grammar for "these are two comparable things."** Parallel columns say: compare
these. Same weight, same width, same internal structure, different content.
The reader's default reading of `grid-template-columns: 1fr 1fr` is parity and
plurality. Two things.

Your thesis sentence says something else. It says "the same question turns out
to be the useful one in two places." That is a claim of *unity*, not parity. One
question, two applications.

**The layout therefore argues against the sentence sitting 40px above it.** You
wrote "one question." You drew "two programmes." A reader who takes the picture
seriously concludes that Brett Reynolds does AI evaluation and also does
linguistics, which is precisely the sprawl you set out to cure, now in a tidier
grid.

Two further ways the parity claim fails on contact:

**The evidence is not 50/50.** `publications.html` lists 81 items across eight
sections (Books 4, Journal Articles 17, Preprints and Under Review 39,
Proceedings 5, Talks 5, Chapters 5, Educational 4, Popular 2). Generously
counted, five to seven of those are AI-evaluation work. The homepage asserts a
50/50 split over a body that is closer to 10/90. That's a defensible rhetorical
choice about where you're going rather than where you've been, but it dies on
the second click: a visitor who believes the doors and then clicks "Publications"
lands on a page with no thematic grouping at all, eight genre headings, and 39
preprints in one undifferentiated list. The homepage promises an architecture the
next page doesn't have.

**The columns aren't even.** The AI door has four items, the linguistics door
has five. In a two-column grid with independent content flow, the shorter column
just ends, leaving a hole of roughly one item's height (I estimate 60 to 90px)
before `.strip` begins. The column you want read first is the one that visibly
runs out. At the pixel level the layout says linguistics is the larger
programme. That happens to be true, and it contradicts the parity you drew and
the priority you intend.

---

## 3. What the diagnosis missed

This is the section that matters. Nine findings, roughly in order of how much
they cost you.

### 3.1 The page is still flat below the fold, and the redesign built the new flatness

Here is every distinct font size on `index-new.html`, computed from the CSS at
1rem = 18px:

| px | rem | element |
|---|---|---|
| 36.0 | 2 | `.thesis-line` |
| 32.4 | 1.8 | `h1` |
| 18.9 | 1.05 | `.thesis p` |
| 18.0 | 1 | `.door h2`, `.work .title`, `.utility` |
| 17.6 | 0.98 | `.door > p` |
| 17.1 | 0.95 | `.id .tagline`, `.strip h2`, `.strip p`, `.strip ul` |
| 16.2 | 0.9 | `.work .gloss` |
| 15.3 | 0.85 | `.work .where`, `.utility-secondary`, `footer` |

Eight sizes. Two of them (36, 32.4) are at the top. The other six all live
between 15.3px and 18.9px, and four of those six (18.9, 18.0, 17.6, 17.1) sit
within 1.8px of each other. `.door h2` at 18px against `.door > p` at 17.64px is
a 2 percent difference. No reader perceives that as a level.

That is not a type scale. It is a cluster with two outliers. Below the display
line, size does no sorting at all, so colour and case have to carry the whole
hierarchy on their own. The redesign fixed the flatness at the top of the page
and reproduced it, in finer grain, everywhere else.

Two hierarchy inversions fall out of this directly:

- **`.strip h2` (17.1px, `--muted`) is smaller than `.door > p` (17.64px,
  `--muted`).** A section heading set smaller than the body text of the section
  above it reads as a caption. Meanwhile it is still an `<h2>`, so the semantic
  outline claims parity with the doors while the visual claims subordination.
  Screen readers and search engines get one story, sighted readers get another.
- **`.door h2` (18px) is exactly the same size as `.work .title` (18px, which
  inherits from body).** The heading of a column and the items inside it are
  typographically identical in size. Only small caps and maroon separate them.

### 3.2 The number of choices went up, not down

You asked whether the load dropped. Count it.

| | old `index.html` | new `index-new.html` |
|---|---|---|
| total `<a href>` | **20** | **32** |
| links inside prose/bio | 6 | 0 |
| work links in doors | 0 | 14 |
| grammar strip | 0 | 5 |
| utility, primary row | 13 (one flat row) | 5 |
| utility, secondary row | 0 | 8 |
| contact | 1 (standalone) | folded into primary row |

The old page had 13 nav links. The new page has **exactly 13** utility links
(5 + 8). Three of the old 13 (CGEL correctives, CGELBank, English
Constructionary) moved into the strip, and three new ones arrived (About,
llms.txt, and the mailto folded in from below). Nothing was cut. The flat nav
was not replaced by two doors. **The doors were added on top of the flat nav,
and the nav was then split in two.**

Net: 20 links to 32, a 60 percent increase in decidable targets.

What genuinely improved is the *first* decision. The first screenful now has
fewer competing targets, so the reader's opening choice is cheaper. That is
worth having, and I'd keep it. But call it what it is: **sequencing, not
focus.** The redesign told itself it had reduced choice, and that story is
probably the reason no cutting happened. Nothing on this page was deleted.

### 3.3 The information architecture, the thing you actually complained about, is untouched

You said the site "is trying to do too many things, and it's sprawling a little."
"Sprawling" is an IA word, not a typography word. Here is the sprawl, from the
filesystem.

The site currently runs at least **five uncoordinated organising schemes**:

1. **By genre:** `publications.html` (81 items, 8 genre headings), `essays.html`
   (7 essays, each a root-level HTML file), talks buried inside publications.
2. **By format:** `papers/` (21 Markdown mirror directories), `okf/` (an OKF
   bundle), `llms.txt` (a machine index), `cv.pdf`.
3. **By project:** `language-landscapes/`, `acceptability/`, `hume-enquiry/`,
   `indigenous/`, `media/`.
4. **By theme, new today:** two doors plus a strip.
5. **Unfiled:** `valley-hunt.html`, `first-descent.html`,
   `cgel-correctives.html`, and three slide decks (`jwllp-slides.html`,
   `wrapp-slides.html` at 6.5 MB, `reciprocals-slides.html` at **21.8 MB**),
   reachable only from inside `publications.html`.

"Adversarial Pragmatics for AI Safety Evaluation" now has **six addresses**: the
homepage door, `publications.html`, `papers/adversarial.../`, that directory's
`paper.md`, the OKF bundle, and `llms.txt`. Your sitemap lists four of them
separately. The redesign added a seventh entry point and retired none.

Two consequences worth naming:

- **The homepage now sends people away as its primary action.** Of the 14 work
  links in the doors, 8 go to arXiv, PhilArchive, LingBuzz, or GitHub. The site's
  own copies are labelled **"Mirror."** That word tells the reader the on-site
  page is the photocopy. Your `llms.txt` confirms this is deliberate, not sloppy:
  every entry ends "Canonical record: https://arxiv.org/... " or similar. Fine,
  that's a coherent position, offsite repositories are canonical and this site is
  a signpost. But then the doors are built wrong. They're designed like a
  portfolio you dwell in, on a site whose declared job is to point elsewhere. Pick
  one. If the site is a signpost, the doors should be denser and terser. If the
  site is where the work lives, stop calling your own pages mirrors.
- **The measure fix was applied where there's the least prose and skipped where
  there's the most.** `--measure` reaches exactly three selectors: `.thesis p`,
  `.strip p`, `.prose`. Every essay page still uses `.essay-content p`, which has
  **no max-width**, sits inside `body { max-width: 800px }`, and is set
  `text-align: justify; hyphens: auto`. So your seven essays, the only pages on
  the site where anyone reads continuously for more than a minute, are still
  justified at ~100 characters. The site now has two typographic standards: 68
  characters on two pages, 100 characters on twenty. If measure was worth fixing,
  it was worth fixing on the essays first.

### 3.4 The homepage no longer says who you are or where you work

`index-new.html` contains no mention of Humber, the University of Toronto, or
any title. I grepped: the single match for "humber" is inside the mailto
address. The bio moved wholesale to `about.html`, taking both institutional
links with it.

One of your four stated audiences is "hiring committees, grant panels, journal
editors." Those readers have one question on arrival and it is not "what does a
label license you to infer." It is "is this person real, and where are they." The
new homepage answers with a name, a face, three words, and a rhetorical question.

You do not need the 202-word bio back. You need one line, under the tagline, at
roughly `0.95rem` in `--muted`: linguist at Humber Polytechnic, adjunct professor
of linguistics at the University of Toronto, with those two links restored. That
costs one line of vertical space and recovers an entire audience.

### 3.5 Shipping bug: `about.html` back-links point at a file that will not exist

`about.html` lines 15 and 74 both link to `index-new.html`. When you promote
`index-new.html` to `index.html`, both go 404. Meanwhile `publications.html` and
`essays.html` still link back to `index.html`, which will then be the new page.
The back-link graph is inconsistent across the cutover.

Also: `about.html` is not in `sitemap.xml`, not in `llms.txt`, and not linked
from any page other than `index-new.html`. You have moved your entire biography
to an orphan that no crawler will find. Grep confirms the only real inbound
reference is `index-new.html` itself.

### 3.6 The portrait is a 1.2 MB image displayed at 110px

`Brett_Reynolds.jpg` is **1395 × 2093 pixels, 1,214,919 bytes**, rendered by
`.id .photo img { width: 110px }` at 110 CSS px wide, so about 165px tall at its
0.667 aspect ratio.

At 1x that's roughly 240× more pixel data than the slot needs. At 2x DPR it's
still around 60× too much. This single file is, by a very wide margin, the
heaviest thing on the page, and it will be your Largest Contentful Paint on any
connection that isn't a local disk.

Fix: export at 220 and 330 CSS px wide (2x and 3x), serve with `srcset`, ship
WebP or AVIF with a JPEG fallback, and add explicit `width`/`height` attributes
so the browser reserves the box and the header doesn't jump. Target under 30 KB.
You will not see the difference; every visitor will.

### 3.7 The font loading is the worst available option

`style.css` line 6:

```css
@import url('https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&display=swap');
```

Three problems, in order of severity.

**It serialises the critical path.** An `@import` inside a stylesheet cannot
start until the browser has downloaded and begun parsing that stylesheet. So the
chain is: HTML → `style.css` → `fonts.googleapis.com/css2` → `fonts.gstatic.com/*.woff2`.
Four sequential hops, with two extra DNS lookups and two extra TLS handshakes,
none of which can begin until the previous one finishes. Moving the same request
to `<link rel="preconnect">` plus `<link rel="stylesheet">` in `<head>` would let
hops two and three overlap. That's a well-established property of `@import`, not
a matter of taste.

**It's a third-party dependency you don't need.** Every page view sends the
visitor's IP address and a `Referer` header to Google, for two font files. Under
GDPR this has been litigated in Germany; whether it exposes you in Canada is a
question for someone else. I'll put it differently, in your own terms: you are
building a research programme about making inferences explicit enough to contest,
and about audit, challenge, and remediation. Shipping a silent third-party call
for a typeface is a small inconsistency, but it is one, and it's free to remove.
Self-host two `.woff2` files (regular and italic), preload them, and the chain
collapses to one hop from your own origin.

**You're loading faces you don't use.** The URL requests five: 400, 500, 600,
italic 400, italic 500. On this page I can account for 400 (body, headings),
italic 400 (the `<em>` titles and journal names), and 600 (matched from
`<strong>projectibility-first</strong>`, which requests 700 and gets 600 because
700 wasn't loaded, so your one bold word on the page is lighter than a bold
should be). Weight 500 appears only in `.pub-year` and `.cluster-title`, neither
of which is on this page. **Italic 500 appears nowhere in either stylesheet.**
Drop 500 and italic 500 and you drop two font files site-wide.

**Verify before shipping:** your entire visual identity rests on small caps
(`h1`, `h2`, `h3`, `.smallcaps`, `.ref-heading`). `font-variant: small-caps`
only produces real small caps if the served font binary carries the `smcp`
OpenType feature. If it doesn't, browsers *synthesise* them by scaling capitals,
which at `h1`'s 32.4px with `letter-spacing: 0.1em` looks visibly thin and wrong
next to the true caps of "BR". I cannot check this without a browser. Load the
page, zoom `h1` to 400 percent, and compare the "B" against the "RETT". If the
strokes of the small letters are lighter than the capital's, they're fake, and
you need a font that ships real small caps or you need to stop using them at
display size.

### 3.8 Colour is carrying the hierarchy, and it inverts

Computed contrast ratios on the light theme (`--bg: #fafafa`), my arithmetic:

| colour | ratio | used for |
|---|---|---|
| `--text` #222 | 15.2:1 | `.work .title`, body |
| `--link` #800020 | 10.4:1 | all links, `.door h2` |
| `--muted` #555 | 7.1:1 | **`.thesis p`**, `.door > p`, `.strip`, `.utility-secondary a` |
| `--subtle` #888 | 3.4:1 | `.work .where`, `footer` |

Your central explanatory paragraph, the one the whole redesign exists to
introduce, is set in the same grey as a de-emphasised secondary nav row. It sits
at 7.1:1 while a link reading "CV (PDF)" sits at 10.4:1 and a paper title sits at
15.2:1. Grey means "less important" everywhere else on the page. You have muted
the thesis and left the utilities at full strength.

Two more colour notes:

- **`--subtle` at 3.4:1 fails WCAG AA** (which wants 4.5:1 for text under 18.66px
  bold / 24px regular). This is live in your footer right now, at 15.3px. It
  doesn't currently bite in `.work .where` because every child there is a link
  and inherits maroon, but the moment you add plain text to a `.where` row it
  will. This is inherited from `style.css`, not introduced by v2, but fix it
  while you're in there. `#767676` clears 4.5:1 on `#fafafa`.
- **`.utility-secondary a` is `--muted` #555, the same colour as body prose, with
  `text-decoration: none`.** Nothing distinguishes those eight links from
  ordinary text except being in a row. Underline them, or use maroon at a smaller
  size.
- **Check dark mode.** `--link` flips from maroon `#800020` to pink `#ff9fb8`.
  In dark mode your two door headings become bright pink small caps on near-black.
  Maroon reads as sober and institutional; that pink does not read the same way.
  If colour is going to carry your hierarchy, it has to hold its register in both
  themes.

### 3.9 Smaller things, all real

- **Three first-reads compete in the header.** The portrait (an image, highest
  salience), `h1` at 32.4px small caps with 0.1em tracking, and `.thesis-line` at
  36px. The thesis line is *larger than your name*. That may well be right for
  this page, but it's currently unresolved rather than decided: the eye lands on
  the photo, then has to choose between two large text objects.
- **`.id { align-items: center }` centres a ~165px portrait against an ~80px text
  block** (h1 at 32.4px × 1.6 leading ≈ 52px, plus tagline ≈ 27px). Your name
  floats in the middle of the picture instead of aligning to its top or its
  cap-height. Use `align-items: flex-start` with a small top offset, or crop the
  portrait square.
- **Four different right-hand edges, one left edge.** Computed:
  `.doors`/`.id`/`nav`/`hr` at 764px, `.thesis-line` capped at 720px (20em ×
  36px), `.thesis p` at 585.9px (31em × 18.9px), `.strip p` at 530.1px (31em ×
  17.1px). Nothing on the right ever lines up with anything else. The page has a
  hard left margin and a soft, ragged, four-position right one. Pick two: one for
  full-width elements, one for prose.
- **The doors-to-strip gap is too small for a change of column structure.**
  Margins collapse to max(1rem, 2rem) = 36px between them, while the
  thesis-to-doors gap is 49.5px and the gap between items *inside* a door is
  18px. A reader scanning the right column will read `.strip` as a continuation
  of it. Add a rule or double the space.
- **Two different mobile breakpoints.** `style.css` uses `max-width: 600px`,
  `style-v2.css` uses `max-width: 640px`. Between 601 and 640px the v2 rules fire
  (doors collapse, `.id` stacks) while the base rules don't (`html` stays at
  18px). That band is in a mixed state. Unify on one number.
- **`.focus` has no CSS rule anywhere.** It's on `index.html` line 23 and does
  nothing. Dead already; make sure it doesn't survive the cutover.
- **The tagline no longer reconciles.** "AI evaluation · Assurance · Linguistics"
  is three items. Below it are two doors, and a thesis saying it's really one
  question. Three, two, one, in 300px of vertical space. "Assurance" has no door.
- **Semantics.** The doors' content is `<span class="title">` and
  `<span class="gloss">`, with no headings, no `<cite>`, no microdata. On a site
  that maintains `llms.txt`, an OKF bundle, and 21 Markdown mirrors specifically
  because you care about machine readability, the human-facing primary content
  surface is untyped spans. `<cite>` costs nothing. So does
  `<nav aria-label="Main">` / `<nav aria-label="Elsewhere">` on those two lists,
  which currently have no accessible names. `<section class="thesis">` has no
  heading, so it's an unnamed region; make it a `<div>`.
- **The lead marker is a hairline.** `.work li.lead` differs from its siblings
  only by a 2px left border changing from `--rule` #ddd to `--link` #800020, in a
  ~360px column. If the lead item is the one you want read, give it space or size,
  not a 2px colour change.

---

## 4. Alignment audit

**Visuals.** The top 400px is well made and decisive. Below that, the design
stops making decisions and starts making distinctions too fine to see: six type
sizes inside a 3.6px band, three greys, and a section heading smaller than the
body text above it. The visual system is two systems, a confident one for the
hero and a hesitant one for everything else, and the join is visible at the
doors. Where visuals diverge from the rest: they promise a resolved hierarchy
and deliver one only at the top.

**Text.** The copy is the strongest part of this redesign. "What does a label
license you to infer?" is a genuinely good display line, concrete, answerable,
and short enough to hold one line at 36px (I estimate ~670px against a 720px cap,
so it should just fit, but check it, because if it wraps `text-wrap: balance`
will split it into two roughly even lines). The door paragraphs earn their space.
Where text diverges: the thesis says "one question," the layout says "two
programmes," and the tagline says "three fields." Three different counts of what
you do, within one screen.

**Audience.** The page serves AI-safety readers arriving from arXiv very well:
they land, see the question, see the arXiv paper first in the left column with a
walkthrough and an adjudication app. It serves linguists and philosophers well
enough. It serves the grammar/TESL/CGEL audience badly: *A Student's Introduction
to English Grammar* (CUP, with Huddleston and Pullum) is almost certainly the
best-known thing you have made and the largest single source of arriving
attention, and it appears as a bare 17.1px muted link in a five-item row below
the fold, with no co-authors, no publisher, no year, no gloss, while a preprint
under review gets a maroon rule and three lines of description. And it serves
hiring committees, editors, and grant panels worst of all, because the page no
longer states where you work (§3.4). The layout ranks by your current interest
rather than by the visitor's likely reason for arriving. That is the designer's
problem being solved instead of the reader's.

**Purpose.** Your stated purpose is to show a reframing of two fields as one
programme, while prioritising the AI work. The page half-achieves the first and
undercuts it with a two-column figure that means "two things." It achieves the
second in reading order and undercuts it in the pixels, because the AI column is
the shorter one and ends in white space. And the deeper purpose you named, fixing
the sprawl, is not addressed at all: the homepage got better and the site got one
page longer and twelve links denser.

---

## 5. Specific fixes, ordered by impact

**1. Decide what the two columns mean, then draw that. (`index-new.html`,
`style-v2.css`)**
If the claim is "one question, two applications," stop using parallel columns,
which read as "two things." Run a single column: thesis, then "Asked of AI
systems" with its items, then "Asked of linguistic categories" with its items,
each preceded by a short restatement of the shared question in that field's
vocabulary. One spine, two worked answers. If you keep the grid, then drop the
unity claim from the thesis and say "two fields, one method," which is what the
grid actually draws. Either is defensible. The current pairing is not.

**2. Rebuild the type scale. (`style-v2.css`)**
Collapse eight sizes to four: 2rem (thesis line), 1.25rem (`h1` and any true
section heading), 1rem (all body and item titles), 0.85rem (all metadata,
"where" rows, secondary nav, footer). Delete 1.05, 0.98, 0.95, 0.9 entirely.
Handle everything the deleted sizes were doing with colour, case, and vertical
space. Specifically: `.strip h2` must not be smaller than `.door > p`
(currently 17.1 vs 17.64), and `.door h2` must not equal `.work .title`
(currently both 18).

**3. Un-mute the thesis paragraph. (`style-v2.css` line 54)**
`.thesis p { color: var(--muted) }` should be `var(--text)`. It's the most
important prose on the site and it is currently the same grey as your secondary
nav row, and lower contrast (7.1:1) than a "CV (PDF)" link (10.4:1). If you want
it softer than the doors' prose, mute the doors instead.

**4. Put your affiliation back on the homepage. (`index-new.html`, after line 20)**
One line under the tagline, `0.95rem`, `--muted`, with the Humber and U of T
links restored from the old bio. Currently the word "Humber" appears on your
homepage only inside an email address.

**5. Fix the cutover before you ship. (`about.html` lines 15 and 74,
`sitemap.xml`, `llms.txt`)**
Both back-links point to `index-new.html` and will 404 the moment you rename.
Add `about.html` to `sitemap.xml` and to `llms.txt`; it is currently reachable
only from a file that will not exist. Decide the rename order and check every
`index.html` / `index-new.html` reference across the tree first.

**6. Resize the portrait. (`Brett_Reynolds.jpg`, `index-new.html` line 16)**
1395 × 2093 at 1.2 MB, displayed at 110px. Export 220px and 330px versions,
serve with `srcset`, add explicit `width`/`height`, prefer AVIF or WebP. Target
under 30 KB. This is your LCP and it is roughly 40× oversized.

**7. Fix the font loading. (`style.css` line 6, `index-new.html` `<head>`)**
Delete the `@import`. Self-host `EBGaramond-Regular.woff2` and
`EBGaramond-Italic.woff2`, declare them with `@font-face` and
`font-display: swap`, and `<link rel="preload" as="font" crossorigin>` both. If
you insist on staying with Google Fonts, at minimum move it to `<link>` tags in
`<head>` with `preconnect` to both `fonts.googleapis.com` and
`fonts.gstatic.com`. Drop weights 500 and italic 500 either way; italic 500 is
used nowhere in either stylesheet. And verify whether your small caps are real
(§3.7), because your entire identity depends on the answer.

**8. Apply the measure where the reading happens. (`style.css` around line 383)**
Add `max-width: var(--measure)` to `.essay-content`, and while you're there
consider dropping `text-align: justify`. Justified text at ~100 characters with
`hyphens: auto` in a Garamond at 18px produces uneven word spacing and rivers.
Ragged right is the safer default for HTML, which has no real justification
engine.

**9. Separate the strip from the doors. (`style-v2.css` line 127)**
36px between a two-column band and a one-column band is not enough. Either add
`border-top: 1px solid var(--rule); padding-top: 1.5rem` or raise the margin to
3.5rem. Right now the strip reads as more of the right-hand column.

**10. Cut links, actually cut them. (`index-new.html` lines 148 to 157)**
The secondary row is eight items and you added it while telling yourself you were
reducing choice. `llms.txt`, `OKF export`, and `Machine-readable papers` are
three separate entries for one idea: machine-readable versions of the work. Fold
them into one link to `papers/` and let that page carry the other two. `GEAP 103`
is a course repo; it belongs on a CV, not a homepage. That takes 8 to 5 and the
page total from 32 to 29.

**11. Housekeeping and a11y. (several files)**
`align-items: flex-start` on `.id`. Unify the 600px/640px breakpoints.
`aria-label` on both `<nav>` lists. `<section class="thesis">` to `<div>`.
`--subtle` from #888 to #767676 for AA. Underline `.utility-secondary a`.
Delete the dead `.focus` class. And clear the build litter out of the web root:
`ai-pilot-proposal.aux`, `.log`, `.out`, `.tex`, `humber-ai-day-2025.aux/.log/.out`
are all being served publicly right now, including a 124 KB LaTeX log.

---

## 6. Verdict

**Ship with named fixes (1 through 7), and then do the structural work you
actually asked about, which this redesign did not do.**

The page in front of me is better than the page it replaces. The sequencing is
right, the display line is good, the citation pattern is the best thing on the
site and should propagate. I would not go back.

But be clear about what happened. You asked whether something more radical than
typography was wrong. The answer came back "the page is flat, not heavy," which
is a typographic diagnosis in a structural costume, and the fix that followed was
five-sixths typography. It worked, at the top of the page. Below the fold it
rebuilt the same flatness at a finer grain, put your central paragraph in the
grey reserved for de-emphasis, and left your name and affiliation off your own
homepage.

Meanwhile the genuinely structural problem, the one your own word "sprawling"
named, is exactly where it was this morning: five organising schemes, one paper
with six addresses, 81 publications in eight genre buckets with no thematic
grouping, a measure fixed on the two pages with the least prose and untouched on
the twenty with the most, and a new orphan bio page nothing links to. The
homepage got a better front door. The house is unchanged.

The next piece of work is not another homepage. It is deciding what the canonical
address of a Brett Reynolds paper is, restructuring `publications.html` around
the two or three questions you actually work on rather than around journal
genres, and then letting the homepage point at that. Do that, and the two doors
will have somewhere to lead. Right now they open onto a list of 39 preprints in
alphabetical-by-accident order, and the reader who believed the front page finds
out on the second click that the programme it promised isn't visible anywhere
else on the site.
