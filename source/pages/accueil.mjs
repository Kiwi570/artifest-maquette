/* Accueil Artifest · direction « Nuit de fête ».
   Ouverture de nuit (bouquets en canvas, on tire une fusée d'un clic), réassurance, rayons, galerie épinglée des vedettes,
   spécial mariage, composeur de budget, feux de jour (fumée de couleur), commande (mèche qui brûle), sécurité, appel final. */
import { html, brut } from '../../outils/gabarit.mjs';
import { carte, vignette, prix, ajouter, produit, euros, appel } from '../gabarits/produits.mjs';

export const page = { cle: 'accueil', fichier: 'index', imagePartage: 'grok/accueil-ouverture-1280.webp' };

const VEDETTES = ['jorge-super-show-100', 'full-emotion', 'jorge-space-line-2', 'panther', 'bombaclac', 'furioso', 'dragon-fontaine', '20x-shark-fr', 'tyrant'];
const COULEURS_JOUR = [
  ['rouge', '#e8443a'], ['orange', '#f08a3c'], ['jaune', '#f2c94c'], ['vert', '#3fae5a'],
  ['bleu', '#3f7fe0'], ['violet', '#8a5cf0'], ['rose', '#f07ac0'], ['blanc', '#e9e9ef'],
];

export default (c) => {
  const P = c.donnees.produits;
  const parRayon = (id) => P.filter((p) => p.rayons.includes(id));
  const fe = produit(c, 'full-emotion');
  return html`
<section class="hero nuit" id="debut" data-gouttiere="#0d0f22">
  ${c.media({ nom: 'grok/accueil-ouverture', alt: c.s('pages.accueil.partageAlt'), cadrage: '62% 40%', priorite: true, classe: 'hero-fond', sizes: '100vw', attrs: 'data-fx="parallaxe" data-fx-force="8"' })}
  <canvas class="ciel ciel--hero" data-ciel="hero" data-effet="bouquet" aria-hidden="true" data-audit-ignorer></canvas>
  <span class="hero-point" data-iris-centre="disque" aria-hidden="true"></span>
  <div class="hero-texte conteneur">
    <h1 class="hero-titre"><span class="ligne-masque"><span data-anime="gsap" class="hero-ligne">${c.t('accueil.hero.titre1')}</span></span><span class="ligne-masque"><span data-anime="gsap" class="hero-ligne hero-ligne--or">${c.t('accueil.hero.titre2')}</span></span><span class="ligne-masque"><span data-anime="gsap" class="hero-ligne">${c.t('accueil.hero.titre3')}</span></span></h1>
    <p class="hero-intro masque-ecran-bas" data-anime="gsap">${c.t('accueil.hero.texte')}</p>
    <p class="hero-actions" data-anime="gsap">
      ${c.lien('boutique', { classe: 'bouton', texte: c.t('accueil.hero.action'), attrs: 'data-action-principale data-survol="magnetique"' })}
      ${c.lien('mariage', { classe: 'bouton bouton--contour', texte: c.t('accueil.hero.action2'), attrs: 'data-survol="magnetique"' })}
    </p>
    <p class="hero-info" data-info-cle data-anime="gsap"><span class="pastille-majeurs">18+</span> ${c.t('accueil.hero.info')}</p>
  </div>
  <p class="hero-astuce masque-ecran-tres-bas" data-anime="gsap" aria-hidden="true"><span class="astuce-souris">${c.t('accueil.hero.cielSouris')}</span><span class="astuce-doigt">${c.t('accueil.hero.ciel')}</span></p>
</section>

<section class="reassurance nuit" id="acheter" aria-labelledby="reassurance-titre">
  <h2 class="visuellement-cache" id="reassurance-titre">${c.t('accueil.reassurance.titre')}</h2>
  <ul class="conteneur reassurance-liste" data-anime="cascade">
    ${[1, 2, 3, 4].map((i) => html`<li><span class="reassurance-icone" aria-hidden="true" data-visuel>${brut(['<svg viewBox="0 0 32 32"><circle cx="16" cy="16" r="13"/><path d="M10 16h12M16 10v12" transform="rotate(45 16 16)"/></svg>', '<svg viewBox="0 0 32 32"><path d="M5 12 16 5l11 7v14H5Z"/><path d="M12 26v-8h8v8"/></svg>', '<svg viewBox="0 0 32 32"><rect x="4" y="8" width="24" height="16" rx="3"/><path d="M4 13h24M9 19h6"/></svg>', '<svg viewBox="0 0 32 32"><path d="M8 5h5l2 6-3 2a14 14 0 0 0 7 7l2-3 6 2v5a2 2 0 0 1-2 2A21 21 0 0 1 6 7a2 2 0 0 1 2-2Z"/></svg>'][i - 1])}</span><strong>${c.t(`accueil.reassurance.r${i}t`)}</strong><span>${c.t(`accueil.reassurance.r${i}`)}</span></li>`)}
  </ul>
</section>

<section class="rayons nuit2" id="rayons">
  <div class="conteneur">
    <p class="surtitre" data-anime>${c.t('accueil.rayons.sur')}</p>
    <h2 class="titre-section" data-anime="lignes">${c.t('accueil.rayons.titre')}</h2>
    <ul class="rayons-grille" data-anime="cascade">
      ${c.donnees.rayons.map((r, i) => {
        const liste = parRayon(r.id), mini = Math.min(...liste.map((p) => p.prix));
        return html`<li class="rayon rayon--${i + 1}">
        <a class="rayon-lien" href="${c.url('boutique', 'catalogue', 'rayon=' + r.id)}" data-libelle="${c.libelle('boutique')}" data-survol="incline" data-survol-force="5">
          ${c.media({ nom: r.image, alt: r.alt, classe: 'rayon-media', sizes: '(max-width: 760px) 70vw, 22vw', attrs: 'data-fx="zoom" data-fx-force="12"' })}
          <span class="rayon-texte"><span class="rayon-nom">${r.nom}</span><span class="rayon-infos"><span data-compteur="${liste.length}">${liste.length}</span> ${c.t('accueil.rayons.articles')} · ${c.t('accueil.rayons.des')} ${euros(mini)}</span></span>
        </a>
      </li>`;
      })}
    </ul>
  </div>
</section>

<section class="vedettes jour ecran epingle" id="vedettes" data-entete-cache data-fx="galerie" data-plein-ecran>
  <div class="conteneur vedettes-tete">
    <div>
      <p class="surtitre">${c.t('accueil.vedettes.sur')}</p>
      <h2 class="titre-section" data-anime="lignes">${c.t('accueil.vedettes.titre')}</h2>
    </div>
    <p class="vedettes-texte masque-ecran-bas">${c.t('accueil.vedettes.texte')} ${c.lien('boutique', { classe: 'lien-fleche', texte: c.t('accueil.vedettes.tout') })}</p>
  </div>
  <div class="piste vedettes-piste" data-galerie tabindex="0" role="region" aria-label="${c.s('accueil.vedettes.region')}">
    ${VEDETTES.map((id) => carte(c, produit(c, id), { attrs: 'data-tient', taille: '(max-width: 760px) 60vw, 260px' }))}
  </div>
  <div class="galerie-progres" aria-hidden="true"><span></span></div>
</section>

<section class="mariage-accueil nuit" id="mariage">
  ${c.media({ nom: 'grok/accueil-mariage', alt: c.s('pages.mariage.partageAlt'), cadrage: '62% 45%', classe: 'mariage-accueil-media', sizes: '(max-width: 760px) 100vw, 55vw', attrs: 'data-anime="rideau"' })}
  <div class="mariage-accueil-texte">
    <p class="surtitre" data-anime>${c.t('accueil.mariage.sur')}</p>
    <h2 class="titre-section" data-anime="lignes">${c.t('accueil.mariage.titre')}</h2>
    <p data-anime>${c.t('accueil.mariage.texte')}</p>
    <ul class="liste-etincelles" data-anime="cascade">
      <li>${c.t('accueil.mariage.point1')}</li><li>${c.t('accueil.mariage.point2')}</li><li>${c.t('accueil.mariage.point3')}</li>
    </ul>
    <article class="vedette-mini" data-panier-produit data-anime>
      ${vignette(c, fe, { taille: '120px' })}
      <div><h3>${fe.nom}</h3><p class="vedette-mini-rayon">${fe.badge}</p>${prix(c, fe)}</div>
      ${ajouter(c, fe)}
    </article>
    <p data-anime>${c.lien('mariage', { classe: 'lien-fleche', texte: c.t('accueil.mariage.action') })}</p>
  </div>
</section>

<section class="composeur jour" id="composer" data-composeur>
  <div class="conteneur composeur-grille">
    <div class="composeur-reglages">
      <p class="surtitre" data-anime>${c.t('accueil.composer.sur')}</p>
      <h2 class="titre-section" data-anime="lignes">${c.t('accueil.composer.titre')}</h2>
      <p data-anime>${c.t('accueil.composer.texte')}</p>
      <fieldset class="choix" data-anime>
        <legend>${c.t('accueil.composer.occasion')}</legend>
        ${['mariage', 'anniversaire', 'bapteme', 'nouvelan'].map((o, i) => html`<label class="choix-pastille"><input type="radio" name="occasion" value="${o}"${i === 0 ? brut(' checked') : ''}><span>${c.t('accueil.composer.' + o)}</span></label>`)}
      </fieldset>
      <label class="budget" data-anime>
        <span class="budget-tete"><span>${c.t('accueil.composer.budget')}</span><output class="budget-valeur" data-budget-sortie>150 €</output></span>
        <input type="range" min="20" max="450" step="10" value="150" data-budget>
      </label>
    </div>
    <div class="composeur-resultat" data-anime>
      <ul class="composeur-liste" data-composeur-liste aria-live="polite"></ul>
      <p class="composeur-vide" data-composeur-vide hidden>${c.t('accueil.composer.vide')}</p>
      <div class="composeur-pied">
        <p class="composeur-total"><span>${c.t('accueil.composer.total')}</span><strong data-composeur-total>0,00 €</strong></p>
        <button type="button" class="bouton" data-composeur-ajouter>${c.t('accueil.composer.toutAjouter')}</button>
      </div>
      <p class="note">${c.t('accueil.composer.note')}</p>
      <noscript><p>${c.lien('boutique', { classe: 'lien-fleche', texte: c.t('commun.voirBoutique') })}</p></noscript>
    </div>
  </div>
  <script type="application/json" data-composeur-catalogue>${brut(JSON.stringify(P.filter((p) => p.stock).map((p) => ({ id: p.id, nom: p.nom, prix: p.prix, rayons: p.rayons, rayon: (c.donnees.rayons.find((r) => r.id === p.rayons[0]) || {}).court, image: p.image ? `/assets/images/${p.image}-320.webp` : '', couleur: (p.couleur || '').split('|')[0] }))).replace(/</g, '\\u003c'))}</script>
</section>

<section class="jour-feux jour" id="feux-de-jour" data-feux-jour>
  <div class="conteneur jour-grille">
    <div class="jour-scene">
      <canvas class="fumee" data-effet="fumee" aria-hidden="true" data-audit-ignorer></canvas>
      <div class="jour-produits">
        ${COULEURS_JOUR.map(([nom], i) => {
          const p = produit(c, 'feu-jour-' + nom);
          return html`<article class="jour-produit${i === 0 ? ' est-choisi' : ''}" data-couleur="${nom}" data-panier-produit${i === 0 ? '' : brut(' hidden')}>${vignette(c, p, { taille: '(max-width: 760px) 50vw, 260px' })}<div class="jour-produit-pied"><h3>${p.nom}</h3>${prix(c, p)}${ajouter(c, p, { long: true, classe: 'bouton' })}</div></article>`;
        })}
      </div>
    </div>
    <div class="jour-texte">
      <p class="surtitre" data-anime>${c.t('accueil.jour.sur')}</p>
      <h2 class="titre-section" data-anime="lignes">${c.t('accueil.jour.titre')}</h2>
      <p data-anime>${c.t('accueil.jour.texte')}</p>
      <fieldset class="couleurs" data-anime>
        <legend>${c.t('accueil.jour.choix')}</legend>
        ${COULEURS_JOUR.map(([nom, hex], i) => html`<label class="couleur" style="--c:${hex}"><input type="radio" name="couleur-jour" value="${nom}" data-hex="${hex}"${i === 0 ? brut(' checked') : ''}><span class="couleur-rond"></span><span class="couleur-nom">${nom}</span></label>`)}
      </fieldset>
      <div class="jour-scene-mini" data-anime>
        ${c.media({ nom: 'fete-fumee-verte', alt: c.donnees.images['fete-fumee-verte'].alt, classe: 'jour-mini-media', sizes: '160px', ratio: '2 / 3' })}
        <div><h3>${c.t('accueil.jour.scene')}</h3><p>${c.t('accueil.jour.sceneTexte')}</p>${c.lien('boutique', { ancre: 'catalogue', params: 'rayon=jour-scene', classe: 'lien-fleche', texte: c.t('accueil.jour.sceneLien') })}</div>
      </div>
    </div>
  </div>
</section>

<section class="commande nuit2" id="commande">
  ${c.media({ nom: 'grok/accueil-commande', alt: c.donnees.images['grok/accueil-commande'].alt, cadrage: '40% 50%', classe: 'commande-fond', sizes: '(max-width: 760px) 100vw, 50vw', attrs: 'data-fx="parallaxe"' })}
  <div class="conteneur commande-corps">
    <p class="surtitre" data-anime>${c.t('accueil.commande.sur')}</p>
    <h2 class="titre-section" data-anime="lignes">${c.t('accueil.commande.titre')}</h2>
    <div class="meche-zone" data-effet="meche">
      <svg class="meche" viewBox="0 0 40 600" preserveAspectRatio="none" aria-hidden="true"><path class="meche-fond" d="M20 0 C 36 80, 4 140, 20 200 S 36 320, 20 400 S 4 520, 20 600"/><path class="meche-brule" d="M20 0 C 36 80, 4 140, 20 200 S 36 320, 20 400 S 4 520, 20 600"/></svg>
      <span class="meche-etincelle" aria-hidden="true"></span>
      <ol class="etapes">
        ${[1, 2, 3].map((i) => html`<li class="etape"><span class="etape-num" aria-hidden="true">${i}</span><h3>${c.t(`accueil.commande.e${i}t`)}</h3><p>${c.t(`accueil.commande.e${i}`)}</p></li>`)}
      </ol>
    </div>
    <p class="commande-actions" data-anime>${c.lien('boutique', { classe: 'bouton', texte: c.t('accueil.commande.action'), attrs: 'data-survol="magnetique"' })} ${c.lien('conseils', { classe: 'lien-fleche', texte: c.t('accueil.securite.lien') })}</p>
    <p class="note commande-note" data-anime>${c.t('accueil.securite.f2t')} ${c.t('accueil.securite.texte')}</p>
  </div>
</section>


${appel(c, { titre: c.t('accueil.fin.titre'), texte: c.t('accueil.fin.texte'), lien: c.lien('boutique', { classe: 'bouton', texte: c.t('accueil.fin.boutique'), attrs: 'data-survol="magnetique"' }) })}
`;
};
