# Fire Emblem Guides — Codebase Overview

Static HTML site. No build step, no dependencies beyond Google Fonts and Tabler Icons (both CDN).

## Files

- **index.html** — Landing page with cards linking to each guide. Add a new `<a class="card">` block here whenever a new guide is created.
- **fe6_binding_blade_guide.html** — FE6 guide (routes A/B, Western Isles + Sacae/Illia splits, 5 gaidens required for true ending)
- **fe7_blazing_blade_guide.html** — FE7 guide (Lyn's Story + main story, Eliwood/Hector modes, Four-Fanged Offense/Pale Flower splits)
- **fe8_sacred_stones_guide.html** — FE8 guide (Eirika/Ephraim route split after Ch. 8, trainee mechanic, no bad-ending conditions)
- **fe-shadow-dragon-guide.html** — Shadow Dragon guide
- **nintendo-games.html** — Nintendo games tier list/tracker (unrelated to FE guides)
- **fe-guides-shared.css** — Shared CSS for all FE guides (color palette, layout, component styles)
- **fe-guides-shared.js** — Shared JS for all FE guides (`render()`, `renderTiers()`, `showTab()`, etc.)
- **data/feN-data.js** — Chapter/event data for each guide as `window.ITEMS = [...]`
- **data/feN-tiers.js** — Tier list data for each guide as `window.TIERS`, `window.TIER_PHILOSOPHY`, `window.TIER_TIP`

## How a guide is structured

Each guide is a self-contained HTML file that loads shared components and data files:

1. **Shared CSS** — `<link rel="stylesheet" href="fe-guides-shared.css">` plus a small inline `<style>` block with game-specific route/badge color variables (e.g. `--sacae`/`--illia` in FE6, `--eirika`/`--ephraim` in FE8).

2. **Two-column layout** — Left column is the chapter checklist (`<div class="col-body" id="ch-list">`); right column is the tier list (`<div class="col-body" id="tier-body">`). Both are populated by JS. On mobile it collapses to tabs.

3. **`data/feN-data.js`** — Chapter/event data as a JS global. Each entry in `window.ITEMS` is one of:
   - `{type:'ch', id, num, name, cls, badge, badgeText, recruits[], items[], steal[], warns[]}` — a single chapter row
   - `{type:'pair', pair:[ch, ch]}` — two chapters side by side (for mutually exclusive route chapters)
   - `{type:'save', title, body}` — gold callout card for save reminders and important warnings
   - `{type:'split', title, opts[], excl[]}` — blue callout card explaining a route branch

4. **`data/feN-tiers.js`** — Tier list data as JS globals:
   - `window.TIERS` — array of `{level, label, units: [{name, subtitle, cls}]}` objects (one per tier row)
   - `window.TIER_PHILOSOPHY` — HTML string for the top tip box
   - `window.TIER_TIP` — HTML string for the bottom tip box

5. **Inline script block** — Sets two guide-specific globals before loading shared JS:
   ```html
   <script>
   window.STORAGE_KEY = 'fe8_guide_v1';  // unique per guide
   window.SPLIT_LABEL = 'Exclusives';    // or 'Recruits'
   </script>
   <script src="fe-guides-shared.js"></script>
   <script src="data/fe8-data.js"></script>
   <script src="data/fe8-tiers.js"></script>
   <script>
   window.CH_IDS = ITEMS.flatMap(i => i.type === 'ch' ? [i.id] : i.type === 'pair' ? i.pair.map(p => p.id) : []);
   render();
   renderTiers();
   updateProgress();
   </script>
   ```

6. **localStorage key** — Each guide uses a unique key (e.g. `'fe8_guide_v1'`). Use a new key for each new guide.

**Important:** Data files must be `.js` globals loaded via `<script src>`, not JSON fetched via `fetch()`. The site is sometimes opened as `file://` URLs where `fetch()` is blocked by browser security policy.

## Adding a new guide

1. Copy an existing guide file and rename it (e.g. `fe9_path_of_radiance_guide.html`).
2. Update the `<title>`, header `<h1>`, and subtitle `<p>`.
3. Update the inline `<style>` block with game-specific route color variables.
4. Create `data/fe9-data.js` with the chapter data as `window.ITEMS = [...]`.
5. Create `data/fe9-tiers.js` with `window.TIERS`, `window.TIER_PHILOSOPHY`, and `window.TIER_TIP`.
6. Update `window.STORAGE_KEY` and `window.SPLIT_LABEL` in the inline script.
7. Add a card to `index.html`.

## Tests

Content regression tests in `tests/` — see `tests/CLAUDE.md`.

## Route split patterns

- **No split** — just `{type:'ch'}` entries throughout (simplest)
- **Paired chapters** — use `{type:'pair', pair:[chA, chB]}` for chapters that are mutually exclusive; players check only their route
- **Split card** — add a `{type:'split'}` entry just before the paired chapters to explain the branch condition
- **Save card** — add a `{type:'save'}` entry before any chapter with tricky unlock conditions or important decisions
