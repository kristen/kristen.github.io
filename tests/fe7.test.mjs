import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { extractChapters, extractTiers } from './extract.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const snapDir = join(__dirname, 'snapshots');

const htmlPath = join(root, 'fe7_blazing_blade_guide.html');
const liveChapters = extractChapters(htmlPath);
const liveTiers = extractTiers(htmlPath);
const snapChapters = JSON.parse(readFileSync(join(snapDir, 'fe7.chapters.json'), 'utf8'));
const snapTiers = JSON.parse(readFileSync(join(snapDir, 'fe7.tiers.json'), 'utf8'));

for (const snap of snapChapters) {
  if (snap.type === 'ch') {
    test(`FE7 ${snap.num} — ${snap.name}`, () => {
      const live = liveChapters.find(e => e.type === 'ch' && e.id === snap.id);
      assert.deepEqual(live, snap);
    });
  } else if (snap.type === 'save') {
    test(`FE7 save card: ${snap.title}`, () => {
      const live = liveChapters.find(e => e.type === 'save' && e.title === snap.title);
      assert.deepEqual(live, snap);
    });
  } else if (snap.type === 'split') {
    test(`FE7 split card: ${snap.title}`, () => {
      const live = liveChapters.find(e => e.type === 'split' && e.title === snap.title);
      assert.deepEqual(live, snap);
    });
  }
}

for (const tier of ['s', 'a', 'b', 'c', 'd', 'f']) {
  test(`FE7 tier ${tier.toUpperCase()} units`, () => {
    assert.deepEqual(liveTiers[tier], snapTiers[tier]);
  });
}
