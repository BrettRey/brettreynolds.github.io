# Synthesis: round 2, Codex board (clean room, adversarial, audience)
<!-- SUMMARY: 6 Codex reviewers in 3 lanes; clean room independently confirms round 1's findings so they were not prompt-anchored; two audience proxies show the page misrepresents seniority in both directions; 6 of 13 reviewers now reject the two-column structure itself · status: complete · updated: 2026-07-29 -->

Run: `review-board-20260729-r2-codex`. Source unchanged from round 1
(commit `3f35621c`, same hashes), so both rounds judge the same artifact.

## Lanes and why

Round 1's weakness was that one author wrote all seven prompts and stated the
original diagnosis inside the shared context. Round 2 tests that.

| Lane | Reviewers | Saw round 1? | Purpose |
|---|---|---|---|
| Clean room | cleanroom-a, cleanroom-b | No | Do the findings survive without the framing? |
| Adversarial | rebuild, restraint | Yes, told to attack it | Is the fix list polishing a bad structure? |
| Audience | audience-ai, audience-academic | No | What does the page cost with a real reader? |

## 1. The anchoring test: round 1 passes

Both clean-room reviewers, given no diagnosis and no round-1 findings,
independently rediscovered:

- the `.thesis p` / `.thesis-line` specificity collision, with the same
  computation, (0,1,1) beating (0,1,0);
- the missing Humber and Toronto affiliation;
- the `about.html` back-links pointing at `index-new.html`;
- the portrait, 1.2 MB at 1395x2093 served to 110px with no dimensions;
- the two-column parallel overstating the AI record's maturity;
- the word and link counts rising, not falling.

Round 1 was not measuring its own prompt. The findings are properties of the
artifact.

## 2. New defects round 1 missed entirely

1. **Book date conflict.** `about.html` and the live `index.html` date SIEG 2nd
   ed. to 2021; `publications.html` says 2022. Found by four round-2 reviewers.
   The redesign propagated an existing error into a new file.
2. **Horizontal overflow at 320px.** `.strip ul li` inherits
   `white-space: nowrap` (`style-v2.css:183`). The *A Student's Introduction to
   English Grammar* link exceeds a 320px viewport's ~288px content width.
   Introduced by the redesign.
3. **Stale `publications.html` metadata**, still describing the record as
   "linguistics, English grammar, syntactic annotation" with no AI. The homepage
   now claims a priority the record page contradicts.
4. **Link contrast ~1.47:1** between maroon and body text in light theme, with
   underlines globally removed (`style.css:177`). Colour alone is not a
   sufficient inline-link signal. Pre-existing, worsened by more inline links.
5. **No `<main>` landmark**; the thesis sits in a `<section>` with no heading,
   and is a `<p>` rather than a heading element.
6. **Theme button is appended after the footer**, so it renders top-right but
   comes last in DOM and keyboard order.
7. **641px snap-back**: just above the breakpoint the columns are ~280px, too
   narrow for multi-clause academic titles.
8. **Philosophy has no route.** PhilArchive is a primary venue, philosophy is
   absent from the tagline, and the philosophy papers are filed under AI
   evaluation, which several reviewers called arbitrary.
9. **Repeated link labels** ("Mirror", "PhilArchive", "LingBuzz") are ambiguous
   in a screen-reader links list; 16 external links open new tabs unannounced.

## 3. A correction to round 1

Round 1's "zero published work on the homepage" is **literally too strong**, per
the restraint reviewer. The strip does name *A Student's Introduction* and
*Language Landscapes*. But it gives no authorship, no date, no publisher, and no
status, and places them beside CGELBank and the Constructionary as resources.

The accurate statement: **the page displays published titles without presenting
published achievement.** The substance of the finding survives; the phrasing
did not.

## 4. The audience lane, which round 1 could not do

**AI safety research lead**, arriving from arXiv:2607.01153:

- Ten-second read: could not tell whether AI safety is his job, a new strand, or
  half a programme.
- Had to open About to learn he is employed, and where.
- "AI evaluation and assurance researcher" reads as **ahead of the demonstrated
  record**: the listed employment is linguistics, and the only identifiable AI
  safety output is the preprint they arrived from.
- "I build evaluation instruments and assurance frameworks" is plural; one is
  inspectable.
- Wanted and did not find: benchmark scale, model set, baselines, effect size,
  inter-rater reliability, judge-validity result, comparison to existing
  benchmarks.
- Flagged the 39-item preprint list as making depth hard to calibrate.
- **Verdict: read the paper. Would not bookmark, cite, or email.**

**Journal editor and search committee chair:**

- Rank: NOT ANSWERED after a 45-second targeted scan. Affiliation: NOT ANSWERED.
- Homepage alone reads as **mid-career**; `publications.html` reads as an
  established scholar with a 1998-2026 record.
- **Misrepresents seniority in both directions**: downward in linguistics by
  hiding the accepted record, upward in AI by presenting it as coequal.
- "Under review at *Synthese* / *Journal of Linguistics* / CUP" carries **zero
  credit** with this reader and reads as leaning on submission destinations.
- Would invite to review and would shortlist, **for linguistics roles, on the
  strength of `publications.html`, not the homepage**. Would not shortlist for
  an AI-evaluation appointment on this evidence.

## 5. The structural question, across both rounds

| Position | Reviewers | n |
|---|---|---|
| Structure sound, repair it | Bringhurst, Chimero, Lupton, Reichenstein, cleanroom-a | 5 |
| Revise structurally | Tufte, Butterick, Vignelli, cleanroom-b | 4 |
| Abandon the two-column container | rebuild, restraint | 2 |
| (audience proxies gave no structural verdict) | audience-ai, audience-academic | 2 |

Six of eleven structural verdicts now hold that the container, not its
implementation, is the problem.

**The strongest argument against the columns**, from the rebuild reviewer, is
that the symmetry cannot be repaired honestly:

- adding the published record destroys the symmetry;
- adding philosophy creates a third door and restores the sprawl;
- duplicating the cross-boundary papers makes the bins meaningless;
- making the headings actual links forces visitors to choose a category the
  research itself contests.

That last point is the sharpest thing either round produced. *Expert
Grammaticality Judges as Evaluators*, *Truth-tracking profiles*, and *Kinds as
Projectibility Profiles* are all deliberately cross-boundary. **The page's
verbal argument is unity; its visual argument is separation.** A projectibility-
first homepage that sorts the work into two disciplinary bins enacts the
opposite of the claim it states.

That is the answer to "is this a design that is itself a theory of
presentation." It is, and the theory it embodies contradicts the theory it
states.

## 6. The proposed alternative: priority, throughline, proof

One vertical sequence rather than two columns:

1. **Identity and routing.** Name, affiliations, one role sentence, then
   Publications, CV, email, Scholar, GitHub. Portrait optimised or dropped.
2. **Current priority.** Adversarial Pragmatics full-width and featured, with
   paper, walkthrough, adjudication app, code. Delegation and evidentiary
   assurance below it, explicitly in development.
3. **The connecting programme.** The projectibility explanation goes *here*,
   after a concrete artifact rather than before it, evidenced by the
   cross-boundary papers. This is where linguistics is reframed rather than
   filed behind a separate door.
4. **Selected track record.** Dated, attributed, published: the three books, the
   2024 *Journal of Linguistics* article, the 2025 and 2026 *English Language
   and Linguistics* articles, CGELBank.
5. **Resources and full record.**

Every entry shows year, status or venue, and authorship. The title is the
primary link. Maroon means clickable.

This lets AI safety lead without claiming half the publication history, gives
philosophy somewhere to live, and puts the established record where both
audience proxies said they needed it.

## 7. Board self-check

The clean-room lane is genuinely independent and is the load-carrying evidence
here. The adversarial lane read round 1's synthesis, so its *agreement* with
round 1 proves nothing; only its disagreements are informative, and it was
instructed to disagree, so even those are weak. The audience lane is two
simulated readers, not two readers.

Across both rounds, thirteen reviews share one prompt author and one artifact.
Convergence on verifiable facts (specificity, byte counts, link counts, missing
affiliation) is trustworthy because each was independently recomputed.
Convergence on taste is not.
