// Renderiza cada <section class="slide" data-file="..."> a PNG con Chrome local.
// uso: node scripts/render.mjs carrusel|story
import puppeteer from 'puppeteer-core';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import fs from 'node:fs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const which = process.argv[2] || 'carrusel';
const dir = path.join(root, which);
const html = pathToFileURL(path.join(dir, 'slides.html')).href;
const out = path.join(dir, 'export');
fs.mkdirSync(out, { recursive: true });
for (const f of fs.readdirSync(out)) if (f.endsWith('.png')) fs.unlinkSync(path.join(out, f));

const browser = await puppeteer.launch({
  executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
  headless: 'new',
  args: ['--no-sandbox', '--font-render-hinting=none'],
});
const page = await browser.newPage();
await page.setViewport({ width: 1200, height: 2000, deviceScaleFactor: 1 });
await page.goto(html, { waitUntil: 'networkidle0' });
await page.evaluate(() => document.fonts.ready);
const slides = await page.$$('section.slide');
for (const s of slides) {
  const file = await s.evaluate(el => el.dataset.file);
  await s.screenshot({ path: path.join(out, file) });
  console.log('✓', file);
}
await browser.close();
