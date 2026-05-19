import type { GuideConfig } from '../types';
// @ts-expect-error js data file
import { ITEMS } from '../data/fe8-data.js';
// @ts-expect-error js data file
import { TIERS, TIER_PHILOSOPHY, TIER_TIP } from '../data/fe8-tiers.js';

export const fe8Config: GuideConfig = {
  key: 'fe8',
  title: 'Fire Emblem: The Sacred Stones',
  subtitle: 'Personal walkthrough — Eirika & Ephraim routes · recruitment · tier list',
  storageKey: 'fe8_guide_v1',
  splitLabel: 'Exclusives',
  tipBox: `<b>How to use:</b> Click a row to mark the chapter done. <b>Blue</b> recruit rows, <b>green</b> items, <b>gold</b> steals — each has its own checkbox.
        Light-blue borders = Eirika's route. Green borders = Ephraim's route.
        <b>Gold cards</b> = save reminders. <b>Blue cards</b> = branch explanation.
        Both routes tracked (29 total) — check only the path you're playing.
        FE8 has <b>no bad ending</b> and <b>no gaiden unlock conditions</b>. The Tower of Valni opens on the world map around Ch. 8 for optional grinding.
        Recruitment data from <a href="https://serenesforest.net/the-sacred-stones/" style="color:var(--gold)">Serenes Forest</a>.`,
  cssVars: {
    '--eirika':  '#6aacda',
    '--ephraim': '#5daa5d',
  },
  extraCss: `
.ch-row.is-eirika  {border-left-color:var(--eirika)}
.ch-row.is-ephraim {border-left-color:var(--ephraim)}
.badge.eirika  {background:rgba(106,172,218,0.15);color:var(--eirika)}
.badge.ephraim {background:rgba(93,170,93,0.15); color:var(--ephraim)}
.unit-chip.is-eirika  {border-left-width:3px;border-left-color:var(--eirika)}
.unit-chip.is-ephraim {border-left-width:3px;border-left-color:var(--ephraim)}`,
  items: ITEMS,
  tiers: TIERS,
  tierPhilosophy: TIER_PHILOSOPHY,
  tierTip: TIER_TIP,
};
