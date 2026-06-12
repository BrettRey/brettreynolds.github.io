---
title: "Measuring Stable Diagnostic Ambiguity: A Quantitative Workflow for Small-n Grammatical Boundary Phenomena"
author: "Brett Reynolds"
year: "2025"
status: "Under review at Journal of Quantitative Linguistics"
canonical_url: "https://ling.auf.net/lingbuzz/009294"
website_url: "https://brettreynolds.ca/papers/how-to-study-boundary-phenomena/"
markdown_url: "https://brettreynolds.ca/papers/how-to-study-boundary-phenomena/paper.md"
version: "author-manuscript mirror"
version_date: "2026-06-12"
keywords: ["boundary phenomena", "reciprocals", "categorization", "English grammar", "homeostatic property clusters"]
---
# Measuring Stable Diagnostic Ambiguity: A Quantitative Workflow for Small-n Grammatical Boundary Phenomena

**Author-manuscript mirror.** This Markdown file is provided for accessibility, search, and machine readability. The canonical public record is linked in the metadata above.

## Abstract
English reciprocals (*each other* and *one another*) are a small-$`n`$ boundary case: there are only two items, but both show persistent evidence of affiliation with pronouns and with compound determinatives. Instead of forcing a binary categorization, this paper measures the stability of diagnostic ambiguity: whether a measurement model repeatedly places the items at an interface. Using a 155-property profile spanning morphology, syntax, semantics, and phonology, I locate the reciprocals in grammatical space and then ask whether that location survives randomized benchmarks, alternative specifications, rotated comparison sets, predictive blending, and anchor calibration. Across analyses, reciprocals occupy a stable boundary position between canonical pronouns and compound determinatives. I argue that this pattern is compatible with treating grammatical categories as projectible property clusters, and I offer the method as a transparent template for other small-$`n`$ categorization problems. Some grammatical boundary cases are small by design: the target inventory is fixed and ordinary large-sample classification is unavailable. This paper develops a quantitative workflow for such cases. Rather than treating inconsistent diagnostics as failed classification, it asks whether diagnostic ambiguity is stable across separately varied measurement choices.

Using English reciprocals (*each other* and *one another*) as a proof-of-concept case, I build a 155-property profile spanning morphology, syntax, semantics, and phonology, locate the targets in grammatical feature space, and test that location with constrained randomization, specification-curve analysis, comparator-set rotation, predictive blending, and anchor calibration.

Across analyses, the reciprocals occupy a stable boundary position between canonical pronouns and compound determinatives. The result is not a forced category assignment, but a measurement-level account of how small-$`n`$ grammatical boundary phenomena can be made inspectable. I argue that stable diagnostic ambiguity is theoretically informative when grammatical categories are treated as projectible property clusters.


**Word count:** 6,309, inclusive of abstract, references, captions, footnotes, and end matter.

# Introduction

Quantitative linguistics often works with large sets of tokens, texts, or languages. Grammatical boundary phenomena create a different measurement problem: the target inventory may be fixed and tiny.

English has only two central reciprocals, *each other* and *one another*, and their scarcity is not a sampling accident. Those two forms are the inventory. In such cases, ordinary large-sample classification is unavailable, while traditional single-diagnostic argument invites what Croft (2001) calls “methodological opportunism”: analysts may select the tests that support a preferred category.

This paper treats small-$`n`$ boundary cases as linguistic measurement problems.[^1] Instead of asking which diagnostic wins, I measure the stability of diagnostic ambiguity: whether a specified measurement model repeatedly places the target items at an interface rather than resolving them into one category.

Here, ambiguity is epistemic. It concerns what the instrument can resolve about categorial placement, not whether the categories themselves are intrinsically vague.

The contribution is a workflow for making such ambiguity inspectable. The workflow is:

1.  encode a theory-informed item-by-property matrix;

2.  locate the target items relative to clear anchors in full-dimensional feature space;

3.  define an interpretable distance contrast;

4.  compare that contrast to a constrained reference distribution;

5.  vary metrics, feature blocks, and comparator sets;

6.  calibrate boundary position with predictive blending and anchor recovery; and

7.  report stable ambiguity only when uncertainty localizes to the boundary items while clear anchors remain recoverable.

I demonstrate the workflow using English reciprocals. Standard grammars classify reciprocals as pronouns. Their internal composition points toward the determinative system: *each* in *each other* is a determinative, and both *one* and *another* in *one another* are determinatives.

This places reciprocals near the compound determinatives in Huddleston and Pullum (2002, henceforth *CGEL*; Ch. 5 §9.6): items like *somebody* and *anybody* that realize fused determiner–head functions (Payne et al. 2007). Within that architecture, category and function come apart, so a morphologically complex item can belong to the determinative category even when it never appears as a determiner with an overt nominal head. Reciprocals press on that architecture because their parts are determinatives while the whole is traditionally classified as a pronoun.

The measurement instrument is a 155-feature profile covering morphology, syntax, semantics, and phonology across the 138 words that form the universe of pronouns and determinatives as defined by *CGEL*. This makes theoretical commitments explicit rather than dispersing them across selected diagnostics.

The logic is analogous to mapping vowel space: after a language’s vowel space is calibrated, a single token can be located relative to established categories. A lone production near the /i/–// boundary can be characterized as boundary-dwelling even though the token is ultimately one or the other; the issue is that the acoustic measurements do not resolve the distinction. The 155-feature matrix plays the same role here, with its own resolution limits.

The quantitative analyses ask whether the reciprocal location is stable under a set of prespecified pressures. A boundary item should retain a boundary position across reasonable choices of distance metric, regularization, and feature ablation (E1). Different feature families may pull in different directions when the encoded properties reflect partly distinct grammatical pressures (E2). Clear anchors should calibrate cleanly under the same analyses (E3).

A one-parameter blend fit to anchor profiles should place boundary items near parity (E4). The relevant distance contrasts should remain interpretable when compared to reference distributions that preserve the instrument’s marginals (E5). These expectations turn inconclusive diagnostics into testable measurement claims.

The theoretical payoff is compatible with treating grammatical categories as projectible property clusters (Miller 2021). On that view, categories are useful because seeing part of a profile supports projection to other properties: clear pronouns should behave pronoun-like across new diagnostics, and clear compound determinatives should behave in line with their profile.

Boundary items are informative when those projections conflict in stable ways. The paper does not require the reader to adopt that theoretical vocabulary to accept the measurement result. The direct claim is narrower: within a *CGEL*-informed feature space, English reciprocals occupy a stable interface position between pronouns and compound determinatives.

Two limitations constrain the analysis. First, all findings depend on a single hand-coded binary matrix. Agreement across analyses counts as internal robustness against method-specific artefacts, not independent convergence across datasets. Second, with $`n = 2`$, no procedure can make the target behave like a large population. The point is to locate the two forms responsibly in a calibrated space, report the specification surface, and make clear what would change the conclusion.

# A Feature-Space Measurement Model for Grammatical Categories

To make diagnostic ambiguity measurable, I treat grammatical similarity as distance in a binary feature space. Each word form is represented as a point in a high-dimensional space whose axes are grammatical properties. The measurement question is not whether one diagnostic is decisive, but how the full property profile positions reciprocals relative to clear pronoun and compound-determinative anchors.

The features come from “Quantifying the Differences Between Lexical Categories” (2021), who coded 232 binary features across 138 word forms. I keep only the 155 that apply to more than one word form, which filters out idiosyncratic properties unique to individual items and leaves features that actually help compare categories. They span morphology (66), syntax (50), semantics (36), and phonology (3), so with binary coding every word form becomes a 155-bit vector.

Again, the vowel analogy is useful. After a language’s vowel space is mapped, any new token can be placed relative to the established categories. Here, the 155 features are the acoustic dimensions; canonical pronouns and compound determinatives are the reference categories; the 2D ordination is like an F1–F2 plot for visual orientation; and Jaccard distance stands in for perceptual distance.

I use Jaccard because in sparse binary data, shared absences tell you almost nothing. Shared absence is cheap evidence: the fact that neither *each other* nor *the* can be plural does not reveal much about their relationship. What matters are shared presences and conflicts. Jaccard ignores the uninformative zeros and focuses on what counts. The MCA plot in Figure <a href="#fig:mca" data-reference-type="ref" data-reference="fig:mca">1</a> is just for intuition; all the actual contrasts use full 155-dimensional distances.

<figure id="fig:mca" data-latex-placement="h!">
<img src="plots/mca_reciprocals.png" />
<figcaption>Reciprocals in grammatical feature space visualized with Multiple Correspondence Analysis. Pronouns (cyan) and determinatives (red) form regions; the compound determinatives sit at the interface; <em>each other</em> and <em>one another</em> (triangles) fall in that same interface.</figcaption>
</figure>

For comparison, I use two predeclared sets. First, canonical pronouns like *he*, *her*, and *herself*. Second, the compound determinatives from Huddleston and Pullum (2002, Ch. 5 §9.6), items like *anybody* and *everyone* that realize fused determiner–head functions (Payne et al. 2007). If morphologically complex reciprocals pattern with anything, the likely comparators are these hybrids rather than simple pronouns.

<div id="tab:diagnostics">

| Diagnostic | Illustration | Canonical pronouns | Compound determinatives | Reciprocals | Main pull |
|:---|:---|:---|:---|:---|:---|
| Distinct case paradigm | *he/him/his* | yes | no | no | determinative-ward |
| Compound morphology | *somebody*, *each other* | no | yes | yes | determinative-ward |
| Pronoun-like anaphoric NP substitution | standalone anaphoric NP use | yes | no | yes | pronoun-ward |
| Fused determiner–head use | *somebody arrived* | no | yes | no | pronoun-ward |
| Reciprocal-style co-argument dependency | *They liked each other* | no | no | yes | distinctive |
| Subject distribution | *He arrived*, *Somebody arrived* | yes | yes | no | distinctive |
| Reciprocal semantics | mutual interpretation | no | no | yes | distinctive |
| Distinct pronominal genitive paradigm vs. clitic genitive | *his*, *somebody’s*, *each other’s* | yes | no | mixed | mixed |

Representative diagnostics encoded in the 155-property matrix. The full matrix contains many more items and finer distinctions; this subset shows the kinds of evidence that pull reciprocals toward pronouns, toward compound determinatives, or away from both.

</div>

Table <a href="#tab:diagnostics" data-reference-type="ref" data-reference="tab:diagnostics">1</a> gives a compact view of the kinds of evidence that feed the matrix. The quantitative sections do not replace these diagnostics; they aggregate them, check their joint stability, and show how much the overall boundary diagnosis depends on metric choice, feature family, and comparator choice.

From here the pipeline is straightforward. I first locate the reciprocals in the feature space, then summarize their relative position with a single distance contrast:
``` math
\Delta = \bar d(\text{reciprocals},\text{pronouns})
       - \bar d(\text{reciprocals},\text{compound determinatives}).
```
Positive values mean that reciprocals are closer to the compound determinatives than to the pronouns; negative values mean the reverse.

The later sections then ask four separate questions about that contrast: whether the contrast is unusual under a constrained benchmark, how much it depends on numerical specifications, how much it depends on the chosen comparison groups, and what predictive blend best captures the reciprocals’ position relative to clear anchors.

# Benchmarking the Distance Contrast Against a Constrained Reference Distribution

Before treating a positive $`\Delta`$ as evidence of a determinative-ward pull, I need to know whether this feature matrix would often generate such a contrast even if the observed item–property pairings were scrambled. The benchmark should keep two basic facts intact: how many properties each word has and how many words each property applies to.

Each word in the dataset has a certain number of properties (e.g., *each other* has 23), and each property applies to a certain number of words (e.g., `inflects for case` applies to 75). These totals reflect real facts about English: pronouns tend to have case distinctions, most words are not gradable, and so on. Any benchmark that ignored those totals would be too weak to be informative.

The relevant comparison keeps those totals while randomizing which specific words have which specific properties. Repeating that operation gives a reference distribution for $`\Delta`$ under a benchmark where the instrument’s marginal structure is intact but the observed grammatical pattern is scrambled. If the observed determinative-ward contrast is near the centre of this distribution, the contrast is a routine by-product of the matrix’s row and column totals. If the contrast is in the tail, the result is unusual relative to that constrained benchmark.

The quasiswap algorithm (Miklós and Podani 2004) generates exactly this kind of controlled randomization. It rearranges the feature matrix through thousands of small swaps, always preserving how many features each word has and how many words have each feature. In practical terms, the reference distribution asks whether the reciprocals end up closer to the compound determinatives than to the pronouns by more than this matrix structure alone would ordinarily produce. It does not show whether reciprocals are “really” intermediate. It asks the narrower model-checking question: whether the determinative-ward component of the reciprocal profile is unusual under the constrained randomization.

<figure id="fig:perm_test" data-latex-placement="h!">
<img src="plots/permutation_null.png" style="width:72.0%" />
<figcaption>Constrained reference distribution for the observed <span class="math inline"><em>Δ</em></span> contrast. The histogram shows <span class="math inline"><em>Δ</em></span> values from 5,000 row- and column-preserving randomizations of the feature matrix, generated with the quasiswap algorithm; the dashed vertical line marks the observed value. The figure does not by itself establish boundary status. It shows that the observed determinative-ward contrast is unusual under this benchmark.</figcaption>
</figure>

The results are shown in Figure <a href="#fig:perm_test" data-reference-type="ref" data-reference="fig:perm_test">2</a>. For my primary comparison, using carefully matched sets of six pronouns and six compound determinatives, the observed contrast falls in the extreme positive tail of this reference distribution (tail-area summary $`= 0.003`$, Monte Carlo SE $`\approx 0.001`$).

I use this tail area as a model-checking summary, not as a classical test of a sharp null hypothesis. The reference model is intentionally artificial: it asks what $`\Delta`$ values are typical when the instrument’s row and column totals are preserved but the item–feature associations are otherwise scrambled. Under that benchmark, contrasts this determinative-ward are rare. That suggests the observed $`\Delta`$ is not merely an artifact of how common or rare the coded features happen to be in English.

Two caveats apply. First, with only two reciprocals, no single contrast should carry much interpretive weight on its own. Second, my choice of which six pronouns and six determinatives to compare matters. Different selections might yield different results, a sensitivity I explore in section <a href="#sec:rotations" data-reference-type="ref" data-reference="sec:rotations">5</a>. For that reason, I treat the reference-distribution result as one model check on the determinative-ward contrast rather than as a decisive test of boundary status.[^2]

# Metric and Feature-Block Sensitivity

The reference-distribution check fixes one set of analysis choices: Jaccard as the primary distance, a specific set of reference items, and $`\Delta`$ as the contrast of interest. Each choice is a fork in the path and an opportunity for bias to accumulate. The next question is whether the basic interface reading survives when reasonable alternatives are allowed.

Specification-curve analysis (Simonsohn et al. 2020) addresses this directly. Instead of defending a single pipeline, I run many plausible pipelines and show all results. Here, I vary the distance metric (Jaccard, Dice, Hamming, and an IDF-weighted Jaccard), the feature set (all features, or blockwise ablations such as “no morphology” and “no syntax”), and the weighting method. The goal is not to find the “best” specification or crown a winning pipeline, but to see whether the sign and size of $`\Delta`$ are stable across reasonable ones.

In the implementation, $`\alpha`$ parameterizes this regularization choice; Figure <a href="#fig:spec_curve" data-reference-type="ref" data-reference="fig:spec_curve">3</a> shows it as the contrast between ridge and elastic-net weighting. The ridge method keeps all features in play with different weights, whereas elastic-net weighting allows the algorithm to drop weakly informative features altogether. Each combination yields a value of the same $`\Delta`$, so the curve shows whether the contrast changes sign or merely changes size.

<figure id="fig:spec_curve" data-latex-placement="h!">
<img src="plots/spec_curve.png" />
<figcaption>Specification curve for <span class="math inline"><em>Δ</em></span>. Each point shows the observed contrast under different combinations of weighting method (shape), distance metric (colour), and feature block exclusion (panels). Positive values indicate closer placement to compound determinatives; negative values indicate closer placement to pronouns; zero marks the boundary.</figcaption>
</figure>

Figure <a href="#fig:spec_curve" data-reference-type="ref" data-reference="fig:spec_curve">3</a> shows two clear patterns. First, the sign of $`\Delta`$ is stable across distance metrics and weighting methods: most specifications land on the same side of zero. Second, only one block flips the sign. When morphology is *excluded* (panel “morph”), $`\Delta<0`$ and the reciprocals look more pronoun-like.

With all features included (panel “none”) $`\Delta>0`$, and removing semantics pushes $`\Delta`$ further positive (more determinative-like). Removing syntax or phonology leaves small, positive contrasts near the baseline. This pattern suggests that morphological features carry most of the determinative-ward signal, whereas semantic features contribute a pronoun-ward pull; syntax and phonology are comparatively weak in this contrast.

This invariance has theoretical significance. The specification curve does not settle category theory on its own, but it does test whether the observed interface position is robust across reasonable metrics and ablations. $`\Delta`$ may shift in magnitude across specifications, but its sign, indicating which side of the pronoun/compound-determinative interface reciprocals favour, remains stable across most of them. Within this measurement model, this marks stable boundary position rather than a metric artifact.

The specification curve leaves design sensitivity from the particular 6+6 matched sets used in the reference-distribution contrast; section <a href="#sec:rotations" data-reference-type="ref" data-reference="sec:rotations">5</a> investigates that separately by rotating the matched sets.

# Comparator-Set Sensitivity

The specification curve addresses numerical tuning choices, but it keeps the comparator set fixed. The comparison-group question is different: how much depends on which anchor items I compare the reciprocals to? I had chosen specific pronouns and determinatives for comparison based on theoretical considerations, but different choices may yield different contrasts. To assess that design sensitivity, I repeated the analysis 100 times, each time randomly selecting six pronouns and six compound determinatives from the eligible pools while holding all other steps fixed.

<figure id="fig:rotations" data-latex-placement="h!">
<img src="plots/matched_subset_robustness.png" style="width:80.0%" />
<figcaption>Sensitivity of <span class="math inline"><em>Δ</em></span> to the choice of comparison groups. The histogram shows the observed <span class="math inline"><em>Δ</em></span> values across 100 rotations of six pronoun and six compound determinative anchors. The dashed line marks the prespecified comparison set, the solid line marks the rotation median, and the dotted lines mark the interquartile range. Most rotations remain determinative-ward, but the magnitude varies substantially with the comparator set.</figcaption>
</figure>

Figure <a href="#fig:rotations" data-reference-type="ref" data-reference="fig:rotations">4</a> shows wide variation across rotations.[^3] The prespecified set yields $`\Delta = 0.079`$; across rotations the median contrast is $`0.023`$, with an interquartile range from $`0.002`$ to $`0.043`$. Three quarters of the rotations remain determinative-ward, but the effect is often much smaller than in the prespecified comparison.

With such small $`n`$, tail-area summaries are especially vulnerable to Type S (sign) and Type M (magnitude) errors (Gelman and Carlin 2014), so the more informative summary is the distribution of $`\Delta`$ itself rather than a tail area attached to one matched set. The substantive point is that $`\Delta`$ is design-sensitive to the choice of comparators: the prespecified set sits high in the rotation distribution, but many equally reasonable comparator sets yield weaker contrasts.

Accordingly, I focus on the effect itself, the distance contrast $`\Delta`$, and on how $`\Delta`$ varies across rotations, using the rotations as a descriptive multiverse (Steegen et al. 2016) that quantifies uncertainty due to researcher degrees of freedom rather than as a filter for statistical significance.

# Predictive Calibration of Boundary Position

The distance analyses ask which anchor set is nearer, but they do not give an intuitive scale for where the reciprocals sit between the two anchor profiles. To build that scale, I use a simple predictive blend model: a one-number summary asking what mix of pronoun-like and compound-determinative feature probabilities best predicts each reciprocal’s observed profile.

The two category profiles are estimated from the anchor items with the reciprocals held out; the exercise asks how much of each profile best predicts a reciprocal’s observed properties.[^4]

The model implements this idea with a mixture weight $`w`$ that ranges from 0 to 1. When $`w = 1`$, it predicts features from the pronoun profile; when $`w = 0`$, from the determinative profile. For values in between, it mixes the two patterns. A value of $`w = 0.7`$, for instance, is 70% pronoun-like and 30% determinative-like. Read $`w`$ as a predictive index of boundary position, not as a literal claim about composition.

I then asked what mixture weight would make the model best match the reciprocals’ observed feature patterns under the same scoring rule. In other words, if reciprocals are intermediate between the two anchor profiles, what blend best predicts their properties?

<figure id="fig:weight_cal" data-latex-placement="h!">
<img src="plots/weight_calibration.png" style="width:80.0%" />
<figcaption>Predictive blending of pronoun and compound determinative profiles. Curves show predictive fit as the mixture weight <span class="math inline"><em>w</em></span> varies; dashed lines mark the best-fitting weights for each reciprocal. Both minima lie near parity, with <span class="math inline"><em>ŵ</em> = 0.504</span> for <em>each other</em> and <span class="math inline"><em>ŵ</em> = 0.451</span> for <em>one another</em>.</figcaption>
</figure>

Figure <a href="#fig:weight_cal" data-reference-type="ref" data-reference="fig:weight_cal">5</a> reveals the same interface from another angle. To match the properties of *each other*, the best blend is about 0.50 pronoun-like; for *one another*, about 0.45 pronoun-like.

This provides another check on the same phenomenon. Whether the analysis visualizes grammatical space, measures distances, compares the observed contrast to a constrained reference distribution, or calibrates this simple blend, reciprocals consistently appear at the interface rather than clustering near either anchor profile.

Two caveats apply. First, reciprocals are not literally probability mixtures of two kinds; the model provides an interpretable, one-number summary of where they sit relative to the anchor profiles. Second, the blend is estimated on the same measurement instrument as the other analyses, so the blend is another internal check rather than an independent source of evidence.

# Anchor Calibration and Predictive Checks

Throughout these analyses, I’ve treated the feature matrix as a measurement model. The next issue is whether the measurements themselves are problematic. The first question is not whether the richest model fits, but whether the workflow earns trust step by step by distinguishing clear anchors and preserving basic structure before interpreting a case with unresolved placement. Before asking the instrument to place the reciprocals, I need to know whether it can recover the easy cases.

The checks reported here start one step later. I fit a simple model that predicts each binary feature from the item’s category label with modest adjustment terms and weak regularization, then draw replicated datasets from the fitted model.[^5] That staged buildup matters because a complicated fit can look plausible while still hiding an implementation error.

I ask two related questions: whether replicated datasets preserve the large-scale arrangement under the same ordination, and whether they preserve nearest-neighbour relations around anchors.

<figure id="fig:ppc_knn" data-latex-placement="h!">
<figure id="fig:ppc_procrustes">
<img src="plots/ppc_procrustes_hist.png" />
<figcaption>Predictive check for global structure. Histogram: distribution of the Procrustes statistic under replicated datasets; vertical line: observed statistic.</figcaption>
</figure>
<figure id="fig:ppc_knn">
<img src="plots/ppc_knn_diff_hist.png" />
<figcaption>Predictive check for local structure. Histogram: distribution of <span class="math inline"><em>k</em></span>-NN overlap around anchors (<span class="math inline"><em>k</em></span> fixed across runs); vertical line: observed overlap.</figcaption>
</figure>
<figcaption>Predictive checks. (a) Global structure: distribution of Procrustes fit statistics across replicated datasets (histogram) with the observed statistic marked (vertical line). (b) Local structure: distribution of nearest-neighbour overlaps under replication, with the observed overlap marked.</figcaption>
</figure>

<figure id="fig:calibration" data-latex-placement="h!">
<img src="plots/calibration.png" style="width:70.0%" />
<figcaption>Reliability diagram under cross-validation, following <span class="citation" data-cites="niculescu2005predicting">Niculescu-Mizil and Caruana (2005)</span>. Predicted probabilities (x-axis) track observed frequencies (y-axis), showing approximate calibration: when the model predicts 70% probability for the pronoun label, about 70% of held-out items are pronouns.</figcaption>
</figure>

The model passes these basic predictive checks (Figures <a href="#fig:ppc_procrustes" data-reference-type="ref" data-reference="fig:ppc_procrustes">6</a>, <a href="#fig:ppc_knn" data-reference-type="ref" data-reference="fig:ppc_knn">8</a>, and <a href="#fig:calibration" data-reference-type="ref" data-reference="fig:calibration">9</a>). Replicates maintain reasonable global geometry and preserve about 65.5% of local neighbourhood structure around anchors. The reliability diagram shows that when the classifier assigns, say, 70% probability to the pronoun label, the realized frequency on held-out items is near that level, so probabilities are roughly calibrated rather than systematically over- or under-confident.[^6]

Perfect reproduction is neither expected nor desired. What matters is that the measurement model carries real signal about categorical structure: clear pronouns and clear compound determinatives are distinguishable under the same machinery, which makes the reciprocals’ unresolved placement informative rather than an artefact of a broken instrument.

# Stable Ambiguity as a Measurement Result

The workflow distinguishes arbitrary diagnostic conflict from stable boundary placement under a specified measurement model. If the reciprocals occupy a stable boundary position, their placement should survive reasonable changes in metric and feature set, different feature blocks should pull in different directions, clear anchors should remain recoverable, and a predictive blend should place the reciprocals near parity. The observed pattern has this form: the sign of the distance contrast is stable across metrics and penalties and is only modest in magnitude, while reference-distribution extremity is design-sensitive even though the qualitative boundary diagnosis persists across rotations.

The blockwise results supply the expected cross-dimensional tension: morphology contributes most of the determinative-ward pull while semantics contributes a pronoun-ward pull, with syntax and phonology comparatively weak in this contrast. The instrument also separates anchors and yields calibrated supervised probabilities for them. The predictive blend places both reciprocals near parity, and the prespecified anchor contrast sits in the extreme tail of the row- and column-preserving reference distribution even though its extremity is design-sensitive across rotations.

This pattern is the measurement result. The reciprocals exhibit stable interface placement with cross-dimensional tension rather than decisive recategorization or a failure of measurement. Within this instrument, no cutoff, classifier, or blend model can make morphology and semantics agree when they do not; changing the conclusion would require different measurements or external evidence, not a different threshold.

More generally, boundary items should be expected to show stable interface placement under reasonable analytic choices. Single diagnostics or cherry-picked features force binary decisions; comprehensive profiles, prespecified analyses, and summaries that propagate design uncertainty instead map the topology of grammatical space, including its interfaces, and make clear which parts are robust within the chosen measurement model.

# Discussion

The quantitative contribution is a way to measure grammatical category edges when the target inventory is too small for ordinary large-sample classification. The paper combines a theory-informed feature space, explicit distance contrasts, constrained reference distributions, specification curves, comparator-set rotations, predictive blending, and anchor recovery into one workflow. The workflow asks whether a boundary diagnosis remains visible when the measurement choices most likely to move it are made explicit, rather than accumulating independent evidence from separate datasets.

For English reciprocals, the answer is positive but carefully bounded. Across analyses that make different invariance assumptions while interrogating the same measurements, reciprocals sit at the edge of the pronoun region in ordinations, show mixed nearest neighbours, attract near-chance supervised probabilities with tied predictive fit (0.485, 0.467; log-likelihood $`-54.240`$ under either labelling), and display a blockwise split in which morphology leans determinative-ward,[^7] semantics leans pronoun-ward, and syntax and phonology contribute relatively little.

For a quantitative analysis of boundary placement, the relevant success criterion is not decisive recategorization but stable diagnostic uncertainty accompanied by cross-dimensional conflict. Reciprocals exhibit that profile here.

The mixture calibration supports that reading: it reproduces decisive separation for anchors while placing reciprocals at the boundary with near-parity placement, consistent with the ordination, distance, reference-distribution, and supervised results. Because all analyses interrogate the same measurements, agreement is internal robustness rather than independent convergence.

The blockwise pattern is compatible with a cautious property-cluster interpretation, but the measurements do not explain the grammatical source of each pull. The relevant point for this paper is narrower: different parts of the feature profile pull in different directions under the same measurement instrument. For reciprocals, morphology carries the main determinative-ward signal, while semantics carries a pronoun-ward signal. The measurements do not show why those pressures arise. They show stable cross-dimensional tension. The paper’s direct claim remains measurement-level: in this *CGEL*-informed feature space, reciprocals occupy a stable position at the pronoun/compound-determinative interface.

What the instrument reveals is proximity to that interface: near-chance classifier probabilities, near-parity mixture weights, and cross-dimensional tension. The situation is analogous to a microscope at its resolution limit. The instrument localizes an interface zone even when it does not decide every theoretical question about category membership, and the 155-feature matrix has an analogous resolution floor within which the reciprocals fall. That uncertainty is epistemic rather than a claim that the categories themselves are vague or graded.

This interpretation also clarifies what the results do not show. The analyses do not accumulate independent evidential weight; all procedures reuse the same hand-coded matrix. Agreement across analyses counts as internal robustness against method-specific artifacts rather than as independent convergence, and the numbers do not by themselves license recategorization. On the predeclared matched set the observed contrast sits far into the positive tail of the row- and column-preserving reference distribution (tail-area summary $`= 0.003`$), but across rotated comparison sets the effect size varies substantially. In a measurement-first reading, that combination of modest directionality, design sensitivity, and stable qualitative diagnosis is what an interface position should look like given a target population of only two types.

The fusion-of-functions architecture provides a complementary grammatical backdrop (Payne et al. 2007). If category and function are distinct primitives and fused determiner–head structures are grammatically real, then these morphologically complex items can be determinatives by category while serving fused determiner–heads in NP. That architecture predicts pressure toward categorical edges when category, function, and internal composition point in partly different directions. The measurements above are consistent with such pressure for the reciprocals: they behave pronoun-like on some feature blocks and determinative-like on others. At the same time, retaining the canonical *CGEL* pronoun analysis as the prior default is methodologically appropriate; the data here do not overturn it, and the framework shown here makes explicit what kinds of evidence would do so.

Seen more broadly, the study’s contribution is methodological and interpretive rather than a category assignment. It operationalizes a way to examine boundary phenomena that avoids selective diagnostic shopping (Croft 2001): prespecify a small set of sensible analyses; interpret agreement as internal robustness on one dataset; make prior theoretical commitments explicit; and report the full specification surface rather than only favourable summaries. Inconclusive tests cease to be mere failures when they co-occur with cross-dimensional conflict and a stable pattern of diagnostic uncertainty; they become data about category structure when categories are treated as projectible property clusters (Miller 2021).

## Limitations, scope conditions, and disconfirmation

All findings are conditional on a single, theory-informed, hand-coded binary measurement model. Features are binarized, single-coder, and *CGEL*-dependent; this raises construct-validity and reliability concerns. I partly offset these with blockwise analyses and metric choice motivated by ordination, but stronger guarantees would require multi-annotator coding with reliability estimates or corpus-derived distributional features that reduce theory-dependence.

Target scarcity constrains inferential resolution: English has two reciprocal types, so any single reference-distribution contrast between reciprocals and comparators is inherently fragile, and supervised categorization produces only two probabilities of primary interest. Multiplicity and researcher degrees of freedom are addressed by prespecifying a small, theory-led set of analyses and reporting them all. Specification choices nonetheless remain scope conditions on the results.

External validity is restricted to English and to the inventory defined by *CGEL*; cross-linguistic generalization is a matter for new data.

The framework also supplies clear disconfirmation criteria for this case. Outcomes that would count against the boundary diagnosis include: alignment of morphology, syntax, semantics, and phonology on the same pole; calibrated supervised probabilities near 1.0 under one labelling together with superior predictive fit; disappearance of diagnostic uncertainty under reasonable distance metrics or regularization choices; and stability of those outcomes under feature-subset resampling. None of these criteria is met here.

## Implications and outlook

This case illustrates how to study boundary phenomena responsibly when categories are represented as structured property profiles. The objective is not to force a verdict on reciprocals but to refine the workflow that registers boundary behaviour on the measurement model already in use.

The first implication is that the workflow should characterize dependence rather than “repair” individual codings in a large, noisy matrix. What matters is which parts of the measurement model underwrite the boundary diagnosis. Influence diagnostics for distance-based summaries, blockwise ablations, and adversarial recoding of plausible high-leverage features can map an internal robustness surface: they show which modest, theory-motivated perturbations do and do not alter the qualitative outcome. Predictive comparison belongs in this workflow only after posterior predictive checks and with Pareto-$`k`$ diagnostics reported, since its role here is secondary to the main question of boundary location rather than model ranking.

The second implication is calibration against control items. Clear pronouns and clear compound determinatives should behave as anchors under the same analyses, yielding high-confidence, aligned outcomes for anchors and diagnostic uncertainty for reciprocals. If the same uncertainty appears for anchors, the pipeline is uninformative; if it localizes to reciprocals, the boundary diagnosis gains credibility without appealing to data beyond the current inventory. The supplement accompanying the submission provides the full matrix, feature-block map, item annotations, anchor manifests, scripts, matched-set manifest, quasiswap draws, and derived robustness summaries so that readers can inspect which coding decisions do and do not move the interface position.

A third implication concerns evidence beyond the type-level matrix. Token-level evidence, where available, should be used as a diagnostic of boundary dispersion rather than as a route to a type-level decision. The lexeme can be treated as a distribution over constructions and modification profiles, with predeclared dispersion summaries compared to the anchors. On a profile-based view, a boundary item is expected to show broader, more heterogeneous contextual support than clear-category anchors. Independent acceptability judgments offer a complementary test: if distance-to-boundary predicts judgment variance in contexts that differentiate pronouns from determinatives, that would support the interpretation that stable diagnostic uncertainty reflects proximity to a discrete threshold rather than inherent category fuzziness.

These implications remain within English and within the existing theoretical commitments, but the logic transfers. Field linguists documenting boundary phenomena in understudied languages may not need elaborate statistical machinery at the first stage. The core practice is still portable: document the full range of conflicting properties, compare explicitly to clear anchors, and acknowledge boundary status in reference materials rather than forcing binary decisions. The broader payoff of the workflow is that it makes difficult category edges inspectable without pretending that every hard case can be made decisive.

# Conclusion

Small-$`n`$ grammatical boundary phenomena need measurement procedures that distinguish unstable diagnostic noise from stable interface placement. This paper develops such a procedure and demonstrates it with English reciprocals. Starting from a 155-property *CGEL*-informed profile of pronouns and determinatives, the analysis asks whether *each other* and *one another* keep returning to the same region of grammatical space under constrained randomization, specification-curve analysis, comparator-set rotation, predictive blending, and anchor calibration.

They do. Across the analyses applied above, reciprocals occupy the interface between pronouns and compound determinatives. They show mixed neighbours, stable distance contrasts, near-parity blend weights, and calibrated uncertainty in supervised models, while morphology pulls them toward compound determinatives and semantics pulls them toward pronouns. This stability is informative because the pattern is not expected from arbitrary coding noise or an uninformative pipeline: clear anchors remain recoverable, and the same diagnostics localize uncertainty to the difficult items.

The result is deliberately narrower than a recategorization. The evidence is internal robustness on one hand-coded measurement model, not independent convergence across datasets. The uncertainty is epistemic; the measurements locate an interface zone without showing that the underlying categories are themselves vague. If categories are treated as projectible property clusters, that pattern is meaningful because partial profiles support projection to further properties. Clear pronouns and clear compound determinatives do that here; reciprocals are revealing because those projections conflict in stable, structured ways.

The broader payoff is a quantitative-linguistics workflow for hard category edges: build comprehensive property profiles, define distance contrasts, compare key summaries to constrained reference distributions, vary plausible specifications, rotate comparator sets, calibrate against clear anchors, and report effect distributions rather than only tail areas. These steps do not make hard cases easy, and they do not substitute for new measurements or external evidence. They make hard cases harder to misdescribe.

# Acknowledgments

None.

# Funding

No funding was obtained for the reported work.

# Declaration of Interest Statement

The author reports there are no competing interests to declare.

# Declaration of Generative AI Use

During revision and submission-package preparation, the author used OpenAI Codex (GPT-5, accessed in June 2026 through a local Codex CLI environment and the OpenAI API). It was used to suggest line edits, check consistency with the journal instructions and the author’s house style, assist with LaTeX build and log troubleshooting, prepare submission-package checklists, and draft possible revision and administrative wording. The reason for use was editorial and procedural assistance: to improve clarity, consistency, formatting compliance, and packaging accuracy. The author reviewed, revised, and approved all AI-assisted output and takes full responsibility for the final text, analyses, and conclusions.

# Data Availability Statement

The data matrix, feature-block mapping, anchor manifests, analysis scripts, generated figures, and derived robustness summaries are supplied as supplementary material.

<span class="smallcaps">References</span>

<div id="refs" class="references csl-bib-body hanging-indent">

<div id="ref-croft2001radical" class="csl-entry">

Croft, William A. 2001. *Radical Construction Grammar: Syntactic Theory in Typological Perspective*. Oxford University Press.

</div>

<div id="ref-gelman2014types" class="csl-entry">

Gelman, Andrew, and John Carlin. 2014. “Beyond Power Calculations: Assessing Type S (Sign) and Type M (Magnitude) Errors.” *Perspectives on Psychological Science* 9 (6): 641–51. <https://doi.org/10.1177/1745691614551642>.

</div>

<div id="ref-huddleston2002" class="csl-entry">

Huddleston, Rodney, and Geoffrey K. Pullum. 2002. *The Cambridge Grammar of the English Language*. Cambridge University Press. <https://doi.org/10.1017/9781316423530>.

</div>

<div id="ref-miklos2004randomization" class="csl-entry">

Miklós, István, and János Podani. 2004. “Randomization of Presence–Absence Matrices: Comments and New Algorithms.” *Ecology* 85 (1): 86–92. <https://doi.org/10.1890/03-0101>.

</div>

<div id="ref-miller2021" class="csl-entry">

Miller, J. T. M. 2021. “Words, Species, and Kinds.” *Metaphysics* 4 (1): 18–31. <https://doi.org/10.5334/met.70>.

</div>

<div id="ref-niculescu2005predicting" class="csl-entry">

Niculescu-Mizil, Alexandru, and Rich Caruana. 2005. “Predicting Good Probabilities with Supervised Learning.” *Proceedings of the 22nd International Conference on Machine Learning (ICML)*, 625–32. <https://doi.org/10.1145/1102351.1102430>.

</div>

<div id="ref-Payne2007" class="csl-entry">

Payne, John, Rodney Huddleston, and Geoffrey K. Pullum. 2007. “Fusion of Functions: The Syntax of *Once*, *Twice* and *Thrice*.” *Journal of Linguistics* 43 (3): 565–603. <https://doi.org/10.1017/S002222670700477X>.

</div>

<div id="ref-reynolds2021" class="csl-entry">

“Quantifying the Differences Between Lexical Categories: The Case of Pronouns and Determinatives in English.” 2021. *Cadernos de Linguı́stica* 2 (3): e399. <https://doi.org/10.25189/2675-4916.2021.v2.n3.id399>.

</div>

<div id="ref-simonsohn2020specification" class="csl-entry">

Simonsohn, Uri, Joseph P. Simmons, and Leif D. Nelson. 2020. “Specification Curve Analysis.” *Nature Human Behaviour* 4 (11): 1208–14. <https://doi.org/10.1038/s41562-020-0912-z>.

</div>

<div id="ref-steegen2016increasing" class="csl-entry">

Steegen, Sara, Francis Tuerlinckx, Andrew Gelman, and Wolf Vanpaemel. 2016. “Increasing Transparency Through a Multiverse Analysis.” *Perspectives on Psychological Science* 11 (5): 702–12. <https://doi.org/10.1177/1745691616658637>.

</div>

</div>

[^1]: Abbreviations used below are as follows: *CGEL* = *The Cambridge Grammar of the English Language*; MCA = Multiple Correspondence Analysis; IDF = inverse document frequency; $`k`$-NN = $`k`$-nearest neighbours; PCoA = Principal Coordinates Analysis; PPC = posterior predictive check; PSIS-LOO = Pareto-smoothed importance-sampling leave-one-out; and Type S / Type M = sign / magnitude errors.

[^2]: Implementation in `03_matched_set_robustness.R`; reference draws saved as CSV/RDS for reproducibility.

[^3]: Implementation: ; the specific canonical items are listed in .

[^4]: Concretely, the category profiles are fit on conservative clear-anchor sets. For each feature, the pronoun and compound-determinative anchor sets provide smoothed Bernoulli rates. For a given weight $`w`$, the blend probability is $`w p_{\text{pron}} + (1-w) p_{\text{det}}`$, and the predictive score for a reciprocal’s 155-bit feature vector is its log loss under that blended profile. $`\hat w`$ is the minimizer. Implementation in .

[^5]: Concretely, for feature $`j`$ on item $`i`$, $`y_{ij}\sim\mathrm{Bernoulli}(\pi_{ij})`$ with $`\mathrm{logit}\,\pi_{ij}=\alpha_j+\beta_j\mathbf{1}\{c_i=\text{pronoun}\}`$ and ridge regularization on $`\beta_j`$; draws are parametric bootstrap replicates (posterior draws if a Bayesian fit is used). Reciprocals are held out wherever predictions for them are reported.

[^6]: For the reciprocals, the classifier assigns near-chance pronoun probabilities (0.485 for *each other*, 0.467 for *one another*); masked predictive log-likelihood is identical under either labelling ($`-54.240`$), and per-item cross-entropy is $`0.371`$ versus a chance baseline $`\ln 2 \approx 0.693`$.

[^7]: This likely reflects pronouns’ tendency to inflect for case, which reciprocals resist.
