/* Mariage et événements : ouverture plein cadre (mariés sous le bouquet), trois moments, la vedette Full Emotion
   (prix en très grand), feux longue durée, jour et scène, appel final. */
import { html } from '../../outils/gabarit.mjs';
import { carte, vignette, prix, ajouter, produit, appel } from '../gabarits/produits.mjs';

export const page = { cle: 'mariage', fichier: 'mariage', imagePartage: 'grok/mariage-ouverture-1280.webp' };

const MOMENTS = [
  { n: 1, image: 'rayon-jour', produits: ['feu-jour-blanc', 'feu-jour-rose', '3-fumigenes-france'] },
  { n: 2, image: 'mariage-bal', produits: ['2-declencheurs-2-jets-argents', '5-jets-scene-interieur-3m', 'valise-4-declencheurs-scene-jour'] },
  { n: 3, image: 'grok/rayon-longue-duree', produits: ['full-emotion', 'jorge-super-show-100', 'bombaclac'] },
];

export default (c) => {
  const P = c.donnees.produits;
  const fe = produit(c, 'full-emotion');
  const img = (n) => c.donnees.images[n];
  return html`
<section class="mariage-ouverture nuit" id="debut" data-ouverture-page>
  ${c.media({ nom: 'grok/mariage-ouverture', alt: c.s('pages.mariage.partageAlt'), cadrage: '50% 40%', priorite: true, classe: 'mariage-ouverture-media', sizes: '100vw', attrs: 'data-fx="parallaxe" data-fx-force="10" data-iris-centre' })}
  <div class="conteneur mariage-ouverture-corps">
    <h1 class="mariage-titre"><span class="ligne-masque"><span data-anime="gsap">${c.t('mariage.titre1')}</span></span><span class="ligne-masque"><span data-anime="gsap" class="or">${c.t('mariage.titre2')}</span></span></h1>
    <p class="mariage-intro masque-ecran-bas" data-anime="gsap">${c.t('mariage.texte')}</p>
    <p class="mariage-info" data-info-cle data-anime="gsap">${c.t('mariage.info')}</p>
    <p class="mariage-actions" data-anime="gsap">
      <a class="bouton" href="#vedette" data-action-principale data-survol="magnetique">${c.t('mariage.action')}</a>
      ${c.lien('contact', { ancre: 'formulaire', params: 'sujet=mariage', classe: 'bouton bouton--contour', texte: c.t('commun.ecrire') })}
    </p>
  </div>
</section>

<section class="moments nuit2" id="moments">
  <div class="conteneur">
    <p class="surtitre" data-anime>${c.t('mariage.momentsSur')}</p>
    <h2 class="titre-section" data-anime="lignes">${c.t('mariage.momentsTitre')}</h2>
    <ol class="moments-liste" data-anime="cascade">
      ${MOMENTS.map((m) => html`<li class="moment">
        ${c.media({ nom: m.image, alt: img(m.image).alt, classe: 'moment-media', sizes: '(max-width: 900px) 100vw, 33vw', ratio: '4 / 3', legende: m.n === 2 ? c.s('mariage.vraiTexte') : undefined })}
        <span class="moment-num" aria-hidden="true">${m.n}</span>
        <h3>${c.t(`mariage.m${m.n}t`)}</h3>
        <p>${c.t(`mariage.m${m.n}`)}</p>
        <ul class="moment-produits">
          ${m.produits.map((id) => { const p = produit(c, id); return html`<li data-panier-produit>${vignette(c, p, { taille: '56px', classe: 'vignette--mini' })}<span class="moment-produit-nom">${p.nom}</span>${prix(c, p)}${ajouter(c, p)}</li>`; })}
        </ul>
      </li>`)}
    </ol>
  </div>
</section>

<section class="vedette nuit" id="vedette" data-panier-produit>
  <div class="conteneur vedette-grille">
    <div class="vedette-visuel" data-anime>
      ${vignette(c, fe, { taille: '(max-width: 760px) 80vw, 460px', classe: 'vedette-vignette' })}
    </div>
    <div class="vedette-texte">
      <p class="surtitre" data-anime>${c.t('mariage.vedetteSur')}</p>
      <h2 class="titre-section" data-anime="lignes">${fe.nom}</h2>
      <p class="vedette-prix" data-anime data-prix><span data-compteur="349">349</span> €</p>
      <p data-anime>${c.t('mariage.vedetteTexte')}</p>
      <ul class="liste-etincelles" data-anime="cascade"><li>${c.t('mariage.v1')}</li><li>${c.t('mariage.v2')}</li><li>${c.t('mariage.v3')}</li></ul>
      <p data-anime>${ajouter(c, fe, { long: true, classe: 'bouton' })}</p>
    </div>
  </div>
</section>

<section class="bloc jour" id="longue-duree">
  <div class="conteneur">
    <div class="bloc-tete"><p class="surtitre" data-anime>${c.t('mariage.longueSur')}</p><h2 class="titre-section" data-anime="lignes">${c.t('mariage.longueTitre')}</h2></div>
    <div class="grille-produits" data-anime="cascade">${P.filter((p) => p.rayons.includes('longue-duree') && p.id !== 'full-emotion').map((p) => carte(c, p, { taille: '(max-width: 760px) 45vw, 260px' }))}</div>
  </div>
</section>

<section class="bloc jour bloc--suite" id="jour-scene">
  <div class="conteneur">
    <div class="bloc-tete"><p class="surtitre" data-anime>${c.t('mariage.jourSur')}</p><h2 class="titre-section" data-anime="lignes">${c.t('mariage.jourTitre')}</h2></div>
    <div class="grille-produits" data-anime="cascade">${['20-jets-argent', '5-jets-scene-3m-60s', '5-jets-interieur-2m', 'valise-8-declencheurs-scene-jour', '2-declencheurs-2-jets-de-jour', 'feu-jour-violet'].map((id) => carte(c, produit(c, id), { taille: '(max-width: 760px) 45vw, 260px' }))}</div>
  </div>
</section>

${appel(c, { titre: c.t('mariage.finTitre'), texte: c.t('mariage.finTexte'), lien: c.lien('contact', { ancre: 'formulaire', params: 'sujet=mariage', classe: 'bouton', texte: c.t('commun.ecrire') }) })}
`;
};
