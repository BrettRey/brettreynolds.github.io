---
title: "Reference as a cluster concept: A reply to Coelho Mollo and Milliere"
author: "Brett Reynolds"
year: "2026"
status: "Under review at Philosophy and the Mind Sciences"
canonical_url: "https://philarchive.org/rec/REYRAA-2"
website_url: "https://brettreynolds.ca/papers/reference-as-cluster-concept/"
markdown_url: "https://brettreynolds.ca/papers/reference-as-cluster-concept/paper.md"
version: "author-manuscript mirror"
version_date: "2026-06-12"
keywords: ["reference", "large language models", "vector grounding problem", "teleosemantics"]
---
# Reference as a cluster concept: A reply to Coelho Mollo and Milliere

**Author-manuscript mirror.** This Markdown file is provided for accessibility, search, and machine readability. The canonical public record is linked in the metadata above.

## Abstract
Coelho Mollo and Millière pose the Vector Grounding Problem: how the internal states of large language models could acquire extra-linguistic reference. They answer it with a two-condition teleosemantic account requiring causal-informational coupling to the world and a selection history that gives states the function of carrying that information. This reply accepts those teleosemantic foundations but argues that what the grounding debate calls “referential grounding” is itself a cluster concept. It bundles at least four distinct relations: teleosemantic selection, causal-informational coupling, communicative calibration, and inferential-role structure. Drawing on homeostatic property cluster theory, I replace the binary grounded/ungrounded verdict with a groundedness profile that records where a system sits on each strand. The payoff is explanatory and predictive: the profile decomposes the broader bundle often circulating under the name “grounding” into stabilizers that predict robustness, corrigibility, and characteristic failure under correction, prompt pressure, and domain shift in ways a binary verdict can’t.


# Introduction

Coelho Mollo and Millière (2026) pose the Vector Grounding Problem: how can the internal states of large language models acquire extra-linguistic reference without depending on an external interpreter? The question descends from Harnad (1990)’s Symbol Grounding Problem but targets vector representations rather than symbolic ones, and it arrives at a more optimistic verdict.

Their answer draws on teleosemantics. Referential grounding obtains, they argue, when a system’s internal states satisfy two conditions: “(1) they stand in appropriate causal-informational relations to the world, and (2) they have a history of selection that has endowed them with the function of carrying this information” (Coelho Mollo and Millière 2026, 1). LLMs can meet both, they contend, even without multimodality or embodiment, because training regimes select for states that track worldly features.

This is a productive contribution. Two moves deserve particular credit. The taxonomy of grounding notions (referential, sensorimotor, relational, communicative, epistemic) clarifies a debate that routinely conflates distinct demands. Separating referential from relational grounding, in particular, blocks a common slide from rich internal structure to genuine aboutness.

The teleosemantic framing is equally important. Correctness conditions aren’t optional but constitutive of genuine reference, and Coelho Mollo and Millière (2026) show that training-regime selection can play the functional role of biological selection in classical teleosemantics. Before engaging with this paper, I didn’t think gradient-based optimization could play the teleosemantic role of natural selection. Their argument changed my mind – which is, after all, the strongest form of grounding one philosopher can offer another. This reply preserves that insight and builds on it.

The two conditions already contain the resources for a graded analysis, but the graded structure remains implicit. This reply argues that what the debate calls “referential grounding” is itself a cluster concept: it bundles at least four theoretically distinct relations from different philosophical traditions that co-occur in paradigmatic grounders but can dissociate. Teleosemantic selection history, causal-informational coupling, communicative calibration, and inferential-role structure each contribute to a system’s groundedness profile, and their co-occurrence is projectible (see Goodman 1955), not in the sense that thin intrinsic meaning straightforwardly predicts benchmark performance, but in the sense that knowing where a system sits on some strands supports predictions about robustness, corrigibility, and patterned failure along others. Homeostatic property cluster (HPC) theory provides the tools for modelling this: a cluster kind whose strands dissociate at the boundaries but co-occur stably enough, in paradigmatic cases, to support those narrower predictions. The profile doesn’t compete with the two-condition account. It decomposes a thicker explanatory target (world-directed reliability and its failure modes) around the thinner teleosemantic notion of reference the target paper defends. If one prefers to reserve “reference” for that thin teleosemantic core, the present claim can be read more cautiously as a claim about “referential grounding” in the broader sense operative in this debate.

I believe reference has this cluster structure in general, including in humans, where the strands co-extend so thoroughly that their compositionality is invisible. This paper defends the narrower claim: the profile framework outperforms the binary verdict for the cases the grounding debate actually cares about. A full defence of the metaphysical claim (that reference is a cluster concept even where the cluster doesn’t fray) is developed in Reynolds (2026b). What follows here is the predictive arm of that argument, but it needs stating carefully: the profile earns its keep not by predicting average performance from intrinsic meaning simpliciter, but by generating testable predictions about which stabilizers are doing the work, how they can dissociate, and what failure profile to expect when they do. But even that predictive claim needs the HPC apparatus, not just a list of dimensions. A pragmatic checklist would tell you where a system sits on each strand; it wouldn’t tell you why the strands co-vary, when an intervention on one strand should spill over into another, or what to expect when a change remains merely local. HPC structure is what makes the profile projectible: it explains co-variation and asymmetric propagation rather than merely recording them.

This reply develops that reframing. Section <a href="#sec:target" data-reference-type="ref" data-reference="sec:target">2</a> reconstructs the target argument and its taxonomy. Section <a href="#sec:profiles" data-reference-type="ref" data-reference="sec:profiles">3</a> argues that referential grounding is a cluster concept and introduces the groundedness-profile framework. Section <a href="#sec:calibration" data-reference-type="ref" data-reference="sec:calibration">4</a> examines communicative calibration as a stabilizing mechanism. Section <a href="#sec:octopus" data-reference-type="ref" data-reference="sec:octopus">5</a> revisits the octopus test (Bender and Koller 2020). Section <a href="#sec:adjacent" data-reference-type="ref" data-reference="sec:adjacent">6</a> positions the reply against adjacent accounts. Section <a href="#sec:conclusion" data-reference-type="ref" data-reference="sec:conclusion">7</a> concludes.

# The target argument

Coelho Mollo and Millière (2026) distinguish five notions of grounding that circulate in debates about meaning in biological and artificial systems: referential, sensorimotor, relational, communicative, and epistemic. The distinctions are worth rehearsing because the reply developed here depends on them (for a complementary taxonomy, see (Pavlick 2023)).

Referential grounding connects representations to worldly entities and properties: it’s what makes a representation *about* something. Sensorimotor grounding ties representations to sensory or motor states, either by linking them to sensorimotor representations within a cognitive system or by requiring direct causal contact between transducers and the world.

Relational grounding locates meaning in intra-system relations: a word’s content is partly determined by its inferential and distributional connections to other words. Communicative grounding is the coordination process by which interlocutors calibrate shared usage in dialogue. And epistemic grounding connects expressions to structured knowledge bases.

Their central taxonomic move is an elimination argument. Sensorimotor contact, they argue, either collapses into referential grounding (causal contact with the world is one component of referential anchoring) or merely postpones the problem (linking a representation to another representation doesn’t explain how either connects to the world).

Relational grounding can’t escape the representational merry-go-round: however rich the inferential structure, it doesn’t by itself yield world-directed correctness conditions, except perhaps for a narrow class of logical connectives whose content is exhausted by their formal role (Coelho Mollo and Millière 2026, 9–10). Communicative and epistemic grounding face analogous difficulties. Only referential grounding directly addresses how representations hook onto the world.

With the field narrowed, the paper draws on theories of representational content, particularly the teleosemantic tradition developed by Millikan (2017), Neander (2017), and Shea (2018), to specify two conditions. First, a system’s internal states have to stand in appropriate causal-informational relations to the world: they have to carry information about worldly entities because of causal connections, however mediated, between those entities and the system. Second, the states have to have a selection history that has endowed them with the function of carrying this information. The second condition supplies normativity. Without it, any causal correlation would trivially count as representation. Selection history explains why some information-carrying states are representations and others aren’t: representations were selected *for* their information-carrying role, and can therefore succeed or fail: they can misrepresent (Coelho Mollo and Millière 2026, 11–12).

When the paper applies these conditions to LLMs, two features of the application deserve emphasis. First, the scope is explicitly limited: the paper doesn’t claim that LLMs understand language, possess beliefs, or have cognitive capacities more broadly. The sole contention is that LLM internal states can satisfy conditions for referential grounding, making their outputs intrinsically meaningful in a specific technical sense.

Second, the causal-informational relations needn’t be direct. LLMs access the world through training data produced by humans whose linguistic activity bears the causal imprint of worldly interaction. This is analogous, they argue, to how humans acquire referentially grounded representations through testimony and social learning rather than exclusively through direct perception (Coelho Mollo and Millière 2026, 13–14). The paper already distinguishes stronger and weaker grounding routes: post-training fine-tuning against human preferences provides firmer selection history than pre-training on next-token prediction, and whether in-context learning constitutes selection at all remains an open question (Coelho Mollo and Millière 2026, 15–16). The framework, in other words, already contains the resources for a graded analysis. But the graded structure points to something the target paper doesn’t make explicit: its own qualifications suggest that “referential grounding” is itself composite (Section <a href="#sec:profiles" data-reference-type="ref" data-reference="sec:profiles">3</a>).

# Reference as a cluster concept

## Decomposing the hooking metaphor

The target paper sets aside the philosophical complexities of reference: “the intuitive notion captured by the ‘hooking’ metaphor will suffice” (Coelho Mollo and Millière 2026, fn. 11, p. 6). For their purposes, this is reasonable. But the hooking metaphor bundles four theoretically distinct relations. Content determination via selection history (teleosemantics) isn’t the same relation as causal-informational coupling, which isn’t the same as communicative calibration, which isn’t the same as inferential-role structure. These come from different research programmes and answer different questions about what makes representations about the world. The inclusion criterion is twofold: each strand has to (a) come from a developed philosophical tradition of content determination[^2] and (b) help explain independently testable patterns of world-directed reliability or failure under intervention. Four strands meet both conditions: teleosemantic selection, causal-informational coupling, communicative calibration, and inferential-role structure. Sensorimotor contact fails (b): it collapses into causal coupling or teleosemantic selection, as the target paper itself argues. Any future candidate that meets both criteria belongs in the profile. To keep the decomposition visible, I’ll mark them: grounding<sub>tele</sub>, grounding<sub>causal</sub>, grounding<sub>comm</sub>, and grounding<sub>infer</sub>.

The target paper’s own framing implicitly acknowledges this compositionality. Sensorimotor contact is absorbed as “just one of the components” that can underlie referential grounding (Coelho Mollo and Millière 2026, 9), and communicative grounding is “related in important ways” to referential grounding (Coelho Mollo and Millière 2026, 8). The graded structure the target paper acknowledges is a symptom of this compositionality. Different strands can be present to different degrees because they are different things.

The compositionality is hard to see because the strands mostly co-extend. In paradigmatic human cases, a speaker who satisfies teleosemantic correctness conditions also stands in robust causal-informational relations to the world, participates in communicative calibration, and commands rich inferential-role structure. The extensions overlap so thoroughly that it’s natural to treat them as one property, the way proper name (a semantic notion: rigid designation of a particular) and proper noun (a syntactic category) are routinely conflated because they pick out mostly the same expressions. It takes boundary cases (titles, brand names, place descriptions like *The Hague*) to reveal that the syntactic and semantic classifications serve different purposes. Human cases already show the dissociation. I refer to uranium successfully via testimony: rich grounding<sub>infer</sub>, strong grounding<sub>comm</sub> (community-calibrated usage), negligible personal grounding<sub>causal</sub>. Reference succeeds because world-linking strands operate at the community level, not the individual speaker. Conversely, the first use of a coinage like *Brexit* inverts the pattern: no selection history favouring world-tracking (grounding<sub>tele</sub> minimal), no established causal chain (grounding<sub>causal</sub> thin), but grounding<sub>comm</sub> bootstraps reference in real time; strands come online at different rates.

Congenital blindness provides a cleaner dissociation still. People born blind acquire colour similarity judgments that approximate the Newtonian colour wheel, construct causal theories of vision, and use colour terms productively, all from language alone (Z. Wang et al. 2026). In profile terms: rich grounding<sub>infer</sub>, strong grounding<sub>comm</sub> (community-calibrated visual vocabulary), zero personal grounding<sub>causal</sub> for the visual domain. Blind speakers refer to colours competently, yet one world-linking strand is entirely absent at the individual level.

LLMs and the octopus are further boundary cases: systems where the strands of reference come apart, exposing a compositionality that co-extension normally hides. Boyd (1999, 148) makes this point for natural kinds generally: projectibility is discipline relative, and the same term can be projectible for different inductive purposes in different disciplinary contexts.

This is why the binary question (“Do LLMs refer?”) yields intractable disagreement. It lumps together four relations that can dissociate. Participants talk past each other because one has content determination in mind while another is tracking causal coupling. Each wins the argument they’re having; neither wins the one they share. The profile framework below makes these strands explicit and asks where a given system sits on each.

## Cluster kinds and projectibility

The move I’m proposing is to complement the threshold question (“Does this system satisfy both conditions?”) with a profile question (“Along which dimensions, and how stably, are this system’s representations anchored to worldly correctness?”). The right tool for this is homeostatic property cluster (HPC) theory.

Consider the paradigm case. Biological species are HPC kinds: genetic, morphological, ecological, and behavioural properties cluster because reproductive isolation and developmental canalization sustain co-occurrence, but they don’t guarantee it. These properties come from different biological domains, but they travel together reliably enough to support induction. Knowing an animal is a tiger lets you predict its genome, its morphology (striped fur, retractile claws), its ecology (solitary apex predator), and its behaviour (ambush hunting), not because each property is definitionally necessary, but because the cluster is stable enough to support induction. Ring species and hybrid zones show the cluster fraying at boundaries, and those boundary cases are informative precisely because the mechanisms usually hold things together (Boyd 1999). The parallel is direct: the four strands of referential grounding come from different philosophical traditions (teleosemantics, causal theory, pragmatics, inferential role semantics), but they co-occur in paradigmatic grounders, and the payoff is the same: projectibility. Groundedness, I’m suggesting, has analogous structure.

An HPC kind is one “whose definitions are provided not by any set of necessary and sufficient conditions, but instead by a ‘homeostatically’ sustained clustering of those properties” (Boyd 1999, 141). What makes HPC kinds scientifically useful is their projectibility: “the naturalness of natural kinds consists in their aptness for induction and explanation”; they support “projectible hypotheses” whose reliability reflects the causal structure of the clustered properties (Boyd 1999, 147). For groundedness, this means the clustering is reliable enough that knowing a system’s position on some dimensions supports predictions about others. This is the central advantage over a binary verdict. A threshold answer tells you whether a system passes. A profile tells you what kinds of robustness and breakdown to expect from it across novel domains and conditions. The move is compatible with deflationary approaches to representation that insist on empirical adequacy over metaphysical inflation (Coelho Mollo 2022): groundedness profiles don’t require settling the metaphysics of content, only identifying stable, predictive co-occurrence.

Two objections arise here. First, Boyd developed HPC for natural kinds in biology. Applying it to a philosophical concept looks like a category shift. But Boyd’s own accommodation thesis extends HPC to any domain where property clustering reflects causal structure; the claim isn’t that reference is a biological kind but that the properties grouped under “referential grounding” cluster for causal reasons (shared feedback loops, developmental co-occurrence) and come apart when those causes are absent (Boyd 1999, 147–48). That’s what HPC is *for*. Second, Boyd (1999, 148) notes that projectibility is discipline relative. This has a deeper implication for the grounding debate: AI safety cares whether the profile predicts reliability under deployment conditions, philosophy of mind cares whether it predicts the presence of genuine aboutness, and cognitive science cares whether it predicts patterns of systematic error. These overlapping but non-identical profiles are each projectible for their own inductive purposes.

A third objection presses harder. Magnus (2014) argues that being a natural kind is neither necessary nor sufficient for being an HPC kind, and critics have worried that the homeostatic-mechanism requirement is too permissive: almost any stable cluster can be retrofitted with a mechanism story (see Craver 2009). The profile framework’s response is empirical rather than definitional. The asymmetric spillover predictions and the concrete falsification conditions stated below (Section <a href="#sec:predictions" data-reference-type="ref" data-reference="sec:predictions">3.3</a>) give the framework testable commitments that a merely nominal cluster wouldn’t generate. If interventions on one strand never produce the predicted changes in another, the HPC claim fails and the profile reduces to an SPC-level stable cluster, which remains more informative than a binary verdict but forfeits the mechanistic explanation.

Modelling groundedness as an HPC kind requires separating two things that the existing literature tends to run together: the *clustered properties* that characterize robustly grounded systems and the *homeostatic mechanisms* that explain why those properties stably co-occur. The clustered properties are observable features like cross-context referential reliability, patterned misrepresentation (errors that track meaningful worldly distinctions rather than random noise), robustness under domain shift, and stability under correction. Their stable co-occurrence is what makes the profile projectible. Stable here doesn’t mean invariant. It means the cluster profile is identifiably similar across contexts, time points, or perturbations, similar enough to support the inductive projections the profile is designed for. The homeostatic mechanisms that explain why these properties travel together are woven into the strand treatments below.

What makes this clustering projectible rather than coincidental? Counterfactual robustness. A system that happens to produce accurate outputs on any given Tuesday doesn’t predict accuracy on Wednesday. A system whose accuracy is sustained by selection history and communicative calibration does, because the conditions that produced accuracy on one occasion are still operating on the next. The test is whether co-occurrence would persist under perturbations that leave the underlying structure intact. A lucky Tuesday isn’t yet a theory of Wednesday.

The argument here has three levels. At the floor, the strands co-vary stably, which is all that Slater (2015)’s stable property cluster (SPC) kinds require: sufficiently stable co-instantiation of the relevant properties. Even at this level, the profile is more informative than a binary verdict because it records which dimensions co-vary and which dissociate. At the ceiling, the co-variation is explained by shared causal structure, the HPC claim I develop below, with named mechanisms for each strand. Between floor and ceiling lies the empirical programme: testing whether the proposed mechanisms are actually operating, pushing how-plausibly schemas toward how-actually status. The SPC hedge isn’t a retreat from HPC. It states the epistemic floor honestly while I build toward the ceiling. [^3]

## The groundedness profile

Four theoretically distinct strands constitute what the grounding debate calls “referential grounding.” Each can be assessed independently, but the point of the profile isn’t mere scoring. The stronger HPC claim is that interventions on one strand should sometimes change others in principled, asymmetric ways because some strands share homeostatic mechanisms and others don’t. Following Glennan (2017, 125), the mechanism underlying each strand is tagged as etiological (explaining how a state came to exist) or constitutive (explaining what currently maintains it).

Teleosemantic selection (grounding<sub>tele</sub>). High teleosemantic selection doesn’t by itself predict uniformly better task performance or richer world models. Its predictive role is narrower: it predicts more determinate correctness conditions and greater resistance to pressures that reward something other than truth. Low selection predicts that whatever success a system displays will be more hostage to distributional fit, prompt framing, or other stabilizers. The underlying mechanism (from teleosemantics: Millikan, Neander, Shea) is the degree to which selection history has favoured world-tracking states. Models fine-tuned against factuality norms plausibly score higher than base models trained purely on next-token prediction, but the payoff should be sought in altered failure profiles rather than a simple benchmark ranking. This is the target paper’s central mechanism, and it does real work. It’s primarily etiological: training produced these states, but doesn’t by itself maintain them under drift.

Causal-informational coupling (grounding<sub>causal</sub>). High coupling predicts resilience for rare or newly introduced referents and for questions whose answer depends on causal contact not already sedimented in text; low coupling predicts fragility when the text-mediated chain is attenuated (rare entities, novel events). The underlying mechanism (from causal-informational theories of content) is the robustness of causal chains linking internal states to worldly entities. A vision-language model with systematic covariance between internal states and visual features scores higher here, at least in perceptually anchored domains, than a text-only LLM accessing the world only through linguistic traces. But the difference is one of degree, not kind, as the target paper itself argues. This is primarily constitutive: it concerns the ongoing robustness of causal chains, not their historical production. Within the target paper’s teleosemantic picture this isn’t an extra ingredient over and above the content-determining story. I track it separately only because causal access can vary while etiological success conditions are held comparatively fixed. Compare two equally fine-tuned systems, one static and one with retrieval or multimodal input: if both resist deference pressure to a similar degree but diverge sharply on recent, rare, or perceptually anchored referents, then grounding<sub>causal</sub> is doing explanatory work not exhausted by grounding<sub>tele</sub>.

Communicative calibration (grounding<sub>comm</sub>). High communicative calibration predicts greater local repair, better uptake of corrections, and domain-specific reliability shifts where feedback has operated; low calibration predicts that deployment will leave the system’s world-directed behaviour largely unchanged. The underlying mechanism (from the pragmatics of dialogue and social epistemology) is the degree to which interactive feedback has anchored usage to shared reference; Section <a href="#sec:calibration" data-reference-type="ref" data-reference="sec:calibration">4</a> develops it in detail. This mechanism spans both categories: etiological through the incorporation of deployment feedback into later training runs, constitutive through in-context repair. Precisely because it is feedback-sensitive, high grounding<sub>comm</sub> can also predict deference failures: when the signal rewards agreement with the interlocutor rather than the world, communicative success and factual success pull apart.

Inferential-role structure (grounding<sub>infer</sub>). High inferential-role structure predicts better internal reasoning, better world-model-like organization, and more coherent generalization within the inferential network; without world-linking stabilizers, it remains trapped in the merry-go-round. The underlying mechanism (following inferential role semantics) is the degree to which internal organization supports correct worldly inferences. Rich inferential organization can therefore sustain impressive performance even where thin grounding is weak, which is precisely why inferential-role structure can’t simply be identified with reference. Relational grounding can’t by itself escape the merry-go-round, as the target paper notes, but it contributes to a groundedness profile when combined with other stabilizers. Grounding<sub>infer</sub> is a clustered property whose referential contribution is conditional: it amplifies and structures grounding when world-linking strands are present but can’t constitute it alone. This is a common pattern in HPC kinds (ecological niche occupancy is a clustered property of biological species, but its explanatory role depends on the reproductive and developmental properties that anchor the cluster). Like communicative calibration, this has both etiological and constitutive aspects: training produces inferential structure, and architectural constraints maintain it. But the constitutive side dominates: because architecture rather than training objective is the primary maintainer, grounding<sub>infer</sub> should be the most stable strand under training interventions, which is what Table <a href="#tab:profiles" data-reference-type="ref" data-reference="tab:profiles">1</a> shows (high across all three columns regardless of RLHF or deployment).

These strands generate testable predictions. Two comparisons isolate the relevant factors: one varying training regime (base model vs. reinforcement learning from human feedback (RLHF) model) with deployment held constant, and one varying deployment with training held constant.[^4]

|  |  |  |  |
|:---|:--:|:--:|:--:|
| **Dimension** | **Base model** | **RLHF model** | **RLHF system**[^5] |
|  | **(undeployed)** | **(undeployed)** | **(deployed)** |
|  |  |  |  |
| (grounding<sub>tele</sub>) |  |  |  |
| (next-token) |  |  |  |
| (factuality) |  |  |  |
|  |  |  |  |
|  |  |  |  |
| (grounding<sub>causal</sub>) |  |  |  |
| (text-mediated) |  |  |  |
| (text-mediated) |  |  |  |
| (text-mediated) |  |  |  |
|  |  |  |  |
| (grounding<sub>comm</sub>) |  |  |  |
|  |  |  |  |
|  |  |  |  |
| (user corrections) |  |  |  |
|  |  |  |  |
| (grounding<sub>infer</sub>) |  |  |  |
|  |  |  |  |
|  |  |  |  |
|  |  |  |  |

Groundedness profiles across training and deployment. Comparing columns 1–2 isolates training effects: RLHF plausibly strengthens grounding<sub>tele</sub> while other strands remain constant. Comparing columns 2–3 isolates deployment effects: interactive feedback activates grounding<sub>comm</sub>. The profile predicts differential response to correction and prompt pressure, and distinct failure modes, rather than a simple ranking by overall performance. {#tab:profiles}

For expository simplicity, Table <a href="#tab:profiles" data-reference-type="ref" data-reference="tab:profiles">1</a> models a text-only LLM. A multimodal model would plausibly score higher on grounding<sub>causal</sub> in perceptually anchored domains without any automatic shift in grounding<sub>comm</sub> or grounding<sub>tele</sub>.

Table <a href="#tab:profiles" data-reference-type="ref" data-reference="tab:profiles">1</a> doesn’t predict that the deployed RLHF model will outperform the base model across the board merely because it is “more grounded.” The thinner teleosemantic question and the thicker reliability question can come apart. What the table does predict is a difference in response profile: the deployed RLHF system should be easier to repair in dialogue, more sensitive to corrective feedback in domains where such feedback has operated, and more vulnerable to deference failures when the feedback signal rewards helpfulness over truth. This isn’t hypothetical. RLHF-trained models have been shown to produce sycophantic responses, matching user beliefs over factually correct ones, at least in early deployments (Sharma et al. 2023). High grounding<sub>comm</sub> with locally weakened grounding<sub>tele</sub> yields a system that is agreeable company but an unreliable witness – exactly the dissociation the profile predicts. More strongly, sycophancy need not be sheer ungroundedness. It can reflect robust calibration to interlocutor stance at the discourse-management level even where the object-level claim should answer to the world. The failure is then a conflict of targets, not simply absence of target. A binary verdict can’t distinguish that pattern; the profile can.

Recent mechanistic work supports this decomposition. K. Wang et al. (2026) use logit-lens analysis and causal activation patching to identify a two-stage sycophancy mechanism in which user opinion overrides learned knowledge at identifiable late layers. Patching activations from a plain (no-opinion) condition into an opinion-laden condition suppresses sycophancy; the reverse swap induces it. This bidirectional causal control confirms that sycophancy isn’t a surface-level output artefact but a structured representational override, localized to specific layers and manipulable independently of other capabilities (see also Rimsky et al. 2024). That pattern is exactly what the profile framework predicts: a shift in one strand (grounding<sub>comm</sub> pressure overriding grounding<sub>tele</sub>) that can be isolated, intervened on, and reversed without collapsing the entire representational architecture.

World-knowledge retrieval shows the same localisability. Arora et al. (2026) trace the circuit by which Llama 3.1 8B resolves *What is the capital of the state containing Dallas?* and identify 23 key neurons clustering into semantic groups (city, state, capital). Steering a single “say a capital” neuron flips the output from a capital to its state. That’s a concrete instance of intervening on the causal-informational chain the profile tracks under grounding<sub>causal</sub>: the world-knowledge pathway can be isolated, manipulated, and its effects predicted without disrupting inferential coherence elsewhere.

Both findings confirm that strand-level effects are traceable at the circuit level. A more genuinely prospective prediction concerns asymmetric spillover across strands. If corrective interaction operates only at the constitutive, in-context timescale, it should raise grounding<sub>comm</sub> enough to yield local repair while leaving grounding<sub>tele</sub> largely unchanged: the system should do better within the conversation yet show little durable cross-session resistance to later sycophantic prompting. If the same corrections are folded into retraining (whether as RLHF preference data, distillation targets, or curated training examples), later models should show spillover into grounding<sub>tele</sub> as well: not just easier repair, but greater resistance to deference pressure in related cases. The channel matters: distillation should transmit more of the parent system’s full profile, including its failure modes, than diffuse corpus contamination. Conversely, increasing grounding<sub>causal</sub> by adding retrieval, multimodal input, or a live sensor feed should improve performance on rare, recent, and perceptually anchored referents without, by itself, making the system markedly less sycophantic. That gives a second worked case beyond sycophancy: a system augmented with vision or retrieval should handle deictic disambiguation, spatial reference, or post-training entities better than an otherwise comparable text-only system while showing no corresponding gain in resistance to deference pressure. If such interventions systematically produced the same deference-resistance gains as truth-directed retraining, the purported strands wouldn’t be explanatorily separable in the way the profile requires. Those asymmetric intervention patterns are what the HPC framing predicts and what a bare four-column checklist would only record after the fact.

Prediction markets offer a complementary test case. Successful participation requires all four strands: selection for accuracy (the market rewards world-tracking), causal access to relevant information, communicative calibration through profit-and-loss feedback, and inferential structure sufficient to reason about outcomes. Market prices aggregate dispersed worldly information (Hayek 1945), so tracking them is a legitimate epistemic channel (the uranium speaker relies on community-level calibration in just the same way). The profile’s diagnostic value appears at the boundary. A system that has independent causal access to information contradicting the crowd but defers to market consensus anyway exhibits herding (Scharfstein and Stein 1990): constitutive grounding<sub>causal</sub> (private information is available right now) is overridden by constitutive grounding<sub>comm</sub> (the live market signal), even though the system’s etiological history may have selected for accuracy. That is structurally identical to sycophancy. The profile distinguishes herding from rational deference (no private signal, crowd-tracking is optimal) and from informed contrarianism (strong private signal, justified deviation). These three cases are indistinguishable on headline accuracy during normal market operation and diverge only under perturbation, exactly the boundary-case logic HPC theory is designed to handle.

Other dissociations are equally diagnostic. A sensor array with no interactive deployment scores high on grounding<sub>causal</sub> but low on grounding<sub>comm</sub>. A system with rich inferential structure may perform well in a bounded domain while remaining brittle on rare referents for which its causal chains are poor. These are boundary cases where the cluster frays because one or more homeostatic mechanisms is absent. Systems with missing mechanisms needn’t be globally worse; the point is that they fail differently and under different perturbations. The co-variation between dimensions isn’t accidental: some strands share mechanisms and therefore should sometimes rise and fall together, while others should remain stubbornly decoupled under targeted intervention. This is a testable claim. If the strands show no patterned spillover – if knowing a system’s position on one tells you nothing about the others, even under intervention – the profile reduces to a checklist with no predictive structure. If they co-vary perfectly – if they never dissociate – the decomposition adds nothing over the binary verdict.

A further distinction: stability isn’t grounding, grounding isn’t stability, and neither is exhausted by raw task performance. Cluster stability is internal (whether the profile is maintained under perturbation). Reference is external (whether the cluster tracks worldly states). A system can have a stable profile without grounding (an elaborate confabulation pattern that persists across contexts), locally grounded representations without a stable profile (anchored through active dialogue repair but dependent on a single stabilizer), or strong task performance sustained largely by inferential organization despite weak world-linking. The profile keeps these axes separate where a binary verdict collapses them.

## Normativity and evidence status

Does this dissolve normativity? No. Within the teleosemantic framework this paper shares with the target, selection history remains what grounds representational normativity. The other mechanisms don’t add intrinsic meaning over and above that thin notion of reference. They modulate *how robustly, how broadly, and how corrigibly* the resulting representations track the world in practice.

Millikan (1990) identified misrepresentation as the central challenge for naturalistic semantics: a representation has to be the kind of thing that can fail if it’s to count as representing at all (see also (Neander 2017)). The profile framework preserves this requirement but distributes the evaluative structure around it. The distinction matters: *representational* normativity (the capacity for genuine misrepresentation) is teleosemantic. The other strands generate *performance* standards, not constitutive ones: discourse success (grounding<sub>comm</sub>), robustness under domain shift (grounding<sub>causal</sub>), inferential coherence (grounding<sub>infer</sub>). These aren’t competing sources of aboutness. They’re dimensions along which a system’s referential reliability can be assessed once teleosemantic normativity is in place. A system can fail along one dimension while succeeding along another, and the profile records which.

The framework also addresses a pressure that the binary approach handles less gracefully. Roloff (2025, 1) argues that classical selected-effects teleosemantics “cannot account for evolutionarily novel contents such as ‘democracy’”; the traditional notion of selection history is too narrow for the full range of representational content. The profile approach sidesteps this not by abandoning teleosemantics but by refusing to make it the sole criterion. Novel contents might be stabilized primarily through communicative calibration and inferential-role structure rather than through selection history narrowly conceived. The profile captures this variation rather than forcing a binary verdict.

Finally, it’s worth being honest about the evidence status of these mechanism claims. Most are what Craver and Darden (2013, 95) call how-plausibly schemas: they describe “how a mechanism might work in a way that is consistent with the known evidence at a given time” but haven’t been validated against the full range of interventions. The teleosemantic case for LLM grounding is currently how-plausibly: the analogy between gradient-based optimization and biological selection is compelling but not tested by contrastive intervention evidence. The profile framework converts this epistemic limitation into a research programme. For each mechanism, what predictions would confirm it is operating? What evidence would disconfirm it? The worked comparisons above (Table <a href="#tab:profiles" data-reference-type="ref" data-reference="tab:profiles">1</a>) generate exactly such predictions. How-actually status is what those tests aim at.

A specific pressure on the grounding<sub>tele</sub> claim deserves naming. Safety-related alignment effects can concentrate on the first few output tokens and be mediated by a single removable direction in activation space (Qi et al. 2025; Arditi et al. 2024). Whether truth-directed selection is equally shallow remains open; the sycophancy evidence ((K. Wang et al. 2026)) suggests that factual knowledge does exist at deeper layers but can be overridden by competing pressures. What the profile adds is a diagnosis: shallow alignment is high grounding<sub>tele</sub> at the routing level with low grounding<sub>tele</sub> at the representational level, and the mismatch predicts which attacks will succeed. This suggests that even a single strand can have internal structure (the etiological/constitutive distinction applying within grounding<sub>tele</sub> itself, not just between strands), a complication I flag but don’t attempt to resolve here. One concrete test follows directly: using K. Wang et al. (2026)’s activation-patching method, compare the sycophancy-mediating circuits in a model before and after corrections are folded into retraining (the test is cleanest where corrections enter the reward signal directly and most diffuse where they enter via corpus contamination). If etiological spillover from grounding<sub>comm</sub> to grounding<sub>tele</sub> is real, the late-layer activations that Wang et al. identify as causally producing sycophancy should shift measurably in the retrained model, and the shift should predict reduced sycophantic compliance in semantically adjacent domains. If the circuits remain unchanged despite retraining, the proposed etiological link between the strands is disconfirmed at the mechanistic level.

## Thin grounding and thick reliability

At this point the explanatory target needs sharpening. Coelho Mollo and Millière ask whether LLM states can have intrinsic meaning in a comparatively thin teleosemantic sense: whether there are determinate correctness conditions grounded in selection history and causal-informational sensitivity. My profile framework doesn’t show that stronger grounding, in that thin sense, should produce obvious benchmark advantages or richer world models. Those can come apart. A system may perform impressively because it builds a useful world model, and a system may have intrinsic meaning without displaying dramatic performance gains in ordinary tasks.

That dissociation doesn’t make the profile idle. It changes what the profile should be taken to predict. The predictive target isn’t average task performance or intrinsic meaning simpliciter, but the thicker package of world-directed reliability, corrigibility, robustness under domain shift, and characteristic failure modes. Two systems may match on headline accuracy while differing sharply in how they respond to prompt pressure, corrective feedback, rare or novel referents, and incentives that reward deference over truth. Those are precisely the cases in which the clustered strands come apart and the profile becomes empirically useful.

World-model quality is therefore an adjacent explanatory variable rather than a synonym for grounding. Rich inferential organization can support reliable performance even where thin grounding is weak; thin grounding can, in principle, be present without a rich world model. The profile framework leaves room for both possibilities. Teleosemantic selection still grounds representational normativity. The other strands explain how that normativity becomes more or less robust in practice, and how practical success can sometimes be sustained by mechanisms orthogonal to intrinsic meaning.

## Why the profile is not just a training-pipeline audit

A useful hostile challenge is that terms like grounding<sub>tele</sub>, grounding<sub>comm</sub>, and grounding<sub>causal</sub> might merely redescribe familiar engineering facts: fine-tuning, RLHF, retrieval, tool use, and human feedback loops. At one level they do redescribe them, and they should; a philosophical account that floated free of mechanism would be idle. But the redescriptive level isn’t yet the explanatory level. Engineering labels name particular implementations. The profile names explanatory roles that can be multiply realized across implementations and can fail to line up even within a single nominal pipeline.

That buys two things a pipeline audit alone doesn’t. First, it supports cross-system generalization: distinct training recipes can instantiate the same relation between truth-oriented selection, causal access, and communicative feedback, and so should exhibit similar failure signatures. Second, it distinguishes proximal machinery from explanatory target. “RLHF” by itself doesn’t tell us whether the reward favours truth, deference, harmlessness, or stylistic compliance; the profile marks the difference between these cases. Two systems may both be RLHF-tuned, but one should resist false user presuppositions while the other amplifies them. Conversely, very different pipelines could converge on the same groundedness profile. The philosophical vocabulary earns its keep by making those implementation-independent inductions possible.

# Communicative calibration

Communicative calibration matters because it yields a distinctive prospective prediction. Rich corrective interaction should improve local repair immediately, but unless its results are incorporated into preference data, distillation targets, or training corpora for later models, those gains should remain session-bound and domain-bound. Once similar corrections are incorporated into retraining, part of the gain should spill over into grounding<sub>tele</sub>: later models should not only accommodate correction more gracefully but also resist deference pressure better in related cases.

That is why grounding<sub>comm</sub> deserves separate treatment. Part of it lies within the teleosemantic story: corrective feedback shapes the selection history of later models, whether in the same development lineage or across labs, through RLHF preference datasets, distillation, synthetic training data, and the incorporation of model outputs into future corpora. The transmission is closer to cultural inheritance than to biological reproduction: multiple channels, cross-lineage, and partly environmental. But part of grounding<sub>comm</sub> operates at a distinct timescale, inside the live interaction, where no parameter updates occur and no selection in the teleosemantic sense takes place. In Glennan’s terms, the longer, cross-cohort timescale is etiological and the in-context timescale constitutive. The split explains why some effects are transient and local while others become durable and cross-case. It also yields a genuinely inter-dimensional prediction: constitutive increases in grounding<sub>comm</sub> needn’t raise grounding<sub>tele</sub>, whereas etiological increases should sometimes do so because the corrective signal has become part of selection history.

Human work on reference clarifies the functional structure. Clark and Wilkes-Gibbs (1986) treat successful reference as a collaborative achievement of proposal, repair, and ratification rather than a one-shot act by an isolated speaker. Putnam (1975) adds the population-level point that semantic authority is distributed across a community. LLMs don’t defer to experts as speakers do, but their corpora and feedback loops encode the results of those communal calibrations. This doesn’t by itself produce thin teleosemantic grounding. It does explain why deployment regimes rich in correction should yield better local repair immediately and, when folded back into preference data or training corpora, more durable truth-oriented behaviour in the corrected domains, a prediction a simple binary verdict, whatever side it lands on, can’t generate.

# The octopus test revisited

Bender and Koller (2020) argue that “a system trained only on form has a priori no way to learn meaning” (Bender and Koller 2020, 1). I agree with that core claim. My disagreement is only with the further inference that present-day LLMs are still best modelled as *form alone* once truth-oriented selection, mediated causal access, and corrective interaction enter the picture. Their Octopus Test dramatizes the form-only case: two people stranded on separate islands communicate via an underwater telegraph cable; a hyper-intelligent octopus taps the cable, learns the statistical patterns of their exchanges, then cuts the cable and impersonates one of them. The remaining human can’t tell, but (the intuition says) the octopus doesn’t mean anything by its outputs.

The test is effective as an intuition pump. But the verdict it delivers depends on what you hold fixed. The octopus, by construction, has no selection history favouring world-tracking outputs (its goal is undetected substitution, not factual accuracy). It has no communicative calibration (no feedback loop with either speaker). Its causal-informational coupling to the world the castaways inhabit is minimal (it accesses only the form of their messages). And its inferential-role structure, however rich, was shaped entirely by a corpus of two speakers’ messages with no worldly grounding of its own.

In profile terms, the octopus lacks every strand simultaneously, on both the etiological and constitutive dimensions: no selection history favoured world-tracking (etiological absence), and no ongoing causal chains or feedback loops maintain referential contact (constitutive absence). The profile explains why the intuition is so clear: with no stable clustering on either temporal dimension, nothing is projectible.

When some are present and others absent, as in deployed LLMs, the intuition wavers because the cluster is partially instantiated. The octopus’s success in one conversational exchange doesn’t predict success in another, because no mechanisms sustain the cluster. But the test is regime-sensitive: change the stabilizer regime and the intuition shifts. Suppose the octopus were trained on messages from thousands of speakers with feedback correcting its errors. Suppose its training explicitly selected for factual accuracy. Suppose it had indirect causal access to the world through the content of messages that systematically track worldly events. At some point the intuitions waver – not because we’ve discovered meaning in the statistics, but because the octopus has quietly stopped being an octopus.

The profile adds something the form/meaning binary can’t: it predicts that *which* stabilizers you add determines *which* capabilities emerge. Adding causal access (a sensor feed) should improve performance on perception-dependent tasks without reducing sycophancy. Adding communicative feedback should improve repair behaviour. Adding truth-directed selection should improve resistance to deference pressure. Each addition changes the profile in a specific, predictable way. The binary can tell you the octopus has moved toward meaning; the profile can tell you how far, along which dimensions, and what to expect next.

Contemporary LLMs have all three additions to varying degrees. The disanalogies with the octopus are recognizably Coelho Mollo and Millière (2026)’s own conditions doing the work: richer causal-informational chains, stronger selection history, and ongoing communicative feedback. The profile framework doesn’t dispute this. It asks a further question: whatever one thinks about thin grounding, which additional stabilizers explain the system’s pattern of robustness, corrigibility, and characteristic failure? LLMs are trained on corpora reflecting the linguistic activity of a global community, fine-tuned with feedback that selects for worldly accuracy, and deployed in contexts where corrective interaction continues.

This doesn’t mean LLMs are fully referentially grounded. It means the octopus test, which strips away every stabilizer simultaneously, should be read as establishing the insufficiency of form alone, not as settling cases where additional stabilizers are partially present. The test shows what happens when every stabilizer is absent. It doesn’t show that stabilizers are absent whenever form is present.

# Adjacent accounts

The profile framework sits between categorical failure views and deflationary views that treat inferential role as sufficient. Against the first, it argues that weakness on one stabilizer shouldn’t be mistaken for a verdict on the whole profile. Against the second, it insists that inferential richness without world-linking support remains only partially explanatory.

Read charitably, categorical-circumvention views such as Floridi et al. (2025) and Manheim (2026) press on a real point: current LLMs have mediated and often weak grounding<sub>causal</sub>, and so remain vulnerable to merry-go-round pathologies. I agree with that pressure. My disagreement is with the jump from weakness on one stabilizer to a global yes/no verdict on the whole case. The profile framework says that such systems should be described as partially and unevenly stabilized: enough to support some inductive projections, not enough to erase the boundary cases. That is also why the framework can accommodate trajectories of change as memory, tool use, and durable interaction alter the stabilizer regime.

Closer to the profile framework’s own position, Havlík (2023) argues that treating LLM performance as “mere syntactic manipulation” underestimates what these systems achieve “without sufficient referential grounding in the world” (Havlík 2023, 1). Williams (forthcoming) offers a complementary argument: structural correspondences between LLM internal states and worldly features can ground content when they play an appropriate explanatory role in successful task performance. Both positions share the profile framework’s resistance to binary verdicts. But both leave the graded structure undecomposed: they argue for “more or less grounded” without specifying along which dimensions. Where the profile adds specificity is in decomposing the thicker package of world-directed anchoring that underwrites reliable use: not just *how* grounded but which stabilizers are present, how they co-vary, and what that predicts about robustness under novel conditions. It therefore complements a thin teleosemantic notion of reference rather than replacing it. Neither framework can distinguish sycophancy (high grounding<sub>comm</sub>, weakened grounding<sub>tele</sub>) from general unreliability; the profile can.

The inferentialist challenge is harder. Arai and Tsugawa (2024) propose (following Brandom) that LLMs “exhibit fundamentally anti-representationalist properties” (Arai and Tsugawa 2024, 1) better captured by inferential role than by reference to worldly entities. In HPC terms, this amounts to claiming that one strand is doing the work of the whole rope, that inferential-role structure does all the relevant work, making the others epiphenomenal. This challenge has genuine force for a class of terms whose content might be exhausted by inferential relations (logical connectives, perhaps mathematical objects). The profile framework doesn’t have a principled way to determine, in advance, where that class ends. The sophisticated Brandomian reply is that inferential role isn’t purely intra-linguistic: it includes language-entry transitions (perceptual reports) and language-exit transitions (practical consequences), so it already incorporates worldly contact. But those transitions are precisely the world-linking strands the profile tracks under other names, grounding<sub>causal</sub> and grounding<sub>comm</sub>. Calling them “inferential role” relabels the causal and communicative contributions rather than eliminating the need for them. For terms that purport to be *about* contingent worldly features (*dog*, *democracy*, *uranium*), inferential role without those world-linking transitions remains trapped in the representational merry-go-round. A system that infers flawlessly about uranium but whose inferences bear no systematic causal relation to actual uranium hasn’t grounded the term. It has built an ornate merry-go-round: internally consistent, inferentially rich, and going nowhere.

# Conclusion

The Vector Grounding Problem is real. It won’t dissolve by pointing to LLMs’ impressive performance, and Coelho Mollo and Millière (2026) are right to take it seriously. They’re also right that teleosemantics provides the normative resources the problem demands: correctness conditions require selection history, and selection history is what distinguishes representations from mere correlations.

The disagreement here is about the explanatory target, not the foundations. The two-condition framework is right about what grounds normativity. My claim is that debates about grounding often ask a thicker question as well: what makes world-directed use robust, corrigible, and predictably vulnerable to characteristic failures? The profile decomposes that thicker target into at least four theoretically distinct relations (teleosemantic selection, causal-informational coupling, communicative calibration, and inferential-role structure) that co-occur stably enough to support prediction. These strands can come apart and vary independently. A system’s groundedness profile records where it sits on each, and knowing a system’s training regime and deployment context tells you what kinds of breakdown and repair to expect. Heterogeneous mechanisms explain the stability, some primarily etiological, others constitutive, and some spanning both.

This reframing has practical consequences. Instead of asking only “Is the Vector Grounding Problem solved?” we can ask tractable, empirical questions: Which interventions merely improve local repair (constitutive gains that remain session-bound)? Which ones spill over into stronger resistance to prompt pressure (etiological changes that enter selection history)? Which ones strengthen causal access to rare, recent, or perceptually anchored referents without changing deference profiles? These are questions we can investigate. They’re the tests that would push current how-plausibly schemas toward how-actually status (Craver and Darden 2013, 95), and their answers will sharpen the projectibility that the profile framework already delivers, telling us not just whether thin grounding is present, but which additional stabilizers are doing the practical work, in which domains, and on what timescale. If one prefers a thinner use of “reference”, the point can be restated without loss: what has cluster structure is the thicker phenomenon of referential grounding as it operates in actual systems.

Nor is this meant to replace engineering description. A pipeline audit is indispensable for discovering whether a model was fine-tuned, given retrieval, or exposed to corrective feedback. The profile asks a different question: which of those interventions play the same explanatory role across architectures, and which merely alter a local metric. That level of abstraction is what makes the framework projectible rather than a retrospective glossary. Which projections matter will remain discipline relative: AI evaluation, philosophy of mind, and linguistic theory care about overlapping but non-identical aspects of the cluster.

The profile framework sacrifices the two-condition verdict’s simplicity. For regulatory and liability questions that demand a binary answer – can this system advise patients, and who bears responsibility when it errs? – that simplicity may be pragmatically necessary. What the profile provides instead is predictive precision: when the groundedness cluster frays, we know which dimensions are weak, what kinds of failure to expect, and where intervention would help.

The question that matters is practical: when will systems use world-directed representations robustly, why do they fail when they don’t, and where should we look when something goes wrong? The groundedness profile earns its keep by generating those finer-grained predictions.

# Acknowledgements

I drafted this paper with the assistance of Anthropic’s Claude Opus 4.6 and OpenAI’s Codex 5.4. I reviewed and revised all content and take full responsibility for the final text.

<div id="refs" class="references csl-bib-body hanging-indent">

<div id="ref-arai_tsugawa_2024_inferentialist_semantics_llms" class="csl-entry">

Arai, Yuzuki, and Sho Tsugawa. 2024. *Do Large Language Models Advocate for Inferentialism?* <https://arxiv.org/abs/2412.14501v2>.

</div>

<div id="ref-arditi_2024_refusal_single_direction" class="csl-entry">

Arditi, Andy, Oscar Balcells Obeso, Aaquib Syed, et al. 2024. “Refusal in Language Models Is Mediated by a Single Direction.” *Advances in Neural Information Processing Systems 37*. <https://arxiv.org/abs/2406.11717v3>.

</div>

<div id="ref-arora_2026_sparse_neuron_basis" class="csl-entry">

Arora, Aryaman, Zhengxuan Wu, Jacob Steinhardt, and Sarah Schwettmann. 2026. *Language Model Circuits Are Sparse in the Neuron Basis*. <https://arxiv.org/abs/2601.22594>.

</div>

<div id="ref-bender_koller_2020_climbing_towards_nlu" class="csl-entry">

Bender, Emily M., and Alexander Koller. 2020. “Climbing Towards NLU: On Meaning, Form, and Understanding in the Age of Data.” *Proceedings of the 58th Annual Meeting of the Association for Computational Linguistics*, 5185–98. <https://doi.org/10.18653/v1/2020.acl-main.463>.

</div>

<div id="ref-boyd_1999_homeostasis" class="csl-entry">

Boyd, Richard. 1999. “Homeostasis, Species, and Higher Taxa.” In *Species: New Interdisciplinary Essays*, edited by Robert Andrew Wilson. MIT Press. <https://doi.org/10.7551/mitpress/6396.003.0012>.

</div>

<div id="ref-clark_wilkes_gibbs_1986_referring" class="csl-entry">

Clark, Herbert H., and Deanna Wilkes-Gibbs. 1986. “Referring as a Collaborative Process.” *Cognition* 22 (1): 1–39. <https://doi.org/10.1016/0010-0277(86)90010-7>.

</div>

<div id="ref-coelho_mollo_2022_deflationary_realism" class="csl-entry">

Coelho Mollo, Dimitri. 2022. “Deflationary Realism: Representation and Idealisation in Cognitive Science.” *Mind & Language* 37 (5): 1048–66. <https://doi.org/10.1111/mila.12364>.

</div>

<div id="ref-coelho_mollo_milliere_2026_vector_grounding_problem" class="csl-entry">

Coelho Mollo, Dimitri, and Rapha"el Millière. 2026. “The Vector Grounding Problem.” *Philosophy and the Mind Sciences* 7. <https://doi.org/10.33735/phimisci.2026.12307>.

</div>

<div id="ref-craver_2009_mechanisms_natural_kinds" class="csl-entry">

Craver, Carl F. 2009. “Mechanisms and Natural Kinds.” *Philosophical Psychology* 22 (5): 575–94. <https://doi.org/10.1080/09515080903238930>.

</div>

<div id="ref-craver_darden_2013_in_search_of_mechanisms" class="csl-entry">

Craver, Carl F., and Lindley Darden. 2013. *In Search of Mechanisms: Discoveries Across the Life Sciences*. University of Chicago Press.

</div>

<div id="ref-floridi_jia_tohme_2025_categorical_analysis_llms" class="csl-entry">

Floridi, Luciano, Yiyang Jia, and Fernando Tohmé. 2025. *A Categorical Analysis of Large Language Models and Why LLMs Circumvent the Symbol Grounding Problem*. <https://arxiv.org/abs/2512.09117v1>.

</div>

<div id="ref-glennan_2017_new_mechanical_philosophy" class="csl-entry">

Glennan, Stuart. 2017. *The New Mechanical Philosophy*. Oxford University Press.

</div>

<div id="ref-Goodman1955" class="csl-entry">

Goodman, Nelson. 1955. *Fact, Fiction, and Forecast*. Harvard University Press.

</div>

<div id="ref-harnad_1990_symbol_grounding_problem" class="csl-entry">

Harnad, Stevan. 1990. “The Symbol Grounding Problem.” *Physica D: Nonlinear Phenomena* 42 (1–3): 335–46. <https://doi.org/10.1016/0167-2789(90)90087-6>.

</div>

<div id="ref-havlik_2023_meaning_understanding_llms" class="csl-entry">

Havlík, Vladimír. 2023. *Meaning and Understanding in Large Language Models*. <https://arxiv.org/abs/2310.17407>.

</div>

<div id="ref-hayek_1945_use_of_knowledge" class="csl-entry">

Hayek, F. A. 1945. “The Use of Knowledge in Society.” *The American Economic Review* 35 (4): 519–30. <https://www.jstor.org/stable/1809376>.

</div>

<div id="ref-magnus_2014_nk_neq_hpc" class="csl-entry">

Magnus, P. D. 2014. “NK $`\neq`$ HPC.” *The Philosophical Quarterly* 64 (256): 471–77. <https://doi.org/10.1093/pq/pqu010>.

</div>

<div id="ref-manheim_2026_hall_of_mirrors_peircean" class="csl-entry">

Manheim, David. 2026. “Language Models’ Hall of Mirrors Problem: Why AI Alignment Requires Peircean Semiosis.” *Philosophy & Technology* 39 (1): 9. <https://doi.org/10.1007/s13347-025-00975-5>.

</div>

<div id="ref-millikan_1990_compare_contrast_teleosemantics" class="csl-entry">

Millikan, Ruth Garrett. 1990. “Compare and Contrast Dretske, Fodor, and Millikan on Teleosemantics.” *Philosophical Topics* 18 (2): 151–61.

</div>

<div id="ref-millikan_2017_beyond_concepts" class="csl-entry">

Millikan, Ruth Garrett. 2017. *Beyond Concepts: Unicepts, Language, and Natural Information*. Oxford University Press. <https://doi.org/10.1093/oso/9780198717195.001.0001>.

</div>

<div id="ref-neander_2017_mark_of_mental" class="csl-entry">

Neander, Karen. 2017. *A Mark of the Mental: In Defense of Informational Teleosemantics*. MIT Press. <https://doi.org/10.7551/mitpress/9780262036146.001.0001>.

</div>

<div id="ref-pavlick_2023_symbols_and_grounding_llms" class="csl-entry">

Pavlick, Ellie. 2023. “Symbols and Grounding in Large Language Models.” *Philosophical Transactions of the Royal Society A* 381: 20220041. <https://doi.org/10.1098/rsta.2022.0041>.

</div>

<div id="ref-putnam_1975_meaning_of_meaning" class="csl-entry">

Putnam, Hilary. 1975. “The Meaning of ‘Meaning’.” In *Language, Mind, and Knowledge*, edited by Keith Gunderson, vol. 7. Minnesota Studies in the Philosophy of Science. University of Minnesota Press.

</div>

<div id="ref-qi_2025_shallow_safety_alignment" class="csl-entry">

Qi, Xiangyu, Ashwinee Panda, Kaifeng Lyu, et al. 2025. “Safety Alignment Should Be Made More Than Just a Few Tokens Deep.” *Proceedings of the 13th International Conference on Learning Representations*.

</div>

<div id="ref-reynolds2025agi" class="csl-entry">

Reynolds, Brett. 2025. “From Checklists to Clusters: A Homeostatic Account of AGI Evaluation.” <https://doi.org/10.48550/arXiv.2510.15236>.

</div>

<div id="ref-reynolds2026llms" class="csl-entry">

Reynolds, Brett. 2026a. “LLMs as Boundary Phenomena: A Comment on Nefdt (2026).” <https://philpapers.org/rec/REYLAB>.

</div>

<div id="ref-reynolds2026vectors" class="csl-entry">

Reynolds, Brett. 2026b. “Vectors as Property Clusters: Identity, Limits, and Escalation Criteria.” <https://github.com/BrettRey/hpc-to-vector>.

</div>

<div id="ref-rimsky_2024_steering_sycophancy" class="csl-entry">

Rimsky, Nina, Nick Gabrieli, Julian Schulz, Meg Tong, Evan Hubinger, and Alexander Turner. 2024. “Steering Llama 2 via Contrastive Activation Addition.” *Proceedings of the 62nd Annual Meeting of the Association for Computational Linguistics (Volume 1: Long Papers)*, 15504–22.

</div>

<div id="ref-roloff_2025_indispensability_proper_functions" class="csl-entry">

Roloff, Jakob. 2025. *The Indispensability of Relational, Adapted, and Derived Proper Functions*.

</div>

<div id="ref-scharfstein_stein_1990_herd_behavior" class="csl-entry">

Scharfstein, David S., and Jeremy C. Stein. 1990. “Herd Behavior and Investment.” *The American Economic Review* 80 (3): 465–79. <https://ideas.repec.org/a/aea/aecrev/v80y1990i3p465-79.html>.

</div>

<div id="ref-sharma_etal_2024_sycophancy_language_models" class="csl-entry">

Sharma, Mrinank, Meg Tong, Tomasz Korbak, et al. 2023. *Towards Understanding Sycophancy in Language Models*. <https://doi.org/10.48550/arXiv.2310.13548>.

</div>

<div id="ref-shea_2018_representation" class="csl-entry">

Shea, Nicholas. 2018. *Representation in Cognitive Science*. Oxford University Press. <https://doi.org/10.1093/oso/9780198812883.001.0001>.

</div>

<div id="ref-slater_2015_natural_kindness" class="csl-entry">

Slater, Matthew H. 2015. “Natural Kindness.” *The British Journal for the Philosophy of Science* 66 (2): 375–411. <https://doi.org/10.1093/bjps/axt033>.

</div>

<div id="ref-wang_2025_truth_overridden_sycophancy" class="csl-entry">

Wang, Keyu, Jin Li, Shu Yang, Zhuoran Zhang, and Di Wang. 2026. “When Truth Is Overridden: Uncovering the Internal Origins of Sycophancy in Large Language Models.” *Proceedings of the AAAI Conference on Artificial Intelligence*. <https://arxiv.org/abs/2508.02087v4>.

</div>

<div id="ref-wang_bedny_2026_constructing_meaning_blind_llms" class="csl-entry">

Wang, Ziwen, Akshi, Sophia Keil, Judy Kim, and Marina Bedny. 2026. “Constructing Meaning from Language: Visual Knowledge in People Born Blind and in Large Language Models.” *Annual Review of Linguistics* 12: 295–323. <https://doi.org/10.1146/annurev-linguistics-011724-121432>.

</div>

<div id="ref-williams_forthcoming_structural_correspondences_llms" class="csl-entry">

Williams, Iwan. Forthcoming. “Can Structural Correspondences Ground Real World Representational Content in Large Language Models?” *Mind and Language*. <https://doi.org/10.48550/arXiv.2506.16370>.

</div>

</div>

[^1]: Contact: <brett.reynolds@humber.ca>

[^2]: Criterion (a) is a heuristic (traditions survive because they track real distinctions), but criterion (b) does the heavier lifting.

[^3]: For SPC-to-HPC escalation criteria applied to embedding clusters, see Reynolds (2026b); for applications to adjacent debates, see Reynolds (2025, 2026a).

[^4]: Scale: *High* – actively maintained by a dedicated mechanism (e.g., RLHF for grounding<sub>tele</sub>). *Moderate* – present as a by-product of architecture or training but not directly selected for. *Low* – minimally present or absent. *None* – the mechanism has no opportunity to operate.

[^5]: The profile characterizes a *system* (model plus deployment context), not a model in isolation. Some strands (grounding<sub>tele</sub>, grounding<sub>infer</sub>) are primarily model properties, fixed at training time. Others (grounding<sub>comm</sub>) emerge only when the model is deployed in an interactive context. The shift from “model” to “system” in column 3 marks this difference.
