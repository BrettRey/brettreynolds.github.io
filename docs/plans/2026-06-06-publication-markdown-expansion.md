# Publication Markdown Expansion Plan
Date: 2026-06-06
## Goal
Add more Markdown author-manuscript mirrors to `brettreynolds.ca`, prioritizing publications that are original, publicly available as preprints, and represented by local author-controlled source files.
## Recommended first batch
1. **Definiteness and deitality in English: A homeostatic property cluster account**

  - Why: The coined category `deitality` makes this one of the clearest original contributions.

  - Source: `papers/Definiteness_and_deitality/Claude.tex`

  - Public record: `https://ling.auf.net/lingbuzz/009369`

  - Note: Use `Claude.tex`, not `main.tex`; `Claude.tex` matches the website title and contains the reviewed-responsibility note, while `main.tex` still says "Binary, HPC Account" and "don't quote or rely on it."

2. **Naturalizing typological kinds: Comparanda, mechanisms, and measurement**

  - Why: Programmatic HPC extension into typological methodology.

  - Source: `papers/Functions_as_Comparanda__Categories_as_Kinds__A_Homeostatic_Approach_to_Typology/main.tex`

  - Public record: `https://ling.auf.net/lingbuzz/009461`

3. **Language as a stack of homeostatic property-cluster kinds: From phonemes to constructions**

  - Why: Broad architecture paper, with empirical case studies across levels.

  - Source: `papers/Language_as_a_Stack_of_Homeostatic_Property_Cluster_HPC_Kinds/main.tex`

  - Public records: Zenodo DOI and LingBuzz.

4. **The homeostatic maintenance of English countability**

  - Why: Strong original application of the HPC programme to a central grammar category.

  - Source: `papers/countability/main.tex`

  - Public record: `https://ling.auf.net/lingbuzz/009537`

5. **How to study boundary phenomena: English reciprocals and the limits of categorization**

  - Why: Original method paper with code and empirical apparatus; already has Code and Slides links on the website.

  - Source: `papers/How_to_Study_Boundary_Phenomena_English_Reciprocals_and_the_Limits_of_Categorization/main.tex`

  - Public record: `https://ling.auf.net/lingbuzz/009294`

6. **Varieties as conditioning structure: A homeostatic account of register, dialect, and discourse community**

  - Why: Original HPC treatment of varieties and conditioning environments.

  - Source: `papers/Varieties_as_Conditioning_Structure/main.tex`

  - Public record: `https://lingbuzz.net/lingbuzz/009872`

## Hold for a later batch
- **Grammaticality as kind**: original and important, but coauthored. I would add it only after confirming the coauthor is comfortable with a site mirror.

- **From checklists to clusters: A homeostatic account of AGI evaluation**: original, but outside the core linguistics-publication cluster already mirrored.

- **Grammaticality needs more than dependency locality** and **De-idealizing the asterisk**: useful, but less central than the first batch.

- Older published papers with publisher PDFs: skip unless rights are clear.

## Implementation
1. Extend `scripts/generate-paper-mirrors.mjs` with the selected paper metadata.

2. Add small generator support if needed for alternate source filenames such as `Claude.tex`.

3. Regenerate the mirrors with `node scripts/generate-paper-mirrors.mjs`.

4. Add `Mirror` and `Markdown` links to the matching `publications.html` entries.

5. Verify:

  - generated `paper.md`, `cite.bib`, and `index.html` files exist for each new slug;

  - `/papers/index.html` and `/llms.txt` list the added mirrors;

  - generated Markdown has no obvious unresolved citation-key debris;

  - existing untracked files remain untouched.
