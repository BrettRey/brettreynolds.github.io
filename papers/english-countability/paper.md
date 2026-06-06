---
title: "The homeostatic maintenance of English countability: Bidirectional inference and the stability of grammatical clusters"
author: "Brett Reynolds"
year: "2025"
status: "Under review at Linguistics"
canonical_url: "https://ling.auf.net/lingbuzz/009537"
website_url: "https://brettreynolds.ca/papers/english-countability/"
markdown_url: "https://brettreynolds.ca/papers/english-countability/paper.md"
version: "author-manuscript mirror"
version_date: "2026-06-06"
keywords: ["countability", "English grammar", "homeostatic property clusters", "grammatical categories"]
---
# The homeostatic maintenance of English countability: Bidirectional inference and the stability of grammatical clusters

**Author-manuscript mirror.** This Markdown file is provided for accessibility, search, and machine readability. The canonical public record is linked in the metadata above.

## Abstract
English count properties cluster tightly and the clustering is projectible: knowing that a noun takes *many* lets you predict plural agreement. But in quasi-count nouns (*cattle*, *police*, *clergy*) the cluster dissociates in a constrained order. No existing account explains both the projectibility and its limits.

I argue that morphosyntactic <span class="smallcaps">countability</span> (distinct from ontological discreteness and semantic <span class="smallcaps">individuation</span>) is a homeostatic property cluster (HPC) maintained by bidirectional inference coupling count morphosyntax to individuation. Because count properties differ in the <span class="smallcaps">precision</span> of individuation they demand, they dissociate in a predictable hierarchy when individuation weakens: tight properties (singular, *a*(*n*), low cardinals) fail before loose ones (*many*, plural agreement).

The account derives the quasi-count pattern, the stability of *cattle*/*police* (functional anchoring via *cow*/*officer*), and the instability of boundary cases like *folks*. COCA corpus evidence confirms that the ordering tracks semantic precision, not collocation frequency.


**Keywords:** countability, individuation, precision, homeostatic property cluster, quasi-count nouns, mass/count distinction, English, bidirectional inference, corpus evidence, COCA

# Introduction: The puzzle of stable clustering

A student learning English writes \**I bought three furnitures*. A copy editor debates whether to keep *this data* or change to *these data*. A Texan says *you folks* where a Bostonian says *you guys*. What do these have in common? They’re all negotiations at the boundary of English countability, a boundary that turns out to be more structured than it first appears. If countability were a simple lexical feature, we might expect tidy uniformity or random scatter; what we actually see is stranger: a tightly clustered system that frays in an orderly way.

Count properties in English hang together strikingly: singular–plural contrast, *a*(*n*) selection, low cardinals, *many/few* vs. *much/little*, plural agreement, demonstratives, and distributive quantifiers almost always align. The clustering is projectible: if you learn that a noun takes *many*, you can predict it takes plural agreement; if it takes *a*(*n*), you can predict low cardinals. But quasi-count plurals such as *cattle* and *police* peel off the tightest properties first while keeping the looser ones. The pattern is implicational and stable over time, and no existing account explains either the projectibility or its limits.

Feature-bundle accounts (e.g., (Chomsky 1965); see (Allan 1980) for critical review) encode the clustering but can’t explain why it persists. Prototype descriptions (e.g., (Taylor 2003; Aarts 2007)) capture gradience but not the ordering. A homeostatic property cluster (HPC) view does better: countability is a cluster maintained by causal mechanisms rather than mere resemblance. The puzzle is why the clustering supports such reliable induction and yet allows orderly partial dissociation. Usage-based and functional approaches have the right instincts about stability: frequency, entrenchment, and distributional learning explain why clusters persist. But they don’t explain why *these particular properties* cluster (rather than some other set), which properties dissociate first when the cluster frays, or why some intermediates (*cattle*, *police*) remain stable for centuries while others (*folks*, *data*) drift. Those are the questions this paper addresses.

On the HPC view, a kind is held together by mechanisms that make its properties mutually reinforcing rather than by a single essence. Members can vary, some properties can fail locally, and the cluster stays recognizable because causal feedback pushes it back toward coherence (Boyd 1991; Khalidi 2013). Biological species are the textbook case; in linguistics, Dahl (2016) applies the framework to crosslinguistic gram types, Miller (2021) to word-kinds, and Reynolds (2025b) to phonemes, words, and constructions. I claim English countability is another such case.

The count cluster, on this view, is not a descriptive convenience but a real pattern in the grammar[^1], one that is, in Dahl’s phrase, “out there to be discovered” rather than constructed by the analyst. It persists through an equilibrium between processes that extend count properties (analogical leveling, morphological derivation, semantic individuation of novel referents, prescriptive enforcement) and processes that erode them (massification, paradigm attrition, semantic bleaching, functional displacement by singulative or collective alternatives). The cluster survives not because every noun conforms but because drift in one direction is typically counteracted by pressure from the other.

I argue that bidirectional inference between form and meaning provides the homeostasis. Count morphosyntax evidences an individuated construal in comprehension; an individuated construal licenses count morphosyntax in production. When individuation weakens, tight properties fail first, yielding the familiar hierarchy; stable intermediates arise when functional alternatives (e.g., *officer* for *police*) bleed pressure to complete the cluster. The terminology I use (countability, individuation, precision) foregrounds the cognitive-semantic dimension; an equally valid analysis might foreground social or interactional dimensions, which I largely set aside.

Empirically, I assemble a noun $`\times`$ property matrix for English diagnostic nouns and report corpus frequency data from COCA (Davies 2020) confirming the hierarchy’s predicted asymmetries. The account predicts no reverse patterns (tight without loose), explains the determiner and demonstrative facts, and yields cross-linguistic and diachronic expectations. The rest of the paper sets out the three-level framework (§<a href="#sec:levels" data-reference-type="ref" data-reference="sec:levels">2</a>), develops the mechanism (§<a href="#sec:mechanism" data-reference-type="ref" data-reference="sec:mechanism">3</a>), presents the dissociation hierarchy and quasi-count evidence (§<a href="#sec:hierarchy" data-reference-type="ref" data-reference="sec:hierarchy">4</a>, §<a href="#sec:evidence" data-reference-type="ref" data-reference="sec:evidence">5</a>), contrasts alternative approaches and extensions (§<a href="#sec:alternatives" data-reference-type="ref" data-reference="sec:alternatives">6</a>, §<a href="#sec:extensions" data-reference-type="ref" data-reference="sec:extensions">7</a>), and closes with outstanding issues (§<a href="#sec:outstanding" data-reference-type="ref" data-reference="sec:outstanding">8</a>).

# Three levels of countability

The term <span class="smallcaps">countability</span> conflates three distinct levels. Ontological discreteness (whether referents exist as bounded units in the world), semantic individuation (whether speakers construe referents as discrete units), and morphosyntactic countability (whether nouns exhibit the grammatical cluster examined here) don’t always align. Conflating them obscures the causal structure this paper proposes.

<span class="smallcaps">Ontological discreteness</span> concerns world structure: whether referents exist as bounded, individuable units independent of how language carves them. Rice grains, cattle, furniture items, and books are all physically discrete. But *rice* and *furniture* are mass, *cattle* is quasi-count, and *book* is fully count. Physical discreteness doesn’t determine grammatical behaviour, so it can’t be the direct input to morphosyntax. *Cattle* (the paradigm case examined throughout this paper) exemplifies the dissociation: ontologically discrete bovines, semantically construed as aggregates, morphosyntactically intermediate.

<span class="smallcaps">Semantic individuation</span> is a construal operation: whether a noun packages its referents as atomic units accessible to quantification (Chierchia 1998; Rothstein 2010; Grimm 2018). This is the level at which *furniture* and *equipment* differ from *chairs* and *devices*. The referents may be equally discrete in the world, but the nouns construe them differently. *Furniture* denotes discrete objects, but the noun doesn’t support tight individuation; it resists \**a furniture* and \**three furnitures* even though its referents are countable in principle. Individuation can shift in context: *three coffees* individuates portions; *much coffee* construes the same substance as mass, and alternations like *beer/a beer*, *glass/a glass* show that a single lexeme can encode both profiles.

Individuation operates at two levels. Lexemes carry conventionalized construal profiles (default settings for how their referents are packaged, established through usage history and stored in lexical knowledge). These profiles make *cattle* quasi-count and *book* fully count as types. But speakers can override defaults in context: *three coffees* coerces a mass noun into a count frame. The bidirectional inference mechanism operates on both levels: conventionalized profiles constrain expectations; online construal can shift them. The hierarchy developed here concerns conventionalized profiles (the stable defaults that determine a noun’s typical countability behaviour), not the contextual coercions that temporarily override them. Because those profiles are established by distributional history (frequency, collocational patterns, register) rather than read off any single morphosyntactic property, the account avoids circularity.

<span class="smallcaps">Morphosyntactic countability</span> is the grammatical cluster (Huddleston and Pullum 2002; Allan 1980, 333–36): singular–plural contrast, *a*(*n*) selection, numeral compatibility, *many/few* vs. *much/little*, plural agreement, demonstrative selection, distributive quantifiers. For a given noun sense in English, its <span class="smallcaps">countability profile</span> is the pattern it shows across these diagnostics. These properties cluster tightly in *book*, partially in *cattle* and *police*, and not at all in *furniture*.

These dissociations aren’t random; they follow the hierarchy proposed in §<a href="#sec:hierarchy" data-reference-type="ref" data-reference="sec:hierarchy">4</a>. Much confusion in the literature arises from sliding between levels. Claims that “mass nouns denote stuff without boundaries” conflate semantics with ontology. Claims that “count nouns have plurals” mistake one salient property for the cluster as a whole.

This paper addresses morphosyntactic countability: why the grammatical properties cluster and how they dissociate when individuation weakens. The three-level distinction lets us locate the causal mechanism precisely: between individuation and morphosyntax, not between world structure and grammar. The misalignment between levels is expected, not anomalous: each level supports induction for different purposes (semantic individuation predicts quantity judgments and coercion patterns; morphosyntactic countability predicts collocational and agreement behaviour), and different mechanisms stabilize each cluster (Reynolds 2025b). This is field-relative projectibility: a category can be a good inductive bet for one set of questions while failing for another, because different causal structures underwrite different generalizations.

Morphosyntactic countability is projectible for collocational and agreement behaviour, and different users exploit that projectibility differently. For the child acquiring English, encountering *many* N licenses extending to plural agreement without needing to hear it directly. For the parser, processing one count property generates graded expectations for the rest, with violations incurring measurable cost. For the grammarian, the hierarchy developed in §<a href="#sec:hierarchy" data-reference-type="ref" data-reference="sec:hierarchy">4</a> specifies exactly which predictions are licensed and which are not, replacing arbitrary class lists with principled induction.

# The homeostatic mechanism: Bidirectional inference

## The mechanism specified

Morphosyntactic countability in English comprises a cluster of properties: singular–plural contrast, *a*(*n*) selection, numeral compatibility, *many/few* vs. *much/little*, distributive quantifiers, plural agreement. These properties co-occur across the lexicon, but standard accounts either stipulate the bundle or gesture at prototypes without explaining stability.

The account developed here rests on three claims.

1.  *Representational claim.* There is a semantic variable (call it the individuation parameter) whose value ranges from “no atomic units accessible” (mass construal) to “fully discrete units accessible” (count construal). This parameter is gradient, not binary; it can take intermediate values where atoms are partially but not fully accessible to enumeration.

2.  *Mapping claim.* Each count property is associated with a threshold on that parameter: the minimum degree of individuation it requires. The thresholds differ:

    - *a*(*n*) and low cardinals require high-precision individuation: selecting exactly one atom or an exact $`n`$-tuple of atoms.

    - *several* requires discrete atoms but tolerates a vague lower bound (“more than two, not many”).

    - *many* and high round numerals require only magnitude assessment against a contextual threshold; atoms needn’t be sharply bounded.

    - Plural agreement requires only that the referent be construed as non-singular.

3.  *Inference claim.* In comprehension, morphosyntax generates expectations about the individuation parameter; in production, the speaker’s construal of that parameter biases morphosyntactic choice. This is the bidirectional link. Hearing *three dogs* leads hearers to infer a high-precision individuated construal; a speaker who has such a construal will choose *three dogs* over *much dog*. The same mapping operates in acquisition: children infer these form–meaning correspondences from distributional evidence, acquiring the cluster as a unit because the construal, not each property, is what they track (Bybee 2010); cf. Tomasello (2003).

Because every property cues the same underlying variable, the cluster is inferentially connected rather than accidentally co-occurring (Boyd 1991; Khalidi 2013). I distinguish the mechanism (the causal structure of bidirectional inference) from the stabilizers that keep the cluster clustered: something counts as a stabilizer if removing it would change the clustering (Reynolds 2025b). Bidirectional inference is the primary stabilizer, but it isn’t the only one; §<a href="#sec:homeostasis" data-reference-type="ref" data-reference="sec:homeostasis">3.2</a> identifies the main ones. The resulting dissociation hierarchy appears in §<a href="#sec:hierarchy" data-reference-type="ref" data-reference="sec:hierarchy">4</a>.

## Why this produces homeostasis

A cluster is homeostatic when mechanisms push it back toward coherence after perturbation. Bidirectional inference does this by making count properties mutually predictive through individuation. In Boyd (1991)’s terms, these are the stabilizing mechanisms that keep enough of the cluster together for projectible generalizations: if a noun takes *many*, one can reliably predict it will take plural agreement; if it takes *a*(*n*), one can predict it will take low cardinals. That mutual predictiveness distinguishes the HPC account from prototype and feature-bundle approaches. Prototype accounts allow gradience but don’t explain why properties stay linked; feature bundles encode clustering but not its persistence.

In acquisition, children don’t learn count properties one by one. They learn that count morphosyntax correlates with individuation. When a noun exhibits some count properties, they generalize: this noun supports individuation, so other count frames should work, a pattern consistent with schema extension and entrenchment effects in usage-based morphology. The cluster is acquired as a unit because the construal, not each property, is what learners track.

Classic mass/count acquisition work (Gordon 1985, 1988; Bloom 1994); see also Barner and Snedeker (2005, sec. 5.3) documents that children generalize mass/count behaviour from limited syntactic and distributional evidence. When a novel or quasi-count noun is first encountered in a count frame (for instance with *a*, with plural morphology, or under a count-selecting quantifier), children typically extend it to other count environments. Bloom (1994), for example, documents child productions including *a bacon*, *a money*, and *a spooky furniture*, all indefinite articles applied to object-mass nouns.[^2] Independently, Barner and Snedeker (2005) show that both children and adults quantify object-mass nouns like *furniture* by number of items rather than total volume, evidence that these nouns are conceptually individuated despite mass syntax.[^3]

Overgeneralization runs in both directions: children extend count syntax to mass nouns (*a money*, *every bread*) and mass syntax to count nouns (*too much cars*, *too much hard questions*), with errors of the latter type persisting through at least age six (Gordon 1985; Gathercole 1985). I take these patterns to illustrate a more general strategy: children use one or a few count cues as evidence that a noun licenses a broader cluster of count properties, and occasionally overextend that cluster to borderline items. Such overgeneralizations are, for present purposes, the clearest evidence that the mechanism is productive in acquisition rather than merely a descriptive summary of adult distributions.

During processing, one count property activates the individuation construal and primes expectations for the rest. But for lexemes like *cattle* and *police*, this schema-level activation competes with stored lexical knowledge: no productive singular, no regular *-s*, restricted distribution with tight quantifiers. Hearing *many cattle* therefore activates individuation only partially: enough to make *three cattle* feel like a violation (not a category error), but not enough to make it acceptable. Violations of cluster coherence create processing costs and reinforce the clustering. On any reasonable processing account, such mismatches incur extra cost; at the very least, they violate entrenched expectations about which forms co-occur.

In production, an individuated construal makes the whole count cluster available. Cherry-picking (choosing *many* while blocking *three*) would require suppressing the inference that the noun supports full individuation. That suppression is cognitively costly and communicatively risky because hearers expect coherence.

## Stabilizers and functional anchoring

The homeostatic pressure is real but not deterministic. The mechanism biases the system toward full count or full mass, but it doesn’t guarantee convergence. Intermediate states can persist when functional pressures stabilize them.

A noun like *police* has remained quasi-count for centuries because its functional niche is covered elsewhere. Speakers who need singulative reference use *officer*, not \**a police* or \**one police*. Offloading the singulative function relieves pressure on *police* to gain tight properties. This is weak homeostasis: pressure toward coherence can be neutralized when the communicative ecology provides alternatives.

This is exactly the paradigm-leveling pressure Bybee (2010) describes: items whose behaviour only partially matches an entrenched schema tend to regularize toward the dominant pattern unless countervailing pressures hold them in place. High-frequency clusters become entrenched; marginal items remain variable. *Police* is frequent and functionally anchored by *officer*; *folks*, lacking such anchoring, shows the variability observed in §<a href="#sec:folks" data-reference-type="ref" data-reference="sec:folks">5.5</a>. The stability of quasi-count nouns follows from this interaction between homeostatic pressure and functional ecology.

The mechanisms just described (bidirectional form–meaning association, entrenchment, frequency-driven schema extension) are not new. Construction grammar has treated them as foundational for decades (Goldberg 1995; Langacker 1987; Bybee 2010). As Reynolds (2025b) argues, what these traditions have lacked isn’t the right ontology but the diagnostic toolkit: projectibility criteria that say when a cluster supports induction, failure modes that diagnose when it doesn’t, and field-relativity that explains why the same data yield different categories for different purposes. Construction grammar describes form–meaning clusters maintained by use; the HPC framework adds the diagnostic discipline that says which clusters are real and what they let you predict. For countability, that discipline delivers specific results: an implicational ordering over the properties (tight before loose), perturbation-sensitive diagnostics (remove a stabilizer and the cluster frays predictably), functional anchoring as an explanation for stable intermediates, and a projectibility payoff (knowing one property lets you predict others, with quantifiable confidence).

Properties cohere not because any one directly causes the others, but because all point to the same construal. Forms license inferences; inferences shape expectations; expectations constrain usage; usage entrenches the cluster. Form tracks meaning because, over time, meaning has learned to track form. In the terms of Reynolds (2025b), countability is a case of loose coupling: the morphosyntactic cluster and the semantic individuation parameter don’t lock together directly (as phonemic features do) but negotiate alignment through the bidirectional inference developed above. The coupling is real (remove it and the cluster dissolves into unrelated properties), but it tolerates the slack that makes quasi-count intermediates possible.

The stabilizers that maintain this coupling operate at multiple scales and loci (Reynolds 2025b). At the individual level, bidirectional inference during real-time processing (fast) links count morphosyntax to individuation construals; acquisition and entrenchment (slow) transmit the cluster as learners who encounter partial count frames extend to the full cluster, as documented in the overgeneralization studies above. At the community level, interactive alignment in dialogue (fast) pushes speakers to accommodate to each other’s count-frame choices; transmission dynamics and institutional norms (style guides, editorial practice, pedagogical grammars) enforce canonical patterns and resist drift (slow).

These loops interact: fast individual inference generates usage patterns; slow community transmission crystallizes them into standards; each generation of learners acquires the cluster from input that already reflects the previous generation’s inferences. The result is a stable equilibrium, not because any speaker enforces it but because the inference mechanism, applied iteratively across speakers and generations, converges on the same attractor (Strogatz 2015; Kirby et al. 2008). The four-level story is a heuristic, not a template: different categories are maintained by different braids of stabilizers, and the exact mapping varies. The point is multi-level stabilization, not exact correspondence.

This framework provides two diagnostics for whether countability is a genuine HPC rather than a convenient label (Reynolds 2025b). The projectibility test asks whether learning a noun’s count properties from partial evidence predicts held-out data. It does: if a noun takes *many*, one can reliably predict plural agreement; if it takes *a*(*n*), one can predict low cardinals. The implicational hierarchy developed in §<a href="#sec:hierarchy" data-reference-type="ref" data-reference="sec:hierarchy">4</a> is exactly this predictive structure: the pattern travels. The homeostasis test asks whether we can name the stabilizers and whether they’re perturbation-sensitive. We can identify at least these: bidirectional inference, entrenchment, functional anchoring, institutional norms. And they are: remove *datum* from active use and *data* drifts toward mass; if *officer* were to disappear, we’d predict *police* to drift toward full count or full mass rather than remaining stably quasi-count. A mere label (like the traditional category “adverb”) would be perturbation-inert: remove any one supposed stabilizer and nothing changes, because nothing holds it together causally. Countability passes both tests.

## Homeostasis or shared cause?

A residual question: is the count cluster genuinely homeostatic, or is it merely a set of indicators that co-vary because they share a common cause (individuation)? A parametric model with one latent variable and multiple threshold indicators would produce the same implicational structure without any feedback. The distinction matters, and it’s empirically testable. In a shared-cause model, perturbing one indicator doesn’t affect the others; they’re independently caused by the latent variable. In a homeostatic system, perturbing one property causes changes in the rest. The diachronic evidence provides three perturbation cases that distinguish the models.

*Data*, historically the count plural of *datum*, is losing its singulative anchor as *datum* becomes archaic. The shared-cause model predicts that the other count properties should be unaffected: if they all track individuation independently, removing one indicator changes nothing about the rest. What we observe is the opposite: as the singular form disappears, the other count properties erode in cascade (*this data is*, *much data*). The individuation of *data*’s referents (discrete pieces of information) hasn’t changed; what changed is one morphosyntactic property, and the others followed. That’s inter-property feedback, not shared-cause covariation.

*Pease* $`\to`$ *pea* runs the same logic in reverse. A morphological reanalysis (the final /z/ reinterpreted as the plural suffix) perturbed one property, and the rest of the count cluster was built from that: speakers back-formed a singular *pea*, then extended to *a pea*, *three peas*, *many peas*. The underlying individuation of peas didn’t change; what changed was one morphosyntactic property, and the others cascaded.

*Police* is the stability control. Its individuation profile is comparable to *data*’s (both denote discrete entities construed as aggregates), but *officer* remains in active use, so the singulative anchor isn’t perturbed. The count cluster doesn’t drift. If the properties were independently caused by individuation, *police* and *data* should behave the same way (both have degraded individuation). They don’t, because what differs is the anchoring, a property-level perturbation that a shared-cause model can’t capture.

Two further observations tell against the shared-cause model. First, the same referents can be packaged by differently countable words: *fiction* (mass) or *lies* (count), *sleep* (mass) or *naps* (count), *luggage* (mass) or *bags* (count). If the latent variable (individuation of the referent) independently caused each morphosyntactic property, synonyms should agree on countability. They don’t, because countability is maintained by word-level dynamics (entrenchment, frequency, functional ecology), not by the referent alone. Second, cross-linguistic divergence runs the same way: English *hair* is mass, French *cheveux* is count; English *furniture* is mass, French *meubles* is count. If individuation of the referent were the shared cause, languages should converge. They don’t, because the cluster is maintained by language-specific feedback, not by universal properties of the referents.

Together with the diachronic perturbation cases (forward cascade, reverse cascade, stability control), these observations violate the key prediction of a shared-cause model: indicator independence after controlling for the latent variable. Perturbing one property causes changes in the others; synonyms with the same referents diverge on countability; languages with the same referents diverge on countability. The cluster is maintained by its own internal dynamics, not by the world. That is what makes it homeostatic rather than merely parametric.

## What happens when the mechanism weakens

The homeostatic mechanism predicts stability when individuation is accessible, but what happens when a noun’s semantics resists or only partially supports atomic construal?

Consider aggregate nouns like *cattle* or *police*. Their referents aren’t construed as collections of discrete, independently countable units in the way *dogs* or *books* are. The animals or officers exist as individuals, but the nouns package them as collective groups. Individuation is semantically degraded (not absent, but weakened).

When individuation weakens, the bidirectional inference mechanism can’t maintain the full count cluster. Not all count properties can be felicitously licensed. Importantly, the properties don’t fail uniformly. They dissociate in a predicted order based on their evidential thresholds (how much individuation precision they require).

Properties that demand high-precision individuation fail first. Singular form and *a*(*n*) require identifying exactly one discrete, bounded entity. Low cardinals like *three* require enumerating precise atomic units. These tight properties are incompatible with aggregate construals: \**a cattle* and \**three police* are degraded or unacceptable (Huddleston and Pullum 2002, 345).

Properties that tolerate low-precision individuation persist. *Many* requires only assessing relative magnitude across vaguely individuated units. Plural agreement requires only construing the referent as non-singular. High round numerals function as approximate measures (*a hundred cattle* $`\approx`$ *roughly a hundred*). These loose properties remain felicitous even when tight individuation fails. What we get, then, is an implicational hierarchy over the diagnostics: any noun that loses a loose property will already have lost all the tighter ones. The next section makes this hierarchy explicit and tests it against the quasi-count pattern.

The implicational hierarchy (tight properties lost before loose) is a descriptive generalization that *CGEL* documents but doesn’t explain. Bidirectional inference is the proposed explanation. The hierarchy could stand even if the mechanistic account is revised or replaced; the mechanism’s job is to derive the ordering, not merely to label it. Direct psycholinguistic evidence (acquisition overgeneralization, priming effects) would strengthen the case that bidirectional inference operates in real time rather than being a post-hoc description of distributional patterns.

# The dissociation hierarchy

The homeostatic mechanism generates a specific prediction: count properties should dissociate in order of their evidential thresholds when individuation weakens. Properties requiring high-precision individuation (tight linkage) fail before those tolerating low-precision individuation (loose linkage). The hierarchy is as follows, with the diagnostics considered here: singular morphology, argumental determiner requirement, *a*(*n*) selection, low cardinals, *several*, distributive quantifiers, demonstratives, *many/few*, high round numerals, and plural agreement. Figure <a href="#fig:matrix" data-reference-type="ref" data-reference="fig:matrix">2</a> displays the subset most clearly attested in grammars and corpora; demonstratives and distributives are discussed in text rather than added to the figure, which would crowd its layout without adding new contrasts. [^4]

<figure id="fig:threshold" data-latex-placement="t">

<figcaption>Precision thresholds linking determiners and quantifiers to individuation. Higher positions require tighter individuation. Each noun’s bar rises to the highest property it reliably licenses; dashed extensions mark marginal acceptability. <em>How many</em> patterns with low cardinals because it presupposes exact enumeration. Nouns project upward until they hit their individuation ceiling: <em>book</em> clears all thresholds; <em>people</em> stops short of <em>a</em>(<em>n</em>); <em>folks</em> reaches <em>several</em> and is marginal with low cardinals; <em>cattle</em> reaches <em>many</em>; <em>furniture</em> stays near the baseline.</figcaption>
</figure>

Tight linkage (lost first):

- Singular–plural contrast: a dedicated singular member of a number pair (bare mass singulars don’t count)

- Determiner requirement for argumental singular count nouns: needs an article or genitive determiner

- *a*(*n*) selection: requires identifying a single atomic unit

- Low cardinals (*three*, *five*): require enumerating precise atomic units

Moderate linkage:

- *several* N: requires multiple discrete units but tolerates approximate quantity

- Distributive quantifiers (*each*, *every*): require discrete units for distribution

Loose linkage (retained longest):

- *many/few* N: requires only relative magnitude assessment, not precise enumeration

- High round numerals (*a hundred* N, *thousands of* N): function as approximate measures

- Plural agreement: requires only non-singular construal

Productive number morphology doesn’t merely diagnose individuation; it partly constitutes it. The *-s* of *books* contributes semantic content: “not one,” with a definiteness that reinforces the determinative’s precision. A noun like *cattle*, lacking any number contrast, provides no such reinforcement; the form remains vaguer than *cows* would be. One reflex of this vagueness is nominal modification: English nominal modifiers are characteristically singular (*dog catcher*, not \**dogs catcher*), but *cattle* and *police* appear freely in modifier position (*cattle prod*, *police car*) because their number is uncommitted, vague enough to satisfy a slot that ordinarily requires singularity.

Zero-plural nouns like *moose* and *sheep* occupy a middle ground: syntactically fully count, but speakers often report a “softness”, an intuition that the unmarked form isn’t committing to discrete plurality the way *mooses* would. That said, *-s* is neither necessary nor sufficient for full individuation. Irregular plurals (*children*, *geese*) do the individuating work without it; mass-like plurals (*oats*, *suds*, *news*) carry *-s* without supporting count syntax. Morphological number is one property in the cluster; it can reinforce or weaken individuation, but like every other property, it’s not definitional. The HPC framing captures exactly this: mutual reinforcement without a master switch.

The determiner requirement behaves like the other tight properties: argumental singular count nouns normally take an article or genitive (*a dog*, \**dog*), but the requirement weakens when individuation is bleached in institutional or activity readings (*in bed*, *at school*, *have lunch* vs. *have a lunch*) (Huddleston and Pullum 2002, 409–10). [^5]

Related diagnostics align with the same ordering. Demonstratives are tight: plural-only nouns pattern with *these/those* but reject *this/that* (*these police*, \**this police*), while mass nouns reject both unless coerced. Pronominal anaphora and subject–verb agreement are loose: *the police ... they/\*it* is grammatical even when tighter properties fail.

This ordering isn’t stipulated but follows from what each property semantically requires. *Three* demands precision (exactly three atomic units); *many* doesn’t (just “a contextually large quantity”). The uniform bidirectional inference mechanism encounters these different semantic requirements and produces ordered dissociation (Allan 1980; Grimm 2018).

The homeostatic account makes a clear implicational prediction: for any noun $`N`$ and properties $`P_i`$ (tighter) and $`P_j`$ (looser), if $`N`$ accepts $`P_i`$, it accepts $`P_j`$; if $`N`$ rejects $`P_j`$, it rejects $`P_i`$. The matrix should show a triangular pattern: no noun stably exhibits tighter properties while rejecting looser ones.

Falsifiable predictions:

- No reverse implication: No noun should accept *three* N while rejecting *many* N

- No *a*–*many* split: No noun should accept *a*(*n*) N but require *much* N (not *many* N)

- Contiguous acceptability: Acceptable properties should form a contiguous band from some point downward; no noun should accept *a*(*n*) and *many* while rejecting *several*

- Predicted intermediate positions: Quasi-count nouns like *cattle* and *police* should accept loose properties while rejecting tight ones

Recall *cattle* from §<a href="#sec:levels" data-reference-type="ref" data-reference="sec:levels">2</a>: ontologically discrete, semantically aggregated. The hierarchy predicts it should accept loose properties (plural agreement, *many*) while rejecting tight ones (singular, *a*(*n*), low cardinals). The matrix in §<a href="#sec:evidence" data-reference-type="ref" data-reference="sec:evidence">5</a> confirms this.

This hierarchy explains the quasi-count pattern documented in descriptive grammars and predicts where new or shifting nouns should fall based on their individuation profile. The implicational hierarchy is the empirical generalization; the bidirectional-inference story is a proposed explanation of it. The hierarchy could survive even if the mechanism were revised.

# Evidence: The quasi-count pattern

## The noun $`\times`$ property matrix

<figure id="fig:matrix" data-latex-placement="t">

<figcaption>Triangular structure of the noun <span class="math inline">×</span> property matrix. Properties are ordered from tight (left) to loose (right); nouns from fully count (top) to mass (bottom). The implicational boundary (dashed line) separates acceptable from unacceptable cells: no noun accepts tight properties while rejecting looser ones. Coral cells indicate marginal or variable judgments. The <em>folks</em> row shows the boundary case: loose properties accepted, tight properties degraded. Note: <em>people</em> has suppletive singular <em>person</em>; archaic/literary <em>a folk</em> survives as a different sense. The <em>people</em> row tracks the “persons” sense only; <em>a people</em> (= an ethnic group) is a distinct sense with full count syntax (<em>three peoples</em>, <em>many peoples</em>).</figcaption>
</figure>

Lexicalized food terms like *mashed potatoes*, *scrambled eggs*, and *grits* show plural morphology with mass-like semantics: plural agreement but resistance to count quantifiers (\**three mashed potatoes* in the dish sense). These are frozen collocations reflecting an original count construal; they don’t participate productively in the count system examined here. Note that BrE often rationalizes to singular mass (*mashed potato*), while AmE tolerates the mismatch. [^6]

## Corpus evidence

COCA frequencies provide quantitative support for the hierarchy. Table <a href="#tab:coca" data-reference-type="ref" data-reference="tab:coca">1</a> reports counts for *three*, *many*, and the tight diagnostic *how many* with four nouns: *people* (fully count), *folks* (boundary case), *police* (quasi-count), and *cattle* (quasi-count). Because raw string searches conflate head uses with other functions, the counts require interpretation.

<div id="tab:coca">

| Noun | COCA freq. | *three* | *many* | *how many* | *three*:*many* | *three*/M | *how many*/M |
|:---|---:|---:|---:|---:|---:|---:|---:|
| *people* | 1,784,505 | 3,972 | 48,153 | 7,919 | 8.3% | 2,226 | 4,438 |
| *folks* | 65,895 | 17 | 783 | 85 | 2.2% | 258 | 1,290 |
| *police* | 220,858 | 20 | 74 | 11 | 27.0% | 91 | 50 |
| *cattle* | 14,376 | 7 | 43 | 8 | 16.3% | 487 | 557 |

COCA frequencies for determinative + noun combinations

</div>

Note: Counts for *police* and *cattle* exclude modifier uses (e.g., *three police officers*, *many cattle ranchers*); see text for details. *Many* counts exclude the subset *how many*. The rightmost columns give occurrences per million tokens of the noun in COCA for *three* N and *how many* N.

For *people* and *folks*, raw string counts are reliable proxies for head uses. Neither noun appears productively as a modifier in larger NPs: *person* and *folk* occupy the modifier slot instead (*person-centered*, *folk music*). Collocate searches for *three/several/many people* + noun and *three/several/many folks* + noun return only noise (parsing errors, lists, or genitives missing apostrophes, e.g., *many people’s eyes* $`\to`$ *many people eyes*). No genuine modifier uses appear.

For *police* and *cattle*, the situation is different. Both nouns appear productively in modifier function: *police officer*, *police car*, *police station*; *cattle prod*, *cattle guard*, *cattle rancher*. Raw counts for *three police* (179) and *three cattle* (10) are dominated by these modifier uses, where the quantifier modifies the head noun (*officer*, *prod*) and *police*/*cattle* functions as a nominal modifier within the larger NP. Collocate searches show that of the 179 tokens of *three police* + noun, 159 involve modifier uses (*three police officers* alone accounts for 92); the remaining 20 are genuine head uses. For *cattle*, 3 of 10 *three cattle* tokens are modifier uses, leaving 7 head uses. Table <a href="#tab:coca" data-reference-type="ref" data-reference="tab:coca">1</a> reports only head uses for these nouns.

This asymmetry (*people* and *folks* don’t function as modifiers; *police* and *cattle* do) is itself diagnostic. English nominal modifiers are characteristically singular (*dog catcher*, not \**dogs catcher*). The fact that *police* and *cattle* appear freely in modifier position despite plural morphology indicates that their number specification is uncommitted, vague enough to satisfy a structural slot that ordinarily requires singular form. COCA collocate searches confirm this quantitatively: 23.5% of all *cattle* tokens are followed immediately by another noun (*cattle* + \[n\*\]), compared to 1.0% for *people*, 0.9% for *cows*, and 0.6% for *folks*. The pattern extends to the other quasi-count nouns: *poultry* 41.3%, *youth* 32.4%, *livestock* 26.7%, *clergy* 9.1%, *vermin* 6.2%.

Every noun without overt plural marking modifies at 6% or higher; every noun with plural *-s* or a suppletive plural is under 1%. The *cattle*/*cows* comparison is the cleanest: same referents, same semantic domain, but *cows* (fully count, committed number) barely modifies, while *cattle* (quasi-count, uncommitted number) does so at 25 times the rate. *Folks*, despite its weakened individuation, has overt plural *-s* and patterns with the number-committed nouns for modifier rate. The modifier diagnostic thus tracks number morphology specifically, not countability in general, confirming its position among the tightest properties in the hierarchy.

The *folks*/*people* comparison provides the cleanest test of the hierarchy. Both are plural-only in their ordinary senses, but *people* is fully count while *folks* occupies the boundary zone. The ratio of *three* to *many* drops from 8.3% for *people* to 2.2% for *folks*, a 3.8-fold reduction. Normalizing by noun frequency (to control for the fact that *people* is 27 times more frequent than *folks*), *three people* occurs at 2,226 per million tokens of *people* (95% Poisson CI: 2,157–2,295), while *three folks* occurs at only 258 per million tokens of *folks* (CI: 137–395), an 8.6-fold suppression with non-overlapping confidence intervals. By contrast, *many folks* (11,884 per million, excluding *how many*) is suppressed only about 2.3-fold relative to *many people* (26,984 per million). The tight property is suppressed roughly three times more than the loose property, exactly as the hierarchy predicts. The tighter diagnostic *how many* N shows the same pattern with better coverage: 85 tokens of *how many folks* (1,290 per million) versus 7,919 of *how many people* (4,438 per million), a 3.4-fold suppression of the tight frame.

The *police* and *cattle* figures differ. Once modifier uses are removed, genuine quantified-head tokens are rare: 20 for *three police*, 7 for *three cattle*. These nouns resist quantified-head position altogether, regardless of quantifier. The ratios (27.0% and 16.3%) are higher than *people*’s 8.3%, but this reflects noise in small samples rather than genuine acceptance of tight quantifiers. What the numbers show is that quasi-count nouns have near-zero tolerance for the tight property in absolute terms: *three police* at 91 per million tokens of *police* versus *three people* at 2,226 per million, a 24-fold difference. The tighter frame *how many* N patterns similarly: about 50 per million for *police* and 557 per million for *cattle*, versus 4,438 per million for *people*. The handful of attested head uses likely reflect specialized registers (news reports giving exact casualty counts, agricultural contexts requiring enumeration) where precise cardinality is communicatively necessary despite the noun’s default profile.

The corpus evidence thus converges with the matrix in Figure <a href="#fig:matrix" data-reference-type="ref" data-reference="fig:matrix">2</a>. *People* shows full count behaviour: tight and loose quantifiers are both well attested. *Folks* shows the boundary pattern: loose quantifiers remain strong while tight quantifiers are selectively suppressed. *Police* and *cattle* show the quasi-count floor: they largely avoid quantified-head position, and what few tokens occur are register-specific. The triangular pattern (no noun accepting tight properties while rejecting loose ones) holds across all four.

A natural alternative explanation is that the hierarchy reflects collocation frequency rather than semantic precision: rare combinations are more easily blocked, and tight determinatives happen to be less frequent with these nouns. Table <a href="#tab:precision" data-reference-type="ref" data-reference="tab:precision">2</a> tests this by comparing determinatives that dissociate frequency from precision.

<div id="tab:precision">

| Determinative | COCA freq. | Precision | PMI *cattle* | PMI *folks* | PMI *people* |
|:--------------|-----------:|:----------|-------------:|------------:|-------------:|
| *two*         |  1,141,704 | tight     |    $`-2.46`$ |   $`-0.51`$ |    $`+2.53`$ |
| *three*       |    571,941 | tight     |    $`-0.24`$ |   $`-1.16`$ |    $`+1.95`$ |
| *each*        |    545,542 | tight     |    $`-1.98`$ |   $`-5.18`$ |            — |
| *several*     |    251,581 | moderate  |  $`-\infty`$ |   $`+0.52`$ |    $`+1.35`$ |
| *various*     |     99,848 | moderate  |    $`+0.47`$ |   $`+1.52`$ |    $`+1.59`$ |
| *many*        |    904,039 | loose     |    $`+1.72`$ |   $`+3.71`$ |    $`+4.89`$ |
| *numerous*    |     35,176 | loose     |    $`+0.97`$ |   $`+1.59`$ |    $`+2.00`$ |

Precision vs. frequency: PMI for determinatives varying in frequency and precision demand

</div>

Note: PMI = pointwise mutual information; positive = attracted (more frequent than chance), negative = repelled (less frequent than chance). Dashes indicate cells where the “persons” sense cannot be isolated (all *each people* tokens are the ethnic-group sense). *Two cattle* filtered to $`\approx`$<!-- -->3 head uses from 10 raw (7 modifier uses). *Every* omitted (all quasi-count tokens are modifier uses or the ethnic-group sense).

The critical comparison is *two* vs. *numerous*. *Two* is 32 times more frequent than *numerous*, but *two cattle* is repelled ($`\text{PMI} = -2.46`$) while *numerous cattle* is attracted ($`+0.97`$). The same pattern holds for *folks*: *two folks* ($`-0.51`$) vs. *numerous folks* ($`+1.59`$). If frequency drove the hierarchy, the most frequent determinative should combine most freely; instead, the pattern tracks precision demand. Every tight determinative repels quasi-count nouns regardless of its frequency; every loose determinative attracts them regardless of its rarity. This confirms that the ordering reflects what each determinative semantically requires, not how often it occurs.

Figure <a href="#fig:pmi" data-reference-type="ref" data-reference="fig:pmi">3</a> displays this dissociation. If frequency determined the pattern, PMI should correlate with determinative frequency (a positive slope); if precision determines it, points should separate by shape (tight vs. loose) regardless of their horizontal position. The data show the latter: triangles (tight) cluster below zero, circles (loose) above, with no frequency gradient.

<figure id="fig:pmi" data-latex-placement="t">

<figcaption>PMI (pointwise mutual information) for determinative–noun combinations in COCA, plotted against determinative frequency on a <span class="math inline">log<sub>10</sub></span> scale. Triangles (coral) = tight determinatives; squares (gold) = moderate; circles (blue) = loose. Whiskers show approximate 95% Poisson CIs where counts exceed 1. If frequency drove the pattern, PMI should increase with determinative frequency (positive slope). Instead, the vertical separation tracks precision class: tight determinatives (triangles) cluster below zero regardless of frequency; loose determinatives (circles) cluster above. <em>Two</em> (1.1M tokens) and <em>numerous</em> (35k tokens) differ 32-fold in frequency but fall on opposite sides of zero.</figcaption>
</figure>

<figure id="fig:dotplot" data-latex-placement="t">

<figcaption>Per-million frequency of <em>three</em> N (coral) and <em>many</em> N (blue) with 95% Poisson confidence intervals, plotted on a <span class="math inline">log<sub>10</sub></span> scale. Singulatives cluster at top right (both quantifiers well attested). Quasi-count nouns show the dissociation: <em>many</em> rates overlap with singulatives, but <em>three</em> rates plummet. Intervals for high-count nouns (<em>people</em>, <em>officers</em>) are too narrow to see at this scale; intervals for small counts (<em>three clergy</em>, <em>many poultry</em>, <em>many vermin</em>) are wide. The contrast is the point: some estimates are precise, others are not. Head uses only for <em>police</em> and <em>cattle</em>; <em>many</em> excludes <em>how many</em>.</figcaption>
</figure>

## Existential construction probe

The hierarchy predicts that constructions foregrounding exact cardinality should be especially hostile to quasi-count nouns. Existential *there* constructions do this: *there are three people in the room* presupposes a precise count of discrete entities. If the tight/loose distinction reflects precision demands, existentials should suppress tight determinatives with quasi-count nouns more than other frames do.

Table <a href="#tab:exist" data-reference-type="ref" data-reference="tab:exist">3</a> reports COCA counts for *there \[be\] \[det\] \[noun\]* (existential frame) and *\[det\] \[noun\] \[v\*\]* (verb-following frame) across three determinatives and three nouns.

<div id="tab:exist">

| Det       | Noun     | Existential | Verb-following |  Total | E share |
|:----------|:---------|------------:|---------------:|-------:|--------:|
| *three*   | *people* |         128 |          1,356 |  1,484 |    8.6% |
|           | *folks*  |           2 |              1 |      3 |       — |
|           | *cattle* |           0 |              3 |      3 |       — |
| *several* | *people* |         120 |          1,155 |  1,275 |    9.4% |
|           | *folks*  |           6 |             24 |     30 |   20.0% |
|           | *cattle* |           0 |              0 |      0 |       — |
| *many*    | *people* |       1,046 |         29,449 | 30,495 |    3.4% |
|           | *folks*  |          18 |            433 |    451 |    4.0% |
|           | *cattle* |           0 |             11 |     11 |      0% |

COCA frequencies: existential vs. verb-following frames

</div>

Note: Dashes indicate cells too sparse ($`N < 10`$) for meaningful percentages. Verb-following counts for *cattle* are filtered for head uses (see §<a href="#sec:corpus" data-reference-type="ref" data-reference="sec:corpus">5.2</a>). *Cows* is included in the discussion for comparison: *there \[be\] three cows* = 1, *there \[be\] many cows* = 2.

Three findings emerge.

First, the loose property shows no construction effect. *Many people* and *many folks* have similar existential shares (3.4% vs. 4.0%). The loose determinative distributes evenly across constructions for both nouns, as the hierarchy predicts: if *many* tolerates low-precision individuation, the existential frame’s higher precision demand shouldn’t matter.

Second, the construction-sensitivity prediction for the tight property (*three folks*) can’t be tested: only 3 tokens survive. The suppression operates at the *three* + *folks* level before any construction effect can be measured. This motivates an acceptability study (§<a href="#sec:folks" data-reference-type="ref" data-reference="sec:folks">5.5</a>) where controlled stimuli can probe the gradient that corpus data are too sparse to reveal.

Third, *cattle* categorically avoids quantified existentials. Across *three*, *several*, and *many*, *there \[be\] \[det\] cattle* returns zero tokens. But bare *cattle* in existentials is grammatical: *there \[be\] cattle* returns 6 tokens (*there are cattle on his ranch*, *there are cattle loose between some of the estates*). The existential frame doesn’t reject *cattle* itself; it rejects *quantified* *cattle*. Quantifiers impose individuation demands that the existential frame amplifies; *cattle*’s aggregate semantics can’t satisfy both simultaneously. This is evidence against a purely morphological explanation: if *cattle* were simply a defective plural, bare and quantified existentials should pattern alike. They don’t.

## *CGEL*’s quasi-count nouns

*CGEL* identifies a class of quasi-count nouns: plural-only nouns that take plural agreement and accept *many* but resist singular forms, *a*(*n*), and low cardinals (Huddleston and Pullum 2002, 345). Such nouns represent what Corbett (2019) terms instances with “reduced number possibilities,” where a noun’s morphology, syntax, and semantics may not align. The core cases (*cattle*, *police*, *poultry*, *vermin*, *livestock*, *clergy*) show a consistent profile: they occupy the intermediate zone predicted by the hierarchy, accepting loose properties while rejecting tight ones.

The pattern is implicational. All these nouns accept *many* N and plural agreement (*many cattle*, *the police were*). Virtually all reject *a*(*n*) N and singular forms (\**a cattle*, \**one police*); *clergy* shows marginal *a clergy* in elevated registers, but this is exceptional. Low cardinals[^7] are degraded or impossible (\**three cattle*, \**five police*). But high round numerals and approximate quantifiers are acceptable (*hundreds of cattle*, *thousands of police*). This isn’t a random scatter; they peel off in the predicted order.

*CGEL* contrasts these with exceptional plural-only nouns like *troops* and *folk*, which accept low numerals despite lacking a simple morphological singular of the same lexeme: *three troops*, *several folk*, but \**a troop* (in the sense of one soldier) or \**a folk* in their ordinary senses (Huddleston and Pullum 2002, 345).[^8] The grammar notes the distinction but offers no explanation for why some plural-only nouns permit low cardinals while others don’t.

The dissociation hierarchy provides the explanation. The difference between *troops*/*folk* and *cattle*/*police* isn’t morphological (both types lack singulars) but semantic: how accessible is individuation? *Troops* and *folk* provide access to discrete, enumerable individuals; *cattle* provides only partial access, enough for *many* (magnitude assessment) but not for *three* (exact enumeration). When individuation is weakened (when referents are construed as aggregates rather than discrete units), tight properties fail first. Loose properties remain because they tolerate low-precision magnitude assessment without requiring precise atomic boundaries.

Consider *cattle*. It takes plural agreement (*the cattle are grazing*), accepts *many cattle* and, for many speakers, *several cattle*, but blocks \**a cattle* and \**three cattle*, except in specialized agricultural registers where head counts are routine and exact enumeration is communicatively necessary. The countability profile matches the prediction: weakened individuation, tight properties lost, loose properties retained.

*Police* shows the same pattern. Plural agreement (*the police are investigating*), *many police*, and for some speakers *several police*, are acceptable. But \**a police* and \**three police* are ungrammatical in standard English. High round numerals work (*hundreds of police*) because they function as approximate measures rather than exact counts. The stability of *police* in this intermediate state (attested for as long as we have good descriptive records) follows from functional anchoring: speakers who need singulative reference use *officer*, so there’s no pressure to develop tight properties.

Other quasi-count nouns show slight variations but respect the hierarchy. Table <a href="#tab:expansion" data-reference-type="ref" data-reference="tab:expansion">4</a> reports COCA frequencies for five additional quasi-count nouns. *Poultry* and *livestock* largely pattern like *cattle*: near-zero tokens with *three* and *several*, modest acceptance of *many*. *Vermin* is the most extreme case: zero tokens with *three* or *several*, and only 2 with *many*. *Clergy* is more permissive, accepting *many clergy* (26) and marginal *several clergy* (4), with *cleric* serving the singulative function. *Youth* patterns nearest to *folks*, accepting *many youth* (86), *several youth* (22), and even *three youth* (10), though some of the latter may reflect the fully count sense (*a youth* = a young person). None of these nouns reverses the implicational pattern: none accepts tight properties while rejecting loose ones.

<div id="tab:expansion">

| Noun        | COCA freq. | *three* | *several* | *many* | *how many* |
|:------------|-----------:|--------:|----------:|-------:|-----------:|
| *youth*     |     49,846 |      10 |        22 |     86 |          3 |
| *clergy*    |      5,879 |       3 |         4 |     26 |          1 |
| *livestock* |      6,982 |       1 |         1 |     13 |          0 |
| *poultry*   |      4,544 |       0 |         1 |      3 |          0 |
| *vermin*    |      1,041 |       0 |         0 |      2 |          0 |

COCA frequencies for expanded quasi-count nouns

</div>

Note: Raw counts; no modifier filtering applied (*poultry* and *livestock* function freely as modifiers, so head-use counts may be lower). Nouns ordered by acceptance of tight properties. Compare Table <a href="#tab:coca" data-reference-type="ref" data-reference="tab:coca">1</a> for core nouns.

The quasi-count class thus fits the falsifiability conditions from §<a href="#sec:hierarchy" data-reference-type="ref" data-reference="sec:hierarchy">4</a>. No noun in this class shows the reverse pattern (accepting *three* N while rejecting *many* N), which is exactly what the implicational hierarchy rules out. The triangular pattern holds:

- Singular form:

- *a*(*n*):

- Low cardinals:

- *several*: marginal ( for some speakers)

- High round numerals:

- *many*:

- Plural agreement:

Quasi-count nouns occupy a stable intermediate position, retaining loose properties (which tolerate low-precision individuation) while losing tight properties (which demand exact atomic units). *CGEL*’s descriptive category falls out as a natural class on the homeostatic account: nouns whose individuation profile licenses loose but not tight count morphosyntax.

## The *folks* case

The quasi-count nouns examined in §<a href="#sec:cgel" data-reference-type="ref" data-reference="sec:cgel">5.4</a> occupy stable positions at the extremes: *cattle* and *police* clearly reject low cardinals; *people* (and, for speakers who still use it, *folk* without -s) clearly accept them. To test the hierarchy’s predictions more sharply, we need a noun at the boundary, one where judgments are variable and construction-sensitive. American English *folks* is such a case.

Synchronically, *folks* sits between *people* and the quasi-count class. For many speakers, *many folks* and *several folks* are fully acceptable, and high round numerals such as *a hundred folks* are quite natural. At the same time, *three folks* is often judged marked, informal, or slightly odd, especially outside colloquial contexts. Some speakers reject *three folks* altogether; others accept it readily; still others accept it but hear it as more slangy than *three people*. In Figure <a href="#fig:matrix" data-reference-type="ref" data-reference="fig:matrix">2</a>, this shows up as a coral cell in the “low cardinals” column for *folks*. That mark isn’t noise; it reflects genuine instability in the countability profile.

On the present account, this is exactly what we should expect for a noun whose individuation profile is weakening but hasn’t fully collapsed. Morphologically, *folks* is simply a plural; it lacks a productive singular (\**a folks*) just as the basic collective sense of *folk* lacks one (\**a folk* in the ordinary “people” sense).

The difference from *cattle* and *police* is semantic and pragmatic. When a Texan says *folks around here*, she’s not just referring to people; she’s claiming them as her own. Uses like *you folks*, *our folks back home*, and *the folks down the street* package the referents as in-group collectives with a strong solidarity flavour. The word’s warmth (that sense of belonging and familiarity) is inseparable from its grammar. The individual atoms are still there ontically, but the noun’s dominant sense foregrounds the group, backgrounding precise, enumerable units. The warmth comes at a grammatical cost: *folks* resists the precision that *three* demands.

The corpus data from §<a href="#sec:existential" data-reference-type="ref" data-reference="sec:existential">5.3</a> confirm the suppression: *three folks* has only 3 total tokens in COCA (2 existential, 1 verb-following), too sparse to test construction-sensitivity. The suppression operates at the *three* + *folks* level before any construction effect can be measured. An acceptability study is needed to probe the gradient that corpus data can’t reveal.

Because the critical *three folks* cell is too sparse to support a direct corpus estimate of construction-sensitivity, I supplement the corpus analysis with a preregistered LLM-based judgment probe. The corpus serves as the primary benchmark for the attested community profile of countability in these nouns; the model is used only to test whether the hierarchy’s predicted extrapolation to sparse cells is recoverable under a fixed elicitation regime. On the present account, such outputs are not direct evidence of grammatical status itself. They are secondary evidence about detector-level responses to a boundary construction, to be interpreted against the corpus record rather than in place of it. [^9]

The hierarchy predicts that if construction-sensitivity exists, it should be specific to tight properties. Existential constructions foreground exact cardinality (*There are three folks waiting in the lobby*); agentive constructions allow it to be backgrounded (*Three folks signed the complaint*). *Three folks* should show a stronger existential–agentive asymmetry than *three people*, and *several folks* should show little or none. A 2$`\times`$<!-- -->2$`\times`$<!-- -->2 design crossing noun (*people* vs. *folks*), determinative (*three* vs. *several*), and construction type (existential vs. agentive), with *cattle* as a floor, would test this directly. [^10]

A preregistered probe (DOI: 10.5281/zenodo.19340604) tested this prediction using two frontier LLMs (Claude Sonnet 4.6 and GPT-5.4). Both models confirmed the noun $`\times`$ determinative hierarchy: *three folks* was rated substantially lower than *three people*, matching the tight-property suppression observed in COCA. The construction-sensitivity prediction was not confirmed: neither model showed an existential–agentive asymmetry. Full design, cell means, model comparison, and interpretation are in Appendix <a href="#app:probe" data-reference-type="ref" data-reference="app:probe">10</a>; stimuli, data, and analysis code are at <https://github.com/BrettRey/countability-hpc/tree/master/llm-probe>.

## Summary

The empirical picture converges on the hierarchy’s predictions. *CGEL*’s quasi-count nouns (§<a href="#sec:cgel" data-reference-type="ref" data-reference="sec:cgel">5.4</a>) occupy a stable intermediate position: they retain loose properties (*many*, plural agreement, high round numerals) while categorically rejecting tight ones (*a*(*n*), singular form, low cardinals) (Huddleston and Pullum 2002, 345). This is the triangular pattern the hierarchy predicts, and no noun in the class reverses the implicational order; if such a case were found, it would directly challenge the hierarchy.

The existential probe (§<a href="#sec:existential" data-reference-type="ref" data-reference="sec:existential">5.3</a>) adds a construction dimension. The loose property *many* distributes evenly across existential and verb-following frames for both *people* and *folks* (3.4% vs. 4.0% existential share), confirming that loose properties are construction-insensitive. *Cattle* categorically avoids quantified existentials (zero tokens across all three determinatives) while accepting bare existentials (6 tokens), evidence that quantifiers and existentials jointly amplify individuation demands. The critical cell (*three folks* in existentials) is too sparse to test construction-sensitivity directly; an acceptability study (§<a href="#sec:folks" data-reference-type="ref" data-reference="sec:folks">5.5</a>) would probe the gradient the corpus can’t reveal.

Together, the corpus data, the descriptive pattern, and the LLM probe provide complementary evidence. The hierarchy captures categorical dissociation (quasi-count nouns), selective suppression of tight properties (*folks*), and construction-specific avoidance (quantified existentials with *cattle*). The noun $`\times`$ determinative interaction is confirmed by two independent LLMs; the construction-sensitivity prediction is not, and remains open for human acceptability testing.

# Alternative accounts

The previous sections developed a positive account: morphosyntactic countability is an HPC maintained by bidirectional inference between form and semantic individuation. This section considers how alternative approaches fare against the same data. The key desiderata are: (a) predicting the ordered dissociation (tight properties lost before loose ones), and (b) predicting construction-sensitivity at the boundary (*folks*). No existing account delivers both without substantial additional stipulation.

## Feature-bundle and syntacticist approaches

Traditional accounts treat countability as a lexical feature or small feature bundle: \[±count\], \[±plural\], \[±bounded\]. On this view, *cattle* might be specified as \[+count, +plural-only\] or \[+plural, −singular\]. This framework established that countability involves multiple morphosyntactic properties that systematically pattern together, a descriptive achievement that any subsequent account must explain. Its strengths are real: formal explicitness, clean integration with broader syntactic theory, and straightforward cross-linguistic parameterization. But the approach can label the classes without deriving the implicational order.

Why should \[+plural-only\] nouns reject *a*(*n*) and low cardinals while retaining *many* and plural agreement? The feature system offers no principled answer; it must stipulate which properties each feature value licenses. Quasi-count nouns become a listed exception class rather than a predictable intermediate position. And the construction-sensitivity of *folks* has no straightforward expression in a system where features are either present or absent. If *folks* is \[+count\] or \[−count\], it should behave uniformly across constructions. The existential–agentive asymmetry requires additional apparatus.

Borer (2005) inverts the locus: nouns are born inert and acquire countability by merging with functional heads (Div, Cl, \#). This is a genuine advance for coercion and cross-linguistic variation, and the core insight (that countability isn’t purely lexical) is correct. But the approach faces the same problem in a new location. Why would Div or Cl heads selectively reject *cattle* with low cardinals but accept it with *many*? The syntacticist must posit fine-grained selectional features distinguishing *three* from *many*, features that recapitulate the precision hierarchy without explaining it. A natural response is to place a scalar precision parameter on Div itself, so the hierarchy falls out from a single functional head. This could in principle derive the same ordering, but it wouldn’t deliver perturbation-sensitivity, functional anchoring, or the projectibility payoff.

Both variants can describe the data, but description isn’t explanation. Whether the features live in the lexicon or in functional heads, the ordered dissociation and boundary effects require additional machinery that the feature system itself doesn’t provide.

## Semantics-driven accounts

Accounts in the tradition of Chierchia (1998) and Rothstein (2010) derive the mass/count distinction from semantic properties: atomicity, closure under sum, accessibility of minimal parts. On these approaches, *cattle* might be characterized as denoting atoms that aren’t “accessible” to the grammar in the way *cow* atoms are, or as having a “vague” atomic structure.

This captures something real. The semantic difference between *cattle* and *cows* isn’t merely morphological. But the purely semantic story doesn’t explain why weakened atomicity yields the specific dissociation pattern observed. If *cattle* has degraded atomic accessibility, why does it retain *many* but lose *three*? Both require reference to atoms in some sense. The ordered peeling (tight properties first, loose properties last) requires distinguishing among count properties by their precision demands, but purely semantic accounts typically treat “count syntax” as a unified licensing condition, or at best distinguish types of counting (e.g., measure vs. cardinal) without tying them to an ordered hierarchy of morphosyntactic properties.

Returning to *cattle*: if its atoms are inaccessible (Grimm 2018) or vaguely structured (Rothstein 2010), why does *many cattle* work while *three cattle* fails? The present account’s answer (they differ in precision demands) supplements rather than replaces these semantic analyses.

The present account doesn’t reject semantic distinctions; it incorporates them. Semantic individuation is the underlying variable to which morphosyntax is inferentially coupled. But the clustering and ordered dissociation are morphosyntactic phenomena that require a morphosyntax-facing story, not just a semantic one.

## Prototype and gradience approaches

Gradience-based accounts (Taylor 2003) comfortably acknowledge that *folks* is “peripheral” and *cattle* is “a bad count noun”. They reject sharp boundaries in favour of prototype structure. This is the nearest neighbour to the present account: both expect intermediate cases and gradient judgments. The prototype framework’s core contribution was to show that categorical approaches miss real patterns in the data; gradience isn’t noise to be explained away but structure to be accounted for.

The difference is explanatory depth. Prototype approaches treat the cluster as a description (some nouns are better exemplars, others worse) without specifying what makes a noun better or worse, or why the gradient has the shape it does. The present account adds:

1.  **A principled hierarchy.** Tight, moderate, and loose properties are distinguished by precision demands, not by arbitrary similarity to a prototype.

2.  **A stability story.** Quasi-count nouns are stable because functional anchoring (§<a href="#sec:stabilizers" data-reference-type="ref" data-reference="sec:stabilizers">3.3</a>) relieves pressure to develop tight properties. *Folks* is unstable because it lacks such anchoring. Prototype accounts predict gradience but not which intermediate positions are attractors.

3.  **Disconfirmation conditions.** The implicational order and the construction-sensitivity of *folks* are specific predictions. A noun accepting *three* N while rejecting *many* N would falsify the hierarchy. Prototype accounts, being descriptive, have no comparable commitments.

Gradience is real; the question is what generates it. The HPC account offers a mechanism; prototype approaches offer a geometry. Nothing in principle prevents a prototype account from adopting a mechanism like this; the point is that, as usually formulated, prototype structure is the end of the story, not the beginning.

## Summary

Each approach captures something real about countability, and the HPC account builds on insights from all of them: that multiple properties cluster and that syntax plays an active role in licensing them (feature-bundle and syntacticist approaches), that semantic individuation matters (semantics-driven approaches), and that gradience reflects systematic structure (prototype approaches). The HPC account isn’t the only approach that could, in principle, be extended to accommodate the data. But it is, as currently formulated, the only one that derives the ordered dissociation, predicts construction-sensitivity at the boundary, and explains why some intermediate positions are stable while others aren’t, all from a single mechanism linking morphosyntax to semantic individuation through bidirectional inference.

The deeper difference is between stipulated and explained projectibility. Feature bundles give you a projectible category (if *cattle* is \[+plural-only\], you know what it does), but the projection is encoded by fiat. The HPC account explains *why* the projection works: the inference mechanism that maintains the cluster is the same mechanism that underwrites the induction.

# Extensions

## Cross-linguistic predictions

The homeostatic account makes predictions beyond English. If bidirectional inference between morphosyntax and individuation is a general mechanism, languages with different morphological resources should show analogous clustering and dissociation patterns, adjusted for their particular count/mass encoding.

Languages with singulative/collective systems provide a natural test case. Welsh distinguishes three nominal classes: singular/plural (*cadair*/*cadeiriau* “chair/chairs”), collective/singulative (*adar*/*aderyn* “birds \[collective\]/a bird”), and noncountable (*llefrith* “milk”) (Grimm 2018, 530–35). The collective class contains nouns designating entities perceived as collectivities (small animals, insects, vegetation, granular substances), and it is historically stable and productive, absorbing English loanwords like *brics*/*bricsen* “bricks/a brick”. Crucially, some Welsh collectives support a three-way distinction: *grawn* (collective, “grain”), *gronyn* (singulative, “a grain”), *gronynnau* (individualized plural, “grains”). The collective and plural forms have distinct meanings: the pluralized singulative designates a set of individual grains; the bare collective does not.

The parallel to English quasi-count nouns is striking: Welsh collectives occupy the same position in the hierarchy that *cattle* and *police* occupy in English. Bare collectives accept loose quantifiers but resist low numerals and distributives; singulative-marked forms accept the full count cluster. Maltese shows the same split, with lower cardinal numerals (2–10) requiring a special determinate plural form distinct from the collective (Grimm 2018, 543). The mechanism predicts exactly this: wherever languages encode individuation morphologically, the tight/loose asymmetry should reappear.

Classifier languages offer a different configuration. In Mandarin and Japanese, nouns don’t inflect for number; classifiers mediate between numerals and nouns (Cheng and Sybesma 1998; Downing 1996). The count/mass distinction is located in classifier selection rather than noun morphology. The homeostatic account predicts that the clustering should shift to the classifier system: general classifiers (like Mandarin *gè*) should show the tight/loose asymmetries that English determinatives show, with some classifiers tolerating vague individuation and others requiring precise atomic reference.

These predictions are programmatic. Testing them requires detailed work on singulative semantics and classifier hierarchies that lies outside this paper’s scope. The point is that the mechanism (bidirectional inference linking form to individuation) should produce analogous clustering effects wherever languages encode individuation morphosyntactically, even if the specific properties differ. [^11]

## Diachronic predictions

Historical shifts provide evidence for the mechanism. Consider English *pea*. Speakers of Middle English heard *pease* with a final /z/ sound, the word for the vegetable, used in *pease porridge* and *pease pudding*. The noun was non-count: you had *much pease*, not \**many pease*. But the final /z/ was phonologically identical to the plural suffix, and at some point speakers reinterpreted it as such (Oxford English Dictionary Online 2024, s.v. *pea*, *n.<sup>1</sup>*). Once *pease* was heard as plural, the bidirectional inference mechanism kicked in: plural morphology cues individuation, so the noun should support other count properties. Speakers back-formed a singular *pea*, then extended the count cluster: *a pea*, *three peas*, *many peas*. The count cluster didn’t just emerge; speakers *built* it, one inference at a time.

The *OED* confirms the cascade. By 1666, the back-formed singular is attested: “A little vegetable bud…not so big…as a Pea” (Oxford English Dictionary Online 2024, s.v. *pea*, *n.<sup>1</sup>*, sense I.1.a). By 1711, a grammarian documents the reanalysis in progress: “Some words are used in both numbers, as Sheep…Pease…but it is better to say in the Singular Pea, in the Plural Peas” (Greenwood, *Essay Practical English Grammar*, p. 49). The hierarchy predicts that looser properties (*many peas*, plural agreement) should have been established before tighter ones (*a pea*, *three peas*), but the *OED* evidence doesn’t clearly resolve the ordering: by the earliest attestations of the back-formed singular, the full count cluster appears to be in place. What is clear is that the reanalysis triggered a cascade of count-property adoption, exactly as the homeostatic account predicts.

The reverse trajectory is visible in *data*, whose shift toward mass status as *datum* becomes archaic (§<a href="#sec:shared-cause" data-reference-type="ref" data-reference="sec:shared-cause">3.4</a>) shows the tight anchor being lost and the count cluster eroding in cascade (Garner 2016). A systematic survey of other historical mass$`\to`$count and count$`\to`$mass shifts (e.g., *news*, *corn*, *pox*) would test whether the tight-before-loose ordering generalizes beyond these two cases. The prediction is clear: nouns gaining count status should acquire loose properties first; nouns losing it should shed tight properties first. The evidence is currently limited to *pea* and *data*, and neither case cleanly resolves the internal ordering.

Cultural-evolutionary models of grammar show that stable morphosyntactic regularities can arise as equilibria of learning and use (Kirby et al. 2008). The persistence of quasi-count *cattle* and *police* over centuries plausibly reflects such an equilibrium.

## Functional anchoring

The homeostatic mechanism creates pressure toward coherence: nouns tend toward full count profiles or full mass profiles. But *cattle* and *police* have been quasi-count for centuries without drifting. The stability comes from the communicative ecology. Speakers who need singulative reference don’t attempt \**a cattle* or \**a police*; they use *cow*, *bull*, *head of cattle*, or *officer*. These functional singulatives absorb the pressure that would otherwise push the quasi-count noun toward tight properties.

Bidirectional inference generates expectations: if a noun accepts *many* N, hearers may expect it to accept *three* N and *a* N. When those expectations fail, pressure arises either to regularize (extend tight properties) or to avoid the construction. If an alternative lexeme satisfies the singulative function, speakers have no reason to force the quasi-count noun into tight frames; the pressure dissipates.

This predicts an asymmetry. Quasi-count nouns *with* available singulatives should be stable; those *without* should be unstable, drifting either toward full count (if individuation strengthens) or toward mass (if individuation weakens further).

*Police*/*officer* and *cattle*/*cow* fit the stable pattern. *Folks* fits the unstable pattern: there’s no singulative *\*a folk* in ordinary use, and *person* is semantically distinct (neutral rather than in-group). The variability of *three folks* in §<a href="#sec:folks" data-reference-type="ref" data-reference="sec:folks">5.5</a> is exactly what the account predicts for an unanchored quasi-count noun.

COCA frequencies confirm the offloading. For seven quasi-count/singulative pairs, the singulative absorbs the tight property at dramatically higher per-million rates:

<div id="tab:anchoring">

<table>
<caption>Functional anchoring: <em>three</em> per million tokens of each noun</caption>
<thead>
<tr>
<th style="text-align: left;">Quasi-count</th>
<th style="text-align: right;">Freq.</th>
<th style="text-align: right;"><em>three</em>/M</th>
<th style="text-align: left;">Singulative</th>
<th style="text-align: right;">Freq.</th>
<th style="text-align: right;"><em>three</em>/M</th>
<th style="text-align: right;">Ratio</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align: left;"><em>youth</em></td>
<td style="text-align: right;">49<span>,</span>846</td>
<td style="text-align: right;">201</td>
<td style="text-align: left;"><em>teenagers</em></td>
<td style="text-align: right;">13<span>,</span>180</td>
<td style="text-align: right;">11<span>,</span>912</td>
<td style="text-align: right;">59<span class="math inline">×</span></td>
</tr>
<tr>
<td style="text-align: left;"><em>police</em></td>
<td style="text-align: right;">220<span>,</span>858</td>
<td style="text-align: right;">91</td>
<td style="text-align: left;"><em>officers</em></td>
<td style="text-align: right;">60<span>,</span>161</td>
<td style="text-align: right;">3<span>,</span>956</td>
<td style="text-align: right;">44<span class="math inline">×</span></td>
</tr>
<tr>
<td style="text-align: left;"><em>cattle</em></td>
<td style="text-align: right;">14<span>,</span>376</td>
<td style="text-align: right;">487</td>
<td style="text-align: left;"><em>cows</em></td>
<td style="text-align: right;">9<span>,</span>574</td>
<td style="text-align: right;">3<span>,</span>865</td>
<td style="text-align: right;">8<span class="math inline">×</span></td>
</tr>
<tr>
<td style="text-align: left;"><em>clergy</em></td>
<td style="text-align: right;">5<span>,</span>879</td>
<td style="text-align: right;">510</td>
<td style="text-align: left;"><em>priests</em></td>
<td style="text-align: right;">12<span>,</span>168</td>
<td style="text-align: right;">2<span>,</span>876</td>
<td style="text-align: right;">6<span class="math inline">×</span></td>
</tr>
<tr>
<td style="text-align: left;"><em>gentry</em></td>
<td style="text-align: right;">2<span>,</span>126</td>
<td style="text-align: right;">0</td>
<td style="text-align: left;"><em>gentlemen</em></td>
<td style="text-align: right;">27<span>,</span>309</td>
<td style="text-align: right;">1<span>,</span>758</td>
<td style="text-align: right;">—</td>
</tr>
<tr>
<td style="text-align: left;"><em>vermin</em></td>
<td style="text-align: right;">1<span>,</span>041</td>
<td style="text-align: right;">0</td>
<td style="text-align: left;"><em>rats</em></td>
<td style="text-align: right;">10<span>,</span>649</td>
<td style="text-align: right;">657</td>
<td style="text-align: right;">—</td>
</tr>
<tr>
<td style="text-align: left;"><em>poultry</em></td>
<td style="text-align: right;">4<span>,</span>544</td>
<td style="text-align: right;">0</td>
<td style="text-align: left;"><em>chickens</em></td>
<td style="text-align: right;">8<span>,</span>745</td>
<td style="text-align: right;">3<span>,</span>431</td>
<td style="text-align: right;">—</td>
</tr>
<tr>
<td style="text-align: left;"><em>folks</em></td>
<td style="text-align: right;">65<span>,</span>895</td>
<td style="text-align: right;">258</td>
<td colspan="3" style="text-align: left;"><em>no singulative</em></td>
<td style="text-align: right;">—</td>
</tr>
</tbody>
</table>

</div>

Note: *Police* and *cattle* counts exclude modifier uses. *Poultry*: the one raw token of *three poultry* is a modifier use (*three poultry houses*). Per-million rates computed relative to total COCA frequency of each noun form. Pairs ordered by ratio; dashes indicate zero denominator. *Folks* (bottom row) is the unanchored control: no functional singulative is available, and the noun shows the predicted variability (§<a href="#sec:folks" data-reference-type="ref" data-reference="sec:folks">5.5</a>).

Every anchored pair shows the same pattern: the singulative absorbs the tight property at rates 6–59 times higher than the quasi-count noun. Three pairs (*gentry*, *vermin*, *poultry*) show categorical suppression: zero head uses of *three* with the quasi-count noun while the singulative accepts it freely. The *cattle*/*cows* comparison is the cleanest (same referents, same semantic domain): *three cows* at 3,865 per million vs. *three cattle* at 487, an 8-fold offset. *Folks*, lacking a functional singulative, shows the predicted instability.

The diachronic *data*/*datum* case (§<a href="#sec:shared-cause" data-reference-type="ref" data-reference="sec:shared-cause">3.4</a>) shows the same logic: as the singulative disappears, the anchoring is lost and the count cluster erodes.

# Outstanding issues

## Plural-only nouns

Plural-only nouns like *scissors*, *trousers*, *glasses* (spectacles), and *pants* require separate treatment. Unlike *police* and *cattle*, these nouns denote single objects that happen to have two salient parts. They take plural agreement (*these scissors are sharp*) and reject singular forms (\**a scissor*, \**a trouser*), but their resistance to singulars reflects morphological fossilization rather than degraded individuation.

The key difference: quasi-count nouns like *cattle* have weakened individuation at the semantic level (the noun packages referents as aggregates). Plural-only nouns have normal individuation: a pair of scissors is a single, discrete, enumerable object, but anomalous morphology. Speakers readily enumerate them (*three pairs of scissors*, *two pairs of trousers*), using the *pair of* construction to circumvent the morphological gap. This is unlike *cattle*, where *three head of cattle* is a specialized counting construction, not a routine singulative.

The distinction matters for the HPC account. Plural-only nouns like *scissors* are morphologically defective (no singular form) but fully individuated: they trigger plural agreement, select *many*/*several* over *much*, and resist mass quantification. Quasi-count nouns like *cattle* show a different profile: not merely a morphological gap but weakened individuation that bleeds tight properties even where morphology permits them. If the quasi-count pattern were purely morphological, plural-only nouns should show the same ordered dissociation; they don’t.

A full treatment would need to address why English developed these forms, whether the *pair of* construction is itself a loose- or tight property, and how plural-only nouns behave cross-linguistically. I set these questions aside here.

## Processing evidence

The account predicts specific processing signatures that haven’t been tested. If bidirectional inference is real, encountering one count property should prime expectations for others. Violations of cluster coherence should incur measurable costs.

Concrete predictions:

- **Priming asymmetries.** After processing *many cattle*, readers should show elevated expectations for other count properties. A subsequent \**three cattle* should incur a cost, but a smaller one than *three cattle* in isolation, because *many* has already activated partial individuation.

- **Graded violation costs.** Violations of tight properties (\**a cattle*) should incur larger costs than violations of loose properties (\**much cattle*) when both are embedded in otherwise count-compatible contexts, because tight properties have higher evidential thresholds.

- **Construction-sensitivity for *folks*.** Reading times or N400 amplitudes for *three folks* should differ between existential and agentive frames, with existentials showing greater processing difficulty.

These predictions are testable via self-paced reading, eye-tracking, or ERP methods. Null results wouldn’t necessarily falsify the account (the effects might be too small to detect, or overshadowed by lexical frequency differences), but confirmatory results would provide evidence that the mechanism operates in real-time comprehension, not just in offline acceptability judgments.

## Acquisition evidence

The account also makes acquisition predictions. If children learn count properties as a cluster tied to individuation, rather than property by property, specific patterns should emerge.

- **Overgeneralization.** Children exposed to loose count properties (*many police*) should overgeneralize to tight ones (\**three police*), treating any count property as evidence that the noun supports full individuation.

- **Ordered acquisition.** For nouns shifting toward count status (novel or low-frequency items), children should acquire loose properties before tight ones, paralleling the diachronic pattern in *pease* $`\to`$ *pea*.

- **Cluster effects.** Experimental training on one count property should generalize to others more readily than training on unrelated properties, because the cluster is learned as a unit.

Existing work on the acquisition of mass/count syntax (Barner and Snedeker 2005) provides some relevant data, but the specific predictions about ordered acquisition and overgeneralization for quasi-count nouns haven’t been tested. The ordered-acquisition prediction has a structural parallel in verbal morphology: Shirai and Andersen (1995) show that children acquire tense-aspect marking from the prototype outward (past tense first with \[+telic, +punctual, +result\] verbs, then extending to less prototypical cases). If the same prototype-to-periphery logic applies to count properties, loose properties (closer to the “non-singular” prototype) should be acquired before tight ones (requiring precise individuation). Corpus studies of child-directed speech and longitudinal production data would test this directly. The present mechanism is therefore offered as an inference to the best explanation: it is the simplest way to derive the observed clustering and ordered dissociation from independently motivated assumptions about form–meaning learning and use.

## Formalizing precision

The hierarchy rests on the notion that count properties differ in the precision of individuation they require. I’ve characterized this informally: *three* demands exact enumeration; *many* tolerates approximate magnitude. A natural objection is that this is circular: we know *three* requires more precision than *many* because *three cattle* fails and *many cattle* succeeds, but that’s the explanandum, not the explanans. The objection deserves a careful answer, and the answer turns on field-relative projectibility.

The hierarchy is a *morphosyntactic* generalization. It says: for English nouns, acceptance of tight count properties implies acceptance of loose ones, not the reverse. This is grounded in distributional evidence (the noun $`\times`$ property matrix, the COCA frequency data, the existential probe) and is falsifiable by any noun that reverses the implication. It doesn’t depend on any particular semantic formalization of “precision”; it’s a morphosyntactic fact about English, projectible for morphosyntactic purposes.

Pointwise mutual information (PMI) scores from COCA provide independent confirmation. For quasi-count nouns, tight determinatives show negative PMI (the combination is rarer than chance would predict given the individual frequencies of determinative and noun), while loose determinatives show positive PMI for the same nouns. Table <a href="#tab:precision" data-reference-type="ref" data-reference="tab:precision">2</a> extends this comparison across eight determinatives that dissociate frequency from precision. The critical case is *two* vs. *numerous*: *two* is 32 times more frequent than *numerous*, yet *two cattle* is repelled ($`\text{PMI} = -2.46`$) while *numerous cattle* is attracted ($`+0.97`$). Every tight determinative repels quasi-count nouns regardless of its frequency; every loose determinative attracts them regardless of its rarity. The ordering tracks semantic precision, not collocation frequency.

Semantic accounts offer candidate explanations for *why* the ordering has the shape it does. Grimm (2018) analyzes collectives and aggregates in terms of atomic accessibility: atoms exist in the denotation but aren’t accessible to certain quantificational operations. Rothstein (2010) distinguishes counting (requires context-relative atomicity, where atoms must be stable under context shift) from measuring (requires only a monotone scale). On this analysis, *three cattle* fails because *three* counts and *cattle*’s atoms aren’t accessible; *many cattle* succeeds because *many* measures. Chierchia (1998)’s mass/count parameter turns on whether atoms are encoded in lexical semantics; quasi-count nouns would have atoms semantically present but with degraded accessibility. Hackl (2000) treats *many* as a context-dependent degree modifier, which connects it to vagueness theory rather than counting.

These are analyses from formal semantics, projecting relative to truth conditions and compositionality. A semanticist might conclude that *many* and *much* are the same operation (degree modification over a scale) and that *many cattle* tells us nothing about *cattle*’s individuation. But morphosyntactically, *many* and *much* are in complementary distribution: *many cattle* yes, *much cattle* no, *many furniture* no, *much furniture* yes. Whatever *many* does semantically, it selects for something that mass nouns lack and quasi-count nouns retain. The morphosyntactic hierarchy captures this distributional fact; the semantic frameworks explain why the fact obtains. Both levels are real; they answer different questions. This is field-relative projectibility (§<a href="#sec:levels" data-reference-type="ref" data-reference="sec:levels">2</a>): the same data yield different right-sized categories for different inferential purposes.

The present account’s notion of “precision” maps onto these frameworks as follows. Properties higher in the hierarchy require more from the noun’s atomic structure: accessible, countable atoms (Grimm 2018), exact cardinality (Rothstein 2010), or atoms encoded in lexical semantics (Chierchia 1998). Properties lower in the hierarchy make progressively weaker demands, tolerating inaccessible atoms, measure-based quantification, or pragmatic construal. The hierarchy is thus derivable from standard semantic frameworks if we rank count properties by their atomic-accessibility demands. A full derivation would specify these demands as semantic presuppositions or selectional restrictions, deriving the ordering from independently motivated primitives.

I leave that for future work, noting that the morphosyntactic generalization is established here and that the semantic explanation, while not yet formalized, is constrained by and consistent with the distributional evidence. More broadly, the HPC framework’s insistence on field-relative projectibility dissolves apparent conflicts between semantic and morphosyntactic analyses of countability by recognizing them as different levels of description with different inferential purposes, rather than competing answers to a single question.

## A failure case: the traditional adverb

The framework isn’t vacuous; it predicts that some conventional grammatical categories will fail the diagnostics. Consider the traditional category “adverb,” which groups *quickly*, *very*, *yesterday*, *however*, and *not*. The projectibility test fails: knowing that a word modifies a verb doesn’t let you predict whether it can modify an adjective, take a complement, or occupy sentence-initial position. The homeostasis test fails too: removing any one supposed member or property doesn’t cause the rest to shift or regroup. The category is perturbation-inert because nothing holds it together causally. That’s the diagnostic difference: countability passes both tests because bidirectional inference maintains the cluster; “adverb” fails because it’s a wastebasket category with no stabilizing mechanism.

## Scope and limitations

This paper has focused on English. The cross-linguistic predictions in §<a href="#sec:crossling" data-reference-type="ref" data-reference="sec:crossling">7.1</a> are programmatic; testing them requires detailed work on singulative systems, classifier languages, and languages claimed to lack a grammatical mass/count distinction.

The *folks* construction-sensitivity prediction is tested here only with a preregistered LLM judgment probe, not with a controlled speaker-judgment experiment. The LLM probe should be read as a supplementary test of corpus-based extrapolations, not as establishing community repertoire on its own. The COCA frequency data reported in §<a href="#sec:corpus" data-reference-type="ref" data-reference="sec:corpus">5.2</a> support the predicted asymmetry for the hierarchy as a whole, but the specific existential–agentive interaction awaits human acceptability data.

Finally, the account is silent on why particular nouns have the individuation profiles they do. Why does *cattle* package referents as aggregates while *cows* individuates them? The answer presumably involves etymology, frequency, register, and the communicative functions the nouns serve, but these factors lie outside the scope of the homeostatic mechanism itself. The mechanism explains why individuation profiles produce the morphosyntactic patterns they do, not why nouns have the profiles they have. In standardized varieties, institutional norm-enforcement (teachers, editors, style guides, grammar checkers) provides an additional homeostatic layer, maintaining the cluster at the community level as well as in individual grammars.

# Conclusion

Morphosyntactic countability in English is a homeostatic property cluster. The properties that define count nouns (singular–plural contrast, *a*(*n*) selection, numeral compatibility, *many/few* vs. *much/little*, distributive quantifiers, plural agreement) cluster tightly not because they share an underlying feature but because they’re inferentially coupled to a common semantic variable: individuation.

The mechanism is bidirectional inference. Comprehenders infer individuated construals from count morphosyntax; speakers who adopt those construals choose count frames. This coupling, operating across acquisition, processing, and production, keeps the cluster self-reinforcing. When individuation weakens, count properties dissociate in a predictable order: tight properties (singular, *a*(*n*), low cardinals) fail before loose-linkage ones (*many*, high round numerals, plural agreement). The ordering follows from what each property semantically requires, not from stipulation.

The quasi-count pattern documented in *CGEL* (*cattle*, *police*, *poultry*, *vermin*) falls out as a natural class: nouns whose semantics supports only partial individuation, licensing loose but not tight count properties. The stability of these intermediates follows from functional anchoring: when singulatives like *officer* handle precise reference, pressure to extend tight properties dissipates. Unstable intermediates like *folks*, lacking such anchoring, show the predicted variability.

Because countability is a projectible kind, partial evidence about a noun’s count profile licenses specific predictions. A learner encountering a novel noun in a *many* N frame can project plural agreement but should withhold *a*(*n*); a parser processing *several cattle* can expect *many cattle* but not *three cattle*. The implicational hierarchy is the structure of this induction: it tells you which properties to expect, which to withhold, and where the boundary of reliable prediction lies. This is the epistemic payoff of the HPC analysis. The mechanisms matter not because they are interesting in themselves but because they underwrite this projectibility; without them, the clustering would be an accident and the predictions would be unreliable.

The account improves on alternatives. Feature-bundle approaches can label the classes but must stipulate the implicational order. Purely semantic accounts capture individuation but don’t explain why *many* survives when *three* fails. Syntacticist approaches locate countability in functional heads but must multiply selectional restrictions that recapitulate the hierarchy without deriving it. Prototype accounts describe gradience but don’t explain its shape or predict which intermediate positions are stable. Where feature bundles stipulate the cluster and prototypes describe it, the HPC account explains why it holds together and how it comes apart.

Several extensions remain. Cross-linguistically, the mechanism predicts analogous clustering in singulative/collective systems and classifier languages, adjusted for their morphosyntactic resources. Diachronically, it predicts that nouns gaining count status should acquire loose properties before tight ones, and nouns losing count status should shed tight properties first, patterns visible in *pease* $`\to`$ *pea* and *data*. Empirically, the *folks* probe proposed here offers a direct test of construction-sensitivity at the boundary; confirming the predicted existential–agentive asymmetry would strengthen the precision-based story.

The broader implication is methodological. Grammatical categories needn’t be monolithic features or vague prototypes. They can be homeostatic property clusters, stable configurations maintained by causal mechanisms rather than definitional essences. Countability is one such cluster. The HPC framework has been applied to phonemes, words, and constructions (Reynolds 2025b), and to definiteness (Reynolds 2025a). Other categories (perhaps transitivity, finiteness, or the noun/verb distinction itself) may repay similar analysis.

The payoff is practical. A learner who knows that *cattle* takes *many* can project plural agreement but withhold *a*(*n*); a grammarian who encounters an unfamiliar quasi-count noun can predict which diagnostics will fail and which will hold. The hierarchy specifies exactly where reliable prediction ends and genuine variation begins. That’s what makes countability worth treating as a real category rather than a convenient label: the clustering does epistemic work. Grammatical categories are projectible because mechanisms maintain them, and they come apart in principled ways because those mechanisms have structure.

# Acknowledgments

I used Claude Opus 4.6, Claude Sonnet 4.5, and ChatGPT 5.1 as drafting aids; I take responsibility for all remaining claims, errors, and interpretations.

# LLM judgment probe: design and results

## Design

The probe used a 2$`\times`$<!-- -->2$`\times`$<!-- -->2 factorial design crossing noun (*people* vs. *folks*), determinative (*three* vs. *several*), and construction (existential vs. agentive), with 16 VP lexicalizations per cell (128 critical items) plus 48 graduated fillers spanning four severity bands (good, mildly degraded, clearly degraded, ungrammatical). Two frontier LLMs (Claude Sonnet 4.6 and GPT-5.4) rated each item on a 1–7 Likert scale; five independent runs per model yielded 1,760 ratings. The probe was preregistered at Zenodo (DOI: 10.5281/zenodo.19340604) before any model was queried. Stimuli, data, pre-registration, and analysis code are available at <https://github.com/BrettRey/countability-hpc/tree/master/llm-probe>.

## Filler calibration

Both models used the scale informatively. Mean ratings by filler band:

| Filler band      | Mean |   SD |
|:-----------------|-----:|-----:|
| Good             | 7.00 | 0.00 |
| Mildly degraded  | 5.00 | 1.75 |
| Clearly degraded | 2.37 | 0.86 |
| Ungrammatical    | 1.00 | 0.00 |

The four bands separate monotonically, confirming that the scale functions as intended.

## Critical cell means

<table>
<thead>
<tr>
<th style="text-align: left;"></th>
<th style="text-align: left;"></th>
<th style="text-align: left;"></th>
<th colspan="2" style="text-align: center;">Claude Sonnet 4.6</th>
<th colspan="2" style="text-align: center;">GPT-5.4</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align: left;"><span>4-5</span> (lr)<span>6-7</span> Noun</td>
<td style="text-align: left;">Det</td>
<td style="text-align: left;">Construction</td>
<td style="text-align: right;">Mean</td>
<td style="text-align: right;">SD</td>
<td style="text-align: right;">Mean</td>
<td style="text-align: right;">SD</td>
</tr>
<tr>
<td style="text-align: left;"><em>people</em></td>
<td style="text-align: left;"><em>three</em></td>
<td style="text-align: left;">existential</td>
<td style="text-align: right;">7.00</td>
<td style="text-align: right;">0.00</td>
<td style="text-align: right;">6.91</td>
<td style="text-align: right;">0.28</td>
</tr>
<tr>
<td style="text-align: left;"></td>
<td style="text-align: left;"></td>
<td style="text-align: left;">agentive</td>
<td style="text-align: right;">7.00</td>
<td style="text-align: right;">0.00</td>
<td style="text-align: right;">6.94</td>
<td style="text-align: right;">0.24</td>
</tr>
<tr>
<td style="text-align: left;"></td>
<td style="text-align: left;"><em>several</em></td>
<td style="text-align: left;">existential</td>
<td style="text-align: right;">7.00</td>
<td style="text-align: right;">0.00</td>
<td style="text-align: right;">6.91</td>
<td style="text-align: right;">0.28</td>
</tr>
<tr>
<td style="text-align: left;"></td>
<td style="text-align: left;"></td>
<td style="text-align: left;">agentive</td>
<td style="text-align: right;">7.00</td>
<td style="text-align: right;">0.00</td>
<td style="text-align: right;">6.94</td>
<td style="text-align: right;">0.24</td>
</tr>
<tr>
<td style="text-align: left;"><em>folks</em></td>
<td style="text-align: left;"><em>three</em></td>
<td style="text-align: left;">existential</td>
<td style="text-align: right;">4.95</td>
<td style="text-align: right;">0.22</td>
<td style="text-align: right;">5.92</td>
<td style="text-align: right;">0.27</td>
</tr>
<tr>
<td style="text-align: left;"></td>
<td style="text-align: left;"></td>
<td style="text-align: left;">agentive</td>
<td style="text-align: right;">4.95</td>
<td style="text-align: right;">0.22</td>
<td style="text-align: right;">5.94</td>
<td style="text-align: right;">0.24</td>
</tr>
<tr>
<td style="text-align: left;"></td>
<td style="text-align: left;"><em>several</em></td>
<td style="text-align: left;">existential</td>
<td style="text-align: right;">6.00</td>
<td style="text-align: right;">0.00</td>
<td style="text-align: right;">5.92</td>
<td style="text-align: right;">0.27</td>
</tr>
<tr>
<td style="text-align: left;"></td>
<td style="text-align: left;"></td>
<td style="text-align: left;">agentive</td>
<td style="text-align: right;">6.00</td>
<td style="text-align: right;">0.00</td>
<td style="text-align: right;">5.94</td>
<td style="text-align: right;">0.24</td>
</tr>
</tbody>
</table>

## Findings

<figure id="fig:probe" data-latex-placement="H">

<figcaption>LLM probe cell means. Parallel lines within each determinative panel confirm no existential–agentive interaction. Vertical separation between <em>people</em> (blue) and <em>folks</em> (coral) confirms the hierarchy. Claude distinguishes <em>three folks</em> (4.95) from <em>several folks</em> (6.00); GPT-5.4 does not.</figcaption>
</figure>

**Hierarchy confirmed.** Both models rated *three folks* lower than *three people* (Claude: 4.95 vs. 7.00; GPT-5.4: 5.93 vs. 6.92). The tight property is suppressed for the boundary noun, matching the COCA corpus pattern. Claude additionally distinguished tight from moderate: *several folks* (6.00) was rated higher than *three folks* (4.95). GPT-5.4 did not make this distinction (*three folks* $`\approx`$ *several folks* $`\approx`$ 5.93), suggesting it represents the *folks* degradation as uniform rather than precision-graded.

**Construction-sensitivity null.** Neither model showed an existential–agentive asymmetry for any cell (interaction $`\approx`$ 0). Within-model variance was near zero: both models gave effectively deterministic ratings within conditions. This null result admits three interpretations: (a) the prediction is wrong; (b) prompted Likert ratings are too coarse to detect the effect; or (c) LLMs don’t represent construction-level individuation demands. The probe cannot distinguish these possibilities.

**Interpretation.** The noun $`\times`$ determinative hierarchy is recoverable from LLM representations; the construction $`\times`$ noun interaction is not. This supports the hierarchy as a distributional fact accessible even to models trained on text alone, while leaving the construction-sensitivity prediction open for human acceptability testing.

<div id="refs" class="references csl-bib-body hanging-indent">

<div id="ref-aarts2007" class="csl-entry">

Aarts, Bas. 2007. *Syntactic Gradience: The Nature of Grammatical Indeterminacy*. Oxford University Press. <https://doi.org/10.1093/oso/9780199219261.001.0001>.

</div>

<div id="ref-allan1980" class="csl-entry">

Allan, Keith. 1980. “Nouns and Countability.” *Language* 56 (3): 541–67. <https://doi.org/10.2307/414449>.

</div>

<div id="ref-barner2005" class="csl-entry">

Barner, David, and Jesse Snedeker. 2005. “Quantity Judgments and Individuation: Evidence That Mass Nouns Count.” *Cognition* 97 (1): 41–66. <https://doi.org/10.1016/j.cognition.2004.06.009>.

</div>

<div id="ref-bloom1994a" class="csl-entry">

Bloom, Paul. 1994. “Syntax–Semantics Mappings as an Explanation for Some Transitions in Language Development.” In *Other Children, Other Languages: Issues in the Theory of Language Acquisition*, edited by Yonata Levy. Lawrence Erlbaum Associates.

</div>

<div id="ref-borer2005" class="csl-entry">

Borer, Hagit. 2005. *Structuring Sense, Volume 1: In Name Only*. Oxford University Press. <https://doi.org/10.1093/acprof:oso/9780199263905.001.0001>.

</div>

<div id="ref-boyd1991" class="csl-entry">

Boyd, Richard. 1991. “Realism, Anti-Foundationalism and the Enthusiasm for Natural Kinds.” *Philosophical Studies* 61 (1–2): 127–48. <https://doi.org/10.1007/BF00385837>.

</div>

<div id="ref-bybee2010" class="csl-entry">

Bybee, Joan. 2010. *Language, Usage and Cognition*. Cambridge University Press. <https://doi.org/10.1017/CBO9780511750526>.

</div>

<div id="ref-cheng1998" class="csl-entry">

Cheng, Lisa Lai-Shen, and Rint Sybesma. 1998. “Yi-Wan Tang, Yi-Ge Tang: Classifiers and Massifiers.” *Tsing Hua Journal of Chinese Studies* 28 (3): 385–412.

</div>

<div id="ref-chierchia1998" class="csl-entry">

Chierchia, Gennaro. 1998. “Plurality of Mass Nouns and the Notion of “Semantic Parameter”.” In *Events and Grammar*, edited by Susan Rothstein. Kluwer. <https://doi.org/10.1007/978-94-011-3969-4_4>.

</div>

<div id="ref-chomsky1965" class="csl-entry">

Chomsky, Noam. 1965. *Aspects of the Theory of Syntax*. MIT Press.

</div>

<div id="ref-corbett2019" class="csl-entry">

Corbett, Greville G. 2019. “Pluralia Tantum Nouns and the Theory of Features.” *Morphology* 29: 51–108. <https://doi.org/10.1007/s11525-018-9336-0>.

</div>

<div id="ref-dahl2016" class="csl-entry">

Dahl, Östen. 2016. “Thoughts on Language-Specific and Crosslinguistic Entities.” *Linguistic Typology* 20 (2): 427–37. <https://doi.org/10.1515/lingty-2016-0016>.

</div>

<div id="ref-davies2020coca" class="csl-entry">

Davies, Mark. 2020. *The <span class="nocase">Corpus of Contemporary American English (COCA)</span>: 560 Million Words, 1990–2019*. Brigham Young University.

</div>

<div id="ref-dennett1991" class="csl-entry">

Dennett, Daniel C. 1991. “Real Patterns.” *The Journal of Philosophy* 88 (1): 27–51. <https://doi.org/10.2307/2027085>.

</div>

<div id="ref-dentella2023" class="csl-entry">

Dentella, Vittoria, Fritz Günther, and Evelina Leivada. 2023. “Systematic Testing of Three Language Models Reveals Low Language Accuracy, Absence of Response Stability, and a Yes-Response Bias.” *Proceedings of the National Academy of Sciences* 120: e2309583120. <https://doi.org/10.1073/pnas.2309583120>.

</div>

<div id="ref-downing1996" class="csl-entry">

Downing, Pamela. 1996. *Numeral Classifier Systems: The Case of Japanese*. John Benjamins. <https://doi.org/10.1075/sidag.4>.

</div>

<div id="ref-garner2016" class="csl-entry">

Garner, Bryan A. 2016. *Garner’s Modern English Usage*. 4th ed. Oxford University Press. <https://doi.org/10.1093/acref/9780190491482.001.0001>.

</div>

<div id="ref-gathercole1985" class="csl-entry">

Gathercole, Virginia C. M. 1985. “‘He Has Too Much Hard Questions’: The Acquisition of the Linguistic Mass–Count Distinction in *Much* and *Many*.” *Journal of Child Language* 12 (2): 395–415. <https://doi.org/10.1017/s0305000900006504>.

</div>

<div id="ref-goldberg1995constructions" class="csl-entry">

Goldberg, Adele E. 1995. *Constructions: A Construction Grammar Approach to Argument Structure*. University of Chicago Press.

</div>

<div id="ref-gordon1985" class="csl-entry">

Gordon, Peter. 1985. “Evaluating the Semantic Categories Hypothesis: The Case of the Count/Mass Distinction.” *Cognition* 20 (3): 209–42. <https://doi.org/10.1016/0010-0277(85)90009-5>.

</div>

<div id="ref-gordon1988" class="csl-entry">

Gordon, Peter. 1988. “Count/Mass Category Acquisition: Distributional Distinctions in Children’s Speech.” *Journal of Child Language* 15 (1): 109–28. <https://doi.org/10.1017/S0305000900012083>.

</div>

<div id="ref-grimm2018" class="csl-entry">

Grimm, Scott. 2018. “Grammatical Number and the Scale of Individuation.” *Language* 94 (3): 527–74. <https://doi.org/10.1353/lan.2018.0035>.

</div>

<div id="ref-hackl2000" class="csl-entry">

Hackl, Martin. 2000. “Comparative Quantifiers.” PhD thesis, MIT. <https://dspace.mit.edu/handle/1721.1/8765>.

</div>

<div id="ref-hu-levy2023" class="csl-entry">

Hu, Jennifer, and Roger Levy. 2023. “Prompting Is Not a Substitute for Probability Measurements in Large Language Models.” *Proceedings of the 2023 Conference on Empirical Methods in Natural Language Processing*, 5040–60.

</div>

<div id="ref-hu2024" class="csl-entry">

Hu, Jennifer, Kyle Mahowald, Gary Lupyan, Anna Ivanova, and Roger Levy. 2024. “Language Models Align with Human Judgments on Key Grammatical Constructions.” *Proceedings of the National Academy of Sciences* 121 (36): e2400917121. <https://doi.org/10.1073/pnas.2400917121>.

</div>

<div id="ref-huddleston2002" class="csl-entry">

Huddleston, Rodney, and Geoffrey K. Pullum. 2002. *The Cambridge Grammar of the English Language*. Cambridge University Press. <https://doi.org/10.1017/9781316423530>.

</div>

<div id="ref-juzek2024" class="csl-entry">

Juzek, Tom S. 2024. “The Syntactic Acceptability Dataset (Preview): A Resource for Machine Learning and Linguistic Analysis of English.” *Proceedings of the 2024 Joint International Conference on Computational Linguistics, Language Resources and Evaluation (LREC-COLING 2024)*, 16113–20.

</div>

<div id="ref-khalidi2013" class="csl-entry">

Khalidi, Muhammad Ali. 2013. *Natural Categories and Human Kinds: Classification in the Natural and Social Sciences*. Cambridge University Press. <https://doi.org/10.1017/CBO9780511998553>.

</div>

<div id="ref-kirby2008" class="csl-entry">

Kirby, Simon, Hannah Cornish, and Kenny Smith. 2008. “Cumulative Cultural Evolution in the Laboratory: An Experimental Approach to the Origins of Structure in Human Language.” *Proceedings of the National Academy of Sciences* 105 (31): 10681–86. <https://doi.org/10.1073/pnas.0707835105>.

</div>

<div id="ref-langacker1987foundations" class="csl-entry">

Langacker, Ronald W. 1987. *Foundations of Cognitive Grammar: Theoretical Prerequisites*. Stanford University Press.

</div>

<div id="ref-leivada2024reply" class="csl-entry">

Leivada, Evelina, Fritz Günther, and Vittoria Dentella. 2024. “Reply to Hu Et Al.: Applying Different Evaluation Standards to Humans Vs. Large Language Models Overestimates AI Performance.” *Proceedings of the National Academy of Sciences* 121 (36): e2406752121. <https://doi.org/10.1073/pnas.2406752121>.

</div>

<div id="ref-lima2014" class="csl-entry">

Lima, Suzi. 2014. “All Nouns Are Both Mass and Count in Yudja.” *Proceedings of SULA 7*, 109–27.

</div>

<div id="ref-miller2021" class="csl-entry">

Miller, J. T. M. 2021. “Words, Species, and Kinds.” *Metaphysics* 4 (1): 18–31. <https://doi.org/10.5334/met.70>.

</div>

<div id="ref-oed" class="csl-entry">

Oxford English Dictionary Online. 2024. “OED Online.” Oxford University Press. <https://www.oed.com>.

</div>

<div id="ref-qiu2024" class="csl-entry">

Qiu, Zhuang, Xufeng Duan, and Zhenguang G. Cai. 2024. “Evaluating Grammatical Well-Formedness in Large Language Models: A Comparative Study with Human Judgments.” *Proceedings of the Workshop on Cognitive Modeling and Computational Linguistics*, 189–98.

</div>

<div id="ref-qiu2025" class="csl-entry">

Qiu, Zhuang, Xufeng Duan, and Zhenguang G. Cai. 2025. “Grammaticality Representation in ChatGPT as Compared to Linguists and Laypeople.” *Humanities and Social Sciences Communications*, ahead of print. <https://doi.org/10.1057/s41599-025-04907-8>.

</div>

<div id="ref-reynolds2025definiteness" class="csl-entry">

Reynolds, Brett. 2025a. “Definiteness and Deitality in English: A Homeostatic Property Cluster Account.” <https://ling.auf.net/lingbuzz/009369>.

</div>

<div id="ref-reynolds2025stack" class="csl-entry">

Reynolds, Brett. 2025b. “Phonemes, Words, and Constructions as Homeostatic Property Clusters.” <https://ling.auf.net/lingbuzz/009400>.

</div>

<div id="ref-rothstein2010" class="csl-entry">

Rothstein, Susan. 2010. “Counting and the Mass/Count Distinction.” *Journal of Semantics* 27 (3): 343–97. <https://doi.org/10.1093/jos/ffq007>.

</div>

<div id="ref-shirai1995" class="csl-entry">

Shirai, Yasuhiro, and Roger W. Andersen. 1995. “The Acquisition of Tense-Aspect Morphology: A Prototype Account.” *Language* 71 (4): 743–62. <https://doi.org/10.2307/415743>.

</div>

<div id="ref-sinha2023" class="csl-entry">

Sinha, Koustuv, Jon Gauthier, Aaron Mueller, et al. 2023. “Language Model Acceptability Judgements Are Not Always Robust to Context.” *Proceedings of the 61st Annual Meeting of the Association for Computational Linguistics (Volume 1: Long Papers)*, 6043–63.

</div>

<div id="ref-strogatz2015" class="csl-entry">

Strogatz, Steven H. 2015. *Nonlinear Dynamics and Chaos: With Applications to Physics, Biology, Chemistry, and Engineering*. 2nd ed. Westview Press.

</div>

<div id="ref-taylor2003" class="csl-entry">

Taylor, John R. 2003. *Linguistic Categorization*. 3rd ed. Oxford University Press. <https://doi.org/10.1093/oso/9780199266647.001.0001>.

</div>

<div id="ref-tomasello2003" class="csl-entry">

Tomasello, Michael. 2003. *Constructing a Language: A Usage-Based Theory of Language Acquisition*. Harvard University Press. <https://doi.org/10.2307/j.ctv26070v8>.

</div>

</div>

[^1]: In the sense of Dennett (1991): a pattern that supports better-than-chance prediction and whose recognition yields explanatory gains not available without it.

[^2]: See Bloom (1994, Table 3.2, pp. 59–60). Bloom shows that such errors are significantly more frequent for object-mass nouns than for substance-mass nouns like *water* and *milk*.

[^3]: In quantity-judgment tasks, 4-year-olds chose by number 95% of the time for object-mass nouns vs. 9% for substance-mass nouns; adults showed 97% vs. 0% (Barner and Snedeker 2005, 50–51).

[^4]: Demonstratives pattern with the tight group: quasi-count and plural-only nouns strongly prefer *these*/*those* over *this*/*that* (*these police*, \**this police*; *these scissors*, \**this scissors*) (Huddleston and Pullum 2002, 356). Distributive quantifiers (*each*, *every*) likewise require discrete units and fail with quasi-count nouns (\**every cattle*, \**each police*). Other diagnostics (partitives like *piece of* N, measure/classifier uses, bare-plural generics, NPI *any*) track the same tight/loose split and add redundancy rather than new contrasts, so they are omitted here for brevity.

[^5]: Bare singulars in these idiomatic contexts don’t show full mass behaviour; they pattern with weakened individuation, so a tight property drops out while looser properties (plural agreement, *many*) remain available. This matches the hierarchy’s prediction.

[^6]: Singular–plural syncretisms (*sheep*, *fish*, *aircraft*, *species*) and collective nouns with notional agreement (BrE *the committee are*) raise distinct issues; I set them aside here but note they appear consistent with the hierarchy. Syncretisms retain the full count cluster despite morphological identity; collectives with plural agreement accept loose properties while variably accepting tight ones, much like quasi-count nouns.

[^7]: I refer here only to cardinal numerals; the status of any cardinals among the clergy I leave to ecclesiologists.

[^8]: *Troop* as a collective unit exists (*a scout troop*), but *troops* meaning soldiers has no singular *a troop*. *A folk* survives in archaic registers. The key point is that these nouns permit low cardinals despite the morphological gap.

[^9]: This use is intentionally limited. Recent work suggests that frontier large language models can align substantially with human acceptability judgments in some English tasks, especially under carefully chosen evaluation methods, but that the alignment is highly method-sensitive and does not license strong claims about human-like grammatical competence. Results vary with prompting, probability-based versus metalinguistic readout, context manipulation, and language of evaluation (Qiu et al. 2024, 2025; Hu et al. 2024; Hu and Levy 2023; Sinha et al. 2023; Dentella et al. 2023; Leivada et al. 2024; Juzek 2024). LLM outputs are therefore suitable here only as preregistered exploratory instruments for sparse-cell extrapolation, not as substitutes for speaker judgments or as arbiters of grammatical status.

[^10]: For many speakers, colloquial *there’s three folks* is more acceptable than *there are three folks*, likely reflecting register congruence and the lower precision demands of the invariant existential. The standard agreeing form *there are* maintains the high-precision condition. *There are three guys* (equally informal but fully count) is acceptable, so the *folks* degradation isn’t purely register mismatch.

[^11]: Some languages (e.g., Yudja) have been claimed to lack a grammatical mass/count distinction entirely. Recent work suggests these cases involve covert classifiers or restricted numeral semantics rather than true absence of the distinction (Lima 2014). If a language genuinely lacks morphosyntactic resources encoding individuation, the homeostatic mechanism would have nothing to operate on, and no clustering would be predicted.
