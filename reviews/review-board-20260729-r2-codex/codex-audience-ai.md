## 1. Ten-second read

Recorded before opening the secondary pages:

> This appears to be a researcher working across AI evaluation, assurance, and linguistics, with a unifying interest in what labels and benchmark scores let us infer. “Projectibility-first” looks like their named framework. I cannot yet tell whether AI safety evaluation is their main job, a newer research strand, or one half of a broader academic programme.

What actually appears first is the photograph, “Brett Reynolds,” and “AI evaluation · Assurance · Linguistics,” followed by the projectibility question. The name is the largest text at `1.8rem`. Although `.thesis-line` declares `2rem`, `.thesis p` also matches it and wins with specificity `(0,1,1)` over `(0,1,0)`, reducing it to `1.05rem`. Thus the thesis does not receive the intended largest-text emphasis.

After that, a desktop reader encounters AI evaluation on the left and linguistics on the right. On a narrow screen, the AI section stacks before linguistics. See [index-new.html](/Users/brettreynolds/projects/LLM-CLI-projects/personal/personal-website/index-new.html:14) and [style-v2.css](/Users/brettreynolds/projects/LLM-CLI-projects/personal/personal-website/style-v2.css:39).

## 2. Sixty-second read

I clicked **Publications** because the homepage mixes preprints, work under review, work in preparation, and published books. I clicked **About** because the homepage gives only a Humber email address, not a position or affiliation.

| Question | Status | What settled it, or did not |
|---|---|---|
| What is the research programme? | **ANSWERED** | “Projectibility-first”: evaluate categories, benchmark scores, and expert judgments by the predictions they support and where those predictions fail. In AI, this becomes benchmark transfer, evaluation instruments, and assurance. In linguistics, it becomes category stability, grammaticality, and English grammar. This is unusually coherent across the two domains. |
| Is it any good? | **PARTLY ANSWERED** | The programme has a clear central question, and the benchmark has an arXiv paper, walkthrough, adjudication app, and code. The publication record establishes real linguistic expertise. But the homepage provides no benchmark size, model coverage, headline results, external validation, comparison with existing evaluations, or evidence that the broader assurance frameworks work. I can judge that the programme is intelligible and potentially relevant, not that it succeeds. |
| Are they employed, and where? | **ANSWERED**, after clicking About | About says he is a linguist at Humber Polytechnic and an adjunct professor of linguistics at the University of Toronto. It does not say that either role is specifically in AI safety or AI evaluation. See [about.html](/Users/brettreynolds/projects/LLM-CLI-projects/personal/personal-website/about.html:19). |
| What have they actually published that was peer reviewed? | **PARTLY ANSWERED**, after clicking Publications | The strongest recent evidence is publication in *English Language and Linguistics* in 2026 and 2025, *Dictionaries* in 2025, and *Journal of Linguistics* in 2024, plus a longer older journal record and a 2023 Linguistic Annotation Workshop paper. There are also published books with Cambridge University Press and Language Science Press. However, the page never explicitly marks individual items as peer reviewed, and some entries under “Journal Articles” are professional or pedagogical pieces. Most importantly for my purpose, I see no peer-reviewed AI safety publication. The benchmark is correctly listed as an arXiv preprint. See [publications.html](/Users/brettreynolds/projects/LLM-CLI-projects/personal/personal-website/publications.html:38). |

## 3. Credibility question

What raises my confidence:

- The benchmark is described narrowly as a “seed benchmark,” not as a field-defining evaluation. That is appropriately qualified.
- It has four concrete inspection routes: arXiv, walkthrough, adjudication app, and code. The benchmark itself is therefore inspectable.
- Instruction conflict, embedded commands, policy ambiguity, refusal calibration, and judge validation are recognizable evaluation problems, not generic “AI safety” branding.
- The linguistic publication record is substantial and relevant. Expertise in pragmatics, grammatical judgments, annotation, and category validity could genuinely contribute to this evaluation problem.
- The page distinguishes published, forthcoming, under-review, and in-preparation work more honestly once I reach the publications page.
- Institutional roles and an institutional email make the identity traceable.

What lowers my confidence:

- “AI evaluation and assurance researcher” is stronger than the demonstrated AI publication record. The listed employment is in linguistics, and the only clearly identified AI safety evaluation paper is the arXiv benchmark I arrived from.
- “I build evaluation instruments and assurance frameworks” is plural, but only the adversarial-pragmatics work is inspectable. “Delegation assurance” and “evidentiary assurance” are in preparation and have no links.
- The homepage asserts that projectibility-first unifies the two fields, but gives no result demonstrating that the transfer from philosophy of linguistic categories to deployed-model evaluation has paid off.
- The seed benchmark has no visible scale, model set, baseline, effect size, inter-rater reliability, judge-validity result, or comparison with existing benchmarks.
- The recent preprint list is extremely broad and high-volume, spanning AI, philosophy, linguistics, corpus methods, animal metaphor, and mathematics. Breadth is not itself discrediting, but it makes depth difficult to calibrate quickly.
- The publication record strongly validates the person as a linguist. It does not yet independently validate them as an AI safety evaluator.
- There is a factual presentation inconsistency: About dates *A Student’s Introduction to English Grammar* to 2021, while Publications dates it to 2022.
- The institutional links on About lead to general programme or department pages, not an individual staff profile.

My confidence is high enough to inspect the benchmark, but not high enough to cite it or initiate a collaboration without reading the methods, dataset, and results.

## 4. Friction log

- I could not determine current employment from the homepage. I had to infer from the Humber email and then open About.
- I still cannot tell whether AI evaluation is part of either employed role, independent research, consulting, or a planned career transition.
- I cannot tell whether there is an AI safety organisation, lab, research group, or regular evaluation collaborator involved.
- The phrase “projectibility-first” is not clickable. I wanted a concise methods or programme overview.
- The benchmark title itself is not clickable, although the adjacent arXiv, walkthrough, app, and code labels are.
- I wanted the benchmark’s size, task composition, evaluated models, scoring method, primary result, limitations, and validation status. None appears on the homepage.
- I wanted to know whether the benchmark is ready for adoption or explicitly exploratory. “Seed benchmark” suggests exploratory, but I had to interpret that.
- “Delegation assurance & evidentiary assurance” is not clickable and has no inspectable draft, specification, example, or repository.
- The monograph title is not clickable and is only described as under review.
- I could not immediately tell whether “Truth-tracking profiles” and “Effective without warrant” contain operational evaluation work or are primarily philosophical papers.
- The selected homepage work mixes arXiv, archive manuscripts, under-review work, work in preparation, and published books. I had to open Publications to sort the statuses.
- The Publications page combines “Preprints & Under Review,” and several entries have no more specific status than their placement in that section.
- The Publications page does not explicitly identify which outputs were peer reviewed.
- I found no peer-reviewed AI safety publication.
- I found no benchmark adoption, citations, external replication, deployment use, or named collaborators on the homepage.
- I found an email address, but no indication of what kind of collaboration is sought or whether the person is available.
- The two secondary pages disagree on the publication year of the Cambridge grammar book.
- The Publications page’s back link points to `index.html`, not `index-new.html`, so returning may lead to a different homepage.

## 5. Verdict

**(a) Read the paper.**

The homepage clears that threshold. The problem is relevant, the linguistic background could provide a real comparative advantage, and the paper is accompanied by code and an adjudication interface. I would not yet bookmark the person, cite the work, or email about collaboration. Those decisions depend on whether the benchmark has a defensible threat model, meaningful coverage, reliable annotations, nontrivial baselines, and evidence beyond a seed demonstration.