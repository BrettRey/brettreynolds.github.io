---
title: "Beyond concordance: External validation of probabilistic grammar in the English dative alternation"
author: "Brett Reynolds"
year: "2026"
status: "Under review at Corpora"
canonical_url: "https://lingbuzz.net/lingbuzz/010132"
citation_handle: "lingbuzz/010132"
website_url: "https://brettreynolds.ca/papers/beyond-concordance-dative/"
markdown_url: "https://brettreynolds.ca/papers/beyond-concordance-dative/paper.md"
source_url: "https://github.com/BrettRey/bresnan-dative-alternation-reanalysis"
version: "author-manuscript mirror"
version_date: "2026-07-10"
keywords: ["dative alternation", "probabilistic grammar", "external validation", "cross-corpus transport", "calibration", "projectibility", "corpus linguistics"]
---

# Beyond concordance: External validation of probabilistic grammar in the English dative alternation

**Author-manuscript mirror.** This Markdown file is provided for accessibility, search, and machine readability. The canonical public record is `lingbuzz/010132`, linked in the metadata above.

## Abstract

This paper asks how far a corpus-based model of the English dative alternation can be carried beyond the corpus that produced it. If a model learned from the American data analysed by Bresnan et al. (2007) predicts whether speakers choose *give Kim the book* or *give the book to Kim*, does it still predict the choice in later British conversation, for instance in the Spoken British National Corpus 2014 (BNC2014)? Earlier studies show that dative models trained on one variety can rank or classify tokens in another. I ask the stricter question: whether the probabilities remain reliable, which parts of the conditioning carry over, and what that production probability can say about grammar. I freeze a languageR model and score it on BNC2014 with probability scoring, calibration, a BNC2014-trained comparison on the same rows, predictor-group ablation, missing-data sensitivity, and an explicit denominator. The source model ranks BNC2014 choices well, mainly because length, animacy, definiteness, and pronominality carry over better than verb base rates. But calibration, coefficient checks, and the BNC2014-trained comparison expose patterns that ranking alone hides. The model's probability is a conditional production probability among annotated alternation tokens, not a probability of grammaticality. It supports prediction for the shared high-frequency dative core while leaving grammatical but unattested forms to other evidence.

**Keywords:** dative alternation; probabilistic grammar; external
validation; cross-corpus transport; calibration; projectibility; corpus
linguistics

# The problem

A corpus-based probabilistic grammar should be tested outside the corpus
that produced it. For the English dative alternation, a model learned
from earlier American data predicts whether speakers choose *give Kim
the book* rather than *give the book to Kim*. Does the same fitted model
still predict the choice in other settings, for example in later British
conversation, as in BNC2014? Ranking tokens by their predicted
probability of an NP recipient is only a start: it doesn’t show whether
the probabilities are reliable, whether the same predictors matter in
the same way, or what the production probabilities can support about
grammar. This paper tests those distinctions by moving a fitted dative
production model to BNC2014.

Here, <span class="smallcaps">probabilistic grammar</span> names that
fitted production model, not a direct model of speakers’ competence or
of which forms a community licenses. The alternation itself is uneven.
Speakers can say *give Kim the book* or *give the book to Kim*, and the
choice varies with verb, length, animacy, definiteness, pronominality,
discourse status, corpus, and register. The unevenness is easy to
misread, because a rare pattern can be lexically restricted, strongly
dispreferred, or tied to a discourse context without falling outside the
grammar. Bresnan et al. (2007) modelled that conditioning and argued
that corpus probabilities can reveal grammatical possibilities informal
judgements miss.

Later work shows that the model travels: trained on one variety and
scored on another, it keeps much of its accuracy (Bresnan and Hay 2008;
Kendall et al. 2011; Engel et al. 2025). The question is how well it
travels under full predictive evaluation, and what a fitted production
probability can and can’t say about grammar. That’s
<span class="smallcaps">projectibility</span>: what a profile observed
in one setting licenses about another (Goodman 1955).

The paper separates questions that a single success score would merge.
First, can the classic production profile be reproduced in its original
data? Second, when that fitted model is frozen and used in BNC2014, does
it predict the NP/PP choice? Third, does a model trained inside BNC2014
do better on the same rows? Calibration and predictor-group tests then
ask what carries over: the ranking, the probability levels,
verb-specific base rates, or the broader length, animacy, definiteness,
and pronominality effects. Finally, a comparative-preference bridge asks
whether production probabilities and paired judgements order the same
verbs in the same way.

# The original target

Bresnan et al. (2007) is the anchor because it treats the alternation as
a grammatical problem, not a simple frequency count: the claim isn’t
that whatever occurs often is grammatical, but that observed choices
expose systematic constraints on what speakers treat as available. That
matters because informal judgements compress several diagnostics into
one feeling. A construction may sound odd because no viable analysis is
available, because a verb–construction pairing conflicts with an
established value, because the relevant discourse or communicative
situation is missing, because speakers have too little evidence to
settle a rare form’s status, because an established competitor keeps
winning where the form might otherwise appear, or because processing
pressure makes a recoverable structure feel bad. Corpus data, especially
when normalized to the relevant opportunity set and paired with
judgement evidence, can help sort these cases.

The empirical target is production choice. In Bresnan et al.’s data the
response is whether the recipient appears as a noun phrase (NP), in the
double-object pattern, or as a prepositional phrase (PP), in the
prepositional dative, with predictors for the verb, recipient, theme,
discourse status, and corpus. This paper preserves that target and
treats the production probability as evidence to interpret, not as a
direct measure of grammaticality.

# Data reproduction and reanalysis

The analysis starts with `languageR::dative`, distributed with the
Comprehensive R Archive Network (CRAN) `languageR` package (Baayen and
Shafaei-Bajestan 2025). The source tarball supplies the packaged
`dative.rda` object; the analysis scripts load it and write derived
summaries.

The package documentation identifies the sources as Switchboard and the
Treebank Wall Street Journal collection. Those sources place the
original data in American English: Switchboard is telephone conversation
among speakers from the United States, developed in 1990–1991 (Godfrey
and Holliman 1993), and the Treebank Wall Street Journal component is
late-1980s American news and financial writing (Marcus et al. 1999;
Charniak et al. 2000).

In the packaged dataset, there are 3,263 rows and 15 columns. The
response records recipient realization, with 2,414 NP realizations and
849 PP realizations. The dataset contains 75 verb levels and two
modalities: 2,360 spoken tokens and 903 written tokens. Speaker
identifiers are missing exactly for the written rows.

For the first model sequence, the response stays binary: NP is coded as
1 and PP as 0. The initial split is verb-stratified, with a fixed seed
(`20260623`), so every verb observed in the test set is also represented
in training. That split gives 2,637 training rows and 626 test rows.

The denominator is narrow. These rows begin after extraction has already
found a dative token with an NP or PP recipient. Transfer events
expressed through some other construction, omitted, paraphrased, or left
implicit are outside the sample. The models estimate conditional choice
within an attested alternation frame: given that a token enters the
dative-alternation sample, which realization appears?

Initial analyses are deliberately plain. A marginal model gives the base
rate; structured models then ask how much modality, length, verb, and
the non-verb predictors add. Negative-control and simulation checks ask
whether the fitted structure behaves like a real production signal
rather than chance patterning.

A second empirical source is the Spoken British National Corpus 2014
(BNC2014) dative dataset (Jenset and McGillivray 2018; Jenset and
McGillivray 2019). The verified Figshare comma-separated values (CSV)
file has 1,839 parsed data rows and 44 columns under a Creative Commons
Attribution 4.0 International (CC BY 4.0) licence.

The BNC2014 dative file comes from the Early-Access Subset of the Spoken
BNC2014, whose spontaneous conversations were recorded in 2012–2014 and
contain speaker and context metadata.

BNC2014 is the later corpus on which the American source model is
tested, not a second copy of `languageR::dative`. Its outcome field is
`Pattern`, where the verb–noun–noun code `VNN` maps to NP realization
and the verb–noun–prepositional-phrase code `VNPP` maps to PP
realization. The six verbs shared by the two datasets are *give*,
*send*, *show*, *sell*, *offer*, and *lend*.

# Re-evaluating the classic profile

Before the model moves to a new corpus, I re-fit the classic profile
under the evaluation the transport test will use: held-out probabilistic
scoring, and a hierarchical alternative to one coefficient per verb.
That’s a stricter test than in-sample evaluation, not a route to a
different answer, so the question is whether it changes Bresnan et al.’s
conclusion or only repackages it. Only the packaging changes. The table
uses three diagnostics to make that visible: log loss, area under the
receiver operating characteristic curve (AUC), and a count of
fixed-effect terms.

Two scores carry the paper, so it’s worth fixing what they measure. Log
loss rewards probabilities that are both confident and correct and
punishes confident mistakes; it’s lower-is-better and reaches zero only
for perfect prediction. AUC is the probability that a randomly chosen NP
token is scored above a randomly chosen PP token, so 0.5 is chance and 1
is perfect ranking. It’s the measure earlier dative-transport studies
report as a concordance index or $`C`$; the two names denote one
quantity. AUC captures only
<span class="smallcaps">discrimination</span>, the ranking of tokens;
log loss also responds to <span class="smallcaps">calibration</span>,
whether the predicted probabilities match observed rates. Those are
separate achievements, which is why both are reported.

All models predict whether the recipient is realized as NP rather than
PP. They are logistic regressions with no interactions. The marginal
null uses only the training-set NP rate, so it’s the base-rate
benchmark. The non-verb model adds modality, semantic class, length,
animacy, definiteness, pronominality, and accessibility, but omits verb
identity. It asks whether the classic non-lexical profile predicts
realization without lexical information.

Two lexical models then ask whether verb-specific biases add anything.
The fixed-verb model gives each verb its own coefficient, so each verb
can have a different baseline preference for NP versus PP. The
hierarchical model gives each verb a varying intercept drawn from a
common verb distribution. That’s partial pooling: rare verbs are pulled
toward the overall verb mean, while better-attested verbs can differ
more. If this model matches fixed verb effects, the lexical signal
survives regularization.

| Model                             | Test log loss | Test AUC | Fixed terms |
|:----------------------------------|--------------:|---------:|------------:|
| Marginal null                     |         0.554 |    0.500 |           1 |
| Non-verb main model               |         0.271 |    0.932 |          18 |
| Fixed-verb full model             |         0.234 |    0.951 |          92 |
| Hierarchical verb-intercept model |         0.233 |    0.952 |          18 |

Held-out `languageR::dative` results for the main model sequence.
{#tab:languager-results}

The non-verb model already predicts held-out production choices well.
Adding fixed verb effects improves test log loss from 0.271 to 0.234 and
raises AUC from 0.932 to 0.951. The improvement confirms that lexical
conditioning is not a minor residue after length, animacy, definiteness,
pronominality, and accessibility are included.

Partial pooling reaches almost the same held-out performance with far
fewer fixed-effect terms: the hierarchical model’s test log loss is
0.233 and its AUC is 0.952. It estimates 18 fixed-effect terms plus a
single verb-intercept variance, instead of one coefficient for each of
the 75 verbs. The estimated verb random-intercept standard deviation is
2.106, so the lexical signal remains large under partial pooling.

Negative-control and simulation checks behave as they should.
Scrambled-label fits lose predictive value. Fake-data fits with no verb
signal drive the estimated verb variance to zero, while a fake
verb-effect check recovers a nonzero one. These checks make the
production result more credible, but they don’t change its explanatory
level.

The result supports Bresnan et al.’s production-choice conclusion. By
itself, the same-data analysis shows reproducibility and statistical
stability. What it can’t show is whether the pattern holds once the
model leaves the corpus that produced it.

# Cross-corpus transport

The BNC2014 analysis takes up the question from the outset: does the
fitted model, learned from earlier American data, still predict the
NP/PP choice in later British conversation? I train the model on spoken
`languageR` rows for the six verbs that also appear in BNC2014, then
score it on the BNC2014 rows where the shared predictors can be
reconstructed. The restriction to those complete rows matters because it
defines exactly which BNC2014 tokens the prediction claim is about.

Three questions stay separate. The `languageR` models estimate whether
an attested dative token appears with an NP or PP recipient. The BNC2014
test asks how well that fitted production model predicts comparable rows
in a new corpus. The supplementary DAIS bridge asks a different question
again: whether paired human preferences over constructed DO/PO sentences
line up with the production model.

Prior work has already tested dative models out of domain. Bresnan and
Hay (2008) extended the Bresnan et al. (2007) analysis to spoken New
Zealand English; Kendall et al. (2011) trained a model on the Bresnan et
al. (2007) data and predicted the alternation in African American
English, then reversed the direction, reporting concordance indices of
0.97 and 0.95; and Engel et al. (2025) trained separate English and
Dutch models and tested each on the other language. Bresnan and Ford
(2010) and Röthlisberger et al. (2017) document broad cross-variety
stability by other means. Together, these studies show that dative
conditioning can travel and that one variety’s model can be scored on
another. The present contribution lies in what gets evaluated after the
model is moved.

Those studies show that a dative model can often choose the right
variant in a new setting. They leave open whether its probabilities are
at the right level, how much a model trained inside the new corpus would
improve on it, which parts of the grammar carry the prediction, and how
missing data limits the claim.

I add those checks: probability scoring, calibration, a model trained in
BNC2014 on identical rows, predictor group ablation, missing-data
sensitivity, and a stated denominator. The open harmonization record
keeps each step checkable.

Several real differences are bundled into the test. The source side is
American telephone conversation from 1990–1991, restricted to the six
shared spoken `languageR` verbs. The target side is spontaneous British
conversation from 2012–2014, mostly intimate face-to-face conversation,
under a different annotation and extraction scheme. Those six verbs
account for 2,201 of 3,263 `languageR` rows and for 1,564 of 2,360
spoken rows. They’re the high-frequency core, not a random sample of the
alternation.

The transport models are logistic regressions. The core formula is
``` math
\begin{aligned}
\Pr(\textrm{NP}) \sim{}&
  \textrm{Verb} + \textrm{recipient length} + \textrm{theme length} \\
&+ \textrm{recipient animacy} + \textrm{recipient pronominality} \\
&+ \textrm{theme animacy} + \textrm{theme definiteness}
  + \textrm{theme pronominality}.
\end{aligned}
```

I keep the formula intentionally plain. Lengths are raw word counts,
with no centering, scaling, or logging. Each coefficient is read against
a reference level, *give* for the verb and “no” for the binary
predictors. There are no interactions in the transport models.

Before BNC2014 is scored, factor levels and coding are fixed from the
source analysis; the headline model uses no BNC2014-specific scaling or
imputation. Recipient definiteness is unavailable in BNC2014 and enters
only as a labelled regex proxy in a sensitivity check. The validation is
retrospective in the ordinary corpus sense: the target corpus informed
the harmonization, common-predictor set, and six-verb restriction, while
the fitted coefficients remain source-trained.

Harmonization loses information unevenly. The outcome maps cleanly at
the pattern level: `VNN` becomes NP and `VNPP` becomes PP. Verb also
maps cleanly once the analysis is restricted to the six shared verbs.
Length is the difficult case. In the released BNC2014 file, `RecLen` and
`ThemeLen` are character counts, defined in the data dictionary as the
number of characters in the recipient and theme (Jenset and McGillivray
2019). Those fields measure character length, whereas `languageR` uses
token-like length measures.

The scripts derive recipient and theme word counts from the released
phrase strings. Rows with empty phrase strings fall outside the
transport model, which uses only complete cases, rows with every
predictor present. The harmonized analysis still treats the two
extraction protocols as distinct.

The source and target also differ in composition. In the six-verb spoken
source rows, *give* accounts for 0.808 of tokens and *send* for 0.089;
in the BNC2014 complete cases the corresponding shares are 0.450 and
0.300. Recipients are usually pronominal in both corpora, but recipient
animacy is lower in BNC2014 (0.837, versus 0.943 in the source), and
themes are shorter on average (2.43 versus 3.68 words). Together, these
differences define the population shift against which transport is being
tested.

The complete-case restriction matters. The core transport model scores
1,621 of the 1,839 released BNC2014 dative rows. The missing rows are
outcome-skewed: NP recipients make up 0.819 of the complete rows but
only 0.670 of the 218 incomplete rows. The variable-level pattern is
also uneven. Recipient pronominality is missing for 112 rows with NP
rate 0.357, while theme pronominality is missing for 139 rows with NP
rate 0.950. The headline comparison is a complete-case estimate over the
shared high-frequency core.

A BNC2014 metadata audit describes the population being tested: the
released dative rows are predominantly UK English (1,720 of 1,839), skew
female (1,138) and young (the 19–29 band is the largest), and are
dominated by close-family, partner, and very-close-friend conversations
(1,171 rows). The complete-case subset keeps the same shape, so a single
BNC2014 score describes this released corpus slice, not British spoken
English in general.

The public BNC2014 release also limits how strong the BNC2014-trained
comparison can be. The supporting scripts show that an intermediate
`main_speaker_id` was derived and selected, but it was dropped before
the public 44-column CSV. No stable speaker, text, or conversation
identifier is recoverable from the released files. I can hold out rows,
but I can’t hold out whole conversations. The comparison below still
repairs the old sample mismatch: source-trained and BNC2014-trained
predictions are scored on the same 1,621 rows, with the AUC gap computed
fold by fold. Within-conversation dependence remains.

The model comparison asks where portability comes from. The marginal
model gives every target row the same probability. The verb-only model
asks whether six-verb base rates travel. The non-verb model omits verb
but keeps the harmonized length, animacy, definiteness, and
pronominality predictors, asking whether broad conditioning relations
travel. The full core combines both.

There are two versions of each family. The source version is fit on
`languageR` and scored unchanged on BNC2014. The BNC2014-trained version
is fit inside BNC2014 and predicts held-out BNC2014 rows, giving a
within-corpus comparison for the same BNC2014 rows.

Table <a href="#tab:bnc-transport" data-reference-type="ref"
data-reference="tab:bnc-transport">2</a> asks three questions on those
same rows: whether the source model beats a target marginal baseline,
whether training on BNC2014 does better, and whether the carried-over
prediction comes from verb identity or from the non-lexical predictors.

| Origin             | Model family | Log loss |   AUC |
|:-------------------|:-------------|---------:|------:|
| `languageR` source | marginal     |    0.473 | 0.500 |
| `languageR` source | verb only    |    0.456 | 0.646 |
| `languageR` source | non-verb     |    0.296 | 0.899 |
| `languageR` source | full core    |    0.308 | 0.906 |
| BNC2014 native     | marginal     |    0.473 | 0.500 |
| BNC2014 native     | verb only    |    0.439 | 0.625 |
| BNC2014 native     | non-verb     |    0.234 | 0.928 |
| BNC2014 native     | full core    |    0.227 | 0.939 |

Same-row BNC2014 complete-case evaluation. All rows are the same 1,621
BNC2014 complete-case observations. The BNC2014-trained rows use
repeated verb-stratified row-level cross-validation because the released
file carries no speaker or conversation identifier. BNC2014-trained AUC
is averaged within each held-out fold, with the source prediction scored
on the same held-out fold for the AUC gap; log loss is pooled.
Within-conversation dependence remains. {#tab:bnc-transport}

The American source model still carries useful information about
BNC2014, and almost all of it comes from the shared non-lexical
conditioning
(Table <a href="#tab:bnc-transport" data-reference-type="ref"
data-reference="tab:bnc-transport">2</a>). The full source model
improves sharply on the source marginal baseline, and a paired row
bootstrap puts that gain well clear of zero. Verb identity alone barely
beats the baseline; the non-verb model, with length, animacy,
definiteness, and pronominality, does nearly all the work, and adding
source verb terms to it shifts ranking only slightly. In BNC2014,
lexical base-rate ordering adds little beyond the portable non-lexical
effects.

Figure <a href="#fig:coef-transport" data-reference-type="ref"
data-reference="fig:coef-transport">1</a> shows which parts travel.
Fitting the same full formula separately to the source core and the
BNC2014 complete cases gives the same sign for ten of the twelve
non-intercept terms: recipient and theme length, and recipient and theme
pronominality, keep both their direction and roughly their size. Only
two signs reverse, recipient animacy and theme definiteness, and they’re
among the weaker terms. The sharpest lexical shift is *offer*: its
strong source penalty against the NP recipient nearly disappears in
BNC2014. So the transport claim is bounded but real: length and
pronominality, and much of animacy, stay predictively useful under a
substantial corpus shift.

<figure id="fig:coef-transport" data-latex-placement="htbp">
<embed src="data/derived/figures/bnc2014_coefficient_transport.pdf"
style="width:82.0%" />
<figcaption>Coefficient transport on the log-odds scale: the full model
fitted separately to the American source core and to the BNC2014
complete cases. Each term joins its source estimate (circle) to its
BNC2014-trained estimate (diamond), with the vertical line at zero. Ten
of the twelve terms keep their sign; the two that cross zero, recipient
animacy and theme definiteness, are the reversals. Length and
pronominality keep their direction and size, while the source
<em>offer</em> penalty collapses toward zero.</figcaption>
</figure>

BNC2014 still has patterns the source model misses. On the identical
rows, the BNC2014-trained full model has log loss 0.227 and a
fold-averaged AUC of 0.939. Against the source full model scored on the
same held-out folds, its log loss is lower by 0.081 (paired row
bootstrap $`[-0.104,\allowbreak -0.059]`$) and its fold-averaged AUC is
higher by 0.032 (fold bootstrap $`[0.025,0.039]`$); the source
fold-averaged AUC in that matched comparison is 0.906. The
BNC2014-trained non-verb model is already close to the BNC2014-trained
full model, which reinforces the same interpretation: broad length,
animacy, definiteness, and pronominality effects are portable, but
BNC2014 supplies its own calibration, annotation-regime adaptation, and
remaining corpus-specific patterning.

Verb-by-verb calibration (supplementary
Figure <a href="#fig:bnc-calibration" data-reference-type="ref"
data-reference="fig:bnc-calibration">4</a>) shows where the source model
misses: the source full model underpredicts NP realization for *send*,
*offer*, and *lend*, and overpredicts it for *sell*. Recalibrating the
transported predictions on these same rows gives the source model every
advantage, because it’s a best-case diagnostic rather than an
out-of-sample result. Even so, the best recalibration stays short of the
BNC2014-trained full model. The calibration slope measures how stretched
the probabilities are: 1 is correct, and below 1 means they run too
extreme. Refitting the average level alone barely helps (log loss 0.308
to 0.301); refitting level and slope together pulls the slope to 0.73,
confirming the source probabilities are overconfident, and lowers log
loss to 0.290. Even this best case stays above the BNC2014-trained
model’s 0.227, so the remaining gap is more than a global prevalence
shift.

Across the probability range the miscalibration is easier to see than
verb by verb.
Figure <a href="#fig:bnc-reliability" data-reference-type="ref"
data-reference="fig:bnc-reliability">2</a> bins predictions against
observed rates: the transported source model departs from the diagonal
while the BNC2014-trained model tracks it. The two models discriminate
similarly but are calibrated differently, which is the property a
concordance index can’t show.

<figure id="fig:bnc-reliability" data-latex-placement="htbp">
<embed
src="data/derived/figures/bnc2014_transport_calibration_curve.pdf"
style="width:66.0%" />
<figcaption>Reliability diagram on the BNC2014 complete-case rows.
Points are binned observed noun phrase (NP) recipient rates against mean
predicted probability, with marker size proportional to bin count. The
transported source model departs from the diagonal (its fitted
intercept-and-slope recalibration has slope 0.73), while the
BNC2014-trained model sits closer to it. Discrimination and calibration
are different properties.</figcaption>
</figure>

Missingness could matter in two ways: it changes which predictors are
available and which rows are scored. A matched check separates them.
Only three predictors are observed for every BNC2014 row, so the reduced
common-predictor model keeps verb, theme animacy, and theme
definiteness. A model restricted to those predictors loses the transport
result: on the 1,621 complete-case rows it scores 0.562 log loss and
0.510 AUC, worse than the source marginal baseline’s 0.473
(Table <a href="#tab:bnc-transport" data-reference-type="ref"
data-reference="tab:bnc-transport">2</a>) and far short of the full
model’s 0.308. Expanding that same reduced model from the complete-case
rows to all 1,839 released rows changes performance much less (log loss
0.562 to 0.586, AUC 0.510 to 0.523) than the predictor reduction itself.

The claim depends principally on the availability of the recipient and
length predictors; the denominator shift from 1,621 to 1,839 rows is the
smaller issue.

# What the probabilities can and can’t show

The BNC2014 scores can be misunderstood unless the denominator is
explicit. The fitted probability is, approximately,
``` math
P\!\left(\textrm{NP recipient} \mid \textrm{a token entered the annotated NP/PP dative sample}\right),
```
not the probability that a double-object form is grammatical, and not
the probability that a transfer event is realized as a dative at all.
The corpus rows are already tokens in which a recipient was realized as
an NP or a PP. Contexts in which a transfer event could have been
expressed, paraphrased, left implicit, or judged belong to a broader
opportunity set. The models estimate conditional choice inside an
attested alternation frame.

<figure id="fig:opportunity-sets" data-latex-placement="htbp">
<embed src="data/derived/figures/opportunity_sets_nested.pdf"
style="width:86.0%" />
<figcaption>Nested denominators for the dative target quantity. The
released corpus rows fix realization choice inside the annotated noun
phrase/prepositional phrase sample, the innermost set. The broader
transfer-event and judgement sets are different denominators that answer
different questions; reaching them is an inferential step to a new
target, not a larger sample of the same one.</figcaption>
</figure>

That denominator bounds the successful transport result. The
conditioning relations in the profile, the effects of pronominality,
length, animacy, and definiteness, are projectible in Goodman’s sense
(Goodman 1955): the kind of generalization that supports projection to
new cases. Transport is the empirical test of that projection in a
particular corpus. A relation can be projectible and still travel poorly
under a population shift.

Within its demonstrated scope, the production model forecasts
realization for unseen tokens among the verbs, registers, and varieties
it covers. It stays silent, by construction, about grammatical but
unattested cases. Once the sampling design $`D_0`$ fixes the opportunity
set, counting harder doesn’t move its boundary. More tokens make the
recorded NP/PP region denser and can fill cells that were only sampling
zeros, but they can’t record an opportunity the design never exposes,
and from positive tokens alone they can’t tell a structural zero from a
sampling zero. That’s an observational-identification limit, not a
verdict that production evidence is useless. A broader denominator,
elicited production, novel-item productivity tests, or judgement data
can each add information about the otherwise empty cells.

The DAIS comparative-preference channel illustrates the last route and
its limits. DAIS participants compared the double-object and
prepositional-object variants of each constructed pair, rather than
rating one sentence’s absolute acceptability. That makes DAIS a
paired-preference target, not a direct grammaticality target. The bridge
shows moderate marginal rank correspondence and little incremental
production-score contribution once the manipulated recipient, theme, and
verb conditions are represented directly. After marginal
production–preference calibration, the clearest verb-level residuals go
in opposite directions: *offer* is more double-object-favouring in DAIS
than the production score predicts, while *sell* is less so. Validity is
relative to a target; carrying it across channels requires a new
validation claim.

The dative case also shows why one score is too thin. A moved model can
rank the two variants well and still put the probabilities at the wrong
level, miss a verb-specific shift, or depend on rows that don’t
represent the corpus evenly.
Table <a href="#tab:validation-ladder" data-reference-type="ref"
data-reference="tab:validation-ladder">3</a> lays out a validation
ladder for keeping those failures separate. It borrows from
prediction-model validation, especially the separation of discrimination
from two aspects of calibration, the overall level
(calibration-in-the-large) and the slope (Van Calster et al. 2016), and
from the variationist insistence that a variable be analysed inside a
defined envelope of variation (Weinreich et al. 1968; Labov 1972).

In this case, the source model ranks BNC2014 choices well, but an
intercept-and-slope recalibration still leaves it worse-calibrated than
a BNC2014-trained fit. A prevalence shift alone can’t explain the gap.
Reporting only discrimination, as a concordance index or an accuracy,
would have hidden that.

| Stage | Data | Diagnostic | Licensed conclusion |
|:---|:---|:---|:---|
| Source reproduction | Source corpus | Held-out log loss and AUC against nulls | The source profile is real and reproducible |
| Within-source validation | Source corpus | Partial pooling, negative controls | Lexical and non-lexical signals survive overfitting checks |
| Frozen external scoring | Target corpus | Log loss and AUC against the target marginal | The profile carries predictive information out of domain |
| External calibration | Target corpus | Calibration intercept and slope | Whether the levels are right, not just the ranking |
| Target-trained comparison | Target corpus | Same-row paired loss differences | How much BNC2014-specific patterning the source model misses |
| Predictor-group ablation | Both | Marginal, verb-only, non-verb, and full contrasts | Which part of the profile transports |
| Opportunity-set audit | Target corpus | Denominator and missingness map | What quantity the predictions estimate |

A validation ladder for a corpus-based probabilistic grammar. Each stage
has its own diagnostic and licenses a different conclusion, and a model
can pass some rungs while failing others. {#tab:validation-ladder}

Other alternations can use the same sequence when the preconditions are
met: two corpora sharing a harmonizable categorical alternation, an
annotated outcome, and a lexical core large enough to fit and to score
on. Its limits carry over too. The comparison is testable only where the
corpora intersect, so the periphery of an alternation goes unevaluated;
preprocessing learned on the source has to be frozen before the target
is scored; and the released data set the ceiling on how honestly
dependence can be handled.

The Spoken BNC2014 release makes the last point concrete. Because the
public file omits the speaker and conversation identifiers needed for
grouped resampling, the BNC2014-trained comparison tests held-out rows
rather than held-out conversations. That ceiling belongs to the data
release. The row bootstrap and Wilson intervals reported above are
conditional row-level intervals: they reflect test-row resampling around
the fitted predictions, without source-model estimation uncertainty or
within-conversation dependence, which probably makes them too narrow.

So the analyses license a cautious, well-scoped claim. The Bresnan et
al. production-conditioning pattern is durable and partly transportable
within the shared high-frequency core; its non-lexical component travels
better than its lexical base rates; and a BNC2014-trained model still
recovers patterns the source model misses. The validated model predicts
NP/PP realization for the tested corpus slice and marks low-probability
cells where grammaticality, if it’s at issue, has to be settled through
another channel and another paper.

# Conclusion

The dative result is mixed in an informative way. A model trained on the
`languageR` version of Bresnan et al.’s data still helps predict BNC2014
choices, especially through length, animacy, definiteness, and
pronominality. Verb base rates travel less cleanly, and a model trained
inside BNC2014 still gives better probabilities on the same rows.

The same-data checks remain important. The `languageR` profile survives
baselines, negative controls, simulation checks, and partial pooling,
and the hierarchical model matches the fixed-verb model with fewer
fixed-effect terms. The stricter re-evaluation confirms the classic
production-choice conclusion rather than revising it.

The coefficient comparison points the same way while exposing limits:
length and pronominality travel more cleanly than every verb effect or
definiteness proxy. The verdict is bounded. The source model beats null
comparisons in the high-frequency core, while variety, period, register,
annotation, extraction protocol, and missingness stay bundled.

That contrast is visible because the evaluation goes beyond concordance.
Earlier transport studies report discrimination or accuracy; probability
scoring, calibration, a BNC2014-trained comparison on the same rows,
predictor-group ablation, and missing-data sensitivity distinguish
ranking new tokens from assigning calibrated probabilities to them. The
contribution is a template for other alternations under the
preconditions set out above, with no assumption that all alternations
behave the same way.

The denominator keeps the grammaticality claim honest. The fitted
probability is a conditional production choice inside an annotated
alternation sample, not a probability of grammaticality. A validated
production model forecasts NP/PP realization in the tested corpus slice
and stays silent, by construction, about the grammatical-but-unattested
region. Crossing that boundary needs a broader opportunity set or
another evidence channel. The DAIS supplement gives one compact
illustration: production probability and paired judgement preference are
related, but the relation is target-relative rather than automatic.

# Data and code availability

The public working repository is
[`BrettRey/bresnan-dative-alternation-reanalysis`](https://github.com/BrettRey/bresnan-dative-alternation-reanalysis).
The exact submitted version will be archived as a tagged release or
identifier-bearing repository snapshot.

The analysis scripts fetch public datasets to temporary locations and
validate downloaded files by their MD5 (message-digest 5) checksums.

<div class="center">

| File                       | MD5                                |
|:---------------------------|:-----------------------------------|
| BNC2014 CSV                | `1c041dbcb635855f3d8f4be9f3e1fced` |
| DAIS item CSV              | `46af310f1633b8784f897e4482faed84` |
| DAIS cleaned-judgement ZIP | `e7b3ac6f2dd8e85bc93e6e20fc0f6ec1` |

</div>

Derived files and the source-verification note are stored in the
repository; the README gives their paths. The principal reproduction
commands are:

> `Rscript analysis/08_dais_acceptability_bridge.R`\
> `Rscript analysis/09_bnc2014_metadata_scope.R`\
> `Rscript analysis/10_bnc2014_paired_transport_cv.R`\
> `python3 analysis/06_denominator_and_figure_candidates.py`\
> `make`

The cross-validation and bootstrap seed is `20260625`. Session
information is written to a derived text file. Raw DAIS files aren’t
committed.

# Acknowledgements

OpenAI Codex and Anthropic Claude assisted with drafting, coding, and
review. They weren’t used to create or manipulate submitted figures,
images, or research data. All analysis decisions, source checks, and
final text remain the author’s responsibility.

# Supplementary material: verb-level transport calibration

Figure <a href="#fig:bnc-calibration" data-reference-type="ref"
data-reference="fig:bnc-calibration">4</a> gives the verb-level detail
behind the reliability diagram in the main text
(Figure <a href="#fig:bnc-reliability" data-reference-type="ref"
data-reference="fig:bnc-reliability">2</a>). It compares observed NP
recipient rates with the transported source model’s mean predictions and
with the BNC2014-trained model’s, verb by verb, on the same
complete-case rows.

<figure id="fig:bnc-calibration" data-latex-placement="htbp">
<embed
src="data/derived/figures/bnc2014_transport_calibration_by_verb.pdf" />
<figcaption>Verb-level calibration for the transported source full model
and the BNC2014-trained held-out model on the same complete-case rows.
Black points and intervals are observed NP recipient rates with binomial
Wilson intervals, unadjusted for conversational clustering; coloured
triangles are mean predictions.</figcaption>
</figure>

# Supplementary material: the DAIS comparative-preference bridge

DAIS asks a neighbouring question: when participants see double-object
and prepositional-object versions of the same constructed item, do their
preferences follow the corpus model’s production probabilities? This
bridge is supplementary to the external-validation result and is
reported for completeness rather than as part of the paper’s main claim.

The Dative Alternation and Information Structure (DAIS) dataset,
introduced by Hawkins et al. (2020b), contains 50,000 human judgements
over 5,000 dative sentence pairs and systematically varies verb,
definiteness, and argument length. Participants saw both variants of
each pair together and used a slider to indicate their relative
preference for the double-object (DO) variant over the
prepositional-object (PO) variant, with the midpoint labelled “about the
same”. DAIS gives comparative preference conditioned on a pair, not an
absolute acceptability rating of an individual sentence. The repository
carries a CC BY 4.0 licence, and the dataset authors have given explicit
permission to reuse the judgements, so DAIS can enter as a compact
bridge (Hawkins et al. 2020a).

The bridge keeps the targets separate. I score only the 150 DAIS items
whose verbs overlap the six-verb production core. The transported spoken
`languageR` model gives each constructed pair an NP-recipient production
probability. The DAIS item mean gives the corresponding human paired DO
preference, preference for the same NP-recipient form over its PO
counterpart, on a 0–1 scale. Those two values measure different
quantities: conditional realization among attested corpus tokens and
pairwise slider preference in constructed items. The bridge asks whether
they rank items similarly, and where they depart after marginal
calibration.

The cleaned DAIS responses use integer values from 0 to 100 and are
scaled here by division by 100. The shared-verb subset contains 1,525
judgement rows from 923 participants over 150 constructed items. Item
support ranges from 6 to 14 judgements, with a median of 10; the mean
item-level standard error is 0.082 on the 0–1 response scale.

<figure id="fig:dais-bridge" data-latex-placement="htbp">
<embed src="data/derived/figures/dais_production_preference_bridge.pdf"
style="width:82.0%" />
<figcaption>DAIS production/preference bridge for the six shared verbs.
Each point is a constructed DAIS item. The horizontal axis is the spoken
<code>languageR</code> model’s NP recipient probability; the vertical
axis is DAIS paired DO preference. No equality line is shown because the
axes are different measurement scales: corpus production probability and
comparative slider preference. Points are coloured by verb.</figcaption>
</figure>

| Verb    | Prod. rank | DAIS rank | Calib. resid. |
|:--------|-----------:|----------:|--------------:|
| *show*  |          1 |         1 |        -0.005 |
| *give*  |          2 |         3 |        -0.036 |
| *sell*  |          3 |         6 |        -0.070 |
| *lend*  |          4 |         5 |         0.015 |
| *send*  |          5 |         4 |         0.020 |
| *offer* |          6 |         2 |         0.077 |

DAIS bridge for the six shared verbs. Ranks order verbs from strongest
to weakest NP/DO preference within each channel. The residual column is
mean DAIS paired preference after marginal calibration on production
probability; positive values mean more DO preference than the marginal
production–preference relation predicts. {#tab:dais-bridge}

The two channels line up moderately, while remaining distinct. With
*something* treated as a pronominal theme, Pearson’s $`r`$ is 0.667 and
Spearman’s $`\rho`$ is 0.685 over the 150 shared-verb items. Treating
*something* as nonpronominal gives the same rank-based interpretation
($`r = 0.645`$, $`\rho = 0.675`$). The raw difference between the
production-probability level and the DAIS slider level would be a
misleading absolute calibration error, because the midpoint-labelled
comparative scale compresses item means toward 0.5 and uses a different
measurement scale from a corpus production probability.

The item and participant checks show why the raw correlation needs a
cautious reading. At the item level, a marginal calibration regression
has a positive slope, but once recipient condition, theme type, and verb
are represented directly, the production-score slope is essentially zero
(0.006, standard error 0.078).

A judgement-level mixed model gives the same caution. It predicts the
scaled comparative slider response from production score, recipient
condition, theme type, and verb, with random intercepts for participant
and constructed item. The incremental production-score coefficient is
0.017 (standard error 0.076; approximate interval $`[-0.132,0.165]`$).
DAIS preference and production probability show moderate marginal rank
correspondence, much of it attributable to shared sensitivity to the
manipulated predictors; the production score adds little once those
predictors are represented directly.

The useful cases are calibrated divergences, not isolated raw gaps.
After a marginal production–preference calibration, the verb-level
residual is 0.077 for *offer* (bootstrap interval 0.027 to 0.129) and
$`-0.070`$ for *sell* (interval $`-0.119`$ to $`-0.027`$). The point is
channel separation: two comparative measures defined over the same
alternation frame can preserve moderate rank correspondence while still
disagreeing in calibrated, verb-specific ways.

<div id="refs" class="references csl-bib-body hanging-indent">

<div id="ref-BaayenShafaeiBajestan2025languageR" class="csl-entry">

Baayen, R. Harald, and Elnaz Shafaei-Bajestan. 2025.
*<span class="nocase">languageR</span>: Data Sets and Functions with
Analyzing Linguistic Data*.
<https://cran.r-project.org/package=languageR>.

</div>

<div id="ref-bresnan2007" class="csl-entry">

Bresnan, Joan, Anna Cueni, Tatiana Nikitina, and R. Harald Baayen. 2007.
“Predicting the Dative Alternation.” In *Cognitive Foundations of
Interpretation*, edited by Gerlof Bouma, Irene Krämer, and Joost Zwarts.
Royal Netherlands Academy of Arts; Sciences.

</div>

<div id="ref-BresnanFord2010" class="csl-entry">

Bresnan, Joan, and Marilyn Ford. 2010. “Predicting Syntax: Processing
Dative Constructions in American and Australian Varieties of English.”
*Language* 86 (1): 168–213.

</div>

<div id="ref-BresnanHay2008" class="csl-entry">

Bresnan, Joan, and Jennifer Hay. 2008. “Gradient Grammar: An Effect of
Animacy on the Syntax of Give in New Zealand and American English.”
*Lingua* 118 (2): 245–59.

</div>

<div id="ref-CharniakEtAl2000BLLIPWSJ" class="csl-entry">

Charniak, Eugene, Don Blaheta, Niyu Ge, Keith Hall, John Hale, and Mark
Johnson. 2000. “BLLIP 1987–89 WSJ Corpus Release 1.” Linguistic Data
Consortium. <https://doi.org/10.35111/fwew-da58>.

</div>

<div id="ref-EngelEtAl2025" class="csl-entry">

Engel, Alexandra, Elsy Andries, Laura Rosseel, Benedikt Szmrecsanyi, and
Freek Van de Velde. 2025. “Constraints and Lexical Conditioning in the
Dative Alternation: A Cross-Linguistic Analysis of English and Dutch.”
*Languages in Contrast* 25 (2): 263–88.
<https://doi.org/10.1075/lic.00052.eng>.

</div>

<div id="ref-GodfreyHolliman1993Switchboard1" class="csl-entry">

Godfrey, John J., and Edward Holliman. 1993. “Switchboard-1 Release 2.”
Linguistic Data Consortium. <https://doi.org/10.35111/sw3h-rw02>.

</div>

<div id="ref-Goodman1955" class="csl-entry">

Goodman, Nelson. 1955. *Fact, Fiction, and Forecast*. Harvard University
Press.

</div>

<div id="ref-HawkinsYamakoshiGriffithsGoldberg2020DAIS"
class="csl-entry">

Hawkins, Robert, Takateru Yamakoshi, Thomas Griffiths, and Adele
Goldberg. 2020a. “<span class="nocase">Dative Alternation and
Information Structure</span> (DAIS) Judgements.”
<https://github.com/taka-yamakoshi/neural_constructions>.

</div>

<div id="ref-HawkinsYamakoshiGriffithsGoldberg2020VerbBias"
class="csl-entry">

Hawkins, Robert, Takateru Yamakoshi, Thomas Griffiths, and Adele
Goldberg. 2020b. “Investigating Representations of Verb Bias in Neural
Language Models.” *Proceedings of the 2020 Conference on Empirical
Methods in Natural Language Processing (EMNLP)*, 4653–63.
<https://doi.org/10.18653/v1/2020.emnlp-main.376>.

</div>

<div id="ref-JensetMcGillivray2019Dative" class="csl-entry">

Jenset, Gard B., and Barbara McGillivray. 2019. “Data from ‘The Dative
Alternation Revisited: Fresh Insights from Contemporary British Spoken
Data’.” *Journal of Open Humanities Data* 5 (1).
<https://doi.org/10.5334/johd.11>.

</div>

<div id="ref-JensetMcGillivray2018BNCData" class="csl-entry">

Jenset, Gard, and Barbara McGillivray. 2018. “Data from ‘The Dative
Alternation Revisited: Fresh Insights from Contemporary British Spoken
Data’.” Figshare. <https://doi.org/10.6084/m9.figshare.7353164.v6>.

</div>

<div id="ref-KendallBresnanVanHerk2011" class="csl-entry">

Kendall, Tyler, Joan Bresnan, and Gerard Van Herk. 2011. “The Dative
Alternation in African American English: Researching Syntactic Variation
and Change Across Sociolinguistic Datasets.” *Corpus Linguistics and
Linguistic Theory* 7 (2): 229–44.
<https://doi.org/10.1515/cllt.2011.011>.

</div>

<div id="ref-labov1972" class="csl-entry">

Labov, William. 1972. *Sociolinguistic Patterns*. University of
Pennsylvania Press.

</div>

<div id="ref-MarcusSantoriniMarcinkiewiczTaylor1999Treebank3"
class="csl-entry">

Marcus, Mitchell P., Beatrice Santorini, Mary Ann Marcinkiewicz, and Ann
Taylor. 1999. “Treebank-3.” Linguistic Data Consortium.
<https://doi.org/10.35111/gq1x-j780>.

</div>

<div id="ref-RothlisbergerGrafmillerSzmrecsanyi2017" class="csl-entry">

Röthlisberger, Melanie, Jason Grafmiller, and Benedikt Szmrecsanyi.
2017. “Cognitive Indigenization Effects in the English Dative
Alternation.” *Cognitive Linguistics* 28 (4): 673–710.
<https://doi.org/10.1515/cog-2016-0051>.

</div>

<div id="ref-VanCalsterEtAl2016Calibration" class="csl-entry">

Van Calster, Ben, Daan Nieboer, Yvonne Vergouwe, Bavo De Cock, Michael
J. Pencina, and Ewout W. Steyerberg. 2016. “A Calibration Hierarchy for
Risk Models Was Defined: From Utopia to Empirical Data.” *Journal of
Clinical Epidemiology* 74: 167–76.
<https://doi.org/10.1016/j.jclinepi.2015.12.005>.

</div>

<div id="ref-weinreich1968" class="csl-entry">

Weinreich, Uriel, William Labov, and Marvin I. Herzog. 1968. “Empirical
Foundations for a Theory of Language Change.” In *Directions for
Historical Linguistics*, edited by Winfred P. Lehmann and Yakov Malkiel.
University of Texas Press.

</div>

</div>

[^1]: Contact: <brett.reynolds@humber.ca>
