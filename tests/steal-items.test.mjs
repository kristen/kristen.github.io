import { test } from 'node:test';
import assert from 'node:assert/strict';
import { singularizeSteal, expandStealEntry, expandStealList } from '../src/utils/stealItems.js';

// --- singularizeSteal ---

test('singularizeSteal: -ies → -y', () => {
  assert.equal(singularizeSteal('Vulneraries'), 'Vulnerary');
});

test('singularizeSteal: -s → drop s', () => {
  assert.equal(singularizeSteal('Lockpicks'), 'Lockpick');
});

test('singularizeSteal: -ss unchanged (not a plural)', () => {
  assert.equal(singularizeSteal('Brass'), 'Brass');
});

test('singularizeSteal: no suffix → unchanged', () => {
  assert.equal(singularizeSteal('Antitoxin'), 'Antitoxin');
});

test('singularizeSteal: case-insensitive -IES', () => {
  assert.equal(singularizeSteal('VULNERARIES'), 'VULNERARy');
});

// --- expandStealEntry ---

test('expandStealEntry: plain name gets (steal) suffix', () => {
  assert.deepEqual(expandStealEntry('Vulnerary'), ['Vulnerary (steal)']);
});

test('expandStealEntry: entry with ( already present — passed through as-is', () => {
  assert.deepEqual(expandStealEntry('Lockpick from Cath (if unrecruited)'), ['Lockpick from Cath (if unrecruited)']);
});

test('expandStealEntry: entry with "from" keyword — passed through as-is', () => {
  assert.deepEqual(expandStealEntry('Iron Sword from boss'), ['Iron Sword from boss']);
});

test('expandStealEntry: ×N expands to numbered entries', () => {
  assert.deepEqual(expandStealEntry('Vulneraries ×3'), [
    'Vulnerary (steal 1/3)',
    'Vulnerary (steal 2/3)',
    'Vulnerary (steal 3/3)',
  ]);
});

test('expandStealEntry: ×1 expands to single numbered entry', () => {
  assert.deepEqual(expandStealEntry('Chest Keys ×1'), ['Chest Key (steal 1/1)']);
});

test('expandStealEntry: latin x accepted as quantity marker', () => {
  assert.deepEqual(expandStealEntry('Lockpicks x2'), [
    'Lockpick (steal 1/2)',
    'Lockpick (steal 2/2)',
  ]);
});

test('expandStealEntry: "infinite" (no farm) → standard farming label', () => {
  assert.deepEqual(expandStealEntry('Vulneraries (infinite)'), [
    'Vulneraries (infinite — farm as needed)',
  ]);
});

test('expandStealEntry: "infinite" with "farm" → passed through as-is', () => {
  const s = 'Vulneraries (infinite — farm as needed)';
  assert.deepEqual(expandStealEntry(s), [s]);
});

test('expandStealEntry: trims leading/trailing whitespace', () => {
  assert.deepEqual(expandStealEntry('  Antitoxin  '), ['Antitoxin (steal)']);
});

// --- expandStealList ---

test('expandStealList: empty array', () => {
  assert.deepEqual(expandStealList([]), []);
});

test('expandStealList: mix of plain and ×N entries', () => {
  assert.deepEqual(expandStealList(['Antitoxin', 'Vulneraries ×2']), [
    'Antitoxin (steal)',
    'Vulnerary (steal 1/2)',
    'Vulnerary (steal 2/2)',
  ]);
});

test('expandStealList: realistic chapter steal list', () => {
  const result = expandStealList(['Vulneraries ×3', 'Chest Key', 'Lockpick from thief (optional)']);
  assert.deepEqual(result, [
    'Vulnerary (steal 1/3)',
    'Vulnerary (steal 2/3)',
    'Vulnerary (steal 3/3)',
    'Chest Key (steal)',
    'Lockpick from thief (optional)',
  ]);
});
