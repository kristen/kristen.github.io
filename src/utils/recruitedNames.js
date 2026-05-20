/**
 * Parses a recruit string and returns lowercase unit names.
 * e.g. "Roy, Marcus & Wolt — Turn 1" → ["roy", "marcus", "wolt"]
 */
export function parseRecruitNames(recruitStr) {
  return recruitStr
    .split(/—|–/)[0]
    .split(/,\s*|\s*&\s*/)
    .map(n => n.trim().toLowerCase())
    .filter(Boolean);
}

/**
 * Builds the set of recruited unit names from progress state + guide items.
 * A name is added when its recruit checkbox key (chId_recruitN) is checked.
 */
export function computeRecruitedNames(items, done) {
  const result = new Set();
  for (const item of items) {
    const chapters =
      item.type === 'ch' ? [item] :
      item.type === 'pair' ? item.pair :
      [];
    for (const ch of chapters) {
      (ch.recruits ?? []).forEach((recruitStr, idx) => {
        if (done[ch.id + '_recruit' + idx]) {
          parseRecruitNames(recruitStr).forEach(n => result.add(n));
        }
      });
    }
  }
  return result;
}

/**
 * Returns true if a tier unit name matches any name in the recruited set.
 * Handles slash-separated alternate names, e.g. "Rutger/Rutoga".
 */
export function isUnitRecruited(unitName, recruitedNames) {
  return unitName.split('/').some(n => recruitedNames.has(n.trim().toLowerCase()));
}
