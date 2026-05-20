export function getChIds(items) {
  return items.flatMap(i => {
    if (i.type === 'ch') return [i.id];
    if (i.type === 'pair') return i.pair.map(p => p.id);
    return [];
  });
}

export function mergeProgress(a, b) {
  const result = { ...a };
  for (const key of Object.keys(b)) {
    if (b[key]) result[key] = true;
  }
  return result;
}
