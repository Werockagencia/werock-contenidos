import sharp from 'sharp';
const { data, info } = await sharp('assets/brand/we-rock.png').ensureAlpha().raw().toBuffer({ resolveWithObject: true });
for (let i = 0; i < data.length; i += 4) {
  const [r, g, b] = [data[i], data[i + 1], data[i + 2]];
  const isWhite = r > 170 && g > 170 && b > 170;   // el blanco del wordmark pasa a negro; el rojo se conserva
  if (isWhite) { data[i] = 10; data[i + 1] = 10; data[i + 2] = 10; }
}
await sharp(data, { raw: info }).png().toFile('assets/brand/we-rock-dark.png');
console.log('ok');
