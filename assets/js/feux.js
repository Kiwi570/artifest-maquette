/* Moteur de feux d'artifice en canvas 2D (effet « bouquet » du plan d'animation).
   Particules en pool, dessin piloté par le temps écoulé, densité de pixels limitée, boucle arrêtée hors écran.
   ciel(canvas, { auto, cadence, tirAuClic }) → { tirer(x, y, palette), fusee(x0, y0, x1, y1, palette), arreter() } */
import { boucle } from './socle/index.js?v=1';

export const PALETTES = [
  ['#ffd166', '#fff3c4', '#ffb347'],
  ['#ff5b2e', '#ffd166', '#fff'],
  ['#ff8a4c', '#ffe08a'],
  ['#9ad1ff', '#ffffff', '#ffd166'],
  ['#ff7ac8', '#ffd166'],
  ['#7bd36a', '#fff3c4'],
];
const telephone = () => innerWidth < 760;

export function ciel(canvas, o = {}) {
  const ctx = canvas.getContext('2d');
  const dpr = Math.min(window.devicePixelRatio || 1, telephone() ? 1 : 1.25);
  let W = 0, H = 0;
  const mesurer = () => {
    const r = canvas.getBoundingClientRect();
    W = Math.max(1, r.width); H = Math.max(1, r.height);
    canvas.width = Math.round(W * dpr); canvas.height = Math.round(H * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  };
  mesurer();
  new ResizeObserver(mesurer).observe(canvas);

  const parts = [], fusees = [];
  const MAX = telephone() ? 380 : 900;
  function tirer(x, y, palette = PALETTES[(Math.random() * PALETTES.length) | 0], n) {
    const nb = n || (telephone() ? 46 : 78);
    const vitesse = (o.echelle || 1) * (Math.min(W, H) / 520) * (150 + Math.random() * 60);
    const saule = Math.random() < 0.35;
    for (let i = 0; i < nb && parts.length < MAX; i++) {
      const a = (i / nb) * Math.PI * 2 + Math.random() * 0.2;
      const v = vitesse * (0.55 + Math.random() * 0.45);
      parts.push({ x, y, px: x, py: y, vx: Math.cos(a) * v, vy: Math.sin(a) * v, vie: 0, duree: (saule ? 2.1 : 1.35) + Math.random() * 0.6,
        c: palette[i % palette.length], g: saule ? 70 : 110, frein: saule ? 1.6 : 2.4, scint: Math.random() < 0.3 });
    }
    // cœur blanc bref
    parts.push({ x, y, px: x, py: y, vx: 0, vy: 0, vie: 0, duree: 0.22, c: '#fff', g: 0, frein: 0, coeur: true, r: Math.min(16, 6 + vitesse * 0.03) });
  }
  function fusee(x0, y0, x1, y1, palette, apres) {
    fusees.push({ x0, y0, x1, y1, t: 0, duree: 0.7 + Math.random() * 0.25, palette, apres });
  }
  const etoiles = o.etoiles ? Array.from({ length: telephone() ? 26 : 48 }, () => ({ x: Math.random(), y: Math.random() * 0.7, r: 0.6 + Math.random() * 1.3, p: Math.random() * 6.28, v: 0.6 + Math.random() * 1.6 })) : [];
  let prochain = 0.6;
  const etape = (dt, t) => {
    ctx.clearRect(0, 0, W, H);
    if (o.auto && !document.hidden) {
      prochain -= dt;
      if (prochain <= 0) {
        prochain = (o.cadence || 1.9) * (0.7 + Math.random() * 0.6);
        const zone = o.zone ? o.zone(W, H) : { x: W * (0.45 + Math.random() * 0.5), y: H * (0.15 + Math.random() * 0.3) };
        fusee(zone.x + (Math.random() - 0.5) * 40, H + 10, zone.x, zone.y);
      }
    }
    for (const e of etoiles) {
      ctx.globalAlpha = 0.25 + 0.6 * (0.5 + 0.5 * Math.sin(t * e.v + e.p));
      ctx.fillStyle = '#fff3c4'; ctx.fillRect(e.x * W, e.y * H, e.r, e.r);
    }
    ctx.globalAlpha = 1;
    ctx.globalCompositeOperation = 'lighter';
    for (let i = fusees.length - 1; i >= 0; i--) {
      const f = fusees[i];
      f.t += dt / f.duree;
      const k = Math.min(1, f.t), e = 1 - (1 - k) * (1 - k);
      const x = f.x0 + (f.x1 - f.x0) * e, y = f.y0 + (f.y1 - f.y0) * e;
      const g = ctx.createLinearGradient(x, y, x, y + 46);
      g.addColorStop(0, 'rgba(255,240,200,.95)'); g.addColorStop(1, 'rgba(255,140,60,0)');
      ctx.strokeStyle = g; ctx.lineWidth = 2.2; ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x - (f.x1 - f.x0) * 0.06, y + 46); ctx.stroke();
      ctx.fillStyle = '#fff'; ctx.beginPath(); ctx.arc(x, y, 2.4, 0, 6.283); ctx.fill();
      if (parts.length < MAX && Math.random() < 0.8) parts.push({ x, y: y + 6, px: x, py: y + 6, vx: (Math.random() - 0.5) * 30, vy: 20 + Math.random() * 40, vie: 0, duree: 0.5 + Math.random() * 0.4, c: '#ffb347', g: 60, frein: 2, scint: true });
      if (k >= 1) { fusees.splice(i, 1); tirer(f.x1, f.y1, f.palette); f.apres && f.apres(); }
    }
    for (let i = parts.length - 1; i >= 0; i--) {
      const p = parts[i];
      p.vie += dt;
      const r = p.vie / p.duree;
      if (r >= 1) { parts[i] = parts[parts.length - 1]; parts.pop(); continue; }
      if (p.coeur) {
        const R = p.r * (0.8 + r), gr = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, R);
        gr.addColorStop(0, 'rgba(255,250,235,1)'); gr.addColorStop(1, 'rgba(255,200,120,0)');
        ctx.globalAlpha = 1 - r; ctx.fillStyle = gr; ctx.beginPath(); ctx.arc(p.x, p.y, R, 0, 6.283); ctx.fill();
        continue;
      }
      p.px = p.x; p.py = p.y;
      const frein = Math.exp(-p.frein * dt);
      p.vx *= frein; p.vy = p.vy * frein + p.g * dt;
      p.x += p.vx * dt; p.y += p.vy * dt;
      let a = 1 - r * r;
      if (p.scint && r > 0.4) a *= 0.4 + 0.6 * Math.abs(Math.sin(t * 22 + i));
      ctx.globalAlpha = a;
      ctx.strokeStyle = p.c; ctx.lineWidth = 2;
      ctx.beginPath(); ctx.moveTo(p.px - (p.x - p.px) * 2, p.py - (p.y - p.py) * 2); ctx.lineTo(p.x, p.y); ctx.stroke();
    }
    ctx.globalAlpha = 1; ctx.globalCompositeOperation = 'source-over';
  };
  const b = boucle(canvas, etape, { lourde: true });
  if (o.tirAuClic) {
    canvas.addEventListener('pointerdown', (e) => {
      const r = canvas.getBoundingClientRect();
      const x = e.clientX - r.left, y = e.clientY - r.top;
      fusee(x + (Math.random() - 0.5) * 30, H + 10, x, y, PALETTES[(Math.random() * PALETTES.length) | 0]);
    });
  }
  return { tirer, fusee, arreter: () => b && b.arreter && b.arreter(), get w() { return W; }, get h() { return H; } };
}
