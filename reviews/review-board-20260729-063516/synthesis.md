# Synthesis: design review board, index-new.html
<!-- SUMMARY: 7-reviewer design board (2 Fable, 3 Opus, 2 Codex) on the proposed homepage; central CSS cascade bug means the redesign's main move never rendered; homepage shows zero published work and no affiliation · status: complete · updated: 2026-07-29 -->

Run: `review-board-20260729-063516`. Raw outputs and `manifest.yaml` in this directory.
Reviewed at source commit `3f35621c`. All seven share one prompt author, so treat
cross-model agreement as a stress test, not as field consensus.

## Verdicts, kept separate by model

| Reviewer | Model | Verdict |
|---|---|---|
| Bringhurst | Fable | Ship with named fixes |
| Chimero | Fable | Ship with named fixes |
| Lupton | Opus | Ship with named fixes |
| Reichenstein | Opus | Ship with fixes, then do the IA work |
| Tufte | Opus | **Revise structurally** |
| Butterick | Codex | **Revise structurally** |
| Vignelli | Codex | **Revise structurally** |

Split is clean along model lines: both Codex reviewers say revise structurally,
both Fable reviewers say ship with fixes, Opus splits 2-1. The Codex pair reached
their verdict via a bug the Claude reviewers missed, which is the likeliest
explanation of the split rather than differing standards.

## 1. The finding that changes everything

**The redesign's central move never rendered.** `.thesis p` (specificity 0,1,1)
overrides `.thesis-line` (0,1,0) on the same element. The display thesis line,
"What does a label license you to infer?", renders at 1.05rem in `--muted` grey,
not 2rem in full contrast. The mobile 1.6rem declaration loses for the same
reason; media queries add no specificity.

Found independently by Butterick and Vignelli (both Codex). Missed by all five
Claude reviewers, though Bringhurst got adjacent to it by flagging the thesis
block as muted grey.

Consequence for reading this board: every hierarchy critique from the Claude
reviewers was computed against a 2rem display line that does not exist. Those
critiques survive in stronger form, not weaker. Lupton's mobile inversion is
real but understated; the name outranks the thesis at every viewport width, not
only below 640px.

## 2. Consensus findings (4+ reviewers)

**No institutional identity on the homepage** (Chimero, Bringhurst, Tufte,
Lupton, Butterick, Vignelli). Humber and U of T appear nowhere except inside the
mailto address. The page asks a visitor to accept a research manifesto before
telling them who is speaking.

**No published work on the homepage** (Tufte, Vignelli, Butterick). All nine
promoted items are unpublished: four preprints, three under review, two with no
public link. Seventeen journal articles and three books, including CUP, appear
nowhere. Tufte's reconstruction of the cause is the sharp one: peer-reviewed
work would not distribute evenly across two columns, so the symmetry was bought
by excluding it.

**No type scale** (Bringhurst 11 sizes, Lupton 8 nominal resolving to 3
perceptible, Vignelli 15 declared tokens, Butterick, Reichenstein six sizes
inside a 15.3-18.9px band). Sizes were chosen one at a time.

**Grey prose, black titles** (Bringhurst, Lupton, Butterick). Every paragraph is
`--muted`, every list title full contrast. The page instructs readers to skip
the argument and scan the inventory.

**The doors are not doors** (Butterick, Vignelli, Chimero). Maroon `.door h2`
headings use the established link colour but are not clickable, and work titles
are non-linking spans. The first clickable target in each item is a 0.85rem
label underneath it.

**Maroon is overloaded** (Bringhurst 3 jobs, Tufte 4). Links, door headings,
lead-item borders, focus rings.

## 3. Corrections to the original diagnosis

**"Text heavy" was never the problem, and the redesign made the page longer.**
Tufte counts ~305 words new against ~240 old; Vignelli counts 383 tokens against
269, and 32 links against 20. Both directions agree: the new page is bigger.
What actually improved is addressability, 0 links-to-work becoming 12.

**The link load did not drop.** Old nav 13 links, new utility rows exactly 13.
Nothing was cut; the doors were added on top (Reichenstein, verified).

**The measure fix went to the wrong pages.** `style-v2.css` reaches only
`index-new.html` and `about.html`, the two pages with the least prose. Six essay
pages, roughly 320 KB of continuous reading, still run the old measure
(Reichenstein, verified).

**The old measure may not have been ~100 characters.** Butterick reconstructs
the old bio column as ~548px after the 180px photo and gap, which is nearer
60-70 characters. If so the old problem was a 202-word undivided paragraph, not
its line length, and my stated justification for the 31em cap was wrong even
though the cap itself is defensible.

**`--measure` in `em` produces three different right edges** (Bringhurst
586/720/764px, Tufte, Vignelli). Because `em` resolves against each element's
own font-size, one variable yields inconsistent alignment.

## 4. Contradictions worth preserving

**Is the two-column parallel legitimate?** Vignelli and Butterick say the
conceptual claim survives but the equality claim does not, because the columns
assert equal evidential maturity. Tufte says the device is illegitimate at the
root: a comparison layout applied to data with no comparable structure. Chimero
takes a third position, that the work-item microformat quietly practices the
projectibility thesis and is the best thing on the page. Not reconcilable, and
the disagreement is the most useful thing the board produced.

**Should the grammar strip be demoted?** Vignelli says demoting a Cambridge book
and decades of published work to a third register misrepresents the record and
discards the strongest evidence that Brett can execute the programme. Chimero and
Butterick agree the strip should at least claim authorship. Nobody defends the
current treatment.

**Photo.** Tufte and Vignelli want it gone or reconsidered; Chimero wants the
person more present, not less. Independent of that: 1,214,919 bytes at 1395x2093
served to a 110px slot, no width/height attributes, roughly 99% of page weight.
That defect is on the live site today.

## 5. Prioritized fixes

1. Repair the cascade so the thesis line renders. `.thesis > p:not(.thesis-line)`
   for the paragraph rule; give `.thesis-line` full contrast. Fix the mobile
   selector the same way. Without this nothing else on the page matters.
2. Restore an affiliation line and a credential to the header, and move
   Publications and CV up beside the identity block.
3. Put published work on the page. Either abandon strict column symmetry or add
   a selected-publications line naming the books and two or three journal articles.
4. Link the work titles directly. Stop styling non-clickable headings maroon.
5. Build one type scale, four sizes, and raise the small sizes; test 20px root.
6. Recolour: prose at full contrast, `--muted` reserved for genuine metadata.
7. Switch `--measure` to `ch` or `rem` so the right edges agree.
8. Compress and size the portrait; add width/height attributes.
9. Before any rename: fix `about.html` back-links, add it to `sitemap.xml` and
   `llms.txt`, and extend the measure fix to the essay pages.

## 6. Board self-check

Convergence here is not independent expert agreement. One author wrote all seven
prompts, and the shared context block stated the original diagnosis, which
probably anchored reviewers toward auditing that diagnosis rather than proposing
alternatives. The Codex pair diverged most from the framing and found the most
consequential defect, which is weak evidence that the shared prompt suppressed
variance in the Claude reviewers. The clean model-line split in the verdicts is
itself suspicious and should not be read as three independent boards agreeing.
