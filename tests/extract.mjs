import { readFileSync } from 'node:fs';
import { basename, dirname, join } from 'node:path';

function normalizeChapter(ch) {
  return {
    type: 'ch',
    id: ch.id,
    num: ch.num,
    name: ch.name,
    cls: ch.cls ?? null,
    badge: ch.badge ?? null,
    badgeText: ch.badgeText ?? null,
    recruits: ch.recruits ?? [],
    items: ch.items ?? [],
    steal: ch.steal ?? [],
    warns: ch.warns ?? [],
  };
}

export function extractChapters(htmlPath) {
  const key = basename(htmlPath).split('_')[0]; // 'fe6', 'fe7', 'fe8'
  const dataPath = join(dirname(htmlPath), 'data', `${key}-data.json`);
  const items = JSON.parse(readFileSync(dataPath, 'utf8'));

  const entries = [];
  for (const item of items) {
    if (item.type === 'ch') {
      entries.push(normalizeChapter(item));
    } else if (item.type === 'pair') {
      for (const ch of item.pair) {
        entries.push(normalizeChapter(ch));
      }
    } else if (item.type === 'save') {
      entries.push({ type: 'save', title: item.title, body: item.body });
    } else if (item.type === 'split') {
      entries.push({ type: 'split', title: item.title, opts: item.opts, excl: item.excl });
    }
  }
  return entries;
}

export function extractTiers(htmlPath) {
  const html = readFileSync(htmlPath, 'utf8');
  const tiers = {};
  const tierRegex = /class="tier-row tier-([a-z])"><div class="tier-label">[^<]*<\/div><div class="tier-units">([\s\S]*?)<\/div><\/div>/g;
  let m;
  while ((m = tierRegex.exec(html)) !== null) {
    const level = m[1];
    const block = m[2];
    const units = [];
    const chipRegex = /class="unit-chip([^"]*)">([\s\S]*?)<small>([\s\S]*?)<\/small>/g;
    let cm;
    while ((cm = chipRegex.exec(block)) !== null) {
      const extraCls = cm[1].trim() || null;
      const name = cm[2].trim();
      const subtitle = cm[3].trim();
      units.push({ name, subtitle, cls: extraCls });
    }
    tiers[level] = units;
  }
  return tiers;
}
