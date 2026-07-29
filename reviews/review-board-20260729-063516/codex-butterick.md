*All dimensions below are inferences from the CSS. This is a reconstruction of Butterick’s professional priorities, not a quotation or claim about his published wording.*

## 1. What this design is doing

The old homepage made the reader do two jobs: extract a research identity from one long paragraph, then decide among thirteen undifferentiated links. The redesign supplies an order:

1. Identify the person.
2. State the governing question.
3. Show two applications of that question.
4. Preserve the grammar work as supporting evidence.
5. Put administrative navigation last.

That is an editorial hierarchy, not merely a new arrangement. The page now behaves like an argument. The two columns say that AI evaluation and linguistics belong to one programme. The coloured left rules mark selected evidence. The lighter grammar band says, “this remains important, but it is not the headline.”

Much of this is good. The maroon, warm neutral palette, restrained rules, and absence of cards, icons, badges, and other website furniture give the work room to carry the page. The proposed 31em prose measure is plausible for EB Garamond. The design has a reason for most of its parts.

But one crucial part is not rendering as intended. In [style-v2.css](/Users/brettreynolds/projects/LLM-CLI-projects/personal/personal-website/style-v2.css:39), `.thesis-line` declares `font-size: 2rem`, but the later and more specific `.thesis p` rule sets every paragraph in that section to `1.05rem`. That includes the thesis line. The same rule also overrides its intended line height, width, and colour. The mobile `1.6rem` declaration loses for the same specificity reason.

So, by CSS inference, “What does a label license you to infer?” is probably 18.9px muted body text, not a 36px display proposition. The principal hierarchical move currently does not happen.

## 2. The claim the layout makes

Yes, this design is itself a theory of presentation. Its claim is: Brett Reynolds should be understood as the author of a programme, not as the proprietor of a miscellaneous publication list. AI evaluation and linguistics are presented as coordinate applications of one question. Grammar and description are presented as the practical testing ground beneath them.

That claim survives only partly.

The linguistics column contains a book manuscript and several directly related papers. The AI column contains one conspicuous evaluation artifact, then two conceptually adjacent works whose relevance to AI evaluation is less self-evident, followed by frameworks “in preparation.” The equal columns therefore imply a parity of evidence that the selections do not yet demonstrate. This is a presentation problem, not a judgment about the research.

There is another mismatch. If AI safety is now the priority, the page still allocates more total space and more listed work to linguistics and grammar. Its theory is “two equal applications,” while its stated strategic purpose is closer to “AI evaluation, grounded in a substantial linguistics programme.” Those are different layouts.

Finally, the “doors” are not doors. Their headings do not lead anywhere, and the project titles are not links. They are display cases. A reader must find a small source label beneath each title before anything becomes actionable.

## 3. What the diagnosis missed

The diagnosis correctly identified flatness, but it missed several more consequential problems.

- **The implemented hierarchy is broken by the cascade.** The promoted thesis line is currently demoted back to body text. This is the first thing to fix because it invalidates the design’s central move.

- **The old measure was probably not about 100 characters.** At the 800px body cap, the old layout had approximately 764px of inner width. Subtract the inferred 180px photograph and 36px flex gap, and the old biography had roughly 548px. That is likely in the neighbourhood of 60 to 70 EB Garamond characters, not 100. The new thesis paragraph is approximately 586px wide at its inferred 18.9px size. The redesign improves segmentation, but it does not rescue the page from an exceptionally long old measure. The old problem was a 202-word undivided paragraph, not primarily its line length.

- **The old biography performed credibility work that the redesign discarded.** The new homepage gives no institutional affiliation, academic position, major published credential, or plain statement of who Brett is. Those facts are now one click away on About, and the About link is near the bottom. A hiring committee or editor should not have to investigate whether the author of a new evaluation framework has an established professional record. The [publications page](/Users/brettreynolds/projects/LLM-CLI-projects/personal/personal-website/publications.html:14) supplies that evidence in abundance, but the homepage conceals it.

- **The typography creates hierarchy by making useful information too small.** The root size is 18px. On desktop, the door introductions infer to 17.6px, glosses to 16.2px, and source labels and secondary navigation to 15.3px. At the 600px breakpoint, the root drops to 16px, making those approximately 15.7px, 14.4px, and 13.6px. For EB Garamond, with its relatively small x-height, that is not comfortable professional reading. Meanwhile, line heights of 1.6 and 1.65 spread these small letters over 28 to 31px line boxes. This is small type wearing oversized leading. It lengthens the page without making the letters easier to see.

- **The two-column layout is cramped before it collapses.** At the maximum body width, each column is only about 360px after the 45px gap. At a 641px viewport, just above the breakpoint, each is approximately 280px. Long academic titles will wrap repeatedly, creating tall, ragged blocks. The reader is not comparing corresponding data across columns, so there is no practical reason to tolerate comparison-table widths.

- **The redesign sorted the inventory but did not edit it enough.** There are nine featured works, five grammar links, five primary utilities, and eight secondary utilities. The page contains more choices than the old page, merely in better-labelled containers. Better hierarchy is not a substitute for deletion.

- **The text repeats the same operation.** The thesis asks what a label licenses, the explanatory paragraph answers it, the AI introduction asks it again, and the linguistics introduction answers it again. Some repetition establishes the bridge, but this is one repetition too many. The reader has understood the device before reaching the columns.

- **Small caps have become an unrevisited default.** Every `h1`, `h2`, and `h3` receives small caps and tracking in [style.css](/Users/brettreynolds/projects/LLM-CLI-projects/personal/personal-website/style.css:121). That is a mannerism, not a hierarchy. The font import also does not by itself establish that genuine small-cap glyphs will be available. If they are synthesized, the result will look especially weak at the 1rem and 0.95rem heading sizes.

## 4. Alignment audit

**Visuals.** The restrained palette and typography-first presentation suit serious academic work. The visual divergence is that the most important sentence is accidentally rendered like muted body copy, while minor metadata is made needlessly small. The narrow columns also make the page look busier than its conceptual simplicity warrants.

**Text.** The new copy gives Brett a memorable organising question and is substantially better than the old biography as homepage writing. It then overexplains the connection and includes claims of work “in preparation” alongside public artifacts without enough visual distinction. That weakens the transition from proposition to proof.

**Audience.** An AI reader can find the arXiv paper, and a linguist can recognise the monograph and recent preprints. Grammar and TESL readers are visibly demoted, perhaps intentionally. Hiring committees, editors, and grant panels fare worse because affiliations, positions, CV, and publication record are not immediately available.

**Purpose.** The page succeeds at naming a unified research programme. It is less successful at establishing why this particular person should be trusted to conduct it. The presentation prioritises intellectual positioning over professional verification when the homepage needs both.

## 5. Specific fixes

1. **Repair the thesis cascade in [style-v2.css](/Users/brettreynolds/projects/LLM-CLI-projects/personal/personal-website/style-v2.css:39).** Replace `.thesis p` with something that excludes `.thesis-line`, such as `.thesis > p:not(.thesis-line)`. Give `.thesis > .thesis-line` the intended size, line height, width, and `color: var(--text)`. Fix the corresponding mobile selector.

2. **Increase the reading size in [style.css](/Users/brettreynolds/projects/LLM-CLI-projects/personal/personal-website/style.css:68) and remove the aggressive reductions in [style-v2.css](/Users/brettreynolds/projects/LLM-CLI-projects/personal/personal-website/style-v2.css:79).** Start by testing 20px desktop and 18px mobile, with approximately 1.45 to 1.5 line height. Keep core prose at 1rem. Keep glosses at least 0.95rem and source labels at least 0.9rem.

3. **Restore immediate professional identification in [index-new.html](/Users/brettreynolds/projects/LLM-CLI-projects/personal/personal-website/index-new.html:14).** Add one compact affiliation line under the tagline. Put Publications, CV, and About beside or immediately below the identity block. Leave machine-readable exports and historical links at the bottom.

4. **Make the evidence directly actionable in [index-new.html](/Users/brettreynolds/projects/LLM-CLI-projects/personal/personal-website/index-new.html:44).** Link each project title to its primary destination. Secondary labels such as Code, Walkthrough, and Mirror can remain beneath it. Do not make the reader hunt through 0.85rem text for the first clickable target.

5. **Give the two columns adequate width in both files.** Add a homepage class to the `body` in [index-new.html](/Users/brettreynolds/projects/LLM-CLI-projects/personal/personal-website/index-new.html:12), permit that page to reach roughly 900 to 920px in [style-v2.css](/Users/brettreynolds/projects/LLM-CLI-projects/personal/personal-website/style-v2.css:63), and retain the 31em cap on prose. Stack the columns closer to 760px, not 640px.

6. **Edit the selections in [index-new.html](/Users/brettreynolds/projects/LLM-CLI-projects/personal/personal-website/index-new.html:35).** Cut each door introduction to one sentence. Remove “Delegation assurance & evidentiary assurance” until there is something public to inspect, or label it unmistakably as current work rather than evidence. Explain the AI-evaluation relevance of “Effective without warrant,” or move it.

7. **Stop using small caps as the universal heading treatment in [style.css](/Users/brettreynolds/projects/LLM-CLI-projects/personal/personal-website/style.css:121).** On the homepage, use normal roman headings with weight 500 and little or no tracking. Make the thesis clearly larger than the name. If small caps are retained anywhere, verify that the delivered font contains real small-cap glyphs.

8. **Make the grammar band prove credibility in [index-new.html](/Users/brettreynolds/projects/LLM-CLI-projects/personal/personal-website/index-new.html:123).** “Co-author, *A Student’s Introduction to English Grammar*, 2nd ed., CUP” does more work than a bare title. Apply the same principle to *Language Landscapes*. Roles and publishers are evidence, not decoration.

9. **Fix adoption paths in [about.html](/Users/brettreynolds/projects/LLM-CLI-projects/personal/personal-website/about.html:17).** When the redesign becomes `index.html`, change both `index-new.html` back-links accordingly.

## 6. Verdict

**Revise structurally.**

Keep the thesis-first concept, the two-domain argument, the restrained visual language, and the lighter grammar band. Do not ship the current implementation. The cascade defeats the headline, the type becomes too small where readers need it most, the “doors” do not function as doors, and the page withholds the credentials that make its intellectual claim credible. These are repairable problems, but they are the structure of the experience, not finishing touches.