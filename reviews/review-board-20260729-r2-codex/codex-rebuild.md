# Rebuild advocate verdict

**Start over at the information-architecture level.** The two-door layout is not merely an underdeveloped version of the right idea. It tells the wrong story about the work. Fixing its CSS, affiliations, links, and publication selection would make it more polished, but would not repair the false division on which it depends.

## 1. What the page is doing

The page has five acts:

1. A compact portrait, name, and three-part tagline ([index-new.html:14](/Users/brettreynolds/projects/LLM-CLI-projects/personal/personal-website/index-new.html:14)).
2. A manifesto built around “What does a label license you to infer?” ([index-new.html:24](/Users/brettreynolds/projects/LLM-CLI-projects/personal/personal-website/index-new.html:24)).
3. Two equal research columns, “In AI evaluation” and “In linguistics,” each with a pitch and selected work ([index-new.html:35](/Users/brettreynolds/projects/LLM-CLI-projects/personal/personal-website/index-new.html:35)).
4. A deliberately lighter strip for grammar and descriptive work ([index-new.html:123](/Users/brettreynolds/projects/LLM-CLI-projects/personal/personal-website/index-new.html:123)).
5. Publications, CV, About, contact details, and other navigation at the bottom ([index-new.html:140](/Users/brettreynolds/projects/LLM-CLI-projects/personal/personal-website/index-new.html:140)).

The design is restrained and bookish: EB Garamond, warm black, maroon links, small-cap headings, little decoration, and substantial grey prose.

Rendered dimensions here are cascade inferences, not browser measurements. At an 18px root size, the 800px border-box body has approximately 764px of content width. The two-column grid has a 45px gap, leaving approximately 359.5px per column ([style.css:62](/Users/brettreynolds/projects/LLM-CLI-projects/personal/personal-website/style.css:62), [style.css:68](/Users/brettreynolds/projects/LLM-CLI-projects/personal/personal-website/style.css:68), [style-v2.css:63](/Users/brettreynolds/projects/LLM-CLI-projects/personal/personal-website/style-v2.css:63)). Below 640px the columns stack.

This is not actually a pair of doors. It is a manifesto followed by two parallel inventories. Neither heading is a link, and clicking a research title is impossible.

## 2. What the layout is claiming

The page makes four visual claims:

- One intellectual question unifies the work.
- AI evaluation and linguistics are two equal applications of that question.
- Each application has a comparable current research programme and evidential maturity.
- Grammar, description, annotation, and pedagogy are supporting material rather than central evidence.

The CSS makes the last two claims explicit. The domains receive equal `1fr` columns, while grammar is labelled in the stylesheet as a “Lighter third band” ([style-v2.css:61](/Users/brettreynolds/projects/LLM-CLI-projects/personal/personal-website/style-v2.css:61), [style-v2.css:125](/Users/brettreynolds/projects/LLM-CLI-projects/personal/personal-website/style-v2.css:125)). The navigation is intentionally styled so that it does not compete with the doors ([style-v2.css:157](/Users/brettreynolds/projects/LLM-CLI-projects/personal/personal-website/style-v2.css:157)).

The content supports the existence of a genuine throughline. Projectibility, category membership, judgments, and benchmark interpretation plainly recur across the recent work.

It does not support the two-bin representation. The record is not “AI work over here, linguistics work over there.” It contains work whose point is precisely to cross those boundaries:

- “Expert Grammaticality Judges as Evaluators” joins linguistic judgments, evaluator roles, and research ethics ([publications.html:141](/Users/brettreynolds/projects/LLM-CLI-projects/personal/personal-website/publications.html:141)).
- “Truth-tracking profiles” is simultaneously about LLMs and philosophy ([publications.html:153](/Users/brettreynolds/projects/LLM-CLI-projects/personal/personal-website/publications.html:153)).
- “Kinds as Projectibility Profiles” states the general framework rather than belonging specifically to linguistics ([publications.html:145](/Users/brettreynolds/projects/LLM-CLI-projects/personal/personal-website/publications.html:145)).
- “Language without lessons” belongs to AI, TESL, and educational practice ([publications.html:65](/Users/brettreynolds/projects/LLM-CLI-projects/personal/personal-website/publications.html:65)).
- “Effective without warrant” is presented under AI evaluation, although its title and publication context identify a wider social-ontological argument ([index-new.html:63](/Users/brettreynolds/projects/LLM-CLI-projects/personal/personal-website/index-new.html:63)).

The page’s verbal argument is unity. Its visual argument is separation. Those arguments work against each other.

## 3. What is wrong, ordered by severity

### 1. The container falsifies the shape of the record

The full record is best understood as a trajectory with different levels of maturity:

- An established record in grammar, TESL, language description, and annotation.
- A recent reframing of categories, kinds, judgments, and measurement.
- A still-emerging application of that framework to AI evaluation and assurance.

The homepage turns that trajectory into two simultaneous, comparable domains. On the evidence in `publications.html`, the only explicitly AI-safety-evaluation publication is the 2026 adversarial-pragmatics preprint ([publications.html:121](/Users/brettreynolds/projects/LLM-CLI-projects/personal/personal-website/publications.html:121)). The linguistics, grammar, annotation, and TESL record extends back to 1998 and includes books, journal articles, technical work, and educational materials.

This is not an argument against prioritising AI safety. It is an argument for representing the priority as a current direction supported by an established record, not as one half of an artificially balanced pair.

### 2. The page reverses evidential maturity

All nine works promoted inside the two columns are unpublished, under review, preprints, or in preparation. Meanwhile, `publications.html` lists:

- Three published books and one manuscript ([publications.html:17](/Users/brettreynolds/projects/LLM-CLI-projects/personal/personal-website/publications.html:17)).
- Seventeen journal articles, including forthcoming work ([publications.html:38](/Users/brettreynolds/projects/LLM-CLI-projects/personal/personal-website/publications.html:38)).
- Five conference proceedings or technical reports ([publications.html:271](/Users/brettreynolds/projects/LLM-CLI-projects/personal/personal-website/publications.html:271)).
- Further chapters, educational materials, talks, and public writing.

Adding that record to the linguistics column would destroy the symmetry. Leaving it out makes the AI column look artificially mature and the established career artificially thin. That is why the symmetry cannot be repaired honestly.

### 3. Essential identity and verification are postponed

The new homepage contains no Humber or University of Toronto affiliation. Those appear only on the About page ([about.html:19](/Users/brettreynolds/projects/LLM-CLI-projects/personal/personal-website/about.html:19)). Publications and CV also come after the full manifesto and work inventory.

The current homepage is overlong, but it at least answers “who is this?” and “what has he done?” immediately ([index.html:20](/Users/brettreynolds/projects/LLM-CLI-projects/personal/personal-website/index.html:20)). The redesign solves density by removing verification rather than compressing it.

### 4. The central display line does not render as designed

`.thesis-line` has specificity `(0,1,0)`. `.thesis p` has specificity `(0,1,1)` and wins on the same element ([style-v2.css:39](/Users/brettreynolds/projects/LLM-CLI-projects/personal/personal-website/style-v2.css:39), [style-v2.css:50](/Users/brettreynolds/projects/LLM-CLI-projects/personal/personal-website/style-v2.css:50)).

Consequently, the supposed 2rem thesis line renders at:

- Approximately 18.9px on desktop, not 36px.
- `var(--muted)` grey rather than inherited full-contrast text.
- Approximately 31.2px line height.
- A maximum width of approximately 585.9px, because `31em` also defeats its intended `20em`.

Below 600px it becomes approximately 16.8px. The mobile `1.6rem` declaration has the same `(0,1,0)` specificity and also loses ([style-v2.css:214](/Users/brettreynolds/projects/LLM-CLI-projects/personal/personal-website/style-v2.css:214)). Meanwhile, the name is approximately 32.4px on desktop and 28.8px below 600px.

Fixing this would make the manifesto louder, but would not make the two-door argument more accurate.

The photograph has a second specificity interaction: `.id .photo img` `(0,2,1)` keeps it at 110px even where the base mobile `.photo img` `(0,1,1)` requests 150px. That is probably compatible with the compact-header intention, but the base responsive rule never applies.

### 5. The page teaches the wrong click behaviour

The maroon door headings look like links but are plain `<h2>` elements. Work titles are non-clickable `<span>` elements. A visitor must discover the smaller 0.85rem source labels below them ([style-v2.css:70](/Users/brettreynolds/projects/LLM-CLI-projects/personal/personal-website/style-v2.css:70), [style-v2.css:102](/Users/brettreynolds/projects/LLM-CLI-projects/personal/personal-website/style-v2.css:102), [style-v2.css:114](/Users/brettreynolds/projects/LLM-CLI-projects/personal/personal-website/style-v2.css:114)).

Making the headings into actual doors would expose the deeper problem: interdisciplinary visitors would be forced to choose a category that the work itself contests.

### 6. The hierarchy is nearly flat

At desktop size:

- Door headings: 18px.
- Work titles: 18px.
- Door explanations: approximately 17.6px.
- Grammar heading and text: approximately 17.1px.
- Source links: approximately 15.3px.

Most prose is grey, while titles remain black. The result makes inventory easier to scan than argument, exactly backwards for a page organised around a thesis.

The `31em` measure also produces different widths because `em` is resolved using each element’s font size: approximately 586px for thesis paragraphs, 558px for `.prose`, and 530px for strip paragraphs.

### 7. The implementation is not adoption-ready

- The 1,214,919-byte portrait is 1395 by 2093 pixels but displayed at an inferred 110 by 165 pixels. It has no HTML `width` or `height`, so the browser cannot reserve its aspect ratio from the markup ([index-new.html:15](/Users/brettreynolds/projects/LLM-CLI-projects/personal/personal-website/index-new.html:15)).
- `about.html` returns to `index-new.html`, while `publications.html` returns to `index.html` ([about.html:15](/Users/brettreynolds/projects/LLM-CLI-projects/personal/personal-website/about.html:15), [publications.html:14](/Users/brettreynolds/projects/LLM-CLI-projects/personal/personal-website/publications.html:14)). During preview they return to different homepages; after replacement the About links would be wrong.
- The book year is inconsistent: About and the current homepage say 2021, while Publications says 2022 ([about.html:42](/Users/brettreynolds/projects/LLM-CLI-projects/personal/personal-website/about.html:42), [publications.html:29](/Users/brettreynolds/projects/LLM-CLI-projects/personal/personal-website/publications.html:29)).
- The publications-page description still mentions only linguistics, grammar, and annotation despite the enlarged record ([publications.html:6](/Users/brettreynolds/projects/LLM-CLI-projects/personal/personal-website/publications.html:6)).
- The thesis is a paragraph rather than a heading, and the page has no `<main>` landmark.

## 4. Audience and purpose fit

| Visitor | What serves them | Where the page fails |
|---|---|---|
| AI safety researcher | AI appears first; the adversarial-pragmatics item has excellent direct links to the paper, walkthrough, app, and code. | One concrete safety publication is surrounded by philosophical work and in-preparation frameworks, without affiliations or an established execution record. |
| Linguist | Current category and grammaticality projects are easy to scan. | The page hides the published grammar record and misrepresents philosophy, methodology, judgment research, and empirical syntax as one uniform “linguistics” programme. |
| Philosopher | The thesis and PhilArchive links are relevant. | There is no philosophy route. General work on kinds and status is arbitrarily filed under one of the two application domains. |
| Grammar or TESL reader | The strip contains the likely resources and book links. | Their reason for visiting is deliberately made lighter and visually tertiary. Authorship, dates, publishers, and the long TESL record disappear. |
| Hiring committee | CV and Publications exist. | Affiliation, rank, books, journals, dates, and co-authorship are withheld until late or omitted. The homepage foregrounds claims under review over demonstrated output. |
| Grant panel | The cross-domain programme could be compelling. | The page hides the trajectory that would make the transition credible: established descriptive expertise, category research, then evaluation work. |
| Journal editor | Recent manuscripts and repositories are visible. | There are no dates or author lines in the selected list, little published venue evidence, and no immediate institutional identity. |
| Potential collaborator | The benchmark tools and code links are useful. | The bins obscure methods, co-authorship, annotation work, quantitative work, and the projects that most obviously connect evaluation to linguistics. |

## 5. Concrete alternative: priority, throughline, proof

Replace the two doors with one vertical, evidence-first sequence.

1. **Identity and routing**

   Name, affiliations, one role sentence, then Publications, CV, email, Google Scholar, and GitHub. Keep or remove the portrait, but optimise and size it.

2. **Current priority**

   Give “Adversarial Pragmatics for AI Safety Evaluation” the full-width featured position with its paper, walkthrough, adjudication app, and code. Below it, list delegation and evidentiary assurance explicitly as work in development. Do not manufacture a second domain of equal visual weight.

3. **The connecting research programme**

   Put the projectibility explanation here, after the concrete AI artifact. Demonstrate the bridge using directly linked works such as “Kinds as Projectibility Profiles,” “Expert Grammaticality Judges as Evaluators,” and “Grammaticality de-idealized.” This is where linguistics is reframed rather than placed behind a separate door.

4. **Selected track record**

   Present compact, dated evidence:

   - Books: *Language Landscapes* (2026), *Negation in English and Other Languages* (2025), and *A Student’s Introduction to English Grammar* (2022).
   - Peer-reviewed grammar: the 2024 *Journal of Linguistics* article and the 2025 and 2026 *English Language and Linguistics* articles ([publications.html:49](/Users/brettreynolds/projects/LLM-CLI-projects/personal/personal-website/publications.html:49)).
   - Annotation and applied work: CGELBank’s 2022 and 2023 outputs ([publications.html:274](/Users/brettreynolds/projects/LLM-CLI-projects/personal/personal-website/publications.html:274)) and selected TESL work.

5. **Resources and full record**

   Grammar resources, essays, book materials, machine-readable papers, and one prominent “Full publications” link. Mathematical manuscripts, educational materials, and public writing can remain discoverable without being forced into either research identity.

Every work entry should show year, status or venue, and authorship. The title itself should be the primary link. Maroon should mean clickable.

This structure tells the story the record supports: **current priority, connecting idea, demonstrated foundation**. It also lets AI safety take first place without pretending it currently occupies half the publication history.

Any attempt to rescue the doors dissolves their premise. Adding published work makes the columns radically unequal. Adding philosophy creates a third door and restores the sprawl. Duplicating cross-disciplinary papers makes the bins meaningless. Linking the doors forces visitors into distinctions the research is trying to challenge.

## 6. Would I ship it?

**Start over, at the homepage-structure level.** Retain the palette, typography, strongest project descriptions, and excellent artifact links, but do not promote `index-new.html` to the live homepage. The redesign has correctly identified a need for selection and a clearer current direction. It has answered that need with a false binary. The actual record supports a more persuasive story: an established linguist and grammarian developing a general account of categories and inference, then applying it to AI evaluation and assurance. A vertical priority-throughline-proof structure would make that transition legible without hiding either its maturity or its novelty.