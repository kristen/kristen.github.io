# Tests

Content regression tests — one file per guide, one test per chapter/save/split entry, one test per tier row. Each test re-extracts content live from the HTML and diffs it against a frozen snapshot, so any accidental content change during a refactor is caught.

## Commands

```
node --test tests/fe6.test.mjs tests/fe7.test.mjs tests/fe8.test.mjs
```

After an intentional content change, regenerate snapshots and commit them alongside the HTML change:

```
node tests/generate-snapshots.mjs
```

## Files

- `extract.mjs` — shared logic: pulls `ITEMS` array and tier list HTML from a guide file
- `generate-snapshots.mjs` — writes `snapshots/feN.chapters.json` and `snapshots/feN.tiers.json`
- `fe6/fe7/fe8.test.mjs` — compare live-extracted content against snapshots
- `snapshots/` — frozen baseline; commit changes here only when content is intentionally updated

## CI

`.github/workflows/test.yml` runs on every push/PR to `main`. No dependencies — Node 18+ only.
