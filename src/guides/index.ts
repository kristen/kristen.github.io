import type { GuideConfig } from '../types';
import { fe6Config } from './fe6';
import { fe7Config } from './fe7';
import { fe8Config } from './fe8';

export const GUIDES: Record<string, GuideConfig> = {
  fe6: fe6Config,
  fe7: fe7Config,
  fe8: fe8Config,
};
