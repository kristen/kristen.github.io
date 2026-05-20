import { test } from 'node:test';
import assert from 'node:assert/strict';
import { getChIds, mergeProgress } from '../src/utils/progressUtils.js';

// --- getChIds ---

test('getChIds: extracts ids from ch items', () => {
  const items = [
    { type: 'ch', id: 'c1' },
    { type: 'ch', id: 'c2' },
  ];
  assert.deepEqual(getChIds(items), ['c1', 'c2']);
});

test('getChIds: extracts both ids from pair item', () => {
  const items = [
    { type: 'pair', pair: [{ type: 'ch', id: 'c5a' }, { type: 'ch', id: 'c5b' }] },
  ];
  assert.deepEqual(getChIds(items), ['c5a', 'c5b']);
});

test('getChIds: skips save and split items', () => {
  const items = [
    { type: 'ch', id: 'c1' },
    { type: 'save', title: 'Save here', body: '' },
    { type: 'split', title: 'Route split', opts: [], excl: [] },
    { type: 'ch', id: 'c2' },
  ];
  assert.deepEqual(getChIds(items), ['c1', 'c2']);
});

test('getChIds: mixed ch and pair', () => {
  const items = [
    { type: 'ch', id: 'c1' },
    { type: 'pair', pair: [{ type: 'ch', id: 'c2a' }, { type: 'ch', id: 'c2b' }] },
    { type: 'ch', id: 'c3' },
  ];
  assert.deepEqual(getChIds(items), ['c1', 'c2a', 'c2b', 'c3']);
});

test('getChIds: empty items array', () => {
  assert.deepEqual(getChIds([]), []);
});

// --- mergeProgress ---

test('mergeProgress: two empty objects → empty', () => {
  assert.deepEqual(mergeProgress({}, {}), {});
});

test('mergeProgress: b keys set to true are added', () => {
  const result = mergeProgress({}, { c1: true, c2: true });
  assert.deepEqual(result, { c1: true, c2: true });
});

test('mergeProgress: b keys set to false are not added', () => {
  const result = mergeProgress({}, { c1: false });
  assert.deepEqual(result, {});
});

test('mergeProgress: a keys preserved when b is empty', () => {
  const result = mergeProgress({ c1: true }, {});
  assert.deepEqual(result, { c1: true });
});

test('mergeProgress: union — checked in either stays checked', () => {
  const result = mergeProgress({ c1: true, c2: false }, { c2: true, c3: true });
  assert.ok(result.c1);
  assert.ok(result.c2);
  assert.ok(result.c3);
});

test('mergeProgress: a key true, b key false → stays true (union, not overwrite)', () => {
  const result = mergeProgress({ c1: true }, { c1: false });
  assert.ok(result.c1);
});

test('mergeProgress: does not mutate input objects', () => {
  const a = { c1: true };
  const b = { c2: true };
  mergeProgress(a, b);
  assert.deepEqual(a, { c1: true });
  assert.deepEqual(b, { c2: true });
});
