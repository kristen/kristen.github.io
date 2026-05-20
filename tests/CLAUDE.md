# Tests

Two kinds of tests:

1. **Content regression** — one file per guide, one test per chapter/save/split entry, one test per tier row. Each test re-extracts content live from the data files and diffs it against a frozen snapshot, so any accidental content change during a refactor is caught.

2. **Unit tests** — pure-function logic extracted into `src/utils/*.js` files (plain JS so Node can import them without a TypeScript loader).

## Commands

```
# All tests
node --test tests/fe6.test.mjs tests/fe7.test.mjs tests/fe8.test.mjs tests/fe11.test.mjs tests/recruited-names.test.mjs

# Content regressions only
node --test tests/fe6.test.mjs tests/fe7.test.mjs tests/fe8.test.mjs tests/fe11.test.mjs

# Unit tests only
node --test tests/recruited-names.test.mjs
```

After an intentional content change, regenerate snapshots and commit them alongside the data change:

```
node tests/generate-snapshots.mjs
```

## Files

- `extract.mjs` — shared logic: reads chapter data from `data/feN-data.js` and tier data from `data/feN-tiers.js`
- `generate-snapshots.mjs` — writes `snapshots/feN.chapters.json` and `snapshots/feN.tiers.json`
- `fe6/fe7/fe8/fe11.test.mjs` — compare live-extracted content against snapshots
- `recruited-names.test.mjs` — unit tests for `src/utils/recruitedNames.js` (name parsing, set computation, unit matching)
- `snapshots/` — frozen baseline; commit changes here only when content is intentionally updated

## CI

`.github/workflows/test.yml` runs on every push/PR to `main`. No dependencies — Node 18+ only.
