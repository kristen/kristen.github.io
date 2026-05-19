export interface ChapterItem {
  type: 'ch';
  id: string;
  num: string;
  name: string;
  cls?: string | null;
  badge?: string | null;
  badgeText?: string | null;
  recruits: string[];
  items: string[];
  steal: string[];
  warns: string[];
}

export interface PairItem {
  type: 'pair';
  pair: ChapterItem[];
}

export interface SplitOpt {
  badge: string;
  label: string;
  cond: string;
  units: string;
  note: string;
}

export interface SaveItem {
  type: 'save';
  title: string;
  body: string;
}

export interface SplitItem {
  type: 'split';
  title: string;
  opts: SplitOpt[];
  excl: string[];
}

export type Item = ChapterItem | PairItem | SaveItem | SplitItem;

export interface TierUnit {
  name: string;
  subtitle: string;
  cls: string | null;
}

export interface Tier {
  level: string;
  label: string;
  units: TierUnit[];
}

export interface GuideConfig {
  key: string;
  title: string;
  subtitle: string;
  storageKey: string;
  splitLabel: string;
  tipBox: string;
  cssVars: Record<string, string>;
  extraCss?: string;
  items: Item[];
  tiers: Tier[];
  tierPhilosophy?: string;
  tierTip?: string;
}
