/* Pont entre les modules de la bibliothèque (qui appellent pret([...]) de leur propre socle) et le socle du projet :
   même GSAP (chargé par la page), même rafraîchissement regroupé, pas de second défilement adouci.
   Flip est chargé à la demande depuis /assets/vendor/. */
import { rafraichir, boucle as boucleProjet } from '../socle/index.js?v=1';

const charges = {};
function script(src) {
  return (charges[src] ??= new Promise((ok, ko) => {
    const s = document.createElement('script');
    s.src = src; s.onload = ok; s.onerror = () => ko(new Error('pont : ' + src));
    document.head.appendChild(s);
  }));
}

export const socle = {
  gsap: null, ScrollTrigger: null, SplitText: null, Flip: null, OGL: null, lenis: null,
  get calme() { return false; },
  get souris() { return matchMedia('(hover: hover) and (pointer: fine)').matches; },
  get telephone() { return innerWidth < 700; },
  webgl() {
    if (/[?&]sanswebgl\b/.test(location.search)) return false;
    try { const c = document.createElement('canvas'); return !!(c.getContext('webgl2') || c.getContext('webgl')); } catch { return false; }
  },
  rafraichir,
  mesurer: rafraichir,
  /* Les modules appellent fn(t, dt) ; la boucle du projet appelle fn(dt, t) en secondes. */
  boucle(el, fn) { return boucleProjet(el, (dt, t) => fn(t * 1000, dt * 1000)); },
};

export async function pret(besoins = []) {
  const voulus = new Set(besoins.map((b) => b.toLowerCase()));
  if (voulus.has('flip') && !window.Flip) { try { await script('/assets/vendor/Flip.min.js'); } catch { /* sans Flip : changement direct */ } }
  const g = window.gsap || null;
  socle.gsap = g;
  if (g && window.ScrollTrigger && !socle.ScrollTrigger) { g.registerPlugin(window.ScrollTrigger); socle.ScrollTrigger = window.ScrollTrigger; }
  if (g && window.SplitText && !socle.SplitText) { g.registerPlugin(window.SplitText); socle.SplitText = window.SplitText; }
  if (g && window.Flip && !socle.Flip) { g.registerPlugin(window.Flip); socle.Flip = window.Flip; }
  return socle;
}
