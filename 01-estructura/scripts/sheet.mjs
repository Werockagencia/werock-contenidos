// Hoja de contacto de un export: node scripts/sheet.mjs carrusel [columnas] [ancho]
import sharp from 'sharp';
import path from 'node:path';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const which = process.argv[2] || 'carrusel';
const cols = +(process.argv[3] || 3);
const w = +(process.argv[4] || 420);
const dir = path.join(root, which, 'export');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.png')).sort();
const tiles = [];
for (const f of files) tiles.push(await sharp(path.join(dir, f)).resize({ width: w }).png().toBuffer());
const meta = await sharp(tiles[0]).metadata();
const rows = Math.ceil(tiles.length / cols), gap = 12;
const comp = tiles.map((input, i) => ({ input, left: (i % cols) * (w + gap), top: Math.floor(i / cols) * (meta.height + gap) }));
const out = path.join(root, which, 'sheet.jpg');
await sharp({ create: { width: cols * w + (cols - 1) * gap, height: rows * meta.height + (rows - 1) * gap, channels: 3, background: '#222' } })
  .composite(comp).jpeg({ quality: 88 }).toFile(out);
console.log(out);
