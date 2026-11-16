/* Effets propres à Artifest (plan d'animation) :
   - bouquet : feux d'artifice en canvas au-dessus des sections de nuit, une fusée tirée au clic dans le ciel de l'ouverture ;
   - meche : une mèche qui brûle au défilement entre les trois étapes de la commande ;
   - fusee-panier : l'article ajouté file en fusée vers le panier (module envol-vers-le-panier, habillé en CSS) ;
   - fumee : la fumée du feu de jour prend la couleur choisie.
   Le socle gère l'ouverture, le voile, l'en-tête, les apparitions et la bibliothèque d'effets. */
import { demarrer, boucle, versObjet, quand, rafraichir } from './socle/index.js?v=1';
import { ciel, PALETTES } from './feux.js?v=1';

const gsap = window.gsap;
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const euros = (n) => new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(n).replace(/[  ]/g, ' ');

/* ---------- Panier (module panier-en-tiroir) et catalogue (module catalogue-filtres-flip) ---------- */
let panier = null;
async function modules() {
  const t = $('[data-module="panier-en-tiroir"]');
  if (t) {
    try {
      const m = await import('./modules/panier-en-tiroir/module.js?v=1');
      const reglages = JSON.parse($('[data-panier-reglages]', t)?.textContent || '{}');
      panier = await m.init(t, reglages);
      /* Vignette de l'annonce d'ajout : jamais d'image sans source avant le premier ajout. */
      $$('.pet__annonce img').forEach((i) => { if (!i.getAttribute('src')) i.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'; });
    } catch (e) { console.warn('panier', e); }
  }
  const cat = $('[data-module="catalogue-filtres-flip"]');
  if (cat) {
    try {
      const m = await import('./modules/catalogue-filtres-flip/module.js?v=1');
      await m.init(cat, { mots: ['article', 'articles'], duree: 0.35 });
    } catch (e) { console.warn('catalogue', e); }
  }
}

/* ---------- Bouquets ---------- */
let cielHero = null;
function bouquets() {
  const h = $('[data-ciel="hero"]');
  if (h) {
    cielHero = ciel(h, {
      auto: true, cadence: 1.15, tirAuClic: true, etoiles: true,
      zone: (W, H) => (W < 760 ? { x: W * (0.3 + Math.random() * 0.6), y: H * (0.1 + Math.random() * 0.25) } : { x: W * (0.5 + Math.random() * 0.42), y: H * (0.12 + Math.random() * 0.32) }),
    });
  }
  $$('[data-ciel="appel"]').forEach((c) => {
    const s = ciel(c, { auto: true, cadence: 1.6, zone: (W, H) => ({ x: W * (0.12 + Math.random() * 0.76), y: H * (0.12 + Math.random() * 0.3) }) });
    if (window.ScrollTrigger) ScrollTrigger.create({ trigger: c.parentElement, start: 'top 70%', once: true, onEnter: () => { s.fusee(s.w * 0.3, s.h, s.w * 0.3, s.h * 0.25); s.fusee(s.w * 0.7, s.h, s.w * 0.72, s.h * 0.2); } });
  });
}

/* ---------- Mèche ---------- */
function meche() {
  const zone = $('[data-effet="meche"]');
  if (!zone || !window.ScrollTrigger) return;
  const svg = $('.meche', zone), brule = $('.meche-brule', svg), etincelle = $('.meche-etincelle', zone), etapes = $$('.etape', zone);
  let points = [], L = 1;
  const mesurer = () => {
    /* Table de points calculée une fois (jamais de getPointAtLength pendant le défilement). */
    L = brule.getTotalLength();
    const r = svg.getBoundingClientRect(), z = zone.getBoundingClientRect(), vb = svg.viewBox.baseVal;
    const sx = r.width / vb.width, sy = r.height / vb.height;
    points = Array.from({ length: 121 }, (_, i) => { const p = brule.getPointAtLength((L * i) / 120); return [r.left - z.left + p.x * sx, r.top - z.top + p.y * sy]; });
    brule.style.strokeDasharray = `${L} ${L}`;
  };
  let progres = 0;
  const poser = () => {
    if (!points.length) return;
    brule.style.strokeDashoffset = String(L * (1 - progres));
    const p = points[Math.round(progres * 120)];
    etincelle.style.transform = `translate(${p[0]}px, ${p[1]}px)`;
    etapes.forEach((e, i) => e.classList.toggle('est-allumee', progres >= i / etapes.length + 0.02 || progres > 0.98));
  };
  mesurer(); poser();
  quand('rafraichi', () => { mesurer(); poser(); });
  ScrollTrigger.create({ trigger: zone, start: 'top 70%', end: 'bottom 55%', scrub: 0.4, onUpdate: (st) => { progres = st.progress; poser(); }, onRefresh: (st) => { progres = st.progress; poser(); } });
}

/* ---------- Fumée de couleur (feux de jour) ---------- */
function fumee() {
  const c = $('[data-effet="fumee"]');
  if (!c) return;
  const ctx = c.getContext('2d');
  const dpr = Math.min(devicePixelRatio || 1, innerWidth < 760 ? 1 : 1.25);
  let W = 0, H = 0;
  const mes = () => { const r = c.getBoundingClientRect(); W = r.width; H = r.height; c.width = Math.round(W * dpr); c.height = Math.round(H * dpr); ctx.setTransform(dpr, 0, 0, dpr, 0, 0); };
  mes(); new ResizeObserver(mes).observe(c);
  let couleur = '#e8443a';
  const sprites = new Map();
  const sprite = (hex) => {
    if (sprites.has(hex)) return sprites.get(hex);
    const s = document.createElement('canvas'); s.width = s.height = 128;
    const g = s.getContext('2d'), gr = g.createRadialGradient(64, 64, 0, 64, 64, 64);
    gr.addColorStop(0, hex + 'cc'); gr.addColorStop(0.5, hex + '55'); gr.addColorStop(1, hex + '00');
    g.fillStyle = gr; g.fillRect(0, 0, 128, 128); sprites.set(hex, s); return s;
  };
  const bouffees = [];
  let acc = 0;
  boucle(c, (dt, t) => {
    acc += dt;
    while (acc > 0.07) {
      acc -= 0.07;
      if (bouffees.length < 70) bouffees.push({ x: W * 0.5 + (Math.random() - 0.5) * 18, y: H * 0.78, vx: (Math.random() - 0.35) * 26, vy: -60 - Math.random() * 40, r: 18 + Math.random() * 14, vie: 0, duree: 4 + Math.random() * 1.5, c: couleur });
    }
    ctx.clearRect(0, 0, W, H);
    for (let i = bouffees.length - 1; i >= 0; i--) {
      const b = bouffees[i];
      b.vie += dt;
      const k = b.vie / b.duree;
      if (k >= 1) { bouffees.splice(i, 1); continue; }
      b.x += (b.vx + Math.sin(t * 0.8 + i) * 10) * dt; b.y += b.vy * dt; b.vy *= Math.exp(-0.25 * dt);
      const r = b.r + k * Math.min(W, H) * 0.32;
      ctx.globalAlpha = Math.min(1, k * 6) * (1 - k) * 0.9;
      ctx.drawImage(sprite(b.c), b.x - r, b.y - r, r * 2, r * 2);
    }
    ctx.globalAlpha = 1;
  }, { lourde: true });
  /* Choix de la couleur : la fumée et le produit affiché suivent. */
  const section = c.closest('[data-feux-jour]');
  $$('input[name="couleur-jour"]', section).forEach((r) => r.addEventListener('change', () => {
    couleur = r.dataset.hex;
    $$('.jour-produit', section).forEach((p) => { const ok = p.dataset.couleur === r.value; p.hidden = !ok; p.classList.toggle('est-choisi', ok); });
    const vis = $('.jour-produit:not([hidden])', section);
    if (vis && gsap) gsap.fromTo(vis, { y: 16, opacity: 0 }, { y: 0, opacity: 1, duration: 0.45, ease: 'power3.out', clearProps: 'transform,opacity' });
  }));
}

/* ---------- Composeur de budget ---------- */
const PREFERENCES = {
  mariage: { rayons: ['longue-duree', 'jour-scene', 'compacts', 'fumigenes'], vedette: ['full-emotion', 'jorge-super-show-100', 'feu-jour-blanc', '2-declencheurs-2-jets-argents', '3-fumigenes-france', 'panther'] },
  anniversaire: { rayons: ['compacts', 'petards', 'jour-scene'], vedette: ['jorge-space-line-2', 'dragon-fontaine', 'show-box-titan', 'rainbow-pro', 'fontaine-2', '5-jets-interieur-2m'] },
  bapteme: { rayons: ['jour-scene', 'fumigenes', 'compacts'], vedette: ['feu-jour-rose', 'feu-jour-bleu', '5-jets-scene-interieur-3m', 'douce-france', 'blue-sky', 'color-balls'] },
  nouvelan: { rayons: ['compacts', 'petards', 'longue-duree'], vedette: ['jorge-super-show-100', '20x-shark-fr', 'pack-6-fusees', 'generation-13', 'tyrant', 'assortiment-giant', 'big-bum'] },
};
function composeur() {
  const s = $('[data-composeur]');
  if (!s) return;
  const cat = JSON.parse($('[data-composeur-catalogue]', s).textContent);
  const parId = Object.fromEntries(cat.map((p) => [p.id, p]));
  const liste = $('[data-composeur-liste]', s), vide = $('[data-composeur-vide]', s), total = $('[data-composeur-total]', s);
  const budget = $('[data-budget]', s), sortie = $('[data-budget-sortie]', s);
  let selection = [], affiche = 0;
  const compte = { v: 0 };
  const choisir = (occ, b) => {
    const pref = PREFERENCES[occ];
    const candidats = [...pref.vedette.map((id) => parId[id]).filter(Boolean),
      ...cat.filter((p) => pref.rayons.includes(p.rayons[0]) && !pref.vedette.includes(p.id)).sort((a, c) => c.prix - a.prix)];
    const out = []; let reste = b;
    for (const p of candidats) { if (out.length >= 5) break; if (p.prix <= reste && !out.includes(p)) { out.push(p); reste -= p.prix; } }
    return out;
  };
  const rendre = () => {
    const occ = $('input[name="occasion"]:checked', s).value, b = +budget.value;
    sortie.textContent = euros(b).replace(',00', '');
    selection = choisir(occ, b);
    liste.innerHTML = selection.map((p) => `<li><div class="vignette${p.image ? '' : ' vignette--dessin'}">${p.image ? `<img src="${p.image}" alt="" width="64" height="64" loading="lazy">` : `<svg viewBox="0 0 100 100" aria-hidden="true"><circle cx="50" cy="50" r="10" fill="${p.couleur || '#ffd166'}"/></svg>`}</div><span class="nom">${p.nom}<span class="rayon-mini">${p.rayon || ''}</span></span><span class="prix-ligne">${euros(p.prix)}</span></li>`).join('');
    vide.hidden = selection.length > 0;
    const cible = selection.reduce((t, p) => t + p.prix, 0);
    if (gsap) gsap.to(compte, { v: cible, duration: 0.6, ease: 'power2.out', onUpdate: () => { total.textContent = euros(compte.v); } });
    else total.textContent = euros(cible);
    if (gsap) gsap.fromTo(liste.children, { y: 12, opacity: 0 }, { y: 0, opacity: 1, duration: 0.4, stagger: 0.05, ease: 'power2.out', clearProps: 'transform,opacity' });
  };
  let attente = 0;
  budget.addEventListener('input', () => { cancelAnimationFrame(attente); attente = requestAnimationFrame(rendre); });
  $$('input[name="occasion"]', s).forEach((r) => r.addEventListener('change', rendre));
  $('[data-composeur-ajouter]', s).addEventListener('click', async (e) => {
    if (!panier || !selection.length) return;
    for (const p of selection) await panier.ajouter({ id: p.id, nom: p.nom, prix: p.prix, image: p.image }, e.currentTarget);
  });
  rendre();
}

/* ---------- Aperçu rapide (boutique) ---------- */
function apercu() {
  const d = $('[data-apercu]');
  if (!d) return;
  $$('[data-apercu-ouvrir]').forEach((b) => b.addEventListener('click', () => {
    const carte = b.closest('[data-panier-produit]');
    $('[data-apercu-contenu]', d).innerHTML = carte.querySelector('template[data-apercu-modele]').innerHTML;
    d.showModal();
  }));
  d.addEventListener('click', (e) => { if (e.target === d || e.target.closest('[data-apercu-fermer]')) d.close(); });
}

/* ---------- Tuiles des rayons (boutique) : elles choisissent le filtre du catalogue. ---------- */
function tuiles() {
  $$('[data-choisir-rayon]').forEach((t) => t.addEventListener('click', () => {
    const b = $(`[data-filtre-groupe="rayon"] [data-valeur="${t.dataset.choisirRayon}"]`);
    if (b) b.click();
    const cat = $('#catalogue');
    if (cat) window.scrollTo({ top: cat.getBoundingClientRect().top + scrollY - (parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--entete-h')) || 64), behavior: 'smooth' });
  }));
}

/* ---------- Recherche (boutique) : accents, majuscules et pluriels ignorés ---------- */
function recherche() {
  const champ = $('[data-recherche]');
  if (!champ) return;
  const norm = (t) => t.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/s\b/g, '');
  const fiches = $$('[data-grille] > [data-panier-produit]');
  const vide = $('[data-recherche-vide]');
  const filtrer = () => {
    const q = norm(champ.value.trim());
    let n = 0;
    fiches.forEach((f) => { const ok = !q || norm(f.dataset.texte || f.textContent).includes(q); f.classList.toggle('hors-recherche', !ok); if (ok && !f.hidden) n++; });
    if (vide) vide.hidden = !q || n > 0;
    rafraichir();
  };
  champ.addEventListener('input', filtrer);
  const p = new URLSearchParams(location.search);
  if (p.get('q')) { champ.value = p.get('q'); filtrer(); }
  if (p.get('focus') === 'recherche') quand('pret', () => setTimeout(() => champ.focus({ preventScroll: true }), 400));
}

/* ---------- Liens vers la boutique depuis la boutique : on choisit le filtre et on défile, sans recharger. ---------- */
function liensMemePage() {
  if (!$('[data-module="catalogue-filtres-flip"]')) return;
  document.addEventListener('click', (e) => {
    const a = e.target.closest && e.target.closest('a[href]');
    if (!a || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey) return;
    const u = new URL(a.href, location.href);
    if (u.origin !== location.origin || u.pathname.replace(/\.html$/, '') !== location.pathname.replace(/\.html$/, '') || !u.search) return;
    e.preventDefault();
    const rayon = u.searchParams.get('rayon');
    if (rayon) $(`[data-filtre-groupe="rayon"] [data-valeur="${rayon}"]`)?.click();
    const cible = $(u.hash || '#catalogue');
    if (cible) window.scrollTo({ top: cible.getBoundingClientRect().top + scrollY - (parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--entete-h')) || 64) });
    if (u.searchParams.get('focus') === 'recherche') $('[data-recherche]')?.focus({ preventScroll: true });
  }, true);
  /* La grille change de hauteur après un filtre : positions recalculées. */
  const g = $('[data-grille]');
  let t = 0;
  if (g) new ResizeObserver(() => { clearTimeout(t); t = setTimeout(() => window.ScrollTrigger && ScrollTrigger.refresh(), 40); }).observe(g);
}

/* ---------- Démarrage ---------- */
demarrer({
  preparer() {
    modules();
    bouquets();
    meche();
    fumee();
    composeur();
    apercu();
    recherche();
    tuiles();
    liensMemePage();
  },
  /* Intro (2,4 s) : la mèche s'allume, la fusée monte, le bouquet éclate autour du logo,
     puis le logo glisse jusqu'au cœur du bouquet de la page et la page s'ouvre en cercle depuis lui. */
  jouer() {
    if (!gsap) return null;
    const panneau = $('[data-ouverture]'), cv = $('.ouverture-ciel', panneau), logo = $('.ouverture-logo', panneau);
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    let sky = null;
    if (cv) sky = ciel(cv, { echelle: 1.9, etoiles: true });
    const L = () => { const r = logo.getBoundingClientRect(); return { x: r.left + r.width / 2, y: r.top + r.height / 2 }; };
    tl.fromTo('.ouverture-meche', { opacity: 0, scale: 0.4 }, { opacity: 1, scale: 1, duration: 0.25 }, 0)
      .call(() => { if (sky) { const p = L(); sky.fusee(innerWidth / 2, innerHeight * 0.86, p.x, p.y, PALETTES[0]); } }, null, 0.15)
      .to('.ouverture-meche', { opacity: 0, duration: 0.2 }, 0.35)
      .fromTo(logo, { opacity: 0, scale: 0.6 }, { opacity: 1, scale: 1, duration: 0.45, ease: 'back.out(1.6)' }, 0.95)
      .call(() => { if (sky) { const p = L(); sky.tirer(p.x - 150, p.y - 70, PALETTES[1], 70); sky.tirer(p.x + 160, p.y - 50, PALETTES[2], 70); sky.tirer(p.x, p.y - 150, PALETTES[3], 60); } }, null, 1.05);
    versObjet(tl, { a: 1.35, duree: 0.45, ouverture: 0.6 });
    if ($('.hero-ligne')) {
      tl.fromTo('.hero-ligne', { yPercent: 125, opacity: 1 }, { yPercent: 0, opacity: 1, duration: 0.75, stagger: 0.1 }, 1.75)
        .fromTo('.hero-intro, .hero-actions, .hero-info, .hero-astuce', { y: 18, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, stagger: 0.07 }, 1.9);
    } else intro(tl, 1.7);
    tl.call(() => { if (cielHero) { cielHero.fusee(cielHero.w * 0.72, cielHero.h, cielHero.w * 0.72, cielHero.h * 0.3, PALETTES[0]); } }, null, 1.8);
    return tl;
  },
  etatFinal() {
    if (!gsap) return;
    gsap.set('.hero-ligne, .hero-intro, .hero-actions, .hero-info, .hero-astuce, [data-ouverture-page] [data-anime="gsap"]', { clearProps: 'transform,opacity' });
  },
  arrivee() {
    if (!gsap) return;
    if ($('.hero-ligne')) {
      gsap.fromTo('.hero-ligne', { yPercent: 125, opacity: 1 }, { yPercent: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out', delay: 0.1 });
      gsap.fromTo('.hero-intro, .hero-actions, .hero-info, .hero-astuce', { y: 18, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, stagger: 0.08, delay: 0.3 });
      if (cielHero) setTimeout(() => cielHero.fusee(cielHero.w * 0.7, cielHero.h, cielHero.w * 0.7, cielHero.h * 0.3, PALETTES[0]), 300);
    } else intro(gsap.timeline({ delay: 0.1 }), 0);
  },
});

/* Ouverture des pages intérieures : les éléments [data-anime="gsap"] de l'ouverture arrivent l'un après l'autre. */
function intro(tl, a) {
  const els = $$('[data-ouverture-page] [data-anime="gsap"]');
  if (!els.length) return;
  tl.fromTo(els, { y: 26, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, stagger: 0.08, ease: 'power3.out' }, a);
}
