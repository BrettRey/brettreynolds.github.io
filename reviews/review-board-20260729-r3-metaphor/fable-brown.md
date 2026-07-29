# Commission response: Mandy Brown (persona), editorial review

Written in persona. Principles attributed to "me" here are reconstructions of
positions associated with Mandy Brown's public work on reading, editing, and
publishing systems, not quotations or specific published claims. No real
person's words are reproduced.

Reviewed: `index-v3.html`, `style-v3.css`, `publications.html`, `index.html`
(old), against the shared brief in `context-shared.md`.

---

## 1. Verdict on the diagnosis

The container diagnosis of the two-column version was correct, and v3 has
already fixed the worst of it, because a selected list has no coverage duty:
columns force filing ("everything lives in one of these"), while selection
files nothing. The path diagnosis is only half right. Every single-column
document is a sequence, so the question is never whether the page has an
order but whether the order reads as chronology, and right now it does,
because the prose teaches the chronology before the layout gets a chance:
"currently in AI evaluation and assurance, and for the last two decades in
English grammar" is the migration story in one sentence, at the top of the
page, above the fold, before a single section boundary has been crossed. This
is a prose problem wearing a layout costume, and a tag system would re-plumb
the house to fix a sentence.

One observation that sharpens the whole commission: open v3 with a screen
reader's headings list, or just read the `h2`s alone, and you get *Current
work; The idea behind it; Where it applies; Selected publications; Grammar,
teaching, and resources*. Stripped of every sentence, that outline tells the
migration story more plainly than the full page does. "Where it applies"
casts linguistics as the application ground of an idea that arrived from
somewhere else, which is historically backwards (the idea came from the
linguistics). The `h2`s are the page's own abstract, and the abstract
currently misstates the thesis.

---

## 2. Three mechanisms

### Mechanism A. Coordination, not narration (the sentence does the work)

**Schema.** EXPOSITION: order on the page means salience for a purpose, not
position in time. The entailment the research must accept is mild and, as it
happens, is the research: emphasis is field-and-purpose relative. There's a
second entailment Brett personally must accept: prose commits him to the
claim in words, where a layout could have gestured at it deniably. He writes
for a living; he can afford it.

The linguistic point, which he of all people will take: the migration reading
is produced by adverbs and tense, not by boxes. "Currently X, and for the
last two decades Y" subordinates the fields to a timeline. Coordination is
the syntax of simultaneity. Change the grammar of the sentence and the
geometry of the page stops mattering.

**Code.** Three edits to `index-v3.html`, zero edits to `style-v3.css`.

Edit 1, the role line (replaces lines 21-25):

```html
<p class="role">
  I work on what labels, scores, and categories license us to infer: benchmark
  scores and judge verdicts in AI evaluation, grammatical categories in English
  grammar and the philosophy of linguistics. One question, asked in both fields
  at once. The AI work leads this page because that's where the stakes are now;
  the grammar work is two decades deep and still running.
</p>
```

Edit 2, the first and third section headings (the second stays):

```html
<h2>Current work, in AI evaluation</h2>
```

```html
<h2>The same test, in linguistics</h2>
```

The parallel "in X" phrases make the fields grammatically coordinate, and the
headings-only outline now reads: current work in AI evaluation; the idea
behind it; the same test in linguistics; selected publications; grammar,
teaching, and resources. That outline states the thesis. No body text
required.

Edit 3, the linguistics section's intro sentence, which currently repeats
what the new heading says (replaces lines 111-114):

```html
<p>
  These take categories linguists already use and ask what membership actually
  lets you predict, and what happens at the edges.
</p>
```

Note what needs no edit: the best sentence on the page, "A benchmark score is
a label, and so is a grammatical category," already asserts simultaneity. The
old role line was undoing it from above. Stop undoing it and the page's
existing structure (a hub section holding the idea, with the AI spoke above
it and the linguistics spoke below) is already the radial arrangement the
brief asks for. v3 built the radial page; the labels on it were wrong.

**Cost.** About twenty words of added prose, two heading edits, no new type
sizes, no new colour roles, no new CSS, no new vocabulary for future items to
be classified into. Reader effort: none; the reader never sees a mechanism at
all.

**Degradation.** It's text. Screen readers get the corrected outline as an
improvement, not a fallback; the rotor/headings-list experience is the
single biggest beneficiary. No JavaScript involved anywhere.

### Mechanism B. The hub made visible (a strands index)

**Schema.** CENTER-PERIPHERY, the radial category itself: one method at the
center, fields as motivated extensions of unequal weight. Entailments the
research must accept: that there *is* a privileged center (the method is the
identity; fields are venues), and that an item may sit on two spokes at once.
It accepts both; the second is the whole point. The honest way to break the
container is not a tag but a deliberate double listing: in an index,
repetition is a statement.

**Code.** The idea section grows a `dl` after its thesis paragraph, before
the works list:

```html
<dl class="strands">
  <div>
    <dt>In AI evaluation</dt>
    <dd>Benchmark scores, judge verdicts, audit evidence.
      <a href="https://arxiv.org/abs/2607.01153" target="_blank" rel="noopener noreferrer">Adversarial pragmatics</a> &middot;
      <a href="https://philarchive.org/rec/REYTPW" target="_blank" rel="noopener noreferrer">Truth-tracking profiles</a></dd>
  </div>
  <div>
    <dt>In grammar</dt>
    <dd>Lexical categories, definiteness, countability.
      <a href="https://lingbuzz.net/lingbuzz/009852" target="_blank" rel="noopener noreferrer">Interjections</a> &middot;
      <a href="https://ling.auf.net/lingbuzz/009537" target="_blank" rel="noopener noreferrer">Countability</a></dd>
  </div>
  <div>
    <dt>In the philosophy of science</dt>
    <dd>How a category earns, keeps, or loses its standing.
      <a href="https://philarchive.org/rec/REYKAP-2" target="_blank" rel="noopener noreferrer">Kinds as projectibility profiles</a> &middot;
      <a href="https://philarchive.org/rec/REYTPW" target="_blank" rel="noopener noreferrer">Truth-tracking profiles</a> (listed twice on purpose)</dd>
  </div>
</dl>
```

```css
/* strands index: existing tokens only */
.strands { max-width: var(--measure); margin-top: 1.2rem; }
.strands div { margin-bottom: 0.8rem; }
.strands dt {
  font-size: var(--t-meta);
  font-variant: small-caps;
  letter-spacing: 0.06em;
  color: var(--meta);
}
.strands dd { margin-left: 0; }
.strands dd a { text-decoration: underline; text-underline-offset: 0.14em; }
```

(`div` wrappers inside `dl` are valid HTML and make the pairs style cleanly.)

**Cost.** This is where the taxonomy promise starts, quietly. Three `dt`
labels are a small controlled vocabulary, and controlled vocabularies invite
their fourth member. It also duplicates links that appear in the works lists
below, lengthens the most-read section, and shifts that section's genre from
essay toward directory. A reader may not notice that the double listing is
deliberate rather than an oversight, which is why the parenthetical is in the
markup; needing the parenthetical is itself a cost.

**Degradation.** No JavaScript. `dl` semantics are unevenly announced across
screen readers (pairs read fine in current NVDA and VoiceOver, less so in
some older combinations); if that worries him, the identical structure as
`h3` + `p` costs nothing and reads everywhere:

```html
<h3 class="strand">In AI evaluation</h3>
<p class="strand-items">Benchmark scores, judge verdicts, audit evidence. ...</p>
```

### Mechanism C. Give time one address

**Schema.** THE PAGE IS A DATED FRONT PAGE: real time lives in one marked
place, and everywhere else, order is freed to mean emphasis. Part of why
readers infer chronology from v3's sequence is that time is nowhere explicit,
so the layout is the only temporal evidence available and they read it. Give
time an address and the rest of the page de-temporalizes. The entailment the
research must accept is one it already argues for elsewhere on the same page:
"a benchmark you can't audit licenses nothing." A page that shows its dates
is making an evidentiary claim in Brett's own idiom. The second entailment is
personal: staleness becomes legible instead of deniable.

**Code.** Three edits, zero CSS.

The featured status line (the arXiv identifier grounds the month):

```html
<p class="status">Preprint, arXiv:2607.01153. Posted July 2026. A diagnostic framework and seed benchmark.</p>
```

The in-prep note, which currently says "posting soon." On the open web,
"soon" is the word that rots fastest; dates age honestly, promises age as
lies:

```html
<p class="status">In preparation; drafts complete as of July 2026</p>
```

And one line in the footer, above the copyright:

```html
<p>Page last revised July 2026. <a href="publications.html">The full list</a> carries current statuses.</p>
```

**Cost.** One clock to wind. If he forgets it for a year, the footer date
tells the truth about being forgotten, which is the correct failure mode, but
it is still a failure a reader can see. Mitigation: the status-line dates
ride the update workflow that already touches these surfaces every time a
paper changes state, so the marginal maintenance is close to zero.

**Degradation.** Text. Perfect under every condition.

---

## 3. My pick, defended

**Mechanism A, taking the two dated status lines from C along with it.** The
footer dateline is optional; the role-line rewrite and the two headings are
not.

Against B: v3 already has the hub. The idea section sits between the AI spoke
and the linguistics spoke and holds the boundary-crossing papers unfiled,
which is exactly what the two-column version couldn't do. B rebuilds that
existing structure as furniture, and its three `dt` labels are the seed of
the tag vocabulary I argue against below: prose can be rewritten freely next
year, but a recurring labeled index creates the expectation that every new
strand gets a label and every borderline item gets adjudicated. B is the
right move on the day there's a genuine fourth public strand (if the
mathematics results become a program rather than two manuscripts, say). Keep
it in the drawer with this code attached. Do not build it now.

Against C alone: C treats the calendar and leaves the grammar. The migration
reading is manufactured in the role line, and no footer dateline overrides a
sentence that sorts the fields into *now* and *then*. C is a supplement, and
its two best pieces cost four words each, which is why A absorbs them.

And the argument from the returning reader, which is my brief. What rewards a
second visit is visible change in a stable place. v3 already has the stable
place: the `.featured` block is a self-contained pattern that rotates by
replacing one block, and "Current work" is a heading that promises rotation.
In three years that promise has either been kept (good) or the heading has
started to lie; the design's job is to make keeping it cheap, and one
swappable block with a dated status line is as cheap as it gets. Neither B's
index nor a tag scheme gives the returning reader anything; both give the
*maintainer* more surfaces that can fall out of sync. If he wants to be kind
to his future self, add a maintainer's note in the source, which costs
nothing and renders nowhere:

```html
<!-- To rotate the featured item: replace this .featured block only.
     Keep the status line dated. Everything else on the page is stable. -->
```

One more point for A that neither rival touches: it is the only mechanism
that corrects the assistive-technology experience. The headings outline is
the first thing a rotor user hears, and it currently tells the career
narrative with no prose available to correct it. A fixes the story at the
level where the fewest cues survive.

---

## 4. What I would not do

**Field tags on the homepage, in any rendering.** This is the proposal on the
table, so plainly: no. Four reasons, in descending order of importance.

1. **A taxonomy is a promise, and this one won't hold.** The tag set that
   fits the homepage is three terms; the tag set that fits the archive on
   `publications.html` needs six or more on day one: mathematics (two 2026
   manuscripts, on tree independence polynomials and a Turán inequality),
   comparative cognition (the dogs-and-trails preprint), research ethics (the
   expert-judges paper), causal inference (difference-in-differences for
   corpora), lexicography, ESL pedagogy. The fourth field isn't hypothetical;
   it's already published. So the vocabulary either grows until it's noise or
   ossifies until it misfiles, and every new paper demands an adjudication,
   forever, performed by hand, by a man with other work. Prose degrades
   gracefully (you rewrite a sentence); taxonomy rots (you inherit a scheme).

2. **Tags model the wrong structure even on the theory's own terms.** A tag
   is flat and binary per label: multi-membership, but every membership
   all-or-nothing and equal in weight. The research says radial: motivated
   extensions of *unequal* weight. Tags don't remove the container schema,
   they multiply it, one small container per label. And apply the page's own
   test: what does a field tag on a fifteen-item selected list license a
   reader to infer? Nothing the titles don't already carry ("Adversarial
   Pragmatics for AI Safety Evaluation" and "The homeostatic maintenance of
   English countability" do not need badges to be told apart). A site
   arguing that labels must earn their standing through the inferences they
   support should not run chrome made of labels that support none.

3. **Genre mismatch.** Pill-shaped chips are the visual convention of
   database-generated pages. This page's authority comes from being visibly
   written and chosen by a person; that is also why its "selected work" can
   solve the filing problem that columns created. Selection is the answer to
   "papers had to be filed on one side": a selected list files nothing,
   because inclusion is an editorial act, not a coverage duty. Metadata is
   what you reach for when you've given up on selection and ordering, and on
   fifteen items you never should.

4. **The design spend.** Chips need a sixth colour role or borders the
   system doesn't have, at meta size where EB Garamond small caps are already
   doing the labeling work. The four-size, five-role system is the page's
   discipline; don't break it for ornament.

Also not: **client-side tag filtering** (JavaScript-dependent interaction
that saves the reader nothing at this scale and violates the constraint in
spirit); **an SVG hub-and-spoke diagram** (decorative, screen-reader-hostile
without a full text duplicate, and it freezes the intellectual structure at
the 2026 snapshot, because diagrams rot faster than prose: editing one means
redrawing it); **reverse-chronological ordering** (the academic default, and
the one arrangement that would install the career narrative completely);
and **retrofitting tags onto `publications.html`**, whose existing sections
(Books, Journal Articles, Proceedings, Talks) are boring on purpose. Genre
is the one taxonomy that doesn't rot, because the genres of academic
publishing change on a decades scale and are policed by institutions other
than Brett. Classify by the categories that are stable institutions; never
by the categories that are live research questions. His live research
question is precisely what "field" means, which is the best reason his
website shouldn't pretend to have settled it.

---

## 5. If Brett does nothing else

Rewrite the role sentence. The two adverb phrases, "currently" and "for the
last two decades," teach every reader the migration story in the first ten
seconds, before any section boundary, any heading, any layout schema has had
a chance to say anything; the columns are gone and the sequence is
innocent, but that sentence would re-teach the misreading on top of any
structure whatsoever. Replace it with the coordinated version in Mechanism A
("One question, asked in both fields at once. The AI work leads this page
because that's where the stakes are now; the grammar work is two decades deep
and still running"), which also states, out loud, the editorial reason the
page leads with AI, so the ordering stops being evidence of a departure and
becomes what it actually is, a judgment about where the stakes are. Twenty
words, no CSS, nothing new to maintain, and the page's structure, which was
already right, finally has prose that agrees with it.
