import { readFileSync } from 'node:fs';
import { basename, dirname, join } from 'node:path';
import vm from 'node:vm';

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
  const dataPath = join(dirname(htmlPath), 'data', `${key}-data.js`);
  const ctx = { window: {} };
  vm.runInNewContext(readFileSync(dataPath, 'utf8'), ctx);
  const items = JSON.parse(JSON.stringify(ctx.window.ITEMS));

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
  const key = basename(htmlPath).split('_')[0];
  const dataPath = join(dirname(htmlPath), 'data', `${key}-tiers.js`);
  const ctx = { window: {} };
  vm.runInNewContext(readFileSync(dataPath, 'utf8'), ctx);
  const rows = JSON.parse(JSON.stringify(ctx.window.TIERS));
  const tiers = {};
  for (const tier of rows) {
    tiers[tier.level] = tier.units;
  }
  return tiers;
}
