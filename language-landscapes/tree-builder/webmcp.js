import { EXERCISES, LEXICAL, PHRASAL, FUNCTIONS } from './content.js';

export function registerTreeTools(actions) {
  const context = document.modelContext;
  if (!context?.registerTool) return;
  const lifecycle = new AbortController();
  const schema = (properties, required = Object.keys(properties)) => ({ type: 'object', properties, required, additionalProperties: false });
  const functionSchema = { type: 'string', enum: ['', ...FUNCTIONS.map(([id]) => id)] };
  const node = { oneOf: [
    schema({ kind: { const: 'lexical' }, category: { type: 'string', enum: ['', ...LEXICAL.map(([id]) => id)] }, function: functionSchema, word: { type: 'integer', minimum: 0 } }),
    schema({ kind: { const: 'phrase' }, category: { type: 'string', enum: PHRASAL.map(([id]) => id) }, function: functionSchema, children: { type: 'array', maxItems: 100, items: { $ref: '#/$defs/node' } } })
  ] };
  const empty = schema({});
  const definitions = [
    { name: 'read_syntax_workspace', title: 'Read the syntax-tree workspace', description: 'Read the current example, reader’s tree, category and function palettes, visible feedback, and the four available examples. Does not reveal a hidden worked tree.', inputSchema: empty, annotations: { readOnlyHint: true, untrustedContentHint: true }, execute: (input) => { exact(input, []); return actions.read(); } },
    { name: 'save_syntax_tree', title: 'Save a syntax-tree analysis', description: 'Select a supplied example and replace its reader draft with a complete tree or a partial forest. Every supplied word must occur exactly once, in order. Save uses the visible editor’s validation and undo history. This does not certify the analysis or reveal the worked tree.', inputSchema: { ...schema({ example: { type: 'string', enum: EXERCISES.map((ex) => ex.id) }, trees: { type: 'array', minItems: 1, maxItems: 100, items: { $ref: '#/$defs/node' } } }), $defs: { node } }, annotations: { readOnlyHint: false, untrustedContentHint: true }, execute: (input) => {
      exact(input, ['example', 'trees']);
      if (!EXERCISES.some((ex) => ex.id === input.example) || !Array.isArray(input.trees)) throw new Error('Choose an example and provide its trees.');
      let count = 0;
      function verify(item, depth = 0) {
        if (++count > 100 || depth > 24 || !item || typeof item !== 'object') throw new Error('Tree is too large or malformed.');
        exact(item, item.kind === 'lexical' ? ['kind', 'category', 'function', 'word'] : ['kind', 'category', 'function', 'children']);
        if (item.kind === 'phrase') { if (!Array.isArray(item.children)) throw new Error('Phrase nodes need children.'); item.children.forEach((child) => verify(child, depth + 1)); }
        else if (item.kind !== 'lexical') throw new Error('Choose lexical or phrase nodes.');
      }
      input.trees.forEach((tree) => verify(tree)); return actions.save(input);
    } },
    { name: 'check_syntax_tree', title: 'Check the current syntax tree', description: 'Show feedback on the current reader draft, separating incomplete structure from differences from the book’s analysis. Uses the same check as the visible Check connections button.', inputSchema: empty, annotations: { readOnlyHint: false, untrustedContentHint: true }, execute: (input) => { exact(input, []); return actions.check(); } },
    { name: 'show_worked_syntax_tree', title: 'Show the book’s worked tree', description: 'Reveal the current exercise’s sourced worked tree alongside the retained reader draft. Use when the reader requests the worked analysis.', inputSchema: empty, annotations: { readOnlyHint: false, untrustedContentHint: true }, execute: (input) => { exact(input, []); return actions.show(); } }
  ];
  for (const tool of definitions) {
    try { Promise.resolve(context.registerTool(tool, { signal: lifecycle.signal })).catch(() => {}); }
    catch { /* The visible editor also works in browsers without this registry. */ }
  }
  window.addEventListener('pagehide', () => lifecycle.abort(), { once: true });
}
function exact(input, keys) {
  if (!input || typeof input !== 'object' || Array.isArray(input) || Object.keys(input).some((key) => !keys.includes(key))) throw new Error('Invalid tool arguments.');
}
