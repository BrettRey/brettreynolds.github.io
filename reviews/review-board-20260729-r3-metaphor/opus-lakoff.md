# The schema a projectibility-first page should instantiate

Reviewer: George Lakoff (persona). Round 3, metaphor board.
Baseline: `index-v3.html` @ `815a2735…`, `style-v3.css` @ `49757750…`, commit `3f35621`.

Everything I attribute to my own published account below is reconstruction, not
quotation. Treat the analysis as mine and the wording as this document's.

---

## 1. Verdict on the diagnosis

The two-column diagnosis is right but misattributed: a bare two-column grid on
the web in 2026 is a dead convention, and what made `index-new.html` a live
CONTAINER schema wasn't the adjacency, it was that each column carried a field
name and every work was assigned to exactly one of them. That is a partition,
and a partition is the classical theory whether you draw it as columns, rows, or
a bulleted list. The v3 diagnosis is, if anything, understated: v3 didn't remove
the container, it kept three of them and let them correlate with time, which is
what does the narrating.

### 1a. Why v3 is worse than "SOURCE-PATH-GOAL was installed"

HTML's document tree is a container schema by construction. A `<section>` with a
heading and a `<ul>` is a bounded region with all-or-nothing membership, and v3
has five of them. So the question was never whether the page contains containers.
It's what the containers are containers *of*.

In v3 they're these:

| Section | What's inside | What it correlates with |
|---|---|---|
| Current work | Adversarial pragmatics, delegation and evidentiary assurance | recent, AI |
| The idea behind it | Book, *Kinds as projectibility profiles*, *Expert grammaticality judges*, *Truth-tracking profiles*, *Effective without warrant* | the general account |
| Where it applies | Interjections, definiteness, countability, grammaticality de-idealized | older, linguistics |

The vertical axis by itself is weak PATH. Readers don't ordinarily read a
homepage's section order as biography. Three things turn the order into a
biography here: the temporal word *Current*, the derivational word *behind* (the
idea is prior, underneath, supporting), the downstream word *applies*, and the
reader's own world knowledge that the AI work is new and the grammar work is two
decades old. The page supplies three words and the reader supplies the arrow.

That's good news, because it means the fix is verbal and structural, not
geometric. Brett doesn't need a new layout. He needs three fewer words and one
fewer section boundary.

It also means the partition is doing arbitrary work right now, exactly as it did
in the two-column version. *Expert grammaticality judges as evaluators, not
participants* is a paper about who is entitled to produce a label, which is the
central question of LLM-judge validation, and it sits under "the idea," two
sections away from the benchmark. *Truth-tracking profiles: what large language
models participate in* is about LLMs and sits in neither the AI section nor the
linguistics section. The forced-choice problem survived the redesign.

### 1b. What the page's words already commit it to

Before proposing a visual schema, look at the verbal one, because it's already
coherent and it's better than any of the candidates on the table.

Counting tokens in `index-v3.html`: *license* three times, *standing* twice,
*earn* twice, *warrant* once, *support* twice (plus *support grades* in a title),
*demotion* once, *audit* twice, *inspection* once, *adjudication* twice,
*assurance* three times, *evaluator* twice, *under review* four times. That's
roughly twenty-five tokens from one source domain in about six hundred words,
and the status lines reinforce it by accident of academic convention.

The source domain is a licensing and credentialing authority: standing is
conferred, graded, and revoked; claims can be contested; there's an audit trail.
Its schemas are ENABLEMENT and REMOVAL OF RESTRAINT (Talmy's *letting*, the
force-dynamics behind *license*, *permit*, *warrant*), SUPPORT and VERTICALITY
(*support grade*, *standing*, *demotion*, all of which entail that a thing rests
on something that bears its weight and falls when the bearer fails), and an
adversarial procedure (*audit*, *challenge*, *adjudication*, *contest*).

Note what's absent. The verbal system uses no container words and no path words.
It's deontic and force-dynamic throughout. That's apt for the research, since
"what does this license you to infer" is a permission question, and permission is
force, not space.

One risk is worth naming and I think the page has already handled it. A tribunal
frame can imply that standing is conferred by decision rather than by how the
world behaves, which slides toward conventionalism. The line "where a category
stays stable but stops predicting" blocks that: the world can revoke standing
regardless of what the field decides. Keep that clause. It's carrying the
anti-conventionalist load for the whole metaphor system.

### 1c. Can the visual and verbal metaphors agree?

Only partially, and I'd have the visual give way.

Here is the schema inventory a static page layout actually gives you:
CONTAINER (nesting, boxes, rules), SCALE and VERTICALITY (size, weight, order),
NEAR-FAR (proximity grouping), PATH (reading order), LINK (rules, shared colour),
and weakly CENTER-PERIPHERY. That's it. There is no CSS for permission. You
cannot draw a licence. You can draw a fence, an arrow, a stack, a tether.

So the verbal system runs on schemas that layout cannot render, and the layout
runs on schemas the words never use. The single overlap is SUPPORT, and it's
already in the stylesheet: `.featured` gets a 3px maroon left rule and `.inprep`
gets a 3px grey one. A vertical bar carrying a block is a support mark, and the
two weights are already a two-level grade. The page invented a support-grade
device and spent it on publication status.

The conclusion follows. Any attempt to carry the thesis in layout is a
translation into a poorer schema set and will therefore misstate it, which is
precisely what happened twice. The layout's job here is to stop asserting a
category claim, not to assert the right one. Design by subtracting false claims,
and let the words carry the true one.

### 1d. What radial structure actually requires (and what tags give you)

Radial categories, reconstructed: a central subcategory plus non-central ones
that are not generated by rule from the centre but are *motivated* by it through
specific links, and the links differ from case to case. The extensions are
conventional, so they must be learned, not predicted. Gradience is an output.
Motivation is the account of the output. A display that shows only gradience has
rendered prototype effects and erased radial structure.

Apply that here. The centre isn't a set of works, it's a question. The extensions
are attached to it by links that are genuinely heterogeneous:

- grammatical categories: the case that generated the account;
- benchmark scores: linked by analogy of labelling practice, which the page
  already states ("a benchmark score is a label, and so is a grammatical
  category");
- grammaticality judgments: linked by evaluator role, a claim about who produces
  the label, not about the label;
- delegated authority and audit: linked by contestability, a claim about what
  happens after the label is challenged.

Four different links. A hub-and-spokes diagram has one radius and therefore one
relation, so it would flatten exactly the part that carries the content. This is
the strongest argument against a diagram and it comes from the structure of
radial categories, not from taste.

**Are tags non-container?** Partly, and the partial bit matters. A tag inverts
the containment relation (the item holds labels rather than the label-container
holding items), which converts a partition into a cover and kills forced choice.
That's real. But binary tags keep three classical properties: crisp membership,
equal weight across tags, and no stated motivation. `[AI eval] [linguistics]` on
a paper says the paper is fully in both, which is a different falsehood from the
columns, not an improvement in kind. Worse, a tag invites a filter, and a filter
is a container the reader builds at run time.

Four conditions would make tag membership genuinely graded and motivated:

1. **The grade attaches to the pair, not the item.** Not "tagged linguistics" but
   "supports strong inferences for syntacticians, weaker ones for evaluators."
2. **The motivation is stated in words.** A link is a specific relation, and
   different extensions have different ones.
3. **Demotion is representable.** A tag can't be negative. A sentence can say
   "this doesn't transfer to deployment." Brett's own vocabulary has demotion
   rules in it; a display that can only promote is under-expressive relative to
   his account.
4. **The vocabulary is open.** A closed tag set is a classical scheme with extra
   steps.

Conditions 1 through 4 are all satisfied by prose and none are satisfied by
chips. That's most of the argument for Mechanism A.

---

## 2. Mechanisms

### Mechanism A: audience lines (the work names its own audiences and what it licenses each)

**Schema.** LINK, carrying the verbal ENABLEMENT system. Two independently
existing things (a field, a category) joined by a stated relation, where severing
the relation separates them and doesn't destroy either. What Brett must accept:
that the relation is asymmetric and field-relative, that he's the one asserting
it, and that the assertion is contestable. All three are things he asserts in
print anyway. The entailment LINK does *not* carry is that either relatum is more
real than the other, which is the entailment CENTER-PERIPHERY would smuggle in.

**Structural consequence, and this is the point of the mechanism.** Right now
"who this is for" is encoded by which section an item sits in. Section equals
audience. In a projectibility-first page, audience has to be a property of the
*item*, statable more than once per item with different values. Once it moves
onto the item, the sections can no longer be audiences without contradicting the
items, so the sections become presentational (recency, form, weight) rather than
taxonomic. Nobody reads "Books" as a claim about intellectual structure. Everyone
reads "In linguistics" as one.

**HTML.**

```html
<ul class="works">

  <li>
    <a class="title" href="https://philarchive.org/rec/REYKAP-2">Kinds as projectibility profiles: support grades and demotion rules</a>
    <p class="lic"><span class="aud">The general statement.</span> What it takes for a category to earn a support grade, keep it, and lose it.</p>
    <span class="meta"><a href="https://philarchive.org/rec/REYKAP-2">PhilArchive</a></span>
  </li>

  <li>
    <a class="title" href="https://ling.auf.net/lingbuzz/009369">Definiteness and deitality in English: a projectibility-first account</a>
    <p class="lic"><span class="aud">For syntax and semantics.</span> The two properties come apart, and one category covering both predicts less than two categories covering one each.</p>
    <p class="lic"><span class="aud">For evaluation, at a lower grade.</span> Same failure shape as a score whose label holds steady while what it predicts drifts.</p>
    <span class="meta">Under review at <em>Journal of Linguistics</em>. <a href="https://ling.auf.net/lingbuzz/009369">LingBuzz</a> <a href="papers/definiteness-and-deitality/">Mirror</a></span>
  </li>

  <li>
    <a class="title" href="https://lingbuzz.net/lingbuzz/010081">Expert grammaticality judges as evaluators, not participants</a>
    <p class="lic"><span class="aud">For both fields at once.</span> Who produces a label changes what the label licenses, whether the label is a star on a sentence or a score from an LLM judge.</p>
    <span class="meta"><a href="https://lingbuzz.net/lingbuzz/010081">LingBuzz</a> <a href="papers/expert-grammaticality-judges/">Mirror</a></span>
  </li>

</ul>
```

**CSS.** Two rules. No new sizes, no new colours.

```css
.works .lic {
  margin-top: 0.3rem;
  padding-left: 0.85rem;
  border-left: 1px solid var(--rule);
}

.works .aud {
  font-variant: small-caps;
  letter-spacing: 0.05em;
  color: var(--meta);
}
```

`.works li` already sets `max-width: var(--measure)`, so `.lic` inherits the
measure and the `padding-left` produces the hanging indent inside it. The 1px
rule is deliberately lighter than `.featured`'s 3px, so the existing weight
ordering still reads.

**The design rule that makes or breaks it: the lines must be uneven.** Not every
work gets two. A work that speaks to one field gets one line. A work that
genuinely reaches a second gets a second, and the second usually says it's
weaker. If every item ends up with exactly two lines, the device is fake and
worse than the columns, because it would fabricate a symmetry between the fields
that the work doesn't have. Family-resemblance sets produce ragged displays. A
tidy result here is evidence of a lie.

**Cost.** Added vocabulary: none. Small caps already means "label" on this page,
and `--meta` and `--rule` are existing roles. Added markup: one class per line,
one per lead-in. Added writing: six to ten clauses that Brett has to actually
think about, which is the real cost and it's a day's work, not an hour's. Added
reader effort: none for skimmers (the titles and links are unchanged); a longer
page for readers who go line by line.

Vertical space is the genuine trade. At body size, audience lines roughly double
the height of the works list. Fifteen works plus lines won't fit. Six to eight
will. I'd call that a feature: a projectibility-first homepage should show fewer
works with their inferences stated rather than more works filed correctly. The
catalogue already exists at `publications.html` and is properly a catalogue.

**Degradation.** `<p>` inside `<li>` is valid flow content. A screen reader reads
title link, paragraph, paragraph, meta, in DOM order, with no ARIA required.
Small caps read as ordinary text. With CSS entirely off it's a nested list of
paragraphs in the right order. With JavaScript off, nothing changes, because
there is none. The punctuation is in the markup rather than in a `::after`, so
nothing depends on generated content being announced.

---

### Mechanism B: support weight (make the grade visible with the device the page already owns)

**Schema.** SUPPORT and VERTICALITY, plus a restrained CENTER-PERIPHERY. What
Brett must accept: that some works bear more of the account's weight than others,
that the grades are his judgment, and that a low grade is a scope statement
rather than an insult.

One entailment he should *not* accept, and it's why this can't be the whole
answer. SUPPORT is one-directional: the thing rests on the support, and the
support doesn't rest on the thing. That's right for "what does this license" and
wrong for "what tests the account." His countability paper is explicitly about
bidirectional inference, and the applications are evidence for the framework as
much as consequences of it. A support metaphor can't say that. Words can.

**HTML.** Reuses the left-rule idiom, with the grade also named in the meta line
so nothing depends on a visual difference alone.

```html
<li data-support="3">
  <a class="title" href="…">Kinds as projectibility profiles</a>
  <span class="meta">The general statement. <a href="…">PhilArchive</a></span>
</li>

<li data-support="1">
  <a class="title" href="…">What dogs know about trails</a>
  <span class="meta">Partial transfer, at the mechanism level only. <a href="…">PsyArXiv</a></span>
</li>
```

**CSS.** Grade rides on rule *width*, which is a scalar and therefore fits a
grade. Colour stays free to mean "current," which is what `.featured` already
uses it for. The compensating padding keeps every item's text on one left edge
despite the varying border, which a naive version gets wrong by three pixels.

```css
.works li[data-support] {
  border-left-style: solid;
  border-left-color: var(--rule);
}
.works li[data-support="3"] { border-left-width: 4px; padding-left: 0.9rem; }
.works li[data-support="2"] { border-left-width: 2px; padding-left: calc(0.9rem + 2px); }
.works li[data-support="1"] { border-left-width: 1px; padding-left: calc(0.9rem + 3px); }
```

**Cost.** Added vocabulary: one scalar channel (rule width) layered onto a mark
that already carries a categorical channel (rule colour). Two channels on one
mark is more to learn than one, and I'd want the grade named in words on every
item so the width is redundant coding rather than the only coding. Added markup:
one attribute per item. Added reader effort: small, and only for readers who
notice the widths at all.

**Degradation.** Borders are invisible to screen readers, always, which is why
the grade has to be in the meta text. Once it is, the visual channel is pure
redundancy and its loss costs nothing. No JavaScript. With CSS off, the words
survive intact.

The honest summary: B is cheap, compatible with A, and decorative on its own. It
shows gradience and says nothing about motivation, so by itself it renders
prototype effects and erases radial structure.

---

### Mechanism C: the second carving (same material, two legitimate readings)

**Schema.** Alternative structurings of one domain. This is the only mechanism
that *demonstrates* the thesis rather than describing it: if the page can show
the same works organised two ways, both correct, it has enacted "two overlapping
fields can track different, equally real categories through much of the same
material."

**HTML,** with no JavaScript, using `:target`. Crucially it dims rather than
hides, because hiding rebuilds the container and destroys the claim that the
material is shared, and it never reorders, because reordering desynchronises
visual order from DOM order.

```html
<span id="lens-all"  class="lens"></span>
<span id="lens-ling" class="lens"></span>
<span id="lens-eval" class="lens"></span>

<nav class="lenses" aria-label="Read the list as">
  <a href="#lens-all">Everything</a>
  <a href="#lens-ling">A linguist</a>
  <a href="#lens-eval">An evaluator</a>
</nav>

<ul class="works lensed">
  <li class="f-ling f-eval">…</li>
  <li class="f-ling">…</li>
  <li class="f-eval">…</li>
</ul>
```

**CSS.** The empty spans have to precede both the nav and the list, since `~`
only reaches forward.

```css
.lens { display: block; height: 0; }

#lens-ling:target ~ .lenses a[href="#lens-ling"],
#lens-eval:target ~ .lenses a[href="#lens-eval"] {
  color: var(--text);
}

#lens-ling:target ~ .lensed > li:not(.f-ling),
#lens-eval:target ~ .lensed > li:not(.f-eval) {
  color: var(--meta);
}
#lens-ling:target ~ .lensed > li:not(.f-ling) .title,
#lens-eval:target ~ .lensed > li:not(.f-eval) .title {
  color: var(--meta);
}
```

**Cost.** Added vocabulary: a control idiom that doesn't exist anywhere else on
the site, plus a per-item field-class scheme, which is a closed tag set with the
problems listed in 1d. Added markup: three empty spans, a nav, and two classes
per item. Added reader effort: substantial, because it's an unfamiliar control at
the top of a homepage that most visitors will ignore, and the thesis then lives
in an interaction most readers never perform.

**Degradation.** This is where it fails. The lens produces no perceptible change
for a screen reader user, so it's a control that does nothing for them. Following
a fragment link moves the scroll position and resets the focus starting point to
an empty element, which is disorienting. Dimming links to `--meta` contradicts
the stylesheet's own stated rule that maroon means clickable. And an
`opacity`-based version fails contrast outright: `--text` at 0.45 on `--bg` lands
near 3.5:1, under the 4.5:1 floor for body text, so you're forced into the
colour-swap version and then into extra selectors for every nested element.

There's a version of C that survives all of this and costs one sentence:

> A linguist reading this list will find the centre in the countability and
> definiteness papers. Someone working on evaluation will find it in the
> benchmark and the assurance frameworks. Both readings are right, and that's
> the claim.

That's the second carving, stated, with no markup, no control, and no
accessibility cost. I'd ship that sentence and not the lens.

---

## 3. Pick: Mechanism A, plus the one sentence from C

A is the only one of the three that carries *motivation*, and motivation is what
separates radial structure from a prototype effect. B shows that some works
matter more, which is gradience without an account of it. C's full version shows
that the material can be read two ways but never says why any particular work
reaches a second field.

Against B specifically: B is a good twenty-minute addition and I'd take it, but
it can't be the answer, because rule widths can't state a relation, can't name an
audience, and can't express demotion. Brett's own framework has demotion rules in
it. A display device that can only rank is under-expressive relative to the
theory it's supposed to be exhibiting. B is also load-limited in the way all
visual grade encodings are: three levels is about the maximum a reader will
resolve without a legend, and a legend is a cost you can't recover.

Against C: C is the more intellectually ambitious mechanism and I'd still refuse
it. It puts the argument inside an optional interaction, and the population most
likely to skip that interaction includes every screen reader user and every
person who scrolls past a nav they don't recognise. A thesis that only some
readers can perceive isn't a thesis the page has made. The one-sentence version
keeps the content and drops the failure.

A also has the best cost profile against the four-size, five-colour budget: it
spends nothing. Two CSS rules, both built from existing custom properties and an
existing type treatment. The whole expense is in writing, which is where a
linguist's page should be spending.

The strongest objection to A is that it makes the page longer and slower to skim.
I accept that and would pay for it by cutting the works list from fifteen to
seven. Selection principle: keep the works whose audience lines differ from each
other, and drop any work whose line would restate another's. If two papers
license the same inference for the same field, the page only needs the better
one, and `publications.html` is right there.

---

## 4. What I would not do

**No hub-and-spokes diagram, in SVG or CSS.** The obvious version fails for a
reason internal to the theory, not for a reason about web design. A spoke has one
radius, so it encodes one relation and one distance. The links between the centre
and each field here are heterogeneous: analogy of labelling practice for
benchmark scores, evaluator role for judgment studies, contestability for audit
work. A diagram collapses four different motivations into one scalar distance,
which renders the gradience and erases the motivation. You'd then have to write
alt text that restates all four relations in prose, at which point you've written
Mechanism A and can delete the picture. Fixed geometry also can't reflow to a
phone, and the page's `--shell` is 46rem.

**No filter chips or clickable tags.** A filter is a container the reader builds,
and hiding non-matching items destroys the "same material, two carvings" claim by
removing the material. Filtering also re-crisps membership at the moment of use:
an item is either in the result set or gone.

**No Venn diagram, no overlap band, no "interdisciplinary" middle column.** That's
three containers rather than two, and it makes crossing exceptional. The claim is
that crossing is ordinary and the field boundary is the artefact.

**No "boundary-crossing" badge** on the papers that cross, for the same reason. A
badge marks the crossers as a special class, which reinstalls the boundary it was
meant to dissolve.

**No reordering via flexbox `order` or grid placement.** Visual order then
diverges from DOM order, which breaks reading order for screen readers and tab
order for keyboard users. Any re-sort mechanism worth having has to reorder the
DOM, which means JavaScript, which means the page has to work without it anyway,
which means you've built the thing twice.

**No tabs.** Tabs are containers with a lid.

**No animation attempting to render force or permission.** It's the one schema
family the layout genuinely lacks, and every attempt to draw it (gates, locks,
arrows pushing through barriers) would be ornament on a page whose whole
character is the absence of ornament.

**And no uniform two-audience treatment on every item.** If Mechanism A gets
applied evenly, it becomes a table with two columns and I'm back to reviewing
`index-new.html`.

---

## 5. If Brett does nothing else

Merge "The idea behind it" and "Where it applies" into a single section, and
promote the display question to be that section's heading. Those two headings are
what install the whole false story: *behind* says the account is prior and
underneath, *applies* says the linguistics is downstream, and the two containers
happen to sort recent-and-general from older-and-linguistic, so the reader
supplies a migration arrow the page never intended. Merging them deletes the
derivation claim, deletes the partition between account and application, and puts
*Expert grammaticality judges* and *Truth-tracking profiles* next to interjections
and countability, which is the actual claim: one method, several fields, at once.
The cost is one `</section><section><h2>` deleted and one tag changed from `<p
class="thesis-q">` to `<h2 class="thesis-q">`. The stylesheet needs no edit at
all, because `.thesis-q` already overrides every property the `h2` rule sets
(font-size, weight, variant, letter-spacing, colour, and margin), so the question
keeps its display size and the heading outline stays intact for screen readers.
The page then reads: who I am, what I'm doing now, *what does a label license you
to infer*, nine works that answer it in different fields, and the rest. Nobody
reads that shape as a career.
