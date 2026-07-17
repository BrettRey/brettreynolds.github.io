/* Language Landscapes companion: fully static, retrieval-only.
   Data comes from ./data/*.json (built by the book repo's
   scripts/export_static_companion.py). Search runs in the browser via
   retrieval.js. Answers are passages quoted from the book, never generated. */

const STORAGE_KEY = "language-landscapes-companion-static-v1";
const TOP_K = 5;
const WEAK_MATCH_THRESHOLD = 0.11;

const state = {
  config: null,
  chunks: null,
  retrievalIndex: null,
  chunkById: new Map(),
  indicesByChapter: new Map(),
  indicesByPassage: new Map(),
  currentView: "landing",
  chapterCache: {},
  currentChapterId: null,
  currentPassageId: null,
  glossary: null,
  glossaryQuery: "",
  activeGlossarySlug: null,
  indexEntries: null,
  indexQuery: "",
  activeIndexId: null,
  modalSource: null,
  ask: {
    threads: [],
    activeThreadId: null,
    draft: "",
    selectedMessageId: null,
  },
  read: {
    drawerOpen: true,
    draft: "",
    messages: [],
    scope: { mode: "chapter", value: null, label: "" },
    selectedMessageId: null,
  },
};

document.addEventListener("DOMContentLoaded", init);
document.addEventListener("click", handleClick);
document.addEventListener("submit", handleSubmit);
document.addEventListener("input", handleInput);

async function init() {
  try {
    const [config, chunks] = await Promise.all([
      fetchJSON("data/toc.json"),
      fetchJSON("data/chunks.json"),
    ]);
    state.config = config;
    state.chunks = chunks;
    state.retrievalIndex = LLRetrieval.buildIndex(chunks);

    chunks.forEach((chunk, position) => {
      state.chunkById.set(chunk.chunk_id, chunk);
      if (chunk.chapter_id) {
        if (!state.indicesByChapter.has(chunk.chapter_id)) {
          state.indicesByChapter.set(chunk.chapter_id, new Set());
        }
        state.indicesByChapter.get(chunk.chapter_id).add(position);
      }
      if (chunk.passage_id) {
        if (!state.indicesByPassage.has(chunk.passage_id)) {
          state.indicesByPassage.set(chunk.passage_id, new Set());
        }
        state.indicesByPassage.get(chunk.passage_id).add(position);
      }
    });

    state.currentChapterId = config.chapters[0]?.id || null;
    state.read.scope = {
      mode: "chapter",
      value: state.currentChapterId,
      label: chapterLabel(state.currentChapterId),
    };
    restoreThreads();
    render();
  } catch (error) {
    console.error(error);
    document.getElementById("view-root").innerHTML = `
      <section class="panel loading-panel">
        <p>The companion data failed to load.</p>
        <p class="status-note">${escapeHTML(String(error))}</p>
      </section>
    `;
  }
}

async function fetchJSON(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`${response.status} ${response.statusText} for ${url}`);
  }
  return response.json();
}

function restoreThreads() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return;
    }
    const parsed = JSON.parse(raw);
    state.ask.threads = Array.isArray(parsed.threads) ? parsed.threads : [];
    state.ask.activeThreadId = parsed.activeThreadId || state.ask.threads[0]?.id || null;
  } catch (_error) {
    state.ask.threads = [];
    state.ask.activeThreadId = null;
  }
}

function persistThreads() {
  try {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        threads: state.ask.threads,
        activeThreadId: state.ask.activeThreadId,
      }),
    );
  } catch (_error) {
    // Storage may be unavailable; threads then live for the session only.
  }
}

function ensureActiveThread(scope) {
  if (state.ask.activeThreadId && currentThread()) {
    return currentThread();
  }
  const thread = makeThread(scope || { mode: "book", value: null, label: "Whole book" });
  state.ask.threads.unshift(thread);
  state.ask.activeThreadId = thread.id;
  persistThreads();
  return thread;
}

function makeThread(scope) {
  const id = `thread-${Date.now()}-${Math.random().toString(16).slice(2, 8)}`;
  return {
    id,
    title: "New search",
    updatedAt: new Date().toISOString(),
    scope: scope || { mode: "book", value: null, label: "Whole book" },
    messages: [],
  };
}

function currentThread() {
  return state.ask.threads.find((thread) => thread.id === state.ask.activeThreadId) || null;
}

function activeChapterSummary() {
  return state.config?.chapters.find((chapter) => chapter.id === state.currentChapterId) || null;
}

function chapterLabel(chapterId) {
  return state.config?.chapters.find((chapter) => chapter.id === chapterId)?.title || "Whole book";
}

function chapterSummary(chapterId) {
  return state.config?.chapters.find((chapter) => chapter.id === chapterId) || null;
}

async function ensureChapter(chapterId) {
  if (!chapterId) {
    return null;
  }
  if (!state.chapterCache[chapterId]) {
    state.chapterCache[chapterId] = await fetchJSON(`data/chapters/${encodeURIComponent(chapterId)}.json`);
  }
  return state.chapterCache[chapterId];
}

async function ensureGlossary() {
  if (!state.glossary) {
    const payload = await fetchJSON("data/glossary.json");
    state.glossary = payload.entries;
    state.activeGlossarySlug = state.glossary[0]?.slug || null;
  }
}

async function ensureIndex() {
  if (!state.indexEntries) {
    const payload = await fetchJSON("data/index.json");
    state.indexEntries = payload.entries;
    state.activeIndexId = state.indexEntries[0]?.id || null;
  }
}

async function openView(view) {
  state.currentView = view;
  if (view === "read" && state.currentChapterId) {
    await ensureChapter(state.currentChapterId);
  }
  if (view === "glossary") {
    await ensureGlossary();
  }
  if (view === "index") {
    await ensureIndex();
  }
  if (view === "ask") {
    ensureActiveThread();
  }
  render();
}

/* ---------- Retrieval (no server, no generation) ---------- */

function scopeDetails(scope) {
  const mode = String(scope?.mode || "book").trim().toLowerCase();
  const value = String(scope?.value || "").trim();

  if (mode === "chapter" && state.indicesByChapter.has(value)) {
    return {
      allowed: state.indicesByChapter.get(value),
      mode: "chapter",
      value,
      label: `Chapter: ${chapterLabel(value)}`,
      prose: "this chapter",
    };
  }

  if (mode === "passage" && state.indicesByPassage.has(value)) {
    const first = state.indicesByPassage.get(value).values().next().value;
    const anchor = state.chunks[first]?.anchor || value;
    return {
      allowed: state.indicesByPassage.get(value),
      mode: "passage",
      value,
      label: `Section: ${anchor}`,
      prose: "this section",
    };
  }

  return { allowed: null, mode: "book", value: null, label: "Whole book", prose: "the book" };
}

function sourcesFromResults(results) {
  const seen = new Set();
  const sources = [];
  for (const item of results) {
    const chunk = item.chunk;
    const key = chunk.passage_id || chunk.chunk_id;
    if (seen.has(key)) {
      continue;
    }
    seen.add(key);
    const path = String(chunk.anchor || "").split(" > ").filter(Boolean);
    sources.push({
      chunk_id: chunk.chunk_id,
      passage_id: chunk.passage_id,
      chapter_id: chunk.chapter_id,
      chapter_title: chunk.chapter_title,
      section_title: chunk.section_title,
      anchor: chunk.anchor,
      title: path[path.length - 1] || chunk.anchor,
      path,
      score: item.score,
      preview: snippet(chunk.text, 320),
    });
  }
  return sources;
}

function relatedChaptersForQuery(question) {
  const results = LLRetrieval.search(state.retrievalIndex, question, 12, null);
  const scores = new Map();
  for (const item of results) {
    const chunk = item.chunk;
    if (!chunk.chapter_id || chunk.chapter_title === "Glossary") {
      continue;
    }
    scores.set(chunk.chapter_id, (scores.get(chunk.chapter_id) || 0) + item.score);
  }
  return [...scores.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, 4)
    .map(([chapterId]) => chapterSummary(chapterId))
    .filter(Boolean);
}

function answerLocally(question, scope) {
  const details = scopeDetails(scope);
  const results = LLRetrieval.search(state.retrievalIndex, question, TOP_K, details.allowed);
  const sources = sourcesFromResults(results);
  const weakMatch = !results.length || results[0].score < WEAK_MATCH_THRESHOLD;
  return {
    sources,
    weakMatch,
    relatedChapters: weakMatch ? relatedChaptersForQuery(question) : [],
    scope: { mode: details.mode, value: details.value, label: details.label },
    scopeProse: details.prose,
  };
}

function makeAssistantMessage(answer) {
  return {
    id: `msg-${Date.now()}-${Math.random().toString(16).slice(2, 6)}`,
    role: "assistant",
    createdAt: new Date().toISOString(),
    sources: answer.sources,
    weakMatch: answer.weakMatch,
    relatedChapters: answer.relatedChapters,
    scopeProse: answer.scopeProse,
  };
}

function submitAsk(question, scopeOverride) {
  const thread = ensureActiveThread(scopeOverride || currentThread()?.scope);
  const text = question.trim();
  if (!text) {
    return;
  }
  if (scopeOverride) {
    thread.scope = scopeOverride;
  }

  const userMessage = {
    id: `msg-${Date.now()}-${Math.random().toString(16).slice(2, 6)}`,
    role: "user",
    content: text,
    createdAt: new Date().toISOString(),
  };
  thread.messages.push(userMessage);
  thread.updatedAt = userMessage.createdAt;
  if (thread.title === "New search") {
    thread.title = truncate(text, 64);
  }
  state.ask.draft = "";

  const answer = answerLocally(text, thread.scope || { mode: "book" });
  const assistantMessage = makeAssistantMessage(answer);
  thread.messages.push(assistantMessage);
  thread.updatedAt = assistantMessage.createdAt;
  thread.scope = answer.scope;
  state.ask.selectedMessageId = assistantMessage.id;
  persistThreads();
  render();
}

function submitReadGuide(question) {
  const text = question.trim();
  if (!text) {
    return;
  }
  state.read.messages.push({
    id: `guide-${Date.now()}-${Math.random().toString(16).slice(2, 6)}`,
    role: "user",
    content: text,
    createdAt: new Date().toISOString(),
  });
  state.read.draft = "";

  const answer = answerLocally(text, state.read.scope);
  const assistantMessage = makeAssistantMessage(answer);
  assistantMessage.id = `guide-${assistantMessage.id}`;
  state.read.messages.push(assistantMessage);
  state.read.selectedMessageId = assistantMessage.id;
  render();
}

/* ---------- Rendering ---------- */

function render() {
  renderNav();
  renderRuntime();
  renderView();
  renderModal();
  if (state.currentView === "read" && state.currentPassageId) {
    requestAnimationFrame(() => {
      const target = document.getElementById(`passage-${state.currentPassageId}`);
      target?.scrollIntoView({ block: "nearest" });
    });
  }
}

function renderNav() {
  const nav = document.getElementById("global-nav");
  nav.innerHTML = ["read", "ask", "contents", "glossary", "index"]
    .map((view) => {
      const label = view.charAt(0).toUpperCase() + view.slice(1);
      const active = state.currentView === view ? "active" : "";
      return `<button type="button" class="nav-link ${active}" data-action="nav" data-view="${view}">${label}</button>`;
    })
    .join("");
}

function renderRuntime() {
  const pill = document.getElementById("runtime-pill");
  if (!state.config) {
    pill.textContent = "Loading…";
    return;
  }
  pill.textContent = `${state.config.chapter_count} chapters · ${state.config.chunk_count} passages`;
}

function renderView() {
  const root = document.getElementById("view-root");
  if (!state.config) {
    root.innerHTML = `<section class="panel loading-panel"><p>Loading…</p></section>`;
    return;
  }

  switch (state.currentView) {
    case "read":
      root.innerHTML = renderReadView();
      break;
    case "ask":
      root.innerHTML = renderAskView();
      break;
    case "contents":
      root.innerHTML = renderContentsView();
      break;
    case "glossary":
      root.innerHTML = renderGlossaryView();
      break;
    case "index":
      root.innerHTML = renderIndexView();
      break;
    default:
      root.innerHTML = renderLandingView();
      break;
  }
}

function renderLandingView() {
  const source = state.config.landing_source;
  return `
    <section class="panel hero">
      <div class="landing-columns">
        <span class="eyebrow">A companion to the book</span>
        <h1>Read the book.<br>Search it.<br>Check the source.</h1>
        <p class="body-copy">
          The full text of <i>Language Landscapes</i>, readable chapter by chapter.
          Ask a question and the answer comes back as passages from the book,
          each with its place in the text. The glossary and subject index are here too.
        </p>
        <div class="hero-actions">
          <button class="primary-button" type="button" data-action="landing-start-read">Start reading</button>
          <button class="secondary-button" type="button" data-action="landing-start-ask">Search the book</button>
        </div>
      </div>
      <div class="hero-grid">
        <section class="hero-card">
          <div class="eyebrow">Try a question</div>
          <div class="prompt-grid">
            ${state.config.example_prompts.map((prompt) => `
              <button type="button" class="utility-chip" data-action="landing-prompt" data-question="${escapeAttr(prompt)}">${escapeHTML(prompt)}</button>
            `).join("")}
          </div>
        </section>
        <section class="hero-card">
          <div class="eyebrow">From the book</div>
          <h2 class="source-title">${escapeHTML(source.title)}</h2>
          <div class="source-meta">${escapeHTML(source.path.join(" > "))}</div>
          <p class="source-preview">${escapeHTML(source.preview)}</p>
          <div class="source-actions">
            <button type="button" class="secondary-button" data-action="open-source" data-chunk-id="${escapeAttr(source.chunk_id)}">Inspect source</button>
          </div>
        </section>
      </div>
    </section>
  `;
}

function renderContentsView() {
  return `
    <section class="panel hero">
      <span class="eyebrow">Contents</span>
      <h2 class="view-title">The structure of the book</h2>
      <div class="contents-grid">
        ${state.config.chapters.map((chapter) => `
          <article class="chapter-card">
            <div>
              <div class="chapter-meta">Chapter ${chapter.position} · ${chapter.minutes.toFixed(1)} min · ${chapter.section_count} sections</div>
              <h3 class="source-title">${escapeHTML(chapter.title)}</h3>
            </div>
            <p class="chapter-teaser">${escapeHTML(chapter.teaser || "")}</p>
            <div class="card-actions">
              <button type="button" class="primary-button" data-action="open-chapter" data-chapter-id="${chapter.id}">Read chapter</button>
              <button type="button" class="secondary-button" data-action="ask-chapter" data-chapter-id="${chapter.id}">Search this chapter</button>
            </div>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function renderReadView() {
  const chapterData = state.chapterCache[state.currentChapterId];
  if (!chapterData) {
    return `<section class="panel loading-panel"><p>Loading chapter…</p></section>`;
  }

  const chapter = chapterData.chapter;
  const passages = chapterData.passages;

  return `
    <section class="read-grid">
      <aside class="panel chapter-rail">
        <span class="eyebrow">Read</span>
        <div class="chapter-list">
          ${state.config.chapters.map((item) => `
            <button type="button" class="${item.id === chapter.id ? "active" : ""}" data-action="open-chapter" data-chapter-id="${item.id}">
              <div>${escapeHTML(item.title)}</div>
              <div class="chapter-meta">${item.minutes.toFixed(1)} min</div>
            </button>
          `).join("")}
        </div>
        <div class="reference-box">
          <div class="eyebrow">In this chapter</div>
          <div class="thread-list">
            ${chapter.toc_items.length ? chapter.toc_items.map((item) => `
              <button type="button" class="toc-jump ghost-chip" data-action="jump-passage" data-anchor="${escapeAttr(item.anchor)}">${escapeHTML(item.title)}</button>
            `).join("") : `<div class="status-note">This chapter has no subordinate section headings.</div>`}
          </div>
        </div>
      </aside>

      <section class="panel reader-panel">
        <header class="reader-header">
          <div>
            <div class="eyebrow">Chapter ${chapter.position}</div>
            <h2 class="chapter-title">${escapeHTML(chapter.title)}</h2>
            <div class="chapter-meta">${chapter.minutes.toFixed(1)} minutes · ${chapter.word_count.toLocaleString()} words</div>
          </div>
          <div class="inline-actions">
            <button type="button" class="utility-chip" data-action="nav" data-view="contents">Contents</button>
            <button type="button" class="utility-chip" data-action="nav" data-view="glossary">Glossary</button>
            <button type="button" class="utility-chip" data-action="nav" data-view="ask">Ask</button>
          </div>
        </header>

        <div class="reader-body">
          ${passages.map((passage) => `
            <article class="passage ${passage.block_type === "box" ? "box" : ""} ${passage.passage_id === state.currentPassageId ? "active" : ""}" id="passage-${passage.passage_id}">
              <div class="passage-kicker">${escapeHTML(passage.path.join(" > "))}</div>
              ${passage.block_type === "chapter" ? "" : `<h3 class="passage-heading">${escapeHTML(passage.heading || passage.anchor)}</h3>`}
              <div class="passage-text">${renderRichText(passage.text)}</div>
              <div class="card-actions passage-actions">
                <button type="button" class="ghost-chip" data-action="scope-passage" data-passage-id="${passage.passage_id}">Search near this section</button>
                <button type="button" class="ghost-chip" data-action="open-source" data-chunk-id="${passage.chunk_ids[0]}">Inspect source</button>
              </div>
            </article>
          `).join("")}
        </div>

        <section class="guide-drawer ${state.read.drawerOpen ? "open" : "collapsed"}">
          <div class="drawer-top">
            <div>
              <div class="eyebrow">Look it up</div>
              <div class="chapter-meta">Current scope: ${escapeHTML(state.read.scope.label || "Whole book")}</div>
            </div>
            <div class="inline-actions">
              <button type="button" class="ghost-chip" data-action="toggle-drawer">${state.read.drawerOpen ? "Collapse" : "Expand"}</button>
              <button type="button" class="ghost-chip" data-action="guide-to-ask">Continue in Ask</button>
            </div>
          </div>
          <div class="drawer-body">
            <div class="scope-row">
              ${renderReadScopeChips()}
            </div>
            <div class="drawer-messages">
              ${state.read.messages.length ? state.read.messages.map(renderMessageCard).join("") : `
                <div class="message assistant">
                  <div class="message-header">
                    <span class="message-role">From the book</span>
                    <span class="message-meta">Scoped to the current reading context</span>
                  </div>
                  <div class="message-body"><p>Ask about the current section, widen to the chapter, or search the whole book. Results are passages from the text.</p></div>
                </div>
              `}
            </div>
            <form id="read-form" class="composer">
              <textarea id="read-draft" class="drawer-input" placeholder="Ask about what you are reading right now.">${escapeHTML(state.read.draft)}</textarea>
              <div class="drawer-controls">
                <button type="submit" class="primary-button">Find passages</button>
                <button type="button" class="secondary-button" data-action="clear-read-guide">Clear</button>
              </div>
            </form>
          </div>
        </section>
      </section>
    </section>
  `;
}

function renderReadScopeChips() {
  const chapter = activeChapterSummary();
  const passage = currentChapterPassage();
  const options = [
    { mode: "chapter", value: chapter?.id, label: chapter?.title || "Chapter" },
    { mode: "book", value: null, label: "Whole book" },
  ];
  if (passage) {
    options.unshift({ mode: "passage", value: passage.passage_id, label: "This section" });
  }
  return options.map((option) => {
    const active = state.read.scope.mode === option.mode && String(state.read.scope.value || "") === String(option.value || "");
    return `<button type="button" class="scope-chip ${active ? "active" : ""}" data-action="set-read-scope" data-mode="${option.mode}" data-value="${escapeAttr(option.value || "")}">${escapeHTML(option.label)}</button>`;
  }).join("");
}

function renderAskView() {
  const thread = ensureActiveThread();
  const sources = selectedAskSources();
  return `
    <section class="ask-grid">
      <aside class="panel threads-panel">
        <div class="eyebrow">Ask</div>
        <div class="card-actions threads-actions">
          <button type="button" class="primary-button" data-action="new-thread">New search</button>
        </div>
        <div class="thread-list">
          ${state.ask.threads.map((item) => `
            <button type="button" class="thread-card ${item.id === thread.id ? "active" : ""}" data-action="activate-thread" data-thread-id="${item.id}">
              <div>${escapeHTML(item.title)}</div>
              <div class="thread-meta">${escapeHTML(item.scope?.label || "Whole book")} · ${formatTimestamp(item.updatedAt)}</div>
            </button>
          `).join("")}
        </div>
      </aside>

      <section class="panel conversation-panel">
        <header class="conversation-header">
          <div class="eyebrow">From the book</div>
          <h2 class="view-title">${escapeHTML(thread.title)}</h2>
          <div class="chapter-meta">Scope: ${escapeHTML(thread.scope?.label || "Whole book")}</div>
        </header>
        <div class="conversation-body">
          ${thread.messages.length ? thread.messages.map(renderMessageCard).join("") : `
            <div class="message assistant">
              <div class="message-header">
                <span class="message-role">From the book</span>
                <span class="message-meta">No searches yet</span>
              </div>
              <div class="message-body"><p>Ask a question and the closest passages in the book come back, each with its chapter and section. Nothing here is generated; every result is quoted from the text.</p></div>
            </div>
          `}
        </div>
        <form id="ask-form" class="composer">
          <textarea id="ask-draft" class="composer-input" placeholder="Ask a question about the book.">${escapeHTML(state.ask.draft)}</textarea>
          <div class="composer-row">
            <button type="submit" class="primary-button">Search the book</button>
            ${thread.scope?.mode !== "book" ? `<button type="button" class="secondary-button" data-action="clear-thread-scope">Widen to whole book</button>` : ""}
            <span class="status-note">Results are passages quoted from the book.</span>
          </div>
        </form>
      </section>

      <aside class="panel sources-panel">
        <div>
          <div class="eyebrow">Sources</div>
          <div class="chapter-meta">${sources.length ? "Passages behind the selected result." : "Sources appear here after a search."}</div>
        </div>
        <div class="sources-list">
          ${sources.length ? sources.map(renderSourceCard).join("") : `<div class="empty-state">No sources yet.</div>`}
        </div>
      </aside>
    </section>
  `;
}

function renderGlossaryView() {
  if (!state.glossary) {
    return `<section class="panel loading-panel"><p>Loading glossary…</p></section>`;
  }

  const filtered = state.glossary.filter((entry) => {
    if (!state.glossaryQuery.trim()) {
      return true;
    }
    const q = state.glossaryQuery.toLowerCase();
    return entry.term.toLowerCase().includes(q) || entry.definition.toLowerCase().includes(q);
  });
  const active = filtered.find((entry) => entry.slug === state.activeGlossarySlug) || filtered[0] || null;

  return `
    <section class="reference-grid">
      <aside class="panel reference-list-panel">
        <div class="reference-toolbar">
          <span class="eyebrow">Glossary</span>
        </div>
        <div class="reference-search-wrap">
          <input id="glossary-query" class="reference-search" type="search" placeholder="Search glossary terms" value="${escapeAttr(state.glossaryQuery)}">
        </div>
        <div class="reference-list">
          ${filtered.map((entry) => `
            <button type="button" class="reference-list-item ${active?.slug === entry.slug ? "active" : ""}" data-action="select-glossary" data-slug="${entry.slug}">
              <div>${escapeHTML(entry.term)}</div>
              <div class="thread-meta">${escapeHTML(entry.excerpt)}</div>
            </button>
          `).join("") || `<div class="empty-state">No glossary entries match that search.</div>`}
        </div>
      </aside>

      <section class="panel reference-detail-panel">
        ${active ? `
          <header class="reference-detail-header">
            <div class="eyebrow">Term</div>
            <h2 class="reference-term">${escapeHTML(active.term)}</h2>
          </header>
          <div class="reference-detail-body">
            <div class="reference-box">
              <div class="eyebrow">Book definition</div>
              <div class="reference-definition">${renderRichText(active.definition)}</div>
            </div>
            <div class="reference-box">
              <div class="eyebrow">Related chapters</div>
              <div class="card-actions related-actions">
                ${(active.related_chapters || []).length ? active.related_chapters.map((chapter) => `
                  <button type="button" class="utility-chip" data-action="open-chapter" data-chapter-id="${chapter.id}">${escapeHTML(chapter.title)}</button>
                `).join("") : `<div class="status-note">No related chapter hints.</div>`}
              </div>
            </div>
            <div class="card-actions">
              <button type="button" class="primary-button" data-action="ask-term" data-question="${escapeAttr(active.term)}">Find this term in the book</button>
            </div>
          </div>
        ` : `<div class="empty-state">Select a glossary term.</div>`}
      </section>
    </section>
  `;
}

function renderIndexView() {
  if (!state.indexEntries) {
    return `<section class="panel loading-panel"><p>Loading index…</p></section>`;
  }

  const filtered = state.indexEntries.filter((entry) => {
    if (!state.indexQuery.trim()) {
      return true;
    }
    const q = state.indexQuery.toLowerCase();
    return entry.path_display.toLowerCase().includes(q);
  }).slice(0, 240);

  const active = filtered.find((entry) => entry.id === state.activeIndexId) || filtered[0] || null;

  return `
    <section class="reference-grid">
      <aside class="panel reference-list-panel">
        <div class="reference-toolbar">
          <span class="eyebrow">Subject index</span>
        </div>
        <div class="reference-search-wrap">
          <input id="index-query" class="reference-search" type="search" placeholder="Search the index" value="${escapeAttr(state.indexQuery)}">
        </div>
        <div class="reference-list">
          ${filtered.map((entry) => `
            <button type="button" class="reference-list-item ${active?.id === entry.id ? "active" : ""}" data-action="select-index" data-index-id="${entry.id}">
              <div>${escapeHTML(entry.term)}</div>
              <div class="thread-meta">${escapeHTML(entry.path_display)}</div>
            </button>
          `).join("") || `<div class="empty-state">No index entries match that search.</div>`}
        </div>
      </aside>
      <section class="panel reference-detail-panel">
        ${active ? `
          <header class="reference-detail-header">
            <div class="eyebrow">Index entry</div>
            <h2 class="reference-term">${escapeHTML(active.term)}</h2>
            <div class="detail-meta">${escapeHTML(active.path_display)}</div>
          </header>
          <div class="reference-detail-body">
            <div class="reference-box">
              <div class="eyebrow">Cross-references</div>
              <div class="card-actions related-actions">
                ${active.see?.length ? active.see.map((item) => `<span class="utility-chip">See: ${escapeHTML(item)}</span>`).join("") : ""}
                ${active.seealso?.length ? active.seealso.map((item) => `<span class="ghost-chip">See also: ${escapeHTML(item)}</span>`).join("") : ""}
                ${!active.see?.length && !active.seealso?.length ? `<div class="status-note">No cross-reference on this entry.</div>` : ""}
              </div>
            </div>
            <div class="card-actions">
              <button type="button" class="primary-button" data-action="ask-term" data-question="${escapeAttr(active.term)}">Find this entry in the book</button>
            </div>
          </div>
        ` : `<div class="empty-state">Select an index entry.</div>`}
      </section>
    </section>
  `;
}

function renderMessageCard(message) {
  if (message.role === "user") {
    return `
      <article class="message user">
        <div class="message-header">
          <span class="message-role">You</span>
          <span class="message-meta">${formatTimestamp(message.createdAt)}</span>
        </div>
        <div class="message-body">${renderRichText(message.content || "")}</div>
      </article>
    `;
  }

  const sources = message.sources || [];
  const intro = sources.length
    ? `Closest passages in ${escapeHTML(message.scopeProse || "the book")}:`
    : `No close match in ${escapeHTML(message.scopeProse || "the book")}.`;

  return `
    <article class="message assistant">
      <div class="message-header">
        <span class="message-role">From the book</span>
        <span class="message-meta">${formatTimestamp(message.createdAt)}</span>
      </div>
      <div class="message-body"><p>${intro}</p></div>
      ${sources.map((source, index) => `
        <div class="hit">
          <div class="hit-kicker">[${index + 1}] ${escapeHTML(source.path.join(" > "))}</div>
          <p class="hit-text">${escapeHTML(source.preview)}</p>
          <div class="hit-actions">
            ${source.passage_id ? `<button type="button" class="cite-chip" data-action="open-passage" data-message-id="${message.id}" data-chapter-id="${escapeAttr(source.chapter_id)}" data-passage-id="${escapeAttr(source.passage_id)}" data-anchor="${escapeAttr(source.anchor)}">Open in Read</button>` : ""}
            <button type="button" class="cite-chip" data-action="select-message-source" data-message-id="${message.id}" data-chunk-id="${escapeAttr(source.chunk_id)}">Inspect source</button>
          </div>
        </div>
      `).join("")}
      ${message.weakMatch && message.relatedChapters?.length ? `
        <div class="citation-row">
          <span class="status-note">Chapters worth trying:</span>
          ${message.relatedChapters.map((chapter) => `
            <button type="button" class="ghost-chip" data-action="open-chapter" data-chapter-id="${chapter.id}">${escapeHTML(chapter.title)}</button>
          `).join("")}
        </div>
      ` : ""}
    </article>
  `;
}

function renderSourceCard(source) {
  return `
    <article class="source-card">
      <div class="eyebrow">${escapeHTML(source.path.join(" > "))}</div>
      <h3 class="source-title">${escapeHTML(source.title)}</h3>
      <div class="source-meta">${escapeHTML(source.chapter_title || "")}${typeof source.score === "number" ? ` · score ${source.score.toFixed(3)}` : ""}</div>
      <p class="source-preview">${escapeHTML(source.preview)}</p>
      <div class="source-actions">
        ${source.passage_id ? `<button type="button" class="secondary-button" data-action="open-passage" data-chapter-id="${escapeAttr(source.chapter_id)}" data-passage-id="${escapeAttr(source.passage_id)}" data-anchor="${escapeAttr(source.anchor)}">Open in Read</button>` : ""}
        <button type="button" class="ghost-chip" data-action="open-source" data-chunk-id="${escapeAttr(source.chunk_id)}">Inspect source</button>
      </div>
    </article>
  `;
}

function renderModal() {
  const root = document.getElementById("modal-root");
  if (!state.modalSource) {
    root.innerHTML = "";
    return;
  }
  const source = state.modalSource.source;
  const context = state.modalSource.context;
  root.innerHTML = `
    <div class="modal-backdrop">
      <section class="panel modal">
        <header class="modal-header">
          <div>
            <div class="eyebrow">Source inspector</div>
            <h2 class="modal-title">${escapeHTML(source.title)}</h2>
            <div class="detail-meta">${escapeHTML(source.path.join(" > "))}</div>
          </div>
          <div class="inline-actions">
            <button type="button" class="secondary-button" data-action="open-passage" data-chapter-id="${escapeAttr(source.chapter_id)}" data-passage-id="${escapeAttr(source.passage_id)}" data-anchor="${escapeAttr(source.anchor)}">Open in Read</button>
            <button type="button" class="ghost-chip" data-action="close-modal">Close</button>
          </div>
        </header>
        <div class="modal-body">
          <div class="modal-copy">
            <div class="detail-meta">${escapeHTML(source.source_path)} · ${escapeHTML(source.chunk_id)}</div>
            <div class="reference-box modal-box">
              <div class="eyebrow">Cited text</div>
              <div class="reference-definition">${renderRichText(source.selected_text)}</div>
            </div>
            <div class="reference-box modal-box">
              <div class="eyebrow">Full passage</div>
              <div class="reference-definition">${renderRichText(source.passage_text)}</div>
            </div>
          </div>
          <aside class="modal-side">
            <div class="reference-box">
              <div class="eyebrow">Location</div>
              <div class="detail-meta">${escapeHTML(source.chapter_title)}</div>
              <div class="detail-meta">${escapeHTML(source.block_type)}</div>
              <div class="detail-meta">Part ${source.chunk_position} of ${source.chunk_total}</div>
            </div>
            ${context.previous ? `
              <div class="context-card">
                <div class="eyebrow">Previous passage</div>
                <div>${escapeHTML(context.previous.title)}</div>
                <div class="thread-meta">${escapeHTML(context.previous.preview)}</div>
              </div>
            ` : ""}
            ${context.next ? `
              <div class="context-card">
                <div class="eyebrow">Next passage</div>
                <div>${escapeHTML(context.next.title)}</div>
                <div class="thread-meta">${escapeHTML(context.next.preview)}</div>
              </div>
            ` : ""}
          </aside>
        </div>
      </section>
    </div>
  `;
}

function selectedAskSources() {
  const thread = currentThread();
  if (!thread) {
    return [];
  }
  const selected = thread.messages.find((message) => message.id === state.ask.selectedMessageId && message.sources?.length);
  if (selected) {
    return selected.sources;
  }
  const fallback = [...thread.messages].reverse().find((message) => message.sources?.length);
  return fallback?.sources || [];
}

function currentChapterPassage() {
  const chapterData = state.chapterCache[state.currentChapterId];
  if (!chapterData) {
    return null;
  }
  return chapterData.passages.find((passage) => passage.passage_id === state.currentPassageId) || null;
}

/* ---------- Source inspector (client-side) ---------- */

async function openSource(chunkId) {
  const chunk = state.chunkById.get(chunkId);
  if (!chunk || !chunk.chapter_id || !chunk.passage_id) {
    return;
  }
  const chapterData = await ensureChapter(chunk.chapter_id);
  const passages = chapterData?.passages || [];
  const idx = passages.findIndex((passage) => passage.passage_id === chunk.passage_id);
  if (idx === -1) {
    return;
  }
  const passage = passages[idx];
  const previous = idx > 0 ? passages[idx - 1] : null;
  const next = idx + 1 < passages.length ? passages[idx + 1] : null;
  const position = passage.chunk_ids.indexOf(chunkId);

  state.modalSource = {
    source: {
      chunk_id: chunk.chunk_id,
      passage_id: passage.passage_id,
      chapter_id: chunk.chapter_id,
      chapter_title: passage.chapter_title,
      anchor: passage.anchor,
      title: passage.heading || passage.anchor,
      path: passage.path,
      source_path: passage.source_path,
      block_type: passage.block_type,
      selected_text: chunk.text,
      passage_text: passage.text,
      chunk_position: position === -1 ? 1 : position + 1,
      chunk_total: passage.chunk_ids.length,
    },
    context: {
      previous: previous
        ? {
            passage_id: previous.passage_id,
            anchor: previous.anchor,
            title: previous.heading || previous.anchor,
            preview: snippet(previous.text, 180),
          }
        : null,
      next: next
        ? {
            passage_id: next.passage_id,
            anchor: next.anchor,
            title: next.heading || next.anchor,
            preview: snippet(next.text, 180),
          }
        : null,
    },
  };
  renderModal();
}

async function openPassageInRead(chapterId, passageId, anchor) {
  if (!chapterId || !passageId) {
    return;
  }
  state.currentChapterId = chapterId;
  await ensureChapter(chapterId);
  state.currentPassageId = passageId;
  state.currentView = "read";
  state.modalSource = null;
  state.read.scope = {
    mode: "passage",
    value: passageId,
    label: `Section: ${anchor || passageId}`,
  };
  render();
}

/* ---------- Utilities ---------- */

function renderRichText(text) {
  return String(text)
    .split(/\n\s*\n/)
    .map((block) => `<p>${escapeHTML(block.trim()).replace(/\n/g, "<br>")}</p>`)
    .join("");
}

function snippet(text, limit) {
  const clean = String(text).replace(/\s+/g, " ").trim();
  if (clean.length <= limit) {
    return clean;
  }
  return `${clean.slice(0, limit - 1).trimEnd()}…`;
}

function truncate(text, limit) {
  if (text.length <= limit) {
    return text;
  }
  return `${text.slice(0, limit - 1).trimEnd()}…`;
}

function formatTimestamp(value) {
  if (!value) {
    return "";
  }
  const date = new Date(value);
  return date.toLocaleString(undefined, {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
}

function escapeHTML(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function escapeAttr(value) {
  return escapeHTML(value).replaceAll("'", "&#39;");
}

/* ---------- Event handling ---------- */

function handleInput(event) {
  const target = event.target;
  if (target.id === "ask-draft") {
    state.ask.draft = target.value;
  } else if (target.id === "read-draft") {
    state.read.draft = target.value;
  } else if (target.id === "glossary-query") {
    state.glossaryQuery = target.value;
    render();
    requestAnimationFrame(() => {
      const input = document.getElementById("glossary-query");
      input?.focus();
      input?.setSelectionRange(state.glossaryQuery.length, state.glossaryQuery.length);
    });
  } else if (target.id === "index-query") {
    state.indexQuery = target.value;
    render();
    requestAnimationFrame(() => {
      const input = document.getElementById("index-query");
      input?.focus();
      input?.setSelectionRange(state.indexQuery.length, state.indexQuery.length);
    });
  }
}

function handleSubmit(event) {
  event.preventDefault();
  if (event.target.id === "ask-form") {
    submitAsk(state.ask.draft);
  } else if (event.target.id === "read-form") {
    submitReadGuide(state.read.draft);
  }
}

async function handleClick(event) {
  const button = event.target.closest("[data-action]");
  if (!button) {
    return;
  }

  const action = button.dataset.action;

  if (action === "go-home") {
    state.currentView = "landing";
    render();
    return;
  }

  if (action === "nav") {
    await openView(button.dataset.view);
    return;
  }

  if (action === "landing-start-read") {
    await openView("read");
    return;
  }

  if (action === "landing-start-ask") {
    await openView("ask");
    return;
  }

  if (action === "landing-prompt") {
    await openView("ask");
    const scope = { mode: "book", value: null, label: "Whole book" };
    const thread = makeThread(scope);
    state.ask.threads.unshift(thread);
    state.ask.activeThreadId = thread.id;
    persistThreads();
    submitAsk(button.dataset.question, scope);
    return;
  }

  if (action === "open-chapter") {
    state.currentChapterId = button.dataset.chapterId;
    state.currentPassageId = null;
    await ensureChapter(state.currentChapterId);
    state.read.scope = {
      mode: "chapter",
      value: state.currentChapterId,
      label: chapterLabel(state.currentChapterId),
    };
    state.currentView = "read";
    state.modalSource = null;
    render();
    return;
  }

  if (action === "ask-chapter") {
    const chapterId = button.dataset.chapterId;
    const scope = { mode: "chapter", value: chapterId, label: `Chapter: ${chapterLabel(chapterId)}` };
    const thread = makeThread(scope);
    state.ask.threads.unshift(thread);
    state.ask.activeThreadId = thread.id;
    state.ask.selectedMessageId = null;
    persistThreads();
    await openView("ask");
    return;
  }

  if (action === "jump-passage") {
    const chapterData = state.chapterCache[state.currentChapterId];
    const passage = chapterData?.passages.find((item) => item.anchor === button.dataset.anchor);
    if (passage) {
      state.currentPassageId = passage.passage_id;
      state.read.scope = {
        mode: "passage",
        value: passage.passage_id,
        label: `Section: ${passage.anchor}`,
      };
      render();
    }
    return;
  }

  if (action === "scope-passage") {
    const chapterData = state.chapterCache[state.currentChapterId];
    const passage = chapterData?.passages.find((item) => item.passage_id === button.dataset.passageId);
    if (passage) {
      state.currentPassageId = passage.passage_id;
      state.read.scope = {
        mode: "passage",
        value: passage.passage_id,
        label: `Section: ${passage.anchor}`,
      };
      state.read.drawerOpen = true;
      render();
    }
    return;
  }

  if (action === "set-read-scope") {
    const mode = button.dataset.mode;
    if (mode === "book") {
      state.read.scope = { mode: "book", value: null, label: "Whole book" };
    } else if (mode === "chapter") {
      state.read.scope = {
        mode: "chapter",
        value: state.currentChapterId,
        label: chapterLabel(state.currentChapterId),
      };
    } else if (mode === "passage" && button.dataset.value) {
      const passage = currentChapterPassage() || state.chapterCache[state.currentChapterId]?.passages.find((item) => item.passage_id === button.dataset.value);
      if (passage) {
        state.currentPassageId = passage.passage_id;
        state.read.scope = {
          mode: "passage",
          value: passage.passage_id,
          label: `Section: ${passage.anchor}`,
        };
      }
    }
    render();
    return;
  }

  if (action === "toggle-drawer") {
    state.read.drawerOpen = !state.read.drawerOpen;
    render();
    return;
  }

  if (action === "clear-read-guide") {
    state.read.messages = [];
    state.read.selectedMessageId = null;
    render();
    return;
  }

  if (action === "guide-to-ask") {
    const scope = state.read.scope;
    const thread = makeThread(scope);
    thread.title = scope.mode === "passage" ? "Section follow-up" : scope.mode === "chapter" ? `About ${chapterLabel(scope.value)}` : "Reading follow-up";
    thread.messages = state.read.messages.map((message) => ({ ...message }));
    thread.updatedAt = new Date().toISOString();
    state.ask.threads.unshift(thread);
    state.ask.activeThreadId = thread.id;
    state.ask.selectedMessageId = [...thread.messages].reverse().find((message) => message.sources?.length)?.id || null;
    persistThreads();
    await openView("ask");
    return;
  }

  if (action === "new-thread") {
    const thread = makeThread({ mode: "book", value: null, label: "Whole book" });
    state.ask.threads.unshift(thread);
    state.ask.activeThreadId = thread.id;
    state.ask.selectedMessageId = null;
    persistThreads();
    render();
    return;
  }

  if (action === "activate-thread") {
    state.ask.activeThreadId = button.dataset.threadId;
    state.ask.selectedMessageId = null;
    persistThreads();
    render();
    return;
  }

  if (action === "clear-thread-scope") {
    const thread = ensureActiveThread();
    thread.scope = { mode: "book", value: null, label: "Whole book" };
    persistThreads();
    render();
    return;
  }

  if (action === "select-message-source") {
    const thread = currentThread();
    if (thread?.messages.some((message) => message.id === button.dataset.messageId)) {
      state.ask.selectedMessageId = button.dataset.messageId;
      render();
    } else {
      state.read.selectedMessageId = button.dataset.messageId;
      render();
    }
    await openSource(button.dataset.chunkId);
    return;
  }

  if (action === "open-source") {
    await openSource(button.dataset.chunkId);
    return;
  }

  if (action === "close-modal") {
    state.modalSource = null;
    renderModal();
    return;
  }

  if (action === "open-passage") {
    await openPassageInRead(button.dataset.chapterId, button.dataset.passageId, button.dataset.anchor);
    return;
  }

  if (action === "select-glossary") {
    state.activeGlossarySlug = button.dataset.slug;
    render();
    return;
  }

  if (action === "select-index") {
    state.activeIndexId = button.dataset.indexId;
    render();
    return;
  }

  if (action === "ask-term") {
    await openView("ask");
    const scope = { mode: "book", value: null, label: "Whole book" };
    const thread = makeThread(scope);
    state.ask.threads.unshift(thread);
    state.ask.activeThreadId = thread.id;
    persistThreads();
    submitAsk(button.dataset.question, scope);
  }
}
