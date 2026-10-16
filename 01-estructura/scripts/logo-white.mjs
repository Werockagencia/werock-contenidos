import sharp from 'sharp';
// versión toda blanca del logo, para fondos rojos (el isotipo rojo se perdería)
const { data, info } = await sharp('assets/brand/we-rock.png').ensureAlpha().raw().toBuffer({ resolveWithObject: true });
for (let i = 0; i < data.length; i += 4) { data[i] = 255; data[i + 1] = 255; data[i + 2] = 255; }
await sharp(data, { raw: info }).png().toFile('assets/brand/we-rock-white.png');
console.log('ok');
