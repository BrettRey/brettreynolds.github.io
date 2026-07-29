# The page as a representation problem

Reviewer angle: Bret Victor (simulated). Where I appeal below to a position I am
associated with (roughly: most information software is a graphic design problem
in disguise, the reader's question is the design brief, and adding interaction
is often a way of avoiding the work of designing a good static picture), treat
that as a reconstruction of a stance, not a quotation.

I could not run a browser. Everything about widths, wrapping, and screen-reader
behaviour below is reasoned from the markup and the cascade in `style-v3.css`,
and should be checked once before shipping.

---

## 1. Verdict on the diagnosis

The container reading of the old two-column version is correct and worth taking
seriously: two bounded side-by-side regions force a filing decision for every
item, and forcing that decision on a boundary-crossing paper is a claim about
the paper, not a layout convenience. The SOURCE-PATH-GOAL reading of `index-v3`
is right about the page and wrong about the cause. Vertical stacking on the web
is so conventional that readers take it as priority order, not as narrative;
what actually narrates a career here is nine words of heading copy, "The idea
behind it" and "Where it applies," which say the idea came out of the AI work
and gets exported to linguistics. Fix the copy and most of the schema problem
goes away, so the interesting question is not how to repair v3 but whether the
page is showing the right thing at all. Tags are not the repair, because a tag
answers "what would this be filed under," and no reader arrives with that
question.

---

## 2. What the reader actually arrives with

Design backwards from the question, so let's name the questions. Six kinds of
arrival, roughly:

1. **AI safety or evals person, arriving from arXiv.** "Is this benchmark worth
   my time, and why is a linguist writing it?"
2. **Linguist, arriving from LingBuzz.** "What is this projectibility-first
   thing, and has he run it on anything I care about?"
3. **Philosopher of science.** "Is there a general statement, or is this applied
   Boyd with new examples?"
4. **Editor, panel, search committee.** "Is this one programme or a scatter of
   twenty preprints?"
5. **ESL teacher or student.** "Where's the grammar book?"
6. **A crawler or an agent.** Structured facts.

Note that 1, 2, 3, and 4 are the same question wearing different clothes: *is
this one thing, and if so what is it?* Brett already knows this, because the
first forty words of the page answer exactly that question in prose ("I work on
what labels, scores, and categories license us to infer: currently in AI
evaluation and assurance, and for the last two decades in English grammar").
That sentence is carrying the entire argument. The layout underneath it is
carrying something else, which is why this review board exists.

Reader 5 has a navigation question, not an argument question, and the top nav
plus the "Grammar, teaching, and resources" list already answers it. Reader 6 is
served by `llms.txt`, `/okf/`, and the `/papers/` mirrors. So the homepage needs
**one** representation, aimed at the unity question, and it can leave the other
two readers to surfaces that already exist. `publications.html` stays what it
is. The division is clean and worth stating out loud: *the homepage is an
argument, the publications page is an index.* Most academic homepages fail
because they try to be a small index instead of a good argument.

### Why tags are the wrong answer

`field` is a column in a database Brett does not have. Tags are that column
rendered as chips, and filtering is what you do with a column when you do not
know what the reader wanted. Four specific problems:

- **Nobody asks the question a tag answers.** "Show me the ones tagged
  linguistics" is a filing clerk's question. Readers 1 to 4 want to know whether
  the same method really runs in more than one place, and a tag cannot show
  that, because a tag is attached to one item at a time. Relationships between
  items are invisible to a labelling scheme.
- **Filtering hides by default.** A filter interface begins by showing the
  reader everything and then asks them to remove things. Every click is the page
  saying "I could not work out how to show you this, so please reconstruct it."
  With roughly a dozen works above the fold, this is absurd. You filter ten
  thousand rows. You do not filter ten.
- **Multiple tags do not escape the container.** Two overlapping circles are
  still two circles, and the lens where they overlap is a third container. A tag
  set says "belongs to both." Brett's claim is stronger and different: two
  fields track *different* categories through much of the same material. A tag
  can express *both*. It cannot express *different but equally real*. So the
  proposed repair under-describes the theory it was invented to rescue.
- **The good use of tags already exists on this site.** Machine-readable field
  metadata belongs in `llms.txt` and the OKF export, where a consumer genuinely
  does want a column called `field`. Structured metadata for machines, a picture
  for people. Do not put the machines' data model on the human page.

The rest of this is three ways to draw the picture.

---

## 3. Mechanism A: the crossing matrix

**One question per row, one field per column, and the works that state the
method span the whole width.**

### The schema it commits to

Not CONTAINER and not PATH. A matrix commits the page to: *the rows are the
invariant, the columns are the conditions under which the invariant is tested,
and a cell is a result, not a membership.* That is a very different entailment
from "these are my AI papers." A column headed "In AI evaluation" containing the
adversarial-pragmatics benchmark does not say the benchmark belongs to AI
evaluation; it says that when you ask row 1's question in AI evaluation, this is
what you get. Nothing has to be filed, because every row is a crossing by
construction.

What the research has to accept in return: that the row questions are real, that
each is genuinely answered on different evidence in different fields, and that a
work which cannot be placed under any row is a different kind of thing (the
Jespersen edition, the ESL textbook, the Erdős polynomial work) and belongs
elsewhere on the page. That is a real editorial discipline, and it happens to be
the discipline the theory demands anyway: if you cannot say what a work licenses
you to predict, it does not get a row.

Two smaller commitments worth naming. Left-to-right column order implies
adjacency, so put philosophy of science in the middle, where the implied
adjacency is true. And an empty cell is a visible gap, which is honest, and
which a tag cloud can never show you.

### Markup

Replace the "The idea behind it" and "Where it applies" sections in
`index-v3.html` with this single section. The rest of the page is untouched.

```html
    <section>
      <h2>One question, three fields</h2>

      <p class="thesis-q">What does a label license you to infer?</p>

      <p>
        A benchmark score is a label, and so is a grammatical category. Both earn
        their standing from the predictions they support for some field and
        purpose, not from an essence, a definition, or a mechanism that holds
        them together. Each row below is one form of that question. Each column
        is a field where it has to be settled on different evidence. The rows
        that run the full width are the works that state the question itself, so
        they sit in no column.
      </p>

      <table class="matrix">
        <thead>
          <tr>
            <th scope="col">In AI evaluation</th>
            <th scope="col">In philosophy of science</th>
            <th scope="col">In English grammar</th>
          </tr>
        </thead>

        <tbody>
          <tr class="q">
            <th colspan="3" scope="rowgroup"><span>What does membership let you predict?</span></th>
          </tr>
          <tr>
            <td>
              <span class="colkey">In AI evaluation</span>
              <a href="https://arxiv.org/abs/2607.01153" target="_blank" rel="noopener noreferrer">Adversarial pragmatics</a>
              <span class="meta">What a safety benchmark score licenses. arXiv 2607.01153</span>
            </td>
            <td>
              <span class="colkey">In philosophy of science</span>
              <a href="https://philarchive.org/rec/REYFWF" target="_blank" rel="noopener noreferrer">Function-first without function-in-syntax</a>
              <span class="meta">Field-relative kinds. PhilArchive</span>
            </td>
            <td>
              <span class="colkey">In English grammar</span>
              <a href="https://lingbuzz.net/lingbuzz/009852" target="_blank" rel="noopener noreferrer">Interjection as a lexical category</a>
              <span class="meta">What membership lets us predict. LingBuzz</span>
            </td>
          </tr>
        </tbody>

        <tbody>
          <tr class="q">
            <th colspan="3" scope="rowgroup"><span>Who is competent to judge, and in what role?</span></th>
          </tr>
          <tr>
            <td>
              <span class="colkey">In AI evaluation</span>
              <a href="papers/adversarial-pragmatics-for-ai-safety-evaluation/judgment-protocol.html">The adjudication protocol</a>
              <span class="meta">LLM-judge validation, open to inspection</span>
            </td>
            <td>
              <span class="colkey">In philosophy of science</span>
              <a href="https://philarchive.org/rec/REYTPW" target="_blank" rel="noopener noreferrer">Truth-tracking profiles</a>
              <span class="meta">What large language models participate in. PhilArchive</span>
            </td>
            <td>
              <span class="colkey">In English grammar</span>
              <a href="https://lingbuzz.net/lingbuzz/010081" target="_blank" rel="noopener noreferrer">Expert grammaticality judges</a>
              <span class="meta">Evaluators, not participants. LingBuzz</span>
            </td>
          </tr>
        </tbody>

        <tbody>
          <tr class="q">
            <th colspan="3" scope="rowgroup"><span>Where does the inference stop?</span></th>
          </tr>
          <tr>
            <td>
              <span class="colkey">In AI evaluation</span>
              <span class="title">Delegation assurance</span>
              <span class="meta">In preparation. Tool-using systems acting under delegated authority.</span>
            </td>
            <td>
              <span class="colkey">In philosophy of science</span>
              <a href="https://philarchive.org/rec/REYNES" target="_blank" rel="noopener noreferrer">Not every stable cluster is homeostatic</a>
              <span class="meta">PhilArchive</span>
            </td>
            <td>
              <span class="colkey">In English grammar</span>
              <a href="https://ling.auf.net/lingbuzz/009369" target="_blank" rel="noopener noreferrer">Definiteness and deitality</a>
              <span class="meta">Under review, <em>Journal of Linguistics</em></span>
            </td>
          </tr>
        </tbody>

        <tbody>
          <tr class="q">
            <th colspan="3" scope="rowgroup"><span>What keeps a category standing when nothing essential holds it together?</span></th>
          </tr>
          <tr>
            <td>
              <span class="colkey">In AI evaluation</span>
              <span class="title">Evidentiary assurance</span>
              <span class="meta">In preparation. Audit, challenge, and remediation.</span>
            </td>
            <td>
              <span class="colkey">In philosophy of science</span>
              <a href="https://philarchive.org/rec/REYEWW" target="_blank" rel="noopener noreferrer">Effective without warrant</a>
              <span class="meta">Under review, <em>Synthese</em></span>
            </td>
            <td>
              <span class="colkey">In English grammar</span>
              <a href="https://ling.auf.net/lingbuzz/009537" target="_blank" rel="noopener noreferrer">The homeostatic maintenance of English countability</a>
              <span class="meta">Under review, <em>Linguistics</em></span>
            </td>
          </tr>
        </tbody>

        <tbody class="whole">
          <tr class="q">
            <th colspan="3" scope="rowgroup"><span>Stated in general, so in none of the three</span></th>
          </tr>
          <tr>
            <td colspan="3">
              <span class="title"><em>Words That Won&rsquo;t Hold Still: How Linguistic Categories Work</em></span>
              <span class="meta">Book-length statement. Completed manuscript, under peer review at Cambridge University Press.</span>
            </td>
          </tr>
          <tr>
            <td colspan="3">
              <a href="https://philarchive.org/rec/REYKAP-2" target="_blank" rel="noopener noreferrer">Kinds as projectibility profiles: support grades and demotion rules</a>
              <span class="meta">How a category earns, keeps, or loses its standing. PhilArchive</span>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
```

Two content warnings before you paste this. First, I placed each paper from its
public title and blurb, not from the paper. Check every cell against what the
paper argues, and in particular check *Truth-tracking profiles* under "who is
competent to judge" and *Delegation assurance* under "where does the inference
stop," which are the two placements I am least sure of. Second, the row
questions are drafts. They are the argumentative content of the page now, so
they deserve more care than the headings they replace.

### CSS

Append to `style-v3.css`. Zero new colours, zero new type sizes, no new
breakpoint.

```css
/* ---------- The crossing matrix ---------- */

.matrix {
  width: 100%;
  border-collapse: collapse;
  text-align: left;
  margin-top: 0.3rem;
}

.matrix thead th {
  width: 33.33%;
  padding: 0 1.1rem 0.4rem 0;
  vertical-align: bottom;
  font-size: var(--t-meta);
  font-weight: 400;
  font-variant: small-caps;
  letter-spacing: 0.09em;
  color: var(--meta);
}

.matrix tbody { border-top: 1px solid var(--rule); }

/* The question is prose, not a label. Position and the rule above it are
   enough to mark it, so it needs no new weight, size, or colour.
   The measure is set on the inner span, because max-width on a table cell is
   only a suggestion to the table layout algorithm and gets ignored here. */
.matrix .q th {
  font-weight: 400;
  text-align: left;
  padding: 0.85rem 0 0.5rem;
}

.matrix .q th span {
  display: inline-block;
  max-width: var(--measure);
}

.matrix td {
  width: 33.33%;
  padding: 0 1.1rem 0.95rem 0;
  vertical-align: baseline;
}

.matrix td:last-child { padding-right: 0; }
.matrix td[colspan] { width: auto; }

.matrix td .title,
.matrix td > a { display: block; line-height: 1.35; }

.matrix td .meta {
  display: block;
  margin-top: 0.1rem;
  font-size: var(--t-meta);
  color: var(--meta);
}

/* Same reason: constrain the children of a spanning cell, not the cell. */
.matrix td[colspan] .title,
.matrix td[colspan] > a,
.matrix td[colspan] .meta { max-width: var(--measure); }

/* Visible only in the stacked layout, where the column heads are gone. */
.matrix .colkey { display: none; }
```

And inside the existing `@media (max-width: 34rem)` block, add:

```css
  /* Below this width three columns give about eleven characters a line, which
     is unreadable. The table becomes a labelled stack. Each cell then carries
     its column name as real text, so nothing is lost in reading order:
     question, field, work, status. */
  .matrix, .matrix thead, .matrix tbody,
  .matrix tr, .matrix th, .matrix td { display: block; width: auto; }

  .matrix thead { display: none; }
  .matrix td:empty { display: none; }
  .matrix td, .matrix td:last-child { padding: 0 0 0.95rem; }
  .matrix .q th { padding: 0.85rem 0 0.5rem; }

  .matrix .colkey {
    display: block;
    font-size: var(--t-meta);
    font-variant: small-caps;
    letter-spacing: 0.09em;
    color: var(--meta);
  }
```

### Cost

Added vocabulary: none. Four type sizes and five colours as before, one hairline
rule which the page already uses under `hr` and `footer`. Added markup: a real
table, which is more elements than a list but not more concepts. Added reader
effort: the reader has to understand that rows are questions and columns are
fields, which the paragraph above the table states in one sentence. That is the
whole tax.

Added *authorial* effort is the real cost, and it is not small. Four questions
that are honest, distinct, and answerable in three fields is a genuine piece of
writing, and if a question is vague the matrix will show it, because the three
cells under a vague question look interchangeable.

### Degradation

- **No JavaScript:** identical. Nothing here uses JS.
- **Screen reader, wide layout:** a real table with `scope="col"` and
  `scope="rowgroup"`. Each cell is announced with both its column head and its
  question. This is the strongest reason to use a table rather than a grid of
  `<div>`s: a table is the only markup where the two-way relationship is
  *announced*, not merely drawn. The picture and the spoken version carry the
  same argument.
- **Screen reader, stacked layout:** setting `display: block` on table parts
  drops the implicit table roles in most browsers, so this reads as a labelled
  stack rather than a grid. No information is lost, because the question is
  still a heading cell and every data cell now begins with its field name in
  text. Worth one pass with VoiceOver to confirm.
- **Text zoom to 200%:** the table reflows to the stacked layout, which is the
  right behaviour.
- **Printing:** fine, the table prints.

---

## 4. Mechanism B: the reach chart

**One row per work; a bar whose horizontal extent shows how far across the
fields that work reaches.**

If the cross-boundary papers are the evidence for the unity claim, draw the
crossing rather than annotating it. A work confined to grammar gets a short bar
at the right. A work that runs from grammar through philosophy into AI
evaluation gets a bar three columns wide. Reach becomes a length you can compare
down the page without reading a word.

### The schema it commits to

A one-dimensional scale over fields, with adjacency and distance. That is a
heavier commitment than the matrix, and it is the honest reason I do not pick
it: it asserts that philosophy of science lies *between* grammar and AI
evaluation, and that the distance from grammar to AI evaluation is greater than
from grammar to philosophy. Both are arguable, neither is Brett's claim, and a
reader who disagrees with the axis will discount the whole picture. It also
smuggles in an evaluative reading, because a longer bar looks like a better
paper.

### Markup and CSS

Inline SVG is the wrong tool here. Bars aligned to a shared axis are exactly
what CSS grid does natively, and the HTML version stays selectable, zoomable,
themeable, and readable by a screen reader without a hand-written text
alternative. Use SVG when you need curves, arrowheads, or a genuinely
non-rectangular geometry. Here you do not.

```html
    <section>
      <h2>How far each work reaches</h2>

      <p id="reach-note">
        Each bar spans the fields in which the work is meant to hold. The wider
        the bar, the further the same argument travels.
      </p>

      <div class="reach" aria-describedby="reach-note">
        <p class="reach-axis" aria-hidden="true">
          <span>AI evaluation</span><span>Philosophy of science</span><span>English grammar</span>
        </p>

        <ul class="reach-list">
          <li style="--from:1; --to:4">
            <a href="https://philarchive.org/rec/REYKAP-2" target="_blank" rel="noopener noreferrer">Kinds as projectibility profiles</a>
            <span class="bar" aria-hidden="true"></span>
            <span class="meta">AI evaluation, philosophy of science, English grammar</span>
          </li>
          <li style="--from:1; --to:3">
            <a href="https://arxiv.org/abs/2607.01153" target="_blank" rel="noopener noreferrer">Adversarial pragmatics</a>
            <span class="bar" aria-hidden="true"></span>
            <span class="meta">AI evaluation, philosophy of science</span>
          </li>
          <li style="--from:2; --to:4">
            <a href="https://lingbuzz.net/lingbuzz/010081" target="_blank" rel="noopener noreferrer">Expert grammaticality judges</a>
            <span class="bar" aria-hidden="true"></span>
            <span class="meta">Philosophy of science, English grammar</span>
          </li>
          <li style="--from:3; --to:4">
            <a href="https://ling.auf.net/lingbuzz/009537" target="_blank" rel="noopener noreferrer">The homeostatic maintenance of English countability</a>
            <span class="bar" aria-hidden="true"></span>
            <span class="meta">English grammar</span>
          </li>
        </ul>
      </div>
    </section>
```

`--from` and `--to` are grid line numbers, so three columns run on lines 1 to 4.
Inline custom properties are the data here, which suits a hand-edited site: to
change a work's reach you edit two integers next to its title.

```css
/* ---------- Reach chart ---------- */

.reach-axis,
.reach-list li {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 0.6rem;
}

.reach-axis {
  font-size: var(--t-meta);
  font-variant: small-caps;
  letter-spacing: 0.09em;
  color: var(--meta);
  border-bottom: 1px solid var(--rule);
  padding-bottom: 0.3rem;
  margin-bottom: 0.7rem;
}

.reach-list { list-style: none; }

.reach-list li {
  row-gap: 0.2rem;
  margin-bottom: 0.9rem;
}

.reach-list li > a,
.reach-list li > .meta { grid-column: 1 / -1; }

.reach-list li > .meta {
  font-size: var(--t-meta);
  color: var(--meta);
}

.reach-list .bar {
  grid-column: var(--from) / var(--to);
  height: 0.3rem;
  border-radius: 0.15rem;
  background: var(--link);
  opacity: 0.3;
}

@media (max-width: 34rem) {
  .reach-axis { display: none; }
  .reach-list .bar { display: none; }
}
```

### Cost

An axis, a set of bars, and a rule the page did not have, so this is the most
expensive of the three in visual vocabulary. It also needs a colour fill; the
version above avoids a sixth colour role by reusing `--link` at low opacity,
which works in both themes. Reader effort is low once the axis is read, which is
the appeal.

### Degradation

- **No JavaScript:** identical.
- **Screen reader:** the bar is decoration (`aria-hidden`) and the `.meta` line
  is its text equivalent, so a listener gets "Kinds as projectibility profiles.
  AI evaluation, philosophy of science, English grammar." Note what that text
  equivalent is: a list of field tags. The spoken version of this chart *is* the
  tag list, which tells you the visual gain is the length comparison and nothing
  else.
- **Narrow screens:** the bars collapse, because three columns of 95px cannot
  carry a comparison. Below 34rem the chart degrades to a titled list with a
  field line, which is Mechanism C with extra steps. That is a real weakness on
  phones.

---

## 5. Mechanism C: the undifferentiated stream

**No geometry at all. One flat list, most recent first, each item with a single
line saying what it licenses. The unity claim carried entirely by one paragraph
of prose.**

This is the sceptic's option, and it deserves a hearing. The argument for it: a
unity claim is a claim, claims belong in sentences, and any spatial arrangement
will be over-read (this review board is the proof). A reverse-chronological list
commits the page to one thing only, that time passes, which is uncontroversially
true and metaphorically inert. Nothing is filed, nothing is bounded, no path is
implied beyond the one nobody disputes.

### Markup

Reuses the existing `.works` class exactly. The only addition is a `.licenses`
line.

```html
    <section>
      <h2>Work</h2>

      <p>
        These are one project. Each asks what a label lets you predict, and each
        answers it with whatever counts as evidence in the field it is written
        for, which is why they appear in journals that do not read each other.
      </p>

      <ul class="works">
        <li>
          <a class="title" href="https://arxiv.org/abs/2607.01153" target="_blank" rel="noopener noreferrer">Adversarial Pragmatics for AI Safety Evaluation</a>
          <span class="licenses">Asks what a safety benchmark score licenses, and builds a benchmark you can audit.</span>
          <span class="meta">2026. arXiv:2607.01153. <a href="papers/adversarial-pragmatics-for-ai-safety-evaluation/walkthrough.html">Walkthrough</a> <a href="https://github.com/BrettRey/adversarial-pragmatics-for-ai-safety-evaluation" target="_blank" rel="noopener noreferrer">Code and data</a></span>
        </li>
        <li>
          <a class="title" href="https://lingbuzz.net/lingbuzz/010081" target="_blank" rel="noopener noreferrer">Expert grammaticality judges as evaluators, not participants</a>
          <span class="licenses">Asks who counts as a competent judge, and in what role.</span>
          <span class="meta">2026. <a href="https://lingbuzz.net/lingbuzz/010081" target="_blank" rel="noopener noreferrer">LingBuzz</a></span>
        </li>
        <li>
          <a class="title" href="https://ling.auf.net/lingbuzz/009537" target="_blank" rel="noopener noreferrer">The homeostatic maintenance of English countability</a>
          <span class="licenses">Asks what holds a grammatical category together when no definition does.</span>
          <span class="meta">2025. Under review, <em>Linguistics</em>. <a href="https://ling.auf.net/lingbuzz/009537" target="_blank" rel="noopener noreferrer">LingBuzz</a></span>
        </li>
      </ul>
    </section>
```

```css
.works .licenses {
  display: block;
  max-width: var(--measure);
  margin-top: 0.1rem;
}
```

### Cost

Almost nothing to build, and one hard cost to the reader: they have to take the
unity on trust, or assemble it themselves by reading twelve one-line glosses and
noticing that they rhyme. Some readers will. Reader 4, the one skimming for
thirty seconds before a committee meeting, will not.

### Degradation

Perfect in every direction. It is a list.

---

## 6. My pick, and why

**Mechanism A, the crossing matrix.**

Against C: C's virtue is that it commits to nothing, and that is also its
failure. A page that commits to nothing cannot show anything either. Brett's
central claim is a claim about *relations between* works, and a list is the one
representation that shows no relations at all, only sequence. C would leave the
first forty words of prose doing the entire argument, which is where the page is
today. If the answer were "write it better in prose," this review board would
not have been convened, and the review board is correct to have been convened:
the claim is structural, so it should be visible in the structure.

Against B: B is the more seductive picture and the weaker argument. It buys a
length comparison, and it pays for that with an axis that asserts a distance
ordering over fields which Brett has not claimed and probably does not hold.
Worse, its own text equivalent gives the game away: read aloud, a reach chart is
a list of field tags. If the accessible version of your picture is the thing you
rejected, the picture is decorating the thing you rejected. And it collapses on
phones, where most first visits arrive.

For A, four things:

1. **It answers the question readers actually bring.** "Is this one programme?"
   is answered in one glance by the shape: four questions, three fields, cells
   in all of them, and two works lying across the whole width.
2. **It makes filtering pointless rather than unnecessary.** Nothing is hidden,
   so there is nothing to reveal. A dozen works fit on one screen. A filter here
   would be a control for a problem the layout no longer has.
3. **It is the same shape spoken and drawn.** The table's row and column
   headers are the argument, and a screen reader announces them with every cell.
   That is what it looks like to treat accessibility as a design property: the
   non-visual version is not a degraded copy, it is the same claim in another
   medium.
4. **It is an instance of its own thesis.** The page stops asserting that
   labels earn their standing from what they license, and starts organising
   itself by what each work licenses. A reader who never reads the paragraph
   still absorbs the method from the furniture.

One warning about execution. Avoid cell borders and background fills. The
CONTAINER schema is carried by *enclosure*, not by alignment, so a matrix drawn
with boxes reinstates exactly the problem the two columns had, at higher
resolution. Hairlines between row groups, whitespace between columns, nothing
else. The version above does this; keep it that way if the design gets touched
later.

---

## 7. What I would not do

- **Tags with filter chips.** Argued in section 2. Short version: it answers a
  filing question nobody asks, hides by default, cannot express relations
  between works, and cannot say "different but equally real," only "both."
- **Colour-coding works by field.** A tag with the word removed. It asserts
  exclusive membership *more* strongly than a word does, because an item has one
  fill colour, and a two-field work would need a stripe, which is a Venn
  diagram again. It also fails for colour-blind readers and burns colour roles
  the page has budgeted at five.
- **A Venn diagram.** If the objection to two columns is that they instantiate
  CONTAINER, a Venn is two columns with the boundary drawn heavier.
- **A network or "knowledge map" of the programme.** Node-and-edge pictures look
  like insight and encode very little: edge placement is arbitrary, they cannot
  be read at a glance, they need JS to be legible at any real size, and they are
  hostile to keyboards and screen readers. They also flatter, which is the
  actual reason people build them.
- **Tabs or an accordion holding the two fields.** The container problem plus
  hiding, and a click between two things the reader wanted to compare.
- **A timeline.** SOURCE-PATH-GOAL, but committed to in ink.
- **Any JS view switcher.** Offering two views is the page admitting it does not
  know which one is right, and handing that decision to a reader who has less
  information than the author does.
- **Restructuring `publications.html`.** It is an index, indexes should be
  chronological and boring, and it is already both. Leave it alone.

---

## 8. If Brett does nothing else

Change three headings and one sentence, which costs about twelve words and no
CSS. "The idea behind it" says the idea came out of the AI work, and "Where it
applies" says it was then exported to linguistics; together those two phrases,
not the vertical layout, are what narrate a career. Retitle the two work
sections symmetrically, "In AI evaluation" and "In English grammar," and let the
middle section be the question itself, so the page reads as one question with
two instances rather than a start and a destination. Vertical order then means
what readers already take it to mean on the web, which is priority, not
causation: this is what I am doing now, this is the question it instances, this
is the same question somewhere else. That single edit removes the mismatch the
review board found. Everything above is about the larger opportunity, which is
that the page could stop merely avoiding the wrong claim and start showing the
right one.
