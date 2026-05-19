import type { GuideConfig } from '../types';
// @ts-expect-error js data file
import { ITEMS } from '../data/fe6-data.js';
// @ts-expect-error js data file
import { TIERS, TIER_PHILOSOPHY, TIER_TIP } from '../data/fe6-tiers.js';

export const fe6Config: GuideConfig = {
  key: 'fe6',
  title: 'Fire Emblem: The Binding Blade',
  subtitle: 'Personal walkthrough — all routes · recruitment · tier list',
  storageKey: 'fe6_guide_v4',
  splitLabel: 'Recruits',
  tipBox: `<b>How to use:</b> Click a row to mark the chapter done. <b>Blue</b> recruit rows, <b>green</b> items, <b>gold</b> steals — each has its own checkbox.
        Coloured left borders show route (blue = A, purple = B, orange = Sacae, teal = Illia, red = gaiden).
        <b>Gold cards</b> = save reminders. <b>Blue cards</b> = branch explanation.
        Recruitment data from <a href="https://www.feshrine.net/fe6/walkthroughindex.php" style="color:var(--gold)">FEShrine walkthroughs</a>; items from Serenes Forest.`,
  cssVars: {
    '--sacae':       '#c8884a',
    '--sacae-label': '#d4924a',
    '--illia':       '#4aa8a8',
    '--illia-label': '#6acaca',
  },
  extraCss: `
.ch-row.is-gaiden{border-left-color:var(--red)}
.ch-row.is-ra    {border-left-color:var(--blue)}
.ch-row.is-rb    {border-left-color:var(--purple)}
.ch-row.is-sacae {border-left-color:var(--sacae)}
.ch-row.is-illia {border-left-color:var(--illia)}
.badge.gaiden{background:var(--red-subtle);    color:var(--red)}
.badge.ra    {background:var(--blue-subtle);   color:var(--blue)}
.badge.rb    {background:var(--purple-subtle); color:var(--purple)}
.badge.sacae {background:rgba(200,136,74,0.15); color:var(--sacae-label)}
.badge.illia {background:rgba(74,168,168,0.15);color:var(--illia-label)}
.unit-chip.is-ra    {border-left-width:3px;border-left-color:var(--blue)}
.unit-chip.is-rb    {border-left-width:3px;border-left-color:var(--purple)}
.unit-chip.is-sacae {border-left-width:3px;border-left-color:var(--sacae)}
.unit-chip.is-illia {border-left-width:3px;border-left-color:var(--illia)}`,
  items: ITEMS,
  tiers: TIERS,
  tierPhilosophy: TIER_PHILOSOPHY,
  tierTip: TIER_TIP,
};
