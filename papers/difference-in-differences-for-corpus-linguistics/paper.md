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
A form’s frequency may move after a shock (contact with another language, a new medium, a redrawn border, or a government decree), and whether the shock caused the change is a natural question. Difference-in-differences is built for that counterfactual, with the discipline applied economics already brings to constructed aggregates like price indices, where the observed number isn’t the quantity of interest either. This paper carries that discipline to corpus frequencies, where it’s rarely applied and where composition and coding make it bite harder. A corpus frequency is a population rate plus a composition-and-measurement term, so a causal reading requires separating several things a corpus merges: the target population, the corpus composition, the measurement procedure, and the units at which treatment varies and uncertainty is counted. Identifying a change in the rate then needs parallel trends twice over, in the rate and the corpus filter, and the diagnostics can only disqualify or bound the claim, never confirm it. A pre-specified decision ladder routes each result to a bounded estimate, a descriptive reading, a shared wave, or not identified. A worked example, the feminization of profession nouns under francophone language policy, runs throughout as a stress test, not an empirical finding.


**Keywords:** difference-in-differences; corpus linguistics; causal inference; corpus composition; linguistic change

# The problem

Something shifts, speakers of another language arrive in numbers, a new medium spreads, a border is redrawn, a government issues a decree, and a form that was rare before it turns common after. Whether or not the shock caused the change is a fair question, and corpus linguistics is well equipped to ask it: the before and the after are measurable, and the field has long studied how change actually propagates (Weinreich et al. 1968; Tagliamonte and D’Arcy 2007). The causal reading still enters easily, often through a verb, usage that “responds to” a reform rather than an argued claim. Corpus work on prescription has long felt this pull: confronting normative dictates with usage, it tends to find the causal link assumed rather than demonstrated, from relativizer choice in edited English prose (Hinrichs et al. 2015) to five centuries of French injunction set against the record of speech (Poplack and Dion 2009). The cheapest robustness check is sometimes grammatical: delete the causal verb and see what claim is left. A rise after a shock is a correlation in time, and what turns it into a causal one is a discipline the corpus makes harder, not because linguists neglect it but because a corpus adds confounds of its own that a plain before-and-after comparison cannot separate from real change.

In econometrics, the standard repair is difference-in-differences (DiD): set the treated series against a comparison series the shock left untouched, and read the effect off the change in their gap. The design isn’t new to language research, where causal inference from text is itself an active field (Keith et al. 2020; Grimmer et al. 2022; Egami et al. 2022), but it’s nobody’s default for tracking change in a corpus. That work has mostly handled text as a treatment, outcome, or confounder in a cross-section; less settled is what DiD’s own assumptions, parallel trends and no interference, become for a diachronic corpus frequency.

The frequency is a constructed aggregate, built from many texts by choices about what to count and how to weight, the same shape as a price index, so the discipline it calls for is not new; what’s new is bringing it to corpus linguistics, where it’s rarely applied, and to a filter harder than most, since who gets written about and how a form is coded are read off the same text and seldom measured. Carrying it across is the gap this paper works in.

A corpus is not simply a sample of a population’s usage; it’s a sample of texts, assembled by editors and archivists with their own shifting priorities (Biber 1993), and its balance and representativeness are matters of degree that builders approximate rather than attain (McEnery and Hardie 2012). Tracking change compounds this: the matched diachronic corpora built for it, like the Brown family, must keep a sampling frame comparable while the genres inside it drift (Leech et al. 2009). So a corpus frequency carries two things at once, what the population did and who happened to be in the corpus, and a shock can move either. The DiD machinery is sound; what it needs is to be told which of the two it’s identifying.

The contribution is therefore not a tutorial on running DiD but a discipline for claiming with it. A before-and-after corpus contrast supports a causal reading only after several things are pulled apart: the target population, the corpus composition, the measurement procedure, the unit at which the treatment varies, and the unit at which uncertainty is counted. Conflate any two and the apparent effect can be an artifact of the corpus, not a fact about the language.

Six questions organize the discipline, taken up across the sections that follow: what’s the shock, and which act counts as the treatment (Section <a href="#sec:treatments" data-reference-type="ref" data-reference="sec:treatments">3</a>); at what unit does the treatment actually vary (Section <a href="#sec:estimand" data-reference-type="ref" data-reference="sec:estimand">2</a>); what population’s rate is the target, and what outcome measures it (Sections <a href="#sec:estimand" data-reference-type="ref" data-reference="sec:estimand">2</a> and <a href="#sec:outcomes" data-reference-type="ref" data-reference="sec:outcomes">4</a>); what comparison makes the counterfactual plausible, and what corpus-specific threat could counterfeit the effect (Section <a href="#sec:threats" data-reference-type="ref" data-reference="sec:threats">5</a>); and what diagnostic would expose it (Section <a href="#sec:diagnostics" data-reference-type="ref" data-reference="sec:diagnostics">6</a>). Section <a href="#sec:modern" data-reference-type="ref" data-reference="sec:modern">7</a> takes up the estimation and inference choices the answers force.

Corpus coverage lags the method’s reach, though less than one might fear. It skews toward well-documented written traditions, but not narrowly: large historical corpora exist for many European languages, for Chinese, and for others, so the before-and-after series the design needs run well past the modern standardized case. Where none exists the design falls silent, and which languages get a corpus at all is the composition problem at its largest scale.

A single case runs through the paper to keep the questions concrete: the feminization of profession nouns under francophone language policy, a change tracked in corpus studies of French (Fujimura 2005; Burnett and Bonami 2019). It earns its place in Section <a href="#sec:worked" data-reference-type="ref" data-reference="sec:worked">8</a> as a teaching vehicle, not as a finding; the aim is the method, and the case is built so that its verdict is sometimes that the effect cannot be identified. A corpus DiD is worth most when it disciplines a causal claim downward, and that’s the argument the rest of the paper makes.

# The DiD estimand in corpus terms

DiD asks one question: across a shock, did the treated series and a comparison series no shock touched change differently? Take the treated variety’s before-to-after change in the outcome, subtract the control’s, and under a single assumption (that absent the shock the two would have moved in parallel) the remainder estimates the average treatment effect on the treated (ATT) (Roth et al. 2023). Say feminine marking rose ten points in the treated variety across the window and four in the comparison: DiD reads the policy effect as the six-point excess, on the assumption that without the policy the treated variety would have risen by the same four. Everything corpus-specific lives in what fills “outcome” and “series”.

That last clause is where the textbook panel idealization, the clean grid of the same units measured period after period, breaks down for a corpus as for any constructed aggregate. What a corpus yields is an observed frequency $`f`$; the quantity of interest, the estimand, is the latent rate $`\pi`$ at which a specified population uses the form in a specified context, for the running case the share of profession- and title-noun tokens with a female referent that take feminine marking, in a named text population. Both the population and the context belong to the estimand: fix them too late and one composition fact reads as nuisance bias in one rung and as part of the target in the next. The two differ by everything the corpus adds: write $`f = \pi + b`$, with $`b`$ collecting composition (whose texts, which genres, what topics) and measurement (how the form was coded or transcribed).

Feminine marking can climb in the corpus with no change in anyone’s usage at all: a paper that runs more profiles of women in the professions, or a transcription service that starts spelling out feminine titles it used to abbreviate, moves $`f`$ while $`\pi`$ holds still. Read $`b`$ as the gap itself, $`b = f - \pi`$: not a random error that more data averages away, but whatever composition and measurement added, fixed once the texts and the coding are. So $`f = \pi + b`$ holds by definition, and collecting more tokens shrinks the sampling noise around an estimate without touching $`b`$. That sampling noise is a separate quantity, carried by the cell-level uncertainty of Section <a href="#sec:modern" data-reference-type="ref" data-reference="sec:modern">7</a>. The outcome on the page is not the quantity the claim is about.

The residual is not empty. Stratify the texts by the margins composition moves on (outlet, profession, topic), and within each stratum $`s`$ let $`\pi_s`$ be the true rate, $`r_s`$ the rate the corpus records, $`q_s`$ the corpus’s share of $`s`$, and $`p_s`$ the target population’s. Then $`f = \sum_s q_s r_s`$ and $`\pi = \sum_s p_s \pi_s`$, so
``` math
b = \underbrace{\sum_s (q_s - p_s)\,\pi_s}_{\text{composition}} + \underbrace{\sum_s q_s\,(r_s - \pi_s)}_{\text{measurement}}.
```
Reweighting sets $`q_s`$ to $`p_s`$ on the strata it can see, zeroing the first term; the second survives, and the part of it the strata are too coarse to resolve is the hidden drift of Section <a href="#sec:worked" data-reference-type="ref" data-reference="sec:worked">8</a>. The simulations are built on this split.

Differencing is linear, so the DiD of $`f`$ separates into the DiD of $`\pi`$ and that of $`b`$, $`\mathrm{DiD}(f) = \mathrm{DiD}(\pi) + \mathrm{DiD}(b)`$. The first term, under parallel trends in the rate, is the target effect. For a usage-rate estimand, the second is contamination, and it vanishes only under a second parallel-trends assumption, $`\mathrm{DiD}(b) = 0`$: that composition and measurement would have drifted alike in both series. A corpus design needs parallel trends twice over, in $`\pi`$ and in $`b`$, where the textbook case quietly assumes the second away. Picture one variety’s archive getting re-digitized and re-tagged halfway through the window while the other’s is left alone: the two corpora’s coding has now drifted apart even if actual usage tracked perfectly, and that drift would enter the estimate as if it were the policy’s effect.

Both are claims about an unobserved counterfactual: pre-treatment comparisons can discredit them but cannot verify them. And since only $`f`$ is observed, a flat pre-period in $`f`$ is consistent with non-parallel trends in $`\pi`$ and in $`b`$ that cancel, so the pre-period tests the two assumptions jointly, never apart.

Neither half is optional, and the temptations run both ways. Once the composition term is on the table it’s easy to treat it as the whole problem and forget the ordinary assumption about the rate; it’s equally easy to wave at adjusting for composition and assume the rate takes care of itself. Both shortcuts fail. The observed contrast recovers the effect on $`\pi`$ only when the rate would have moved in parallel *and* the bias would have moved in parallel.

One refinement decides how the corpus-filter term is handled, turning on which effect is wanted. The filter reaches the observed contrast two ways: a non-policy drift, which the second assumption requires to be parallel, and a policy-induced shift, the policy changing what gets written rather than how a given referent is marked. For an effect on the usage rate $`\pi`$, that second shift is nuisance as well, even though the policy caused it: a topic or profession mix that moved gets reweighted to a fixed mix, isolating the marking rate. The other estimand, sometimes the one actually wanted, is the policy’s total effect on the observed output. It keeps the writing that the policy moved, so that same shift is part of the answer, and reweighting it away would subtract a piece.

The two estimands differ exactly by the policy-to-composition path, and a design that doesn’t say which it means can defend neither. The one margin neither estimand touches is the outcome’s own, the realization strategy of Section <a href="#sec:outcomes" data-reference-type="ref" data-reference="sec:outcomes">4</a>: condition there and the effect itself is removed.

Naming the estimand forces apart five units a corpus invites running together. The linguistic unit is the variable whose rate is at issue (feminine marking of a profession noun for a female referent). The measurement unit is what gets counted to estimate that rate (eligible tokens, or documents). The aggregation unit is the cell those counts are summed into before estimation (an outlet-month, a title-variety-year), which sets the weights and denominators and can quietly change the estimand. The identifying unit is where the treatment varies (the variety or polity). The dependence unit is the level at which residuals correlate and inference is clustered, here the variety again; with only a few varieties the usual large-sample standard errors don’t hold, which is the inference problem Section <a href="#sec:modern" data-reference-type="ref" data-reference="sec:modern">7</a> takes up.

The merge is dangerous because the five sit at wildly different scales. A corpus offers millions of measurement units and, often, two or three identifying units, and it’s the latter that govern how much can be concluded. Counting tokens as though they were the sample size manufactures a precision the design doesn’t have (Bertrand et al. 2004): it’s like claiming a hairline margin of error on a two-person poll because each person answered a thousand questions. The estimand is the effect on $`\pi`$; parallel trends in $`\pi`$ and in $`b`$ is its price; the diagnostics of Section <a href="#sec:diagnostics" data-reference-type="ref" data-reference="sec:diagnostics">6</a> can falsify that assumption or bound how far it may fail, never confirm it, and the worked example of Section <a href="#sec:worked" data-reference-type="ref" data-reference="sec:worked">8</a> is where the discipline is applied end to end, each rung declaring its estimand in a ledger (Table <a href="#tab:ledger" data-reference-type="ref" data-reference="tab:ledger">1</a>).

# What counts as treatment in language data

In a policy evaluation the treatment is usually a known act on a known date: a law takes effect, a price changes, a program opens. Language data rarely offers that. A change in usage is pushed by a tangle of events, a circular, a dictionary, an administrative endorsement, a first enforcement, a media house revising its style sheet, and which of them counts as the treatment is not given by the data; it’s a decision that fixes the estimand. Name the wrong act and the cleanest design answers the wrong question.

And the shock need not be a policy at all. It can be a new medium with constraints of its own (a platform’s character limit, a switch to keyboards with autocorrect), a contact or demographic event (a border redrawn, a refugee influx), a censorship regime imposed or lifted, or a non-linguistic event that drags vocabulary behind it (a pandemic, a new technology). These often make for cleaner identification than a decree does, because their timing isn’t chosen by the speech community: a platform changes its limit, or a population is displaced, on a schedule unrelated to the linguistic trend, where a policy’s timing is bound up with the very trend at issue (Section <a href="#sec:threats" data-reference-type="ref" data-reference="sec:threats">5</a>). The policy case this paper runs on is, in that sense, the demanding one for identification.

Take the feminization case. The candidate treatments for one polity include the legislative or administrative endorsement, the publication of a feminized-titles dictionary (Moreau 1991), the issuing of a circular, and the date editors actually began applying the forms. These differ in time, sometimes by years, and in force. A design that dates the treatment to the circular and one that dates it to editorial uptake estimate different effects, and only one of them is the effect being claimed.

The widest gap is between announcement and implementation. A rule can be promulgated and then ignored: France’s 1986 circular (République française 1986) urged feminine forms and went largely unenforced, by the government’s own later admission, until a second circular in 1998 (République française 1998; Burnett and Bonami 2019). The two share their text and differ in force, which is what makes 1986 usable as a near-null treatment, a policy on paper whose null result is a negative control, a case that should show nothing, not a failure.

Announcements can also lag the changes they name. An endorsement often ratifies a shift already under way rather than starting it, a question of actuation, of why a change takes hold when and where it does (Burnett and Bonami 2019), so the official date can be a waypoint on a rising curve, not its onset, and a jump measured there reflects anticipation, not effect. The pre-period diagnostic of Section <a href="#sec:diagnostics" data-reference-type="ref" data-reference="sec:diagnostics">6</a> tests for exactly that; here it’s a reason to define the treatment as a change in the rate of adoption, not the first appearance of a form.

A deeper precondition sits on the change, not just the policy. Feminization is a gradual, socially structured diffusion, an S-curve that spreads token by token and register by register (Weinreich et al. 1968; Tagliamonte and D’Arcy 2007). Two varieties climbing parallel S-curves still satisfy parallel trends, equal nonzero slopes are fine; the threat is their being out of phase. Say one variety sits in the steep middle of its curve while the other is near the top, leveling off. With no policy at all their slopes differ, because an S-curve’s slope tracks $`\pi(1-\pi)`$: a variety at the half-way mark climbs almost three times as fast as one at nine-tenths ($`0.25`$ against $`0.09`$). Where the treated and control varieties sit at different points on their own curves, their untreated slopes differ and the counterfactual is nonlinear, so a linear pre-trend extrapolation mis-predicts it and books the curvature as effect, policy or no policy.

A shock identifies an effect only when it shows as a level shift or an acceleration on top of curves that were running parallel; where the varieties are out of phase, “not identified” becomes the honest modal verdict by the geometry of the change, not an accident of thin data. The cleanest cases for a usage effect are genuinely discrete shocks like a hard enforcement date or an orthographic reform; a transcription convention that flips is discrete too, but it’s a clean measurement shock, a rival event to diagnose, not a usage effect.

Treatments in this domain are rarely binary either. Endorsements vary in scope (which titles, which registers) and in teeth (recommended versus required), so two polities labelled treated may have had very different doses. Where the dose is measurable, an intensity rather than an on-off indicator is the more honest treatment; where it isn’t, the binary coding is itself an assumption to flag.

Finally, the treatment’s boundary leaks. A policy in one polity reaches readers in another through shared media and the channels a common language opens (Section <a href="#sec:threats" data-reference-type="ref" data-reference="sec:threats">5</a>), so a variety marked untreated can receive a dose of the treatment it’s meant to control for. The treatment is not only fuzzy in date and force but porous across units, which is why naming it has to include naming its edges.

So the first question of a corpus DiD is not yet about trends or controls; it’s which act, at which date, with what reach, is being called the cause. The estimand, the comparison, and every diagnostic that follows inherit that choice, and leaving it implicit is how a study ends up defending a number whose meaning it never fixed.

# Outcome construction

A corpus outcome is transparent when anyone could reproduce it from the same texts by a stated rule: a count over forms, a closed-set alternation, a tagged feature. It’s model-dependent when a classifier, parser, or embedding stands between the text and the number. Both are usable, but they fail differently. A transparent count errs in what its rule misses; a model-dependent measurement adds the model’s own drift, which can move with the very period or variety under study and so mimic the effect. That makes the check differential, not global: a classifier or parser has to be evaluated by period and by variety, since an error rate that holds on average but shifts across the window is the measurement twin of a non-parallel trend.

And because the outcome is a proportion, the bias is level-dependent even at fixed error rates: it tracks $`\pi`$ itself, so a moving rate drags the filter through the measurement model, coupling the two parallel-trends assumptions in mechanism, not only in the data. A classifier that mislabels one token in twenty, both ways, doesn’t add a flat one-in-twenty bias to the share: a true rate of ten percent reads as fourteen, a true ninety as eighty-six, and a true fifty as fifty exactly, the distortion flipping sign as the feature grows common, all from a classifier that never changed.

A second choice hides inside the first. Most variables of interest are realized in more than one way, and a single count silently treats those ways as exchangeable signs of one change. Feminine marking of a profession noun for a woman, this paper’s running example, surfaces as a distinct noun form (*autrice*), as a feminine article or agreement on an otherwise invariant noun (*la ministre*), or as both. Pooling them assumes the realizations rise together; breaking the outcome out by strategy tests that assumption instead of burying it, and the test matters because varieties favour different strategies (Dawes 2003).

Two refinements follow. Agreement that’s already obligatory sits at a ceiling: agreement on an already-feminine title (*une infirmière compétente*) varies with nothing the shock touches, so it’s noise, not outcome, and the informative agreement is the contested kind, the feminine article on a default-masculine title, which for epicene nouns (one form for either gender, like *ministre*) is the only available signal. And a marker means nothing until its conditioning is fixed: a feminine article counts as feminization only when the referent is independently known to be a woman, so the outcome definition carries that conditioning rather than assuming it.

The outcome is a proportion, and a proportion needs a denominator named as carefully as the numerator. Feminine-marked tokens out of what: every profession-noun token, only those with a female referent, only title-address contexts? Weighted how: by token, so a few prolific titles dominate, or by title-variety cell, so each counts once? Over which referent distribution, when the share of female referents is itself moving? The numerator is the visible choice; the denominator is where a composition shift quietly re-enters, which is why it belongs in the estimand of Section <a href="#sec:estimand" data-reference-type="ref" data-reference="sec:estimand">2</a>, not in the counting code.

# Identification threats specific to corpora

The threats a corpus DiD faces are easiest to read off a small set of causal paths (Figure <a href="#fig:threat-dag" data-reference-type="ref" data-reference="fig:threat-dag">1</a>; read each arrow as “this directly affects that”). They fall into five families. Four are inflected, or created, by the corpus, composition, measurement, interference, and aggregation; the fifth, selection into treatment timing, is the ordinary confounding worry any DiD faces. Each is a way the observed contrast can be mistaken for the policy’s effect on the population rate, and each has a diagnostic in Section <a href="#sec:diagnostics" data-reference-type="ref" data-reference="sec:diagnostics">6</a> that can expose it when the relevant margin is measured, or at least bound the claim’s fragility.

<figure id="fig:threat-dag" data-latex-placement="t">

<figcaption>The causal paths a corpus DiD contends with: a threat map, not a graph that identifies the effect. Dashed nodes are unobserved (gender ideology and the population rate <span class="math inline"><em>π</em></span>). The arrows are the routes the section takes up in turn, ideology as a common cause of adoption timing and usage, the policy’s effect on the rate (the target, drawn as the heavier spine through <span class="math inline"><em>π</em></span> to <span class="math inline"><em>f</em></span>) and its mediated effect on composition <span class="math inline"><em>C</em></span>, the measurement link from <span class="math inline"><em>π</em></span> to observed <span class="math inline"><em>f</em></span>, and a neighbour’s spillover. What the figure cannot show is the assumption that identifies the effect: parallel trends is a restriction on a time-trend, not a path a static graph can show.</figcaption>
</figure>

Composition is the first, splitting in two. A policy can move the mix it’s measured against, the professions in the news, the topics in play, so part of composition lies on the path from treatment to $`f`$ (the edge $`T \to C`$). Whether to reweight it away depends on the estimand of Section <a href="#sec:estimand" data-reference-type="ref" data-reference="sec:estimand">2</a>: for the usage rate it’s nuisance and gets reweighted out, for the total-output effect it’s part of the answer and stays. The rest of composition, sampling frame, outlet entry, author turnover, register mix, drifts for reasons the policy didn’t cause and is a bias source to adjust for either way. The two look alike in the data, so the margins to reweight have to be named, with the estimand, before the estimate is seen.

Measurement is the second. What the corpus records is not the latent rate but a coding of it, and the coding can drift, a classifier whose error rate moves with the period, a transcription house-style that adopts new forms on a date of its own. When it does, $`f`$ jumps while $`\pi`$ holds still. That’s confounding read off the text itself (Keith et al. 2020), the instrument measuring the outcome turned into a moving part, and it bites hardest where the same ideology that changes usage can also revise the coding convention.

Interference is the third, breaking the assumption that one variety’s treatment leaves the others untouched. The channels are many: Suisse romande shares wire services with France, the same dictionaries and style guides circulate across the francophonie, writers file across borders, and the open internet ignores the boundary entirely. A not-yet-treated control is then not untreated but lightly dosed, the leak running both ways, since the treated polity seeps into the control’s post-period too, here slight only because France dwarfs Suisse romande. Shared wire copy can be held aside and deduplicated; the other channels can’t be, which is why the estimand has to be named, the policy’s direct effect net of diffusion or its total effect including it. Sharing a language, the varieties form one discourse community, so no-interference is less an assumption to test than a quantity to bound.

Aggregation is the fourth, and the easiest to overlook. The level at which counts are summed into observations (token, document, outlet-month, title-variety-year) fixes the weights and the denominators, and a change in that level can move the estimand with no change in usage: a few prolific outlets or a burst of one topic can carry a token-level rate that a cell-level rate would not. The aggregation unit of Section <a href="#sec:estimand" data-reference-type="ref" data-reference="sec:estimand">2</a> is a modelling choice with identifying consequences, not bookkeeping.

Selection into treatment timing is the fifth and the deepest. A polity tends to legislate about when its gender politics have already moved, and that same movement shifts usage, so adoption timing is correlated with the outcome’s own trajectory. The ideology fork in the figure is exactly that, a common cause of when the policy lands and of how usage was already going. No estimator removes it, and in a two-group design it’s observationally indistinguishable from a real effect.

That last threat is also where the figure reaches its limit. The fork it draws is a static object, but identification turns on a trend, whether usage would have moved in parallel absent the policy, in the rate and in the filter both. A graph can inventory the threats; it can’t draw the assumption that answers them, which is why the design differences the confounding out rather than conditioning on it, and why the diagnostics of Section <a href="#sec:diagnostics" data-reference-type="ref" data-reference="sec:diagnostics">6</a>, not the diagram, carry the weight.

# Diagnostics

A diagnostic here does two things and not a third. It can disqualify a causal reading, or bound how far the identifying assumption may bend before the result flips. It cannot confirm parallel trends, since the counterfactual it concerns is never observed. So diagnostics are not a checklist run after the estimate to bless it; they’re pre-specified tests, each answering a threat from Section <a href="#sec:threats" data-reference-type="ref" data-reference="sec:threats">5</a>, whose outcomes route the estimate to one of a few permitted conclusions under a rule fixed before the estimate is seen.

That discipline starts before any test, with the roles. Each textual feature has to be assigned a job: does it *measure* the outcome, *identify* the referent that conditions the outcome, *index* the composition to adjust for, or lie *downstream* of usage as part of the outcome itself? No feature can hold two of these jobs at once. Conditioning on a downstream feature, the realization strategy, subtracts the effect; conditioning on a measurement cue that drifts imports the drift; and how far composition is reweighted follows from the declared estimand (Section <a href="#sec:estimand" data-reference-type="ref" data-reference="sec:estimand">2</a>). Writing the roles down in advance is what keeps the later adjustments honest.

The first family tests the pre-period. Event-study estimates against not-yet-treated comparisons (Sun and Abraham 2021; Borusyak et al. 2024), which read the gap between the series separately at each year around the shock, show whether they moved together before it, but a flat pre-period only fails to discredit the assumption; it cannot establish it (Roth et al. 2023). The sharper question is onset versus acceleration: does the adoption rate change at the treatment date, or was the divergence already under way, so the date is a waypoint on a curve rather than its cause? A slope already bending before the shock routes away from a causal reading.

The second family breaks the design on purpose. A placebo date where no policy occurred, a near-null policy used as a negative control, or the treatment label permuted (shuffled at random) across units should all return nothing, and an effect where none belongs discredits the pipeline. With a handful of identifying units these permutations are calibration, not inference: they show the size of contrast the procedure manufactures by chance, against which the real one is read, not a $`p`$-value from an assignment that was never random (Bertrand et al. 2004). What inference remains possible with so few clusters is the business of Section <a href="#sec:modern" data-reference-type="ref" data-reference="sec:modern">7</a>.

The third family withholds parts of the corpus. Leave-one-source-out re-estimation, dropping an outlet, a wire feed, or a region, asks whether the effect lives in the whole series or in one corner of it, and leave-one-author-out belongs beside it, since a few prolific bylines or a single topic burst can carry a token-level rate that a cell-level rate would not; syndicated reprints of one article are deduplicated first. An estimate carried by a single outlet, a single author, or shared wire copy is idiosyncrasy or interference, not an effect.

The fourth family probes the corpus filter. Reweighting to a fixed composition removes a measured artifact; which margins to fix follows from the estimand (Section <a href="#sec:estimand" data-reference-type="ref" data-reference="sec:estimand">2</a>), the policy-moved mix reweighted away for a usage effect and kept for a total-output effect, the choice pre-committed either way. And because the outcome is a bundle of realization strategies (Section <a href="#sec:outcomes" data-reference-type="ref" data-reference="sec:outcomes">4</a>), re-running it strategy by strategy is itself a diagnostic: the strategies sit on a cline, low-cost agreement (*la ministre*) moving early and high-cost derivation (*autrice*) late, so a per-strategy event study says not just whether a policy bit but which strategy it moved, and a divergence between them means the assumption that they’re exchangeable signs of one change has failed.

The last family quantifies the assumption’s fragility. Rather than assert parallel trends, sensitivity analysis asks how large a violation would have to be to overturn the result, and compares that breakdown value to the largest confound the setting plausibly supplies (Rambachan and Roth 2023). Say the estimate stays positive unless the two varieties’ underlying trends differed by more than two points a decade: if the widest gap ever seen between them in a quiet stretch is half a point, the claim clears a comfortable margin, but if quiet stretches routinely show three, the apparent effect sits well inside the ordinary background drift.

To keep “plausibly” from meaning “whatever the result needs”, the benchmark is fixed in advance and measured, not felt: the largest trend swing seen in an untreated stretch or an untreated variety sets the bar a real violation would have to clear, and the margins eligible for reweighting are listed from domain knowledge before the estimate is in hand. A result that survives only a violation smaller than that benchmark has not earned its claim; one that survives a larger violation earns a bounded claim, reported as a sensitivity interval, not a point.

The benchmark has a blind spot worth naming: it can only see a violation that leaves a footprint in the windows it’s built from. A drift confined to the treated post-period, or one large enough to inflate the benchmark along with the estimate, clears the bar untouched, which is exactly the failure the simulations of Section <a href="#sec:worked" data-reference-type="ref" data-reference="sec:worked">8</a> make quantitative. The bound is eliminative: it clears the confounds you can name and benchmark, never the ones you cannot conceive, so a bounded claim is always made against the imaginable confounds, not all the possible ones.

These checks feed one pre-specified rule, of the same form in every application:

- a divergence aligned to the treatment date that survives the composition, interference, and onset checks, with a breakdown value beyond any plausible confound, licenses a *bounded estimate*, scoped to the register actually measured;

- a divergence that leans on an ambiguous check, or whose breakdown value sits near a plausible confound, licenses only a *descriptive reading*;

- calendar-time co-movement with no date-aligned divergence is read as a *shared wave*, a secular trend rather than the intervention, an identified result in its own right;

- a pre-treatment divergence, an effect carried by shared-source or single-outlet material, selection into treatment timing the design cannot rule out, or a breakdown value below a plausible confound, forces *not identified*, reported as such rather than called robust.

The defeater itself needs discipline. An unmeasured local wave is always conceivable, but a verdict of “not identified” resting only on what one can imagine, never on what the setting gives reason to suspect, would collapse the ladder to a single rung; the defeater has to be credible in the case at hand, not just conceivable, or no case ever clears the bar.

The ladder’s point is that a downgrade is a result. A corpus DiD succeeds not when it returns an effect but when it returns the right verdict, and for many questions that verdict is that the apparent change is a shared wave, a measurement shift, or a composition artifact, or else that no usage effect can be identified from the series at all. The worked example of Section <a href="#sec:worked" data-reference-type="ref" data-reference="sec:worked">8</a> runs the ladder on one case; that the rule was fixed before the data answered matters more than which rung the case lands on.

# Estimation and inference choices

An estimator identifies nothing on its own; the design does. The choices in this section (which estimator, on what scale, with what inference) cannot rescue a contrast the design fails to identify, but a careless one can squander or misstate what the design does buy. That’s why the section is about estimation and inference, not only about which DiD package to call.

Start with the estimator, because the default is a trap. A pooled two-way fixed-effects regression looks like the natural way to absorb variety and period, but under staggered adoption with heterogeneous effects its implied weights can turn negative, so already-treated units serve as controls for later ones, and a real effect in an earlier-treated group can push the overall estimate the wrong way (Goodman-Bacon 2021; <span class="nocase">de Chaisemartin and D’Haultfœuille</span> 2020). The group-time and event-study estimators built for this case repair the weighting (Callaway and Sant’Anna 2021; Sun and Abraham 2021; Borusyak et al. 2024). They repair only the weighting, though: none of them touches selection into treatment timing, so a heterogeneity-robust estimate of an endogenously timed treatment is a clean number for the wrong quantity.

The estimand also lives on a scale, and the scale is a modelling choice. The additive split $`f = \pi + b`$ buys clean linearity, but parallel trends is not transform-invariant: an assumption that holds on the probability scale can fail on the log-odds scale and the other way round, and the gap between them is widest when the varieties start from different baseline levels (Roth and Sant’Anna 2023). A ten-point rise from fifty percent and a ten-point rise from eighty-five are the same on the additive scale but not in log-odds: the first multiplies the odds by about one and a half, the second by more than three, so two varieties parallel on one scale can pull apart on the other.

A log-odds parallel-trends may be the more defensible assumption, but on that scale the tidy additive decomposition no longer carries through, so the choice is substantive, not cosmetic. Binomial or beta-binomial models (the latter letting cells vary more than a clean coin-flip count would) estimate cell rates efficiently without changing what’s identified; whatever the fitting scale, report the effect back on the scale on which the claim is made.

Inference is where the few-units problem bites hardest. The binding sample size is the number of identifying units, not the millions of tokens, and with four or five polities cluster-robust intervals are badly anti-conservative: far too narrow, so they announce effects that aren’t there (Bertrand et al. 2004). The treatments that exist for this regime are the wild cluster bootstrap (Cameron et al. 2008), which rebuilds the interval by resampling whole varieties rather than tokens, and randomization inference for designs with few treated clusters (MacKinnon and Webb 2020), which reads the observed contrast against the spread produced by reassigning the treatment label. Neither is a guarantee: the bootstrap can still under-cover with very few or very unbalanced clusters, and randomization inference needs a credible assignment model that staggered, politically chosen adoption rarely supplies. They sharpen the honesty of the interval; they do not manufacture one.

With as few as two identifying units, or with politically chosen treatment timing, they may be more illustrative than runnable: where their assumptions can be made explicit, run them; where they can’t, report the absence of a clean interval as part of the result. And the unit of analysis should be pre-specified cells, an outlet-period or a title-strategy cell, not raw tokens treated as independent draws, which is the aggregation choice of Section <a href="#sec:estimand" data-reference-type="ref" data-reference="sec:estimand">2</a> seen from the inference side.

This invites the obvious objection: why difference at all, rather than model the whole series, a multilevel model with latent rates, outlet and title effects, composition terms, and a smooth calendar trend? Not because differencing removes more. Differencing clears the time-invariant confounds, the fixed level of a variety’s gender politics, but it leaves the trend confound exactly where a model would: selection into treatment timing rides the trend, and no estimator, differenced or modelled, removes it. The identifying assumption is the same one either way, parallel trends here, a counterfactual-trend term there, and a pre-period checks it equally for both.

What DiD buys is not a stronger guarantee but a named and conventional one: the assumption is called parallel trends, it sits in plain view, and a flat pre-period is its agreed probe, where a multilevel model can bury the same assumption in functional form and the random-effects structure. Partial pooling is still a good estimator for the nuisance dimensions, shrinking sparse outlet and title cells within each variety while the across-variety contrast stays fixed (Section <a href="#sec:worked" data-reference-type="ref" data-reference="sec:worked">8</a>); it’s a complement for estimation, not a substitute for the design’s identification.

None of these choices identifies anything. Each can only protect or squander what the parallel-trends design already bought, which is why they belong after the estimand and the diagnostics, and before the worked example puts them to work.

# Worked example

I build the design up rather than show it whole. Each rung adds one source of difficulty and turns the threat it introduces into a lesson, so the reader can see what a corpus DiD identifies and where it stops. The phenomenon throughout is the feminization of profession nouns under language policy.

Each rung declares its estimand before any estimate (Table <a href="#tab:ledger" data-reference-type="ref" data-reference="tab:ledger">1</a>); the difference that matters most is the target, the usage rate $`\pi`$ in rungs 1 and 2 and a design contrast rather than a clean effect in rung 3.

<div id="tab:ledger">

|  | **Rung 1** | **Rung 2** | **Rung 3** |
|:---|:---|:---|:---|
| Target | usage rate $`\pi`$, edited written standard | usage rate $`\pi`$, edited written standard | language-internal vs polity-driven (a design contrast) |
| Treatment | Swiss 1991 endorsement | staggered endorsements, 1979–1998 | no within-Switzerland contrast; federal policy fixed |
| Comparison | France (1986 near-null) | not-yet-treated polities | other language regions (not untreated controls) |
| Window | 1991–1997 | 1979–1998 and after | around 1991 |
| Outcome | feminine-marking share, female-referent profession/title tokens | the same, strategy-decomposed | language-specific marking, harmonized as far as possible (*Bulletin officiel*) |
| Identifying unit | variety | polity | language region within one polity |
| Dependence unit | variety (two) | polity (four) | region (three) |
| Effect | direct or total, declared | group-time ATTs | not a clean DiD; exposes the measurement link |

The estimand ledger. Each rung fixes its target, design, and effect type before any estimate. Rung 3 is a design variant, not a clean two-group contrast.

</div>

## Rung 1: the clean contrast and the spillover problem

The cleanest start is a pair of varieties that share a language and differ in policy. French-speaking Switzerland endorsed feminizing profession nouns early: the Swiss Federal Chancellery’s 1991 report on non-sexist administrative language (Chancellerie fédérale suisse 1991) and Moreau (1991)’s professions dictionary. France makes the comparison, but not a pristine control. A 1986 circular under Prime Minister Fabius urged the same forms yet went largely unenforced, by the government’s own later admission, until a second circular under Jospin in 1998 (Burnett and Bonami 2019). I therefore treat 1986 as a near-null policy, take 1991–1997 as the window in which Switzerland is treated and France is not, and hold the 1998 French change back as a separate follow-up event.

I measure the proportion of profession and title nouns that take feminine marking for a female referent, counted strategy-agnostically: any feminine article, agreement, or noun form rather than one favoured ending. The two varieties differ a little in preferred form, Switzerland tolerating *-esse* where France resists feminine endings longer (Dawes 2003), but sharing the language spares the comparison the gulf between French, German, and Italian. Because that single count assumes the realizations are exchangeable signs of one change, I break it out by strategy, separating a distinct feminine noun form (*autrice*) from a feminine article or agreement on an otherwise invariant noun (*la ministre*); for the many epicene nouns the article and agreement are the only feminization signal, so a divergence between strategies is a warning, not a detail.

Female reference comes off independent cues, chiefly *Madame* with a title, so the *le*/*la* alternation is identified without hand-coding. Two costs ride with that convenience. It narrows the outcome to a formal title-address context, so the estimand is feminine marking there, not across profession nouns at large. And *Madame*-implies-female-referent is itself a classifier with an error rate; should *Madame* usage drift across the window, that error drifts with it and lands in the measurement term $`b`$, the thing rung 3 makes its lesson.

Suisse romande’s press is far smaller than France’s, so the rarer titles land in thin cells. Partial pooling across outlets and titles within each variety steadies those sparse estimates, though for a two-period contrast the pre and post averaging already does most of that work, so the real payoff waits for the staggered design of rung 2 and its many group-time cells. The two varieties stay fixed effects so the contrast at issue is not pooled away, and the pooling stops short of the editorial layer the press adds, which stays on display.

Two cautions belong up front. The corpora are edited newspapers, so the design identifies a change in the edited written standard, not in spontaneous usage; use in the wider population stays a separate target, and for this phenomenon it may be out of reach by construction: the registers where female reference is cleanly conditioned are the edited and transcribed ones, and the spontaneous registers are exactly where neither the conditioning nor the transcription can be trusted.

Corpus frequency is also a population rate plus a composition term, so the usual parallel-trends assumption now has to hold twice over: the corpus adds parallel trends in the composition term to the standard requirement of parallel trends in the rate, rather than replacing it. Rung 1’s target is the usage rate (Table <a href="#tab:ledger" data-reference-type="ref" data-reference="tab:ledger">1</a>), so the response to that second requirement is to reweight to a fixed composition, the policy-moved topic and profession mix included, since for a usage estimand that mix is nuisance, not effect. The one margin left untouched is the realization strategy itself, which is part of the outcome.

The two groups buy one sharp question, with a trap inside it. If the 1991 endorsement changed usage, Suisse romande should accelerate away from France after 1991 while the two ran together before. But an endorsement often ratifies a change already under way, so a pre-1991 divergence would mean 1991 is a waypoint on a curve, not its onset, and the later gap is no policy effect. The pre-1991 slopes come first: does the adoption rate change at 1991, or does a gap merely open? If instead both series rise together in calendar time throughout, the driver is a shared francophone shift in norms, and the contrast reflects that wave, not the intervention.

The threat this rung introduces is interference. Suisse romande reads French media, and both draw on the same wire service, so the control is not sealed off from the treated variety, and the estimand has to be named: the Swiss policy’s direct effect, net of what crosses the border, or its total effect including diffusion. Agence France-Presse share and French-media dependence become exposure variables rather than nuisances to delete, shared-wire copy is held aside for a separate estimate, and the report states how much of each series it carries. A jump that lives only in shared material is diffusion, not a Swiss policy effect.

The procedure also runs on deliberately broken data, shuffling the treatment year to random dates and permuting the variety labels, to confirm it finds nothing where nothing should be. With only two varieties it’s a falsification and calibration check, not powered inference: a clean panel offers no real randomization, so the permuted contrasts show the size of jump the pipeline manufactures by chance, against which the observed contrast is read. I do not present a permutation $`p`$-value as though the two varieties had been randomly assigned (Bertrand et al. 2004).

Run the ladder of Section <a href="#sec:diagnostics" data-reference-type="ref" data-reference="sec:diagnostics">6</a> on this case. A divergence at 1991 that survives the composition-margin, shared-wire, and onset checks, with a breakdown value beyond any plausible ideology shift, would license a *bounded estimate* of a policy effect on the edited written standard; a divergence leaning on an ambiguous check would license only a *descriptive reading*; calendar-time co-movement with no break at 1991 would be read as a *shared wave*, the francophone one; and a pre-1991 divergence, an effect carried by shared-wire or single-outlet copy, or a plausible ideology shift that overturns the estimate, would force *not identified*. The routing is fixed before the estimate is seen, and a population claim is licensed by none of these on its own; it waits for the spoken and lightly edited series.

Rung 1 thus carries the whole apparatus in miniature, a stated estimand, a falsifiable parallel-trends assumption, an interference diagnostic, a randomization check, and the Section <a href="#sec:diagnostics" data-reference-type="ref" data-reference="sec:diagnostics">6</a> ladder applied, on the cleanest data the phenomenon offers. The rungs that follow keep the apparatus and the rule and add the complications cross-variety work cannot avoid.

## Rung 2: more polities, less exogeneity

Adding varieties looks like a free improvement and is not. Québec endorsed feminine titles in 1979 (Office de la langue française 1979) and Belgium by décret in 1993 (Communauté française de Belgique 1993); with Suisse romande (1991) and France (1998) that’s four polities adopting at four dates. Treatment timing now varies, so the two-group contrast gives way to staggered estimators: group-time effects (each cohort’s average treatment effect on the treated, or ATT) read against not-yet-treated varieties (Callaway and Sant’Anna 2021), after the standard warning that a pooled two-way fixed-effects estimate is a weighted average of two-by-two contrasts whose weights can go negative (Goodman-Bacon 2021; <span class="nocase">de Chaisemartin and D’Haultfœuille</span> 2020), with event-study estimators robust to that contamination (Sun and Abraham 2021; Borusyak et al. 2024). These estimators fix one thing, the negative weighting that heterogeneous effects induce; none of them touches selection into timing, the threat the next paragraphs turn to.

Worse, the not-yet-treated control isn’t evenly available. France, last to adopt, can stand as the untreated comparison for Switzerland and Belgium, but its own 1998 change has no not-yet-treated peer inside the four, and Québec, treated since 1979, is no clean control for most of the window either. So the estimator that reads each cohort against the not-yet-treated has fewer clean comparisons than four polities suggest, the rung’s lesson in miniature: more varieties bought not more identification but a thinner set of usable contrasts.

But four polities are not four independent experiments, and this rung exists to show why. The varieties are now whole countries, each with its own politics, press economy, and media regime that the two-group baseline never had to hold apart. The forms diverge as well: Québec writes *auteure*, Belgium leans epicene, France resists, so rung 1’s strategy-agnostic count now rests on treating these as exchangeable signs of one change, a premise to test rather than assume (Dawes 2003).

Deeper still: the staggering isn’t exogenous. It’s the selection into treatment timing of Section <a href="#sec:threats" data-reference-type="ref" data-reference="sec:threats">5</a>, now spread across cohorts: each polity adopts roughly when its own gender politics have already turned, and that turn moves usage too, so the not-yet-treated varieties are not resting on a flat counterfactual but riding the continental wave, the secular gender-ideology trend behind both adoption timing and usage, easily mistaken for the effect. The control is contaminated in the one dimension the design needs clean, and no estimator repairs it. Rambachan and Roth (2023) can bound how large a trends violation would have to be to overturn a result, but it cannot manufacture exogeneity where treatment timing is selected on the outcome’s own trajectory; and with four clusters the large-sample approximations behind ordinary standard errors fail, since they need far more groups than four, leaving cluster-robust intervals anti-conservative and the permutation set tiny (Bertrand et al. 2004).

What the staggering does buy is a sharper form of rung 1’s question. If the policies move usage, the jumps should track each polity’s own date; if a shared wave moves it, they should track calendar time whatever the date. The test is a partial filter, not a rescue: it separates one synchronized wave from policy-locked timing, but cannot tell a policy effect from heterogeneous local waves that each drive their own polity’s date. France supplies the internal placebo: its 1986 circular went unenforced, on the government’s own later admission, and should show no jump where 1998 does, so an effect that turns up at 1986 reflects something other than the policy (Burnett and Bonami 2019; Fujimura 2005). It’s a negative control for one date, not a warrant for the parallel trends the other varieties still require.

The decision ladder carries over unchanged in form, with the staggered diagnostics slotted in. A cross-variety divergence aligned to policy dates, surviving the composition, shared-wire, and pre-trend checks, with breakdown values beyond a plausible wave, licenses a *bounded estimate*; calendar-time alignment is read as the *shared wave*; a failed France placebo, contamination revealed by the decomposition, or a plausible wave that overturns the estimate forces *not identified*. More varieties raise the bar for a clean claim at least as often as they lower it.

## What the simulations show, and where they break

A corpus never reveals the population rate, so the one place to check that the design recovers the right answer is a simulation whose truth I set: the only corpus in the paper honest enough to reveal its $`\pi`$. On controlled data the claim ladder routes each canonical case to the verdict it should, and reweighting recovers the true effect when a composition shift rides an observed stratum: a naive contrast of $`+0.13`$ on a pure composition artifact returns to zero once the measured mix is held fixed, while drift outside the strata leaves both the naive and the reweighted estimate near $`+0.15`$, the case the design cannot catch (`rung1-recovery-sim.py`). That’s a consistency check, not evidence the diagnostics have power on messy data.

As the scripts implement it, the ladder is a fixed, ordered sequence of gates on the reweighted series, short-circuiting at the first that fires. A pre-trend gate: a treated-minus-comparison pre-period slope beyond tolerance returns *not identified*, the divergence predating the shock. A composition gate: a shift on a pre-specified reweightable margin triggers the reweighted estimand, and the naive contrast is disqualified where it diverges from the reweighted one beyond tolerance; only a shift on an unmeasured or non-reweightable margin returns *not identified*. An interference gate: measured cross-border exposure beyond tolerance returns *not identified*. A sensitivity gate: a reweighted DiD that’s cleared the earlier gates but sits inside a band set at $`1.5`$ times the largest placebo-date contrast is a bounded null, an effect too small to separate from zero, while one that clears the band is a *bounded estimate*. Telling that bounded null from a *shared wave* is rung 2’s calendar-time test, not a rung-1 gate; the *descriptive* verdict of the full ladder, for a check that’s ambiguous rather than passed or failed, is the human judgment the automated routine leaves aside. The tolerances are fixed before any run and listed in the code.

<div id="tab:failuremap">

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

Operating characteristics of the decision ladder on the rung-1 design, four hundred replications per scenario (`rung-failure-map.py`, seeded; mid-range rates carry a couple of points of Monte Carlo error). FP is a false effect claim, FN a missed real effect.

</div>

Each run draws cell proportions for two varieties over twenty years on a log-odds scale, routes the synthetic series through the whole ladder, and counts a verdict as a misroute when it disagrees with the truth I set; “hidden share” is the fraction of the post-period shift placed outside the strata the reweighting can see, and the sparse case shrinks the treated cells to forty tokens. So the failures get mapped (Table <a href="#tab:failuremap" data-reference-type="ref" data-reference="tab:failuremap">2</a>), recording how often the ladder reaches the wrong verdict as each threat is turned up over four hundred replications.

Measured composition is reweighted away, but drift outside the reweighting strata is invisible, and the false-positive rate climbs from $`56\%`$ at a hidden share of $`0.3`$ to near-certainty by $`0.6`$. The sensitivity gate fails here too: the placebo benchmark it’s built from sits in periods the hidden drift never touches, so the bar stays low while the contrast jumps. The simulation makes Section <a href="#sec:diagnostics" data-reference-type="ref" data-reference="sec:diagnostics">6</a>’s limit quantitative: the bound catches a violation that leaves a footprint in the benchmark windows, and only that.

Thin cells destroy power: a real effect in a sparse variety is missed in $`94`$ runs of a hundred. Interference is caught when exposure is measured well and leaks an $`8\%`$ false-positive rate when it isn’t.

And selection into treatment timing, a control on its own trajectory, is observationally identical to a real effect in a two-group design. Rung 2’s calendar-time test catches only one version, a single synchronized wave; heterogeneous local waves, each moving its own polity’s timing, also produce date-aligned jumps and survive it. For a phenomenon driven that way the honest modal verdict is descriptive or not identified.

Read together, the simulations are sanity checks and a failure map, not a certificate that the method works. They mark the conditions under which a corpus DiD earns a bounded claim, and the conditions under which the verdict is descriptive or not identified.

## Rung 3: one institution, moving measurement

The third rung changes the comparison axis rather than the estimator. Trilingual Switzerland holds the polity and its federal policy fixed while language varies, so a contrast across the French-, German-, and Italian-speaking regions asks whether a change is language-internal (a francophone wave shared with France) or polity-driven (a Swiss federal endorsement felt in all three). Because the federal policy reaches every region, none is an untreated control for it: the cross-language contrast separates a language-internal trajectory from a polity-wide one, but a clean policy effect would need an outside, language-matched comparison or a triple difference, which is why this rung is a design variant, not a third two-group DiD.

One could reach for a triple difference, a DiD of two DiDs built to net out a second confound, French-Switzerland against French-France crossed with the within-Switzerland language regions, but the German and Italian arms have no francophone-wave-matched control, so the third difference wouldn’t subtract the wave cleanly, and the rung stays a probe of the measurement link rather than an identification device. The Federal Assembly’s *Bulletin officiel* is the natural home: one institution publishing in all three languages, digitized from 1891 and carrying full verbatim debates from 1971, so the 1991 window sits well inside the usable record and offers the within-country, language-varying counterfactual rungs 1 and 2 cannot.

But the register carries a cost, and the cost is the rung’s lesson. Parliamentary address is squarely on topic, *Madame la ministre* against *Madame le ministre* is a real chamber-floor variable, though the official record is a normalized transcription, not speech, with its own house style. If the transcription service adopts feminine forms on some date, the observed frequency jumps with no change in what members said: the measurement link of Figure <a href="#fig:threat-dag" data-reference-type="ref" data-reference="fig:threat-dag">1</a>, from latent rate to observed $`f`$, becomes the dominant path, a policy shock on the corpus rather than on usage. The diagnostic is to date the transcription convention independently and treat its change as a rival event. The speaker pool drifts too, since the share of women members rises across the period and with it the referent base the outcome conditions on.

# Conclusion

The discipline this paper asks for comes down to one refusal: not to read a corpus frequency as a population rate. Once that line holds, the rest follows. The observed contrast is the effect on the rate plus whatever the corpus filter contributed, so a causal claim needs the target population, the composition, the measurement, and the units of variation and inference pulled apart, with parallel trends asked of the rate and the filter both.

The payoff is not usually a clean effect. A corpus DiD is at its best when it pushes a causal claim downward, when the diagnostics turn an apparent effect into a shared wave, a measurement shock at a coding change, or a composition artifact, or show that it can’t be identified from the series at all. Each is an answer worth reporting, not a result to bury. But honesty cuts both ways: a downgrade earned against the evidence is a finding, while the same verdict forced only by thin data is a missed effect mistaken for a success, which is why the failure map counts false negatives as carefully as false positives.

Before-and-after corpus data can carry a causal claim, but only under conditions worth stating plainly. The treatment has to be a named act at a named date; the comparison has to make a counterfactual plausible rather than decorate the design; composition and measurement have to be held fixed on pre-committed non-policy margins, or shown not to move; and the result has to survive a sensitivity bound larger than any confound the setting plausibly supplies. Where those hold, the claim is a bounded estimate scoped to the register actually measured, not a fact about the language at large.

More often they don’t all hold, and then the output is smaller. A handful of identifying units leaves inference thin; treatment timing that tracks the same trend it’s meant to measure can’t be cleanly separated from an effect; composition or measurement drift that goes unmeasured survives every reweighting. None of that counts as a defect of the method; it’s the method reporting what the data can and cannot support, the report most worth having.

The feminization case carried these points without resting on any of them: a place to watch the apparatus work and break. The same apparatus travels to other shocks and other languages, as far as the corpora reach. When the next speakers arrive, a new medium spreads, a border moves, or a decree lands, and a corpus frequency shifts with it, the discipline turns the question from whether the line moved to what moved: the rate, the filter, the measurement, or only the warrant for the word *cause*. The apparatus offers no way to get more causal claims out of corpus data; it offers a way to tell which ones are worth trusting.

# Data and code availability

The simulations of Section <a href="#sec:worked" data-reference-type="ref" data-reference="sec:worked">8</a> are reproduced by three short Python scripts (standard library only, fixed random seeds), provided as supplementary material. The reported numbers reproduce exactly from the seeded scripts: `rung-failure-map.py` (seed 7) generates Table <a href="#tab:failuremap" data-reference-type="ref" data-reference="tab:failuremap">2</a> and the operating-characteristic rates quoted in the text, `rung1-recovery-sim.py` (seed 2024) the reweighting-recovery estimates, and `rung1-ladder-sim.py` (seed 12345) the decision-ladder routing check. No human-subjects data is used, and the corpora named in the worked example are illustrative rather than analyzed.

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

<div id="ref-SunAbraham2021" class="csl-entry">

Sun, Liyang, and Sarah Abraham. 2021. “Estimating Dynamic Treatment Effects in Event Studies with Heterogeneous Treatment Effects.” *Journal of Econometrics* 225 (2): 175–99.

</div>

<div id="ref-tagliamontedarcy2007" class="csl-entry">

Tagliamonte, Sali A., and Alexandra D’Arcy. 2007. “Frequency and Variation in the Community Grammar: Tracking a New Change Through the Generations.” *Language Variation and Change* 19 (2): 199–217. <https://doi.org/10.1017/S095439450707007X>.

</div>

<div id="ref-weinreich1968" class="csl-entry">

Weinreich, Uriel, William Labov, and Marvin I. Herzog. 1968. “Empirical Foundations for a Theory of Language Change.” In *Directions for Historical Linguistics*, edited by Winfred P. Lehmann and Yakov Malkiel. University of Texas Press.

</div>

</div>

[^1]: Contact: <brett.reynolds@humber.ca>
