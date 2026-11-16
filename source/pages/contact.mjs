/* Contact et retrait : le numéro en très grand sur le village de nuit, formulaire simulé à côté des coordonnées,
   schéma du secteur Sedan et Mouzon. */
import { html } from '../../outils/gabarit.mjs';

export const page = { cle: 'contact', fichier: 'contact', imagePartage: 'grok/contact-ouverture-1280.webp' };

export default (c) => html`
<section class="contact-ouverture nuit" id="debut" data-ouverture-page>
  ${c.media({ nom: 'grok/contact-ouverture', alt: c.s('pages.contact.partageAlt'), cadrage: '70% 45%', priorite: true, classe: 'contact-ouverture-media', sizes: '100vw', attrs: 'data-fx="parallaxe" data-fx-force="10"' })}
  <div class="conteneur contact-ouverture-corps">
    <h1 class="contact-titre" data-anime="gsap">${c.t('contact.titre')}</h1>
    <p class="contact-numero" data-anime="gsap" data-iris-centre><a href="tel:${c.site.contact.telephoneLien}">${c.site.contact.telephone}</a></p>
    <p class="contact-info" data-info-cle data-anime="gsap">${c.t('contact.info')} · ${c.t('commun.majeurs')}</p>
    <p class="contact-autres" data-anime="gsap"><a href="mailto:${c.site.contact.email}">${c.site.contact.email}</a> · <a href="${c.site.contact.facebook}" target="_blank" rel="noopener">${c.t('commun.facebook')}</a></p>
    <p class="contact-actions" data-anime="gsap"><a class="bouton" href="#formulaire" data-action-principale data-survol="magnetique">${c.t('contact.action')}</a></p>
  </div>
</section>

<section class="contact-corps jour" id="formulaire">
  <div class="conteneur contact-grille">
    <form class="formulaire" data-formulaire data-anime novalidate>
      <p class="surtitre">${c.t('contact.formSur')}</p>
      <h2 class="titre-section titre-moyen">${c.t('contact.formTitre')}</h2>
      <div class="champs-2">
        <div class="champ"><label for="f-nom">${c.t('contact.nom')}</label><input id="f-nom" name="nom" autocomplete="name" required></div>
        <div class="champ"><label for="f-tel">${c.t('contact.tel')}</label><input id="f-tel" name="tel" type="tel" autocomplete="tel" inputmode="tel"></div>
      </div>
      <div class="champ"><label for="f-email">${c.t('contact.email')}</label><input id="f-email" name="email" type="email" autocomplete="email" required></div>
      <div class="champ"><label for="f-sujet">${c.t('contact.sujet')}</label>
        <select id="f-sujet" name="sujet"><option value="commande">${c.t('contact.sujetCommande')}</option><option value="conseil">${c.t('contact.sujetConseil')}</option><option value="mariage">${c.t('contact.sujetMariage')}</option><option value="autre">${c.t('contact.sujetAutre')}</option></select></div>
      <div class="champ"><label for="f-message">${c.t('contact.message')}</label><textarea id="f-message" name="message" rows="5" required></textarea></div>
      <div class="champ champ--case"><input id="f-majeur" name="majeur" type="checkbox" required><label for="f-majeur">${c.t('contact.majeur')}</label></div>
      <p class="mention-donnees">${c.t('contact.rgpd')} ${c.t('contact.rgpdLien')}</p>
      <p><button class="bouton" type="submit">${c.t('contact.envoyer')}</button></p>
      <p class="note">${c.t('contact.simule')}</p>
      <p data-message-envoi hidden></p>
    </form>
    <aside class="coordonnees" data-anime="cascade">
      <div class="coord"><h3>${c.t('contact.adresse')}</h3><p>${c.site.contact.adresse}</p></div>
      <div class="coord"><h3>${c.t('contact.retrait')}</h3><p>${c.t('contact.retraitTexte')}</p></div>
      <div class="coord"><h3>${c.t('contact.paiement')}</h3><p>${c.t('contact.paiementTexte')}</p></div>
      <div class="coord coord--ruban"><p>${c.t('commun.majeurs')}</p></div>
    </aside>
  </div>
</section>

<section class="secteur nuit2" id="secteur">
  <div class="conteneur secteur-grille">
    <div>
      <p class="surtitre" data-anime>${c.t('contact.carteSur')}</p>
      <h2 class="titre-section" data-anime="lignes">${c.t('contact.carteTitre')}</h2>
      <p data-anime>${c.t('contact.carteTexte')}</p>
      <p data-anime>${c.lien('boutique', { classe: 'bouton', texte: c.t('commun.voirBoutique'), attrs: 'data-survol="magnetique"' })}</p>
    </div>
    <svg class="secteur-carte" viewBox="0 0 520 360" role="img" aria-label="${c.s('contact.carteTexte')}" data-fx="trace">
      <path d="M20 40 C 130 20, 170 100, 260 118 S 410 170, 505 235" fill="none" stroke="#4f8bff" stroke-width="6" stroke-linecap="round" opacity=".55" data-fx-trait/>
      <path d="M95 105 C 170 140, 230 160, 260 175 S 360 230, 420 262" fill="none" stroke="#ff5b2e" stroke-width="3" stroke-dasharray="2 10" stroke-linecap="round" data-fx-trait/>
      <g data-repere><circle cx="95" cy="105" r="9" fill="#f6f2ea"/><text x="95" y="80" text-anchor="middle" fill="#f6f2ea" font-size="18" font-weight="700">Sedan</text></g>
      <g data-repere><circle cx="420" cy="262" r="9" fill="#f6f2ea"/><text x="420" y="296" text-anchor="middle" fill="#f6f2ea" font-size="18" font-weight="700">Mouzon</text></g>
      <g data-repere class="secteur-artifest"><circle cx="262" cy="176" r="26" fill="rgba(255,91,46,.25)"/><circle cx="262" cy="176" r="11" fill="#ff5b2e"/><text x="262" y="226" text-anchor="middle" fill="#ffd166" font-size="18" font-weight="800">Artifest</text><text x="262" y="246" text-anchor="middle" fill="#f6f2ea" font-size="14">Autrecourt-et-Pourron</text></g>
      <text x="500" y="350" text-anchor="end" fill="rgba(246,242,234,.6)" font-size="12">Schéma, pas à l’échelle</text>
    </svg>
  </div>
</section>
`;
