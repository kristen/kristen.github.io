import { test } from 'node:test';
import assert from 'node:assert/strict';
import { parseRecruitNames, computeRecruitedNames, isUnitRecruited } from '../src/utils/recruitedNames.js';

// --- parseRecruitNames ---

test('parseRecruitNames: single name', () => {
  assert.deepEqual(parseRecruitNames('Lugh — Visit north-eastern village'), ['lugh']);
});

test('parseRecruitNames: comma-separated names', () => {
  assert.deepEqual(parseRecruitNames('Roy, Marcus, Alan, Lance — Turn 1'), ['roy', 'marcus', 'alan', 'lance']);
});

test('parseRecruitNames: ampersand-separated names', () => {
  assert.deepEqual(parseRecruitNames('Merlinus & Ellen — Turn 1'), ['merlinus', 'ellen']);
});

test('parseRecruitNames: mixed commas and ampersands', () => {
  assert.deepEqual(parseRecruitNames('Roy, Marcus, Alan, Lance, Wolt & Bors — Automatically, turn 1'), ['roy', 'marcus', 'alan', 'lance', 'wolt', 'bors']);
});

test('parseRecruitNames: en dash variant', () => {
  assert.deepEqual(parseRecruitNames('Chad – Automatically'), ['chad']);
});

test('parseRecruitNames: ignores everything after dash', () => {
  const names = parseRecruitNames('Clarine — Turn 3: leaves castle; talks to Roy automatically');
  assert.deepEqual(names, ['clarine']);
});

// --- computeRecruitedNames ---

const mockItems = [
  {
    type: 'ch',
    id: 'c1',
    recruits: [
      'Roy, Marcus — Automatically, turn 1',
      'Wolt & Bors — Automatically, turn 1',
    ],
  },
  {
    type: 'ch',
    id: 'c2',
    recruits: ['Lugh — Visit village'],
  },
  {
    type: 'pair',
    pair: [
      { type: 'ch', id: 'c5a', recruits: ['Ilia Unit — Join'] },
      { type: 'ch', id: 'c5b', recruits: ['Sacae Unit — Join'] },
    ],
  },
  { type: 'save', title: 'Save here', body: 'text' },
];

test('computeRecruitedNames: empty done → empty set', () => {
  const result = computeRecruitedNames(mockItems, {});
  assert.equal(result.size, 0);
});

test('computeRecruitedNames: checked recruit adds all its names', () => {
  const result = computeRecruitedNames(mockItems, { 'c1_recruit0': true });
  assert.ok(result.has('roy'));
  assert.ok(result.has('marcus'));
  assert.ok(!result.has('wolt'));
});

test('computeRecruitedNames: ampersand recruit checked', () => {
  const result = computeRecruitedNames(mockItems, { 'c1_recruit1': true });
  assert.ok(result.has('wolt'));
  assert.ok(result.has('bors'));
});

test('computeRecruitedNames: unchecked (false) recruit excluded', () => {
  const result = computeRecruitedNames(mockItems, { 'c2_recruit0': false });
  assert.ok(!result.has('lugh'));
});

test('computeRecruitedNames: multiple checked recruits', () => {
  const result = computeRecruitedNames(mockItems, {
    'c1_recruit0': true,
    'c2_recruit0': true,
  });
  assert.ok(result.has('roy'));
  assert.ok(result.has('marcus'));
  assert.ok(result.has('lugh'));
  assert.ok(!result.has('wolt'));
});

test('computeRecruitedNames: pair item chapters work', () => {
  const result = computeRecruitedNames(mockItems, { 'c5a_recruit0': true });
  assert.ok(result.has('ilia unit'));
  assert.ok(!result.has('sacae unit'));
});

test('computeRecruitedNames: non-ch types (save) are skipped', () => {
  // Should not throw and result stays unchanged
  const result = computeRecruitedNames(mockItems, {});
  assert.equal(result.size, 0);
});

// --- isUnitRecruited ---

test('isUnitRecruited: simple name match', () => {
  const names = new Set(['marcus', 'lugh']);
  assert.ok(isUnitRecruited('Marcus', names));
});

test('isUnitRecruited: slash variant — first matches', () => {
  const names = new Set(['wendy']);
  assert.ok(isUnitRecruited('Wendy/Gwendolyn', names));
});

test('isUnitRecruited: slash variant — second matches', () => {
  const names = new Set(['gwendolyn']);
  assert.ok(isUnitRecruited('Wendy/Gwendolyn', names));
});

test('isUnitRecruited: slash variant — neither matches', () => {
  const names = new Set(['lugh']);
  assert.ok(!isUnitRecruited('Wendy/Gwendolyn', names));
});

test('isUnitRecruited: empty set → false', () => {
  assert.ok(!isUnitRecruited('Marcus', new Set()));
});

test('isUnitRecruited: case-insensitive', () => {
  const names = new Set(['clarine']);
  assert.ok(isUnitRecruited('Clarine', names));
});
