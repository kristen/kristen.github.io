# Fire Emblem Guides — Codebase Overview

React + Vite site deployed to GitHub Pages. No backend. CDN only: Google Fonts and Tabler Icons.

## Tech stack

- **Vite** — build tool (`npm run dev`, `npm run build`)
- **React 18** — rendering
- **React Router v6** — client-side routing via `HashRouter` (works on GitHub Pages)
- **TypeScript** — type checking
- **Plain CSS** — global, no CSS Modules

## Routing

Uses `HashRouter` — all routes are `/#/...`:

| URL | Page |
|-----|------|
| `/#/` | Landing (card grid) |
| `/#/guide/fe6` | FE6 Binding Blade guide |
| `/#/guide/fe7` | FE7 Blazing Blade guide |
| `/#/guide/fe8` | FE8 Sacred Stones guide |
| `/#/guide/fe11` | FE11 Shadow Dragon guide |
| `/#/nintendo-games` | Nintendo Games tracker |

## File structure

```
src/
  main.tsx                    # entry point: HashRouter + App
  App.tsx                     # routes: / → Landing, /guide/:key → GuidePage
  types.ts                    # ChapterItem, PairItem, SaveItem, SplitItem, SplitOpt, TierUnit, Tier,
                              #   ReclassEntry, ReclassOption, GuideConfig, Item (union)
  styles/
    shared.css                # guide layout: two-column, chapter rows, tiers, reclass guide
    landing.css               # landing page styles
    index.css                 # global resets
  hooks/
    useProgress.ts            # localStorage progress state
  guides/
    fe6.ts / fe7.ts / fe8.ts / fe11.ts  # GuideConfig per game
    index.ts                  # registry: Record<string, GuideConfig>
  data/
    fe6-data.js / fe6-tiers.js  # ES module exports
    fe7-data.js / fe7-tiers.js
    fe8-data.js / fe8-tiers.js
    fe11-data.js / fe11-tiers.js  # fe11-tiers.js also exports RECLASS (ReclassEntry[])
  components/
    Landing.tsx               # card grid
    GuidePage.tsx             # reads :guideKey, renders GuideShell
    GuideShell.tsx            # two-column layout + header + mobile tabs;
                              #   activeTab: 'chapters'|'tiers'|'reclass' — 3 mobile tabs when config.reclass is set;
                              #   desktop shows sub-tabs inside the tier column; mobile sub-tabs are hidden via CSS
    NintendoGames.tsx         # Nintendo Games tracker (/#/nintendo-games)
    ChapterList.tsx           # maps items array
    ChapterRow.tsx            # single chapter row
    ChapterPair.tsx           # side-by-side pair
    SaveCard.tsx              # gold callout
    SplitCard.tsx             # blue callout with route options
    SubItemList.tsx           # recruit / item / steal sub-checklist
    TierList.tsx              # tier list; accepts recruitedNames set to show a checkmark on recruited units
    ReclassGuide.tsx          # reclassing guide; renders a grid of ReclassEntry cards (FE11 only for now)
    ProgressBar.tsx           # wide + narrow variants
  utils/
    recruitedNames.js         # parseRecruitNames, computeRecruitedNames, isUnitRecruited — plain JS so Node tests can import it
    stealItems.js             # singularizeSteal, expandStealEntry, expandStealList — steal checkbox expansion logic
    progressUtils.js          # getChIds, mergeProgress — progress state helpers
  data/
    nintendo-games.js         # 89-game list for NintendoGames component
```

## GuideConfig

Each game is one config object in `src/guides/feN.ts`:

```ts
interface GuideConfig {
  key: string;
  title: string;
  subtitle: string;
  storageKey: string;      // localStorage key — never change, or users lose progress
  splitLabel: string;      // 'Recruits' | 'Exclusives'
  tipBox: string;          // HTML string for the how-to-use box
  cssVars: Record<string, string>;   // game-specific CSS custom properties
  extraCss?: string;       // game-specific CSS rules (badge/border colors)
  items: Item[];           // from data/feN-data.js
  tiers: Tier[];           // from data/feN-tiers.js
  tierPhilosophy?: string; // HTML string
  tierTip?: string;        // HTML string
  reclass?: ReclassEntry[]; // if present, adds "Tier List / Reclassing" sub-tabs in the tier column
}
```

`cssVars` are injected as an inline style on the guide wrapper — CSS custom properties cascade, so `.ch-row.is-sacae { border-left-color: var(--sacae) }` in shared.css picks them up automatically.

## Data files

`src/data/feN-data.js` — chapter data as `export const ITEMS = [...]`
`src/data/feN-tiers.js` — tier data as `export const TIERS`, `TIER_PHILOSOPHY`, `TIER_TIP`; fe11-tiers.js also exports `RECLASS` (array of `ReclassEntry`)

Each entry in `ITEMS` is one of:
- `{type:'ch', id, num, name, cls, badge, badgeText, recruits[], items[], steal[], warns[]}` — chapter row
- `{type:'pair', pair:[ch, ch]}` — side-by-side mutually exclusive chapters
- `{type:'save', title, body}` — gold callout card
- `{type:'split', title, opts[], excl[]}` — blue callout explaining a route branch

**Important:** Data files must be `.js` (not `.ts`) so Node can `import()` them directly in tests without a TypeScript loader.

## Adding a new guide

1. Create `src/data/fe9-data.js` with `export const ITEMS = [...]`
2. Create `src/data/fe9-tiers.js` with `export const TIERS`, `TIER_PHILOSOPHY`, `TIER_TIP`
3. Create `src/guides/fe9.ts` with a `GuideConfig` object
4. Add `fe9: fe9Config` to `src/guides/index.ts`
5. Add a card to `src/components/Landing.tsx`
6. Regenerate snapshots: `node tests/generate-snapshots.mjs`

## Tests

Content regression tests in `tests/` — see `tests/CLAUDE.md`.

```
node --test tests/fe6.test.mjs tests/fe7.test.mjs tests/fe8.test.mjs tests/fe11.test.mjs
```

After an intentional content change, regenerate snapshots:

```
node tests/generate-snapshots.mjs
```

## Firebase

Firebase (v12) is used for optional Google Sign-In and Firestore cross-device sync.

- **Config:** `.env.local` (git-ignored). Required vars: `VITE_FIREBASE_API_KEY`, `VITE_FIREBASE_AUTH_DOMAIN`, `VITE_FIREBASE_PROJECT_ID`, `VITE_FIREBASE_APP_ID`. CI reads these from GitHub secrets.
- **`src/lib/firebase.ts`** — initializes app/auth/db; all exports are `null` if env vars are absent (graceful no-op for guests)
- **`src/context/AuthContext.tsx`** — `AuthProvider` wraps the app; `useAuth()` gives `{ user, signIn, signOut }`
- **`src/components/AuthButton.tsx`** — sign-in prompt / signed-in avatar shown in the guide header
- **`src/hooks/useProgress.ts`** — on sign-in, merges local localStorage progress with Firestore (union: any checked item stays checked); writes to both on every toggle
- **Firestore path (FE guides):** `users/{uid}/progress/{storageKey}` — document `{ done: Record<string, boolean> }`
- **Firestore path (nintendo-games.html):** `users/{uid}/nintendo-games/game-data-v3` — document `{ value: "<json string>" }`
- **`src/components/NintendoGames.tsx`** uses the same `useAuth()` + modular Firebase SDK pattern; Firestore path: `users/{uid}/nintendo-games/game-data-v3`

## Development

Requires **Node 22** (see `.nvmrc`). Vite 8 will not start on Node 21 or earlier.

```
npm run dev          # dev server at http://localhost:5173 (requires Node 22 already active)
npm run dev:nvm      # sources nvm and switches to Node 22 automatically, then starts dev server
npm run build        # output to dist/
```

If the shell session has the wrong Node version, use `npm run dev:nvm` — it sources `$NVM_DIR/nvm.sh` and runs `nvm use` (reads `.nvmrc`) before starting Vite.
