# Fire Emblem Guides — Codebase Overview

Static HTML site. No build step, no dependencies beyond Google Fonts and Tabler Icons (both CDN).

## Files

- **index.html** — Landing page with cards linking to each guide. Add a new `<a class="card">` block here whenever a new guide is created.
- **fe6_binding_blade_guide.html** — FE6 guide (routes A/B, Western Isles + Sacae/Illia splits, 5 gaidens required for true ending)
- **fe7_blazing_blade_guide.html** — FE7 guide (Lyn's Story + main story, Eliwood/Hector modes, Four-Fanged Offense/Pale Flower splits)
- **fe8_sacred_stones_guide.html** — FE8 guide (Eirika/Ephraim route split after Ch. 8, trainee mechanic, no bad-ending conditions)
- **fe-shadow-dragon-guide.html** — Shadow Dragon guide
- **nintendo-games.html** — Nintendo games tier list/tracker (unrelated to FE guides)

## How a guide is structured

Each guide is a single self-contained HTML file with:

1. **CSS** — Copy from any existing guide. The color palette and layout are shared across all guides. Two route-color variables to change per game (e.g. `--eirika`/`--ephraim` in FE8, `--ra`/`--rb` in FE6).

2. **Two-column layout** — Left column is the chapter checklist; right column is the tier list. On mobile it collapses to tabs.

3. **`const ITEMS` array** — The entire chapter/event data lives here. Each entry is one of:
   - `{type:'ch', id, num, name, cls, badge, badgeText, recruits[], items[], steal[], warns[]}` — a single chapter row
   - `{type:'pair', pair:[ch, ch]}` — two chapters side by side (for mutually exclusive route chapters)
   - `{type:'save', title, body}` — gold callout card for save reminders and important warnings
   - `{type:'split', title, opts[], excl[]}` — blue callout card explaining a route branch

4. **`const CH_IDS`** — auto-derived from ITEMS; drives the progress bar. Update the "X of N" text in the two `prog-text` elements to match.

5. **localStorage key** — Each guide uses a unique key (e.g. `'fe8_guide_v1'`). Use a new key for each new guide.

6. **Tier list HTML** — Static HTML in the right column. Uses `.tier-row.tier-s/a/b/c/d/f` rows with `.unit-chip` entries. Route-exclusive units get a border class (e.g. `.is-eirika`, `.is-ephraim`).

## Adding a new guide

1. Copy an existing guide file and rename it (e.g. `fe9_path_of_radiance_guide.html`).
2. Update the `<title>`, header `<h1>`, and subtitle `<p>`.
3. Replace the `ITEMS` array with the new game's chapter data.
4. Replace the tier list HTML with the new game's units.
5. Update the progress bar initial text ("0 of N chapters complete") and the localStorage key.
6. Add route CSS classes if the game has routes (copy the pattern from FE6 or FE8).
7. Add a card to `index.html`.

## Tests

Content regression tests in `tests/` — see `tests/CLAUDE.md`.

## Route split patterns

- **No split** — just `{type:'ch'}` entries throughout (simplest)
- **Paired chapters** — use `{type:'pair', pair:[chA, chB]}` for chapters that are mutually exclusive; players check only their route
- **Split card** — add a `{type:'split'}` entry just before the paired chapters to explain the branch condition
- **Save card** — add a `{type:'save'}` entry before any chapter with tricky unlock conditions or important decisions
