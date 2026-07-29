The restraint case holds. The proposed page should not replace the live homepage.

Its genuine improvement is discoverability: visitors can reach current papers, code, and demonstrations directly. But that improvement required a selected-work list, not a new homepage architecture. The redesign turns one overlong 202-word biography into a 390-word manifesto and catalogue, moves affiliation and established credentials elsewhere, and introduces defects the current page does not have.

All dimensions below are inferences from the HTML and cascade, not browser measurements.

## 1. What is this page doing?

[index-new.html](/Users/brettreynolds/projects/LLM-CLI-projects/personal/personal-website/index-new.html:14) is a five-part research pitch:

1. A compact portrait, name, and three-field tagline.
2. A thesis statement meant to function as the page’s visual centre.
3. Two equal “doors”, AI evaluation and linguistics, each with an explanation and selected work.
4. A lighter “Grammar and description” strip.
5. Primary and secondary utility navigation at the bottom.

It is closer to a research manifesto than a conventional academic homepage. The ordinary identity material, institutional roles, books, and career summary have been moved to [about.html](/Users/brettreynolds/projects/LLM-CLI-projects/personal/personal-website/about.html:19).

The inferred wide-screen geometry explains some of its character. Because `body` is capped at 800px and participates in universal `border-box`, its 1rem side padding leaves about 728px of content at the 18px root size ([style.css](/Users/brettreynolds/projects/LLM-CLI-projects/personal/personal-website/style.css:62)). The two-door grid then yields columns of approximately `(728 - 45) / 2 = 341.5px` ([style-v2.css](/Users/brettreynolds/projects/LLM-CLI-projects/personal/personal-website/style-v2.css:63)). Just above the 640px breakpoint, they shrink to roughly 280px. That is a narrow measure for long academic titles.

## 2. What is it claiming?

The layout makes four claims:

- One question, what a label licenses us to infer, unifies Brett’s work.
- AI evaluation and linguistics are coequal applications of that programme.
- Grammar and pedagogical description are a subordinate third register.
- Institutional identity and previous achievement are supporting information, not part of the main argument.

The content supports the first claim. The publications record contains a substantial projectibility, categorisation, grammaticality, and evaluation through-line. The adversarial-pragmatics paper also gives the AI side a concrete instrument rather than merely a declared interest.

The evidence does not support the visual equality or the demotion of established work. All nine items selected inside the two doors are currently preprints, manuscripts under review, or work in preparation. The [publications record](/Users/brettreynolds/projects/LLM-CLI-projects/personal/personal-website/publications.html:17), by contrast, contains three published books and a 17-entry journal record, overwhelmingly in linguistics, grammar, and TESL.

The prior board’s “zero published work” formulation is literally too strong. The strip names *A Student’s Introduction to English Grammar* and *Language Landscapes* ([index-new.html](/Users/brettreynolds/projects/LLM-CLI-projects/personal/personal-website/index-new.html:123)). But it does not say that Brett wrote or co-wrote them, or give dates, publishers, or status. They appear visually as resources alongside CGELBank and the English Constructionary. The page therefore displays published titles without presenting published achievement.

The taxonomy also leaks. “Linguistics” and “Grammar and description” are not parallel domains. The third band is a major part of the evidence for the second.

## 3. What is wrong with it?

Ordered by severity:

1. **The thesis hierarchy does not render as designed.**  
   `.thesis-line` has specificity `(0,1,0)`. `.thesis p` has `(0,1,1)` and applies to the same paragraph ([style-v2.css](/Users/brettreynolds/projects/LLM-CLI-projects/personal/personal-website/style-v2.css:39)). It therefore wins for:

   - `font-size`: 1.05rem, not 2rem
   - `line-height`: 1.65, not 1.25
   - `max-width`: 31em, not 20em
   - `color`: muted grey

   The mobile `.thesis-line { font-size: 1.6rem; }` retains specificity `(0,1,0)` and also loses. The inferred result is an 18.9px thesis below a 32.4px name on desktop, and 16.8px below 28.8px at 600px and under. The redesign’s central visual move has disappeared.

2. **It removes credibility exactly where unfamiliar visitors need it.**  
   The header identifies subjects, not professional roles ([index-new.html](/Users/brettreynolds/projects/LLM-CLI-projects/personal/personal-website/index-new.html:14)). Humber and the University of Toronto are absent. Publications and CV do not appear until after the manifesto, nine selected items, and grammar strip ([index-new.html](/Users/brettreynolds/projects/LLM-CLI-projects/personal/personal-website/index-new.html:140)). The current page supplies affiliation, books, current monograph, and research focus in its identity block ([index.html](/Users/brettreynolds/projects/LLM-CLI-projects/personal/personal-website/index.html:17)). The problem there is presentation density, not missing substance.

3. **The two-column symmetry misstates the record.**  
   Equal columns imply comparable evidence and maturity. The AI column currently contains one directly relevant arXiv benchmark, two more philosophical items, and two frameworks combined into an in-preparation entry. The linguistics and grammar record spans decades of published work. This is not a judgment of research quality. It is a mismatch between the visual claim and the evidence the page elects to show.

4. **The interaction language is misleading.**  
   Generic links are maroon through `a { color: var(--link) }` ([style.css](/Users/brettreynolds/projects/LLM-CLI-projects/personal/personal-website/style.css:176)). `.door h2` assigns the same colour to non-interactive headings ([style-v2.css](/Users/brettreynolds/projects/LLM-CLI-projects/personal/personal-website/style-v2.css:70)). Work titles are non-clickable `<span>` elements. Visitors must target 0.85rem repository labels below them ([style-v2.css](/Users/brettreynolds/projects/LLM-CLI-projects/personal/personal-website/style-v2.css:102)). The page calls these sections “doors” in its source, but neither the door labels nor the paper titles behave as doors.

5. **The redesign increases the sprawl it was meant to cure.**  
   By a simple visible-text count, the live homepage has about 272 words and 20 links. The proposal has about 390 words and 32 links. Its HTML grows from 58 to 165 lines, then adds a 271-word About page and a 222-line override stylesheet. These are not meaningful transfer costs, but they are meaningful editorial and maintenance costs. The old page has one conspicuously bad paragraph. The new system has duplicated identity prose and more places for it to drift.

6. **The typography suppresses explanation and promotes inventory.**  
   Thesis prose and door introductions are muted grey ([style-v2.css](/Users/brettreynolds/projects/LLM-CLI-projects/personal/personal-website/style-v2.css:50)), while titles remain full contrast. Most sizes cluster narrowly between 0.85rem and 1.05rem. The page visually says “scan the titles, skip the argument”, even though the argument is supposed to distinguish the redesign.

   The `31em` measure is also inconsistent because `em` resolves against each element’s font size. Inferred desktop maxima are about 586px for `.thesis p`, 530px for `.strip p`, and 558px for `.prose`. One variable produces three right edges.

7. **There are smaller integration and asset defects.**  
   The About page links back to `index-new.html` twice ([about.html](/Users/brettreynolds/projects/LLM-CLI-projects/personal/personal-website/about.html:15)). If the proposal replaces `index.html` and the staging filename is not retained, those links fail. If it is retained, they lead to a noncanonical duplicate. Meanwhile, `publications.html` still links back to `index.html`.

   The portrait is a 1,214,919-byte, 1395×2093 JPEG without HTML `width` or `height` attributes ([index-new.html](/Users/brettreynolds/projects/LLM-CLI-projects/personal/personal-website/index-new.html:15)). The proposal downloads it for an inferred 110px display width. It fixes neither transfer waste nor layout reservation.

   Duplication has already produced a bibliographic inconsistency: About and the live homepage date *A Student’s Introduction* to 2021, while Publications says 2022 ([about.html](/Users/brettreynolds/projects/LLM-CLI-projects/personal/personal-website/about.html:41), [publications.html](/Users/brettreynolds/projects/LLM-CLI-projects/personal/personal-website/publications.html:29)). The clean-room evidence cannot determine which date is correct, only that they disagree.

### What the disciplined edit should have been

Keep the live page’s architecture and make four bounded changes:

- Turn the 202-word biography into three paragraphs of roughly 40 words each: identity and affiliations, the unifying research question, then books and current work.
- Put `Publications`, `CV`, and email immediately below the tagline.
- Add one full-width “Selected work” list with directly linked titles:
  - *Adversarial Pragmatics for AI Safety Evaluation*
  - *Truth-tracking profiles*
  - *Grammaticality de-idealized*
  - the published 2026 *English Language and Linguistics* article
  - the books
- Divide the existing navigation visually into primary and secondary links without adding destinations.

The existing stylesheet already contains a suitable one-column microformat in `.cluster-list`, `.cluster-title`, `.cluster-meta`, and `.cluster-links` ([style.css](/Users/brettreynolds/projects/LLM-CLI-projects/personal/personal-website/style.css:321)). This alternative would require roughly 35 to 45 new HTML lines, a few lines for paragraph spacing and secondary-link treatment, and one properly resized portrait asset. It would require no second stylesheet, no replacement homepage, and no new page carrying essential credentials.

That edit would keep the homepage near its present word count while making current AI work addressable, preserving institutional identity, showing both published and emerging work, and avoiding a false two-column comparison.

## 4. Audience and purpose fit

- **AI safety researchers:** Best served by the proposal. The arXiv, walkthrough, adjudication app, and code are immediately useful. They are still asked to infer professional standing from a manifesto, and the paper title itself is not clickable.

- **Linguists and philosophers:** Served by the explicit unifying thesis and LingBuzz or PhilArchive links. Failed by the omission of the published record and by the implication that current preprints are the whole evidential base.

- **Grammar and TESL readers:** Failed most symbolically. Recognisable books and CGEL resources are present, but placed in a muted third band and stripped of authorship. The current biography treats those books as achievements rather than miscellaneous resources.

- **Hiring committees, grant panels, and editors:** Failed operationally. Affiliation, CV, publications, publishers, and established output are all delayed or moved off-page. The page leads with self-description and work status rather than independently legible evidence.

- **Potential collaborators:** Mixed. The proposal makes topical entry points easier to find, which is valuable. Missing roles, buried contact information, non-clickable titles, and narrow research columns add avoidable friction.

## 5. Would I ship it?

**Start over from the current `index.html`, not from a blank canvas.** I would not ship `index-new.html` as the replacement. Fixing its cascade, affiliations, title links, publication balance, typography, navigation, image, and deployment paths would still leave the questionable two-door hierarchy at its centre. The live page’s architecture is sound enough: person, credentials, focus, work, navigation, contact. Its real defects are one undivided paragraph and poor access to selected work. Those are smaller, cheaper, and safer to edit directly.