# Clean-room review, reviewer B

Verdict: the redesign has a strong organizing idea, but I would not ship it yet. It needs structural revision, one critical CSS fix, and a much clearer separation between primary visitor routes and archival utilities.

All rendered dimensions below are inferences from the HTML, CSS, and image metadata. I did not run a browser.

## 1. What is this page doing?

The redesign turns the homepage from a compact biography and link directory into a positioning statement.

The sequence is:

1. Establish identity with a small portrait, name, and three-part tagline.

2. Lead with one intellectual question, “What does a label license you to infer?”

3. Present AI evaluation and linguistics as two parallel applications of a single “projectibility-first” approach.

4. Place grammar, textbooks, and descriptive resources in a lighter third tier.

5. Put conventional identity and navigation tasks, Publications, CV, About, contact, profiles, archives, at the bottom.

In plain language, it asks visitors to understand Brett’s research program before giving them the usual academic-homepage routes.

The visual hierarchy is meant to reinforce that. At the 800px maximum body width, I infer roughly 764px of content after padding. The portrait should render at about 110 × 165px. The two research columns should be about 360px wide each, separated by a 45px gap. They collapse to one column at 640px.

This is substantially more scannable than the single dense biography in the current [index.html:20](/Users/brettreynolds/projects/LLM-CLI-projects/personal/personal-website/index.html:20), but it is not actually lighter. A rough static-text count gives about 390 visible word tokens on the proposed homepage versus 275 on the current one.

## 2. What is it claiming?

The layout makes four connected claims:

- Brett has one research program, projectibility-first inquiry, rather than unrelated interests.

- AI evaluation and linguistics are the two principal manifestations of that program.

- AI evaluation is the current priority, signalled by its first position.

- Grammar and TESL work remain relevant, but now function as a supporting foundation rather than the main identity.

The first and fourth claims are supported well by the copy. The thesis at [index-new.html:24](/Users/brettreynolds/projects/LLM-CLI-projects/personal/personal-website/index-new.html:24) is repeated concretely in both research introductions, and the grammar strip connects applied description to category reliability.

The second and third claims are only partly supported by the presentation. A 50/50 grid gives AI evaluation and linguistics equal visual weight. That communicates balance, not “AI safety is now the priority.” Meanwhile, the full record is much deeper in linguistics and TESL. The AI column contains one fully actionable flagship project, two adjacent philosophy papers, and two frameworks combined into one unlinked “in preparation” entry. The layout therefore implies a more symmetrical body of demonstrated work than the selected evidence shows.

Philosophy also disappears as an audience route. Its papers are placed under “AI evaluation,” while the tagline offers only AI evaluation, assurance, and linguistics. The unifying argument is persuasive as a research narrative, but the taxonomy is not yet persuasive as an information architecture.

## Every choice presented to the reader

There are 32 destination links in [index-new.html](/Users/brettreynolds/projects/LLM-CLI-projects/personal/personal-website/index-new.html:1), plus the theme button inserted by [theme.js:51](/Users/brettreynolds/projects/LLM-CLI-projects/personal/personal-website/theme.js:51). That produces 33 interactive controls.

The 32 destinations are:

- AI evaluation, 8: Adversarial Pragmatics arXiv, Walkthrough, Adjudication app, Code; Truth-tracking profiles PhilArchive, Mirror; Effective without warrant PhilArchive, Mirror.

- Linguistics, 6: Kinds as projectibility profiles PhilArchive; Interjection LingBuzz, Mirror; Definiteness LingBuzz, Mirror; Grammaticality de-idealized LingBuzz.

- Grammar and description, 5: *A Student’s Introduction to English Grammar*, *Language Landscapes*, CGEL correctives, CGELBank, English Constructionary.

- Primary utility navigation, 5: Publications, CV, Essays, About, email.

- Secondary utility navigation, 8: Google Scholar, ORCID, GitHub, Machine-readable papers, OKF export, llms.txt, GEAP 103, old blog.

- Display control, 1: light/dark theme.

The page also presents 14 content objects, nine research works and five grammar resources, across three conceptual routes. Two prominently selected research objects have no action at all: “Delegation assurance & evidentiary assurance” at [index-new.html:70](/Users/brettreynolds/projects/LLM-CLI-projects/personal/personal-website/index-new.html:70) and *Words That Won’t Hold Still* at [index-new.html:85](/Users/brettreynolds/projects/LLM-CLI-projects/personal/personal-website/index-new.html:85).

For comparison, the current homepage has 20 links. The redesign therefore increases the literal destination count by 60 percent. It looks less sprawling because the choices are grouped, but it does not reduce the choice burden.

## 3. What is wrong, ordered by severity

### 1. The central headline styling is defeated by the cascade

This is the clearest implementation defect.

`.thesis-line` at [style-v2.css:39](/Users/brettreynolds/projects/LLM-CLI-projects/personal/personal-website/style-v2.css:39) has specificity `(0,1,0)`. `.thesis p` at [style-v2.css:50](/Users/brettreynolds/projects/LLM-CLI-projects/personal/personal-website/style-v2.css:50) has specificity `(0,1,1)`, so it wins wherever the declarations collide.

Consequently, the question intended to be a 2rem headline instead inherits:

- `font-size: 1.05rem`, inferred as 18.9px on desktop rather than 36px

- `line-height: 1.65` rather than `1.25`

- `max-width: 31em` rather than `20em`

- muted text colour

The narrow-screen `.thesis-line { font-size: 1.6rem; }` at [style-v2.css:214](/Users/brettreynolds/projects/LLM-CLI-projects/personal/personal-website/style-v2.css:214) still loses on specificity. The intended “second act” will therefore resemble the explanatory paragraph, collapsing the page’s main hierarchy.

Use a rule such as `.thesis p.thesis-line` after the common paragraph rule, and explicitly restore the intended size, line height, width, and text colour.

Other collisions work correctly: `.door h2` `(0,1,1)` beats `h2` `(0,0,1)`, and `.id .photo img` `(0,2,1)` beats both the base and mobile `.photo img` rules `(0,1,1)`.

### 2. The architecture does not express the stated priority

The equal-width grid at [style-v2.css:63](/Users/brettreynolds/projects/LLM-CLI-projects/personal/personal-website/style-v2.css:63) says “two coequal fields.” Ordering AI first is too weak a signal to say “AI safety and evaluation are now the priority.”

A more accurate structure would make current AI work the full-width primary route, followed by linguistics and philosophy as the conceptual and empirical foundation. Grammar and TESL can remain a compact resource band.

### 3. The “doors” are not routes

The code calls the sections “doors,” but neither heading is actionable. Paper titles are also plain text. Visitors must locate small repository labels such as “PhilArchive,” “LingBuzz,” and “Mirror” to proceed.

That makes the destination host more prominent than the work itself. The primary title should link to a preferred landing page, with repositories, code, and mirrors treated as secondary actions. The unlinked lead manuscript and in-preparation frameworks need either a meaningful next step or visibly non-actionable status treatment.

### 4. Essential visitor tasks are buried under the research narrative

Publications, CV, About, and email do not appear until [index-new.html:140](/Users/brettreynolds/projects/LLM-CLI-projects/personal/personal-website/index-new.html:140). The homepage also removes roles and affiliations from the identity block. Those facts now require opening About, where they appear at [about.html:19](/Users/brettreynolds/projects/LLM-CLI-projects/personal/personal-website/about.html:19).

This particularly harms evaluative visitors. A compact top navigation and one-line affiliation statement would restore immediate orientation without reintroducing the old biography.

### 5. Cross-page navigation is not deployment-safe

Both home links in About point to `index-new.html` at [about.html:15](/Users/brettreynolds/projects/LLM-CLI-projects/personal/personal-website/about.html:15) and [about.html:74](/Users/brettreynolds/projects/LLM-CLI-projects/personal/personal-website/about.html:74). The Publications page points to `index.html` at [publications.html:14](/Users/brettreynolds/projects/LLM-CLI-projects/personal/personal-website/publications.html:14).

During review, those routes lead to different homepages. If the redesign replaces `index.html`, About will retain a staging-specific backlink. Choose one canonical home URL, preferably `/` or `index.html`, across every page before deployment.

### 6. The Publications route abandons the homepage taxonomy

The homepage is thematic, but Publications is organized only by publication type. The AI safety paper appears as the third item inside a 39-item “Preprints & Under Review” list beginning at [publications.html:111](/Users/brettreynolds/projects/LLM-CLI-projects/personal/personal-website/publications.html:111). The page has 138 links and no AI, philosophy, projectibility, or grammar route.

Its metadata still describes the record only as “linguistics, English grammar, syntactic annotation” at [publications.html:6](/Users/brettreynolds/projects/LLM-CLI-projects/personal/personal-website/publications.html:6).

The narrative established on the homepage should continue into Publications through thematic anchors, filters, or a short “selected by area” index.

### 7. Narrow-width behaviour will be awkward before and after the breakpoint

Immediately above the 640px breakpoint, I infer columns of only about 280px. Long paper titles will wrap heavily and create tall, uneven columns.

At smaller widths, `.strip ul li` is forced to `white-space: nowrap` by [style-v2.css:183](/Users/brettreynolds/projects/LLM-CLI-projects/personal/personal-website/style-v2.css:183). The long *A Student’s Introduction to English Grammar* link is likely to exceed the approximately 288px content width of a 320px viewport, producing horizontal overflow.

Remove `white-space: nowrap` from long resource titles and consider collapsing the two research columns earlier.

### 8. The portrait is oversized as an asset and does not reserve space

The source portrait is a 1.2MB, 1395 × 2093 JPEG, but is styled to an inferred 110 × 165px at [style-v2.css:20](/Users/brettreynolds/projects/LLM-CLI-projects/personal/personal-website/style-v2.css:20). The `<img>` at [index-new.html:16](/Users/brettreynolds/projects/LLM-CLI-projects/personal/personal-website/index-new.html:16) has no `width` or `height` attributes, so the browser cannot reserve its aspect ratio from the markup.

Provide a resized WebP or AVIF, ideally with a JPEG fallback, and explicit dimensions.

### 9. Several accessibility and interaction details need attention

- The thesis uses a `<section>` without a heading, and the page has no `<main>` landmark. The question should probably be a styled heading.

- Links globally lose underlines at [style.css:177](/Users/brettreynolds/projects/LLM-CLI-projects/personal/personal-website/style.css:177). The light-theme link colour and body text have only about 1.47:1 contrast with each other, so colour alone is not a sufficient inline-link distinction.

- Repeated link labels such as “Mirror,” “PhilArchive,” and “LingBuzz” are ambiguous in a screen-reader links list.

- All 16 external links open new tabs without warning.

- The visually fixed theme button is appended after the footer, so it appears at the top but comes last in DOM and keyboard order.

## 4. Audience and purpose fit

| Visitor | Served | Failed |
|---|---|---|
| AI safety researcher from arXiv | Best-served audience. AI comes first, and the flagship offers paper, walkthrough, adjudication tool, and code. | Equal visual weight with linguistics weakens the claimed priority. Affiliations and contact are buried, and two other displayed “AI” works read as philosophy while the assurance frameworks have no destination. |
| Linguist from LingBuzz | Five selected works, direct LingBuzz links, and the projectibility framing make the reframing legible. | Titles are not clickable, repository labels carry the interaction, and the full Publications page does not preserve this thematic route. |
| Philosopher from PhilArchive | The central question and selected projectibility papers provide strong intellectual recognition. | Philosophy has no named route. Relevant work is filed under AI evaluation or linguistics, so the navigation does not acknowledge the visitor’s field. |
| Grammar or TESL reader | The main books and practical resources are collected into one compact strip. | Their route is visibly tertiary, credentials are absent from the homepage, and the long book link may overflow on narrow screens. |
| Hiring committee | The page communicates an unusually coherent current agenda. | Position, affiliation, CV, and publication record are not immediately visible. The first identity block says what Brett studies, but not where he works or in what capacity. |
| Grant panel | The common research question and cross-field program are potentially compelling. | The 50/50 structure does not distinguish current priority, foundation, completed work, and proposed work clearly enough. Evidence and agenda are visually blended. |
| Journal editor | Paper titles, review status, repositories, and mirrors are useful. | Homepage entries omit dates and full citation context, while the complete record is a very long type-based list with no thematic navigation. |
| Potential collaborator | Active projects and tools are concrete, especially the AI evaluation materials. | The in-preparation frameworks provide no explainer or collaboration route, and email appears only after every research and resource choice. |

## 5. Would I ship it?

**Revise structurally.** The thesis-led direction is worth keeping, so this is not a start-over. Before shipping, fix the headline specificity error, make AI evaluation genuinely primary rather than half of a symmetrical grid, restore affiliation and essential navigation near the top, make work titles the primary links, reduce or relocate the technical utility list, align Publications with the homepage taxonomy, canonicalize all home links, and repair narrow-screen overflow and image delivery. The design has found the right story, but the routes and controls do not yet let each audience act on that story efficiently.