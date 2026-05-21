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

export interface ReclassOption {
  cls: string;
  note: string;
}

export interface ReclassEntry {
  name: string;
  from: string;
  options: ReclassOption[];
  recommended: string;
}

export interface PromotionRecipient {
  name: string;
  cls: string;
  priority: string;
  note: string;
}

export interface PromotionEntry {
  item: string;
  promotes: string[];
  count: number;
  units: PromotionRecipient[];
}

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
  reclass?: ReclassEntry[];
  promotions?: PromotionEntry[];
}
