import type { GuideConfig } from '../types';
// @ts-expect-error js data file
import { ITEMS } from '../data/fe11-data.js';
// @ts-expect-error js data file
import { TIERS, TIER_PHILOSOPHY, TIER_TIP } from '../data/fe11-tiers.js';

export const fe11Config: GuideConfig = {
  key: 'fe11',
  title: 'Fire Emblem: Shadow Dragon',
  subtitle: 'Recruitment guide — all Gaiden chapters · unit tier list',
  storageKey: 'fe11_guide_v1',
  splitLabel: 'Recruits',
  tipBox: `<b>How to use:</b> Click a row to mark the chapter done. <b>Blue</b> recruit rows, <b>green</b> item rows — each has its own checkbox.
        <b>Red left borders</b> mark Gaiden chapters (optional maps unlocked by ending the previous chapter with ≤15 units alive).
        <b>Gold cards</b> = important reminders. Keep Bantu alive all game — he is required to recruit Tiki in Gaiden 19x.
        Also see the <a href="fe-shadow-dragon-guide.html" style="color:var(--gold)">detailed unit &amp; reclassing guide</a> for in-depth notes on each character.`,
  cssVars: {},
  extraCss: `
.ch-row.is-gaiden{border-left-color:var(--red)}
.badge.gaiden{background:var(--red-subtle);color:var(--red)}`,
  items: ITEMS,
  tiers: TIERS,
  tierPhilosophy: TIER_PHILOSOPHY,
  tierTip: TIER_TIP,
};
