# Maggie Appleton, on the metaphor problem

<!-- SUMMARY: Commissioned response, r3 metaphor board · verdict: path diagnosis over-read; encode maturity (support grades), not field · updated: 2026-07-29 -->

*Written in persona for the review board. Where I invoke positions associated with me (growth-stage metadata, gardens as thinking-in-public), these are reconstructions of my own published line of argument, not quotations.*

---

## 1. Verdict on the diagnosis

The container diagnosis was real, and v3 already fixed it: the two-column layout forced single membership on work whose whole point is dual membership. The path diagnosis is over-read. Vertical order in a document reads as salience, not biography (every CV puts the newest thing first and nobody parses that as a life told backwards), and the page's hinge sentence, "A benchmark score is a label, and so is a grammatical category," already coordinates the two fields as grammatical equals, which is a stronger statement of the claim than any layout could make. The real gap is different and smaller: a stranger scanning the work lists cannot tell how far along anything is, and maturity, unlike field, is not recoverable from the titles.

On the question my commission raises directly: yes, maturity is the dimension that needs encoding, field is the dimension the words already carry, and encoding both is one dimension too many. A meta line reading "Under review · *Synthese* · philosophy · AI evaluation · PhilArchive · Mirror" is six pieces of chrome hung on one title. Pick the one the reader can't infer.

---

## 2. Three mechanisms

### Mechanism A: support grades (encode maturity, not field)

**Schema.** An ordered scale of institutional standing: *published, under review, preprint, in preparation*. This is a growth-stage system, the same species of metadata as the seedling/budding/evergreen labels I use on my own garden, but in the institutional register appropriate to an academic. What the schema entails, and the research must accept: that a work's standing is graded, time-indexed, and revisable, that works move up the scale and can move down it (a rejection demotes a submission back to preprint). Brett's research accepts this so completely that one of the listed papers is literally titled "Kinds as projectibility profiles: support grades and demotion rules." The page furniture would be practising the theory the papers preach. There is one honest caution: a scale invites reading "published" as the goal state, which re-imports a small PATH schema. But this path is applied to the works, not the fields, and works genuinely do travel through these states. The board's objection to v3 was a path metaphor telling a false story about a career; this relocates the path to the one place it tells a true story.

Note also that the page already invented this device once and then failed to generalise it: the `.inprep` block says "In preparation, not yet public" in exactly the position and colour I'm proposing. Meanwhile "Truth-tracking profiles" and the interjections paper carry no status at all, and a reader cannot tell whether silence means "published" or "draft." Inconsistent presence is worse than absence: it teaches the reader that the metadata is decorative.

**Code.** The vocabulary is closed at four words. The rule for placement: in the two argument lists ("The idea behind it," "Where it applies"), every meta line opens with a grade. In "Selected publications," no grades, because the full citation (year, venue in italics) already carries the information. Featured and in-prep blocks keep theirs, regularised.

CSS, added to `style-v3.css` (no new colour role, no new type size; it borrows the small-caps dress the page already uses for structural labels):

```css
/* ---------- Support grades ----------
   One small-caps word opening a status or meta line. Closed vocabulary:
   Published · Under review · Preprint · In preparation.
   The grade states institutional standing, not importance; the sentence
   beside it carries importance. Type mixed case; CSS does the caps. */
.grade {
  font-variant: small-caps;
  font-style: normal;
  font-weight: 500;
  letter-spacing: 0.05em;
}
```

HTML, four representative rewrites:

```html
<!-- Featured block. Was:
     <p class="status">Preprint, arXiv:2607.01153 (2026). A diagnostic framework and seed benchmark.</p> -->
<p class="status"><b class="grade">Preprint</b> · arXiv:2607.01153 (2026) · a diagnostic framework and seed benchmark.</p>

<!-- In-prep block. Was: <p class="status">In preparation, not yet public</p> -->
<p class="status"><b class="grade">In preparation</b> · not yet public</p>

<!-- The book. Was: "Book-length statement. Completed manuscript, under peer review at Cambridge University Press." -->
<li>
  <span class="title"><em>Words That Won&rsquo;t Hold Still: How Linguistic Categories Work</em></span>
  <span class="meta"><b class="grade">Under review</b> · Cambridge University Press · the book-length statement.</span>
</li>

<!-- An item that currently carries no status at all -->
<li>
  <a class="title" href="https://philarchive.org/rec/REYTPW" target="_blank" rel="noopener noreferrer">Truth-tracking profiles: what large language models participate in</a>
  <span class="meta"><b class="grade">Preprint</b> · <a href="https://philarchive.org/rec/REYTPW" target="_blank" rel="noopener noreferrer">PhilArchive</a> <a href="papers/truth-tracking-profiles/">Mirror</a></span>
</li>
```

The `<b>` element is deliberate: stylistic offset without added importance, so screen readers read the word in flow rather than announcing emphasis. For items both posted and submitted, one deterministic rule so no per-item judgement is ever needed: state the strongest current claim on the reader's trust (published > under review > preprint > in preparation), and let the venue clause and links carry the rest.

**Cost.** Four words of vocabulary, about eleven spans on the index page, one five-line CSS rule. Reader effort goes down, not up: the reader currently has to parse varied prose fragments to extract exactly this fact, and sometimes can't. The one real cost is discipline, resisting the urge to grow the vocabulary ("accepted," "R&R," "forthcoming"); nuance belongs in the venue clause, not the grade.

**Degradation.** None to speak of. It is text, first in the meta line, so a screen-reader user scanning list items hears title, then grade, then venue, the same priority order a sighted skimmer gets. Mixed-case source text means no letter-by-letter announcement risk from the small caps. No JS anywhere. Dark mode inherits existing variables.

### Mechanism B: field tags, built as quietly as they can be built

**Schema.** Multiple attachment: each work carries one or more labels, membership plural but binary per label. This is the board's proposed fix, and I've built the best-faith version, which is text, not pills (a pill is a drawn container; you would be rejecting the container schema by drawing sixty small containers). What the schema entails, and the research would have to swallow: a closed list of fields, a filing decision per work, and, crucially, no weights. The brief describes the desired structure as radial, "a central method with motivated extensions of unequal weight," but tags cannot express unequal weight. A paper that is mostly linguistics and glancingly philosophical gets the same two flat tags as a genuine half-and-half. Tags deliver a bipartite graph, not a radial category.

**Code.**

```css
/* Field tags: a quiet line of small caps under each item's links. */
.works .fields {
  display: block;
  font-size: var(--t-meta);
  color: var(--meta);
  font-variant: small-caps;
  letter-spacing: 0.05em;
  margin-top: 0.05rem;
}
```

```html
<li>
  <a class="title" href="https://philarchive.org/rec/REYEWW" target="_blank" rel="noopener noreferrer">Effective without warrant: causal-normative networks and the social life of status</a>
  <span class="meta">Under review at <em>Synthese</em>. <a href="https://philarchive.org/rec/REYEWW" target="_blank" rel="noopener noreferrer">PhilArchive</a> <a href="papers/effective-without-warrant/">Mirror</a></span>
  <span class="fields">philosophy · AI evaluation</span>
</li>
```

The tag vocabulary would have to be exoteric (ai evaluation · linguistics · philosophy). A tag reading "projectibility" fails the stranger test outright: it is a label whose licensed inferences are zero for anyone who hasn't already read the idea section, which is a rough thing to have said about your tag system on this particular website.

Where this mechanism wants to go is JS filtering (click "philosophy," see four items). I would stop before building it: that is a faceted database UI for a page holding about fifteen works, on which ctrl-F already outperforms it. If built anyway, the buttons must be created by the script itself so that no JS means no dead controls, and the tags remain inert text.

**Cost.** A filing decision per item, times roughly sixty if publications.html is retrofitted, recurring forever as new work appears. Visual cost lands on the quietest text on the page: the meta zone already does status, venue, and two to four links, and the boundary-crossing papers, the most interesting ones, would carry the most clutter. And the information is mostly redundant: "Adversarial Pragmatics for AI Safety Evaluation" does not need an AI tag; section placement and the titles do this work already.

**Degradation.** As static text, fine, though a screen-reader user hears the field names recited after every item, chaff by the tenth repetition, with no non-visual grouping benefit in return. With JS filtering, hidden items must be hidden accessibly (`hidden` attribute, not opacity), and the no-JS page must never show a broken filter bar.

### Mechanism C: the enumeration fix (one word)

**Schema.** This converts the diagnosed SOURCE-PATH-GOAL into enumeration: sibling instances of one parent idea, which is centre-periphery expressed in words rather than geometry. The current headings run "Current work," then "The idea behind it," then "Where it applies." Change the third to:

```html
<!-- was: <h2>Where it applies</h2> -->
<h2>Where else it applies</h2>
```

"Else" presupposes that what you have already seen (the AI evaluation work) was itself an application of the idea. The three sections stop being stages on a road and become one hub with two spokes, weighted by position and column-inches, which is how this page honestly encodes weight. It also brings the headings into line with the hinge sentence, which already treats a benchmark score and a grammatical category as the same kind of thing. What the schema entails: one centre, fields as sites of application. The research accepts this; "one method applies in several fields at once" is the claim verbatim. A metaphysician might object that centre-periphery underplays the fields' autonomy, but these headings describe Brett's work, not the fields' ontology.

**Cost.** One word. No CSS, no markup, no vocabulary.

**Degradation.** None. It is a heading.

---

## 3. My pick: Mechanism A

Mechanism C should simply happen, but it is a copyedit, not a mechanism; it defends against a misreading I think few real readers make. Between the two mechanisms that add machinery, A wins over B on every axis I care about.

**A adds information the reader cannot already get; B mostly restates the titles.** Run the stranger test. A reader who has never heard "projectibility" knows exactly what "Under review" means and what it licenses them to infer; that is the trust calibration every visitor to an academic's site is silently doing. The same reader gets nothing from a field tag that the title and the surrounding prose didn't already give them. And there is a quiet second payoff for the reader who goes on to read the idea section: the penny drops that the labels on the page are doing precisely what the papers say labels do. The metadata is a demonstration, not just furniture.

**A survives contact with a busy academic; B rots.** The anthropological point, and the hard-learned digital-garden lesson: metadata stays true only when it sits on the author's existing habit path. Brett already updates public status when a submission moves (the publications page tracks under-review venues today). An acceptance email is a built-in trigger to edit one word. Tags have no update trigger at all; nothing in the life of a paper ever forces you to re-file it, so mistags and omissions accumulate silently. Choose the metadata with a maintenance trigger.

**A generalises an existing pattern; B introduces a new species.** The page already has "In preparation, not yet public." Mechanism A is that device, regularised and applied consistently, within the existing four sizes and five colour roles. It even agrees with the structure of publications.html, whose sections (Books, Journal Articles, Preprints & Under Review) already sort by maturity, not by field. Nothing on either page sorts by field, which is itself evidence about which dimension this body of work naturally organises along.

**And A doesn't re-pose the filing question that started all this.** The board's original complaint was that boundary-crossing papers had to be filed on one side or the other. Tags answer that complaint by asking the filing question repeatedly, per work, forever, with the added indignity of flattening degree. Grades never ask it. A work's institutional status is a matter of record, not judgement.

---

## 4. What I would not do

- **Reorder the page idea-first.** It is the schema-correct move (centre literally first, applications radiating below) and it would be rhetorically fatal. Leading with an abstraction before any artifact is how philosophy homepages lose every reader who hasn't already bought the programme. The stylesheet even records the design intent in a comment: the thesis is earned by the artifact above it. Keep it that way.
- **Revive the columns in any costume.** Including a "balanced" CSS grid of the two fields. That is the container again.
- **Pills, chips, badges.** Drawn containers, and the dialect of SaaS dashboards in a Garamond room. If a label must exist, it should be a word, not a shape.
- **Colour-coding fields or grades.** The page's one colour sentence is "maroon means clickable," and it works because nothing competes with it. A second meaningful hue dilutes it, spends a sixth colour role, and colour-only signalling fails accessibility anyway.
- **A hub-and-spoke diagram of the research programme.** I draw for a living and I would still cut it. A self-diagram on one's own homepage reads as org-chart self-portraiture, freezes the geometry, costs alt-text debt and a colour role, and invites exactly the over-reading this board has been doing. The radial claim is carried better by one coordinated sentence than by an SVG.
- **The full digital-garden apparatus** (growth stages plus last-tended dates plus backlinks plus an epistemic-status legend). I should be the one to say it: that system earns its place on a garden of hundreds of interlinked notes in visible flux. On a one-page academic index it is costume. Take the single transferable idea, visible epistemic status, and leave the rest.
- **JS tag filtering.** A faceted browse UI for fifteen items is over-engineering by an order of magnitude, and it makes the page's completeness contingent on script for no reader gain.

---

## 5. If Brett does nothing else

Open `index-v3.html` for twenty minutes and put one status word at the front of every meta line in the two argument lists, using the closed four-word vocabulary (Published, Under review, Preprint, In preparation), so that no work is silent about its standing. This works with zero CSS; the small-caps `.grade` rule is polish, and the words are the mechanism. It fixes the only part of the metaphor complaint that real readers actually feel (not "is this a career narrative?", which nobody asks, but "can I trust this item as much as that one?", which everybody asks), and it turns the page into a working instance of its own thesis: labels that say exactly what they license you to infer, graded, dated, and demotable. While the file is open, changing "Where it applies" to "Where else it applies" costs one more word and closes the path reading for good.
