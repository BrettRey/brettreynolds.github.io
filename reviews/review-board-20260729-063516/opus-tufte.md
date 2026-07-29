# Review: `index-new.html`

**Reviewer persona:** Edward Tufte (reconstructed)
**Files read:** `index-new.html`, `index.html`, `style.css`, `style-v2.css`, `about.html`, `publications.html`, `theme.js`, `sitemap.xml`
**Date:** 2026-07-29

**Verification note.** I am writing in a reconstruction of Tufte's priorities, not
quoting him. Where I invoke a principle (data-ink, small multiples sharing axes,
"the enemy is confusion not density"), treat it as my paraphrase of positions
associated with his work, not as a citation. Nothing here should be quoted as his.
I could not run a browser. Every number below is arithmetic from the CSS, marked as
inference. Verify the ones that drive a decision by opening dev tools.

---

## 1. What this design is doing

In plain terms, the page has been changed from a **document** into a **directory
with an argument on top**.

The old homepage had one shape: a photo, a name, and a block of prose. Everything
after the prose was a flat row of thirteen links at one size and one colour. A
reader had exactly two choices, read the paragraph or scan the row, and the row
gave no hint which link mattered.

The new page has five bands stacked vertically, and each band is set at a different
size and colour so the eye can sort them without reading:

1. **Identity band** (`.id`). Photo, name, three-word tagline. Small, quiet,
   dispatched in about 165 px of height.
2. **Thesis band** (`.thesis`). One large sentence at 2 rem, then a paragraph of
   supporting prose in the muted grey. This is now the largest type on the page.
3. **Two doors** (`.doors`). A CSS grid, `1fr 1fr`, 2.5 rem gutter. Each door has a
   maroon small-caps heading, a paragraph of framing prose, and a list of specific
   works with links.
4. **Strip** (`.strip`). Same structure, smaller type, grey heading, links laid out
   horizontally instead of vertically.
5. **Utility nav**, split into a primary row at 1 rem and a secondary row at
   0.85 rem in grey.

The tools doing the sorting are size, colour, and horizontal position. Size falls
monotonically down the page (2 rem, 1.05 rem, 1 rem, 0.98 rem, 0.95 rem, 0.9 rem,
0.85 rem). Colour separates three states: `--text` for what you should read,
`--muted` for what you may read, `--link` maroon for what you can click. Position
separates two things that are meant to be siblings.

**On Brett's "text heavy" worry: it was not well founded, and the redesign was right
to reject it.** But it then acted on it anyway, and nobody noticed.

By my count the current homepage carries about 240 words of prose (202-word bio plus
the 32-word focus line plus tagline). The new page carries about 305, spread across
the thesis paragraph, two door paragraphs, nine titles, six glosses, and the strip
paragraph. **The redesign put more words on the homepage, not fewer.** It moved 202
of the old ones to `about.html` and wrote about 270 new ones.

That is the single most useful thing this review can tell you, so I will say it flat:
your page was never suffering from word count. It was suffering from having one
entry point where it needed nine. The old page gave a reader nothing to aim at. The
new page gives them nine addressable objects and, by my count, thirty-four `href`s
against the old page's twenty-one, including roughly a dozen direct links to actual
research artifacts where the old homepage had **zero**. A visitor to the old page
could not reach a single paper without a second click through `publications.html`.

That is a real gain and it is the redesign's best work. Density of *useful
destinations* went up while the page got easier to scan. Stop thinking about "how
much text." Think about how many things on the page a stranger can aim at.

Two other things are done well and should survive whatever else changes. Marking
`projectibility-first` once, in `--text` against a `--muted` paragraph, is the
correct way to name a programme: one mark, one place, no repetition. And tiering the
utility links into 1 rem and 0.85 rem rows is exactly right, because `llms.txt` and
`OKF export` were never peers of `Publications` and the old page said they were.

---

## 2. The claim the layout makes

Yes, this is a design that asserts a proposition, and the proposition is specific
enough to test.

The layout claims five things:

- **(a)** There is one question, and it comes before the person.
- **(b)** The question has two applications.
- **(c)** Those two applications are **peers**: equally developed, equally
  evidenced, at the same stage.
- **(d)** A third body of work supports them but ranks below.
- **(e)** The work is more interesting than the worker.

Claims (a) and (d) hold. Claim (e) is a real bet, and I will come back to it. Claim
(c) is false, and the grid asserts it in the strongest available terms.

### The false parallel

`grid-template-columns: 1fr 1fr` is not a neutral container. It is a comparison
device. Side-by-side panels are a claim that the panels share axes, that reading
across a row means something. A reader's eye is trained by every table it has ever
seen to compare row-wise. Put two lists in two equal columns and you have promised
that item 1 relates to item 1.

Here is what is actually in the two columns:

| # | AI evaluation | Public object? | Status | Linguistics | Public object? | Status |
|---|---|---|---|---|---|---|
| 1 | Adversarial Pragmatics | arXiv + code + 2 apps | preprint, 2026 | *Words That Won't Hold Still* | **none** | unpublished MS, under review |
| 2 | Truth-tracking profiles | PhilArchive + mirror | preprint, no venue named | Kinds as projectibility profiles | PhilArchive | preprint, no venue named |
| 3 | Effective without warrant | PhilArchive + mirror | under review, *Synthese* | Interjection as a lexical category | LingBuzz + mirror | preprint, no venue named |
| 4 | Delegation & evidentiary assurance | **none** | "in preparation" | Definiteness and deitality | LingBuzz + mirror | under review, *J. Linguistics* |
| 5 | — | — | — | Grammaticality de-idealized | LingBuzz | preprint, no venue named |

Read across the rows. Row 1 pairs a live arXiv benchmark with four working links
against a manuscript a reader cannot open. Row 4 pairs a paper that does not yet
exist as a public object against a paper under review at a Cambridge journal. The
rows mean nothing. The apparatus of comparison has been deployed over data with no
comparable structure, and the only comparison it does support is one that damages
the argument: four items against five, and roughly 730 px against roughly 810 px of
rendered column height on my estimate at an 800 px page width.

So the grid asserts parity, and then renders the promoted column as the visibly
shorter one with a trailing 80 px of void. The design contradicts itself in the most
literal way available, before anyone has read a word.

### The parallel is purchased by suppressing what breaks it

This is the part that matters, and it is not a layout problem, it is a selection
problem that the layout forced.

**Not one of the nine items in the two doors is peer-reviewed.** Nine preprints and
one unpublished manuscript. Meanwhile `publications.html` lists three books in print
(including the CUP *Student's Introduction*, 2nd edition, co-authored with Huddleston
and Pullum, and *Language Landscapes* with a DOI), seventeen journal articles
including 2024 and 2026 items in *Journal of Linguistics* and *English Language and
Linguistics*, and three ACL Anthology papers.

None of that appears in the doors. The three books are demoted to `.strip`, where
*A Student's Introduction to English Grammar* is rendered as an unattributed link in
a flat horizontal row at 0.95 rem, sitting beside `CGEL correctives` and
`English Constructionary`, with no author, no publisher, no year, and no indication
that Brett wrote it. A stranger reading that row cannot tell whether it is his book
or a book he recommends.

Now the mechanism becomes visible. The linguistics column **cannot** admit a
published journal article, because the AI column has none to answer it with. The
moment either column shows a peer-reviewed item, the symmetry collapses. So the
symmetry is achieved by drawing both columns exclusively from the preprint stratum
and pushing everything that would break the parallel into a lighter band below.

The design did not discover a parallel in the work. It manufactured one by
withholding evidence, and the evidence it withheld is the strongest evidence Brett
has.

### The page fails its own criterion

The thesis says a category earns its standing from what membership licenses you to
predict. The two-column grid is itself a category assignment. It licenses the
inference: *these two bodies of work are at comparable stages, with comparable
evidential backing.* Check that inference against the table above and it does not
project.

I raise this not as a gotcha but because it hands you a decision procedure you
already believe in. For every visual grouping on the page, ask what a stranger would
be entitled to infer from it, then check whether the inference holds. The maroon
rule, the equal columns, and the strip all fail that test right now.

### What the honest layout would say

The asymmetry is not an embarrassment. It is a better story than the symmetry, and
it is the one the visitor from arXiv actually needs.

Brett is an established linguist, twenty-five years and three books deep, who has
concluded that the thing he learned about categories transfers to AI evaluation and
is now betting on it. That story has an argument built into its shape: *the reason
my AI work deserves your attention is the depth of the thing it comes out of.* The
two-column grid discards the depth, which was the whole warrant for the pivot, and
replaces it with a claim of parity that a hiring committee will price in about four
seconds.

Unequal columns would tell the truth and make a stronger claim. A 3:2 grid, or a
single column with the AI section first and the linguistics section second and each
carrying its real depth, says "here is where I am going, and here is the twenty-five
years that earns it." That is more persuasive than "these are the same size."

---

## 3. What the diagnosis missed

This is the section with the most in it. Ordered roughly by cost.

**3.1 The credibility gradient is inverted.** Covered above. Nine non-peer-reviewed
items get the page's structural weight; three books in print get a link row at
0.95 rem. Visual weight currently runs *unpublished > under review > published*.

**3.2 The page contains no dates and no affiliation.** I grepped both files.
`index-new.html` contains zero instances of "Humber", "Toronto", "adjunct",
"Huddleston", "Pullum", or any publication year. The current `index.html` has all of
them, with the Humber and University of Toronto department pages linked. On the new
page Brett's employer survives only as a domain in the `mailto:` in the secondary
utility row, at 0.85 rem in grey.

For two of the four audiences named in the brief (hiring committees, grant panels)
that is not a trim, it is the deletion of the credential. For journal editors it is
the deletion of the reason to reply. The redesign removed every proper noun and every
date from the homepage and did not notice, because it was thinking about word count
rather than about which words.

**3.3 Two of the nine promoted items are dead ends, and one of them is a flagship.**
`.work li.lead` in the linguistics column is the monograph, and it has no link at
all. The AI column's fourth item has no link. A reader persuaded by "under peer
review at Cambridge University Press" and wanting to see the argument has nowhere to
go. The design promoted an item it cannot deliver. If it stays, give it somewhere to
land (a chapter précis, a summary page, a LingBuzz-hosted synopsis, anything).

**3.4 The measure fix was aimed at the wrong page.** The brief says the previous
measure was about 100 characters at 800 px. On the homepage that is not right. The
old `.header` is a flex row: 800 px page, minus 36 px body padding, minus 180 px
photo, minus 36 px gap, leaves about 548 px for `.bio`. At 18 px EB Garamond that
is roughly 68 to 72 characters (inference). The photo was already acting as a margin.

The genuine 100-character problem lives on the full-width pages,
`publications.html` above all, which still loads only `style.css` and has no
`.prose` cap. So the measure was fixed where it was already acceptable and left
alone where it is actually wrong.

**3.5 `--measure` is declared in `em`, which makes it three different widths.**
`:root { --measure: 31em }` looks like one number. It is not. Custom properties
substitute as tokens at the point of use, so the `em` resolves against each
consuming element's own font-size:

- `.thesis p` at 1.05 rem: 31 em ≈ **586 px**
- `.strip p` at 0.95 rem: 31 em ≈ **530 px**
- `.prose` at 1 rem: 31 em ≈ **558 px**

The character measure stays constant (that is the good news, and it is roughly
69 to 74 characters for EB Garamond, so the stated 68 target is at the optimistic
end), but the **right edges do not align**. Going down the page the right boundary
steps roughly 570 px (thesis line), 586 px (thesis prose), 764 px (doors, full
width), 530 px (strip). Four different right margins on a page whose entire visual
argument is alignment. Change `em` to `rem` and all three prose blocks share one
edge. One character, real gain.

**3.6 Nobody costed the photograph.** `Brett_Reynolds.jpg` is 1,395 × 2,093 px and
**1.2 MB**. It is rendered at 110 px wide. The rest of the page is about 8 KB of
HTML plus two small stylesheets. The image is therefore roughly 99% of the page
weight and, at 110 px, close to 0% of its information: a face at 110 px is not
recognizable in any way that would help someone find him at a conference, which is
the only function an academic headshot has.

It also has no `width`/`height` attributes and no `aspect-ratio`, so the browser
cannot reserve space. The `.id` row will jump from about 64 px (text only) to about
165 px (photo-driven, 2:3 aspect at 110 px wide) when the 1.2 MB finishes
downloading. That is a visible layout shift on the first paint of the page, caused
entirely by decoration.

Decide which it is. If it is identification, make it 180 px or larger, compress it
to about 30 KB, and let it earn its height. If it is ornament, cut it. What is there
now pays the full price and delivers neither.

While we are here: `align-items: center` on `.id` means the 165 px photo governs the
band height while the text stack occupies about 64 px, leaving roughly 50 px of dead
space above and below the name. The photograph is dictating the vertical rhythm of
the page's opening.

**3.7 The `border-left` rules on `.work li` encode nothing.** Every one of the nine
items carries `border-left: 2px solid var(--rule)`. A mark that appears on every
member of a set carries zero bits. These rules cost 2 px of ink and 0.9 rem of
indent per item to duplicate a separation the 1 rem bottom margin and the block-level
titles already provide. They are furniture. Delete them and the list reads the same.

**3.8 `.work li.lead`'s maroon rule carries one bit in a channel already spoken
for.** It encodes "flagship item," once per column, two bits total. But maroon is
already the link colour, so a maroon vertical stroke beside a list containing maroon
links reads as "there are links here," not "this one leads."

The confusion is worse than generic. In the AI column, the maroon rule sits beside
the one item with **four** maroon links, where it disappears. In the linguistics
column it sits beside the one item with **no** links at all, where the only maroon on
that row is a stroke the reader cannot interpret. The encoding is exactly backwards
in both places.

And sequence already encodes precedence, for free, with no ink. The first item is
first. That is what first means.

**3.9 Maroon now means four things.** By my count the rendered page uses `--link` for
(1) all thirty-two content links, (2) the two `.door h2` headings, (3) the two
`.lead` rules, and (4) the border of the fixed `.theme-toggle` pill in the top right.
One channel, four meanings, no legend.

The `.door h2` case is the worst, because "In AI evaluation" in maroon small caps
looks exactly like a section link and is not clickable. That is a false affordance on
the two most prominent secondary elements on the page.

**3.10 The clever headings do not survive extraction.** `In AI evaluation` and
`In linguistics` are written as continuations of the thesis sentence, and as prose
that is genuinely well made. As headings they fail, because headings get pulled out
of context by screen-reader heading lists, by search engines, and by any eye that
skims. Extracted, the page's outline reads: *Brett Reynolds / In AI evaluation / In
linguistics / Grammar and description.* Two headless prepositional phrases. A label
has to work detached from its context, because readers detach it.

**3.11 The secondary utility links have no non-colour cue and the colour cue is
wrong.** `a { text-decoration: none }` sitewide, and `.utility-secondary a { color:
var(--muted) }`. So these eight links are grey, unadorned, and rendered in the same
colour the page uses everywhere else for *non-clickable* descriptive text (`.gloss`,
`.door > p`, `.strip p`). The reader spends the whole page learning that grey means
"description" and then hits a row of grey that is entirely links.

Computed from the CSS variables: in dark mode `--muted` (#c8c2b9) against `--text`
(#f0eee8) is about **1.5:1**; in light mode #555 against #222 is about **2.1:1**.
Both below the 3:1 that WCAG asks for when colour alone distinguishes link text.
Since these sit in a standalone list rather than inside a paragraph, the strict
success criterion may not bite. Flag for verification. It is an information problem
either way.

**3.12 The redesign is homepage-only, and the homepage may not be where the audience
lands.** `style-v2.css` is loaded by exactly two files, `index-new.html` and
`about.html`. `publications.html`, `essays.html`, `cgel-correctives.html`, and every
paper mirror still load only `style.css`, still run at the ~100-character measure,
and still link "Back to home" to `index.html`. So `about.html` and `publications.html`
currently disagree about where home is.

More consequentially: the three named arrival vectors (arXiv 2607.01153, LingBuzz,
PhilArchive) all point at *papers*. A visitor from arXiv most plausibly lands on
`papers/adversarial-pragmatics-for-ai-safety-evaluation/`, not on the homepage. The
sitemap lists that mirror and its sub-pages, and does **not** list `about.html` at
all. A redesign predicated on people arriving at the front door may be invisible to
most of the traffic it was built for.

**3.13 Two taglines.** `AI evaluation · Assurance · Linguistics` sits directly above
a thesis line that makes the same claim better and a two-door structure that makes it
better still. The middot list is a weaker draft of the page below it, occupying the
slot right under the name.

**3.14 Breakpoint mismatch.** `style.css` drops the root font-size at
`max-width: 600px`; `style-v2.css` collapses the grid at `max-width: 640px`. Between
601 px and 640 px the layout goes single-column while the type stays at 18 px. Small,
and a one-word fix.

**3.15 No `<main>`, and the thesis has no heading.** The page's central content sits
in a `<section class="thesis">` with no accessible name and no landmark wrapper. Two
lines of HTML.

---

## 4. Alignment audit

**Visuals.** Internally the type scale is disciplined and the colour system is nearly
right. It comes apart at three points: the grid asserts a parity the content does not
support; maroon carries four meanings without a legend; and the right margin steps
four times down the page because `--measure` is in `em`. The 1.2 MB photograph at
110 px is the largest single expenditure on the page and returns the least.

**Text.** The prose is the strongest element here and better than the old bio by a
distance. It is concrete, it names the programme once, and the two door paragraphs
each state a claim rather than list topics. Where it diverges from the visuals is in
what it no longer says. The text now contains no institution, no year, no
co-authorship, and no publisher. The visuals promise a structured account of a body
of work; the text delivers a structured account of an idea. Those are different
things, and only one of them answers "who is this."

**Audience.** The page serves the arXiv visitor well and the LingBuzz visitor
reasonably. It serves hiring committees, grant panels, and journal editors badly,
because it deleted the three facts they open the page to find (affiliation,
publication record, recency) and put its nine most prominent objects in the one
category those readers discount. The four audiences named in the brief are not in
conflict here; three of them want the same missing sentence.

**Purpose.** The stated purpose is to prioritise the AI work while showing the
reframing of linguistics. The layout instead equalises them, which serves neither.
It cannot signal "this is where I am going" because both columns are the same width,
and it cannot signal "and here is what earns it" because the depth was moved off the
page. The purpose wanted asymmetry, and the design chose symmetry as an aesthetic
default and then had to select the content that would sustain it.

---

## 5. Specific fixes, by impact

**1. Break the parity. (`index-new.html`, `style-v2.css`)**
Either make the grid unequal, or drop to one column and let sequence do the work.

- Minimal version: `grid-template-columns: 1.15fr 0.85fr` in `.doors`, AI first. The
  width differential says "this is the direction of travel" without any words.
- Better version: one column, full measure, AI section then linguistics section,
  each item carrying a year and a status. Sequence is a cleaner precedence encoding
  than side-by-side, and it costs nothing.

**2. Give every item a year and a status, in a fixed slot. (`index-new.html`)**
Right now four of nine items carry a status and none carries a date. Add
`<span class="when">` between title and gloss, always present, always the same
treatment: `2026 · arXiv preprint`, `2026 · under review, Synthese`, `in
preparation, no preprint yet`. This is the fix that lets a reader actually compare,
which is what a two-column layout was pretending to offer and could not deliver.
It also makes the honesty of "in preparation" a feature rather than a gap.

**3. Put the books back in the argument. (`index-new.html`)**
*A Student's Introduction to English Grammar* (Huddleston, Pullum & Reynolds, CUP,
2nd ed. 2022) is the most credentialled object in the corpus and currently appears as
an unattributed link at 0.95 rem. Give the three books their own band above or
beside the doors, with authors, publishers, and years. An AI-safety reader who sees
"co-author, Cambridge University Press" reads the rest of the page differently.

**4. Restore the first sentence. (`index-new.html`)**
One line under the tagline, or folded into the thesis paragraph: linguist at Humber
Polytechnic, adjunct professor of linguistics at the University of Toronto, with the
two department links the old page had. Twenty words. Three of your four audiences
open the page for it.

**5. Fix the photograph. (`Brett_Reynolds.jpg`, `index-new.html`, `style-v2.css`)**
Resize to about 400 px on the long edge, re-encode at quality 80, target under 60 KB.
Add `width`, `height`, and `alt` to the tag so the browser reserves space. Then
decide: 180 px and identifying, or gone. 110 px is the one size that pays for both
and gets neither.

**6. Delete the grey rules; rethink the maroon one. (`style-v2.css`)**
Remove `border-left` and `padding-left` from `.work li`. Keep `.lead` only if you
give it something the reader can decode, and do not encode it in maroon while maroon
also means "link." A single-word status in the fixed slot from fix 2 does the same
job in language.

**7. Change `--measure` from `em` to `rem`. (`style-v2.css`)**
`--measure: 31rem`. One character. All prose blocks then share one right edge.

**8. Give the two dead-end items somewhere to go. (`index-new.html`)**
The monograph and the assurance frameworks. A summary page, a table of contents, a
LingBuzz synopsis, or move them out of the promoted positions.

**9. De-maroon the door headings. (`style-v2.css`)**
`.door h2 { color: var(--text) }` or `var(--muted)`. Keep maroon for clickable
things only. If the headings need lifting, use size or letter-spacing.

**10. Rewrite the headings so they survive extraction. (`index-new.html`)**
`AI evaluation and assurance` / `Linguistic categories`. Keep the "in two places"
sentence in the thesis paragraph, where it works as prose.

**11. Extend the redesign past the homepage. (all `.html`)**
Add `style-v2.css` and `class="prose"` to `publications.html`, `essays.html`,
`cgel-correctives.html`, and the paper mirrors, which is where most of your named
audiences actually land. Repoint every "Back to home" consistently. Add `about.html`
to `sitemap.xml`. When `index-new.html` becomes `index.html`, fix `about.html`'s two
back-links.

**12. Cut the tagline. (`index-new.html`)**
The thesis line and the two doors already say it, better and twice.

**13. Housekeeping. (`index-new.html`, `style-v2.css`)**
Wrap the content in `<main>`. Align the two breakpoints at 640 px. Add middots
between the `.where` links so `Walkthrough` and `Adjudication app` do not read as one
phrase, matching what `publications.html` already does. Give
`.utility-secondary a` an underline or the maroon, so links look like links.

---

## 6. Verdict

**Revise structurally.**

Not "rethink." The diagnosis that the old page was flat rather than heavy was
correct, the thesis-first sequence is right, the type scale is disciplined, and going
from zero direct links to research artifacts to roughly a dozen is a genuine
improvement that should not be lost. Ship none of that back.

But the two-column grid is not a container, it is an assertion, and the assertion is
false. It claims parity between a four-item preprint column and a five-item preprint
column, one of which leads with a public benchmark and closes with a paper that does
not exist yet, the other of which leads with a manuscript the reader cannot open. It
sustains that claim only by excluding from the homepage every peer-reviewed
publication, every book, every year, and both institutional affiliations, which is to
say by excluding the entire body of evidence that would make the AI work worth a
stranger's time.

The information loss Brett should worry about is not the 202-word bio. It is the
proper nouns and the dates that went with it, and the three books that got demoted to
a link row. The whitespace is fine. The missing evidence is not.

Fixes 1 through 5 are the ones that change the outcome. The rest is craft.
