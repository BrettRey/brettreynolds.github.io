import { LEXICAL, PHRASAL, FUNCTIONS } from './content.js';

export const clone = (value) => JSON.parse(JSON.stringify(value));
const categoryAlias = (value) => value === 'Npro' ? 'N' : value === 'Vaux' ? 'V' : value;
export function migrateDraft(value, exercise) {
  const doc = clone(value);
  for (const node of Object.values(doc?.nodes || {})) {
    if (node?.kind === 'lexical') node.category = categoryAlias(node.category);
  }
  return validate(doc, exercise);
}
const lexical = LEXICAL.map(([id]) => id), phrasal = PHRASAL.map(([id]) => id), functions = FUNCTIONS.map(([id]) => id);
const requireThat = (condition, message) => { if (!condition) throw new Error(message); };
export function fresh(exercise) {
  return { nextId: exercise.words.length, nodes: Object.fromEntries(exercise.words.map((_, i) => [`n${i}`, { id: `n${i}`, kind: 'lexical', word: i, category: '', function: '', children: [] }])) };
}
export function parents(doc) {
  const map = {};
  for (const n of Object.values(doc.nodes)) for (const child of n.children) map[child] = n.id;
  return map;
}
export function leaves(doc, id) {
  const n = doc.nodes[id];
  return n.kind === 'lexical' ? [n.word] : n.children.flatMap((child) => leaves(doc, child));
}
const firstWord = (doc, id) => Math.min(...leaves(doc, id));
export function ordered(doc, ids) { return [...ids].sort((a, b) => firstWord(doc, a) - firstWord(doc, b) || Number(a.slice(1)) - Number(b.slice(1))); }
export function roots(doc) { const p = parents(doc); return ordered(doc, Object.keys(doc.nodes).filter((id) => !p[id])); }
export function nodeText(doc, id, exercise) {
  const n = doc.nodes[id], words = leaves(doc, id).map((i) => exercise.words[i]).join(' ');
  return `${n.category || 'Unlabelled word'}${words ? ` · ${words}` : ' · empty phrase'}`;
}
export function validate(doc, exercise) {
  requireThat(doc && typeof doc === 'object' && doc.nodes && typeof doc.nodes === 'object' && !Array.isArray(doc.nodes), 'Invalid tree record.');
  const ids = Object.keys(doc.nodes);
  requireThat(ids.length >= exercise.words.length && ids.length <= 100, 'A tree can contain at most 100 nodes.');
  requireThat(Number.isInteger(doc.nextId) && doc.nextId >= 0 && doc.nextId <= 1000000, 'Invalid node counter.');
  const p = {}, seenWords = [];
  for (const id of ids) {
    const n = doc.nodes[id];
    requireThat(/^n\d+$/.test(id) && n.id === id && Number(id.slice(1)) < doc.nextId, 'Invalid node identity.');
    requireThat(['lexical', 'phrase'].includes(n.kind) && Array.isArray(n.children), 'Invalid node type.');
    requireThat((n.kind === 'lexical' ? ['', ...lexical] : phrasal).includes(n.category), 'Choose a category from the palette.');
    requireThat(['', ...functions].includes(n.function), 'Choose a function from the palette.');
    if (n.kind === 'lexical') {
      requireThat(Number.isInteger(n.word) && n.word >= 0 && n.word < exercise.words.length && n.children.length === 0, 'Each lexical node belongs to one supplied word.');
      seenWords.push(n.word);
    }
    for (const child of n.children) {
      requireThat(ids.includes(child) && !p[child], 'A branch can have only one parent.');
      p[child] = id;
    }
  }
  requireThat(new Set(seenWords).size === exercise.words.length && seenWords.length === exercise.words.length, 'Keep every supplied word exactly once.');
  const visiting = new Set(), visited = new Set();
  function visit(id) {
    requireThat(!visiting.has(id), 'A branch can’t be attached inside itself.');
    if (visited.has(id)) return;
    visiting.add(id); for (const child of doc.nodes[id].children) visit(child); visiting.delete(id); visited.add(id);
  }
  ids.forEach(visit);
  for (const id of ids) {
    const n = doc.nodes[id];
    requireThat(p[id] || !n.function, 'A root has no function because it has no parent.');
    const span = leaves(doc, id);
    requireThat(span.every((v, i) => i === 0 || v === span[i - 1] + 1), 'That would skip or reorder words. Include the intervening branch first.');
  }
  return doc;
}
function removeFromParent(doc, id) {
  const p = parents(doc)[id];
  if (p) doc.nodes[p].children = doc.nodes[p].children.filter((child) => child !== id);
  doc.nodes[id].function = '';
}
function get(doc, id) { requireThat(typeof id === 'string' && doc.nodes[id], 'Choose an existing node.'); return doc.nodes[id]; }
function selected(doc, ids) { requireThat(Array.isArray(ids) && ids.length && new Set(ids).size === ids.length, 'Select one or more branches.'); ids.forEach((id) => get(doc, id)); return ids; }
// All edits return a new document. Invalid edits leave the original untouched.
export function edit(original, exercise, operation) {
  const doc = clone(original); let selectedIds = [], message = '';
  requireThat(operation && typeof operation === 'object', 'Choose a tree operation.');
  const ids = operation.ids;
  switch (operation.type) {
    case 'category': {
      selected(doc, ids);
      for (const id of ids) {
        const n = get(doc, id);
        requireThat((n.kind === 'lexical' ? lexical : phrasal).includes(operation.category), 'That category belongs on a different kind of node.');
        n.category = operation.category;
      }
      selectedIds = ids; message = 'Category updated.'; break;
    }
    case 'function': {
      selected(doc, ids); const p = parents(doc);
      requireThat(functions.includes(operation.function), 'Choose a function from the palette.');
      for (const id of ids) { requireThat(p[id], 'Attach this branch to a parent before giving it a function.'); doc.nodes[id].function = operation.function; }
      selectedIds = ids; message = 'Function updated.'; break;
    }
    case 'group': {
      requireThat(phrasal.includes(operation.category), 'Choose a phrase or clause category.');
      requireThat(Array.isArray(ids), 'Choose branches to group, or add an empty phrase.');
      if (ids.length) selected(doc, ids);
      const p = parents(doc), parent = ids.length ? p[ids[0]] : undefined;
      requireThat(ids.every((id) => p[id] === parent), 'To group branches, select siblings that share a parent, or separate roots.');
      const siblings = parent ? doc.nodes[parent].children : roots(doc);
      const positions = ids.map((id) => siblings.indexOf(id)).sort((a, b) => a - b);
      requireThat(positions.every((v, i) => !i || v === positions[i - 1] + 1), 'Select neighbouring branches to group.');
      const id = `n${doc.nextId++}`;
      const func = ids.length === 1 ? doc.nodes[ids[0]].function : '';
      doc.nodes[id] = { id, kind: 'phrase', category: operation.category, function: parent ? func : '', children: ordered(doc, ids) };
      for (const child of ids) doc.nodes[child].function = '';
      if (parent) doc.nodes[parent].children = ordered(doc, [...doc.nodes[parent].children.filter((child) => !ids.includes(child)), id]);
      selectedIds = [id]; message = ids.length ? `${operation.category} created. Choose the children’s functions in their new parent.` : `${operation.category} added. Attach branches beneath it.`; break;
    }
    case 'move': {
      selected(doc, ids); const target = get(doc, operation.parent);
      requireThat(target.kind === 'phrase', 'Attach a branch to a phrase or clause node.');
      const p = parents(doc);
      for (const id of ids) {
        let ancestor = target.id;
        while (ancestor) { requireThat(ancestor !== id, 'A branch can’t be attached inside itself.'); ancestor = p[ancestor]; }
        requireThat(!ids.some((other) => other !== id && isAncestor(doc, other, id)), 'Move the whole branch without also selecting its descendants.');
      }
      for (const id of ids) { if (p[id] !== target.id) { removeFromParent(doc, id); target.children.push(id); } }
      target.children = ordered(doc, target.children);
      selectedIds = ids; message = 'Branch attached. Choose its function in the new parent.'; break;
    }
    case 'detach': {
      selected(doc, ids);
      for (const id of ids) removeFromParent(doc, id);
      selectedIds = ids; message = 'Branch detached. It has no function until attached again.'; break;
    }
    case 'ungroup': {
      const n = get(doc, operation.id);
      requireThat(n.kind === 'phrase', 'A word stays in the exercise. You can change its category.');
      const p = parents(doc)[n.id];
      if (p) doc.nodes[p].children = ordered(doc, [...doc.nodes[p].children.filter((id) => id !== n.id), ...n.children]);
      for (const child of n.children) doc.nodes[child].function = '';
      selectedIds = [...n.children]; delete doc.nodes[n.id]; message = 'Grouping removed; its words and branches are retained.'; break;
    }
    default: throw new Error('Unknown tree operation.');
  }
  validate(doc, exercise);
  requireThat(Object.keys(doc.nodes).length <= 100, 'This exercise has reached its node limit. Remove an unused grouping.');
  return { doc, selected: selectedIds, message };
}
function isAncestor(doc, ancestor, id) { const p = parents(doc); let next = p[id]; while (next) { if (next === ancestor) return true; next = p[next]; } return false; }
export function fromTree(tree, exercise) {
  const doc = { nextId: 0, nodes: {} };
  function add(item, root = false, depth = 0) {
    requireThat(item && typeof item === 'object' && depth < 25 && doc.nextId < 100, 'Invalid tree shape.');
    requireThat(!root || item.function === '', 'A root must have an empty function label.');
    const id = `n${doc.nextId++}`;
    const n = { id, kind: item.kind, category: item.kind === 'lexical' ? categoryAlias(item.category) : item.category, function: root ? '' : item.function, children: [] };
    doc.nodes[id] = n;
    if (item.kind === 'lexical') n.word = item.word;
    else { requireThat(Array.isArray(item.children), 'Phrase nodes need a children array.'); n.children = item.children.map((child) => add(child, false, depth + 1)); }
    return id;
  }
  requireThat(Array.isArray(tree) ? tree.length > 0 : Boolean(tree), 'Supply a tree or a forest of trees.');
  (Array.isArray(tree) ? tree : [tree]).forEach((item) => add(item, true));
  return validate(doc, exercise);
}
export function toTree(doc) {
  function build(id) { const n = doc.nodes[id]; return n.kind === 'lexical' ? { kind: n.kind, category: n.category, function: n.function, word: n.word } : { kind: n.kind, category: n.category, function: n.function, children: ordered(doc, n.children).map(build) }; }
  return roots(doc).map(build);
}
export function bracketed(doc, exercise) {
  function build(id) { const n = doc.nodes[id], label = `${n.function ? `${n.function}:` : ''}${n.category || '?'}`; return `[${label} ${n.kind === 'lexical' ? exercise.words[n.word] : ordered(doc, n.children).map(build).join(' ')}]`; }
  return roots(doc).map(build).join('\n');
}
export function check(doc, exercise) {
  const structural = [], inconsistencies = [], analytical = [], p = parents(doc), r = roots(doc);
  const issue = (list, ids, text) => list.push({ ids, text });
  if (r.length !== 1) issue(structural, r, `There are ${r.length} separate branches. Join them into one tree for the whole expression.`);
  for (const id of Object.keys(doc.nodes)) {
    const n = doc.nodes[id];
    if (!p[id] && n.kind === 'lexical') issue(structural, [id], `The word “${exercise.words[n.word]}” still needs a phrase above it.`);
    if (n.kind === 'lexical' && !n.category) issue(structural, [id], `Choose a lexical category for “${exercise.words[n.word]}”.`);
    if (p[id] && !n.function) issue(structural, [id], `Give ${nodeText(doc, id, exercise)} a function in its parent.`);
    if (n.kind === 'lexical' && p[id] && n.function && n.function !== 'Head') {
      issue(inconsistencies, [id, p[id]], `You’ve given the word “${exercise.words[n.word]}” the function ${n.function}. A word heads its phrase, so this node needs Head. The function of the whole phrase belongs on the phrase node above it.`);
    }
    if (n.kind === 'phrase') {
      if (!n.children.length) issue(structural, [id], `${n.category} has no children yet. Attach a branch or remove the empty grouping.`);
      else {
        const heads = n.children.filter((child) => doc.nodes[child].function === 'Head');
        if (heads.length !== 1) issue(structural, [id, ...heads], `${nodeText(doc, id, exercise)} needs one head in this exercise; it currently has ${heads.length}.`);
        if (heads.length === 1) {
          const head = doc.nodes[heads[0]];
          const headCategories = { NP: ['N', 'NP'], VP: ['V', 'VP'], AdjP: ['Adj', 'AdjP'], AdvP: ['Adv', 'AdvP'], PP: ['P', 'PP'], DP: ['D', 'DP'], Clause: ['VP'] };
          const expected = { NP: 'a noun head (including pronouns)', VP: 'a verb head (including auxiliaries)', AdjP: 'an adjective head', AdvP: 'an adverb head', PP: 'a preposition head', DP: 'a determinative head', Clause: 'a VP as head in this tree style' };
          if (head.category && !headCategories[n.category].includes(head.category)) {
            const words = leaves(doc, head.id).map((i) => exercise.words[i]).join(' ');
            const parentName = n.category === 'Clause' ? 'a clause' : `${['NP', 'AdjP', 'AdvP'].includes(n.category) ? 'an' : 'a'} ${n.category}`;
            issue(inconsistencies, [head.id, id], `You’ve labelled “${words || 'this branch'}” ${head.category} but made it the head of ${parentName}. ${n.category} requires ${expected[n.category]}. Reconsider the head’s category or the category of the phrase it heads.`);
          }
        }
      }
    }
  }
  const answer = fromTree(exercise.answer, exercise), ap = parents(answer);
  const signature = (tree, id) => `${tree.nodes[id].kind}:${leaves(tree, id).join(',')}:${tree.nodes[id].category}`;
  for (const n of Object.values(doc.nodes).filter((n) => n.kind === 'lexical' && n.category)) {
    const expected = Object.values(answer.nodes).find((a) => a.kind === 'lexical' && a.word === n.word);
    if (n.category !== expected.category) issue(analytical, [n.id], `For “${exercise.words[n.word]}”, compare your category ${n.category} with the book’s ${expected.category}. ${exercise.notes[n.word]}`);
  }
  if (!structural.length && !inconsistencies.length) {
    for (const n of Object.values(doc.nodes)) {
      const same = Object.values(answer.nodes).find((a) => signature(answer, a.id) === signature(doc, n.id));
      if (!same && n.kind === 'phrase') issue(analytical, [n.id], `The book groups or labels “${leaves(doc, n.id).map((i) => exercise.words[i]).join(' ')}” differently. Examine this ${n.category} branch and where its head belongs.`);
      if (same && n.function !== same.function) {
        const key = `${same.category}:${leaves(answer, same.id).join(',')}`;
        const detail = exercise.relations?.[key] || (same.function === '' ? 'This phrase is the whole expression in this exercise. The root has no function because it has no parent.' : `Reconsider what ${nodeText(doc, n.id, exercise)} does in its parent. ${exercise.explanation}`);
        issue(analytical, [n.id], detail);
      }
      if (same && p[n.id] && ap[same.id] && signature(doc, p[n.id]) !== signature(answer, ap[same.id])) issue(analytical, [n.id], `Reconsider where ${nodeText(doc, n.id, exercise)} attaches. Its parent in the book is ${nodeText(answer, ap[same.id], exercise)}.`);
    }
    if (!analytical.length && JSON.stringify(toTree(doc)) !== JSON.stringify(toTree(answer))) issue(analytical, r, 'The tree is structurally complete, but its grouping differs from the book. Compare the immediate children of each phrase.');
  }
  return { structural, inconsistencies, analytical, matches: !structural.length && !inconsistencies.length && !analytical.length };
}

export function layout(doc, scale = 1) {
  const SLOT = 158 * scale, STEP = 102 * scale, TOP = 26 * scale, BOX = 64 * scale;
  const placed = {}, edges = []; let cursor = 0, maxDepth = 0;
  const width = (id) => Math.max(1, doc.nodes[id].children.reduce((n, child) => n + width(child), 0));
  function place(id, depth, start) {
    const n = doc.nodes[id], slots = width(id);
    placed[id] = { id, x: 30 * scale + (start + slots / 2) * SLOT, y: TOP + depth * STEP, width: 124 * scale, height: BOX };
    maxDepth = Math.max(maxDepth, depth);
    let childStart = start;
    for (const child of ordered(doc, n.children)) { place(child, depth + 1, childStart); edges.push([id, child]); childStart += width(child); }
  }
  for (const root of roots(doc)) { place(root, 0, cursor); cursor += width(root); }
  const wordY = TOP + (maxDepth + 1) * STEP + 25 * scale;
  return { nodes: placed, edges, wordY, width: Math.max(420 * scale, cursor * SLOT + 60 * scale), height: Math.max(280 * scale, wordY + 65 * scale) };
}
