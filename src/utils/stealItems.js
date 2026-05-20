export function singularizeSteal(name) {
  if (/ies$/i.test(name)) return name.replace(/ies$/i, 'y');
  if (/s$/i.test(name) && !/ss$/i.test(name)) return name.replace(/s$/i, '');
  return name;
}

export function expandStealEntry(s) {
  s = s.trim();
  if (/infinite/i.test(s))
    return s.includes('farm') ? [s] : ['Vulneraries (infinite — farm as needed)'];
  const m = s.match(/^(.+?)\s*[×x](\d+)(?:\s+.+)?$/i);
  if (m) {
    const base = singularizeSteal(m[1].trim());
    const n = parseInt(m[2], 10);
    return Array.from({ length: n }, (_, i) => `${base} (steal ${i + 1}/${n})`);
  }
  if (/\(|from\b/i.test(s)) return [s];
  return [`${s} (steal)`];
}

export function expandStealList(arr) {
  return arr.flatMap(expandStealEntry);
}
