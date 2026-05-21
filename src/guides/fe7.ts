import type { GuideConfig } from '../types';
// @ts-expect-error js data file
import { ITEMS } from '../data/fe7-data.js';
// @ts-expect-error js data file
import { TIERS, TIER_PHILOSOPHY, TIER_TIP } from '../data/fe7-tiers.js';

export const fe7Config: GuideConfig = {
  key: 'fe7',
  title: 'Fire Emblem: The Blazing Blade',
  subtitle: "Personal walkthrough — Lyn's Story · Eliwood & Hector routes · recruitment · tier list",
  storageKey: 'fe7_guide_v1',
  splitLabel: 'Recruits',
  tipBox: `<b>How to use:</b> Click a row to mark the chapter done. <b>Blue</b> recruit rows, <b>green</b> items, <b>gold</b> steals — each has its own checkbox.
        Green borders = Lyn's Story. Orange borders = Hector-exclusive. Red = gaiden. Blue/purple = split routes.
        <b>Gold cards</b> = save reminders. <b>Blue cards</b> = branch explanation.
        Recruitment data from <a href="https://serenesforest.net/blazing-sword/" style="color:var(--gold)">Serenes Forest</a>; verify item details there.`,
  cssVars: {
    '--hector':    '#d4924a',
    '--lyn':       '#5a9e5a',
    '--lyn-label': '#7ac07a',
  },
  extraCss: `
.ch-row.is-gaiden{border-left-color:var(--red)}
.ch-row.is-ra    {border-left-color:var(--blue)}
.ch-row.is-rb    {border-left-color:var(--purple)}
.ch-row.is-hector{border-left-color:var(--hector)}
.ch-row.is-lyn   {border-left-color:var(--lyn)}
.badge.gaiden {background:var(--red-subtle);    color:var(--red)}
.badge.ra     {background:var(--blue-subtle);   color:var(--blue)}
.badge.rb     {background:var(--purple-subtle); color:var(--purple)}
.badge.hector {background:rgba(212,146,74,0.15); color:var(--hector)}
.badge.lyn    {background:rgba(90,158,90,0.15);color:var(--lyn-label)}
.unit-chip.is-hector{border-left-width:3px;border-left-color:var(--hector)}
.unit-chip.is-lyn   {border-left-width:3px;border-left-color:var(--lyn)}
.unit-chip.is-ra    {border-left-width:3px;border-left-color:var(--blue)}
.unit-chip.is-rb    {border-left-width:3px;border-left-color:var(--purple)}`,
  items: ITEMS,
  tiers: TIERS,
  tierPhilosophy: TIER_PHILOSOPHY,
  tierTip: TIER_TIP,
};
