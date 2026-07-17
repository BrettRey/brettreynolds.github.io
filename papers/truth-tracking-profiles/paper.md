---
title: "Truth-Tracking Profiles: What Large Language Models Participate In"
author: "Brett Reynolds"
year: "2026"
status: "Preprint"
canonical_url: "https://philarchive.org/rec/REYTPW"
website_url: "https://brettreynolds.ca/papers/truth-tracking-profiles/"
markdown_url: "https://brettreynolds.ca/papers/truth-tracking-profiles/paper.md"
version: "author-manuscript mirror"
version_date: "2026-06-12"
keywords: ["large language models", "truth-tracking", "grounding", "answerability", "testimony", "hallucination"]
---
# Truth-Tracking Profiles: What Large Language Models Participate In

**Author-manuscript mirror.** This Markdown file is provided for accessibility, search, and machine readability. The canonical public record is linked in the metadata above.

## Abstract
Debates about large language model grounding often ask whether model representations connect to the world. That framing is too coarse. This paper treats world-connection as a profile: a pattern of participation in several stabilizing routes to representational success – perception, testimony, coherence, measurement, intervention, error-correction, and practical success. A route is stabilizing when it lets facts, or practices already adjusted to facts, constrain what a system produces and how its errors are corrected. The profile explains why truth-relevant successes travel together, why they fail in patterned ways, and what a system’s stabilizing background lets us predict.

Language models provide the pressure case. Text-trained systems inherit dense textual traces of testimony and local coherence and participate weakly in perception, measurement, intervention, and practical correction. The result is a familiar failure signature: fluent, coherent outputs can lose answerability when tasks require independent routes to the facts. Self-consistency, retrieval, tools, code execution, multimodal input, and preference or action feedback should help only where they strengthen the needed stabilizer – a contrast a matched-task design can test. Surface improvement and truth-tracking improvement can come apart.


# Introduction: from grounding to profiles

Do the representations inside large language models (LLMs) connect to the world? The question is often put as a yes/no. Bender and Koller (2020) say no: a system trained on form alone, like an octopus eavesdropping on telegraph traffic, learns the statistics of language apart from what language is about. Others reply that such systems meet at least some conditions on reference, or that sensory grounding can be optional for thought in the first place (Coelho Mollo and Millière 2026; Chalmers 2023).

But that opposition only starts the inquiry. The debate descends from the symbol-grounding problem (Harnad 1990): how can symbols, or symbol-like states, get meaning independent of the interpretations supplied by users? For LLMs, recent work has already pluralized the issue. Pavlick treats grounding as a family of questions about symbols and use; Coelho Mollo and Millière distinguish kinds of grounding; Chalmers separates sensory grounding from thought (Pavlick 2023; Coelho Mollo and Millière 2026; Chalmers 2023).

Pluralizing grounding still leaves open which dimensions explain truth-relevant success and failure across systems. Truth-tracking success depends on distinct stabilizing mechanisms that ordinarily operate together: perception, testimony, coherence, measurement, intervention, error-correction, and practical success. A system can take part in some of these and sit out others. Text-only and weakly tooled language models make that possibility especially visible.

I argue that these stabilizers form a projectible profile around the successes picked out by the predicate *true*. A profile, in this sense, isn’t a checklist of individually necessary conditions. It’s a pattern of routes whose presence, absence, and coupling let us project how a system will do in nearby cases (Goodman 1955; Khalidi 2013).

LLMs matter because they separate routes that human epistemic life normally bundles together. The claim is clearest for systems whose contact with the world remains mediated mainly by human text. Retrieval, tools, code execution, multimodal input, and action-guided feedback change that inheritance-heavy profile. The question is which route they add and where improvement should transfer.

Comparison drives the argument. Self-consistency should help most where the missing support is coherence. Retrieval should help most where the missing support is record access. Preference feedback should improve conversational fit before it improves answerability. Multimodal input should help some perceptual tasks before it helps calibrated measurement. Success for the profile view depends on these contrasts illuminating LLM behaviour better than a single verdict about grounding.

A modest lesson for truth theory follows. Correspondence, coherence, pragmatism, reliabilism, deflationism, and social epistemology each capture a real stabilizer once located inside a wider ecology of answerability, correction, and projection. I aim to make that ecology precise enough to guide comparison.

Section <a href="#sec:target" data-reference-type="ref" data-reference="sec:target">2</a> first fixes the target: the relevant cases are representational successes (beliefs, assertions, inscriptions, measurements, models, inferential outputs), with truth as an abstract object left to one side. Section <a href="#sec:profile" data-reference-type="ref" data-reference="sec:profile">3</a> sets out the stabilizing mechanisms and their Boydian lineage. Section <a href="#sec:projectibility" data-reference-type="ref" data-reference="sec:projectibility">4</a> says how the profile supports projection under counterfactual perturbation. Section <a href="#sec:adjudication" data-reference-type="ref" data-reference="sec:adjudication">5</a> shows how calibration history handles conflict and transfer. Section <a href="#sec:objections" data-reference-type="ref" data-reference="sec:objections">6</a> takes objections. Section <a href="#sec:llm" data-reference-type="ref" data-reference="sec:llm">7</a> develops the language-model profile mechanism by mechanism. Section <a href="#sec:conclusion" data-reference-type="ref" data-reference="sec:conclusion">8</a> concludes.

# The target: truth-relevant representational success

Before the profile can be applied, the target has to be fixed. Truth, considered as an abstract property or as the role of the truth predicate, lies outside the class of things with perceptual, testimonial, or instrumental mechanisms as parts. The target cases are representational successes: beliefs, assertions, inscriptions, measurements, models, and inferential outputs assessed as getting things right.

Some count as central truthbearers. Beliefs and assertions can be true or false in the ordinary sense. Others are neighbouring cases that support truth-ascription by yielding, recording, or constraining claims: a measurement, a map, a statistical model, or an experimental display may be accurate, calibrated, or well-fitted in ways that make some associated propositions true. The profile concerns that broader space of truth-relevant representational success.

Truth-relevant work often gets distributed. A thermometer reading, a graph, or a database entry can make true assertion possible before anyone forms the final assertion. A map can preserve spatial relations well enough to support successful claims about where things are. A model can constrain which inferences remain live. The account is about the background that lets such outputs support getting things right.

In a lead-exposure case, the assay reading, the calibration log, the database entry, and the clinician’s assertion do different representational jobs. Only the last may be the explicit assertion that the sample contains 3.2 mg of lead, but the others make that assertion available, checkable, and defeasible.

Accordingly, the paper leaves a reductive definition of truth to one side. Deflationary and minimalist theories can insist that the truth predicate has a thin logical or generalizing role, with a substantive causal story kept out of the basic theory of truth (Horwich 1998). The profile account can grant that point. It asks why some truth-relevant representational successes travel together, support projection, and fail in patterned ways.

Correspondence can also remain in place as one stabilizer within the larger account. Correspondence theories preserve the idea that truth involves answerability to how things are (David 1994; Kirkham 1992).

Here, answerability names a constraint relation. A representation is answerable to a target when discrepancies between the representation and the target can bear on the production, uptake, correction, or withdrawal of the representation.[^2] A calibrated instrument has answerability because relevant discrepancies can show up in checks, recalibrations, and downstream failures. A coherent but disconnected generator has weaker answerability where the relevant fact is disconnected from the production route. Profiling these routes shows how they combine and come apart.

A fact can bear on an output through delayed routes: later uptake, audit, replication, practical failure, or correction of future behaviour. The answerability is stronger when the route is specific, repeatable, and close enough to make the relevant error visible. It’s weaker when the route is delayed, generic, or only loosely tied to the claim.

Scale drift gives the contrast practical as well as semantic force. Repeated weighing, standard weights, and failed downstream uses can expose the drift. If a witness is mistaken, records, other witnesses, and later events can defeat the report. If a model generates a plausible citation from textual pattern alone, the output has so far been shaped by genre, with those checks absent from the production route. It may still be right, and its rightness is less supported by the route that produced it.

A single sentence can differ in answerability. “The sample contains 3.2 mg of lead” is strongly answerable when it’s generated by a calibrated assay whose logs, standards, and downstream checks can expose error. The same string is weakly answerable when a text-only model produces it because such numbers fit the genre. The truth conditions haven’t changed. The route by which the claim became available has.

Pragmatist theories mark a different stabilizer. Inquiry, action, and successful practice can correct locally coherent or socially inherited representations with weak world-connection (James 1907; Dewey 1941). That doesn’t make truth identical with what works. Practical success helps representational systems become answerable to what they’re about.

I use the account to explain the stabilizing background that makes truth-ascription, accuracy-ascription, and truth-relevant representational success projectible across cases. We ask why some outputs fall inside the extension of truth-relevant success, why nearby outputs fall outside it, and which features let us project from a partial description of a case to its likely epistemic behaviour. Goodman’s projectibility problem enters here: the task shifts from attaching the word *true* case by case to finding which patterns make truth-relevant classifications reliable guides to further expectation.

Read “truth-tracking” in that modest sense. It names patterned support for representational success, while Nozick’s truth-tracking account targets subjunctive conditions on knowledge (Nozick 1981). Patterned support of this kind lets us expect some representational successes to survive checks, perturbations, and neighbouring applications better than others.

Boyd’s accommodationism supplies the background for that move. Reference and truth depend on more than definitions in isolation; they’re achievements of practices that align perceptual, instrumental, cognitive, and representational activity with relevant causal structures (Boyd 2021). That frame can be accepted while asking a narrower question: how strongly does a given system participate in the practices and mechanisms that make such alignment reliable?

Language models make the lesson plain. Their outputs are assessed through some stabilizers and bypass others. A text-only model may inherit textual traces of testimony, statistical regularities, and local coherence pressures with attenuated perception, measurement, intervention, and ordinary practical correction. That profile is enough to make truth-relevant assessment possible, uneven, and empirically diagnostic.

# Truth-tracking as a projectible mechanism profile

Goodman’s new riddle fixes the projectibility problem: which predicates support projection from known to unknown cases (Goodman 1955)? Here, that question concerns truth-relevant representational successes: which stabilizer patterns let us project from partial evidence to likely success or failure?

Khalidi’s account supplies the network discipline behind this profile talk. Natural categories earn their status by supporting prediction and explanation, and they do so when associated properties stand in causal relations that make some properties projectible from others (Khalidi 2013).

I adapt the framework narrowly to the representational successes fixed in Section <a href="#sec:target" data-reference-type="ref" data-reference="sec:target">2</a>; the stabilizers explain why those cases support projection. Perception, testimony, coherence, measurement, intervention, error-correction, and practical success are linked routes through which representational outputs become more or less answerable to the world. Khalidi’s later “nodes in causal networks” formulation gives the graph vocabulary for this representation (Khalidi 2018).

Calling the result a profile marks two points. First, different routes can dominate in different domains. Proof norms matter more in mathematics than ordinary perception does; calibration matters more in laboratory measurement than conversational fluency does. Second, the epistemic force often lies in the relations among routes. Testimony matters differently when it’s backed by records, instruments, and correction than when it’s an isolated report.

Boyd supplies the lineage for this profile view. Homeostatic property cluster (HPC) theory explains how real kinds can be projectible in the absence of essences (Boyd 1991, 1999). Boyd’s later accommodationism supplies the semantic background: successful reference is an achievement of whole practices. Accepted definitions don’t fix it term by term. Perceptual skills, instruments, inferential routines, social arrangements, and representational uses all contribute when they help a practice align with relevant causal structures (Boyd 2021).

Accommodation, in this sense, is the gradual fitting of representational practice to the structures it’s used to track. A scientific term, an instrument reading, or an ordinary object name becomes more reliable as perception, measurement, inference, correction, and use are adjusted together. Definitions alone don’t secure the fit; practices that make error detectable and revision possible maintain it.

Consider *fever*. Feeling hot, thermometer readings, calibration standards, clinical thresholds, records, and revised estimates of normal body temperature have adjusted one another over time. The term stays useful because the practice has routes for detecting error and changing how the target is measured.

Within that lineage, homeostasis marks the important special case. Links are actively maintained: mechanisms correct one another, and the properties co-occur far more reliably than chance. The truth-tracking profile has tightly coupled regions, and the connections thin toward its edges. It can project without the whole profile being literally homeostatic.

Keeping that distinction in view limits the claim. A stable association can be useful below the threshold of homeostasis. A set of features can support some projection without corrective feedback actively maintaining it. Homeostasis is the stronger case, where mechanisms actively sustain the links and pull the profile back into shape when it drifts (Reynolds 2026).

I narrow Boyd’s question to text-trained participants. An LLM can inherit stabilized linguistic and testimonial patterns while its instrumental, perceptual, and practical routes for answerability remain attenuated.

At the explanatory level, the account stays continuous with Boyd; at the system level, it stays diagnostic. Accommodationism tells us why representational practices can be answerable to causal structure; the profile account tracks how strongly a given system participates in the stabilizers that make that answerability possible. LLMs serve as the pressure case because they inherit accommodation through human text and weaken several world-corrective paths.

Two jobs follow. First, the picture identifies the tightly coupled core. In everyday perception and basic coordination, perception, action, memory, testimony, and practical failure – the routes where error has been costly longest – have repeatedly corrected one another. That coupling explains the familiar language-model failure signature: remove the perceptual and verificational nodes, and representational success should fail in a specific way (Section <a href="#sec:llm" data-reference-type="ref" data-reference="sec:llm">7</a>).

Second, it places the loose cases. Toward the edges, in frontier science, ethics, contested law, and remote history, the nodes are real but sparsely linked. Error cost is delayed, diffuse, contested, or beyond current instruments. There may be proof norms, expert testimony, institutional procedures, and coherence constraints, but fewer shared routes of correction. Section <a href="#sec:adjudication" data-reference-type="ref" data-reference="sec:adjudication">5</a> makes that diagnosis explicit: shared selection or training history, institutional age, and measurement infrastructure are often thin at the edges.

Reading the profile as a network still leaves boundaries to be fixed. Onishi and Serpico (2022) show that carving a kind from a causal graph stays relative to the chosen level of abstraction; Craver (2009) makes the same point for mechanism talk.

So the paper fixes the epistemic purpose. Following Khalidi’s distinction between epistemic purposes and non-epistemic practical or aesthetic ones, the profile is individuated by representing a target domain well enough for relevant inferential, practical, or corrective success under perturbation (Khalidi 2013). Relative to that purpose, its connections can thin at the edges and the profile can still hold.

# Why the profile is projectible

Section <a href="#sec:target" data-reference-type="ref" data-reference="sec:target">2</a> fixed the target cases, and Section <a href="#sec:profile" data-reference-type="ref" data-reference="sec:profile">3</a> identified the stabilizers. Projectibility concerns the relation between them. The question is whether a partial description of an output and its stabilizing background lets us predict further truth-relevant success or failure.

A guiding purpose individuates the profile: representing a target domain well enough for relevant inferential, practical, or corrective success under perturbation. Perturbation matters because it distinguishes lucky fit from robust answerability. A representation may succeed in the training cases, the familiar environment, or the current conversational context. It projects more strongly when it continues to guide action, inference, measurement, and correction after conditions change.

The causal backbone stays deliberately light. In Pearl’s hierarchy, the profile begins as association among stabilizers, mechanism is identified by perturbation, and projectibility is the counterfactual question of what would hold nearby; Pearl’s intervention operator formalizes that perturbation test (Pearl 2009, 2010). Woodward supplies the manipulability reading: a stabilizer is explanatory when interventions on it change the cluster in stable, predictable ways (Woodward 2003, 2001). This argument does not assume a specifiable graph; it uses the ascent from association to intervention to counterfactual projection rather than a full structural causal model.

A simple example helps. A weather claim repeated from an old webpage may be true when the weather is stable and the page is recent. It projects weakly once the date, location, or local conditions change. A claim constrained by live measurement, calibrated instruments, and error-reporting practices projects more strongly because nearby changes have routes through which they can affect the representation.

Survival and reproduction mark limiting biological cases of this structure. Hoffman-style interface arguments warn that adaptive success and veridical representation can come apart (Hoffman et al. 2015). Martínez (2019) argues that usefulness can drive representations toward truth under specified conditions. The lesson for this paper is methodological: usefulness becomes truth-relevant when the task, environment, and correction channels make error costly in ways that expose the relevant mismatch.

Outside biology, institutions and technologies often supply the stabilizers. In science, law, medicine, engineering, testimony, and model evaluation, the relevant routes include replications, instruments, standards, records, peer challenge, and downstream practical failure. These routes help a truth-relevant output become robust under perturbation.

Useful classifications show why “works in practice” is too coarse on its own. A classification can succeed because it tracks a real structure, because the environment has been arranged around it, or because a task rewards a proxy. Only the first and some forms of the second support the kind of projection at issue here. The profile has to say which route is doing the stabilizing.

Coupled routes support projection. A perceptual judgement supported by immediate appearance alone projects weakly if it’s easily overturned by lighting, perspective, testimony, or measurement. The same judgement projects more strongly when it’s embedded in a practice where perception, action, memory, testimony, and correction have repeatedly calibrated one another.

Projection comes in degrees. The question is how much of the relevant correction background the case carries with it. The more the routes have been mutually calibrated, the more confidently success in one nearby case licenses expectations about another.

Across domains, different stabilizers can take priority. Some mathematical and logical cases project through inferential structure with little perceptual input. Some scientific cases project through instrumentation and replication instead of ordinary observation. Some testimonial cases project because the institution has mature roles, records, and correction channels. The projectible unit is the coupled pattern.

Edge cases follow from the same structure. Where stabilizers thin or fail to calibrate one another, truth-relevant classifications should project less strongly. Frontier science, remote history, contested legal facts, and ethical disagreement should be treated as thinner regions of the profile. They may still involve real stabilizers, but the pattern supports weaker expectations about agreement, correction, and future success.

Language models make the diagnosis concrete. A system that strongly inherits textual traces of testimony and local coherence, with weak participation in perception, measurement, intervention, and practical correction, should show a specific failure profile. It can produce fluent outputs that look truth-relevant from inside the textual profile and fail under perturbations that require independent contact with the world.

Tool use, retrieval, multimodal input, expert review, and action-guided feedback matter because they change the stabilizer pattern. They may strengthen projectibility in some domains, leave it weak in others, or introduce new routes to error. The profile view predicts comparative differences among systems and tasks.

# What profile structure adds to component theories

Profile structure contributes when it answers questions that are hard to formulate if one stabilizer is treated as the main unit of assessment. The answer turns on coupling: the way mechanisms have calibrated one another can carry the evidential fact.

Component theories enter as local successes. Reliabilism foregrounds reliable processes (Goldman 1979). Coherentism foregrounds integration, with input needed for truth-conduciveness (BonJour 1985). Pragmatist accounts stress correction through successful practice (James 1907; Dewey 1941). Correspondence accounts preserve answerability to the world (David 1994; Kirkham 1992). Social epistemology treats testimony and institutions as genuine epistemic sources (Coady 1992; Lackey 2008; Goldberg 2010).

Taken together, these claims form part of the positive view. Reliable production, coherence, answerability, action, testimony, and institutions each contribute to stabilization. The question is what happens when those stabilizers are separated, recombined, or moved into a new system.

After those successes are granted, the profile view begins with the pattern of calibration among stabilizers: perception checked by testimony, testimony disciplined by memory and records, coherence constrained by measurement, measurement corrected by intervention, and practice pressured by failure. Read as a causal network (Section <a href="#sec:profile" data-reference-type="ref" data-reference="sec:profile">3</a>), the profile has structure that source-by-source assessment leaves in the background: the strength and history of the links between nodes.

A source’s evidential force can change when the rest of the correction network changes. A locally reliable route may stop projecting when it’s removed from the practices that made it reliable.

LLMs sharpen this point for reliabilism in particular. The relevant process is rarely just “the model generated this text”. It may include pretraining data, filtering, instruction tuning, retrieval, tool calls, prompting, deployment constraints, post-hoc checking, and institutional uptake. It may also include reinforcement learning from human feedback (RLHF). Reliability often attaches to that system-profile. A cleanly bounded internal generator may be too narrow. Reliabilism can preserve its central insight by individuating the process at the same level at which the stabilizers actually operate.

Reliability and answerability cross-cut. A route can be reliable while weakly answerable, and answerable before it’s reliable. It may be reliable in a familiar environment but weakly answerable under perturbation if the target has no route for correcting it when conditions change. Conversely, a newly calibrated instrument can be answerable before it has much of a track record: standards, logs, and downstream checks already specify how discrepancies would show up. Reliability is a statistical property of a process; answerability is a counterfactual property of a network.

A concrete transfer case shows the pressure. Suppose a retrieval-augmented system, which retrieves external records and places them in the model’s context, scores well on source-backed factual questions about clinical guidelines. A coarse process description such as “this system answers medical questions reliably” invites transfer to neighbouring medical tasks. The profile view withholds that transfer. The success was supported by record access, text extraction, and institutional testimony. It should transfer to nearby record-backed questions and degrade on tasks whose missing stabilizer is live measurement, patient-specific observation, calculation, or intervention.

A careful reliabilist can individuate the process more narrowly, as retrieval-backed answering under a particular profile of records, tools, and checks. At that point the reliabilist has reproduced the profile-level carving. The difference is methodological: the profile account requires that carving before the transfer is granted.

## Adjudicating mechanism conflict

When two stabilizers disagree, say perception reports one thing and well-attested testimony another, a theory focused on one source at a time underdescribes the evidential situation. Goldman-style reliabilism can ask which process type is reliable, including conditional reliability; social reliabilism can extend the assessed process through testimonial production (Goldman 1979; Goldberg 2010). Those are genuine resources. The profile question is different: how tightly have these sources been calibrated against one another in this domain?

In Khalidi’s terms, causal relations among associated properties underwrite projection; here the relevant projection runs from one stabilizer’s output to another’s (Khalidi 2013).

Consider a modest conflict. A subject’s visual judgement says that an object has property *P*. A calibrated instrument says that it lacks *P*. Several competent people, drawing on the same instrument tradition, say the instrument is functioning normally. The profile view avoids a standing rule to trust perception, testimony, or the instrument. It asks which sources have historically corrected which others in this region of practice.

In everyday object recognition, ordinary perception, practical feedback, memory, and testimony have long corrected one another. If I seem to see an old friend at the end of a hallway while well-placed testimony rules out her presence, the perceptual judgement can reasonably give way. Coady’s discussion of perception, memory, inference, and testimony already pushes in this direction: the sources interpenetrate, and testimony can rationally undermine what presents itself as perception (Coady 1992).

In a mature instrumental domain, the priority can reverse. Unaided perception may be the weak node, because the tighter profile joins calibrated instruments, records, expert testimony, replication, and repeatable intervention. The same abstract conflict receives different treatment in different domains. Global source reliability is too coarse a contrast. The history of cross-source correction gives one output a stronger projective relation to the rest of the profile.

Co-variation carries epistemic weight. A tightly coupled profile gives a defeasible presumption that a lone divergent output is local error or a boundary case. A loosely coupled profile gives a different presumption: divergence is evidence that the kind of success under assessment projects weakly here. The verdict is still empirical and fallible, but both the pattern of calibration among stabilizers and the assessed reliability of one source enter the evidence.

Agreement alone doesn’t guarantee truth. It can be manufactured, coerced, or inherited from a shared mistake. Agreement produced by independent, mutually correcting routes has a different evidential meaning from agreement produced by one copied source. The profile account keeps that difference visible.

Russell’s classic objection to the coherence theory of truth made the structural point early: a false proposition can cohere with some specified set, so coherence alone can’t select truth (Russell 1907). The profile account inherits the lesson without adopting Russell’s theory. Coherence stabilizes as one route among several, and its force depends on its coupling to input and correction routes.

Bayesian work on witness independence and coherence establishes the evidential point: agreement confirms more when sources are sufficiently independent than when they share a source or an error process (Bovens and Hartmann 2003; Olsson 2005). The profile account uses the point differently. Calibration history becomes an individuation principle for systems and transfer as well as evidence for a body of testimony.

Transfer cases make that difference matter. Suppose a model, instrument, or witness has been reliable in a domain where perception, records, and measurement have repeatedly corrected one another. A source-by-source assessment can preserve that reliability score when the source is moved to a neighbouring domain.

Here the profile view withholds that presumption. If the new domain lacks the calibration history that made the earlier success projectible, it predicts weaker transfer even before any present disagreement appears. The divergent prediction is that reliability carried apart from its cross-source correction background should degrade under perturbations that remove the missing checks.

## Domain-clustered co-variation

A network view also foregrounds a cross-domain pattern that source-by-source accounts tend to leave implicit: disagreement should cluster where the independent marks of connectivity are thin. Khalidi treats causal strictness and network density as dimensions along which categories support stronger or weaker projection (Khalidi 2013). The stabilizers of truth-relevant success should be densely linked where they’ve been jointly disciplined, and sparsely linked where they haven’t. Persistent disagreement should cluster in the sparsely connected regions.

To avoid circularity, connectivity has to be characterized independently of agreement. The graph still requires a purpose: Onishi and Serpico (2022) show the abstraction level and boundaries stay interest-relative.

Replying requires fixing the purpose while leaving the interest-relativity visible. Holding the representational aim of Section <a href="#sec:projectibility" data-reference-type="ref" data-reference="sec:projectibility">4</a> fixed, connectivity can be characterized by three marks established before present agreement is checked.

First, the stabilizers can share a selection or training history. Perception, naming, action, and memory in ordinary object recognition have been shaped by recurring tasks and recurring error signals. Instruments, calibration routines, and expert reports in mature scientific practices can share a similar history, even when the relevant objects aren’t available to unaided perception.

Second, the practice can have institutional age. Age by itself isn’t enough for reliability; a long-lived mistake remains a mistake. The relevant sign is the accumulation of correction norms, records, role differentiation, and procedures for passing error reports forward. These features make one stabilizer available as a check on another before any present disagreement has been adjudicated.

Third, the domain can have measurement infrastructure. Instruments, standards, replications, and intervention routines let a practice ask whether perception, testimony, or coherence has drifted. Where those infrastructures are thick, the stabilizers can correct one another. Where they’re thin, the same stabilizers may continue to operate, but their relations support weaker projection.

Used this way, the marks are defeasible indicators, not criteria. Disagreement can also be driven by stakes, incentives, ideology, small samples, strategic ambiguity, or value-ladenness. The profile view predicts especially persistent disagreement where those familiar pressures combine with weak cross-source correction.

Once the purpose is fixed, the profile predicts tighter agreement where shared training history, institutional correction, and measurement infrastructure are thick. It predicts looser agreement where those marks are absent. Frontier science, ethics, contested law, and remote history are expected edge cases for that reason: some stabilizers remain real while the links among them thin.

Profile structure adds to the component theories by explaining changes in relative epistemic force. Process reliability, coherence, correspondence, pragmatic success, and testimony remain local successes. Their force changes across domains because the calibration background changes. Section <a href="#sec:llm" data-reference-type="ref" data-reference="sec:llm">7</a> applies that result to language models: systems can inherit textual and coherentist stabilizers with attenuated perceptual and verificational links.

# Objections

## Interest-relativity

One objection cuts at the profile structure itself. Onishi and Serpico (2022) argue that Khalidi’s causal-network account inherits the interest-relativity Craver (2009) finds in mechanistic accounts: which causal graph you draw, at what level of abstraction, and where you set its boundaries all answer to explanatory interest, so the network never fixes a unique, interest-free carving of kinds. If that’s right, the profile of truth-relevant success is only as objective as our purposes.

I concede the premise and limit the consequence. The account makes two claims, both purpose-relative and both revisable: systems missing perceptual and verificational stabilizers should show the failure pattern described in Section <a href="#sec:llm" data-reference-type="ref" data-reference="sec:llm">7</a>, and connectivity should track selection history, institutional age, and measurement infrastructure (Section <a href="#sec:adjudication" data-reference-type="ref" data-reference="sec:adjudication">5</a>). Each holds once the representational purpose is fixed, and either can fail if the stabilizers are misdescribed.

Onishi and Serpico (2022) reach the same general verdict, that interest-relativity is ineliminable, and Khalidi’s domain pluralism leaves room for this move (Khalidi 2013). The account makes the operative interest explicit and keeps it visible.

## Relabeling and absorption

A second objection says that the account will be absorbed by the component theories. Reliabilism can already conditionalize process reliability. Social epistemology can extend the assessed process through testimony, records, and institutions. Coherentism can demand input constraints. On this objection, the profile view redescribes familiar epistemology in causal-network language.

Component theories often have resources to mention coupling. Still, profile structure makes the calibration history itself the unit from which we project. Section <a href="#sec:adjudication" data-reference-type="ref" data-reference="sec:adjudication">5</a> gave the central case. A source can retain its local success record while losing the correction background that made that success travel. The profile view predicts weaker transfer in that case, because the missing cross-source links matter before a fresh reliability score has been established. A careful reliabilist can reconstruct the same grain after the fact; the divergence concerns the default entitlement to transfer. For complex systems, that move raises the generality problem for reliabilism at system scale (Conee and Feldman 1998). Pretraining, filtering, RLHF, retrieval, tools, prompts, and institutional uptake can be carved into many process types. If the reliabilist uses selection history, institutional age, measurement infrastructure, and architectural facts to choose the projectible carving, the profile view has supplied the individuation theory.

In this respect, the account complements reliabilism, coherentism, correspondence, pragmatism, and social epistemology. It says when their local stabilizers support projection together, when they pull apart, and what failures should follow.

## Derivative testimony

A third objection concerns testimony. Testimony is an interpersonal epistemic practice involving assertion, responsibility, trust, uptake, and defeaters (Coady 1992; Lackey 2008; Goldberg 2010). If so, giving a language model testimonial standing because it was trained on human text alone misleads. Recent work on artificial intelligence testimony presses the same role question from the other direction: conversational systems strain anthropocentric theories of testimony while still differing from ordinary human testifiers (Freiman 2024).

Accepting that point gives the weaker claim. A text-trained model inherits artifacts of testimonial practices: reports, explanations, records, instructions, arguments, and corrections left in text. That inheritance is a genuine stabilizer because many such texts were produced inside practices already partly accommodated to the world.

Training alone also leaves the stabilizer derivative: it gives the model neither the role of a normal hearer who can trust a speaker under standing norms of assertion nor the role of a speaker who takes responsibility for what’s asserted. That derivative status explains both the reach and the fragility of text-only systems.

## Non-empirical domains

A fourth objection comes from mathematics, logic, ethics, fiction, and law. In these domains, perception, measurement, intervention, and practical success seem peripheral or misplaced. If the profile is built around world-contact, it may overfit ordinary empirical truth.

Different regions privilege different stabilizers. In mathematical and logical cases, inferential structure, proof norms, notation, memory, testimony, and error-correction carry much of the projection. In legal and ethical domains, institutional procedures, role differentiation, public reasons, precedents, and contestation can be stabilizing even when agreement remains fragile. Fictional truth has its own textual and practice-bound constraints. These are thinner or differently coupled regions of the profile structure.

## Deflationism and pluralism

Finally, deflationists and alethic pluralists may object from opposite directions. Deflationists may say that truth has no deep nature for the profile to explain (Horwich 1998). Pluralists may say that different domains involve different ways of being true, so a single profile is artificial.

Both objections help fix the ambition. The paper explains projectible patterns among truth-relevant representational successes. That target is compatible with a thin account of the truth predicate. It also fits domain pluralism, because the profile already allows different stabilizers to be privileged in different regions. The claim concerns the projectible stabilizer profile of truth-relevant success.

# The LLM case: participation, not a verdict

Start with the bearer. Different LLM systems have different truth-tracking profiles. A pretrained text model, an instruction-tuned chat model, a retrieval-augmented system, a tool-using agent, a multimodal model, and an experimentally embedded robot have different stabilizing backgrounds. The theory asks us to compare them: change the stabilizers, and the expected successes and failures should change too.

Participation names the key relation. A system participates in a stabilizer to the extent that its outputs are generated, constrained, corrected, or selected by that stabilizer in a way that supports projection to further cases.

Participation can be inherited, as when training text contains the residue of human perception, testimony, measurement, and correction. It can be operational, as when retrieval, tools, sensors, or instruments constrain the present output. It can be corrective, as when feedback changes later behaviour. It can also be decorative, as when an output mentions experiments, sources, or measurements with the relevant constraint absent.

With these distinctions, participation doesn’t collapse into metaphor. Inherited participation explains why a text-only system can know its way around a domain whose records are dense and stable. Operational participation explains why retrieval and tools can matter at deployment as well as during training. Corrective participation explains why feedback matters only when it changes future behaviour in ways tied to the relevant error. Decorative association is the failure mode: the language of measurement without measurement, the language of citation without a record.

They also block a circular reading of the account. Causal and architectural facts individuate participation before the performance test: training objective, data provenance, filtering history, runtime information flow, tool-call logs, sensor access, update channels, and the route by which feedback changes later behaviour. Performance then tests whether those architectural facts were the right stabilizers to mark.

The main interventions can be described in stabilizer terms. Retrieval augmentation queries an external corpus or search system and places retrieved material into the model’s context; it adds record access. Tool use routes a subtask through a calculator, database, code interpreter, application programming interface, or instrument; it adds calculation or measurement only when the right tool is called and its result is integrated. Coding adds a stronger correction loop when generated code is run: a compiler error, traceback, failing assertion, or passing test supplies fast, attributable feedback about the produced artifact.

Self-consistency prompting samples multiple completions or reasoning paths and privileges convergence among them; it strengthens internal convergence. An external check requires a separate route to the relevant facts. Instruction tuning and RLHF change the model’s policy through demonstrations, preferences, benchmarks, or evaluations; they add a social or evaluative correction channel whose target depends on the feedback.[^3] Multimodal input supplies image, audio, video, or sensor information; by itself, it adds perceptual input. Calibrated measurement is a separate stabilizer.

Multimodality matters because it seems to answer Harnad’s sensorimotor prescription. The profile gives a finer-grained diagnosis. Harnad’s proposal joins perception to action, correction, and use (Harnad 1990). A vision-language model trained on image-caption corpora inherits perceptual participation through selected, framed, and captioned images. A deployment-time image input adds operational perception. Those routes supply perceptual input; calibrated measurement, intervention, and action-guided correction remain separate stabilizers.

Multimodal input should improve performance unevenly. It should reduce some failures in object classification and leave measurement- and intervention-dependent tasks fragile. It should also leave room for object hallucination, where generated descriptions include objects not present in the image (Y. Li et al. 2023). That pattern is what the profile view expects when the sensory route is strengthened with a partial corrective profile.

To test the view, hold the topic, answer format, and apparent difficulty fixed, and vary the missing stabilizer. Gains should follow the added routes. Retrieval should improve source-backed recall more than novel measurement or action-sensitive causal judgement. Self-consistency should improve coherence-sensitive reasoning more than claims that need a fresh route to the facts. Multimodal input should improve perceptual classification before it improves calibrated measurement. If gains transfer evenly across those contrasts, that would be evidence that the profile has carved the stabilizers badly.

A matched clinical test would make this concrete.[^4] One item set asks for recommendations recoverable from guidelines or institutional records. A paired set uses the same disease area, answer format, and difficulty cues and requires a patient-specific lab value, observed sign, dose calculation, or intervention-sensitive causal judgement. The profile predicts a retrieval gain on the first set and little transfer to the second unless the needed measurement or tool route is supplied. Retrieval alone producing the same gain on both sets would count against the carving.

A separate control handles difficulty. Under a pure difficulty explanation, adding the relevant lab value or calculator should leave the gap in place. Under the stabilizer explanation, the added route should selectively restore performance.

A deployed product may occupy several rows at once. A chat system can be instruction-tuned, retrieval-augmented, partly tool-using, and multimodal. The profile question asks which stabilizer is live in the task being assessed.

Which profile counts as the baseline depends on the task. A deployed system with retrieval, tools, or multimodal channels occupies the baseline whenever those channels sit idle or appear decoratively. The text-only case is the profile to which richer systems revert when added stabilizers are unavailable, inappropriate, or unintegrated.

As a pressure test, the text-only baseline gives the cleanest case. Such a model inherits textual products of human accommodation: reports written by perceivers, explanations corrected by teachers, records produced by institutions, descriptions shaped by instruments, and genres whose norms often reward coherence and accuracy. That inheritance is why text-only systems can support genuine epistemic achievements. It also explains why the inherited stabilizer deserves derivative testimonial status. The model has access to testimonial residue, a different role from that of a speaker or hearer in a testimonial exchange.

Table <a href="#tab:llm-profiles" data-reference-type="ref" data-reference="tab:llm-profiles">1</a> summarizes the architecture-sensitive predictions. The rows are profiles rather than a scale from bad to good.

| System profile | Added or dominant stabilizer | Directional prediction |
|:---|:---|:---|
| Text-only pretrained model | Textual inheritance and local coherence | Strong where dense, stable text is a good proxy; fragile for recent, obscure, perceptual, or measurement-dependent facts. |
| Instruction-tuned or RLHF model | Preference, helpfulness, safety, and benchmark feedback | Better conversational fit and some error reduction; independent routes to the facts still have to be supplied. |
| Retrieval-augmented system | Live access to records and institutional traces | Better on updated or source-backed recall; remaining fragility where the missing route is experiment, perception, or intervention. |
| Tool-using or coding system | Calculators, databases, code execution, instruments, or application programming interfaces | Better where the right tool is called and interpreted; strongest when runtime or test results guide revision; new failures from tool choice, stale data, and test-as-proxy effects. |
| Multimodal system | Perceptual input in image, audio, video, or sensor form | Better for some perceptually anchored tasks; calibrated measurement and practical correction remain separate stabilizers. |
| Action-guided or expert-reviewed system | Practical feedback, review, and downstream failure pressure | Stronger correction profile where feedback is timely and domain-competent; weaker where review is sparse or proxy-based. |

Architecture-sensitive profile predictions. {#tab:llm-profiles}

Derivative inheritance cuts both ways. Human text is saturated with world-directed practice. It contains the residue of people looking, measuring, arguing, repairing, citing, and correcting one another. The model usually remains outside those practices when it produces a fresh answer. It draws on their products with attenuated access to their present checks.

Text-only training can still produce more structure than a bare “textual residue” slogan suggests. The generative pretrained transformer model Othello-GPT is an important pressure case: a sequence model trained to predict legal moves in a board game developed an internal representation of board state, and interventions on that representation affected its outputs (K. Li et al. 2023). Such cases fit the profile view where the target structure is densely and systematically encoded in the sequence stream. They show that inherited participation can be strong when the relevant world is small, rule-governed, and recoverable from the training signal.

Limits matter. Internal world-model evidence should be strongest where the relevant state variables are encoded in the sequence and the loss function penalizes violations of their structure. It should weaken when success depends on variables absent from the sequence, live measurement, changing local conditions, or intervention in the target system. Robust transfer across those boundaries would count against the profile diagnosis.

Coherence gives the second strong stabilizer. Training and decoding reward genre fit, local well-formedness, smooth inference, and continuation from context. Those pressures explain why these systems can display impressive formal linguistic competence, in the sense separated from functional world use by Mahowald et al. (2024). They also explain the vulnerability. Coherence can improve the shape of an answer and add no independent route by which the relevant facts constrain it.

In the baseline profile, perception, measurement, intervention, and practical correction enter weakly through text produced by others. A model can generate a plausible lab result, legal summary, local observation, or bibliographic claim because similar text exists. The present output remains unconstrained by an experiment, court record, observation, or catalogue entry.

Textual inheritance works distributionally rather than archivally. Distributional inheritance can recover the shape of a practice without preserving its anchors. A text-only model inherits statistical regularities in testimonial practice, so it can navigate a domain whose records are dense and stable while fabricating the verbatim anchors (quotations, identifiers, author lists) on which the practice’s correction routines depend. The same distinction predicts that these failures should be especially retrieval-sensitive: retrieval adds the archival route that distributional inheritance lacks.

Hallucination plays a more specific role here. The LLM literature treats it as heterogeneous (Huang et al. 2025). The profile claim is narrower: text-only systems should be especially vulnerable to fluent, coherent, genre-appropriate outputs that fail when the task requires a fresh or independent route to the facts. Those failures should be common for obscure sources, recent events, local observations, novel measurements, fine-grained quantities, and action-sensitive causal claims. They should be less common where dense, stable, redundant text is already a good proxy.

Frankfurtian accounts of bullshit (Frankfurt 1986) diagnose LLM output differently. Hicks et al. (2024) apply that diagnosis to ChatGPT-style systems, arguing that their outputs are produced with indifference to truth. On the Frankfurtian diagnosis, the system doesn’t care where the facts are; on the profile diagnosis, the relevant facts have no route into production or correction. That missing route yields comparative predictions across retrieval, tools, multimodality, and action-guided feedback.

Mitigation results should be read through the same distinction. Retrieval can reduce hallucination in conversation (Shuster et al. 2021); that’s evidence about record access. Perception, experiment, and intervention require further routes. Tool use and multimodality make parallel changes. They add operational routes where the tool, sensor, or modality is actually live in the task; otherwise the new vocabulary of tools or perception can remain decorative.

Action-guided systems provide the strongest possible upgrade in the table when the feedback is timely, attributable, and tied to the relevant failure. Coding is the clean artificial case. A system that runs generated code, observes a compiler error, traceback, failing test, or successful execution, and revises against that result has a tighter corrective route than a system rewarded for plausible-looking code. A robot that breaks a glass, misses a target, or fails a laboratory protocol can receive similar correction unavailable to a text-only model. A deployed chatbot that receives delayed approval, engagement metrics, or sparse user edits has a thinner corrective route. The label “feedback” hides that difference unless the stabilizer is specified.

Instruction tuning, RLHF, benchmark evaluation, red-teaming, and expert review function as correction channels, and they should be classified by what they correct. They often impose helpfulness, harmlessness, preference satisfaction, conversational fit, and benchmark success. Those constraints can reduce some errors and can also reward answer-shaped behaviour when users or raters prefer confidence, agreement, or plausible explanation.

Work on sycophancy shows the risk of treating preference feedback as truth feedback on its own (Shapira et al. 2026). In the profile terms, these processes strengthen some social and evaluative stabilizers and leave perception, measurement, and intervention proxy-based.

Coelho Mollo and Millière press the strongest neighbouring challenge. They distinguish kinds of grounding and argue that some LLM states can satisfy causal-historical or teleosemantic conditions for referential grounding (Coelho Mollo and Millière 2026). The profile view can grant that. Its explanandum is broader than referential grounding.

Work on neural word embeddings pushes in a similar direction: learned representations may have genuine, though limited, contents fixed by the functions they serve inside the system (Mallory 2026). Teleosemantic pressure of this kind fits the baseline text-only case. The reply grants content and asks which stabilizers that content participates in.

Referential grounding covers one dimension of world-connection. Truth-tracking answerability depends on a wider profile of stabilizers, including correction, measurement, intervention, perception, and practical feedback. An LLM state might be referentially grounded in their sense even as the deployed system has a fragile truth-tracking profile for tasks requiring independent checking.

Route-specific transfer gives the strongest test. Improvements in one route should remain limited where a task depends on a different stabilizer. If reliable perception, measurement, retrieval, tool use, expert correction, or action feedback fails to alter the expected contrast in the direction just specified, the profile has misdescribed the mechanisms. If text-only systems remain mainly dependent on inherited textual accommodation and local coherence, the same vulnerability should persist even as fluency improves.

# Conclusion

The opening question asked whether the representations inside a large language model connect to the world. The answer has been a change in what the question asks. World-connection is better treated as a profile of participation in the mechanisms by which representational outputs become answerable to what they’re about.

Truth-relevant representational success, I’ve argued, depends on a projectible profile of stabilizers: perception, testimony, coherence, measurement, intervention, error-correction, and practical success. These stabilizers explain why the cases picked out by successful truth-ascription travel together, fail in patterned ways, and support predictions from partial knowledge of a system’s background. A thin truth predicate can coexist with thick truth-tracking practices. Where the links are actively maintained, the coupling can become homeostatic in Boyd’s strong sense; elsewhere the profile can remain projectible below that threshold.

Reliabilism, coherentism, correspondence theory, pragmatism, and social epistemology each isolate a real stabilizer. The reason to move beyond them lies in their relations: the history of correction among sources, the density of the causal network in which they operate, and the degree to which one route to success can compensate for or expose the failure of another. The pattern can carry the epistemic fact.

Component theories can stay in place while their stabilizers interact. In ordinary cases, the interaction is easy to miss because the routes run together. In language models, the routes come apart.

A text-only model can inherit substantial textual residues of testimony and local patterns of inferential and discursive coherence. It may even acquire rich internal structure where the target domain is densely encoded in the sequence stream. That still differs from ordinary perceptual contact, calibrated measurement, intervention, and correction through action.

Comparison rather than classification follows. Retrieval, multimodal input, tool use, expert review, experimental embedding, and action-guided feedback alter the stabilizer profile. The question is which route they add, whether that route is live in the task being assessed, and where improvement should transfer. A system can improve along one dimension and remain fragile along another.

Empirical constraints remain. Participation is fixed by causal and architectural facts before performance is checked, and the predicted contrasts can fail.

Beyond artificial systems, LLMs serve as useful pressure cases because they separate mechanisms that human epistemic life usually runs together. They show that truth-tracking extends beyond linguistic competence, internal coherence, and statistical sensitivity to past assertion. Truth-tracking depends on a wider ecology of correction. Once that ecology is represented as a profile, the interesting question becomes visible: what a system participates in, what it borrows, what it lacks, and where those absences should matter.

# Acknowledgements

I thank Geoff for comments on coherence theory and the history of *true*. The large language models Anthropic Claude Opus 4.8; Anthropic Claude Fable 5; and OpenAI Codex using GPT-5.5 served as drafting and editing aids throughout the preparation of this paper. I am responsible for all theoretical claims, arguments, errors, and interpretive choices.

<div id="refs" class="references csl-bib-body hanging-indent">

<div id="ref-bender2020" class="csl-entry">

Bender, Emily M., and Alexander Koller. 2020. “Climbing Towards NLU: On Meaning, Form, and Understanding in the Age of Data.” In *Proceedings of the 58th <span class="nocase">Annual Meeting of the Association for Computational Linguistics</span>*, edited by Dan Jurafsky, Joyce Chai, Natalie Schluter, and Joel Tetreault. Association for Computational Linguistics. <https://doi.org/10.18653/v1/2020.acl-main.463>.

</div>

<div id="ref-bonjour_1985_structure_empirical_knowledge" class="csl-entry">

BonJour, Laurence. 1985. *The Structure of Empirical Knowledge*. Harvard University Press.

</div>

<div id="ref-bovens_hartmann_2003_bayesian_epistemology" class="csl-entry">

Bovens, Luc, and Stephan Hartmann. 2003. *Bayesian Epistemology*. Oxford University Press.

</div>

<div id="ref-boyd1991" class="csl-entry">

Boyd, Richard. 1991. “Realism, Anti-Foundationalism and the Enthusiasm for Natural Kinds.” *Philosophical Studies* 61 (1–2): 127–48. <https://doi.org/10.1007/BF00385837>.

</div>

<div id="ref-boyd1999" class="csl-entry">

Boyd, Richard. 1999. “Homeostasis, Species, and Higher Taxa.” In *Species: New Interdisciplinary Essays*, edited by Robert A. Wilson. MIT Press. <https://doi.org/10.7551/mitpress/6396.003.0012>.

</div>

<div id="ref-boyd_2019_rethinking_natural_kinds_reference_truth" class="csl-entry">

Boyd, Richard. 2021. “Rethinking Natural Kinds, Reference and Truth: Towards More Correspondence with Reality, Not Less.” *Synthese* 198 (S12): S2863–903. <https://doi.org/10.1007/s11229-019-02138-4>.

</div>

<div id="ref-chalmers_2023_thought_sensory_grounding_llms" class="csl-entry">

Chalmers, David J. 2023. “Does Thought Require Sensory Grounding? From Pure Thinkers to Large Language Models.” *Proceedings and Addresses of the American Philosophical Association* 97: 22–45. <https://philpapers.org/rec/CHADTR>.

</div>

<div id="ref-coady_1992_testimony" class="csl-entry">

Coady, C. A. J. 1992. *Testimony: A Philosophical Study*. Oxford University Press.

</div>

<div id="ref-coelho_mollo_milliere_2026_vector_grounding_problem" class="csl-entry">

Coelho Mollo, Dimitri, and Raphaël Millière. 2026. “The Vector Grounding Problem.” *Philosophy and the Mind Sciences* 7 (1). <https://doi.org/10.33735/phimisci.2026.12307>.

</div>

<div id="ref-conee_feldman_1998_generality_problem_reliabilism" class="csl-entry">

Conee, Earl, and Richard Feldman. 1998. “The Generality Problem for Reliabilism.” *Philosophical Studies* 89 (1): 1–29. <https://doi.org/10.1023/A:1004243308503>.

</div>

<div id="ref-craver_2009" class="csl-entry">

Craver, Carl F. 2009. “Mechanisms and Natural Kinds.” *Philosophical Psychology* 22 (5): 575–94. <https://doi.org/10.1080/09515080903238930>.

</div>

<div id="ref-david_1994_correspondence_disquotation" class="csl-entry">

David, Marian. 1994. *Correspondence and Disquotation: An Essay on the Nature of Truth*. Oxford University Press. <https://doi.org/10.1093/oso/9780195079241.001.0001>.

</div>

<div id="ref-dewey_1941_propositions_warranted_assertibility_truth" class="csl-entry">

Dewey, John. 1941. “Propositions, Warranted Assertibility, and Truth.” *The Journal of Philosophy* 38 (7): 169–86. <https://doi.org/10.2307/2017978>.

</div>

<div id="ref-frankfurt_1986_on_bullshit" class="csl-entry">

Frankfurt, Harry G. 1986. “On Bullshit.” *Raritan* 6 (2): 81–100.

</div>

<div id="ref-freiman_2024_ai_testimony" class="csl-entry">

Freiman, Ori. 2024. “AI-Testimony, Conversational AIs and Our Anthropocentric Theory of Testimony.” *Social Epistemology* 38 (4): 476–90. <https://doi.org/10.1080/02691728.2024.2316622>.

</div>

<div id="ref-goldberg_2010_relying_on_others" class="csl-entry">

Goldberg, Sanford C. 2010. *Relying on Others: An Essay in Epistemology*. Oxford University Press. <https://doi.org/10.1093/acprof:oso/9780199593248.001.0001>.

</div>

<div id="ref-goldman_1979_what_is_justified_belief" class="csl-entry">

Goldman, Alvin I. 1979. “What Is Justified Belief?” In *Justification and Knowledge*, edited by G. S. Pappas. Springer Netherlands. <https://doi.org/10.1007/978-94-009-9493-5_1>.

</div>

<div id="ref-Goodman1955" class="csl-entry">

Goodman, Nelson. 1955. *Fact, Fiction, and Forecast*. Harvard University Press.

</div>

<div id="ref-harnad_1990_symbol_grounding_problem" class="csl-entry">

Harnad, Stevan. 1990. “The Symbol Grounding Problem.” *Physica D: Nonlinear Phenomena* 42 (1–3): 335–46. <https://doi.org/10.1016/0167-2789(90)90087-6>.

</div>

<div id="ref-hicks_humphries_slater_2024_chatgpt_bullshit" class="csl-entry">

Hicks, Michael Townsen, James Humphries, and Joe Slater. 2024. “ChatGPT Is Bullshit.” *Ethics and Information Technology* 26. <https://doi.org/10.1007/s10676-024-09775-5>.

</div>

<div id="ref-hoffman_singh_prakash_2015_interface_theory_perception" class="csl-entry">

Hoffman, Donald D., Manish Singh, and Chetan Prakash. 2015. “The Interface Theory of Perception.” *Psychonomic Bulletin & Review* 22 (6): 1480–506. <https://doi.org/10.3758/s13423-015-0890-8>.

</div>

<div id="ref-horwich_1998_truth" class="csl-entry">

Horwich, Paul. 1998. *Truth*. 2nd ed. Oxford University Press. <https://doi.org/10.1093/0198752237.001.0001>.

</div>

<div id="ref-huang_etal_2025_survey_hallucination_llms" class="csl-entry">

Huang, Lei, Weijiang Yu, Weitao Ma, et al. 2025. “A Survey on Hallucination in Large Language Models: Principles, Taxonomy, Challenges, and Open Questions.” *ACM Transactions on Information Systems* 43 (2): 1–55. <https://doi.org/10.1145/3703155>.

</div>

<div id="ref-james_1907_pragmatism" class="csl-entry">

James, William. 1907. *Pragmatism: A New Name for Some Old Ways of Thinking*. Longmans, Green,; Co. <https://www.gutenberg.org/ebooks/5116>.

</div>

<div id="ref-kane2013validating" class="csl-entry">

Kane, Michael T. 2013. “Validating the Interpretations and Uses of Test Scores.” *Journal of Educational Measurement* 50 (1): 1–73. <https://doi.org/10.1111/jedm.12000>.

</div>

<div id="ref-khalidi2013" class="csl-entry">

Khalidi, Muhammad Ali. 2013. *Natural Categories and Human Kinds: Classification in the Natural and Social Sciences*. Cambridge University Press. <https://doi.org/10.1017/CBO9780511998553>.

</div>

<div id="ref-khalidi_2018_natural_kinds_nodes_causal_networks" class="csl-entry">

Khalidi, Muhammad Ali. 2018. “Natural Kinds as Nodes in Causal Networks.” *Synthese* 195 (4): 1379–96. <https://doi.org/10.1007/s11229-015-0841-y>.

</div>

<div id="ref-kirkham_1992_theories_truth" class="csl-entry">

Kirkham, Richard L. 1992. *Theories of Truth: A Critical Introduction*. MIT Press.

</div>

<div id="ref-lackey_2008_learning_from_words" class="csl-entry">

Lackey, Jennifer. 2008. *Learning from Words: Testimony as a Source of Knowledge*. Oxford University Press. <https://doi.org/10.1093/acprof:oso/9780199219162.001.0001>.

</div>

<div id="ref-li_etal_2023_emergent_world_representations" class="csl-entry">

Li, Kenneth, Aspen K. Hopkins, David Bau, Fernanda B. Viégas, Hanspeter Pfister, and Martin Wattenberg. 2023. “Emergent World Representations: Exploring a Sequence Model Trained on a Synthetic Task.” *The Eleventh International Conference on Learning Representations*. <https://openreview.net/forum?id=DeG07_TcZvT>.

</div>

<div id="ref-li_etal_2023_evaluating_object_hallucination_lvlms" class="csl-entry">

Li, Yifan, Yifan Du, Kun Zhou, Jinpeng Wang, Xin Zhao, and Ji-Rong Wen. 2023. “Evaluating Object Hallucination in Large Vision-Language Models.” *Proceedings of the 2023 Conference on Empirical Methods in Natural Language Processing* (Singapore), 292–305. <https://doi.org/10.18653/v1/2023.emnlp-main.20>.

</div>

<div id="ref-mahowald2024" class="csl-entry">

Mahowald, Kyle, Anna A. Ivanova, Idan A. Blank, Nancy Kanwisher, Joshua B. Tenenbaum, and Evelina Fedorenko. 2024. “Dissociating Language and Thought in Large Language Models.” *Trends in Cognitive Sciences* 28 (6): 517–40. <https://doi.org/10.1016/j.tics.2024.01.011>.

</div>

<div id="ref-mallory_2026_teleosemantics_word_embeddings" class="csl-entry">

Mallory, Fintan. 2026. “Teleosemantics for Neural Word Embeddings.” *Mind & Language*, ahead of print. <https://doi.org/10.1111/mila.70037>.

</div>

<div id="ref-martinez_2019_usefulness_drives_representations_truth" class="csl-entry">

Martínez, Manolo. 2019. “Usefulness Drives Representations to Truth: A Family of Counterexamples to <span class="nocase">Hoffman’s</span> Interface Theory of Perception.” *Grazer Philosophische Studien* 96 (3): 319–41. <https://doi.org/10.1163/18756735-09603004>.

</div>

<div id="ref-messick_1989_validity" class="csl-entry">

Messick, Samuel. 1989. “Validity.” In *Educational Measurement*, 3rd ed., edited by R. L. Linn. American Council on Education; Macmillan.

</div>

<div id="ref-nozick_1981_philosophical_explanations" class="csl-entry">

Nozick, Robert. 1981. *Philosophical Explanations*. Harvard University Press.

</div>

<div id="ref-olsson_2005_against_coherence" class="csl-entry">

Olsson, Erik J. 2005. *Against Coherence: Truth, Probability, and Justification*. Oxford University Press. <https://doi.org/10.1093/0199279993.001.0001>.

</div>

<div id="ref-onishi_serpico_2022" class="csl-entry">

Onishi, Yukinori, and Davide Serpico. 2022. “Homeostatic Property Cluster Theory Without Homeostatic Mechanisms: Two Recent Attempts and Their Costs.” *Journal for General Philosophy of Science* 53 (1): 61–82. <https://doi.org/10.1007/s10838-020-09527-1>.

</div>

<div id="ref-oed_true_2026" class="csl-entry">

Oxford English Dictionary. 2026. “True, Adj., n., Adv., and Int.” Oxford University Press. <https://doi.org/10.1093/OED/5727260633>.

</div>

<div id="ref-pavlick_2023_symbols_and_grounding_llms" class="csl-entry">

Pavlick, Ellie. 2023. “Symbols and Grounding in Large Language Models.” *Philosophical Transactions of the Royal Society A* 381 (2251): 20220041. <https://doi.org/10.1098/rsta.2022.0041>.

</div>

<div id="ref-pearl2009" class="csl-entry">

Pearl, Judea. 2009. *Causality: Models, Reasoning, and Inference*. 2nd ed. Cambridge University Press. <https://doi.org/10.1017/CBO9780511803161>.

</div>

<div id="ref-pearl2010foundations" class="csl-entry">

Pearl, Judea. 2010. “The Foundations of Causal Inference.” *Sociological Methodology* 40 (1): 75–149. <https://doi.org/10.1111/j.1467-9531.2010.01228.x>.

</div>

<div id="ref-reynolds2026notEveryStableCluster" class="csl-entry">

Reynolds, Brett. 2026. “Not Every Stable Cluster Is Homeostatic: Stability, Network Order, and Control in Projectible Kinds.” <https://philarchive.org/rec/REYNES>.

</div>

<div id="ref-russell_1907_nature_truth" class="csl-entry">

Russell, Bertrand. 1907. “On the Nature of Truth.” *Proceedings of the Aristotelian Society* 7 (1): 28–49. <https://doi.org/10.1093/aristotelian/7.1.28>.

</div>

<div id="ref-shapira2026rlhf" class="csl-entry">

Shapira, Itai, Gerdus Benade, and Ariel D. Procaccia. 2026. “How RLHF Amplifies Sycophancy.” *<span class="nocase">arXiv</span> Preprint <span class="nocase">arXiv</span>:2602.01002*, ahead of print. <https://doi.org/10.48550/arXiv.2602.01002>.

</div>

<div id="ref-shuster2021retrieval" class="csl-entry">

Shuster, Kurt, Spencer Poff, Moya Chen, Douwe Kiela, and Jason Weston. 2021. “Retrieval Augmentation Reduces Hallucination in Conversation.” *Findings of the Association for Computational Linguistics: EMNLP 2021* (Punta Cana, Dominican Republic), 3784–803. <https://doi.org/10.18653/v1/2021.findings-emnlp.320>.

</div>

<div id="ref-woodward2001" class="csl-entry">

Woodward, James. 2001. “Law and Explanation in Biology: Invariance Is the Kind of Stability That Matters.” *Philosophy of Science* 68 (1): 1–20. <https://doi.org/10.1086/392863>.

</div>

<div id="ref-woodward2003MakingThingsHappen" class="csl-entry">

Woodward, James. 2003. *Making Things Happen: A Theory of Causal Explanation*. Oxford University Press. <https://doi.org/10.1093/0195155270.001.0001>.

</div>

</div>

[^1]: Contact: <brett.reynolds@humber.ca>

[^2]: The lexical history of *true* is suggestive evidence only. The OED records Old English senses of loyalty, trustworthiness, and veracity, early senses of accordance with fact, and later medieval senses of accurate fit, proper purpose, and mechanical alignment (Oxford English Dictionary 2026). A ruler, balance, wheel, or surface can be true when it meets the standards of the practice in which it’s checked. That history doesn’t settle the analysis, but it fits the constraint relation used here.

[^3]: Preference signals have factual targets. Rater approval of affirmation, deference, or confident presentation is a fact about a population and interaction setting, and RLHF can make the model’s behaviour strongly answerable to that fact. The failure mode is target mismatch: the policy can track the rater distribution accurately while its assertions are assessed against a different, object-level target. Sycophancy is the clean case, where a system accurately tracks the wrong target.

[^4]: The design parallels validity argumentation in measurement: inferences from performance are licensed relative to a purpose and tested by varying method while holding the target construct fixed (Messick 1989; Kane 2013).
