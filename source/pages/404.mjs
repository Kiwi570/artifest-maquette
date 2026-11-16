/* Page 404 : « Pétard mouillé ». */
import { html } from '../../outils/gabarit.mjs';

export const page = { cle: '404', fichier: '404', langues: ['fr'], partage: false };

export default (c) => html`
<section class="introuvable nuit" id="debut" data-ouverture-page>
  ${c.media({ nom: 'grok/page-404', alt: c.donnees.images['grok/page-404'].alt, priorite: true, classe: 'introuvable-media', cadrage: '60% 55%', sizes: '100vw', attrs: 'data-iris-centre data-fx="parallaxe"' })}
  <div class="conteneur introuvable-texte">
    <p class="introuvable-code" data-anime="gsap" aria-hidden="true">404</p>
    <h1 data-anime="gsap">${c.t('introuvable.titre')}</h1>
    <p class="note" data-info-cle data-anime="gsap">${c.t('commun.conseilTitre')} ${c.site.contact.telephone}</p>
    <p data-anime="gsap">${c.t('introuvable.texte')}</p>
    <p class="introuvable-actions" data-anime="gsap">${c.lien('accueil', { classe: 'bouton', texte: c.t('introuvable.retour'), attrs: 'data-action-principale' })} ${c.lien('boutique', { classe: 'bouton bouton--contour', texte: c.t('introuvable.boutique') })}</p>
  </div>
</section>
`;
