// CGEL claim catalogue: filters on the index page. Progressive enhancement:
// without this script the full list is shown in CGEL page order.
(function () {
  const form = document.querySelector('form.filters');
  if (!form) return;
  form.hidden = false;
  const items = [...document.querySelectorAll('.claims > li')];
  const status = document.getElementById('filter-status');
  const q = form.querySelector('#q');
  const verdict = form.querySelector('#verdict');
  const chapter = form.querySelector('#chapter');
  const family = form.querySelector('#family');
  const review = form.querySelector('#review');
  const norm = (s) => String(s || '').toLowerCase().normalize('NFKD').replace(/[̀-ͯ]/g, '');

  function apply(push) {
    const terms = norm(q.value).split(/\s+/).filter(Boolean);
    let shown = 0;
    for (const li of items) {
      const ok = (!verdict.value || li.dataset.verdict === verdict.value)
        && (!chapter.value || li.dataset.chapter === chapter.value)
        && (!family.value || li.dataset.family === family.value)
        && (!review.value || li.dataset.review === review.value)
        && terms.every((t) => li.dataset.text.includes(t));
      li.hidden = !ok;
      if (ok) shown += 1;
    }
    status.textContent = `${shown} of ${items.length} claims`;
    if (push) {
      const url = new URL(location.href);
      for (const [k, el] of [['q', q], ['verdict', verdict], ['chapter', chapter], ['family', family], ['review', review]]) {
        if (el.value) url.searchParams.set(k, el.value); else url.searchParams.delete(k);
      }
      history.replaceState(null, '', url);
    }
  }
  const params = new URL(location.href).searchParams;
  for (const [k, el] of [['q', q], ['verdict', verdict], ['chapter', chapter], ['family', family], ['review', review]]) {
    if (params.get(k)) el.value = params.get(k);
  }
  form.addEventListener('input', () => apply(true));
  form.addEventListener('submit', (e) => { e.preventDefault(); apply(true); });
  apply(false);
})();
