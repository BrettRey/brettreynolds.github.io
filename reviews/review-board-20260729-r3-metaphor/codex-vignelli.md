## Verdict on the diagnosis

The mismatch is real, but it resides more in the headings and copy than in vertical scrolling itself. “Current work,” “The idea behind it,” and “Where it applies,” reinforced by “currently” versus “for the last two decades,” invite a conversion narrative. A conventional reading order does not inherently entail SOURCE-PATH-GOAL, so I would correct those semantic cues instead of making the page perform a diagram.

## Mechanism A: Relational scope lines

### Schema

This uses a FACET or LENS schema. A work does not sit inside a field. It “bears on” one or more fields, with typographic weight indicating its chief relevance on this homepage.

The research must accept that these relations are meaningful enough to name, but not that they are permanent classifications. “Bears on” is deliberately weaker and more accurate than “belongs to.”

### HTML

First, remove the career reading from the identity statement:

```html
<p class="role">
  I use one question across AI evaluation and assurance, English grammar,
  and the philosophy of linguistics: what do labels, scores, and categories
  license us to infer?
</p>
```

Then add one scope line immediately beneath each research title:

```html
<li>
  <a class="title"
     href="https://lingbuzz.net/lingbuzz/010081"
     target="_blank"
     rel="noopener noreferrer">
    Expert grammaticality judges as evaluators, not participants
  </a>

  <span class="meta field-line">
    <span class="field-key">Bears on</span>
    <strong><span class="visually-hidden">chiefly </span>linguistics</strong>,
    AI evaluation, research ethics
  </span>

  <span class="meta">
    Linguistic judgment, evaluator roles, and research ethics in one argument.
    <a href="https://lingbuzz.net/lingbuzz/010081"
       target="_blank"
       rel="noopener noreferrer">LingBuzz</a>
    <a href="papers/expert-grammaticality-judges/">Mirror</a>
  </span>
</li>
```

The bold term is the chief relevance in this context. Omit `<strong>` when no priority should be claimed.

### CSS

```css
.field-line {
  margin-top: 0.15rem;
}

.field-key {
  font-variant: small-caps;
  letter-spacing: 0.09em;
  margin-right: 0.35rem;
}

.field-line strong {
  font-weight: 600;
}

.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
```

### Cost and degradation

This adds one short textual relation and one metadata line per research item. It adds no size, colour, shape, icon, or border treatment. The controlled vocabulary should be confined to the homepage’s research programme, not retrofitted across all sixty publications.

A screen reader receives the complete relation, including the visually indicated chief field. Without CSS, “chiefly” becomes visible and the sentence remains intelligible. JavaScript is irrelevant.

## Mechanism B: A cross-field matrix

### Schema

This commits to COORDINATES or CROSS-CLASSIFICATION. Each field becomes an axis, and a work can have substantive entries on several axes.

This is stronger than tagging because each cell says what the work contributes. It also entails that the chosen fields are sufficiently stable and comparable to deserve permanent columns.

### HTML

```html
<section>
  <div class="matrix-wrap">
    <table class="field-matrix">
      <caption>Selected work by field</caption>
      <thead>
        <tr>
          <th scope="col">Work</th>
          <th scope="col">AI evaluation</th>
          <th scope="col">Linguistics</th>
          <th scope="col">Philosophy</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">
            <a href="https://lingbuzz.net/lingbuzz/010081">
              Expert grammaticality judges as evaluators
            </a>
          </th>
          <td>Evaluator roles</td>
          <td>Grammaticality judgments</td>
          <td>Research ethics</td>
        </tr>
        <tr>
          <th scope="row">
            <a href="https://philarchive.org/rec/REYKAP-2">
              Kinds as projectibility profiles
            </a>
          </th>
          <td>Labels and scores</td>
          <td>Grammatical categories</td>
          <td>Scientific kindhood</td>
        </tr>
        <tr>
          <th scope="row">
            <a href="https://arxiv.org/abs/2607.01153">
              Adversarial Pragmatics for AI Safety Evaluation
            </a>
          </th>
          <td>Instruction conflict and judge validation</td>
          <td>Pragmatics of commands</td>
          <td></td>
        </tr>
      </tbody>
    </table>
  </div>
</section>
```

### CSS

```css
.matrix-wrap {
  overflow-x: auto;
}

.field-matrix {
  width: 100%;
  min-width: 38rem;
  border-collapse: collapse;
  font-size: var(--t-meta);
  line-height: 1.35;
}

.field-matrix caption {
  text-align: left;
  font-size: var(--t-body);
  font-weight: 400;
  font-variant: small-caps;
  letter-spacing: 0.09em;
  color: var(--meta);
  margin-bottom: 1rem;
}

.field-matrix th,
.field-matrix td {
  padding: 0.65rem 0.8rem 0.65rem 0;
  border-top: 1px solid var(--rule);
  text-align: left;
  vertical-align: top;
}

.field-matrix thead th {
  color: var(--meta);
  font-weight: 400;
  font-variant: small-caps;
  letter-spacing: 0.06em;
}

.field-matrix tbody th {
  width: 40%;
  font-weight: 400;
}

.field-matrix tbody td {
  color: var(--meta);
}
```

### Cost and degradation

The matrix reuses existing type, colours, and rules, but exacts a considerable editorial cost. Every filled cell needs a defensible formulation. The publication list also contains education, mathematics, annotation, and popular writing, so a comprehensive matrix would quickly acquire too many columns.

Its semantic table structure is excellent for screen readers. On narrow screens, sighted readers must scroll horizontally. Without CSS or JavaScript, it remains an ordinary readable table.

## Mechanism C: Parallel rails with spanning work

### Schema

This uses PARALLEL PATHS WITH SPANS. AI evaluation and linguistics proceed simultaneously, while work concerning both occupies the full width.

It eliminates the migration story, but requires the research to accept two comparatively stable tracks. It also risks suggesting that cross-field work is an exceptional bridge between otherwise separate territories.

### HTML

```html
<section>
  <h2>Selected work across fields</h2>

  <div class="rail-heads" aria-hidden="true">
    <p>AI evaluation</p>
    <p>Linguistics</p>
  </div>

  <ul class="rails">
    <li class="rail-item both">
      <span class="scope">
        Fields: AI evaluation and linguistics.
      </span>
      <a class="title" href="https://lingbuzz.net/lingbuzz/010081">
        Expert grammaticality judges as evaluators, not participants
      </a>
    </li>

    <li class="rail-item ai">
      <span class="scope">Field: AI evaluation.</span>
      <a class="title" href="https://arxiv.org/abs/2607.01153">
        Adversarial Pragmatics for AI Safety Evaluation
      </a>
    </li>

    <li class="rail-item linguistics">
      <span class="scope">Field: linguistics.</span>
      <a class="title" href="https://lingbuzz.net/lingbuzz/009852">
        Interjection as a lexical category
      </a>
    </li>

    <li class="rail-item both">
      <span class="scope">
        Fields: AI evaluation and linguistics.
      </span>
      <a class="title" href="https://philarchive.org/rec/REYKAP-2">
        Kinds as projectibility profiles
      </a>
    </li>
  </ul>
</section>
```

### CSS

```css
.rail-heads,
.rails {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  column-gap: 1.5rem;
}

.rail-heads {
  padding-bottom: 0.35rem;
  color: var(--meta);
  font-variant: small-caps;
  letter-spacing: 0.09em;
}

.rails {
  list-style: none;
}

.rail-item {
  padding: 0.8rem 0;
  border-top: 1px solid var(--rule);
}

.rail-item .title {
  display: block;
  line-height: 1.35;
}

.rail-item.ai {
  grid-column: 1;
}

.rail-item.linguistics {
  grid-column: 2;
}

.rail-item.both {
  grid-column: 1 / -1;
  max-width: var(--measure);
}

.scope {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

@media (max-width: 34rem) {
  .rail-heads {
    display: none;
  }

  .rails {
    display: block;
  }

  .scope {
    position: static;
    width: auto;
    height: auto;
    margin: 0 0 0.15rem;
    overflow: visible;
    clip: auto;
    white-space: normal;
    display: block;
    font-size: var(--t-meta);
    color: var(--meta);
    font-variant: small-caps;
    letter-spacing: 0.06em;
  }
}
```

### Cost and degradation

This spends no new colour or type size, but it spends layout vocabulary. It also requires a placement class and accessible field sentence for every item.

A screen reader receives a linear list with explicit field information, not the rail metaphor. On narrow screens, the design becomes a single list and reveals those field sentences. JavaScript is unnecessary. The fact that its defining metaphor disappears in accessible and narrow modes is a serious weakness.

## My pick

Choose Mechanism A. It corrects the actual semantic problem at the point where readers encounter it, while preserving the successful structure of `index-v3.html`. It permits multiple and unequal relevance without pretending that fields are fixed coordinates, as Mechanism B does, or restoring two territories separated by a gap, as Mechanism C does.

As a reconstruction, my principle here is that each distinction must earn its typographic cost. “Bears on” earns one metadata line. A matrix or braided layout does not earn its larger structural expenditure.

## What I would not do

I would not create coloured pills, bordered badges, dots, icons, or a clickable filtering system. A pill is a miniature container, precisely the metaphor the revision is meant to escape. Multiple pill colours would turn provisional intellectual relations into an apparently settled ontology, while filters would encourage readers to view one field at a time and hide the overlap.

I would also not tag the entire publication archive. Its books, teaching materials, philosophy, mathematics, annotation work, and popular writing would cause the taxonomy to expand immediately. If the vocabulary cannot remain small and useful on the homepage, the design should not encode it.

## If Brett does nothing else

Replace the current chronological role statement with: “I use one question across AI evaluation and assurance, English grammar, and the philosophy of linguistics: what do labels, scores, and categories license us to infer?” That single sentence removes the career-conversion reading before any section structure can create it.