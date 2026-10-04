import { EXERCISES, LEXICAL, PHRASAL, FUNCTIONS, SOURCE_NOTE } from './content.js';
import { clone, fresh, parents, leaves, roots, nodeText, migrateDraft, edit, fromTree, toTree, bracketed, check, layout } from './model.js';
import { registerTreeTools } from './webmcp.js';

const $ = (selector) => document.querySelector(selector);
const esc = (value) => String(value).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const catHTML = esc;
const catText = (value) => value;
const KEY = 'language-landscapes:tree-builder:v1';
const emptyDraft = (exercise) => ({ doc: fresh(exercise), undo: [], redo: [], hints: 0, worked: false });
let current = EXERCISES[0].id;
let canvasHeight = innerWidth <= 760 ? 520 : 660, resizing = null;
const drafts = Object.fromEntries(EXERCISES.map((exercise) => [exercise.id, emptyDraft(exercise)]));
let selection = [], armed = null, checked = null, highlighted = [], pointer = null, draggedAt = 0, storageOK = true;
let notice = 'Drag a word-category label onto a word to begin. You can also select a word and click a label.';
const exercise = () => EXERCISES.find((item) => item.id === current);
const draft = () => drafts[current];
const doc = () => draft().doc;
const fontScale = () => parseFloat(getComputedStyle(document.documentElement).fontSize) / 16;
let restored = false;
try {
  const saved = JSON.parse(localStorage.getItem(KEY) || 'null');
  if (saved?.version === 1) {
    if (Number.isInteger(saved.canvasHeight) && saved.canvasHeight >= 300 && saved.canvasHeight <= 1600) canvasHeight = saved.canvasHeight;
    if (EXERCISES.some((x) => x.id === saved.current)) current = saved.current;
    for (const ex of EXERCISES) {
      const value = saved.drafts?.[ex.id];
      if (!value) continue;
      try {
        const restoredDoc = migrateDraft(value.doc, ex);
        const history = (items) => (Array.isArray(items) ? items.slice(-60) : []).flatMap((item) => { try { return [migrateDraft(item, ex)]; } catch { return []; } });
        drafts[ex.id] = { doc: restoredDoc, undo: history(value.undo), redo: history(value.redo), hints: Math.min(ex.hints.length, Math.max(0, Number.isInteger(value.hints) ? value.hints : 0)), worked: value.worked === true };
        restored = true;
      } catch { notice = 'One saved tree couldn’t be restored. The other examples are still available.'; }
    }
  }
} catch { storageOK = false; }

function save() {
  try { localStorage.setItem(KEY, JSON.stringify({ version: 1, current, drafts, canvasHeight })); storageOK = true; $('#save-status').textContent = 'Drafts saved on this device'; }
  catch { storageOK = false; $('#save-status').textContent = 'Saving isn’t available. Export your tree before leaving.'; }
}
function announce(text, error = false) {
  notice = text; $('#instruction').textContent = text; $('#instruction').classList.toggle('error', error);
}
function clearMode() { armed = null; for (const b of document.querySelectorAll('.palette .armed')) b.classList.remove('armed'); }
function commit(result, options = {}) {
  if (JSON.stringify(result.doc) !== JSON.stringify(doc())) {
    draft().undo.push(clone(doc())); draft().undo = draft().undo.slice(-60); draft().redo = []; draft().doc = result.doc;
  }
  selection = result.selected || []; checked = null; highlighted = []; clearMode(); save(); render(); announce(result.message || 'Tree updated.');
  if (options.focus && selection.length === 1) $(`#node-${selection[0]}`)?.focus({ preventScroll: true });
}
function perform(operation, options) {
  try { commit(edit(doc(), exercise(), operation), options); return true; }
  catch (error) { announce(error.message, true); return false; }
}
function changeExample(id) {
  if (!EXERCISES.some((ex) => ex.id === id)) return;
  current = id; selection = []; clearMode(); checked = null; highlighted = []; save(); render();
  $('#tree-scroll').scrollTo(0, 0); announce('Build this example in any order. Your other trees are saved.');
}
function undo(redo = false) {
  const from = redo ? draft().redo : draft().undo, to = redo ? draft().undo : draft().redo;
  if (!from.length) return;
  to.push(clone(doc())); draft().doc = from.pop(); selection = []; checked = null; highlighted = []; clearMode(); save(); render(); announce(redo ? 'Change restored.' : 'Change undone.');
}
function svg(docValue, ex, { plain = false } = {}) {
  const l = layout(docValue);
  const category = (value, x, y) => `<text x="${x}" y="${y}" class="category">${esc(value || '?')}</text>`;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${l.width}" height="${l.height}" viewBox="0 0 ${l.width} ${l.height}" role="img" aria-label="Syntax tree for ${esc(ex.title)}"><title>Syntax tree for ${esc(ex.title)}</title><desc>${esc(bracketed(docValue, ex))}</desc><style>text{text-anchor:middle;fill:#1a1a1a;font-family:Georgia,serif}.function{font-family:Arial,sans-serif;font-size:15px}.category{font-size:26px}.word{font-size:25px;font-style:italic}line{stroke:#514637;stroke-width:1.3}</style>${plain ? '<rect width="100%" height="100%" fill="#fffdf8"/>' : ''}${l.edges.map(([a, b]) => `<line x1="${l.nodes[a].x}" y1="${l.nodes[a].y + 64}" x2="${l.nodes[b].x}" y2="${l.nodes[b].y}"/>`).join('')}${Object.values(docValue.nodes).map((n) => { const pos = l.nodes[n.id]; return `${n.function ? `<text class="function" x="${pos.x}" y="${pos.y + 20}">${esc(n.function)}:</text>` : ''}${category(n.category, pos.x, pos.y + (n.function ? 48 : 35))}${n.kind === 'lexical' ? `<line x1="${pos.x}" y1="${pos.y + 64}" x2="${pos.x}" y2="${l.wordY - 8}"/><text class="word" x="${pos.x}" y="${l.wordY + 25}">${esc(ex.words[n.word])}</text>` : ''}`; }).join('')}</svg>`;
}
function renderTree() {
  const l = layout(doc(), fontScale()), p = parents(doc()), tree = $('#tree');
  tree.style.width = `${l.width}px`; tree.style.height = `${l.height}px`;
  tree.innerHTML = `<svg width="${l.width}" height="${l.height}" aria-hidden="true">${l.edges.map(([a, b]) => `<line x1="${l.nodes[a].x}" y1="${l.nodes[a].y + l.nodes[a].height}" x2="${l.nodes[b].x}" y2="${l.nodes[b].y}" stroke="#73634f" stroke-width="1.3"/>`).join('')}${Object.values(doc().nodes).filter((n) => n.kind === 'lexical').map((n) => `<line x1="${l.nodes[n.id].x}" y1="${l.nodes[n.id].y + l.nodes[n.id].height}" x2="${l.nodes[n.id].x}" y2="${l.wordY - 4}" stroke="#73634f" stroke-width="1.3"/>`).join('')}</svg>` + Object.values(doc().nodes).map((n) => {
    const pos = l.nodes[n.id];
    const label = `${catText(n.category) || 'Unlabelled word'}${n.function ? `, ${n.function}` : p[n.id] ? ', function not set' : ', root'}, ${leaves(doc(), n.id).map((i) => exercise().words[i]).join(' ') || 'empty phrase'}`;
    return `<button type="button" id="node-${n.id}" class="tree-node ${selection.includes(n.id) ? 'selected' : ''} ${highlighted.includes(n.id) ? 'flagged' : ''}" style="left:${pos.x}px;top:${pos.y}px;width:${pos.width}px;height:${pos.height}px" data-node-id="${n.id}" data-target-id="${n.id}" data-drag-kind="branch" aria-label="${esc(label)}" aria-pressed="${selection.includes(n.id)}"><span class="function ${!n.function ? 'unknown' : ''}">${n.function ? `${esc(n.function)}:` : p[n.id] ? 'Function?' : ''}</span><span class="category ${!n.category ? 'unknown' : ''}">${n.category ? catHTML(n.category) : 'Category?'}</span></button>${n.kind === 'lexical' ? `<button type="button" class="tree-word" style="left:${pos.x}px;top:${l.wordY}px" data-node-id="${n.id}" data-target-id="${n.id}" data-drag-kind="branch" aria-label="Select the word ${esc(exercise().words[n.word])}">${esc(exercise().words[n.word])}</button>` : !n.children.length ? `<span class="empty-phrase" style="left:${pos.x}px;top:${pos.y + pos.height + 6}px">Drop a branch here</span>` : ''}`;
  }).join('');
  const count = roots(doc()).length;
  $('#branch-status').textContent = count === 1 ? 'One connected tree' : `${count} separate branches`;
  $('#worked').hidden = !draft().worked; $('#diagrams').classList.toggle('comparing', draft().worked);
  if (draft().worked) {
    const answer = fromTree(exercise().answer, exercise()), al = layout(answer);
    $('#answer').style.width = `${al.width * fontScale()}px`; $('#answer').innerHTML = svg(answer, exercise());
    $('#worked-explanation').textContent = exercise().explanation;
  }
}
function renderSelection() {
  const p = parents(doc());
  if (!selection.length) { $('#selection').innerHTML = '<h3>Selected branch</h3><p class="small">Select a node to change its category, choose a function, or move its branch.</p>'; return; }
  const only = selection.length === 1 ? doc().nodes[selection[0]] : null;
  $('#selection').innerHTML = `<h3>${selection.length === 1 ? 'Selected branch' : `${selection.length} branches selected`}</h3><p class="small">${selection.map((id) => esc(nodeText(doc(), id, exercise()))).join('<br>')}</p>${selection.length > 1 ? '<p class="small">Choose a phrase category to group these branches.</p>' : ''}<div class="selection-actions">${only ? '<button type="button" data-action="change-category">Change category</button>' : ''}<button type="button" data-action="move-selected">Move ${only ? 'branch' : 'branches'}</button><button type="button" data-action="detach-selected" ${selection.some((id) => p[id]) ? '' : 'disabled'}>Detach from parent</button></div>`;
}
function renderFeedback() {
  const el = $('#feedback'); el.hidden = !checked;
  if (checked) {
    if (checked.matches) el.innerHTML = `<h3>Your connections match the book’s analysis</h3><p>${esc(exercise().explanation)}</p><p class="small">Try explaining a branch by naming its category, its function, and its parent.</p>`;
    else {
      const inconsistent = checked.inconsistencies.length > 0;
      const issues = inconsistent ? checked.inconsistencies : checked.structural.length ? checked.structural : checked.analytical;
      el.innerHTML = `<h3>${inconsistent ? 'These labels are inconsistent' : checked.structural.length ? 'Complete the structure' : 'Compare these relationships'}</h3>${inconsistent ? '' : `<p class="small">${checked.structural.length ? 'Start with these connections, then check again.' : 'The tree is connected and labelled. Consider what these phrases do in their parents.'}</p>`}<ul>${issues.slice(0, 4).map((item, i) => `<li>${esc(item.text)} <button type="button" class="text-button" data-issue="${i}">Locate</button></li>`).join('')}</ul>`;
    }
  }
  $('#hint-panel').hidden = !draft().hints;
  $('#hint-panel').innerHTML = draft().hints ? `<h3>A question to work with</h3>${exercise().hints.slice(0, draft().hints).map((hint) => `<p>${esc(hint)}</p>`).join('')}` : '';
  $('#hint').textContent = draft().hints === 0 ? 'Give me a hint' : draft().hints < exercise().hints.length ? 'Another hint' : 'Hints shown';
  $('#hint').disabled = draft().hints >= exercise().hints.length;
}
function render() {
  const active = document.activeElement?.id;
  selection = selection.filter((id) => doc().nodes[id]);
  $('#examples').innerHTML = EXERCISES.map((ex, i) => `<button type="button" data-example="${ex.id}" ${ex.id === current ? 'aria-current="page"' : ''}><span class="number">0${i + 1}</span><i>${esc(ex.title)}</i></button>`).join('');
  $('#sentence').textContent = exercise().title; $('#exercise-focus').textContent = exercise().focus;
  $('#undo').disabled = !draft().undo.length; $('#redo').disabled = !draft().redo.length;
  $('#clear-selection').disabled = !selection.length && !armed;
  $('#remove-grouping').disabled = selection.length !== 1 || doc().nodes[selection[0]]?.kind !== 'phrase';
  renderTree(); renderSelection(); renderFeedback();
  if (active?.startsWith('node-')) document.getElementById(active)?.focus({ preventScroll: true });
}
function selectNode(id, event = {}) {
  if (armed?.type === 'move') { const operation = { type: 'move', ids: [...armed.ids], parent: id }; perform(operation, { focus: true }); return; }
  if (armed?.type === 'category' || armed?.type === 'function') { perform({ ...armed, ids: [id] }, { focus: true }); return; }
  if ($('#multi-select').checked || event.shiftKey) selection = selection.includes(id) ? selection.filter((x) => x !== id) : [...selection, id];
  else selection = selection.length === 1 && selection[0] === id ? [] : [id];
  highlighted = []; render();
  if (selection.length > 1) announce('Choose a phrase category to group the selected neighbouring branches.');
  else if (selection.length) announce(`${nodeText(doc(), id, exercise())} selected. Use the tools to label or move it.`);
  else announce('Nothing selected. Choose a phrase category to add an empty node.');
}
function paletteClick(kind, value, button) {
  clearMode();
  if (kind === 'phrase') perform({ type: 'group', ids: [...selection], category: value }, { focus: true });
  else if (selection.length && (kind === 'function' || selection.every((id) => doc().nodes[id].kind === 'lexical'))) perform({ type: kind === 'lexical' ? 'category' : 'function', ids: [...selection], [kind === 'lexical' ? 'category' : 'function']: value });
  else {
    selection = []; armed = { type: kind === 'lexical' ? 'category' : 'function', [kind === 'lexical' ? 'category' : 'function']: value };
    render(); button.classList.add('armed'); announce(`Now choose ${kind === 'lexical' ? 'a word to label' : 'an attached branch to label'} ${catText(value)}.`);
  }
}
for (const [selector, list, kind] of [['#lexical-palette', LEXICAL, 'lexical'], ['#phrase-palette', PHRASAL, 'phrase'], ['#function-palette', FUNCTIONS, 'function']]) {
  $(selector).innerHTML = list.map(([id, label]) => `<button type="button" data-palette="${kind}" data-value="${id}" data-drag-kind="${kind}" title="${esc(label)}" aria-label="${esc(label)} (${id})">${catHTML(id)}</button>`).join('');
}
$('#source-note').textContent = SOURCE_NOTE;
if (matchMedia('(max-width:760px)').matches) $('#toolbox').open = false;

document.addEventListener('click', (event) => {
  if (Date.now() - draggedAt < 250) { event.preventDefault(); return; }
  const target = event.target.closest('button'); if (!target) return;
  if (target.dataset.example) { changeExample(target.dataset.example); return; }
  if (target.dataset.nodeId) { selectNode(target.dataset.nodeId, event); return; }
  if (target.dataset.palette) { paletteClick(target.dataset.palette, target.dataset.value, target); return; }
  if (target.dataset.categoryChoice) {
    if (perform({ type: 'category', ids: [...selection], category: target.dataset.categoryChoice })) $('#category-dialog').close();
    return;
  }
  if (target.dataset.issue !== undefined && checked) {
    const list = checked.inconsistencies.length ? checked.inconsistencies : checked.structural.length ? checked.structural : checked.analytical;
    highlighted = list[Number(target.dataset.issue)]?.ids || []; renderTree();
    $(`#node-${highlighted[0]}`)?.scrollIntoView({ block: 'nearest', inline: 'center' }); $(`#node-${highlighted[0]}`)?.focus({ preventScroll: true }); return;
  }
  switch (target.dataset.action || target.id) {
    case 'undo': undo(); break;
    case 'redo': undo(true); break;
    case 'clear-selection': selection = []; clearMode(); render(); announce('Selection cleared. Choose a phrase category to add an empty node.'); break;
    case 'change-category': {
      const n = doc().nodes[selection[0]]; if (!n) break;
      $('#category-choices').innerHTML = (n.kind === 'lexical' ? LEXICAL : PHRASAL).map(([id, label]) => `<button type="button" data-category-choice="${id}" aria-label="${esc(label)} (${id})">${catHTML(id)}</button>`).join('');
      $('#category-dialog').showModal(); break;
    }
    case 'move-selected': armed = { type: 'move', ids: [...selection] }; announce('Choose a phrase or clause node as the new parent. Escape cancels.'); $('#toolbox').open = true; break;
    case 'detach-selected': perform({ type: 'detach', ids: [...selection] }); break;
    case 'ungroup': perform({ type: 'ungroup', id: selection[0] }); break;
    case 'instructions-open': $('#instructions-dialog').showModal(); break;
    case 'reset-open': $('#reset-dialog').showModal(); break;
    case 'reset-cancel': $('#reset-dialog').close(); break;
    case 'reset-confirm': draft().hints = 0; draft().worked = false; $('#reset-dialog').close(); commit({ doc: fresh(exercise()), selected: [], message: 'This example is ready to build again. You can undo the reset.' }); break;
    case 'check': checked = check(doc(), exercise()); highlighted = []; renderFeedback(); announce(checked.matches ? 'Your connections match the book. See the explanation below the tree.' : 'Feedback is below the tree. Locate a connection to inspect it.'); break;
    case 'hint': draft().hints = Math.min(draft().hints + 1, exercise().hints.length); save(); renderFeedback(); break;
    case 'show-worked': draft().worked = true; save(); renderTree(); announce('Your tree is retained. Compare it with the book’s analysis.'); break;
    case 'hide-worked': draft().worked = false; save(); renderTree(); break;
    case 'fit-height': setCanvasHeight(Math.max(layout(doc(), fontScale()).height, draft().worked ? layout(fromTree(exercise().answer, exercise()), fontScale()).height : 0) + 12); save(); announce('Workspace height fitted to the current tree.'); break;
    case 'export-svg': downloadSVG(); break;
    case 'copy-brackets': copyBrackets(); break;
  }
});
$('#multi-select').addEventListener('change', () => announce($('#multi-select').checked ? 'Select neighbouring nodes, then choose a phrase category to group them.' : 'Group selection is off. You can still shift-click to select more than one node.'));
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && !document.querySelector('dialog[open]')) { clearMode(); selection = []; render(); announce('Selection and pending move cancelled.'); }
  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'z' && !event.target.closest('textarea, dialog')) { event.preventDefault(); undo(event.shiftKey); }
});

function payloadFor(element) {
  const kind = element.dataset.dragKind;
  if (kind === 'branch') return { kind, ids: selection.includes(element.dataset.nodeId) ? [...selection] : [element.dataset.nodeId] };
  return { kind, value: element.dataset.value };
}
function dropOperation(payload, targetId, canvas) {
  if (payload.kind === 'branch') {
    if (targetId) return { type: 'move', ids: payload.ids, parent: targetId };
    if (canvas) return { type: 'detach', ids: payload.ids };
  }
  if (payload.kind === 'phrase') {
    if (targetId) return { type: 'group', category: payload.value, ids: selection.includes(targetId) ? [...selection] : [targetId] };
    if (canvas) return { type: 'group', category: payload.value, ids: [] };
  }
  if (targetId && (payload.kind === 'lexical' || payload.kind === 'function')) return { type: payload.kind === 'lexical' ? 'category' : 'function', ids: selection.includes(targetId) ? [...selection] : [targetId], [payload.kind === 'lexical' ? 'category' : 'function']: payload.value };
  throw new Error('Drop on a node in your tree.');
}
function previewDrop(event) {
  for (const item of document.querySelectorAll('.drop-valid,.drop-invalid')) item.classList.remove('drop-valid', 'drop-invalid');
  const element = document.elementFromPoint(event.clientX, event.clientY);
  const target = element?.closest('#tree [data-target-id]'), canvas = element?.closest('#tree-scroll');
  let operation, message, valid = false;
  try {
    operation = dropOperation(pointer.payload, target?.dataset.targetId, Boolean(canvas));
    edit(doc(), exercise(), operation); valid = true;
    message = operation.type === 'move' ? `Attach to ${doc().nodes[operation.parent].category}` : operation.type === 'detach' ? 'Detach this branch' : operation.type === 'group' ? (operation.ids.length ? `Group under ${operation.category}` : `Add ${operation.category}`) : `Set ${operation.category || operation.function}`;
  } catch (error) { message = error.message; }
  (target || canvas)?.classList.add(valid ? 'drop-valid' : 'drop-invalid');
  pointer.drop = { operation, valid, message };
  const ghost = $('#drag-ghost'); ghost.textContent = message;
  ghost.style.left = `${Math.max(8, Math.min(innerWidth - 290, event.clientX + 16))}px`; ghost.style.top = `${Math.max(8, Math.min(innerHeight - 80, event.clientY + 14))}px`;
  if (canvas) {
    const rect = canvas.getBoundingClientRect();
    if (event.clientX > rect.right - 32) canvas.scrollLeft += 18;
    if (event.clientX < rect.left + 32) canvas.scrollLeft -= 18;
    if (event.clientY > rect.bottom - 30) canvas.scrollTop += 16;
    if (event.clientY < rect.top + 30) canvas.scrollTop -= 16;
  }
  if (event.clientY > innerHeight - 30) window.scrollBy(0, 14);
  if (event.clientY < 30) window.scrollBy(0, -14);
}
document.addEventListener('pointerdown', (event) => {
  if (event.button !== 0 || document.querySelector('dialog[open]')) return;
  const element = event.target.closest('[data-drag-kind]'); if (!element) return;
  pointer = { id: event.pointerId, x: event.clientX, y: event.clientY, element, payload: payloadFor(element), active: false };
});
document.addEventListener('pointermove', (event) => {
  if (!pointer || pointer.id !== event.pointerId) return;
  if (!pointer.active && Math.hypot(event.clientX - pointer.x, event.clientY - pointer.y) < 7) return;
  if (!pointer.active) { pointer.active = true; pointer.element.setPointerCapture?.(event.pointerId); document.body.classList.add('dragging'); $('#drag-ghost').hidden = false; }
  event.preventDefault(); previewDrop(event);
}, { passive: false });
function finishDrag(event, cancel = false) {
  if (!pointer || pointer.id !== event.pointerId) return;
  const old = pointer;
  if (old.active) {
    event.preventDefault(); draggedAt = Date.now();
    if (!cancel) previewDrop(event);
    pointer = null; $('#drag-ghost').hidden = true; document.body.classList.remove('dragging');
    for (const item of document.querySelectorAll('.drop-valid,.drop-invalid')) item.classList.remove('drop-valid', 'drop-invalid');
    try { old.element.releasePointerCapture?.(event.pointerId); } catch { /* The element may already have lost capture. */ }
    if (!cancel && old.drop?.valid) perform(old.drop.operation);
    else announce(cancel ? 'Drag cancelled.' : old.drop?.message || 'Drop on a node in your tree.', !cancel);
  } else pointer = null;
}
document.addEventListener('pointerup', (event) => finishDrag(event));
document.addEventListener('pointercancel', (event) => finishDrag(event, true));

function setCanvasHeight(value) {
  canvasHeight = Math.max(300, Math.min(1600, Math.round(value)));
  document.documentElement.style.setProperty('--canvas-height', `${canvasHeight}px`);
  $('#canvas-resizer').setAttribute('aria-valuenow', String(canvasHeight));
}
$('#canvas-resizer').addEventListener('pointerdown', (event) => {
  if (event.button !== 0) return;
  event.preventDefault(); event.currentTarget.focus({ preventScroll: true }); event.currentTarget.setPointerCapture(event.pointerId);
  resizing = { id: event.pointerId, y: event.clientY, height: canvasHeight }; document.body.classList.add('resizing');
});
document.addEventListener('pointermove', (event) => {
  if (!resizing || resizing.id !== event.pointerId) return;
  event.preventDefault(); setCanvasHeight(resizing.height + event.clientY - resizing.y);
}, { passive: false });
function finishResize(event) {
  if (!resizing || resizing.id !== event.pointerId) return;
  resizing = null; document.body.classList.remove('resizing');
  try { $('#canvas-resizer').releasePointerCapture(event.pointerId); } catch { /* Pointer capture may already be released. */ }
  save();
}
document.addEventListener('pointerup', finishResize); document.addEventListener('pointercancel', finishResize);
$('#canvas-resizer').addEventListener('keydown', (event) => {
  if (!['ArrowUp', 'ArrowDown', 'Home', 'End'].includes(event.key)) return;
  event.preventDefault(); setCanvasHeight(event.key === 'Home' ? 300 : event.key === 'End' ? 1600 : canvasHeight + (event.key === 'ArrowDown' ? 24 : -24)); save();
});
setCanvasHeight(canvasHeight);

function downloadSVG() {
  const blob = new Blob([svg(doc(), exercise(), { plain: true })], { type: 'image/svg+xml;charset=utf-8' });
  const url = URL.createObjectURL(blob), a = document.createElement('a'); a.href = url; a.download = `${current}-tree.svg`; document.body.append(a); a.click(); a.remove(); setTimeout(() => URL.revokeObjectURL(url), 1000);
  $('#export-status').textContent = 'SVG prepared from your current tree.';
}
async function copyBrackets() {
  const text = bracketed(doc(), exercise());
  try { await navigator.clipboard.writeText(text); $('#export-status').textContent = 'Bracketed tree copied.'; }
  catch { $('#copy-text').value = text; $('#copy-dialog').showModal(); $('#copy-text').focus(); $('#copy-text').select(); }
}

render();
announce(notice);
$('#save-status').textContent = !storageOK ? 'Saving isn’t available. Export your tree before leaving.' : restored ? 'Saved drafts restored' : 'Your drafts stay on this device';
let lastFontScale = fontScale();
new ResizeObserver(() => { const scale = fontScale(); if (scale !== lastFontScale) { lastFontScale = scale; renderTree(); } }).observe(document.documentElement);

function readWorkspace() {
  return { example: current, words: exercise().words, trees: toTree(doc()), bracketed: bracketed(doc(), exercise()), feedback: checked, workedTreeVisible: draft().worked, ...(draft().worked ? { workedTree: exercise().answer, explanation: exercise().explanation } : {}), examples: EXERCISES.map(({ id, title, words }) => ({ id, title, words })), categories: { lexical: LEXICAL, phrasal: PHRASAL }, functions: FUNCTIONS };
}
registerTreeTools({
  read: readWorkspace,
  save: ({ example, trees }) => {
    const ex = EXERCISES.find((item) => item.id === example);
    const next = fromTree(trees, ex); // Validate fully before changing the example or its draft.
    current = example; commit({ doc: next, selected: [], message: 'Tree saved. Check the connections when you’re ready.' });
    return readWorkspace();
  },
  check: () => { checked = check(doc(), exercise()); renderFeedback(); return { example: current, ...checked }; },
  show: () => { draft().worked = true; save(); renderTree(); return readWorkspace(); }
});
