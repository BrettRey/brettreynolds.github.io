Verdict: ship with named fixes. The redesign has a strong editorial idea and is substantially better than the current homepage, but one cascade error removes its intended headline, and the navigation is not yet deployment-safe.

## 1. What the page is doing

The page turns a conventional academic biography into a short argument followed by evidence.

The visual sequence is:

1. A compact identity block with a portrait, name, and three-part field label.
2. A thesis question, intended to be the page’s largest statement.
3. A short explanation of “projectibility-first.”
4. Two equal “doors,” AI evaluation and linguistics.
5. Selected work under each door, with maroon rules identifying one lead item.
6. A deliberately quieter grammar and description band.
7. Primary utility links, then an even quieter miscellany.

That is a clear improvement over the current page, whose main experience is one very long biography at [index.html:20](/Users/brettreynolds/projects/LLM-CLI-projects/personal/personal-website/index.html:20) followed by a flat list of thirteen links at [index.html:30](/Users/brettreynolds/projects/LLM-CLI-projects/personal/personal-website/index.html:30). The redesign does not actually contain less material, but it makes the material easier to classify and skim.

The typography is bookish rather than technological: EB Garamond, warm neutrals, maroon links, small caps, and thin rules. That suits a scholar moving between linguistics, philosophy, and AI better than a generic startup aesthetic would.

Rendered dimensions here are inferred from the CSS:

- On a wide viewport, the body is at most 800 CSS pixels including its 18-pixel side padding, leaving roughly 764 pixels of content width.
- The portrait is intended to display at 110 pixels wide and, given the source ratio, about 165 pixels high.
- The two columns are approximately 360 pixels wide, separated by a 45-pixel gap.
- Below 640 pixels the columns stack.
- At 641 pixels, however, they snap back to approximately 280 pixels each. That is an uncomfortable width for the long paper titles.

## 2. What it is claiming

The layout makes a definite argument:

> Brett has one governing intellectual question, “What does a label license you to infer?”, which unifies two equally important research programmes. AI evaluation comes first strategically, linguistics supplies the deeper established programme, and practical grammar work shows that the framework survives applied use.

The sequence in [index-new.html:24](/Users/brettreynolds/projects/LLM-CLI-projects/personal/personal-website/index-new.html:24), the equal columns at line 35, and the subordinate strip at line 123 all reinforce that argument. The visual grammar says “one method, two fields, one applied proving ground.”

The content supports the intellectual bridge. “Projectibility,” stability, judgments, labels, and inference recur across the selected titles and the full record. The adversarial-pragmatics project also gives the AI side a concrete anchor, with a paper, walkthrough, adjudication tool, and code at [index-new.html:45](/Users/brettreynolds/projects/LLM-CLI-projects/personal/personal-website/index-new.html:45).

It supports equal maturity less well. The publication record shows a long, externally legible linguistics and grammar career, while the AI-evaluation identity currently rests chiefly on one substantial public project, two more conceptual papers, and two frameworks explicitly described as in preparation. The page labels those statuses honestly, but equal column width and the phrase “I build evaluation instruments and assurance frameworks” imply a more balanced established record than the evidence presented on the site. This is a positioning mismatch, not a judgment about the work.

## 3. What is wrong, ordered by severity

1. **The intended thesis headline does not render as a headline.**

   `.thesis-line` at [style-v2.css:39](/Users/brettreynolds/projects/LLM-CLI-projects/personal/personal-website/style-v2.css:39) has specificity `(0,1,0)`. The later `.thesis p` at [style-v2.css:50](/Users/brettreynolds/projects/LLM-CLI-projects/personal/personal-website/style-v2.css:50) has specificity `(0,1,1)` and also matches the thesis line.

   It therefore overrides:

   - `font-size: 2rem` with `1.05rem`
   - `line-height: 1.25` with `1.65`
   - `max-width: 20em` with `var(--measure)`, 31em
   - the inherited text colour with `var(--muted)`

   The mobile `.thesis-line { font-size: 1.6rem; }` at line 214 still loses on specificity. The question will therefore render at an inferred 18.9 pixels on desktop and 16.8 pixels below 600 pixels, rather than 36 and 25.6 pixels respectively. The page’s “second act” is reduced to a muted body paragraph.

   Fix the body selector to `.thesis p:not(.thesis-line)`, or use a stronger final rule such as `.thesis p.thesis-line`.

2. **The staging and deployment routes cannot all be correct at once.**

   `about.html` points back to `index-new.html` at [about.html:15](/Users/brettreynolds/projects/LLM-CLI-projects/personal/personal-website/about.html:15) and line 74. `publications.html` points to `index.html` at [publications.html:14](/Users/brettreynolds/projects/LLM-CLI-projects/personal/personal-website/publications.html:14) and line 378.

   In staging, Publications sends a reviewer back to the old page. If `index-new.html` is renamed to `index.html` on launch, About retains a staging-only destination. Normalize all home links as part of the deployment change.

3. **The homepage hides the institutional facts that establish who Brett is.**

   The identity block at [index-new.html:14](/Users/brettreynolds/projects/LLM-CLI-projects/personal/personal-website/index-new.html:14) gives only name and fields. Humber and Toronto appear only after choosing About, where they are stated at [about.html:20](/Users/brettreynolds/projects/LLM-CLI-projects/personal/personal-website/about.html:20).

   For an established academic moving into a newer research area, those affiliations are not administrative clutter. They are immediate identity and credibility signals. Add one restrained line beneath the tagline, for example, “Linguist at Humber Polytechnic · Adjunct professor, University of Toronto.”

4. **The two-column breakpoint is too low for this prose.**

   `.doors` uses two columns until 640 pixels at [style-v2.css:63](/Users/brettreynolds/projects/LLM-CLI-projects/personal/personal-website/style-v2.css:63), with stacking introduced at line 206. Just above that threshold, each column is inferred to be about 280 pixels wide. Multi-clause paper titles will wrap into narrow towers, weakening comparison and making the page feel more text-heavy. Stack nearer 720 to 760 pixels, or reduce the column gap at intermediate widths.

5. **The sitewide narrative does not yet reflect the homepage’s new priority.**

   The Publications metadata still describes only “linguistics, English grammar, syntactic annotation” at [publications.html:6](/Users/brettreynolds/projects/LLM-CLI-projects/personal/personal-website/publications.html:6). The AI paper is then buried under Books and Journal Articles in “Preprints & Under Review” at [publications.html:122](/Users/brettreynolds/projects/LLM-CLI-projects/personal/personal-website/publications.html:122).

   The homepage says AI safety and evaluation is now the first door; the full-record page still tells the old story. At minimum, update its metadata and add a short thematic index or “Selected current work” above the exhaustive chronology.

6. **There is an avoidable bibliographic inconsistency.**

   `about.html` dates the second edition of *A Student’s Introduction to English Grammar* to 2021 at [about.html:42](/Users/brettreynolds/projects/LLM-CLI-projects/personal/personal-website/about.html:42), while `publications.html` gives 2022 at [publications.html:29](/Users/brettreynolds/projects/LLM-CLI-projects/personal/personal-website/publications.html:29). The current homepage also says 2021. Whichever convention is intended, make the pages agree.

7. **The redesign organizes the sprawl more than it removes it.**

   The quiet footer treatment works, but the homepage still retains five grammar links, five primary utility links, and eight secondary utility links at [index-new.html:123](/Users/brettreynolds/projects/LLM-CLI-projects/personal/personal-website/index-new.html:123) and [index-new.html:140](/Users/brettreynolds/projects/LLM-CLI-projects/personal/personal-website/index-new.html:140). On mobile, all of this follows two stacked research lists. Consider moving genuinely specialist utilities such as OKF export, `llms.txt`, GEAP 103, and the archived blog to About or Publications.

8. **Minor accessibility and performance debt remains.**

   Global links are distinguished from surrounding prose by colour alone until hover at [style.css:176](/Users/brettreynolds/projects/LLM-CLI-projects/personal/personal-website/style.css:176). This particularly affects inline links on About. Use a subtle underline for prose links.

   The 1.21 MB, 1395 by 2093 portrait is displayed at only 110 pixels wide, and the `<img>` at [index-new.html:16](/Users/brettreynolds/projects/LLM-CLI-projects/personal/personal-website/index-new.html:16) has no intrinsic `width` or `height`. Supply a smaller responsive asset and dimensions to reduce transfer and layout movement.

The other obvious cascade interactions work correctly. `.id .photo img` has specificity `(0,2,1)` and beats both `.photo img` rules at `(0,1,1)`, so the portrait remains 110 pixels on mobile. Likewise, `.door h2` and `.strip h2`, each `(0,1,1)`, correctly override the base `h2` selector `(0,0,1)`.

## 4. Audience and purpose fit

- **AI safety researchers:** Best served. AI comes first, the central question speaks directly to evaluation validity, and the lead project offers paper, code, walkthrough, and adjudication interface. They are failed by the missing affiliation line, the broken thesis hierarchy, and a Publications page that still buries AI work.

- **Linguists:** Well served. The examples are recognizably linguistic, the selected titles are specific, and LingBuzz access is immediate. The reframing is clear without erasing the existing programme. The demotion of established books and appointments makes the career context less legible than it should be.

- **Philosophers:** Partly served. The thesis is philosophical, and PhilArchive links appear in both the conceptual and AI material. But philosophy is absent from the three-part tagline and has no door of its own, so a PhilArchive visitor must infer whether to enter through AI or linguistics.

- **Grammar readers:** Served by direct links to the Cambridge book, CGEL resources, and the Constructionary. They are visually told that this work is now tertiary. That may be strategically correct, but “Grammar and description” does little to confirm Brett’s authorship or authority.

- **TESL readers:** Weakly served. *Language Landscapes* is present, but the strip assumes familiarity with “the CGEL tradition” and gives no plain account of the teaching work. About provides the necessary context, but its link comes near the bottom.

- **Hiring committees:** The coherent programme and CV link help. The absence of appointments, affiliations, dates, and a compact professional summary on the homepage hurts rapid assessment.

- **Grant panels:** The unifying research question is excellent grant-positioning language. Equal columns make the programme look purposeful. The mixture of completed, under-review, and in-preparation work needs slightly stronger visual differentiation so development stage is instantly legible.

- **Journal editors:** Specific titles, repository links, and statuses are useful. Internal year inconsistencies and a stale Publications description are small but credibility-damaging details for this audience.

- **Potential collaborators:** The page gives them several concrete entry points and an email address. The email and About link arrive late, especially on mobile. A modest contact link in the identity block would improve conversion without turning the header into conventional navigation.

## 5. Would I ship it?

**Ship with named fixes.** The underlying structure should stay: proposition, two research doors, applied work, utilities. It solves the current homepage’s largest editorial problem by replacing an undifferentiated biography with a coherent research argument. Before launch, fix the `.thesis p` collision, normalize home links, add a one-line institutional identity, raise the grid breakpoint, reconcile the book date, and update the Publications page’s metadata and opening hierarchy. Those are bounded changes. Starting over would discard a strong concept; shipping as is would publish a page whose central typographic gesture is currently cancelled by its own CSS.