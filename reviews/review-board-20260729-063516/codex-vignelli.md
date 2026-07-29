Reconstruction note: this review applies Massimo Vignelli’s documented priorities, not a living opinion. Any attribution should be independently verified before quotation. I did not run a browser, so rendered dimensions are inferences from the HTML and cascade.

## 1. What this design is doing

The redesign turns a résumé paragraph followed by a tray of links into an editorial argument:

1. This is Brett Reynolds.
2. This is the question organizing his work.
3. Here is that question applied in AI evaluation and linguistics.
4. Here is the established grammar and descriptive work.
5. Here are the administrative destinations.

That is a substantial improvement. The old page made every subject and every link compete at once. The new page selects, groups, and sequences. The `31em` prose measure is sensible, the two columns make the cross-field comparison visible, and the selected works give the thesis evidence.

But the intended hierarchy is not the rendered hierarchy. In [style-v2.css](/Users/brettreynolds/projects/LLM-CLI-projects/personal/personal-website/style-v2.css:39), `.thesis p` is more specific than `.thesis-line`. It overrides the proposed `2rem` size with `1.05rem`, the `1.25` line height with `1.65`, the `20em` measure with `31em`, and the normal text colour with muted grey. The mobile `1.6rem` declaration also loses. The sentence meant to govern the page therefore looks like ordinary introductory prose.

The discipline count is revealing:

| System | Present in the CSS and page | What is needed |
|---|---:|---:|
| Type sizes | 15 distinct declared tokens across the two stylesheets, 8 computed sizes on this homepage | 4 at most |
| Weights | 2 authored values, `400` and `500`; the page also relies on browser handling of `<strong>` | 2 explicit values, preferably `400` and `600` |
| Colours | 22 literal values across both themes; the homepage uses 8 roles at rest and 10 including hover/focus states | About 5 roles per theme |
| Rules | 3 treatments producing 11 visible instances: 9 list rails, 1 `<hr>`, 1 toggle border | One divider, with hierarchy otherwise carried by type |

The page does not need `0.98rem`, `0.95rem`, `0.9rem`, `0.85rem`, and `0.8rem`. These are distinctions without sufficient semantic work.

## 2. The claim the layout makes

Yes, this is a design that is itself a theory of presentation.

The thesis fans into two equal columns. The geometry says that AI evaluation and linguistics are not separate careers but coequal applications of one projectibility-first method. The lighter grammar band says that description and pedagogy are a practical foundation or supporting tradition. The bottom navigation says that publications, CV, affiliations, and biography are supporting evidence rather than the central story.

The central claim survives. Projectibility-first is structural here, not decorative branding. It determines the thesis, the division into fields, and the choice of featured work.

The equality claim survives less well. The linguistics side shows a mature programme, a monograph, and several concrete applications. The AI side combines one directly accessible benchmark, two conceptually adjacent papers, and frameworks still in preparation. Equal columns communicate equal evidential maturity, not merely conceptual unity.

The grammar band is the more serious distortion. A Cambridge book and decades of published work are treated as a minor third register. That is not what the record in [publications.html](/Users/brettreynolds/projects/LLM-CLI-projects/personal/personal-website/publications.html:17) says. The layout demotes some of the strongest evidence that Brett can execute the programme he is announcing.

## 3. What the diagnosis missed

The source count shows that the new homepage is not merely less flat. It is also larger: roughly 383 visible word tokens and 32 links, compared with 269 tokens and 20 links on the current page. The redesign improves organization while increasing the total reading and decision burden by about 42 percent and 60 percent respectively. “Text-heavy” and “flat” were not alternatives. The old page was both flat and badly edited.

**Semantic audit.** The new page expresses the intellectual programme clearly. It does not adequately express professional identity or authority. Humber Polytechnic, the University of Toronto, and the nature of Brett’s positions have disappeared behind About. The page asks visitors to accept a manifesto before telling them who is speaking. It also mistakes three kinds of information for a rank order: current direction, conceptual foundation, and established achievement. Grammar is established achievement, not merely a lighter third topic.

**Syntactic audit.** There is a real grid inside `.doors`, but there is no structural grid governing the page. At the maximum body width, I infer about 768 pixels of content, a 45-pixel gap, and two approximately 362-pixel door columns. Nothing else keys into those column edges. The header text begins after a 110-pixel photograph plus a 27-pixel gap. The thesis and strip stop at an unrelated `31em`. The utility rows use free wrapping. This is a stack of locally aligned components, not a page grid. The broken thesis cascade and eight visible sizes confirm that the visual syntax is not yet controlled.

**Pragmatic audit.** The “doors” are not doors. Their headings are maroon, the established link colour, but are not clickable. Work titles are also non-linking `<span>` elements, while the reader must find small labels such as “arXiv” or “Mirror.” Publications and CV, probably the two most common academic tasks, arrive only after the full argument. On mobile, all 383 tokens precede them. Global removal of link underlines further weakens affordance.

**Timelessness.** EB Garamond, a warm neutral ground, restrained colour, and narrow prose will age well. The fixed pill-shaped theme control, moon glyph, shadow, extreme corner radius, miniature metadata, and repeated coloured rails belong to current product-interface fashion. The photograph appears inherited rather than reconsidered: it has simply shrunk from 180 to 110 pixels. At that size it is too small to carry biography and large enough to disturb the grid.

## 4. Alignment audit

**Visuals.** The visuals promise an austere academic argument. Most of the typography supports that promise, but the floating theme pill and nine decorative list rails introduce a second, more fashionable interface language.

**Text.** The prose makes the shared question unusually clear. It is nevertheless longer and more specialized than the spare hierarchy suggests. The page looks like a concise gateway but behaves like a compact research statement.

**Audience.** AI and linguistics researchers receive useful, direct evidence. Hiring committees, editors, grammar readers, and potential collaborators must search for affiliation, position, publication record, and established credentials. The page organizes by subject when several audiences organize their visit by task and trust.

**Purpose.** The page presents projectibility-first far better than the current homepage. It is less successful as an academic homepage because explanation outranks identification, credibility, and navigation. The intellectual purpose and the practical purpose have separated.

## 5. Specific fixes

1. **Restore the intended first read.** In [style-v2.css](/Users/brettreynolds/projects/LLM-CLI-projects/personal/personal-website/style-v2.css:39), separate `.thesis > .thesis-line` from `.thesis > p:not(.thesis-line)`. Give the thesis line its intended size, line height, text colour, and measure. Use the same selector specificity in the mobile rule.

2. **Restore identity before argument.** In [index-new.html](/Users/brettreynolds/projects/LLM-CLI-projects/personal/personal-website/index-new.html:14), add one compact line naming the Humber and Toronto roles. Put Publications, CV, and About in the header. Move the photograph to About unless it is deliberately being used for recognition.

3. **Make the grid structural.** In [style-v2.css](/Users/brettreynolds/projects/LLM-CLI-projects/personal/personal-website/style-v2.css:63), establish one two-column page grid governing identity/navigation, thesis, both research areas, the grammar band, and utilities. Do not let only `.doors` possess a grid while every other region invents its own alignment.

4. **Correct the hierarchy of evidence.** In [index-new.html](/Users/brettreynolds/projects/LLM-CLI-projects/personal/personal-website/index-new.html:123), rename the strip “Selected books and descriptive work” and give the Cambridge book visible credential status. Do not visually describe the strongest published evidence as incidental.

5. **Make the doors operate.** In [index-new.html](/Users/brettreynolds/projects/LLM-CLI-projects/personal/personal-website/index-new.html:35), link each maroon heading to a corresponding research or publications destination. Link every work title to its preferred canonical source. If no destination exists, use ordinary text colour and stop calling the sections doors.

6. **Reduce the vocabulary.** Across [style.css](/Users/brettreynolds/projects/LLM-CLI-projects/personal/personal-website/style.css:82) and `style-v2.css`, reduce the homepage to four sizes, two explicit weights, and five colour roles. Remove the grey rail from ordinary work items. Use position and weight to distinguish lead work. Restyle the theme control as a plain footer control, or rely on system preference.

7. **Carry the theory into the next page.** Add a short thematic index to [publications.html](/Users/brettreynolds/projects/LLM-CLI-projects/personal/personal-website/publications.html:13), with routes for AI evaluation, projectibility and linguistics, and grammar/description. Its current metadata also describes only linguistics. When the redesign becomes live, change the two `index-new.html` back-links in [about.html](/Users/brettreynolds/projects/LLM-CLI-projects/personal/personal-website/about.html:15) to `index.html`.

## 6. Verdict

**Revise structurally.**

The organizing idea is strong and should be retained. The implementation presently defeats its own main hierarchy, lacks a governing grid, hides essential academic identity, and calls non-interactive panels “doors.” This needs disciplined revision, not another redesign concept.