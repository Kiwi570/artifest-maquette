/* Conseils et sécurité : ouverture scindée (titre et photo), catégories F1 à F4 en grand, schéma des distances qui se trace,
   bons gestes, questions sur la commande (CGV), appel final. */
import { html } from '../../outils/gabarit.mjs';
import { appel } from '../gabarits/produits.mjs';

export const page = { cle: 'conseils', fichier: 'conseils', imagePartage: 'grok/conseils-ouverture-1280.webp' };

export default (c) => html`
<section class="conseils-ouverture nuit" id="debut" data-ouverture-page>
  <div class="conseils-ouverture-texte">
    <h1 class="conseils-titre"><span data-anime="gsap" class="bloc-ligne">${c.t('conseils.titre1')}</span> <span data-anime="gsap" class="bloc-ligne or">${c.t('conseils.titre2')}</span></h1>
    <p class="masque-ecran-bas" data-anime="gsap">${c.t('conseils.texte')}</p>
    <p data-anime="gsap"><a class="bouton" href="#categories" data-action-principale data-survol="magnetique">${c.t('conseils.action')}</a></p>
    <p class="conseils-info" data-info-cle data-anime="gsap"><span class="pastille-majeurs">18+</span> ${c.t('conseils.info')}</p>
  </div>
  ${c.media({ nom: 'grok/conseils-ouverture', alt: c.s('pages.conseils.partageAlt'), cadrage: '60% 55%', priorite: true, classe: 'conseils-ouverture-media', sizes: '(max-width: 900px) 100vw, 55vw', attrs: 'data-fx="zoom" data-fx-force="10" data-iris-centre' })}
</section>

<section class="categories-page nuit2" id="categories">
  <div class="conteneur">
    <p class="surtitre" data-anime>${c.t('conseils.catSur')}</p>
    <h2 class="titre-section" data-anime="lignes">${c.t('conseils.catTitre')}</h2>
    <ul class="categories-grandes" data-anime="cascade">
      ${[1, 2, 3, 4].map((i) => html`<li class="cat cat--${i}"><span class="cat-code">F${i}</span><span class="cat-age">${i === 1 ? html`<span data-compteur="12">12</span> ans` : i === 4 ? html`pros` : html`<span data-compteur="18">18</span> ans`}</span><p>${c.t('conseils.c' + i)}</p></li>`)}
    </ul>
    <p class="note" data-anime>${c.t('conseils.t1')} ${c.t('conseils.source')}</p>
  </div>
</section>

<section class="schema nuit" id="distances">
  <div class="conteneur schema-grille">
    <h2 class="titre-section titre-moyen" data-anime="lignes">${c.t('conseils.schemaTitre')}</h2>
    <svg class="schema-svg" viewBox="0 0 640 220" role="img" aria-label="${c.s('conseils.schemaTitre')}" data-fx="trace">
      <path d="M40 180 H600" fill="none" stroke="rgba(246,242,234,.35)" stroke-width="2" data-fx-trait/>
      <path d="M110 150 L110 60 M110 60 l-22 -26 M110 60 l22 -26 M110 60 l0 -34 M110 60 l-30 6 M110 60 l30 6" fill="none" stroke="#ffd166" stroke-width="3" stroke-linecap="round" data-fx-trait/>
      <rect x="96" y="150" width="28" height="30" rx="3" fill="#ff5b2e"/>
      <path d="M140 120 H440" fill="none" stroke="#ff5b2e" stroke-width="3" stroke-dasharray="8 8" data-fx-trait/>
      <path d="M440 110 l12 10 l-12 10" fill="none" stroke="#ff5b2e" stroke-width="3" data-fx-trait/>
      <g fill="#f6f2ea"><circle cx="500" cy="128" r="10"/><rect x="490" y="140" width="20" height="40" rx="8"/><circle cx="540" cy="132" r="9"/><rect x="531" y="143" width="18" height="37" rx="7"/><circle cx="574" cy="140" r="7"/><rect x="567" y="149" width="14" height="31" rx="6"/></g>
      <text x="110" y="208" text-anchor="middle" fill="#f6f2ea" font-size="15" font-weight="700">${c.s('conseils.feu')}</text>
      <text x="290" y="108" text-anchor="middle" fill="#ffd166" font-size="15" font-weight="700">${c.s('conseils.distance')}</text>
      <text x="535" y="208" text-anchor="middle" fill="#f6f2ea" font-size="15" font-weight="700">${c.s('conseils.spectateurs')}</text>
    </svg>
  </div>
</section>

<section class="gestes jour" id="gestes">
  <div class="conteneur">
    <p class="surtitre" data-anime>${c.t('conseils.gestesSur')}</p>
    <h2 class="titre-section" data-anime="lignes">${c.t('conseils.gestesTitre')}</h2>
    <ol class="gestes-liste" data-anime="cascade">
      ${[1, 2, 3].map((i) => html`<li><span class="geste-num" aria-hidden="true">${i}</span><h3>${c.t('conseils.g' + i + 't')}</h3><p>${c.t('conseils.g' + i)}</p></li>`)}
    </ol>
  </div>
</section>

<section class="faq-page jour bloc--suite" id="questions">
  <div class="conteneur faq-grille">
    <div>
      <p class="surtitre" data-anime>${c.t('conseils.faqSur')}</p>
      <h2 class="titre-section" data-anime="lignes">${c.t('conseils.faqTitre')}</h2>
      ${c.media({ nom: 'torche-rouge', alt: c.donnees.images['torche-rouge'].alt, classe: 'faq-media', sizes: '(max-width: 900px) 100vw, 30vw', ratio: '16 / 9', attrs: 'data-anime="rideau"' })}
    </div>
    <div class="faq-liste">
      ${[1, 2, 3, 4, 5].map((i) => html`<details class="faq-item" data-anime><summary>${c.t('conseils.q' + i)}</summary><p>${c.t('conseils.r' + i)}</p></details>`)}
    </div>
  </div>
</section>

${appel(c, { titre: c.t('conseils.finTitre'), texte: c.t('conseils.finTexte'), lien: c.lien('contact', { ancre: 'formulaire', params: 'sujet=conseil', classe: 'bouton', texte: c.t('commun.ecrire') }) })}
`;
