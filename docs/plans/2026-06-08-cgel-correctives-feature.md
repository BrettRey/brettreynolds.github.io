# CGEL Correctives Website Feature

## Proposed Placement

Create a standalone page at `cgel-correctives.html`, linked from:

- the homepage navigation as `CGEL correctives`
- the top of `publications.html`, beside `Machine-readable paper mirrors` and `llms.txt`

This keeps the main publications list chronological while making the thematic cluster visible.

## Proposed Page Title

`CGEL correctives and extensions`

## Proposed Framing

The page should present the work as part of the intellectual afterlife of *The Cambridge Grammar of the English Language* rather than as a simple anti-CGEL page. The useful distinction is:

- **direct correctives**: papers that revise a CGEL analysis or category assignment;
- **extensions and completions**: papers that keep the CGEL framework but fill gaps, formalize machinery, or improve its projectibility;
- **same-tradition correctives by others**: work by Payne, Huddleston, Pullum, and related authors that does the same kind of category/function cleanup.

## Proposed Intro Copy

These papers treat *The Cambridge Grammar of the English Language* as a working grammar: strong enough to build on, explicit enough to test, and detailed enough that local revisions matter. Some of the work directly corrects CGEL analyses. Some extends CGEL machinery into areas where the book is suggestive but not fully worked out. Some belongs to the same post-CGEL tradition of category/function cleanup.

## Brett Reynolds Core Cluster

### Direct correctives

- **Why *more* and *less* are never adverbs**. Published in *Journal of Linguistics* (2024). Directly rejects CGEL's treatment of analytic comparative *more* and *less* as adverbs and argues that they are determinatives throughout.
- **The lexicon-syntax boundary in English numerals: Cardinals, ordinals, and fractionals**. Published in *English Language and Linguistics* (2026). Preserves CGEL's main category assignments for numerals but replaces the large-numeral lexicalization story with a syntax where English shows syntactic structure.
- **English determinatives as nouns**. Preprint / under review at *English Language and Linguistics*. Keeps CGEL's category/function distinction and NP-headedness but revises the supercategory of determinatives and narrows the role of fused-head analysis.

### Extensions and completions

- **Personhood and pro-forms: A hierarchical analysis of gender in Modern English**. Under review at *Folia Linguistica*. Builds from CGEL's treatment of personal and non-personal contrasts, but reorganizes English gender as a pro-form system structured around personhood rather than as a pronoun-limited masculine/feminine/neuter inventory.
- **"Exactly who" but not *"the person exactly who"*: Focus modifiers and the foregrounding constraint**. Preprint / under review at *Glossa*. Explains a distribution that CGEL notices but does not fully account for: why focus modifiers combine with interrogative heads but not corresponding relative constructions.
- **What English interjections let us predict: Stable causal-pragmatic clustering and path dependence**. Preprint / submitted to *Journal of Pragmatics*. Borderline as a CGEL corrective: CGEL includes interjections, but the paper argues that there is much more grammar-pragmatics structure here than later pedagogical summaries allow.

### CGEL-aligned public and pedagogical correctives

- **Prepositions in (English) dictionaries**. Published in *Dictionaries* (2025). Not a correction to CGEL; a CGEL-aligned correction to dictionary category practice.
- **Going + COMP projects PP, not AdvP**. Published in *English Language and Linguistics* (2025). Not a correction to CGEL; a CGEL-aligned reply about category projection.
- **Determiners, feline marsupials, and the category-function distinction** and **Determinatives again**. Earlier pedagogical correctives that bring the CGEL category/function distinction into TESL-facing grammar discussion.

## Related Correctives by Others

- **Payne, Huddleston & Pullum (2007), "Fusion of functions: The syntax of *once*, *twice* and *thrice*"**. A model example of CGEL-style cleanup: category and function must remain distinct if the syntax of these items is to be described without category confusion.
- **Payne, Huddleston & Pullum (2010), "The distribution and category status of adjectives and adverbs"**. A broader treatment of adjective/adverb category status in the same analytic tradition.
- **Payne (2025), "Attributive adjective ordering and the complement-modifier distinction"**. A newer example of the same line: category analysis improves once complement and modifier relations are kept apart.

## Implementation Notes

Use ordinary static HTML and the existing `style.css`. Add light list/card styling only if needed. Keep the page readable, not promotional.
