# Review: brettreynolds.ca homepage redesign

**Reviewer persona:** Ellen Lupton (reconstructed)
**Target:** `index-new.html` + `style-v2.css` over `style.css`
**Date:** 2026-07-29

---

## A note on the voice before anything else

I'm writing in a reconstruction of Ellen Lupton's priorities, not quoting her.
The commitments I work from here (hierarchy is the first job of typography; a
grid is a structure for meaning and not only for alignment; type is an
interface; a page has to teach a reader how to read it; accessibility is a
design property rather than a compliance checklist) are my characterisation of
her position from *Thinking with Type* and the design-writing tradition it sits
in. Nothing below should be quoted as her words or attributed to a page of her
book. If you want a citable version of any principle here, verify it against
the book directly.

Second caveat, per your instructions. I can't run a browser. Every dimension
below is arithmetic from the CSS, and I mark inferences as inferences. Where I
estimate line counts I assume an average lowercase advance near 0.45 em for EB
Garamond, which is typical for a Garamond-class face but which you should check
by eye. Contrast ratios are computed from the declared hex values using the
WCAG relative-luminance formula, so they're calculations rather than
measurements, and they're exact given the colours you declared.

---

## 1. What this design is doing

Here's the vocabulary, and then the description.

**Hierarchy** is the order in which a page hands you its parts. It's created by
size, weight, colour, position, and space. A page with good hierarchy tells you
where to start, what's second, and what you can skip. A flat page makes you
read everything at the same volume, which in practice means you read nothing.

**Measure** is line length. Roughly 45 to 75 characters is comfortable for
continuous reading. Below 45 the eye returns too often; above 80 it loses its
place on the return sweep.

**Scale** is the set of sizes a page uses. A scale works when adjacent steps
differ enough to be seen as different. Two sizes 2 % apart aren't two steps,
they're one step with a rendering inconsistency.

**Squint test.** Blur the page until you can't read words, only shapes. What's
left, in order, is your real hierarchy. Everything else is a hope.

Now the page.

The old homepage had one loud element (your name) and then a wall at one
volume: a 202-word bio, a keyword line, and thirteen navigation links, all at
18 px. The diagnosis that it was flat rather than text-heavy is correct, and
I'll say so plainly because most of what follows is criticism.

The new page does six things.

1. It shrinks the identity block. The photo goes from 180 px wide to 110 px,
   and the bio moves out to `about.html`. The top of the page becomes a name, a
   three-word tagline, and a picture.
2. It promotes a question to display size. `.thesis-line` at 2 rem (36 px),
   regular weight, ordinary lowercase (`font-variant: normal` cancels the
   site's small caps), with `text-wrap: balance` and a 20 em cap so it can't
   run the full column width.
3. It splits the middle of the page into a two-column grid, `1fr 1fr` with a
   2.5 rem gutter. Each column gets a small maroon heading, a grey paragraph of
   argument, and a list of work. One item per column carries a maroon left
   border (`.work li.lead`), the rest carry a pale grey one.
4. It adds a third band below, `.strip`, set entirely in grey at 0.95 rem, with
   its links in a horizontal flex row.
5. It splits the old thirteen-link navigation into two rows: five links at
   1 rem in maroon, then eight at 0.85 rem in grey.
6. It caps prose measure at 31 em. Because `em` resolves against each element's
   own font size, that's about 586 px in the thesis, 530 px in the strip, and
   558 px on the about page, which is the correct behaviour: constant in
   characters, variable in pixels.

The information architecture underneath is: identity, claim, two bodies of
work, a lighter third body, then utilities. That's a sound sequence for a
research site, and it's a real improvement on identity, biography, undifferentiated
links.

**Things it gets right, said properly before I attack it.**

Promoting one buried sentence to display size is the single best decision here.
Your old bio's argument was in its third sentence, behind two sentences of job
title. Moving it to 36 px is the right instinct and the right sentence.

The `.lead` device is cheap and effective. One maroon rule per column, marking
the entry point, costs two lines of CSS and does something a reader can act on.

The measure cap was overdue. At 800 px the old bio ran near 100 characters a
line, which is past the point where readers lose the return sweep.

`.thesis .named` pulling **projectibility-first** back to full contrast inside
a grey paragraph is a subtle move and the right one.

The dark theme is properly built, with `prefers-color-scheme` and a
`data-theme` override and a real toggle with `aria-pressed`. That's more care
than most academic sites take.

---

## 2. The claim the layout makes, and whether it survives

The layout makes three claims. Two hold and one doesn't.

**Claim A: the programme is the entry point, not the person.** Rendered by
shrinking the photo and bio and enlarging the question. It nearly holds, and
Section 3 explains where it breaks.

**Claim C: the descriptive and pedagogical work is a third tier.** Rendered by
`.strip` in grey at 0.95 rem below both columns. It holds. Whether you want it
to hold is a separate question I raise below.

**Claim B is the one that fails.** Your prose says the two bodies of work are
*the same question asked twice*. That's a claim of identity. The layout renders
*parallelism*: two equal columns, side by side, with a gutter between them.

Those are different claims. Parallelism says "here are two related things,
choose one." Identity says "these are one thing with two faces." The visual
grammar for identity is shared structure across the gutter: a rule spanning
both columns, a shared label above the pair, matched baselines, a single
sentence bridging them, numbering that runs 1 and 2. This page has none of
that. `.doors` is a bare `display: grid` with no border, no spanning element,
no cross-column alignment beyond the top edge of the first row.

Worse, the columns diverge immediately. The left intro paragraph runs about 270
characters, the right about 240. At roughly 45 characters per line in a 359 px
column (arithmetic: 764 px content minus a 45 px gutter, halved), that's about
six lines against five. So the first work item in the left column starts about
28 px lower than the first item on the right, and nothing aligns again for the
rest of the page. The grid asserts two peers and then can't keep them level.

The result is that the identity claim lives entirely in one sentence of grey
18.9 px prose that a scanning reader will skip. The layout, which is the part
that gets read first and read by everyone, contradicts it.

There's a second, smaller failure in Claim A. The display element is a
*question*. "What does a label license you to infer?" is the loudest thing on
the page, and the answer to it is in grey at half the size. Display type
usually carries the assertion. Here it carries the setup, and the payoff is
demoted. A reader who reads only the largest text on your homepage leaves
knowing you have a question, not what you think.

---

## 3. What the diagnosis missed

This is the section that matters. Nine findings, roughly in order of severity.

### 3.1 The hierarchy inverts on mobile. This is a bug, not a preference.

`style-v2.css` sets `.thesis-line { font-size: 1.6rem }` inside
`@media (max-width: 640px)`. `style.css` sets `html { font-size: 16px }` inside
`@media (max-width: 600px)`. `h1` stays at 1.8 rem throughout.

Below 600 px, therefore: root is 16 px, `h1` computes to 28.8 px, and
`.thesis-line` computes to 25.6 px. **The name is 12.5 % larger than the
thesis.** Between 601 and 640 px it's 32.4 px against 28.8 px, also inverted.

So on every phone, and on a laptop window narrower than 640 px, the redesign's
central move reverses itself. The page you designed exists only above 640 px.
Below that you've shipped the old hierarchy with a new layout.

This is pure arithmetic from the two stylesheets, and it's the strongest single
finding in this review.

### 3.2 The scale has eight nominal steps and three visible ones

Every distinct size on the page: 2, 1.8, 1.05, 1, 0.98, 0.95, 0.9, 0.85 rem.
In pixels at an 18 px root: 36, 32.4, 18.9, 18, 17.64, 17.1, 16.2, 15.3.

Look at the middle. 18.9, 18, 17.64, 17.1, 16.2. The gaps are 0.9 px, 0.36 px,
0.54 px, 0.9 px. A 0.36 px difference is not a typographic distinction, it's
sub-pixel noise. `.door > p` at 0.98 rem against `.work .title` at 1 rem is a
2 % difference; no reader will ever perceive it as a level.

Collapse the indistinguishables and you get three perceptible bands: a display
band (36 and 32.4, tied, see 3.3), a body band (everything from 18.9 to 16.2),
and a small band (16.2 and 15.3, barely separable).

The old page had two. The new page has three. The CSS looks like it has eight.
That gap between the authored scale and the perceived scale is the diagnosis's
blind spot: it treated "add more sizes" as the same thing as "add hierarchy."

What's actually carrying differentiation here is **colour**, not size:
`--text` #222, `--muted` #555, `--subtle` #888, `--link` #800020. Plus case
(small caps against lowercase) and the 2 px left borders. That's a legitimate
system, but it should be chosen on purpose, and it has the weakness described
in 3.6.

A scale with visible steps, on an 18 px base, roughly 1.2 to 1.25 between
levels:

| Level | Now | Proposed |
|---|---|---|
| Thesis line | 2 rem | 2.25 rem |
| Door heading | 1 rem | 1.25 rem |
| Name (h1) | 1.8 rem | 1.15 rem |
| Thesis paragraph | 1.05 rem | 1.05 rem |
| Body, work titles | 1, 0.98, 0.95 rem | 1 rem |
| Gloss, links, secondary | 0.9, 0.85 rem | 0.875 rem |

Five levels with gaps you can see, replacing eight you can't.

### 3.3 `h1` and `.thesis-line` are a tie, and position breaks it, not design

You asked me to test this specifically, so here's the reasoning.

Nominally, 2 rem against 1.8 rem is an 11 % difference, 3.6 px. That's below
the threshold at which most readers register two elements as belonging to
different levels, especially when they're separated by 2.25 rem of space rather
than sitting adjacent for comparison.

But the case treatment cuts against the sizes. `h1` inherits
`font-variant: small-caps` and `letter-spacing: 0.1em` from `style.css`.
Letterspaced small caps have no ascenders and no descenders, so "BRETT
REYNOLDS" renders as an even, dense horizontal band. `.thesis-line` cancels
small caps and sets 39 characters of ordinary lowercase at regular weight, so
it has ragged texture, open counters, and internal white space. Uneven texture
at a large size reads *lighter* than an even band at a smaller one.

Squinting, my honest order for the first screen:

1. **The photograph.** It's 1395 × 2093 px served at 110 px wide, so it renders
   about 110 × 165 px. A photographic rectangle is the highest-contrast,
   highest-complexity object on a page of type, and photographs always take the
   first fixation. Nothing in the CSS changes that.
2. **The thesis line**, narrowly, because it's the longest continuous
   full-contrast horizontal stroke on the page (about 630 px at my assumed
   advance, one line, since the 20 em cap computes to 720 px and the container
   is 764 px).
3. **The `h1`**, close enough behind to compete rather than to follow.

And an uninvited fourth: `.theme-toggle` is `position: fixed` at
`top: 0.75rem`, right-aligned to the 800 px column, with a 1 px maroon border
and a `box-shadow`. It's a sans-serif pill (`font: system-ui`) on an all-serif
page, in the top-right corner, at the exact moment the eye is looking for the
thesis. On the old dense page it was easy to ignore. On this emptier first
screen it's one of only four objects.

Is that the order you need? For the arXiv visitor, no. They need "In AI
evaluation," which sits about 600 px down and is labelled at body size.

The fix is to finish the move the CSS comment already announces. `.id` is
described as a "compact identity block," but `h1` was never made compact; it
just got its bottom margin tightened to 0.1 rem. Drop it to about 1.15 rem and
let it be a label. If you'd rather keep the name prominent, push the thesis to
2.6 rem instead. Either resolves the tie. What can't work is 1.8 against 2.

### 3.4 Every paragraph is grey and every list title is black

`.thesis p`, `.door > p`, and `.strip p` are all `color: var(--muted)`.
`.work .title` inherits `var(--text)`. So the page's CSS says, uniformly: the
prose is secondary, the lists are primary.

That directly contradicts the redesign's own premise. The whole point was to
lead with an argument. The argument is in the grey paragraphs. A reader
scanning for contrast will read your name, your question, and nine publication
titles, and will skip every sentence that explains what any of it means.

`.thesis p` is the acute case. It's the paragraph that defines
projectibility-first, and it's set at 18.9 px in #555 under a 36 px line at
#222. The reader's reward for engaging with the largest text on the page is a
drop to grey.

### 3.5 There's a hole in the scale exactly where the second voice should be

From `.thesis-line` at 36 px to `.thesis p` at 18.9 px is a 1.9× drop with
nothing between. The only thing occupying that gap, 32.4 px, is the name, which
belongs to a different element and a different job.

This is why `.door h2` can't do heading work. It's set at 1 rem, identical in
size to `.work .title`, the items it heads. It's distinguished from its own
list contents only by maroon and small caps.

Those two headings are the most important interactive decision on the page. A
visitor arrives from arXiv or from LingBuzz and has to pick a column. The
labels for that choice are set at body size. That's the clearest single case of
the layout not matching the purpose.

### 3.6 The hierarchy is measurably weaker in dark mode

Since colour is carrying most of the differentiation (3.2), the theme change
matters more than it would on a size-driven page.

Contrast against background, computed from the declared hex values:

| Token | Light (on #fafafa) | Dark (on #111) |
|---|---|---|
| `--text` | 15.2 : 1 | 16.3 : 1 |
| `--muted` | 7.1 : 1 | 10.7 : 1 |
| `--subtle` | 3.4 : 1 | 6.5 : 1 |
| `--link` | 10.4 : 1 | 9.8 : 1 |

In light mode the text-to-muted step is a 2.1× drop. In dark mode it's 1.5×.
The grey levels are compressed toward full contrast in dark mode, so the
separation between "argument" and "titles" flattens. On top of that, the dark
link colour #ff9fb8 is a bright, saturated pink on near-black, which draws far
more attention than maroon on off-white does. The doors' headings will feel
more prominent in dark mode and the prose hierarchy will feel weaker. You've
built two different hierarchies without meaning to.

Separately, `--subtle` at 3.4 : 1 fails WCAG AA for normal text in light mode
(4.5 : 1 required, and 15.3 px is not "large text"). Its exposure on this
particular page is limited to the footer, since `.work .where` contains only
maroon links, so treat this as a site-wide token fix rather than a homepage
emergency. Dark mode is fine at 6.5 : 1.

### 3.7 The utility demotion is disappearance, and it's a regression for a named audience

You asked whether 0.85 rem muted grey is demotion or disappearance. Three
things stack:

- **Size.** 15.3 px in EB Garamond. Garamond-class faces have small x-heights
  relative to the em, so 15.3 px here reads smaller than 15.3 px would in a
  system sans. Verify by eye, but expect it to sit near the floor of readable.
- **Colour.** `.utility-secondary a { color: var(--muted) }` strips the maroon.
  These links are now the same colour as body prose.
- **Decoration.** `a { text-decoration: none }` is site-wide. With no colour
  difference and no underline, an eight-item grey row reads as a caption, not
  as navigation. Nothing tells a reader those words are clickable until they
  hover, and a scanning reader never hovers.

Now the position. Accumulating heights from the CSS (photo 165 px, seven lines
of thesis paragraph, roughly 814 px of the taller column, and so on), the
secondary row starts around **1700 px** down. Call it plus or minus 200 px
depending on wrapping. That's the third screen on a typical laptop.

Inside that row: **Google Scholar** and **ORCID**. Those are precisely what
hiring committees, grant panels, and journal editors look for, and they're the
machine-checkable anchors of your scholarly identity. They're now in 15.3 px
grey, un-underlined, three screens down, in the same visual register as
`llms.txt` and a blog that stopped in 2014.

On the old page they were maroon, at 18 px, around 900 px down. **For one of
your four named audience segments, this redesign is a straightforward
regression.**

### 3.8 There's no route to the sixty publications, and nothing says they exist

`publications.html` lists on the order of sixty items across eight sections.
The new homepage shows nine. The only link to the full list is "Publications"
in the primary utility row at roughly 1670 px.

Neither `.door` ends with a "more" affordance. Each `ul.work` just stops. A
door that doesn't say where it leads isn't a door, it's a display case. A
reader who lands on the AI column, reads four items, and finds no route onward
will reasonably conclude that four items is the body of work.

This is the cost of the promotion move that nobody priced. The old page was
flat, but flatness at least communicated *volume*: thirteen links and a
202-word bio signalled a large body of work even to a reader who read none of
it. The new page communicates *selection*. Selection is better for the argument
and worse for the credential, and three of your four named audiences are there
for the credential.

### 3.9 The columns are too narrow before the breakpoint fires

At 800 px viewport, each column is about 359 px, which at my assumed advance is
about 45 characters at `.door > p`'s 17.64 px. That's the floor of comfortable
measure, and it's the *widest* the columns ever get.

At a 700 px viewport: content 664 px, columns about 309 px, roughly 38
characters. That's a newspaper classified column, and the breakpoint doesn't
fire until 640 px.

The content makes it worse. Nearly every title in those lists exceeds the
column: "Effective without warrant: causal-normative networks and the social
life of status" is 81 characters, "Definiteness and deitality in English: a
projectibility-first account" is 68. Every one of them wraps to two lines, at
arbitrary points, because most are colon-plus-subtitle constructions with no
break instruction. Meanwhile `text-wrap: balance` is applied to
`.thesis-line`, the one line on the page that never wraps.

Two small further notes in this territory. `.id` uses `align-items: center`, so
an 81 px text block floats in the middle of a 165 px photo with about 42 px of
dead space above and below, and no edge in the composition aligns to any other.
And `Brett_Reynolds.jpg` is 1.2 MB rendered at 110 px, with no `width`/`height`
attributes on the `<img>`, so the first thing the eye lands on is also the
slowest thing to arrive and it shifts the layout when it does.

### 3.10 Two accessibility findings that are design findings

**The page's central claim is absent from the document outline.** Heading
navigation, which is how many screen-reader users move through a page, gives:
"Brett Reynolds," "In AI evaluation," "In linguistics," "Grammar and
description." The thesis line is a `<p>`, so a reader navigating by heading
never encounters it. Your loudest element is invisible to one of your reading
paths.

**The door headings are sentence fragments that lose their antecedent.** "In AI
evaluation" and "In linguistics" work beautifully as continuations of the
thesis paragraph's last sentence. That's good writing. But as headings they
depend on linear reading, and a two-column grid is an invitation to scan. A
reader who scans headings first, which is exactly what the academic visitor
does, gets two prepositional phrases with nothing to attach them to. So does a
screen-reader user jumping by heading, and so does a search result. The prose is
written for one reading model and the layout supports the other.

Also: there's no `a:focus-visible` rule anywhere except on `.theme-toggle`.
With `text-decoration: none` site-wide, keyboard users have only the browser
default ring, which on the dark theme may be weak.

---

## 4. Alignment audit

**Visuals.** Eight nominal levels resolve to three visible ones, with a tie at
the top and a hole in the middle where the second-level voice should be. The
differentiation that survives is carried by colour, which compresses in dark
mode and fails AA at `--subtle` in light. The photo takes the first fixation and
the theme pill takes an unearned share of the second. Below 640 px the whole
scheme inverts.

**Text.** The writing is the strongest part of this package. It's compact, it
argues, and the fragment headings are a genuine rhetorical device. But the CSS
sets every paragraph in grey and every list title in black, which instructs the
reader to skip the argument and scan the inventory. Text and visuals are
pulling in opposite directions, and the visuals win because they're read first.

**Audience.** Four segments named, three under-served. arXiv arrivals get the
left column at 600 px down, labelled at body size, with no route to more AI
work. LingBuzz and PhilArchive arrivals get the same treatment on the right.
CGEL and TESL arrivals, who mostly come for *A Student's Introduction to
English Grammar*, get the greyest band on the page, third in order, with your
most widely recognised credential set at 0.95 rem. Hiring committees and grant
panels fare worst: sixty publications reduced to nine, and ORCID and Scholar
buried at 1700 px in grey.

**Purpose.** You said you're prioritising AI safety and evaluation work. A
`1fr 1fr` grid states no priority whatsoever. Both columns share a heading
size, a colour, a rule treatment, and a width. If AI genuinely leads, the
layout contradicts your stated purpose. If the two really are equal, the
purpose statement needs revising rather than the grid. Right now the page
declines to answer, and declining is itself a claim that a hiring committee
will read.

---

## 5. Specific fixes, by impact

**1. Fix the mobile inversion.** `style-v2.css`, the `max-width: 640px` block.
`.thesis-line` at 1.6 rem loses to `h1` at 1.8 rem once `style.css` drops the
root to 16 px at 600 px. Either add `.id h1 { font-size: 1.15rem }` to the
media query, or raise `.thesis-line` to at least 2 rem there. Nothing else on
this list matters if the page is upside down on phones.

**2. Break the h1/thesis tie at every width.** `style-v2.css`. Recommended:
`.id h1 { font-size: 1.15rem; letter-spacing: 0.08em; }`, which completes the
"compact identity block" the comment already promises. Alternative:
`.thesis-line { font-size: 2.6rem }`. Do one, not both.

**3. Give `.door h2` a real level.** `style-v2.css`, change `font-size: 1rem`
to `1.25rem`. These are the page's primary navigational choice and they're
currently the same size as the items they contain.

**4. Stop setting the argument in grey.** `style-v2.css`, remove
`color: var(--muted)` from `.thesis p`. Consider keeping it on `.door > p` and
`.strip p` so the thesis paragraph gains a level the others don't have. Right
now every paragraph on the page is demoted and every list title is promoted.

**5. Rescue ORCID, Scholar, and Publications.** `index-new.html` and
`style-v2.css`. Three parts. (a) Delete
`.utility-secondary a { color: var(--muted) }` so links look like links.
(b) Move ORCID and Google Scholar up into the primary `.utility` row. (c) Add a
closing item to each `ul.work`, something like `<li class="more"><a
href="publications.html">All publications</a></li>`, so each door says where it
leads. Optionally move the whole `<nav>` above `.strip`.

**6. Break the doors on measure, not on a guessed viewport.**
`style-v2.css`: `grid-template-columns: repeat(auto-fit, minmax(19rem, 1fr))`
and delete the `.doors` rule from the 640 px media query. At an 18 px root,
19 rem is 342 px, so two columns need 729 px plus padding and the grid falls to
one column below roughly 770 px viewport, instead of holding 38-character
columns down to 640 px.

**7. Make the two columns read as one structure.** `index-new.html`. Edit the
two door intro paragraphs to the same line count (they're currently about 270
and 240 characters, which is six lines against five) so the first work item in
each column starts at the same height. This is a copy-edit, it costs nothing,
and it does more for the "same question, twice" claim than any CSS change.
Consider also a `border-top: 1px solid var(--rule)` on `.doors` itself, so the
pair is visibly bracketed as a single unit.

**8. Put the thesis in the heading outline.** `index-new.html`. Either make
`.thesis-line` an `<h2>` with the display styling attached, or add a
visually-hidden heading before it. As written, heading navigation skips the
page's central claim entirely.

**9. Fix the wrapping in the columns.** `style-v2.css`, add
`text-wrap: balance` to `.work .title` (where every title wraps) and consider
removing it from `.thesis-line` (where nothing wraps).

**10. Make the list rules visible or remove them.** `style-v2.css`. `--rule`
is #ddd, which computes to about 1.3 : 1 against #fafafa, so the non-lead
borders are effectively invisible. Each column currently reads as one marked
item plus three unattached ones. Either darken to about #c4c4c4, or drop the
border from non-lead items and keep the padding, or replace the per-item rules
with a single rule on the `ul`.

**11. Fix the about page.** `about.html` links to `index-new.html` twice; those
break the moment you rename the file on deploy. Change both to `index.html`.
Also add the `.id` header block, since the page about your identity currently
carries no name, no photo, and no navigation.

**12. Site-wide token and focus fixes.** `style.css`. Darken `--subtle` from
#888 to about #6b6b6b (3.4 : 1 is below AA in light mode; dark mode is fine).
Add a global `a:focus-visible { outline: 2px solid var(--focus); outline-offset:
2px; }` since `text-decoration: none` leaves keyboard users nothing else.

**13. Fix the photo.** `index-new.html`. Serve a resized file (330 px wide
covers 3× displays) and add `width="110" height="165"` to the `<img>`. It's
1.2 MB for a 110 px slot, it's the first fixation on the page, and it shifts the
layout when it loads.

**14. Consider keeping a keyword line on the homepage.** The old `.focus`
paragraph moved to `about.html`. Your homepage is the site's highest-authority
URL, and it no longer carries "benchmark validity," "evaluator validity,"
"delegated authority," or "audit evidence" in visible text. Not a typography
issue, but it's a purpose issue.

---

## 6. Verdict

**Ship with named fixes**, where "named fixes" means items 1 through 6, not a
polish pass.

The architecture is right and I wouldn't rebuild it. Identity, claim, two
bodies of work, a third band, utilities is a sound sequence, the diagnosis of
flatness was correct, and promoting the buried sentence was the right call on
the right sentence. Nothing here calls for a rethink.

But the type system underneath that architecture doesn't yet deliver the
hierarchy the architecture assumes. Eight sizes resolve to three levels, the
top two are tied, the second-level voice has no size available to it, and the
whole scheme inverts below 640 px. Those are structural properties of the
scale, not blemishes, and shipping without fixing at least items 1 through 3
would spend the redesign's effort on a page that still reads flat where it
matters.

One judgement call I'll leave with you rather than decide. The redesign traded
*volume* for *argument*. That trade is defensible, and for the arXiv and
PhilArchive visitors it's clearly right. But sixty publications, a CUP
co-authorship, and a monograph under review at Cambridge are a substantial
record, and the new page shows nine items and hides the rest three screens
down in grey. If your priority is genuinely AI safety work, where you're the
newer entrant, the record is the thing you can least afford to bury. Fix 5 is
therefore more urgent than its position in the list suggests.
