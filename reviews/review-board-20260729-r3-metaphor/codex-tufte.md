## Verdict on the diagnosis

The mismatch is real, but the culprit is editorial sequence more than vertical scrolling itself. “Current work,” followed by “The idea behind it,” followed by “Where it applies” supplies a source, a derivation, and a destination, so a reasonable reader can infer that AI is the present and linguistics is a downstream application. Tags help only if fields become properties of individual works and the section headings stop doing the classification.

The sample assignments below illustrate the mechanics. Brett should determine the final taxonomy.

## Mechanism A: Direct field lines in one mixed list

### Schema

This commits to faceted annotation: the work is the primary object, while fields are properties it can possess simultaneously. It entails a small, controlled vocabulary and binary membership for the purpose of this page, but neither exclusivity nor equal importance.

Merge the works now divided between “The idea behind it” and “Where it applies.” Order them by editorial importance, not by field. Rename the thesis section “The common question,” then label every work directly, including the featured AI work.

The reconstructed Tuftean premise is simple: the field names themselves carry the information, so they require no boxes, colours, icons, abbreviations, or legend.

### HTML

```html
<div class="featured">
  <a class="title" href="https://arxiv.org/abs/2607.01153">
    Adversarial Pragmatics for AI Safety Evaluation
  </a>
  <p class="status">
    Preprint, arXiv:2607.01153 (2026). A diagnostic framework and seed benchmark.
  </p>
  <p>
    Instruction conflict, embedded commands, policy ambiguity, refusal
    calibration, and LLM-judge validation.
  </p>
  <p class="fieldline">
    <span class="field-label">Fields:</span>
    AI evaluation, linguistics
  </p>
</div>

<section aria-labelledby="common-question">
  <h2 id="common-question">The common question</h2>
  <p class="thesis-q">What does a label license you to infer?</p>
  <p>
    A benchmark score is a label, and so is a grammatical category.
    Both earn their standing from the predictions they support for some
    field and purpose.
  </p>
</section>

<section aria-labelledby="selected-work">
  <h2 id="selected-work">Selected work</h2>

  <ul class="works">
    <li>
      <a class="title" href="https://philarchive.org/rec/REYKAP-2">
        Kinds as projectibility profiles: support grades and demotion rules
      </a>
      <span class="meta">The general account.</span>
      <p class="fieldline">
        <span class="field-label">Fields:</span>
        philosophy of science, linguistics
      </p>
    </li>

    <li>
      <a class="title" href="https://lingbuzz.net/lingbuzz/010081">
        Expert grammaticality judges as evaluators, not participants
      </a>
      <span class="meta">
        Linguistic judgment, evaluator roles, and research ethics.
      </span>
      <p class="fieldline">
        <span class="field-label">Fields:</span>
        linguistics, evaluation methodology
      </p>
    </li>

    <li>
      <a class="title" href="https://philarchive.org/rec/REYTPW">
        Truth-tracking profiles: what large language models participate in
      </a>
      <p class="fieldline">
        <span class="field-label">Fields:</span>
        AI evaluation, philosophy of science
      </p>
    </li>

    <li>
      <a class="title" href="https://lingbuzz.net/lingbuzz/009852">
        Interjection as a lexical category: what membership lets us predict
      </a>
      <p class="fieldline">
        <span class="field-label">Fields:</span>
        linguistics
      </p>
    </li>
  </ul>
</section>
```

### CSS

```css
.featured > p.fieldline,
.works p.fieldline {
  max-width: var(--measure);
  margin: 0.14rem 0 0;
  font-size: var(--t-meta);
  color: var(--meta);
}

.field-label {
  color: var(--text);
  font-variant: small-caps;
  letter-spacing: 0.06em;
}
```

### Cost

This adds one short metadata line per selected work and requires a controlled taxonomy. It adds no colour, type size, border, shape, or interaction. The principal editorial cost is deciding what counts as a field and keeping all terms at roughly the same level, rather than mixing fields with methods, objects, publication status, or institutions.

Use it consistently within the homepage list. An absent field line must not ambiguously mean either “one field” or “not yet classified.”

### Degradation

A screen reader receives exactly the visible sentence, including “Fields.” With CSS disabled, it remains ordinary intelligible text. No JavaScript is involved.

## Mechanism B: A work-by-field incidence matrix

### Schema

This commits to an incidence relation: rows are works, columns are fields, and intersections record membership. It makes overlap and corpus-level patterns immediately visible.

The research would have to accept a stable set of comparable field axes, binary membership, and meaningful absence. A blank cell becomes a substantive claim, not merely missing metadata.

### HTML

```html
<div
  class="matrix-wrap"
  role="region"
  aria-labelledby="matrix-caption"
  tabindex="0"
>
  <table class="field-matrix">
    <caption id="matrix-caption">Selected work by field</caption>
    <thead>
      <tr>
        <th scope="col">Work</th>
        <th scope="col">AI evaluation</th>
        <th scope="col">Linguistics</th>
        <th scope="col">Philosophy of science</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">
          <a href="https://arxiv.org/abs/2607.01153">
            Adversarial Pragmatics
          </a>
        </th>
        <td><span aria-hidden="true">●</span><span class="sr-only">Yes</span></td>
        <td><span aria-hidden="true">●</span><span class="sr-only">Yes</span></td>
        <td><span class="sr-only">No</span></td>
      </tr>
      <tr>
        <th scope="row">
          <a href="https://lingbuzz.net/lingbuzz/010081">
            Expert grammaticality judges
          </a>
        </th>
        <td><span aria-hidden="true">●</span><span class="sr-only">Yes</span></td>
        <td><span aria-hidden="true">●</span><span class="sr-only">Yes</span></td>
        <td><span class="sr-only">No</span></td>
      </tr>
      <tr>
        <th scope="row">
          <a href="https://philarchive.org/rec/REYTPW">
            Truth-tracking profiles
          </a>
        </th>
        <td><span aria-hidden="true">●</span><span class="sr-only">Yes</span></td>
        <td><span class="sr-only">No</span></td>
        <td><span aria-hidden="true">●</span><span class="sr-only">Yes</span></td>
      </tr>
    </tbody>
  </table>
</div>
```

### CSS

```css
.matrix-wrap {
  max-width: 100%;
  overflow-x: auto;
}

.matrix-wrap:focus-visible {
  outline: 2px solid var(--link);
  outline-offset: 2px;
}

.field-matrix {
  width: 100%;
  min-width: 38rem;
  border-collapse: collapse;
  font-size: var(--t-meta);
}

.field-matrix caption {
  margin-bottom: 0.7rem;
  text-align: left;
  font-size: var(--t-body);
  font-variant: small-caps;
  letter-spacing: 0.09em;
  color: var(--meta);
}

.field-matrix thead {
  border-bottom: 1px solid var(--rule);
}

.field-matrix th,
.field-matrix td {
  padding: 0.45rem 0.6rem;
  vertical-align: top;
}

.field-matrix th {
  font-weight: 400;
}

.field-matrix th:first-child {
  width: 58%;
  text-align: left;
}

.field-matrix td,
.field-matrix thead th:not(:first-child) {
  text-align: center;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  clip-path: inset(50%);
  white-space: nowrap;
  border: 0;
}
```

### Cost

The matrix adds a new table vocabulary and duplicates titles already present elsewhere. It is excellent for comparison, but weaker for reading descriptions and links. With roughly 60 publications it becomes a substantial database view, particularly on a narrow screen.

The one rule beneath the header earns its place because it distinguishes axis labels from observations. Repeated rules beneath every row would not.

### Degradation

The table remains semantic without CSS. Screen readers associate each “Yes” or “No” with its row and column headers, although traversing every empty cell is verbose. On narrow screens the table scrolls horizontally, and `tabindex="0"` makes that region keyboard accessible. JavaScript is unnecessary.

## Mechanism C: Direct-labelled field profiles

### Schema

This represents each work as an ordinal profile rather than a set of memberships. It is closest to the proposed radial account because different fields can have unequal weight.

The research would have to accept three ordered relations, such as “adjacent,” “substantial,” and “central,” and accept that these judgments are sufficiently stable to publish. That is a considerably stronger claim than saying that a work belongs to two fields.

### HTML

```html
<ul class="works">
  <li>
    <a class="title" href="https://lingbuzz.net/lingbuzz/010081">
      Expert grammaticality judges as evaluators, not participants
    </a>
    <span class="meta">
      Linguistic judgment, evaluator roles, and research ethics.
    </span>

    <dl class="field-profile">
      <div>
        <dt>Linguistics</dt>
        <dd>
          <span class="reach reach-central" aria-hidden="true"></span>
          central
        </dd>
      </div>
      <div>
        <dt>Evaluation methodology</dt>
        <dd>
          <span class="reach reach-substantial" aria-hidden="true"></span>
          substantial
        </dd>
      </div>
      <div>
        <dt>Research ethics</dt>
        <dd>
          <span class="reach reach-substantial" aria-hidden="true"></span>
          substantial
        </dd>
      </div>
    </dl>
  </li>
</ul>
```

### CSS

```css
.field-profile {
  margin-top: 0.3rem;
  font-size: var(--t-meta);
  color: var(--meta);
}

.field-profile > div {
  display: grid;
  grid-template-columns: minmax(7rem, 10rem) 1fr;
  gap: 0.6rem;
  align-items: center;
}

.field-profile dt {
  color: var(--text);
}

.field-profile dd {
  margin: 0;
  white-space: nowrap;
}

.reach {
  display: inline-block;
  margin-right: 0.45rem;
  border-top: 2px solid var(--text);
  transform: translateY(-0.15em);
}

.reach-adjacent {
  width: 1.1rem;
}

.reach-substantial {
  width: 2.2rem;
}

.reach-central {
  width: 3.3rem;
}
```

### Cost

This adds three semantic grades, varying line lengths, and substantially more markup. The visible ordinal words prevent the lines from needing a key, but the visual and textual encodings are intentionally redundant. Readers must also decide whether they trust the distinction between “substantial” and “central.”

The profiles would reward comparison across several works, but only after Brett undertakes a real classification exercise. They should not be generated casually from paper titles.

### Degradation

The `dl` structure gives a screen reader pairs such as “Linguistics, central.” Decorative lengths are hidden because they contribute nothing beyond the spoken degree. Without CSS or JavaScript, the field names and degrees remain complete.

## My pick

Choose Mechanism A.

It places the information where the uncertainty occurs, beside each work, while spending only existing typography and colour roles. Unlike the matrix, it does not turn a concise homepage into an analytical database or make mobile readers traverse empty cells. Unlike the profiles, it does not claim that field involvement has already been measured on an ordinal scale.

Most importantly, it alters the editorial model. A single mixed list says that papers share a programme but project into different fields. The plain `Fields:` line then shows exactly where each paper participates. The tags are content, not decoration.

## What I would not do

I would not use coloured pill badges. Their outlines are literal miniature containers, their colours require a key, and their button-like appearance falsely suggests interaction. They also spend new colour roles while repeating boundaries that encode nothing beyond the already visible words.

I would not restore field columns, draw overlapping circles, or create a hub-and-spoke diagram. Columns reinstate exclusive filing; circles turn an editorial taxonomy into dubious geometry; spokes imply a centre-to-periphery direction and are poor reading structures on small screens.

I would not make JavaScript filtering the primary expression of the idea. Filtering can help later on the full publication page, but hiding everything outside one selected field temporarily recreates the exclusivity the page is trying to reject.

## If Brett does nothing else

Make field membership an item-level property rather than a property of the section containing the item. Concretely, combine the works now separated by “The idea behind it” and “Where it applies” into one editorially ordered list, then give every item, including the featured AI work, an unboxed plain-text `Fields:` line. That single intervention removes the migration narrative and makes multiple membership visible without inventing a new visual language.