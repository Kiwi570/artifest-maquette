/* Briques communes aux pages : carte produit, visuel dessiné, prix, ouvertures, appel final. */
import { html, brut } from '../../outils/gabarit.mjs';

export const euros = (n) => new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(n).replace(/[  ]/g, ' ');
export const produit = (c, id) => c.donnees.produits.find((p) => p.id === id);
export const nomRayon = (c, id) => (c.donnees.rayons.find((r) => r.id === id) || {}).court || id;

/* Vignette d'un produit : sa photo (fond blanc, emballage entier) ou, en attendant, un visuel dessiné à sa couleur. */
export function vignette(c, p, { taille = '(max-width: 760px) 45vw, 240px', classe = '' } = {}) {
  const img = p.image && c.donnees.images[p.image];
  if (img) {
    const ws = img.largeurs || [];
    const srcset = ws.map((w) => `/assets/images/${p.image}-${w}.webp ${w}w`).join(', ');
    const [rw, rh] = String(img.ratio || '1:1').split(':').map(Number);
    const w0 = ws[ws.length - 1] || 640;
    return html`<div class="vignette ${classe}"><img src="/assets/images/${p.image}-${ws[0] || 320}.webp" srcset="${srcset}" sizes="${taille}" alt="${img.alt}" width="${w0}" height="${Math.round(w0 * rh / rw)}" loading="lazy" decoding="async"></div>`;
  }
  const couleurs = (p.couleur || '#ffd166').split('|');
  const rayons = Array.from({ length: 16 }, (_, i) => {
    const a = (i / 16) * Math.PI * 2, r1 = 14, r2 = 34 + (i % 2) * 8;
    const col = couleurs[i % couleurs.length];
    return `<line x1="${(50 + Math.cos(a) * r1).toFixed(1)}" y1="${(46 + Math.sin(a) * r1).toFixed(1)}" x2="${(50 + Math.cos(a) * r2).toFixed(1)}" y2="${(46 + Math.sin(a) * r2).toFixed(1)}" stroke="${col}"/>`;
  }).join('');
  return html`<div class="vignette vignette--dessin ${classe}" data-visuel role="img" aria-label="${c.s('commun.visuelDessine')} : ${p.nom}"><svg viewBox="0 0 100 100" aria-hidden="true"><g stroke-width="2.4" stroke-linecap="round">${brut(rayons)}</g><circle cx="50" cy="46" r="5" fill="${couleurs[0]}"/></svg><span>${p.nom}</span></div>`;
}

export function prix(c, p) {
  return html`<p class="prix" data-prix><strong>${euros(p.prix)}</strong>${p.prixAvant ? html` <s aria-label="${c.s('commun.prixAvant')} ${euros(p.prixAvant)}">${euros(p.prixAvant)}</s>` : ''}</p>`;
}

export function ajouter(c, p, { long = false, classe = 'bouton bouton--petit' } = {}) {
  if (!p.stock) return html`<p class="rupture">${c.t('commun.rupture')}</p>`;
  const image = p.image ? `/assets/images/${p.image}-320.webp` : '';
  return html`<button type="button" class="${classe}" data-panier-ajouter="${p.id}" data-nom="${p.nom}" data-prix="${p.prix}"${image ? brut(` data-image="${image}"`) : ''}>${long ? c.t('commun.ajouterLong') : c.t('commun.ajouter')}<span class="visuellement-cache"> ${p.nom}</span></button>`;
}

/* Carte produit des grilles et des galeries. */
export function carte(c, p, { attrs = '', taille } = {}) {
  return html`<article class="carte-produit${p.stock ? '' : ' est-rupture'}" data-panier-produit${brut(attrs ? ' ' + attrs : '')}>
  ${vignette(c, p, { taille })}
  ${p.badge ? html`<span class="badge">${p.badge}</span>` : ''}
  <h3 class="carte-produit-nom">${p.nom}</h3>
  <p class="carte-produit-rayon">${p.rayons.map((r) => nomRayon(c, r)).join(' · ')}</p>
  <div class="carte-produit-pied">${prix(c, p)}${ajouter(c, p)}</div>
</article>`;
}

/* Appel final commun aux pages : un bouquet tiré au-dessus du titre. */
export function appel(c, { titre, texte, lien }) {
  return html`<section class="appel nuit" id="appel">
  <canvas class="ciel ciel--appel" data-ciel="appel" data-effet="bouquet" aria-hidden="true" data-audit-ignorer></canvas>
  <div class="conteneur appel-corps">
    <h2 class="appel-titre" data-anime="lignes">${titre}</h2>
    <p data-anime>${texte}</p>
    <p class="appel-actions" data-anime>
      ${lien}
      <a class="bouton bouton--contour" href="tel:${c.site.contact.telephoneLien}" data-survol="magnetique">${c.t('commun.appeler')} ${c.site.contact.telephone}</a>
      <a class="lien-fleche" href="mailto:${c.site.contact.email}">${c.site.contact.email}</a>
    </p>
  </div>
</section>`;
}
