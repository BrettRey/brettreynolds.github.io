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
const versionDate = "2026-06-12";
const citationAliases = new Map([
  ["HuddlestonPullum2002", "huddleston2002"],
  ["PickeringGarrod2004", "pickering2004"],
]);

const papers = [
  {
    slug: "bridge-principles-without-ug",
    title: "Bridge Principles without UG: Projectibility, Crosslinguistic Evidence, and Linguistic Ontology",
    shortTitle: "Bridge Principles without UG",
    status: "Preprint",
    year: "2026",
    versionDate: "2026-06-25",
    sourceTex: "papers/active/bridge-principles-no-ug/main.tex",
    bibliography: ["papers/active/bridge-principles-no-ug/references.bib"],
    canonicalUrl: "https://lingbuzz.net/lingbuzz/010104",
    externalLinks: [{ label: "LingBuzz", url: "https://lingbuzz.net/lingbuzz/010104" }],
    keywords: ["Universal Grammar", "projectibility", "linguistic ontology", "crosslinguistic evidence", "bridge principles", "comparative method"],
    description: "A projectibility-first account of why crosslinguistic inference needs bridge principles without making Universal Grammar the only possible licence for evidential travel.",
    bibtex: `@unpublished{reynolds2026bridgePrinciplesWithoutUG,
  author = {Reynolds, Brett},
  title = {{Bridge Principles without UG: Projectibility, Crosslinguistic Evidence, and Linguistic Ontology}},
  year = {2026},
  note = {Preprint, LingBuzz/010104},
  url = {https://lingbuzz.net/lingbuzz/010104}
}
`,
  },
  {
    slug: "truth-tracking-profiles",
    title: "Truth-Tracking Profiles: What Large Language Models Participate In",
    shortTitle: "Truth-Tracking Profiles",
    status: "Preprint",
    year: "2026",
    sourceTex: "papers/preprints/truth-tracking-profiles/main.tex",
    bibliography: ["papers/preprints/truth-tracking-profiles/references.bib"],
    canonicalUrl: "https://philarchive.org/rec/REYTPW",
    externalLinks: [{ label: "PhilArchive", url: "https://philarchive.org/rec/REYTPW" }],
    keywords: ["large language models", "truth-tracking", "grounding", "answerability", "testimony", "hallucination"],
    description: "A profile account of how large language models participate in stabilizing routes to truth-tracking success.",
    bibtex: `@unpublished{reynolds2026truthTrackingProfiles,
  author = {Reynolds, Brett},
  title = {Truth-Tracking Profiles: What Large Language Models Participate In},
  year = {2026},
  note = {Preprint, PhilArchive},
  url = {https://philarchive.org/rec/REYTPW}
}
`,
  },
  {
    slug: "not-every-stable-cluster-is-homeostatic",
    title: "Not every stable cluster is homeostatic: Stability, network order, and control in projectible kinds",
    shortTitle: "Not every stable cluster is homeostatic",
    status: "Preprint",
    year: "2026",
    sourceTex: "papers/submitted/not-every-stable-cluster-is-homeostatic/main.tex",
    bibliography: ["papers/submitted/not-every-stable-cluster-is-homeostatic/references.bib"],
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
    sourceTex: "papers/submitted/effective-without-warrant/main.tex",
    bibliography: ["papers/submitted/effective-without-warrant/references-standalone.bib"],
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
    sourceTex: "papers/submitted/what-do-we-mean-by-language/main.tex",
    bibliography: ["papers/submitted/what-do-we-mean-by-language/references.bib", "papers/submitted/what-do-we-mean-by-language/references-local.bib"],
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
    sourceTex: "papers/submitted/determinatives-as-nouns/main.tex",
    bibliography: ["papers/submitted/determinatives-as-nouns/references.bib", "papers/submitted/determinatives-as-nouns/references-local.bib"],
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
    status: "Under review at Journal of Pragmatics",
    year: "2026",
    sourceTex: "papers/submitted/english-interjections/main.tex",
    bibliography: ["papers/submitted/english-interjections/references.bib", "papers/submitted/english-interjections/references-local.bib"],
    canonicalUrl: "https://lingbuzz.net/lingbuzz/009852",
    externalLinks: [
      { label: "LingBuzz", url: "https://lingbuzz.net/lingbuzz/009852" },
      { label: "SSRN", url: "https://ssrn.com/abstract=6954254" },
    ],
    keywords: ["interjections", "theoretical pragmatics", "projectibility", "path dependence"],
    description: "A theoretical-pragmatics account of what categorizing an English form as an interjection lets speakers, hearers, and analysts predict.",
    bibtex: `@unpublished{reynolds2026interjections,
  author = {Reynolds, Brett},
  title = {What English Interjections Let Us Predict: Stable Causal-Pragmatic Clustering and Path Dependence},
  year = {2026},
  note = {Preprint, LingBuzz/009852 and SSRN/6954254; under review at Journal of Pragmatics},
  eprinttype = {SSRN},
  eprint = {6954254},
  url = {https://lingbuzz.net/lingbuzz/009852}
}
`,
  },
  {
    slug: "difference-in-differences-for-corpus-linguistics",
    title: "Difference-in-differences for corpus linguistics: Causal inference, corpus composition, and linguistic change after shocks",
    shortTitle: "Difference-in-differences for corpus linguistics",
    status: "Under review at Corpus Linguistics and Linguistic Theory",
    year: "2026",
    versionDate: "2026-06-20",
    sourceTex: "papers/submitted/difference-in-differences-for-corpus-linguistics/main.tex",
    bibliography: [
      "papers/submitted/difference-in-differences-for-corpus-linguistics/references.bib",
      "papers/submitted/difference-in-differences-for-corpus-linguistics/references-local.bib",
    ],
    canonicalUrl: "https://lingbuzz.net/lingbuzz/010080",
    externalLinks: [{ label: "LingBuzz", url: "https://lingbuzz.net/lingbuzz/010080" }],
    keywords: ["difference-in-differences", "corpus linguistics", "causal inference", "corpus composition", "linguistic change", "morphology"],
    description: "A corpus-methods account of when before/after corpus data can support causal claims about linguistic change after shocks.",
    bibtex: `@unpublished{reynolds2026didcorpus,
  author = {Reynolds, Brett},
  title = {Difference-in-Differences for Corpus Linguistics: Causal Inference, Corpus Composition, and Linguistic Change after Shocks},
  year = {2026},
  note = {Preprint, LingBuzz/010080; under review at Corpus Linguistics and Linguistic Theory},
  url = {https://lingbuzz.net/lingbuzz/010080}
}
`,
  },
  {
    slug: "expert-grammaticality-judges",
    title: "Expert Grammaticality Judges as Evaluators, Not Participants: Grammaticality Judgments, Rater Roles, and Research Ethics Review",
    shortTitle: "Expert Grammaticality Judges as Evaluators, Not Participants",
    status: "Under review at Canadian Journal of Linguistics / Revue canadienne de linguistique",
    year: "2026",
    versionDate: "2026-06-20",
    sourceTex: "papers/submitted/expert-grammaticality-judges-evaluators/main.tex",
    bibliography: [
      "papers/submitted/expert-grammaticality-judges-evaluators/references.bib",
      "papers/submitted/expert-grammaticality-judges-evaluators/references-local.bib",
    ],
    canonicalUrl: "https://philarchive.org/rec/REYEGJ",
    externalLinks: [
      { label: "LingBuzz", url: "https://lingbuzz.net/lingbuzz/010081" },
      { label: "PhilArchive", url: "https://philarchive.org/rec/REYEGJ" },
    ],
    keywords: ["grammaticality judgments", "acceptability judgments", "research ethics review", "rater reliability", "TCPS 2", "morphology", "syntax", "phonology"],
    description: "A role-classification argument that expert grammaticality judges are participants when studied as people but evaluators when their expertise assesses linguistic materials.",
    bibtex: `@unpublished{reynolds2026expertJudges,
  author = {Reynolds, Brett},
  title = {Expert Grammaticality Judges as Evaluators, Not Participants: Grammaticality Judgments, Rater Roles, and Research Ethics Review},
  year = {2026},
  note = {Preprint, LingBuzz/010081 and PhilArchive REYEGJ; under review at Canadian Journal of Linguistics / Revue canadienne de linguistique},
  url = {https://philarchive.org/rec/REYEGJ}
}
`,
  },
  {
    slug: "public-update-operators",
    title: "Why clause structure is judged like tense and agreement: Public-update operators and grammaticality",
    shortTitle: "Why clause structure is judged like tense and agreement",
    status: "Preprint",
    year: "2026",
    sourceTex: "papers/active/grammaticality-de-idealized/subprojects/operator-stratum/main.tex",
    bibliography: ["papers/active/grammaticality-de-idealized/subprojects/operator-stratum/references.bib"],
    canonicalUrl: "https://ling.auf.net/lingbuzz/009706",
    externalLinks: [{ label: "LingBuzz", url: "https://ling.auf.net/lingbuzz/009706" }],
    keywords: ["grammaticality", "operators", "public update", "clause structure"],
    description: "A coordination account of why some contrasts are judged as grammatical errors while others remain matters of style, stance, or lexical choice.",
    bibtex: `@unpublished{reynolds2026operators,
  author = {Reynolds, Brett},
  title = {Why Clause Structure Is Judged Like Tense and Agreement: Public-Update Operators and Grammaticality},
  year = {2026},
  note = {Preprint, LingBuzz/009706},
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
    sourceTex: "papers/preprints/llms-as-boundary-phenomena/main.tex",
    bibliography: ["papers/preprints/llms-as-boundary-phenomena/references.bib", "papers/preprints/llms-as-boundary-phenomena/references-local.bib"],
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
    sourceTex: "papers/submitted/vector-grounding-problem-response/main.tex",
    bibliography: ["papers/submitted/vector-grounding-problem-response/references.bib", "papers/submitted/vector-grounding-problem-response/references-local.bib"],
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
  {
    slug: "varieties-as-conditioning-structure",
    title: "Varieties as conditioning structure: A homeostatic account of register, dialect, and discourse community",
    shortTitle: "Varieties as conditioning structure",
    status: "Preprint",
    year: "2026",
    sourceTex: "papers/preprints/varieties-as-conditioning-structure/main.tex",
    bibliography: ["papers/preprints/varieties-as-conditioning-structure/references.bib", "papers/preprints/varieties-as-conditioning-structure/references-local.bib"],
    canonicalUrl: "https://lingbuzz.net/lingbuzz/009872",
    externalLinks: [{ label: "LingBuzz", url: "https://lingbuzz.net/lingbuzz/009872" }],
    keywords: ["sociolinguistic variation", "register", "dialect", "discourse community", "homeostatic property clusters"],
    description: "A homeostatic account of register, dialect, and discourse community as conditioning structures for participant expectation.",
    bibtex: `@unpublished{reynolds2026varietiesConditioning,
  author = {Reynolds, Brett},
  title = {Varieties as Conditioning Structure: A Homeostatic Account of Register, Dialect, and Discourse Community},
  year = {2026},
  note = {Preprint, LingBuzz/009872},
  url = {https://lingbuzz.net/lingbuzz/009872}
}
`,
  },
  {
    slug: "naturalizing-typological-kinds",
    title: "Naturalizing typological kinds: Comparanda, mechanisms, and measurement",
    shortTitle: "Naturalizing typological kinds",
    status: "Preprint",
    year: "2025",
    sourceTex: "papers/preprints/naturalizing-typological-kinds/main.tex",
    bibliography: ["papers/preprints/naturalizing-typological-kinds/references.bib"],
    canonicalUrl: "https://ling.auf.net/lingbuzz/009461",
    externalLinks: [{ label: "LingBuzz", url: "https://ling.auf.net/lingbuzz/009461" }],
    keywords: ["typology", "comparative concepts", "homeostatic property clusters", "measurement", "naturalized kinds"],
    description: "A framework for testing when comparative concepts identify projectible typological kinds rather than analyst labels.",
    bibtex: `@unpublished{reynolds2025naturalizingTypologicalKinds,
  author = {Reynolds, Brett},
  title = {Naturalizing Typological Kinds: Comparanda, Mechanisms, and Measurement},
  year = {2025},
  note = {Preprint, LingBuzz/009461},
  url = {https://ling.auf.net/lingbuzz/009461}
}
`,
  },
  {
    slug: "english-countability",
    title: "The homeostatic maintenance of English countability: Bidirectional inference and the stability of grammatical clusters",
    shortTitle: "The homeostatic maintenance of English countability",
    status: "Under review at Linguistics",
    year: "2025",
    sourceTex: "papers/submitted/countability/main.tex",
    bibliography: ["papers/submitted/countability/references.bib", "papers/submitted/countability/references-local.bib"],
    canonicalUrl: "https://ling.auf.net/lingbuzz/009537",
    externalLinks: [{ label: "LingBuzz", url: "https://ling.auf.net/lingbuzz/009537" }],
    keywords: ["countability", "English grammar", "homeostatic property clusters", "grammatical categories"],
    description: "A bidirectional-inference account of why English countability forms a stable but non-essentialist grammatical cluster.",
    bibtex: `@unpublished{reynolds2025countability,
  author = {Reynolds, Brett},
  title = {The Homeostatic Maintenance of English Countability: Bidirectional Inference and the Stability of Grammatical Clusters},
  year = {2025},
  note = {Preprint, LingBuzz/009537; under review at Linguistics},
  url = {https://ling.auf.net/lingbuzz/009537}
}
`,
  },
  {
    slug: "definiteness-and-deitality",
    title: "Definiteness and Deitality in English: A Projectibility-First Account",
    shortTitle: "Definiteness and deitality in English",
    status: "Under review at Journal of Linguistics",
    year: "2025",
    sourceTex: "papers/submitted/definiteness-and-deitality/Claude.tex",
    bibliography: [
      "papers/submitted/definiteness-and-deitality/references.bib",
      "papers/submitted/definiteness-and-deitality/refs.bib",
      "papers/submitted/definiteness-and-deitality/refs.bib.bak",
      "papers/submitted/definiteness-and-deitality/references-local.bib",
    ],
    canonicalUrl: "https://ling.auf.net/lingbuzz/009369",
    externalLinks: [{ label: "LingBuzz", url: "https://ling.auf.net/lingbuzz/009369" }],
    keywords: ["definiteness", "deitality", "English determiners", "projectibility", "grammatical categories"],
    description: "A projectibility-first account distinguishing semantic definiteness from structural deitality in English.",
    bibtex: `@unpublished{reynolds2025definitenessDeitality,
  author = {Reynolds, Brett},
  title = {Definiteness and Deitality in English: A Projectibility-First Account},
  year = {2025},
  note = {Preprint, LingBuzz/009369; under review at Journal of Linguistics},
  url = {https://ling.auf.net/lingbuzz/009369}
}
`,
  },
  {
    slug: "language-as-hpc-stack",
    title: "Language as a stack of homeostatic property-cluster kinds: From phonemes to constructions",
    shortTitle: "Language as a stack of HPC kinds",
    status: "Preprint",
    year: "2025",
    sourceTex: "papers/preprints/language-as-a-stack/main.tex",
    bibliography: [
      "papers/preprints/language-as-a-stack/refs.bib",
      "papers/preprints/language-as-a-stack/refs.bib.bak",
    ],
    canonicalUrl: "https://doi.org/10.5281/zenodo.17354363",
    externalLinks: [
      { label: "Zenodo", url: "https://doi.org/10.5281/zenodo.17354363" },
      { label: "LingBuzz", url: "https://ling.auf.net/lingbuzz/009400" },
    ],
    keywords: ["homeostatic property clusters", "phonemes", "words", "constructions", "language ontology"],
    description: "A stack model of linguistic kinds from phonemes to constructions, with empirical case studies across levels.",
    bibtex: `@unpublished{reynolds2025languageStack,
  author = {Reynolds, Brett},
  title = {Language as a Stack of Homeostatic Property-Cluster Kinds: From Phonemes to Constructions},
  year = {2025},
  note = {Preprint, Zenodo and LingBuzz/009400},
  doi = {10.5281/zenodo.17354363},
  url = {https://doi.org/10.5281/zenodo.17354363}
}
`,
  },
  {
    slug: "how-to-study-boundary-phenomena",
    title: "Measuring Stable Diagnostic Ambiguity: A Quantitative Workflow for Small-n Grammatical Boundary Phenomena",
    shortTitle: "Measuring stable diagnostic ambiguity",
    status: "Under review at Journal of Quantitative Linguistics",
    year: "2025",
    sourceTex: "papers/submitted/reciprocals-boundary-phenomena/main.tex",
    bibliography: [
      "papers/submitted/reciprocals-boundary-phenomena/refs.bib",
      "papers/submitted/reciprocals-boundary-phenomena/refs.bib.bak",
    ],
    canonicalUrl: "https://ling.auf.net/lingbuzz/009294",
    externalLinks: [{ label: "LingBuzz", url: "https://ling.auf.net/lingbuzz/009294" }],
    keywords: ["boundary phenomena", "reciprocals", "categorization", "English grammar", "homeostatic property clusters"],
    description: "A quantitative workflow for measuring stable diagnostic ambiguity in small-n grammatical boundary phenomena.",
    bibtex: `@unpublished{reynolds2025boundaryPhenomena,
  author = {Reynolds, Brett},
  title = {Measuring Stable Diagnostic Ambiguity: A Quantitative Workflow for Small-n Grammatical Boundary Phenomena},
  year = {2025},
  note = {Preprint, LingBuzz/009294; under review at Journal of Quantitative Linguistics},
  url = {https://ling.auf.net/lingbuzz/009294}
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

function convertLatexFragment(latex, bibliographyArgs = []) {
  return shellPandoc(latex, ["-f", "latex", "-t", "gfm", "--wrap=none", "--citeproc", ...bibliographyArgs])
    .replace(/\n*<div id="refs"[\s\S]*$/m, "")
    .trim();
}

function bibliographyArgs(paper, tempBibPaths) {
  const args = [];
  for (const bibliography of paper.bibliography) {
    const bibliographyPath = path.join(workspaceRoot, bibliography);
    if (fs.existsSync(bibliographyPath)) {
      let bibliographyArg = bibliography;
      if (!bibliography.endsWith(".bib")) {
        const tempBibPath = path.join(path.dirname(bibliographyPath), `.website-mirror.${path.basename(bibliography)}.bib`);
        fs.writeFileSync(tempBibPath, fs.readFileSync(bibliographyPath, "utf8"));
        tempBibPaths.push(tempBibPath);
        bibliographyArg = path.relative(workspaceRoot, tempBibPath);
      }
      args.push(`--bibliography=${bibliographyArg}`);
    }
  }
  return args;
}

function convertPaper(paper) {
  const texPath = path.join(workspaceRoot, paper.sourceTex);
  const latex = publicLatex(expandSectionInputs(fs.readFileSync(texPath, "utf8"), path.dirname(texPath)));
  const tempTexPath = path.join(path.dirname(texPath), ".website-mirror.tmp.tex");
  const tempBibPaths = [];
  fs.writeFileSync(tempTexPath, latex);
  const tempTexRelative = path.relative(workspaceRoot, tempTexPath);
  const bibliography = bibliographyArgs(paper, tempBibPaths);
  const args = [tempTexRelative, "-f", "latex", "-t", "gfm", "--wrap=none", "--citeproc", ...bibliography];
  let result;
  let abstractMarkdown = "";
  try {
    result = spawnSync("pandoc", args, {
      cwd: workspaceRoot,
      encoding: "utf8",
      maxBuffer: 80 * 1024 * 1024,
    });
    if (result.status === 0) {
      const abstractMatch = latex.match(/\\begin\{abstract\}([\s\S]*?)\\end\{abstract\}/);
      abstractMarkdown = abstractMatch ? convertLatexFragment(abstractMatch[1], bibliography) : "";
    }
  } finally {
    fs.rmSync(tempTexPath, { force: true });
    for (const tempBibPath of tempBibPaths) {
      fs.rmSync(tempBibPath, { force: true });
    }
  }
  if (result.status !== 0) {
    throw new Error(`${paper.slug}: ${result.stderr || `pandoc exited ${result.status}`}`);
  }

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
    `version_date: ${JSON.stringify(paper.versionDate ?? versionDate)}`,
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
  let next = expandCustomMacros(normalizeCitationAliases(latex))
    .replace(/^\\newif\\ifblind\s*$/gm, "")
    .replace(/^\\ifdefined\\blindbuild\s+\\blindtrue\s+\\else\s+\\blindfalse\s+\\fi\s*$/gm, "")
    .replace(/^\\blind(?:true|false).*$/gm, "");
  let previous;
  do {
    previous = next;
    next = next.replace(/\\ifblind([\s\S]*?)\\else([\s\S]*?)\\fi/g, "$2");
    next = next.replace(/\\ifdefined\\blind(?![A-Za-z])([\s\S]*?)\\else([\s\S]*?)\\fi/g, "$2");
    next = next.replace(/\\ifdefined\\blindsubmission([\s\S]*?)\\else([\s\S]*?)\\fi/g, "$2");
  } while (next !== previous);
  return next.replace(/^\\newif\s*$/gm, "");
}

function expandSectionInputs(latex, baseDir, seen = new Set()) {
  return latex.replace(/\\input\{([^{}]+)\}/g, (match, inputPath) => {
    if (!inputPath.startsWith("sections/")) {
      return match;
    }
    const texInputPath = inputPath.endsWith(".tex") ? inputPath : `${inputPath}.tex`;
    const absoluteInputPath = path.resolve(baseDir, texInputPath);
    if (seen.has(absoluteInputPath) || !fs.existsSync(absoluteInputPath)) {
      return match;
    }
    seen.add(absoluteInputPath);
    const inputLatex = fs.readFileSync(absoluteInputPath, "utf8");
    return expandSectionInputs(inputLatex, path.dirname(absoluteInputPath), seen);
  });
}

function expandCustomMacros(latex) {
  let next = latex
    .replace(/\\Deitality\{\}/g, "\\textsc{deitality}")
    .replace(/\\Definiteness\{\}/g, "\\textsc{definiteness}")
    .replace(/\\Nondeital\{\}/g, "\\textsc{non-deital}")
    .replace(/\\Deital\{\}/g, "\\textsc{deital}")
    .replace(/\\textsubscript\{\\Cross\}/g, "\\textsubscript{Cross}")
    .replace(/\\Cross\b/g, "Cross")
    .replace(/\\posscite\{([^{}]+)\}/g, "\\textcite{$1}'s")
    .replace(/\\citealt\{([^{}]+)\}/g, "\\citep{$1}");
  let previous;
  do {
    previous = next;
    next = next
      .replace(/\\(?:term|abbr|levelA|levelB|levelC)\{([^{}]*)\}/g, "$1")
      .replace(/\\(?:mention|mentionhead|olang)\{([^{}]*)\}/g, "\\textit{$1}");
  } while (next !== previous);
  return next;
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

function renderStatus(status) {
  const underReviewMatch = status.match(/^(Under review at )(.+)$/);
  if (underReviewMatch) {
    return `${escapeHtml(underReviewMatch[1])}<em>${escapeHtml(underReviewMatch[2])}</em>`;
  }
  return escapeHtml(status);
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
  <script src="../../theme.js"></script>
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
    <p><strong>Status:</strong> ${renderStatus(paper.status)}.</p>
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
  <script src="../theme.js"></script>
  <link rel="stylesheet" href="../style.css">
</head>
<body>
  <h1>Machine-Readable Papers</h1>
  <p><a href="../publications.html">&larr; Back to publications</a></p>
  <p>These author-manuscript Markdown mirrors are provided for accessibility, search, and machine readability. Canonical public records remain the linked preprint, archive, DOI, or publisher pages.</p>
  <p>For a small project-level context bundle, see the <a href="../okf/">public OKF export</a>.</p>
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
- [CGEL correctives and extensions](${baseUrl}/cgel-correctives.html): Thematic cluster of CGEL corrections, extensions, and related category/function work.
- [Machine-readable papers](${baseUrl}/papers/): Index of Markdown mirrors and BibTeX records.
- [Public OKF export](${baseUrl}/okf/): Public Open Knowledge Format bundle for selected research-project context.
- [Public OKF bundle index](${baseUrl}/okf/bundle/index.md): Raw OKF Markdown/YAML bundle index.
- [CV](${baseUrl}/cv.pdf): Current CV as PDF.

## Use Notes

The Markdown files are author-manuscript mirrors for accessibility, search, and machine readability. The OKF files are public-safe project-context exports. Prefer the linked canonical record for citation when a DOI, PhilArchive, LingBuzz, arXiv, Zenodo, or publisher page is available.
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
