# Review: index-new.html, in the voice of Frank Chimero

*A simulated review. Positions attributed to "The Shape of Design" or "The Web's Grain" are my reconstructions of those essays' arguments, not quotations. Verify against the published texts before citing Chimero for any of this. Measurements below are inferred from the CSS, not observed in a browser.*

---

## 1. What this design is doing

Brett, here's the design in your own terms. The old homepage was a paradigm: thirteen links in a flat list, every item the same size, no syntax relating them. A reader had to supply the structure. The new page gives the content a syntax. There's a subject (the identity header), a predication (the thesis block), two coordinate complements (the doors), an adjunct (the grammar strip), and a row of clause-final particles (the utility links). Nothing was deleted; every one of the old thirteen links still exists, re-homed and re-ranked. This is a re-ranking, not a reduction, and that's worth knowing about your own site.

The mechanics, briefly. Hierarchy on this page is made three ways: size, tone, and accent. Size: the thesis question is set at 2rem (36px at your 18px root), the largest text on the page, larger than your own name at 1.8rem. Tone: almost every explanatory paragraph (`.thesis p`, `.door > p`, `.strip p`) is set in `--muted`, a gray, so titles and the question read at full strength while the prose recedes like a spoken aside. Accent: each work item carries a 2px left border, maroon for the lead item, matching the cluster styling on publications.html, so the site now has a consistent citation-mark motif. The `--measure: 31em` cap holds prose to roughly 68 characters a line (that arithmetic checks out: 31 × ~18.9px ≈ 586px), which is why the thesis paragraph feels composed where the old bio felt like a wall.

One more thing you should see, because it's the best idea on the page and I'm not sure it was fully deliberate. The work items follow a strict microformat: a title, then a gloss saying what the thing claims or predicts, then a `where` row of links saying where to check. That is your own thesis applied to web design. Every label comes with its inferential warrant and its evidence trail. The page doesn't just describe projectibility-first; in its middle band, it practices it.

What the design does well, before I go after it: the diagnosis of flatness was correct and the promotion of the buried thesis sentence to display type is the single best move here. The status glosses ("Under review at *Synthese*," "In preparation") are honest in a way most academic homepages aren't. The stack is plain HTML and CSS with no build step, it respects dark mode, the grid collapses on small screens, and `text-wrap: balance` keeps the big question from breaking badly. That is working with the web's grain, not against it. My worry in "The Web's Grain" terms (my reconstruction: the web is edgeless and fluid, and trouble starts when we compose fixed, print-like objects on top of flux) applies to exactly one element here, and I'll get to it.

## 2. The claim the layout makes

The layout makes two claims, one loud and one quiet.

The loud claim is the symmetric grid. Two equal columns, `1fr 1fr`, assert that the AI work and the linguistics work are peers: the same question asked twice, at equal standing. Symmetry is not a neutral container; it's an argument. Does it survive contact with the content? Partly. The thesis-to-door connection holds, because the door intros and the item glosses genuinely restate the question in domain terms ("what membership lets us predict," "make the inference explicit enough to contest"). But the parity claim strains. The right door stands on a completed monograph under review at Cambridge and a sixty-item publication record. The left door has one arXiv preprint with a full evidence trail, two PhilArchive preprints, and one item ("Delegation assurance & evidentiary assurance") that has no links at all. A linkless "in preparation" entry is a promissory note, and it's there to make the columns feel even. The grid is arguing something the record is still in the middle of earning. The claim about the *question* being the same is fine and the glosses support it; the claim about the two *bodies of work* being equivalent is ahead of the evidence.

The quiet claim is the microformat I described above: on this page, a label earns its place by stating what it licenses and where to verify it. That claim is kept beautifully in the two doors and broken everywhere else. The strip offers "CGEL correctives" and "English Constructionary" as bare labels, no gloss, no stated inference. The utility row offers "OKF export" to a human reader with no explanation at all. And one door item, "Truth-tracking profiles," has links but no gloss. The page sets its own standard and then fails it in the outer bands. I'd normally call this a polish issue; here it's a coherence issue, because the design's theory is the thing being presented.

## 3. What the diagnosis missed

The diagnosis ("the page is flat, not text-heavy") was right about information design and silent about identity. Fixing the first, the redesign broke the second in ways nobody noticed. In rough order of consequence:

**The homepage no longer says where you work.** The old bio named Humber Polytechnic and the University of Toronto in its second sentence, with links. On index-new.html the word "Humber" survives only inside the email address. For hiring committees, grant panels, and journal editors (a named audience), institutional affiliation is the first credibility check, and it now requires a click to About. A reader arriving with no context meets a question, a programme, and a grid, and cannot answer "who is this person institutionally" without leaving the page. This is the biggest miss, and it's a one-line fix.

**The homepage no longer claims your books.** The strip links *A Student's Introduction to English Grammar* with no statement of your relationship to it. The old bio said "co-authored." A no-context visitor can't tell whether you wrote it, edited it, or recommend it, and the names Huddleston and Pullum (which carry real weight with the linguistics audience) appear nowhere. The audience arriving from the books, another named audience, gets the dimmest band on the page and no acknowledgment that the book is yours.

**The site now speaks in two voices.** The new homepage is first person ("I build evaluation instruments," "I call the approach"). The About page, where the person supposedly lives, is third person ("Brett Reynolds is..."). So the front door talks to me and the inner room hands me a press kit. That's backwards. The deeper into a personal site I go, the more personal it should get. This happened mechanically: the bio was moved to About intact, while the new homepage prose was written fresh. Nobody chose the split; it's an artifact of the migration.

**Flatness was fixed only in the middle band.** The doors got syntax; the strip and utility rows are still the old paradigm, bare labels at uniform weight, just smaller. Fine for the junk drawer (every personal site deserves one, and the 0.85rem secondary row is a good drawer, mostly closed). Not fine for the strip, which holds the most widely read thing you've ever made.

**The structure has no room for the rest of the person.** The old sprawl was evidence of a life: math preprints, a TEDx talk, Mental Floss, twenty-five years of teaching. The new structure is evidence of a programme, and everything on the homepage must now pass through the thesis to justify its place. Where would the Erdős-problem work go? Nowhere on this page. That's a real cost to your ability to change your mind later: a list can absorb a new direction; a two-column argument can't take a third column without a redesign. The doors also commit you to maintaining the parity claim; every future project either fits the question or dilutes the page.

**Mechanical, but ship-blocking:** about.html's two "Back to home" links point at index-new.html. The moment the redesign is deployed as index.html, those links go stale. And I'd inspect the doors between roughly 640px and 800px viewports: by my arithmetic the columns run about 300 to 360px, which at 0.98rem EB Garamond is around 40 characters a line (inference, not measurement), and multi-line italic titles like *Words That Won't Hold Still* will wrap three deep. The 640px stack point is probably too low.

**One color is doing two jobs.** `.door h2` is set in `var(--link)` maroon, but the door headings aren't links, while every actual link on the page is the same maroon. Readers will click "In AI evaluation" and nothing will happen. Meanwhile `.strip h2` is muted, so sibling headings differ in color for reasons a reader can't recover.

## 4. Alignment audit

**Visuals.** Garamond, small caps, hairline rules, maroon accents: the visuals say considered, scholarly, settled, a book pretending to be a page. That mostly suits the text. It diverges from the medium at exactly one point, the symmetric grid, whose composed look depends on the two columns staying roughly balanced in length. HTML makes no such promise; add one paper to one door and the spread unbalances. Treat the symmetry as provisional, not as the page's foundation. And the visuals say "finished object" while the content says "programme in motion" (three items under review, one in preparation); the honest glosses carry that tension, but the print stillness slightly overstates how settled this all is.

**Text.** The thesis prose is the best writing on the page: compressed, first person, plain. It diverges from audience at the very top, where the largest text is a technical question ("license you to infer") that greets specialists warmly and hands everyone else a riddle before the page has said who you are. A question as display type tests the reader before greeting them; the compact header softens this but doesn't remove it. And the text is split between two voices (I on the homepage, he on About), which no reader will attribute to a migration artifact; they'll just feel the temperature drop.

**Audience.** Four audiences were named, and the page silently ranks them: AI evaluation researchers get the first door, linguists the second, the book audience gets the faintest band with no authorship claim, and committees get nothing at all to anchor on (no affiliation, no dates, no career). Ranking audiences is legitimate, and probably matches your current priorities. Two of the four being under-served is a choice; the committee omission reads instead as an accident.

**Purpose.** Brett's stated purpose: foreground the AI work while showing the linguistics reframe. The page does this. Where it overshoots is arguing parity rather than showing trajectory: it presents the pivot as accomplished rather than in progress. The status glosses are the corrective, and they're already on the page; the design just needs to stop padding the left column to look finished. A site that shows what someone is doing ages well. A site that argues for someone's importance needs constant maintenance and invites audit. This page is 80% the first kind. The linkless promissory item and the forced symmetry are the 20%.

## 5. Specific fixes, ordered by impact

1. **Restore the institutional anchor** (index-new.html). One muted line in the `.id` header block under the tagline: "Linguist, Humber Polytechnic · Adjunct professor of linguistics, University of Toronto." Add a small `.affiliation` rule in style-v2.css (~0.9rem, `--muted`). This re-serves committees, editors, and every no-context reader at zero cost to the composition. Do this before shipping.

2. **Unify the voice** (about.html). Rewrite About in first person to match the homepage. It's four paragraphs; an hour's work. While in the file, fix both "Back to home" links, which point at index-new.html and will break on deploy. Do both before shipping.

3. **Claim the book** (index-new.html). Extend the strip paragraph to assert authorship: "...including the second edition of *A Student's Introduction to English Grammar*, written with Rodney Huddleston and Geoffrey K. Pullum." One sentence returns the book audience their room and puts two significant names back on the page.

4. **Give maroon back to the links** (style-v2.css). Change `.door h2` from `color: var(--link)` to `var(--text)`, or make the door headings actual links to hub pages (the better move if those pages ever exist; a door you can't open is scenery). Align `.strip h2` with whichever you choose.

5. **Cash or cut the promissory note** (index-new.html). "Delegation assurance & evidentiary assurance" has no destination. Either give it one (even a one-paragraph note under papers/) or cut it and let the left door be one item shorter. The column imbalance is more honest than the padding, and honesty is this page's best feature.

6. **Raise the door-stack breakpoint** (style-v2.css). Move the `.doors` collapse from 640px to about 760px, or use `grid-template-columns: repeat(auto-fit, minmax(20em, 1fr))` so the columns set their own floor. Verify in a browser; my column arithmetic is inference.

7. **Un-mute the thesis paragraph** (style-v2.css). `.thesis p` in `--muted` files the page's central claim as an annotation. Set it to `var(--text)` and let size carry the hierarchy. The one paragraph that explains the whole site shouldn't be its faintest prose.

8. **Extend the microformat outward, or accept the drawer** (index-new.html). Give the strip items one-line glosses in the door style ("CGEL correctives" means nothing to a first-time reader). The utility-secondary row can stay a junk drawer; drawers are honest.

## 6. Verdict

**Ship with named fixes.** Fixes 1, 2, and 3 before the file is renamed to index.html; the rest within the week. The structure itself is right: structure was a better answer to sprawl than either taxonomy or pretending the sprawl away, because these doors don't hide that you do many things, they claim the things share a question, and the middle of the page substantiates the claim. What got structured out was the person and their institutions, and both go back in with three sentences. Don't rebuild; re-people.
