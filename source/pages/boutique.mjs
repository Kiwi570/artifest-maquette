/* Boutique : ouverture « grand titre puis rayons » (compteurs), catalogue filtrable (module catalogue-filtres-flip),
   recherche, aperçu rapide, panier en tiroir, appel final. */
import { html, brut, texteBrut } from '../../outils/gabarit.mjs';
import { carte, vignette, prix, ajouter, nomRayon, appel } from '../gabarits/produits.mjs';

export const page = { cle: 'boutique', fichier: 'boutique', imagePartage: 'grok/boutique-ouverture-1280.webp' };

const selection = (p) => [p.badge && /nouveau|best/i.test(p.badge) ? 'nouveau' : '', p.prixAvant || (p.badge && /baisse|prix bas|exceptionnel/i.test(p.badge)) ? 'promo' : ''].filter(Boolean).join(' ') || 'aucune';

export default (c) => {
  const P = c.donnees.produits;
  const R = c.donnees.rayons;
  const max = Math.ceil(Math.max(...P.map((p) => p.prix)) / 10) * 10;
  return html`
<section class="boutique-ouverture nuit" id="debut" data-ouverture-page>
  ${c.media({ nom: 'grok/boutique-ouverture', alt: c.s('pages.boutique.partageAlt'), cadrage: '65% 45%', priorite: true, classe: 'boutique-ouverture-media', sizes: '100vw', attrs: 'data-fx="parallaxe" data-fx-force="12"' })}
  <div class="conteneur boutique-ouverture-corps">
    <h1 class="boutique-titre" data-anime="gsap">${c.t('boutique.titre')}</h1>
    <p class="boutique-intro masque-ecran-bas" data-anime="gsap">${c.t('boutique.texte')}</p>
    <form class="recherche" role="search" data-anime="gsap" action="${c.url('boutique', 'catalogue')}" onsubmit="return false">
      <label class="visuellement-cache" for="recherche">${c.t('boutique.rechercheLabel')}</label>
      <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="10.5" cy="10.5" r="6.5"/><path d="m15.5 15.5 5 5"/></svg>
      <input id="recherche" name="q" type="search" placeholder="${c.s('boutique.recherchePlaceholder')}" autocomplete="off" data-recherche data-action-principale>
    </form>
    <p class="boutique-info" data-info-cle data-anime="gsap"><span class="pastille-majeurs">18+</span> ${c.t('boutique.info')} · ${c.t('commun.majeurs')}</p>
    <ul class="tuiles-rayons" data-anime="gsap" data-iris-centre>
      ${R.map((r) => {
        const n = P.filter((p) => p.rayons.includes(r.id)).length;
        return html`<li><button type="button" class="tuile-rayon" data-choisir-rayon="${r.id}"><span class="tuile-nombre" data-compteur="${n}">${n}</span><span class="tuile-nom">${r.court}</span></button></li>`;
      })}
    </ul>
  </div>
</section>

<section class="catalogue jour" id="catalogue" data-module="catalogue-filtres-flip">
  <div class="conteneur">
    <h2 class="titre-section titre-moyen catalogue-titre" data-anime="lignes">${c.t('boutique.tousTitre')}</h2>
    <div class="filtres" data-anime>
      <div class="filtre-groupe" role="group" aria-label="${c.s('boutique.rayonsAria')}" data-filtre-groupe="rayon">
        <button type="button" data-valeur="tout" aria-pressed="true">${c.t('boutique.tout')}</button>
        ${R.map((r) => html`<button type="button" data-valeur="${r.id}" aria-pressed="false">${r.court}</button>`)}
      </div>
      <div class="filtre-groupe" role="group" aria-label="${c.s('boutique.etiquettes')}" data-filtre-groupe="selection">
        <button type="button" data-valeur="tout" aria-pressed="true">${c.t('boutique.toutes')}</button>
        <button type="button" data-valeur="nouveau" aria-pressed="false">${c.t('boutique.nouveautes')}</button>
        <button type="button" data-valeur="promo" aria-pressed="false">${c.t('boutique.promos')}</button>
      </div>
      <div class="filtres-bas">
        <label class="filtre-budget">${c.t('boutique.budget')} <b data-sortie="prix"></b><input type="range" min="10" max="${max}" step="10" value="${max}" data-filtre-max="prix"></label>
        <label class="filtre-tri">${c.t('boutique.tri')}
          <select data-tri><option value="ordre">${c.t('boutique.triOrdre')}</option><option value="prix-asc">${c.t('boutique.triPrixAsc')}</option><option value="prix-desc">${c.t('boutique.triPrixDesc')}</option></select>
        </label>
        <p class="filtre-compte" aria-live="polite"><b data-compte>${P.length}</b> <span data-compte-mot>${c.t('boutique.compteN')}</span> · <button type="button" class="lien-bouton" data-reinit>${c.t('boutique.reinit')}</button></p>
      </div>
    </div>
    <div class="grille-produits" data-grille>
      ${P.map((p, i) => brut(texteBrut(carte(c, p, { taille: '(max-width: 760px) 45vw, 260px', attrs: `data-rayon="${p.rayons.join(' ')}" data-selection="${selection(p)}" data-prix="${p.prix}" data-ordre="${i}" data-texte="${p.nom} ${p.rayons.map((r) => nomRayon(c, r)).join(' ')} ${p.badge || ''}"` })).replace('class="carte-produit', 'class="cff__fiche carte-produit').replace('<div class="carte-produit-pied">', `<button type="button" class="carte-apercu" data-apercu-ouvrir aria-label="${c.s('commun.apercu')} : ${p.nom}">${c.s('commun.apercu')}</button><template data-apercu-modele>${apercuModele(c, p)}</template><div class="carte-produit-pied">`)))}
      <p class="grille-vide" data-vide hidden>${c.t('boutique.vide')} <button type="button" class="lien-bouton" data-reinit>${c.t('boutique.reinit')}</button></p>
    </div>
    <p class="grille-vide" data-recherche-vide hidden>${c.t('boutique.vide')}</p>
    <p class="note note--cadre">${c.t('boutique.noteCategories')}</p>
  </div>
  <dialog class="apercu" data-apercu data-recouvrement aria-label="${c.s('commun.apercu')}">
    <button type="button" class="apercu-fermer" data-apercu-fermer aria-label="${c.s('boutique.apercuFermer')}"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18"/></svg></button>
    <div data-apercu-contenu></div>
  </dialog>
</section>

${appel(c, { titre: c.t('boutique.finTitre'), texte: c.t('boutique.finTexte'), lien: c.lien('contact', { ancre: 'formulaire', params: 'sujet=conseil', classe: 'bouton', texte: c.t('commun.ecrire') }) })}
`;
};

function apercuModele(c, p) {
  return texteBrut(html`<article class="apercu-fiche" data-panier-produit>
  ${vignette(c, p, { taille: '(max-width: 760px) 90vw, 420px', classe: 'apercu-vignette' })}
  <div class="apercu-texte">
    ${p.badge ? html`<p class="badge badge--statique">${p.badge}</p>` : ''}
    <h2>${p.nom}</h2>
    <p class="carte-produit-rayon">${c.t('boutique.apercuRayon')} : ${p.rayons.map((r) => nomRayon(c, r)).join(', ')}</p>
    ${prix(c, p)}
    ${ajouter(c, p, { long: true, classe: 'bouton' })}
    <p class="note">${c.t('boutique.apercuNote')}</p>
    <p class="note">${c.t('commun.majeurs')}</p>
  </div>
</article>`);
}
