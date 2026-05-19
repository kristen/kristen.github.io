let done = {};
try { done = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}'); } catch(e) {}
function persist() { try { localStorage.setItem(STORAGE_KEY, JSON.stringify(done)); } catch(e) {} }

function updateProgress() {
  const n = CH_IDS.filter(id => done[id]).length;
  const pct = Math.round(n / CH_IDS.length * 100) + '%';
  const txt = n + ' of ' + CH_IDS.length + ' chapters complete';
  ['wide', 'narrow'].forEach(s => {
    document.getElementById('prog-text-' + s).textContent = txt;
    document.getElementById('prog-bar-' + s).style.width = pct;
  });
}

function toggle(id) { done[id] = !done[id]; persist(); render(); updateProgress(); }

function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }

function singularizeSteal(name) {
  if (/ies$/i.test(name)) return name.replace(/ies$/i, 'y');
  if (/s$/i.test(name) && !/ss$/i.test(name)) return name.replace(/s$/i, '');
  return name;
}

function expandStealEntry(s) {
  s = s.trim();
  if (/infinite/i.test(s))
    return s.includes('farm') ? [s] : ['Vulneraries (infinite — farm as needed)'];
  const m = s.match(/^(.+?)\s*[×x](\d+)(?:\s+.+)?$/i);
  if (m) {
    const base = singularizeSteal(m[1].trim());
    const n = parseInt(m[2], 10);
    return Array.from({length: n}, (_, i) => `${base} (steal ${i + 1}/${n})`);
  }
  if (/\(|from\b/i.test(s)) return [s];
  return [`${s} (steal)`];
}

function expandStealList(arr) { return arr.flatMap(expandStealEntry); }

function appendSubList(body, chapterId, labels, keyPrefix, variant) {
  if (!labels.length) return;
  if (variant === 'steal' || variant === 'recruit') {
    const hdr = document.createElement('div');
    hdr.className = 'sub-section-label';
    hdr.textContent = variant === 'steal' ? 'Steal' : 'Recruit';
    body.appendChild(hdr);
  }
  const subList = document.createElement('div');
  subList.className = 'sub-items' + (variant === 'steal' ? ' steal-items' : variant === 'recruit' ? ' recruit-items' : '');
  labels.forEach((label, idx) => {
    const key = chapterId + keyPrefix + idx;
    const checked = !!done[key];
    const row = document.createElement('div');
    row.className = 'sub-item';
    row.onclick = (e) => {
      e.stopPropagation();
      done[key] = !done[key];
      persist();
      const box = row.querySelector('.sub-check');
      const lbl = row.querySelector('.sub-label');
      box.className = 'sub-check' + (done[key] ? ' on' : '');
      box.innerHTML = done[key] ? '<i class="ti ti-check" aria-hidden="true"></i>' : '';
      lbl.className = 'sub-label' + (done[key] ? ' on' : '');
    };
    row.innerHTML = `
      <div class="sub-check${checked ? ' on' : ''}">${checked ? '<i class="ti ti-check" aria-hidden="true"></i>' : ''}</div>
      <span class="sub-label${checked ? ' on' : ''}">${esc(label)}</span>`;
    subList.appendChild(row);
  });
  body.appendChild(subList);
}

function makeChRow(item) {
  const isDone = done[item.id];
  const el = document.createElement('div');
  el.className = ['ch-row', isDone ? 'done' : '', item.cls || ''].filter(Boolean).join(' ');

  const badges = item.badge ? `<span class="badge ${item.badge}">${esc(item.badgeText)}</span>` : '';

  const header = document.createElement('div');
  header.className = 'ch-header';
  header.onclick = (e) => { e.stopPropagation(); toggle(item.id); };
  header.innerHTML = `
    <div class="ch-check">${isDone ? '<i class="ti ti-check" aria-hidden="true"></i>' : ''}</div>
    <div class="ch-title">
      <span class="ch-num">${esc(item.num)}</span>
      <span class="ch-title-text">${esc(item.name)}</span>
      ${badges}
    </div>`;

  const body = document.createElement('div');
  body.style.cssText = 'padding-left:26px';

  let tags = '';
  if (item.warns && item.warns.length)
    item.warns.forEach(w => { tags += `<div class="tag warn"><i class="ti ti-alert-triangle" aria-hidden="true"></i>${esc(w)}</div>`; });
  if (tags) body.innerHTML += `<div class="tag-row">${tags}</div>`;

  if (item.recruits && item.recruits.length)
    appendSubList(body, item.id, item.recruits, '_recruit', 'recruit');
  if (item.items && item.items.length)
    appendSubList(body, item.id, item.items, '_item', 'item');
  if (item.steal && item.steal.length)
    appendSubList(body, item.id, expandStealList(item.steal), '_steal', 'steal');

  const main = document.createElement('div');
  main.className = 'ch-main';
  main.appendChild(header);
  if (body.childNodes.length) main.appendChild(body);
  el.appendChild(main);
  return el;
}

function render() {
  const list = document.getElementById('ch-list');
  list.innerHTML = '';
  const splitLabel = (typeof SPLIT_LABEL !== 'undefined' ? SPLIT_LABEL : null) || 'Recruits';
  ITEMS.forEach(item => {
    let el;
    if (item.type === 'ch') {
      el = makeChRow(item);
    } else if (item.type === 'pair') {
      el = document.createElement('div');
      el.className = 'ch-pair';
      item.pair.forEach(ch => el.appendChild(makeChRow(ch)));
    } else if (item.type === 'save') {
      el = document.createElement('div');
      el.className = 'callout save-card';
      el.innerHTML = `<b>${esc(item.title)}</b><br>${item.body}`;
    } else if (item.type === 'split') {
      el = document.createElement('div');
      el.className = 'callout split-card';
      const optsHtml = item.opts.map(o => `
        <div class="split-opt">
          <div class="split-opt-title"><span class="badge ${o.badge}">${esc(o.label)}</span>${esc(o.cond)}</div>
          <p>${splitLabel}: <b>${esc(o.units)}</b></p>
          <p class="note">${esc(o.note)}</p>
        </div>`).join('');
      const exclHtml = item.excl.map(e => `<div class="excl-chip">${esc(e)}</div>`).join('');
      el.innerHTML = `<h4>${esc(item.title)}</h4><div class="split-opts">${optsHtml}</div><div class="excl-row">${exclHtml}</div>`;
    }
    if (el) list.appendChild(el);
  });
}

function showTab(name) {
  document.querySelectorAll('.tab-btn').forEach(b =>
    b.classList.toggle('active', b.textContent.toLowerCase().startsWith(name.substring(0, 3)))
  );
  document.getElementById('col-chapters').classList.toggle('active', name === 'chapters');
  document.getElementById('col-tiers').classList.toggle('active', name === 'tiers');
}
