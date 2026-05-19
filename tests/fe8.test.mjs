import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { extractChapters, extractTiers } from './extract.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const snapDir = join(__dirname, 'snapshots');

const liveChapters = await extractChapters('fe8');
const liveTiers = await extractTiers('fe8');
const snapChapters = JSON.parse(readFileSync(join(snapDir, 'fe8.chapters.json'), 'utf8'));
const snapTiers = JSON.parse(readFileSync(join(snapDir, 'fe8.tiers.json'), 'utf8'));

for (const snap of snapChapters) {
  if (snap.type === 'ch') {
    test(`FE8 ${snap.num} — ${snap.name}`, () => {
      const live = liveChapters.find(e => e.type === 'ch' && e.id === snap.id);
      assert.deepEqual(live, snap);
    });
  } else if (snap.type === 'save') {
    test(`FE8 save card: ${snap.title}`, () => {
      const live = liveChapters.find(e => e.type === 'save' && e.title === snap.title);
      assert.deepEqual(live, snap);
    });
  } else if (snap.type === 'split') {
    test(`FE8 split card: ${snap.title}`, () => {
      const live = liveChapters.find(e => e.type === 'split' && e.title === snap.title);
      assert.deepEqual(live, snap);
    });
  }
}

for (const tier of ['s', 'a', 'b', 'c', 'd', 'f']) {
  test(`FE8 tier ${tier.toUpperCase()} units`, () => {
    assert.deepEqual(liveTiers[tier], snapTiers[tier]);
  });
}
