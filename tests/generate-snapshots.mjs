import { writeFileSync, mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { extractChapters, extractTiers } from './extract.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const snapDir = join(__dirname, 'snapshots');

mkdirSync(snapDir, { recursive: true });

const guides = ['fe6', 'fe7', 'fe8', 'fe11'];

for (const key of guides) {
  const chapters = await extractChapters(key);
  const tiers = await extractTiers(key);
  writeFileSync(join(snapDir, `${key}.chapters.json`), JSON.stringify(chapters, null, 2) + '\n');
  writeFileSync(join(snapDir, `${key}.tiers.json`), JSON.stringify(tiers, null, 2) + '\n');
  const chCount = chapters.filter(e => e.type === 'ch').length;
  const saveCount = chapters.filter(e => e.type === 'save').length;
  const splitCount = chapters.filter(e => e.type === 'split').length;
  const tierCount = Object.values(tiers).reduce((s, u) => s + u.length, 0);
  console.log(`${key}: ${chCount} chapters, ${saveCount} saves, ${splitCount} splits, ${tierCount} tier units`);
}
