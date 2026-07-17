---
title: "Difference-in-differences for corpus linguistics: Causal inference, corpus composition, and linguistic change after shocks"
author: "Brett Reynolds"
year: "2026"
status: "Preprint"
canonical_url: "https://lingbuzz.net/lingbuzz/010080"
website_url: "https://brettreynolds.ca/papers/difference-in-differences-for-corpus-linguistics/"
markdown_url: "https://brettreynolds.ca/papers/difference-in-differences-for-corpus-linguistics/paper.md"
version: "author-manuscript mirror"
version_date: "2026-06-20"
keywords: ["difference-in-differences", "corpus linguistics", "causal inference", "corpus composition", "linguistic change", "morphology"]
---
# Difference-in-differences for corpus linguistics: Causal inference, corpus composition, and linguistic change after shocks

**Author-manuscript mirror.** This Markdown file is provided for accessibility, search, and machine readability. The canonical public record is linked in the metadata above.

## Abstract
Difference-in-differences (DiD) is built for counterfactual claims about change after shocks, but a corpus frequency isn’t the estimand itself. This paper translates DiD into corpus terms by treating the expected corpus frequency as a population rate plus composition-and-measurement bias, with realized proportions adding sampling noise. A causal reading requires separating the target population, corpus composition, measurement procedure, identifying unit, and dependence unit before estimation. Parallel trends have to hold twice over, in the underlying rate and in the corpus filter; diagnostics can disqualify or bound this claim, not confirm it. The paper gives a reporting discipline and pre-specified decision ladder that routes results to a bounded estimate, descriptive reading, shared wave, or not identified. Simulations map when the ladder succeeds and fails. Feminization of profession nouns under francophone language policy is used as a stress test, not an empirical finding.


**Keywords:** difference-in-differences; corpus linguistics; causal inference; corpus composition; linguistic change

# The problem

Something shifts, speakers of another language arrive in numbers, a new medium spreads, a border is redrawn, a government issues a decree, and a form that was rare before turns common after. Whether the shock caused the change is a fair question, and corpus linguistics is well equipped to ask it: the before and the after are measurable, and the field has long studied how change propagates (Weinreich et al. 1968; Tagliamonte and D’Arcy 2007).

The causal reading still enters easily, often through a verb, usage that “responds to” a reform rather than an argued claim. Corpus work on prescription has long felt this pull: confronting normative dictates with usage, it tends to find the causal link assumed rather than demonstrated, from relativizer choice in edited English prose (Hinrichs et al. 2015) to five centuries of French injunction set against the record of speech (Poplack and Dion 2009).

One robustness check is grammatical: delete the causal verb and see what claim is left. A rise after a shock is a correlation in time; what turns it into a causal one is a discipline the corpus makes harder, because a corpus adds confounds of its own to a plain before-and-after comparison.

In econometrics, the standard repair is difference-in-differences (DiD): set the treated series against a comparison series the shock left untouched, and read the effect off the change in their gap. Causal inference from text is itself an active field (Keith et al. 2020; Grimmer et al. 2022; Egami et al. 2022). DiD is still rarely the default for tracking change in a corpus. That work has mostly handled text as a treatment, outcome, or confounder in a cross-section; less settled is what DiD’s own assumptions, parallel trends and no interference, become for a diachronic corpus frequency.

A corpus frequency is a constructed aggregate, built from texts by choices about what to include, count, code, and weight. A corpus isn’t simply a sample of a population’s usage; it’s a sample of texts, assembled by editors and archivists with shifting priorities (Biber 1993), and its balance and representativeness are approximations rather than guarantees (McEnery and Hardie 2012).

Tracking change compounds this: matched diachronic corpora need to keep a sampling frame comparable while the genres inside it drift (Leech et al. 2009). So a corpus frequency carries two things at once, what the target population did and what the corpus filter contributed. The DiD machinery is sound; it needs to be told which of the two it’s identifying.

The contribution is a discipline for claiming with DiD, not a tutorial on running it. A before-and-after corpus contrast supports a causal reading only after the target population, corpus composition, measurement procedure, treatment unit, and dependence unit have been pulled apart. Conflate any two and the apparent effect can be an artifact of the corpus, not a fact about the language.

This discipline joins the recent turn in corpus linguistics toward reproducibility, replicability, and robustness (Schweinberger and Haugh 2025; Flanagan 2025), and adds a prior causal layer. That programme asks whether a descriptive estimate holds up under reanalysis, resampling, and analytic choice (Egbert et al. 2025; Sönning 2024); the question here is whether a before-and-after contrast licenses a causal reading at all. A result can be perfectly reproducible and still identify nothing.

Seven questions drive the paper: what the shock is; at what unit treatment varies; which population rate is the target; what outcome measures it; what comparison makes the counterfactual plausible; what corpus-specific threat could counterfeit the effect; and what diagnostic would expose it.

The running case is the feminization of profession nouns under francophone language policy (Fujimura 2005; Burnett and Bonami 2019). It’s a teaching vehicle, not a finding: the aim is the method, and the case is built so that its verdict is sometimes that the effect can’t be identified. A corpus DiD is worth most when it disciplines a causal claim downward, and that’s the argument the rest of the paper makes.

# The DiD estimand in corpus terms

DiD asks one question: across a shock, did the treated series and a comparison series no shock touched change differently? Take the treated variety’s before-to-after change in the outcome, subtract the control’s, and under a single assumption (that absent the shock the two would have moved in parallel) the remainder estimates the average treatment effect on the treated (ATT) (Roth et al. 2023).

Say feminine marking rose ten points in the treated variety across the window and four in the comparison: DiD reads the policy effect as the six-point excess, on the assumption that without the policy the treated variety would have risen by the same four. Everything corpus-specific lives in what fills “outcome” and “series”.

That last clause is where the textbook panel idealization, the clean grid of the same units measured period after period, breaks down for a corpus as for any constructed aggregate. What a finite corpus yields is a realized sample proportion $`\hat f`$; the quantity of interest, the estimand, is the latent rate $`\pi`$ at which a specified population uses the form in a specified context, for the running case the share of profession- and title-noun tokens with a female referent that take feminine marking, in a named text population.

Let $`f`$ be the expected corpus frequency: the proportion induced by the corpus and coding process before sampling noise. Then $`\hat f = f + \epsilon`$ and $`f = \pi + b`$, with $`b`$ collecting composition (whose texts, which genres, what topics) and measurement (how the form was coded or transcribed).

Feminine marking can climb in the corpus series with no change in anyone’s usage at all: a paper that runs more profiles of women in the professions, or a transcription service that starts spelling out feminine titles it used to abbreviate, moves $`f`$ while $`\pi`$ holds still. Read $`b`$ as the gap itself, $`b = f - \pi`$: not a random error that more data averages away, but whatever composition and measurement added, fixed once the texts and the coding are.

Collecting more tokens shrinks $`\epsilon`$ around $`f`$ without touching $`b`$; the cell-level uncertainty of Section <a href="#sec:modern" data-reference-type="ref" data-reference="sec:modern">7</a> stays separate from the corpus filter. The outcome estimated from the page isn’t the quantity the claim is about.

The residual isn’t empty. Stratify the texts by the margins composition moves on (outlet, profession, topic). Within each stratum $`s`$, let $`\pi_s`$ be the true rate, $`r_s`$ the rate the corpus records, $`q_s`$ the corpus’s share of $`s`$, and $`p_s`$ the target population’s. Then $`f = \sum_s q_s r_s`$ and $`\pi = \sum_s p_s \pi_s`$, so

``` math
b = \underbrace{\sum_s (q_s - p_s)\,\pi_s}_{\text{composition}} + \underbrace{\sum_s q_s\,(r_s - \pi_s)}_{\text{measurement}}.
```

Reweighting sets $`q_s`$ to $`p_s`$ on the strata it can see, zeroing the first term; the second survives. The part of it the strata are too coarse to resolve is the hidden drift of Section <a href="#sec:worked" data-reference-type="ref" data-reference="sec:worked">8</a>, and the simulations are built on this split.

Differencing is linear, so the DiD of the expected corpus frequency separates into the DiD of $`\pi`$ and that of $`b`$, $`\mathrm{DiD}(f) = \mathrm{DiD}(\pi) + \mathrm{DiD}(b)`$. The first term, under parallel trends in the rate, is the target effect. For a usage-rate estimand, the second is contamination, and it vanishes only under a second parallel-trends assumption, $`\mathrm{DiD}(b) = 0`$: that composition and measurement would have drifted alike in both series.

A corpus design needs parallel trends twice over, in $`\pi`$ and in $`b`$, where the textbook case quietly assumes the second away. Picture one variety’s archive getting re-digitized and re-tagged halfway through the window while the other’s is left alone: the two corpora’s coding has now drifted apart even if actual usage tracked perfectly, and that drift would enter the estimate as if it were the policy’s effect.

Both are claims about an unobserved counterfactual: pre-treatment comparisons can discredit them but can’t verify them. And since only $`\hat f`$, an estimate of $`f`$, is observed, a flat pre-period in the observed series is consistent with non-parallel trends in $`\pi`$ and in $`b`$ that cancel, so the pre-period tests the two assumptions jointly, never apart.

Neither half is optional, and the temptations run both ways. Once the composition term is on the table it’s easy to treat it as the whole problem and forget the ordinary assumption about the rate; it’s equally easy to wave at adjusting for composition and assume the rate takes care of itself. Both shortcuts fail. The observed contrast recovers the effect on $`\pi`$ only when the rate would have moved in parallel *and* the bias would have moved in parallel.

One refinement decides how the corpus-filter term is handled, turning on which effect is wanted. The filter reaches the observed contrast two ways: a non-policy drift, which the second assumption requires to be parallel, and a policy-induced shift, the policy changing what gets written rather than how a given referent is marked.

For an effect on the usage rate $`\pi`$, that second shift is nuisance as well, even though the policy caused it: a topic or profession mix that moved gets reweighted to a fixed mix, isolating the marking rate. The other estimand, sometimes the one actually wanted, is the policy’s total effect on the observed output. It keeps the writing that the policy moved, so that same shift is part of the answer, and reweighting it away would subtract a piece.

The two estimands differ exactly by the policy-to-composition path, and a design that doesn’t say which it means can defend neither. The one margin neither estimand touches is the outcome margin itself: the realization strategy of Section <a href="#sec:outcomes" data-reference-type="ref" data-reference="sec:outcomes">4</a>. Condition there and the effect itself is removed.

Naming the estimand forces apart five units a corpus invites running together. The linguistic unit is the variable whose rate is at issue (feminine marking of a profession noun for a female referent). The measurement unit is what gets counted to estimate that rate (eligible tokens, or documents). The aggregation unit is the cell those counts are summed into before estimation (an outlet-month, a title-variety-year), which sets the weights and denominators and can quietly change the estimand.

The identifying unit is where the treatment varies (the variety or polity). The dependence unit is the level at which residuals correlate and inference is clustered, here the variety again; with only a few varieties the usual large-sample standard errors don’t hold, which is the inference problem Section <a href="#sec:modern" data-reference-type="ref" data-reference="sec:modern">7</a> takes up.

Merging them is dangerous because the five sit at wildly different scales. A corpus offers millions of measurement units and, often, two or three identifying units; the latter govern how much can be concluded. Counting tokens as though they were the sample size manufactures a precision the design doesn’t have (Bertrand et al. 2004): it’s like claiming a hairline margin of error on a two-person poll because each person answered a thousand questions.

Here, the target is the effect on $`\pi`$; the price is parallel trends in both $`\pi`$ and $`b`$. The diagnostics of Section <a href="#sec:diagnostics" data-reference-type="ref" data-reference="sec:diagnostics">6</a> can falsify that assumption or bound how far it may fail, never confirm it, and the worked example of Section <a href="#sec:worked" data-reference-type="ref" data-reference="sec:worked">8</a> is where the discipline is applied end to end, each rung declaring its estimand in a ledger (Table <a href="#tab:ledger" data-reference-type="ref" data-reference="tab:ledger">2</a>).

# What counts as treatment in language data

In a policy evaluation the treatment is usually a known act on a known date: a law takes effect, a price changes, a program opens. Language data rarely offers that. A change in usage may be pushed by a circular, a dictionary, an administrative endorsement, a first enforcement, a media house revising its style sheet, or a social movement that made all of these possible. Which act counts as the treatment isn’t given by the corpus; it fixes the estimand.

The shock need not be a policy. It can be a new medium with constraints of its own, a contact or demographic event, a censorship regime imposed or lifted, or a non-linguistic event that drags vocabulary behind it. These can be cleaner than decrees because their timing is less likely to be chosen by the speech community. The policy case this paper uses is the demanding one: a decree’s timing may be bound up with the trend it’s meant to explain.

The feminization case shows the ambiguity. Candidate treatments include an endorsement, a feminized-titles dictionary (Moreau 1991), a circular, and the date editors actually began applying the forms. France’s 1986 circular (République française 1986) urged feminine titles and went largely unenforced, by the government’s own later admission, until a second circular in 1998 (République française 1998; Burnett and Bonami 2019). Those two acts share their text and differ in force, which makes 1986 useful as a near-null policy: a case that should show little or nothing, not a failed treatment.

Official dates can also lag the changes they name. An endorsement often ratifies a shift already under way rather than starting it, a question of actuation (Burnett and Bonami 2019). Feminization is a socially structured diffusion, an S-curve spreading token by token and register by register (Weinreich et al. 1968; Tagliamonte and D’Arcy 2007).

Two varieties can both be rising and still violate parallel trends if one is in the steep middle of its curve and the other is leveling off. A shock identifies an effect only when it appears as a level shift or acceleration on top of comparable untreated trajectories; otherwise “not identified” is a property of the design, not a disappointment after estimation.

Treatments in this domain are rarely binary either. Endorsements vary in scope and force, so two polities labelled treated may have received different doses. Where dose is measurable, intensity is more honest than an on-off indicator; where it isn’t, the binary coding is an assumption to report.

The boundary also leaks: a policy in one polity reaches readers in another through shared media and the channels opened by a common language. The first question of a corpus DiD is this: which act, at which date, with what force and reach, is being called the cause. The estimand, comparison, and diagnostics inherit that choice.

# Outcome construction

A corpus outcome is transparent when anyone could reproduce it from the same texts by a stated rule: a count over forms, a closed-set alternation, a tagged feature. It’s model-dependent when a classifier, parser, or embedding stands between the text and the number. Both are usable, but they fail differently.

A transparent count errs in what its rule misses; a model-dependent measurement adds the model’s own drift, which can move with the period or variety under study and so mimic the effect. The check is differential: a classifier or parser has to be evaluated by period and by variety, since an error rate that holds on average but shifts across the window is the measurement twin of a non-parallel trend.

Because the outcome is a proportion, measurement bias is level-dependent even at fixed error rates. It tracks $`\pi`$ itself, so a moving rate drags the filter through the measurement model. A classifier that mislabels one token in twenty both ways doesn’t add a flat five-point bias: a true rate of ten percent reads as fourteen, a true ninety as eighty-six, and a true fifty as fifty. The two parallel-trends assumptions are coupled in mechanism, not only in the data.

A second choice hides inside the first. Most variables of interest are realized in more than one way, and a single count silently treats those ways as exchangeable signs of one change. Feminine marking for a woman can surface as a distinct noun form (*autrice*), as feminine article or agreement on an otherwise invariant noun (*la ministre*), or as both. Pooling them assumes the realizations rise together; breaking the outcome out by strategy tests that assumption, especially because varieties favour different strategies (Dawes 2003).

The marker also needs its conditioning fixed. A feminine article counts as feminization only when the referent is independently known to be a woman, so the outcome definition carries that conditioning rather than assuming it. Agreement already at ceiling is noise, not outcome; the informative cases are the contested ones, such as feminine marking on default-masculine or epicene titles.

Breaking the outcome out by strategy diagnoses the pooling assumption without fully replacing it. Separate strategy-specific analyses show which realization moved, but they treat mutually exclusive choices as independent outcomes and discard substitution among them. The fuller treatment models realization as one categorical outcome, letting the strategies compete within one estimator, as Xu (2017) develops for categorical outcomes in regression discontinuity. This paper stops at decomposition: a joint categorical DiD is a natural next step, not a claim made here.

Finally, a proportion needs a denominator named as carefully as the numerator. Feminine-marked tokens can be counted against every profession noun, only female-referent tokens, or only title-address contexts. Weights can attach to tokens, documents, or title-variety cells, and the referent distribution may itself be moving. The numerator is visible. The denominator is where composition re-enters.

# Identification threats specific to corpora

The threats a corpus DiD faces are easiest to read off a small set of causal paths (Figure <a href="#fig:threat-dag" data-reference-type="ref" data-reference="fig:threat-dag">1</a>; read each arrow as “this directly affects that”). They fall into five families: composition, measurement, interference, aggregation, and selection into treatment timing. The first four are inflected, or created, by the corpus; the fifth is the ordinary confounding worry any DiD faces. Each is a way the observed contrast can be mistaken for the policy’s effect on the population rate.

<figure id="fig:threat-dag" data-latex-placement="t">

<figcaption>The causal paths a corpus DiD contends with: a threat map, not a graph that identifies the effect. Dashed nodes are unobserved. The heavier spine marks the target route from policy to population rate <span class="math inline"><em>π</em></span> to corpus frequency <span class="math inline"><em>f</em></span>; the other paths mark composition, measurement, interference, and ideology-driven timing threats. Parallel trends itself isn’t a path in a static graph.</figcaption>
</figure>

Composition splits in two. A policy can move the mix it’s measured against, the professions in the news or the topics in play, so part of composition lies on the path from treatment to $`f`$ (the edge $`T \to C`$). Whether to reweight it away depends on the estimand: for a usage-rate effect it counts as nuisance; for a total-output effect it belongs to the answer.

Non-policy composition drift, such as outlet entry, author turnover, or register mix, is a bias source either way. The two look alike in the data, so the margins to reweight have to be named before the estimate is seen.

Measurement is the second. What the corpus records isn’t the latent rate but a coding of it, and the coding can drift: a classifier whose error rate moves with the period, a transcription house style that adopts new forms on a date of its own. When it does, $`f`$ jumps while $`\pi`$ holds still. The instrument measuring the outcome has become a moving part (Keith et al. 2020).

Interference breaks the assumption that one variety’s treatment leaves the others untouched. Suisse romande shares wire services with France; the same dictionaries and style guides circulate across the francophonie; writers file across borders. A not-yet-treated control is then lightly dosed. Shared wire copy can be held aside and deduplicated; the other channels can’t, so the estimand has to name whether it seeks the policy’s direct effect net of diffusion or its total effect including it.

Aggregation is the easiest to overlook. The level at which counts are summed into observations (token, document, outlet-month, title-variety-year) fixes weights and denominators. A few prolific outlets or a burst of one topic can carry a token-level rate that a cell-level rate wouldn’t. The aggregation unit is a modelling choice with identifying consequences, not bookkeeping.

Selection into treatment timing is the deepest threat. A polity tends to legislate when its gender politics have already moved, and that same movement shifts usage, so adoption timing is correlated with the outcome’s trajectory. No estimator removes that fork; in a two-group design it’s observationally indistinguishable from a real effect.

That last threat is where the figure reaches its limit. A graph can inventory paths, but identification turns on a counterfactual trend: whether usage and the corpus filter would have moved in parallel absent the policy. The diagnostics, not the diagram, carry that weight.

# Diagnostics

A diagnostic here does two things and not a third. It can disqualify a causal reading, or bound how far the identifying assumption may bend before the result flips. It can’t confirm parallel trends, since the counterfactual it concerns is never observed. Diagnostics are pre-specified tests, not a checklist run after the estimate to bless it.

The discipline starts before any test, with the roles. Each textual feature should be assigned a job: does it measure the outcome, identify the referent that conditions the outcome, index composition, or sit downstream as part of the outcome itself? No feature can hold two of these jobs at once. Conditioning on a downstream realization strategy subtracts the effect; conditioning on a drifting measurement cue imports drift; and reweighting follows from the declared estimand.

| **Item** | **What to state** |
|:---|:---|
| Estimand | population usage rate, corpus-output effect, or design contrast |
| Treatment | act, date, force, timing theory, and expected sign |
| Target population | variety, register, period, conditioning context, and denominator |
| Composition margins | margins fixed, reweighted, left in the estimand, or unavailable |
| Measurement audit | coding, transcription, or classifier checks by period and series |
| Identifying unit | unit where treatment varies, such as polity, variety, outlet, or platform |
| Dependence unit | level for clustering, randomization, or uncertainty reporting |
| Interference check | shared source, wire copy, exposure, or diffusion diagnostic |
| Sensitivity benchmark | pre-specified plausible violation of parallel trends |
| Permitted verdict | bounded estimate, descriptive reading, shared wave, or not identified |

Minimum report for a corpus DiD. The point is to make the identifying claim auditable before the estimate is read. {#tab:reporting}

The first diagnostic family tests the pre-period. Event-study estimates against not-yet-treated comparisons (Sun and Abraham 2021; Borusyak et al. 2024) show whether the series moved together before the shock, but a flat pre-period only fails to discredit parallel trends (Roth et al. 2023). The sharper question is onset versus acceleration: does the marking rate change at the treatment date, or was the divergence already under way?

The second family breaks the design on purpose. A placebo date, a near-null policy used as a negative control, or a shuffled treatment label should return nothing. With a handful of identifying units, these permutations calibrate the size of contrast the procedure can manufacture; they aren’t a $`p`$-value from an assignment that was never random (Bertrand et al. 2004).

The third family withholds parts of the corpus. Leave-one-source-out re-estimation asks whether the effect lives in the whole series or in one outlet, author, region, wire feed, or burst of reprinted copy. An estimate carried by one source is idiosyncrasy or interference, not an effect.

The fourth family probes the corpus filter. Reweighting to a fixed composition removes a measured artifact on pre-committed margins; policy-moved mix is reweighted away for a usage effect and kept for a total-output effect. Re-running the analysis strategy by strategy is the parallel outcome check: if low-cost agreement and high-cost derivation move differently, the assumption that they’re exchangeable signs of one change has failed.

The last family quantifies fragility. Rather than assert parallel trends, sensitivity analysis asks how large a violation would have to be to overturn the result and compares that breakdown value to a pre-specified benchmark, such as the largest trend swing in an untreated stretch or untreated variety (Rambachan and Roth 2023). A result that survives only a smaller violation hasn’t earned its causal claim; one that survives a larger violation earns a bounded claim, reported as a sensitivity interval, not a point.

The benchmark has a blind spot: it sees only violations that leave a footprint in the windows used to build it. Drift confined to the treated post-period can clear the bar untouched, which is the failure the simulations of Section <a href="#sec:worked" data-reference-type="ref" data-reference="sec:worked">8</a> quantify. The resulting claim is bounded against named and benchmarked confounds, not against every possible one.

The checks feed one rule. A date-aligned divergence that survives composition, interference, onset, and sensitivity checks licenses a bounded estimate, scoped to the register measured. A divergence leaning on an ambiguous check licenses a descriptive reading. Calendar-time co-movement with no date-aligned divergence is a shared wave. A pre-treatment divergence, an effect carried by shared-source material, unanswerable selection into timing, or a breakdown value below a plausible confound forces not identified. The ladder’s point is that a downgrade is a result: a corpus DiD succeeds when it returns the right verdict, not when it returns an effect.

# Estimation and inference choices

An estimator identifies nothing on its own; the design does. The choices in this section can protect or squander what the design buys, but they can’t rescue a contrast whose counterfactual is implausible.

The default estimator is a trap. A pooled two-way fixed-effects regression looks natural, but under staggered adoption with heterogeneous effects its implied weights can turn negative, so already-treated units serve as controls for later ones and can push the overall estimate the wrong way (Goodman-Bacon 2021; <span class="nocase">de Chaisemartin and D’Haultfœuille</span> 2020). Group-time and event-study estimators repair that weighting problem (Callaway and Sant’Anna 2021; Sun and Abraham 2021; Borusyak et al. 2024). They don’t repair selection into timing: a heterogeneity-robust estimate of an endogenously timed treatment is still a clean number for the wrong quantity.

Scale is substantive too. The additive split $`f = \pi + b`$ buys clean linearity, but parallel trends isn’t transform-invariant: an assumption that holds on the probability scale can fail on the log-odds scale, especially when baseline rates differ (Roth and Sant’Anna 2023). A log-odds model may be the more defensible estimator for cell rates, and beta-binomial models may handle overdispersion, but the effect should be reported on the scale on which the claim is made.

Inference is where the few-units problem bites. The binding sample size is the number of identifying units, not the millions of tokens, and with four or five polities ordinary cluster-robust intervals are badly anti-conservative (Bertrand et al. 2004). The usual repairs are the wild cluster bootstrap (Cameron et al. 2008), resampling whole varieties, and randomization inference for few treated clusters (MacKinnon and Webb 2020).

Neither repair is a guarantee: the bootstrap can still under-cover with very few or unbalanced clusters, and randomization inference needs a credible assignment model that politically chosen adoption rarely supplies. Where their assumptions can’t be made explicit, the absence of a clean interval is part of the result.

The unit of analysis should be pre-specified cells, such as outlet-period or title-strategy cells, not raw tokens treated as independent draws. This choice is the aggregation choice of Section <a href="#sec:estimand" data-reference-type="ref" data-reference="sec:estimand">2</a> seen from the inference side.

This raises a modelling objection: why difference at all, rather than model the whole series with latent rates, outlet and title effects, composition terms, and a smooth calendar trend? Differencing clears time-invariant confounds but leaves trend confounding exactly where a model would: selection into treatment timing rides the trend, and no estimator removes it. DiD’s advantage is a named and conventional assumption. Parallel trends sits in plain view, and a flat pre-period is its agreed probe; a multilevel model can bury the same assumption in functional form and random-effects structure.

Partial pooling is still useful for sparse outlet and title cells within each variety; it’s a complement for estimation, not a substitute for the design’s identification. None of these choices identifies anything. They belong after the estimand and diagnostics, and before the worked example puts them to work.

# Worked example

The worked example builds the design in rungs rather than pretending the empirical study has already been run. The phenomenon is the feminization of profession nouns under francophone language policy. Each rung fixes its estimand first (Table <a href="#tab:ledger" data-reference-type="ref" data-reference="tab:ledger">2</a>) and then asks what verdict the diagnostics would permit.

|  | **Rung 1** | **Rung 2** | **Rung 3** |
|:---|:---|:---|:---|
| Target | usage rate $`\pi`$, edited written standard | usage rate $`\pi`$, edited written standard | language-internal vs polity-driven contrast |
| Treatment | Swiss 1991 endorsement | staggered endorsements, 1979–1998 | no within-Switzerland untreated region |
| Comparison | France, with 1986 near-null | not-yet-treated polities | Swiss language regions |
| Outcome | feminine marking for female-referent titles/professions | same, strategy-decomposed | language-specific marking in one institution |
| Identifying unit | variety | polity | language region |
| Dependence unit | variety | polity | region |
| Effect | direct or total, declared | group-time ATTs | measurement/design probe |

Estimand ledger for the worked example. Rung 3 is a design contrast, not a clean two-group DiD. {#tab:ledger}

| **Design piece** | **Candidate data** | **Outcome cue** | **Main failure mode** |
|:---|:---|:---|:---|
| Swiss-France press | edited newspapers, with shared wire separated | female-referent title/profession terms | AFP/shared-media interference |
| Francophone staggered design | Quebec, Switzerland, Belgium, France press | strategy-agnostic marking plus strategy split | timing selected on gender-ideology wave |
| Swiss parliamentary contrast | Federal Assembly *Bulletin officiel* | parliamentary address/title forms | transcription convention and official-record normalization |
| Triangulation only | spoken or lightly edited corpora where conditioning is reliable | same cue where recoverable | referent conditioning and transcription reliability |

Feasibility anchors for the worked example. These are candidate data homes and diagnostics, not completed analyses. {#tab:datahomes}

## Rung 1: the clean contrast and the spillover problem

In the first rung, the clean contrast pairs varieties that share a language and differ in policy. French-speaking Switzerland endorsed feminizing profession nouns through the Federal Chancellery’s 1991 report on non-sexist administrative language (Chancellerie fédérale suisse 1991) and Moreau (1991)’s professions dictionary. France is the comparison, but not a pristine control. Its 1986 Fabius circular urged the same forms yet went largely unenforced until the 1998 Jospin circular (Burnett and Bonami 2019); I treat 1986 as a near-null policy, take 1991–1997 as the Swiss-treated/French-not-yet window, and hold 1998 as a follow-up event.

The outcome is the share of profession and title nouns that take feminine marking for a female referent, counted strategy-agnostically at first and then by strategy. The split matters because Switzerland, France, Quebec, and Belgium favour different forms (Dawes 2003): a feminine article on an epicene noun (*la ministre*) and a distinct feminine noun (*autrice*) aren’t automatically exchangeable.

Female reference can often be recovered from independent cues such as *Madame* with a title, but that convenience narrows the estimand to formal address contexts and imports any drift in the cue into the measurement term.

Because the corpora in this rung are edited newspapers, the target is the edited written standard, not spontaneous usage. Sparse title/outlet cells can be stabilized with partial pooling inside each variety, but the causal contrast still has only two identifying units. The first diagnostic is onset: Suisse romande should accelerate away from France after 1991 while the two ran together before. If the gap was already opening, 1991 is a waypoint on a curve, not an onset; if both series rise together in calendar time, the result is a shared francophone wave.

Interference is the rung’s distinctive threat. Suisse romande reads French media, and both series can carry shared wire copy. The report names the estimand as direct or total, reports how much shared material each series carries, holds shared-wire material aside for a separate estimate, and deduplicates reprints. A jump that lives only in shared material is diffusion, not a Swiss policy effect. Placebo dates, the 1986 near-null policy, and treatment-label permutations calibrate the procedure, but with two varieties they’re falsification checks, not powered inference.

Before estimation, the permitted verdict is fixed. A 1991 divergence that survives onset, composition, shared-source, and sensitivity checks licenses a bounded estimate for the edited written standard. Ambiguous checks license a descriptive reading. Calendar-time co-movement is a shared wave. Pre-1991 divergence, shared-source dependence, or a plausible trend violation that overturns the result forces not identified.

## Rung 2: more polities, less exogeneity

Adding Quebec and Belgium gives staggered policy dates: Quebec in 1979, Switzerland in 1991, Belgium in 1993, and France in 1998. The Quebec and Belgium dates are grounded in primary instruments (Office de la langue française 1979; Communauté française de Belgique 1993). The design now calls for group-time effects, read against not-yet-treated varieties (Callaway and Sant’Anna 2021).

The usual warning still applies: pooled two-way fixed effects can use already-treated units as bad controls under heterogeneous effects (Goodman-Bacon 2021; <span class="nocase">de Chaisemartin and D’Haultfœuille</span> 2020). Event-study and imputation estimators address that weighting contamination (Sun and Abraham 2021; Borusyak et al. 2024).

More polities don’t automatically mean more identification. France, last to adopt, can help for Switzerland and Belgium, but its own 1998 change has no not-yet-treated peer inside the four; Quebec, treated since 1979, is no clean control for most later windows.

Selection into timing is the deeper problem: each polity adopts when its gender politics have already moved, and that movement shifts usage too. Sensitivity analysis can bound a trends violation (Rambachan and Roth 2023), but it can’t manufacture exogeneity.

What staggering buys is a policy-time versus calendar-time test. If policies move usage, jumps should align with each polity’s date; if a shared wave moves usage, they should align in calendar time. France’s 1986 near-null policy is the internal placebo: an effect there discredits the pipeline. This catches synchronized waves, not heterogeneous local waves that each drive their own adoption date, so the honest modal verdict for this rung is often descriptive or not identified.

## What the simulations show, and where they break

A corpus never reveals the population rate, so the one place to check the ladder against truth is a simulation whose truth is set. On controlled data, reweighting recovers the true effect when a composition shift rides an observed stratum: a naive contrast of $`+0.13`$ on a pure composition artifact returns to zero once the measured mix is held fixed, while drift outside the strata leaves both the naive and reweighted estimate near $`+0.15`$ (`rung1-recovery-sim.py`). That’s a consistency check, not evidence the diagnostics have power on messy data.

| Scenario | Threat dialed up | Misrouting |
|:---|:---|---:|
| clean effect | none | 0% FN |
| measured composition artifact | composition, inside the strata | 0% FP |
| hidden drift, share $`0.3`$ | composition, outside the strata | 56% FP |
| hidden drift, share $`0.6`$ | the same | 99% FP |
| hidden drift, share $`0.9`$ | the same | 100% FP |
| small effect, sparse ($`n=40`$) | thin cells | 94% FN |
| spillover, exposure measured | interference | 0% FP |
| spillover, exposure noisy | interference, mismeasured | 8% FP |
| selection $`\to`$ wave (two-group) | timing on its own trajectory | 100% FP |

Operating characteristics of the decision ladder on the rung-1 design, four hundred replications per scenario (`rung-failure-map.py`, seeded; mid-range rates carry a couple of points of Monte Carlo error). FP is a false effect claim, FN a missed real effect. {#tab:failuremap}

Table <a href="#tab:failuremap" data-reference-type="ref" data-reference="tab:failuremap">4</a> is the point. Measured composition is reweighted away, but drift outside the reweighting strata is invisible, and the false-positive rate climbs from $`56\%`$ at a hidden share of $`0.3`$ to near-certainty by $`0.6`$. Thin cells destroy power: a real effect in a sparse variety is missed in $`94`$ runs of a hundred.

Interference is caught when exposure is measured well; noisy exposure leaks an $`8\%`$ false-positive rate. Selection into timing is worst: in a two-group design, a control on its own trajectory is observationally identical to a real effect. The detailed gate logic lives in the simulation README; the article needs the operating characteristics and the lesson they teach.

## Rung 3: one institution, moving measurement

The third rung changes the comparison axis. Trilingual Switzerland holds the polity and federal policy fixed while language varies, so a contrast across the French-, German-, and Italian-speaking regions asks whether change is language-internal or polity-driven. Because the policy reaches every region, none is an untreated control: the result is a design contrast, not a clean policy DiD.

For rung 3, the Federal Assembly’s *Bulletin officiel* is the natural home: one institution publishing in all three languages, with the Swiss Parliament reporting Official Bulletin coverage from 1891 and all interventions in both chambers from 1971 (Schweizer Parlament, n.d.). That puts the 1991 window inside the usable record, but the register carries the rung’s lesson. The official record is normalized transcription, not speech.

If the transcription service adopts feminine forms on some date, the recorded frequency jumps with no change in what members said; the measurement link from $`\pi`$ to corpus $`f`$ becomes the dominant path. The diagnostic is to date the transcription convention independently and treat its change as a rival event, while also tracking speaker-pool drift as the share of women members changes.

# Conclusion

The discipline this paper asks for comes down to one refusal: not to read a corpus frequency as a population rate. Once that line holds, the rest follows. The observed contrast is the effect on the rate plus whatever the corpus filter contributed, so a causal claim needs the target population, composition, measurement, and units of variation and inference pulled apart, with parallel trends asked of the rate and the filter both.

The payoff isn’t usually a clean effect. A corpus DiD is at its best when it pushes a causal claim downward, turning an apparent effect into a shared wave, a measurement shift, a composition artifact, or a verdict of not identified. Each is an answer worth reporting. The hard part is keeping that downgrade tied to evidence: a missed effect caused by thin data isn’t a methodological success, which is why the failure map counts false negatives as carefully as false positives.

Before-and-after corpus data can carry a causal claim, but only under conditions worth stating plainly. The treatment has to be a named act at a named date; the comparison has to make a counterfactual plausible; composition and measurement have to be held fixed on pre-committed margins or shown not to move; and the result has to survive a sensitivity bound larger than the setting’s plausible confounds. Where those hold, the claim is a bounded estimate scoped to the register measured, not a fact about the language at large.

The feminization case carried these points without resting on any of them. The same apparatus travels to other shocks and other languages, as far as the corpora reach. When a corpus frequency shifts after a shock, the discipline turns the question from whether the line moved to what moved: the rate, the filter, the measurement, or only the warrant for the word *cause*.

# Data and code availability

The simulations of Section <a href="#sec:worked" data-reference-type="ref" data-reference="sec:worked">8</a> are reproduced by three short Python scripts (standard library only, fixed random seeds), provided as supplementary material. The reported numbers reproduce exactly from the seeded scripts: `rung-failure-map.py` (seed 7) generates Table <a href="#tab:failuremap" data-reference-type="ref" data-reference="tab:failuremap">4</a> and the operating-characteristic rates quoted in the text, `rung1-recovery-sim.py` (seed 2024) the reweighting-recovery estimates, and `rung1-ladder-sim.py` (seed 12345) the decision-ladder routing check. No human-subjects data is used, and the corpora named in the worked example are illustrative rather than analyzed.

<div id="refs" class="references csl-bib-body hanging-indent">

<div id="ref-BertrandDufloMullainathan2004" class="csl-entry">

Bertrand, Marianne, Esther Duflo, and Sendhil Mullainathan. 2004. “How Much Should We Trust Differences-in-Differences Estimates?” *The Quarterly Journal of Economics* 119 (1): 249–75. <https://doi.org/10.1162/003355304772839588>.

</div>

<div id="ref-biber1993" class="csl-entry">

Biber, Douglas. 1993. “Representativeness in Corpus Design.” *Literary and Linguistic Computing* 8 (4): 243–57.

</div>

<div id="ref-BorusyakJaravelSpiess2024" class="csl-entry">

Borusyak, Kirill, Xavier Jaravel, and Jann Spiess. 2024. “Revisiting Event-Study Designs: Robust and Efficient Estimation.” *Review of Economic Studies* 91 (6): 3253–85.

</div>

<div id="ref-BurnettBonami2019" class="csl-entry">

Burnett, Heather, and Olivier Bonami. 2019. “Linguistic Prescription, Ideological Structure, and the Actuation of Linguistic Changes: Grammatical Gender in French Parliamentary Debates.” *Language in Society* 48 (1): 65–93. <https://doi.org/10.1017/S0047404518001161>.

</div>

<div id="ref-CallawaySantAnna2021" class="csl-entry">

Callaway, Brantly, and Pedro H. C. Sant’Anna. 2021. “Difference-in-Differences with Multiple Time Periods.” *Journal of Econometrics* 225 (2): 200–230.

</div>

<div id="ref-CameronGelbachMiller2008" class="csl-entry">

Cameron, A. Colin, Jonah B. Gelbach, and Douglas L. Miller. 2008. “Bootstrap-Based Improvements for Inference with Clustered Errors.” *The Review of Economics and Statistics* 90 (3): 414–27. <https://doi.org/10.1162/rest.90.3.414>.

</div>

<div id="ref-chancellerie1991" class="csl-entry">

Chancellerie fédérale suisse. 1991. *La Formulation Non Sexiste Des Textes législatifs Et Administratifs*. Berne.

</div>

<div id="ref-belgique1993decret" class="csl-entry">

Communauté française de Belgique. 1993. *Décret Du 21 Juin 1993 Relatif <span class="nocase">à</span> La féminisation Des Noms de métier, Fonction, Grade Ou Titre*.

</div>

<div id="ref-Dawes2003" class="csl-entry">

Dawes, Elizabeth. 2003. “La féminisation Des Titres Et Fonctions Dans La Francophonie: De La Morphologie <span class="nocase">à</span> l’idéologie.” *Ethnologies* 25 (2): 195–213. <https://doi.org/10.7202/008054ar>.

</div>

<div id="ref-deChaisemartin2020" class="csl-entry">

<span class="nocase">de Chaisemartin, Clément, and Xavier D’Haultfœuille</span>. 2020. “Two-Way Fixed Effects Estimators with Heterogeneous Treatment Effects.” *American Economic Review* 110 (9): 2964–96. <https://doi.org/10.1257/aer.20181169>.

</div>

<div id="ref-egami2022texts" class="csl-entry">

Egami, Naoki, Christian J. Fong, Justin Grimmer, Margaret E. Roberts, and Brandon M. Stewart. 2022. “How to Make Causal Inferences Using Texts.” *Science Advances* 8 (42): eabg2652. <https://doi.org/10.1126/sciadv.abg2652>.

</div>

<div id="ref-EgbertBiberGrayLarsson2025" class="csl-entry">

Egbert, Jesse, Douglas Biber, Bethany Gray, and Tove Larsson. 2025. “Achieving Stability in Corpus-Based Analysis of Word Types.” *International Journal of Corpus Linguistics* 30 (2): 150–70. <https://doi.org/10.1075/ijcl.24109.egb>.

</div>

<div id="ref-Flanagan2025" class="csl-entry">

Flanagan, Joseph. 2025. “Reproducibility, Replicability, Robustness, and Generalizability in Corpus Linguistics.” *International Journal of Corpus Linguistics* 30 (2): 130–49. <https://doi.org/10.1075/ijcl.24113.fla>.

</div>

<div id="ref-Fujimura2005" class="csl-entry">

Fujimura, Itsuko. 2005. “La féminisation Des Noms de métiers Et Des Titres Dans La Presse Française (1988–2001).” *Mots. Les Langages Du Politique*, no. 78: 37–52.

</div>

<div id="ref-GoodmanBacon2021" class="csl-entry">

Goodman-Bacon, Andrew. 2021. “Difference-in-Differences with Variation in Treatment Timing.” *Journal of Econometrics* 225 (2): 254–77.

</div>

<div id="ref-grimmer2022text" class="csl-entry">

Grimmer, Justin, Margaret E. Roberts, and Brandon M. Stewart. 2022. *Text as Data: A New Framework for Machine Learning and the Social Sciences*. Princeton University Press.

</div>

<div id="ref-HinrichsSzmrecsanyiBohmann2015" class="csl-entry">

Hinrichs, Lars, Benedikt Szmrecsanyi, and Axel Bohmann. 2015. “*Which*-Hunting and the Standard English Relative Clause.” *Language* 91 (4): 806–36. <https://doi.org/10.1353/lan.2015.0062>.

</div>

<div id="ref-keith2020text" class="csl-entry">

Keith, Katherine A., David Jensen, and Brendan O’Connor. 2020. “Text and Causal Inference: A Review of Using Text to Remove Confounding from Causal Estimates.” *Proceedings of the 58th Annual Meeting of the Association for Computational Linguistics*, 5332–44. <https://doi.org/10.18653/v1/2020.acl-main.474>.

</div>

<div id="ref-LeechHundtMairSmith2009" class="csl-entry">

Leech, Geoffrey, Marianne Hundt, Christian Mair, and Nicholas Smith. 2009. *Change in Contemporary English: A Grammatical Study*. Studies in English Language. Cambridge University Press. <https://doi.org/10.1017/CBO9780511642210>.

</div>

<div id="ref-MacKinnonWebb2020" class="csl-entry">

MacKinnon, James G., and Matthew D. Webb. 2020. “Randomization Inference for Difference-in-Differences with Few Treated Clusters.” *Journal of Econometrics* 218 (2): 435–50.

</div>

<div id="ref-McEneryHardie2012" class="csl-entry">

McEnery, Tony, and Andrew Hardie. 2012. *Corpus Linguistics: Method, Theory and Practice*. Cambridge Textbooks in Linguistics. Cambridge University Press. <https://doi.org/10.1017/CBO9780511981395>.

</div>

<div id="ref-Moreau1991" class="csl-entry">

Moreau, Thérèse. 1991. *Dictionnaire féminin-Masculin Des Professions, Des Titres Et Des Fonctions*. Métropolis.

</div>

<div id="ref-oqlf1979" class="csl-entry">

Office de la langue française. 1979. *Avis de Recommandation Sur La féminisation Des Titres*. Gazette officielle du Québec 111(30): 7394–7395.

</div>

<div id="ref-PoplackDion2009" class="csl-entry">

Poplack, Shana, and Nathalie Dion. 2009. “Prescription Vs. Praxis: The Evolution of Future Temporal Reference in French.” *Language* 85 (3): 557–87. <https://doi.org/10.1353/lan.0.0149>.

</div>

<div id="ref-RambachanRoth2023" class="csl-entry">

Rambachan, Ashesh, and Jonathan Roth. 2023. “A More Credible Approach to Parallel Trends.” *Review of Economic Studies* 90 (5): 2555–91.

</div>

<div id="ref-france1986circ" class="csl-entry">

République française. 1986. *Circulaire Du 11 Mars 1986 Relative <span class="nocase">à</span> La féminisation Des Noms de métier, Fonction, Grade Ou Titre*. Journal officiel de la République française.

</div>

<div id="ref-france1998circ" class="csl-entry">

République française. 1998. *Circulaire Du 6 Mars 1998 Relative <span class="nocase">à</span> La féminisation Des Noms de métier, Fonction, Grade Ou Titre*. Journal officiel de la République française.

</div>

<div id="ref-RothSantAnna2023" class="csl-entry">

Roth, Jonathan, and Pedro H. C. Sant’Anna. 2023. “When Is Parallel Trends Sensitive to Functional Form?” *Econometrica* 91 (2): 737–47. <https://doi.org/10.3982/ECTA19402>.

</div>

<div id="ref-RothSantAnnaBilinskiPoe2023" class="csl-entry">

Roth, Jonathan, Pedro H. C. Sant’Anna, Alyssa Bilinski, and John Poe. 2023. “What’s Trending in Difference-in-Differences? A Synthesis of the Recent Econometrics Literature.” *Journal of Econometrics* 235 (2): 2218–44. <https://doi.org/10.1016/j.jeconom.2023.03.008>.

</div>

<div id="ref-SchweinbergerHaugh2025" class="csl-entry">

Schweinberger, Martin, and Michael Haugh. 2025. “Reproducibility, Replicability, and Robustness in Corpus Linguistics.” *International Journal of Corpus Linguistics* 30 (2): 119–29. <https://doi.org/10.1075/ijcl.25081.sch>.

</div>

<div id="ref-swissParliamentPublicAccess" class="csl-entry">

Schweizer Parlament. n.d. “Öffentlichkeit.” Accessed July 3, 2026. <https://www.parlament.ch/de/%C3%BCber-das-parlament/parlamentsportraet/stellung-der-bundesversammlung/das-volk-und-die-bundesversammlung/oeffentlichkeit>.

</div>

<div id="ref-Sonning2024" class="csl-entry">

Sönning, Lukas. 2024. “Down-Sampling from Hierarchically Structured Corpus Data.” *International Journal of Corpus Linguistics* 29 (4): 507–33. <https://doi.org/10.1075/ijcl.23079.son>.

</div>

<div id="ref-SunAbraham2021" class="csl-entry">

Sun, Liyang, and Sarah Abraham. 2021. “Estimating Dynamic Treatment Effects in Event Studies with Heterogeneous Treatment Effects.” *Journal of Econometrics* 225 (2): 175–99.

</div>

<div id="ref-tagliamontedarcy2007" class="csl-entry">

Tagliamonte, Sali A., and Alexandra D’Arcy. 2007. “Frequency and Variation in the Community Grammar: Tracking a New Change Through the Generations.” *Language Variation and Change* 19 (2): 199–217. <https://doi.org/10.1017/S095439450707007X>.

</div>

<div id="ref-weinreich1968" class="csl-entry">

Weinreich, Uriel, William Labov, and Marvin I. Herzog. 1968. “Empirical Foundations for a Theory of Language Change.” In *Directions for Historical Linguistics*, edited by Winfred P. Lehmann and Yakov Malkiel. University of Texas Press.

</div>

<div id="ref-Xu2017" class="csl-entry">

Xu, Ke-Li. 2017. “Regression Discontinuity with Categorical Outcomes.” *Journal of Econometrics* 201 (1): 1–18. <https://doi.org/10.1016/j.jeconom.2017.07.004>.

</div>

</div>

[^1]: Contact: <brett.reynolds@humber.ca>
