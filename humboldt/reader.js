/* MIT license: see code-license.txt. English, German and notes work without JS. */
export function searchRecords(records, query, limit = 40) {
  const terms = String(query).normalize('NFC').toLocaleLowerCase().trim().split(/\s+/).filter(Boolean);
  if (!terms.length) return { total: 0, results: [] };
  const matches = [];
  for (const record of records) {
    const text = `${record.title} ${record.text}`.normalize('NFC').toLocaleLowerCase();
    if (terms.every(term => text.includes(term))) {
      const at = record.text.normalize('NFC').toLocaleLowerCase().indexOf(terms[0]);
      const start = Math.max(0, at - 70);
      matches.push({ ...record, snippet: `${start ? '…' : ''}${record.text.slice(start, start + 230)}${record.text.length > start + 230 ? '…' : ''}` });
    }
  }
  return { total: matches.length, results: matches.slice(0, limit) };
}

export function readingLocation(path, hash, allowedSlugs) {
  const match = path.match(/^\/humboldt\/([^/]+)\/$/);
  return match && allowedSlugs.includes(match[1]) && /^#p\d+[a-z]?$/.test(hash) ? path + hash : null;
}

function init() {
  const body = document.body;
  const announce = text => { document.querySelector('#action-status').textContent = text; };
  const readStorage = key => { try { return localStorage.getItem(key); } catch { return null; } };
  const saveStorage = (key, value) => { try { localStorage.setItem(key, value); } catch { /* Optional convenience only. */ } };
  const toggle = document.querySelector('#parallel-toggle');
  if (toggle) {
    toggle.hidden = false;
    const setParallel = on => {
      body.classList.toggle('parallel', on);
      document.querySelectorAll('.german').forEach(element => { element.open = on; });
      toggle.setAttribute('aria-pressed', String(on));
      toggle.textContent = on ? 'English only' : 'Show parallel German';
      saveStorage('humboldt-parallel', on ? 'yes' : 'no');
    };
    setParallel(readStorage('humboldt-parallel') === 'yes');
    toggle.addEventListener('click', () => setParallel(!body.classList.contains('parallel')));
  }
  const print = document.querySelector('#print-reading');
  if (print) { print.hidden = false; print.addEventListener('click', () => window.print()); }
  document.querySelectorAll('.copy-citation').forEach(button => {
    button.hidden = false;
    button.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(button.dataset.citation);
        announce('Citation copied.');
        button.textContent = 'Copied';
        setTimeout(() => { button.textContent = 'Copy citation'; }, 1800);
      } catch {
        // A selectable dialog also works when the clipboard permission is absent.
        const dialog = document.querySelector('#note-dialog');
        if (!dialog?.showModal) { announce(button.dataset.citation); return; }
        document.querySelector('#note-heading').textContent = 'Citation';
        document.querySelector('#note-body').textContent = button.dataset.citation;
        document.querySelector('#note-original').hidden = true;
        dialog.showModal();
      }
    });
  });
  const dialog = document.querySelector('#note-dialog');
  if (dialog?.showModal) {
    let callout = null;
    document.querySelectorAll('.note-ref').forEach(link => link.addEventListener('click', event => {
      const note = document.getElementById(link.hash.slice(1));
      if (!note) return;
      event.preventDefault();
      callout = link;
      document.querySelector('#note-heading').textContent = `Note ${note.dataset.number}`;
      document.querySelector('#note-body').replaceChildren(note.querySelector('.note-text').cloneNode(true));
      const original = document.querySelector('#note-original');
      original.hidden = false;
      original.href = link.hash;
      dialog.showModal();
    }));
    document.querySelector('#close-note').addEventListener('click', () => dialog.close());
    document.querySelector('#note-original').addEventListener('click', event => {
      const target = document.getElementById(event.currentTarget.hash.slice(1));
      callout = null;
      dialog.close();
      target?.focus();
    });
    dialog.addEventListener('close', () => { callout?.focus({ preventScroll: true }); callout = null; });
    dialog.addEventListener('click', event => {
      if (event.target !== dialog) return;
      const rect = dialog.getBoundingClientRect();
      if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
    });
  }
  const form = document.querySelector('.search');
  if (form) {
    let index;
    let timer;
    let sequence = 0;
    const input = form.querySelector('input');
    const status = document.querySelector('#search-status');
    const list = document.querySelector('#search-results');
    const run = async () => {
      const current = ++sequence;
      const query = input.value.trim();
      list.replaceChildren();
      if (!query) { status.textContent = ''; return; }
      status.textContent = 'Searching…';
      try {
        if (!index) index = fetch('/humboldt/search-index.json').then(response => {
          if (!response.ok) throw new Error('Search index unavailable');
          return response.json();
        });
        const records = await index;
        if (current !== sequence) return;
        const { total, results } = searchRecords(records, query);
        status.textContent = total ? `${total} ${total === 1 ? 'match' : 'matches'}${total > results.length ? `; showing the first ${results.length}` : ''}. Searches published passages, notes and terminology only.` : 'No matches in the published text. Untranslated passages are not searched.';
        for (const result of results) {
          const item = document.createElement('li');
          const link = document.createElement('a');
          link.href = result.href; link.textContent = result.title;
          const snippet = document.createElement('p'); snippet.textContent = result.snippet;
          item.append(link, snippet); list.append(item);
        }
      } catch {
        index = null;
        if (current === sequence) status.textContent = 'Search could not load. You can still browse every section and use your browser’s Find command.';
      }
    };
    form.addEventListener('submit', event => { event.preventDefault(); clearTimeout(timer); run(); });
    input.addEventListener('input', () => { clearTimeout(timer); timer = setTimeout(run, 180); });
  }
  const slugs = (body.dataset.sectionSlugs || '').split(' ').filter(Boolean);
  const resume = document.querySelector('.resume-reading');
  const last = readStorage('humboldt-last-passage');
  if (resume && last) {
    try {
      const url = new URL(last, location.origin);
      if (url.origin === location.origin && readingLocation(url.pathname, url.hash, slugs)) {
        resume.href = last; resume.hidden = false;
      }
    } catch { /* An invalid saved location must not break the reader. */ }
  }
  const remember = () => {
    const value = readingLocation(location.pathname, location.hash, slugs);
    if (value) saveStorage('humboldt-last-passage', value);
  };
  remember();
  window.addEventListener('hashchange', remember);
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      const first = entries.filter(e => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
      if (first) {
        const value = readingLocation(location.pathname, '#' + first.target.id, slugs);
        if (value) saveStorage('humboldt-last-passage', value);
      }
    }, { rootMargin: '-10% 0px -65% 0px' });
    document.querySelectorAll('.passage').forEach(passage => observer.observe(passage));
  }
}

if (typeof document !== 'undefined') init();
