import { writeFileSync, mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { extractChapters, extractTiers } from './extract.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const snapDir = join(__dirname, 'snapshots');

mkdirSync(snapDir, { recursive: true });

const guides = [
  { key: 'fe6', file: 'fe6_binding_blade_guide.html' },
  { key: 'fe7', file: 'fe7_blazing_blade_guide.html' },
  { key: 'fe8', file: 'fe8_sacred_stones_guide.html' },
];

for (const { key, file } of guides) {
  const htmlPath = join(root, file);
  const chapters = extractChapters(htmlPath);
  const tiers = extractTiers(htmlPath);
  writeFileSync(join(snapDir, `${key}.chapters.json`), JSON.stringify(chapters, null, 2) + '\n');
  writeFileSync(join(snapDir, `${key}.tiers.json`), JSON.stringify(tiers, null, 2) + '\n');
  const chCount = chapters.filter(e => e.type === 'ch').length;
  const saveCount = chapters.filter(e => e.type === 'save').length;
  const splitCount = chapters.filter(e => e.type === 'split').length;
  const tierCount = Object.values(tiers).reduce((s, u) => s + u.length, 0);
  console.log(`${key}: ${chCount} chapters, ${saveCount} saves, ${splitCount} splits, ${tierCount} tier units`);
}
