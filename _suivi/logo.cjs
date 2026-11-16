const sharp = require('sharp');
(async () => {
  const { data, info } = await sharp('recu/logo-clair.png').removeAlpha().raw().toBuffer({ resolveWithObject: true });
  const W = info.width, H = info.height;
  const a = new Uint8ClampedArray(W * H);
  for (let i = 0; i < W * H; i++) { const b = data[i * 3 + 2]; a[i] = Math.max(0, Math.min(255, Math.round((255 - b) / (255 - 56) * 255))); }
  const rows = [], cols = (y0, y1) => { let mn = W, mx = 0; for (let y = y0; y < y1; y++) for (let x = 0; x < W; x++) if (a[y * W + x] > 60) { mn = Math.min(mn, x); mx = Math.max(mx, x); } return [mn, mx]; };
  for (let y = 0; y < H; y++) { let n = 0; for (let x = 0; x < W; x++) if (a[y * W + x] > 60) n++; rows.push(n); }
  const bandes = []; let d = -1; rows.forEach((n, y) => { if (n && d < 0) d = y; if (!n && d >= 0) { bandes.push([d, y]); d = -1; } }); if (d >= 0) bandes.push([d, H]);
  console.log('bandes', JSON.stringify(bandes));
  const teinte = (hex, x0, y0, w, h) => { const [r, g, b] = hex.match(/\w\w/g).map((v) => parseInt(v, 16)); const out = Buffer.alloc(w * h * 4); for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) { const o = (y * w + x) * 4, s = (y + y0) * W + x + x0; out[o] = r; out[o + 1] = g; out[o + 2] = b; out[o + 3] = a[s]; } return sharp(out, { raw: { width: w, height: h, channels: 4 } }); };
  const [top, bot] = [bandes[0][0], bandes[bandes.length - 1][1]];
  const [mn, mx] = cols(top, bot);
  const pic = bandes[0]; const [pmn, pmx] = cols(pic[0], pic[1]);
  console.log('logo', mn, top, mx, bot, 'picto', pmn, pic[0], pmx, pic[1]);
  await teinte('ff8a4c', mn, top, mx - mn + 1, bot - top).png().toFile('assets/images/logo-nuit.png');
  await teinte('a85a38', mn, top, mx - mn + 1, bot - top).png().toFile('assets/images/logo-jour.png');
  await teinte('ff8a4c', pmn, pic[0], pmx - pmn + 1, pic[1] - pic[0]).png().toFile('assets/images/picto-nuit.png');
  await teinte('f6f2ea', pmn, pic[0], pmx - pmn + 1, pic[1] - pic[0]).png().toFile('assets/images/picto-creme.png');
  // icône iPhone et favicon : pictogramme sur la nuit
  const p = await teinte('ff8a4c', pmn, pic[0], pmx - pmn + 1, pic[1] - pic[0]).png().toBuffer();
  const pr = await sharp(p).resize(132, 132, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } }).toBuffer();
  await sharp({ create: { width: 180, height: 180, channels: 4, background: '#0d0f22' } }).composite([{ input: pr, gravity: 'center' }]).png().toFile('assets/images/apple-touch-icon.png');
  const f = await sharp(p).resize(52, 52, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } }).toBuffer();
  await sharp({ create: { width: 64, height: 64, channels: 4, background: '#0d0f22' } }).composite([{ input: f, gravity: 'center' }]).png().toFile('assets/images/favicon.png');
  for (const n of ['logo-nuit', 'logo-jour', 'picto-nuit', 'picto-creme']) { const m = await sharp(`assets/images/${n}.png`).metadata(); console.log(n, m.width, m.height); }
})();
