import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));

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

export async function extractChapters(guideKey) {
  const dataPath = join(__dirname, '..', 'src', 'data', `${guideKey}-data.js`);
  const { ITEMS } = await import(dataPath);
  const items = JSON.parse(JSON.stringify(ITEMS));

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

export async function extractTiers(guideKey) {
  const dataPath = join(__dirname, '..', 'src', 'data', `${guideKey}-tiers.js`);
  const { TIERS } = await import(dataPath);
  const rows = JSON.parse(JSON.stringify(TIERS));
  const tiers = {};
  for (const tier of rows) {
    tiers[tier.level] = tier.units;
  }
  return tiers;
}
