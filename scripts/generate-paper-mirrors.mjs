#!/usr/bin/env node
import { spawnSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const siteRoot = path.resolve(__dirname, "..");
const workspaceRoot = path.resolve(siteRoot, "../..");
const baseUrl = "https://brettreynolds.ca";
const versionDate = "2026-06-04";
const citationAliases = new Map([
  ["HuddlestonPullum2002", "huddleston2002"],
  ["PickeringGarrod2004", "pickering2004"],
]);

const papers = [
  {
    slug: "not-every-stable-cluster-is-homeostatic",
    title: "Not every stable cluster is homeostatic: Stability, network order, and control in projectible kinds",
    shortTitle: "Not every stable cluster is homeostatic",
    status: "Preprint",
    year: "2026",
    sourceTex: "papers/Not_Every_Stable_Cluster_Is_Homeostatic/main.tex",
    bibliography: ["papers/Not_Every_Stable_Cluster_Is_Homeostatic/references.bib"],
    canonicalUrl: "https://philarchive.org/rec/REYNES",
    externalLinks: [{ label: "PhilArchive", url: "https://philarchive.org/rec/REYNES" }],
    keywords: ["homeostatic property clusters", "projectibility", "natural kinds", "causal control"],
    description: "A diagnostic ladder for distinguishing stable profiles, network order, maintenance, and corrective control in projectible kinds.",
    bibtex: `@unpublished{reynolds2026notEveryStableCluster,
  author = {Reynolds, Brett},
  title = {Not Every Stable Cluster Is Homeostatic: Stability, Network Order, and Control in Projectible Kinds},
  year = {2026},
  note = {Preprint, PhilArchive},
  url = {https://philarchive.org/rec/REYNES}
}
`,
  },
  {
    slug: "effective-without-warrant",
    title: "Effective without warrant: Causal-normative networks and the social life of status",
    shortTitle: "Effective without warrant",
    status: "Under review at Journal of Social Ontology",
    year: "2026",
    sourceTex: "papers/Causal-Normative_Networks/main.tex",
    bibliography: ["papers/Causal-Normative_Networks/references-standalone.bib"],
    canonicalUrl: "https://philarchive.org/rec/REYEWW",
    externalLinks: [{ label: "PhilArchive", url: "https://philarchive.org/rec/REYEWW" }],
    keywords: ["social ontology", "social status", "causal-normative networks", "projectibility"],
    description: "A causal-normative network account of how social status can be effective without being warranted.",
    bibtex: `@unpublished{reynolds2026effectiveWarrant,
  author = {Reynolds, Brett},
  title = {Effective without warrant: Causal-normative networks and the social life of status},
  year = {2026},
  note = {Preprint, PhilArchive; under review at Journal of Social Ontology},
  url = {https://philarchive.org/rec/REYEWW}
}
`,
  },
  {
    slug: "what-do-we-mean-by-language",
    title: "What do we mean by language? A pluralist map for the language sciences",
    shortTitle: "What do we mean by language?",
    status: "Under review at Language Sciences",
    year: "2026",
    sourceTex: "papers/What_do_we_mean_by_language/main.tex",
    bibliography: ["papers/What_do_we_mean_by_language/references.bib", "papers/What_do_we_mean_by_language/references-local.bib"],
    canonicalUrl: "https://philarchive.org/rec/REYWDW",
    externalLinks: [
      { label: "LingBuzz", url: "https://ling.auf.net/lingbuzz/009947" },
      { label: "PhilArchive", url: "https://philarchive.org/rec/REYWDW" },
    ],
    keywords: ["language ontology", "pluralism", "homeostatic property clusters", "language sciences"],
    description: "A pluralist map of the main senses of language used across the language sciences.",
    bibtex: `@unpublished{reynolds2026whatLanguage,
  author = {Reynolds, Brett},
  title = {What Do We Mean by Language? A Pluralist Map for the Language Sciences},
  year = {2026},
  note = {Preprint, LingBuzz/009947 and PhilArchive; under review at Language Sciences},
  url = {https://philarchive.org/rec/REYWDW}
}
`,
  },
  {
    slug: "english-determinatives-as-nouns",
    title: "English determinatives as nouns",
    shortTitle: "English determinatives as nouns",
    status: "Under review at English Language and Linguistics",
    year: "2026",
    sourceTex: "papers/Determinatives_as_nouns/main.tex",
    bibliography: ["papers/Determinatives_as_nouns/references.bib", "papers/Determinatives_as_nouns/references-local.bib"],
    canonicalUrl: "https://lingbuzz.net/lingbuzz/009939",
    externalLinks: [{ label: "LingBuzz", url: "https://lingbuzz.net/lingbuzz/009939" }],
    keywords: ["determinatives", "lexical categories", "nouns", "English grammar"],
    description: "An argument that English determinatives occupy the noun category, with consequences for category diagnostics.",
    bibtex: `@unpublished{reynolds2026determinativesNouns,
  author = {Reynolds, Brett},
  title = {English Determinatives as Nouns},
  year = {2026},
  note = {Preprint, LingBuzz/009939; under review at English Language and Linguistics},
  url = {https://lingbuzz.net/lingbuzz/009939}
}
`,
  },
  {
    slug: "english-interjections",
    title: "What English interjections let us predict: Stable causal-pragmatic clustering and path dependence",
    shortTitle: "What English interjections let us predict",
    status: "Submitted to Journal of Pragmatics",
    year: "2026",
    sourceTex: "papers/English_Interjections_as_HPC/main.tex",
    bibliography: ["papers/English_Interjections_as_HPC/references.bib", "papers/English_Interjections_as_HPC/references-local.bib"],
    canonicalUrl: "https://lingbuzz.net/lingbuzz/009852",
    externalLinks: [{ label: "LingBuzz", url: "https://lingbuzz.net/lingbuzz/009852" }],
    keywords: ["interjections", "theoretical pragmatics", "projectibility", "path dependence"],
    description: "A theoretical-pragmatics account of what categorizing an English form as an interjection lets speakers, hearers, and analysts predict.",
    bibtex: `@unpublished{reynolds2026interjections,
  author = {Reynolds, Brett},
  title = {What English Interjections Let Us Predict: Stable Causal-Pragmatic Clustering and Path Dependence},
  year = {2026},
  note = {Preprint, LingBuzz/009852; submitted to Journal of Pragmatics},
  url = {https://lingbuzz.net/lingbuzz/009852}
}
`,
  },
  {
    slug: "public-update-operators",
    title: "Why clause structure is judged like tense and agreement: Public-update operators and grammaticality",
    shortTitle: "Why clause structure is judged like tense and agreement",
    status: "Under review at Functions of Language",
    year: "2026",
    sourceTex: "papers/Grammaticality_de_idealized/subprojects/operator-stratum/main.tex",
    bibliography: ["papers/Grammaticality_de_idealized/subprojects/operator-stratum/references.bib"],
    canonicalUrl: "https://ling.auf.net/lingbuzz/009706",
    externalLinks: [{ label: "LingBuzz", url: "https://ling.auf.net/lingbuzz/009706" }],
    keywords: ["grammaticality", "operators", "public update", "clause structure"],
    description: "A coordination account of why some contrasts are judged as grammatical errors while others remain matters of style, stance, or lexical choice.",
    bibtex: `@unpublished{reynolds2026operators,
  author = {Reynolds, Brett},
  title = {Why Clause Structure Is Judged Like Tense and Agreement: Public-Update Operators and Grammaticality},
  year = {2026},
  note = {Preprint, LingBuzz/009706; under review at Functions of Language},
  url = {https://ling.auf.net/lingbuzz/009706}
}
`,
  },
  {
    slug: "llms-as-boundary-phenomena",
    title: "LLMs as boundary phenomena: A comment on Nefdt (2026)",
    shortTitle: "LLMs as boundary phenomena",
    status: "Preprint",
    year: "2026",
    sourceTex: "papers/LLMs_as_boundary_phenomena/main.tex",
    bibliography: ["papers/LLMs_as_boundary_phenomena/references.bib", "papers/LLMs_as_boundary_phenomena/references-local.bib"],
    canonicalUrl: "https://philarchive.org/rec/REYLAB",
    externalLinks: [{ label: "PhilArchive", url: "https://philarchive.org/rec/REYLAB" }],
    keywords: ["large language models", "boundary phenomena", "homeostatic property clusters", "cognition"],
    description: "A boundary-phenomena treatment of LLMs and the projection purposes behind cognition-like classifications.",
    bibtex: `@unpublished{reynolds2026llmsBoundary,
  author = {Reynolds, Brett},
  title = {LLMs as Boundary Phenomena: A Comment on Nefdt (2026)},
  year = {2026},
  note = {Preprint, PhilArchive},
  url = {https://philarchive.org/rec/REYLAB}
}
`,
  },
  {
    slug: "reference-as-cluster-concept",
    title: "Reference as a cluster concept: A reply to Coelho Mollo and Milliere",
    shortTitle: "Reference as a cluster concept",
    status: "Under review at Philosophy and the Mind Sciences",
    year: "2026",
    sourceTex: "papers/vector-grounding-problem_response/main.tex",
    bibliography: ["papers/vector-grounding-problem_response/references.bib", "papers/vector-grounding-problem_response/references-local.bib"],
    canonicalUrl: "https://philarchive.org/rec/REYRAA-2",
    externalLinks: [{ label: "PhilArchive", url: "https://philarchive.org/rec/REYRAA-2" }],
    keywords: ["reference", "large language models", "vector grounding problem", "teleosemantics"],
    description: "A reply arguing that reference and grounding are cluster concepts rather than all-or-nothing properties.",
    bibtex: `@unpublished{reynolds2026referenceCluster,
  author = {Reynolds, Brett},
  title = {Reference as a Cluster Concept: A Reply to Coelho Mollo and Milliere},
  year = {2026},
  note = {Preprint, PhilArchive; under review at Philosophy and the Mind Sciences},
  url = {https://philarchive.org/rec/REYRAA-2}
}
`,
  },
];

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function siteUrl(slug, file = "") {
  return `${baseUrl}/papers/${slug}/${file}`;
}

function shellPandoc(input, args) {
  const result = spawnSync("pandoc", args, {
    cwd: workspaceRoot,
    input,
    encoding: "utf8",
    maxBuffer: 40 * 1024 * 1024,
  });
  if (result.status !== 0) {
    throw new Error(result.stderr || `pandoc exited ${result.status}`);
  }
  return result.stdout;
}

function convertLatexFragment(latex) {
  return shellPandoc(latex, ["-f", "latex", "-t", "gfm", "--wrap=none"]).trim();
}

function convertPaper(paper) {
  const texPath = path.join(workspaceRoot, paper.sourceTex);
  const latex = publicLatex(fs.readFileSync(texPath, "utf8"));
  const tempTexPath = path.join(path.dirname(texPath), ".website-mirror.tmp.tex");
  fs.writeFileSync(tempTexPath, latex);
  const tempTexRelative = path.relative(workspaceRoot, tempTexPath);
  const args = [tempTexRelative, "-f", "latex", "-t", "gfm", "--wrap=none", "--citeproc"];
  for (const bibliography of paper.bibliography) {
    if (fs.existsSync(path.join(workspaceRoot, bibliography))) {
      args.push(`--bibliography=${bibliography}`);
    }
  }
  let result;
  try {
    result = spawnSync("pandoc", args, {
      cwd: workspaceRoot,
      encoding: "utf8",
      maxBuffer: 80 * 1024 * 1024,
    });
  } finally {
    fs.rmSync(tempTexPath, { force: true });
  }
  if (result.status !== 0) {
    throw new Error(`${paper.slug}: ${result.stderr || `pandoc exited ${result.status}`}`);
  }
  const abstractMatch = latex.match(/\\begin\{abstract\}([\s\S]*?)\\end\{abstract\}/);
  const abstractMarkdown = abstractMatch ? convertLatexFragment(abstractMatch[1]) : "";

  let body = result.stdout.trim();
  body = body.replace(/^Keywords:.*(?:\n(?:[^\n#].*)?)*\n+/i, "");

  const yaml = [
    "---",
    `title: ${JSON.stringify(paper.title)}`,
    'author: "Brett Reynolds"',
    `year: ${JSON.stringify(paper.year)}`,
    `status: ${JSON.stringify(paper.status)}`,
    `canonical_url: ${JSON.stringify(paper.canonicalUrl)}`,
    `website_url: ${JSON.stringify(siteUrl(paper.slug))}`,
    `markdown_url: ${JSON.stringify(siteUrl(paper.slug, "paper.md"))}`,
    'version: "author-manuscript mirror"',
    `version_date: ${JSON.stringify(versionDate)}`,
    `keywords: [${paper.keywords.map((keyword) => JSON.stringify(keyword)).join(", ")}]`,
    "---",
    "",
  ].join("\n");

  const header = [
    `# ${paper.title}`,
    "",
    "**Author-manuscript mirror.** This Markdown file is provided for accessibility, search, and machine readability. The canonical public record is linked in the metadata above.",
    "",
    abstractMarkdown ? "## Abstract" : "",
    abstractMarkdown,
    abstractMarkdown ? "" : "",
  ]
    .filter((line, index, array) => line !== "" || array[index - 1] !== "")
    .join("\n");

  return `${yaml}${header}\n\n${body}\n`.replace(/[ \t]+$/gm, "");
}

function publicLatex(latex) {
  let next = normalizeCitationAliases(latex)
    .replace(/^\\newif\\ifblind\s*$/gm, "")
    .replace(/^\\blind(?:true|false).*$/gm, "");
  let previous;
  do {
    previous = next;
    next = next.replace(/\\ifblind([\s\S]*?)\\else([\s\S]*?)\\fi/g, "$2");
  } while (next !== previous);
  return next.replace(/^\\newif\s*$/gm, "");
}

function normalizeCitationAliases(latex) {
  let next = latex;
  for (const [alias, key] of citationAliases) {
    next = next.replaceAll(alias, key);
  }
  return next;
}

function escapeHtml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function linkList(links) {
  return links.map((link) => `<a href="${escapeHtml(link.url)}">${escapeHtml(link.label)}</a>`).join(" ");
}

function renderPaperIndex(paper) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ScholarlyArticle",
    headline: paper.title,
    name: paper.title,
    author: {
      "@type": "Person",
      name: "Brett Reynolds",
      url: baseUrl,
    },
    datePublished: paper.year,
    keywords: paper.keywords.join(", "),
    url: siteUrl(paper.slug),
    sameAs: [paper.canonicalUrl, ...paper.externalLinks.map((link) => link.url)].filter((url, index, urls) => urls.indexOf(url) === index),
    encoding: [
      {
        "@type": "MediaObject",
        encodingFormat: "text/markdown",
        contentUrl: siteUrl(paper.slug, "paper.md"),
      },
      {
        "@type": "MediaObject",
        encodingFormat: "application/x-bibtex",
        contentUrl: siteUrl(paper.slug, "cite.bib"),
      },
    ],
  };

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="${escapeHtml(paper.description)}">
  <title>${escapeHtml(paper.shortTitle)} - Brett Reynolds</title>
  <link rel="stylesheet" href="../../style.css">
  <link rel="canonical" href="${escapeHtml(siteUrl(paper.slug))}">
  <link rel="alternate" type="text/markdown" href="paper.md">
  <link rel="alternate" type="application/x-bibtex" href="cite.bib">
  <script type="application/ld+json">
${JSON.stringify(jsonLd, null, 2)}
  </script>
</head>
<body>
  <h1>${escapeHtml(paper.title)}</h1>
  <p><a href="../../publications.html">&larr; Back to publications</a></p>

  <section class="pub-section">
    <p>${escapeHtml(paper.description)}</p>
    <p><strong>Status:</strong> ${escapeHtml(paper.status)}.</p>
    <p class="pub-links">
      <a href="paper.md">Markdown</a>
      <a href="cite.bib">BibTeX</a>
      ${linkList(paper.externalLinks)}
    </p>
    <p class="note">The Markdown file is an author-manuscript mirror provided for accessibility, search, and machine readability. Use the linked public record as the canonical citation target unless a later publisher version supersedes it.</p>
  </section>
</body>
</html>
`;
}

function renderPapersIndex() {
  const items = papers
    .map(
      (paper) => `      <li>
        <a href="${paper.slug}/">${escapeHtml(paper.title)}</a>
        <span class="pub-links"><a href="${paper.slug}/paper.md">Markdown</a> <a href="${paper.slug}/cite.bib">BibTeX</a></span>
      </li>`
    )
    .join("\n");
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Machine-readable paper mirrors by Brett Reynolds.">
  <title>Machine-Readable Papers - Brett Reynolds</title>
  <link rel="stylesheet" href="../style.css">
</head>
<body>
  <h1>Machine-Readable Papers</h1>
  <p><a href="../publications.html">&larr; Back to publications</a></p>
  <p>These author-manuscript Markdown mirrors are provided for accessibility, search, and machine readability. Canonical public records remain the linked preprint, archive, DOI, or publisher pages.</p>
  <ul class="pub-list">
${items}
  </ul>
</body>
</html>
`;
}

function renderLlmsTxt() {
  const entries = papers
    .map(
      (paper) => `- [${paper.title}](${siteUrl(paper.slug, "paper.md")}): ${paper.description} Status: ${paper.status}. Canonical record: ${paper.canonicalUrl}`
    )
    .join("\n");
  return `# Brett Reynolds

> Academic website for Brett Reynolds, with work on English grammar, linguistic categories, homeostatic property clusters, pragmatics, grammaticality, and LLMs as boundary phenomena.

## Core Machine-Readable Papers

${entries}

## Human-Facing Pages

- [Publications](${baseUrl}/publications.html): Full publication list.
- [Machine-readable papers](${baseUrl}/papers/): Index of Markdown mirrors and BibTeX records.
- [CV](${baseUrl}/cv.pdf): Current CV as PDF.

## Use Notes

The Markdown files are author-manuscript mirrors for accessibility, search, and machine readability. Prefer the linked canonical record for citation when a DOI, PhilArchive, LingBuzz, arXiv, Zenodo, or publisher page is available.
`;
}

function main() {
  const papersDir = path.join(siteRoot, "papers");
  ensureDir(papersDir);

  for (const paper of papers) {
    const outDir = path.join(papersDir, paper.slug);
    ensureDir(outDir);
    fs.writeFileSync(path.join(outDir, "paper.md"), convertPaper(paper));
    fs.writeFileSync(path.join(outDir, "cite.bib"), paper.bibtex);
    fs.writeFileSync(path.join(outDir, "index.html"), renderPaperIndex(paper));
  }

  fs.writeFileSync(path.join(papersDir, "index.html"), renderPapersIndex());
  fs.writeFileSync(path.join(siteRoot, "llms.txt"), renderLlmsTxt());
  console.log(`Generated ${papers.length} paper mirrors.`);
}

main();
