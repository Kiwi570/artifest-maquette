# Rapport d’audit

Projet : `artifest-maquette` · 16/11/2026 15:57:32 · 6 min · 1 page(s) · audit RAPIDE : ne vaut pas pour une livraison

## Résumé

- Statut : **34 échec(s)**
- Passe : `20261116-145125-rapide` · version ?v=1
- Échecs : **34**
- À regarder : **18**
- Non lancé : **1**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), grille wouahou (2), mesures (6), films d’ouverture (2), films de transition (2), bords de l’écran (1), intro accélérable et passable (7), menu (1), clavier (1), liens et boutons (1), liens profonds (11), liens vers la page en cours (1), changements de hauteur (1), parcours du projet (1), tient dans l’écran (2), films des épinglages (1), fluidité (2), défilement selon l’appareil (5), mouvement (2), effets du plan (4), souris immobile (2), vitesse (1), captures (1)

## Grille wouahou

| Point | État | Détail |
|---|---|---|
| 1. L’effet signature se manipule | ✗ absent | aucun data-grille="manipuler" sur l’accueil |
| 2. L’intro devient la page | ✓ présent | objet d’ouverture sur 5 page(s), versObjet dans l’intro |
| 3. La transition reprend le motif | ✓ présent | voile en iris |
| 4. Quelque chose relie les sections et les pages | ✗ absent | sur aucune page |
| 5. Un titre fait l’événement sur chaque page | ✗ absent | sur aucune page |
| 6. La scène est un geste du métier | ⚠ à regarder | galerie générique sur / |
| 7. L’action principale a un retour physique | ✗ absent | sur aucune page |

Le script vérifie les marques (`data-grille`, `data-iris-centre`, forme du voile, `versObjet`) ; la force et la justesse de chaque point se jugent sur les captures et les films.

## Échecs

### lien vers le site actuel (6)

- **lien vers le site actuel** — `404.html` — mailto:contact@artifest.fr
- **lien vers le site actuel** — `boutique.html` — mailto:contact@artifest.fr
- **lien vers le site actuel** — `conseils.html` — mailto:contact@artifest.fr
- **lien vers le site actuel** — `contact.html` — mailto:contact@artifest.fr
- **lien vers le site actuel** — `index.html` — mailto:contact@artifest.fr
- **lien vers le site actuel** — `mariage.html` — mailto:contact@artifest.fr

### image de partage (5)

- **image de partage** — `boutique.html` — fichier introuvable : /assets/partage/boutique-fr.jpg
- **image de partage** — `conseils.html` — fichier introuvable : /assets/partage/conseils-fr.jpg
- **image de partage** — `contact.html` — fichier introuvable : /assets/partage/contact-fr.jpg
- **image de partage** — `index.html` — fichier introuvable : /assets/partage/accueil-fr.jpg
- **image de partage** — `mariage.html` — fichier introuvable : /assets/partage/mariage-fr.jpg

### zone tactile sous 44 px (2)

- **zone tactile sous 44 px** — `/` — body#haut > header > div.entete-rangee > a.entete-logo — 40 × 44 px _(390×844 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **zone tactile sous 44 px** — `/` — div.composeur-resultat:nth-of-type(2) > noscript > p.note > a « Voir la boutique » — 105 × 20 px _(390×844 sansJs, 320×568 sansJs)_

### textes qui se chevauchent (4)

- **textes qui se chevauchent** — `/` — div.hero-texte.conteneur > h1.hero-titre > span.ligne-masque:nth-of-type(1) > span.hero-ligne « Le feu d’artifice » — avec div.hero-texte.conteneur > h1.hero-titre > span.ligne-masque:nth-of-type(2) > span.hero-ligne.hero-ligne--or « à petits prix, » _(390×844 normal, 1366×768 normal, 390×844 sansWebgl, 390×844 sansJs, 844×390 normal, 320×568 sansJs)_
- **textes qui se chevauchent** — `/` — div.hero-texte.conteneur > h1.hero-titre > span.ligne-masque:nth-of-type(2) > span.hero-ligne.hero-ligne--or « à petits prix, » — avec div.hero-texte.conteneur > h1.hero-titre > span.ligne-masque:nth-of-type(3) > span.hero-ligne « dans les Ardennes » _(390×844 normal, 1366×768 normal, 390×844 sansWebgl, 390×844 sansJs, 844×390 normal, 320×568 sansJs)_
- **textes qui se chevauchent** — `/` — li.rayon.rayon--2:nth-of-type(2) > a.rayon-lien > figure.media.rayon-media > figcaption.mention-ia « Illustration générée » — avec li.rayon.rayon--2:nth-of-type(2) > a.rayon-lien > span.rayon-texte > span.rayon-nom:nth-of-type(1) « Feux longue durée » _(320×568 sansJs)_
- **textes qui se chevauchent** — `/` — li.rayon.rayon--3:nth-of-type(3) > a.rayon-lien > figure.media.rayon-media > figcaption.mention-ia « Illustration générée » — avec li.rayon.rayon--3:nth-of-type(3) > a.rayon-lien > span.rayon-texte > span.rayon-nom:nth-of-type(1) « Pétards, fusées et fontaines » _(320×568 sansJs)_

### contraste insuffisant (3)

- **contraste insuffisant** — `/` — section#composer > div.conteneur.composeur-grille > div.composeur-resultat:nth-of-type(2) > p.note:nth-of-type(2) « Suggestion indicative, à ajuster. Pour un conseil  » — 1.81:1 (minimum 4.5:1) _(390×844 normal, 1366×768 normal, 390×844 sansWebgl, 390×844 sansJs, 844×390 normal, 320×568 sansJs)_
- **contraste insuffisant** — `/` — body#haut > div:nth-of-type(4) > a.bouton:nth-of-type(2) > span.pet-compte.est-vide « 0 » — 2.77:1 (minimum 4.5:1) _(390×844 normal, 390×844 sansWebgl)_
- **contraste insuffisant** — `/` — div.entete-rangee > div.entete-actions > a.bouton.entete-panier:nth-of-type(2) > span.pet-compte.est-vide:nth-of-type(2) « 0 » — 2.77:1 (minimum 4.5:1) _(1366×768 normal, 844×390 normal)_

### image non chargée (1)

- **image non chargée** — `/` — body#haut > div.pet.pet--pret:nth-of-type(5) > div.pet__annonce:nth-of-type(2) > img _(390×844 normal, 1366×768 normal, 390×844 sansWebgl, 844×390 normal)_

### photo faible affichée en grand (5)

- **photo faible affichée en grand** — `/` — section#debut > figure.media.hero-fond > picture > img « Artifest, bouquet de feu d’artifice doré au-dessus » — grok/accueil-ouverture (4/5, faible, 100 % de l'écran) : en vignette, ou une meilleure image _(390×844 normal, 1366×768 normal)_
- **photo faible affichée en grand** — `/` — a.rayon-lien > figure.media.rayon-media > picture > img « Gerbes multicolores qui éclatent en même temps dan » — grok/rayon-compacts (4/5, faible, 31 % de l'écran) : en vignette, ou une meilleure image _(1366×768 normal)_
- **photo faible affichée en grand** — `/` — a.rayon-lien > figure.media.rayon-media > picture > img « Grand final de feu d'artifice doré qui remplit le  » — grok/rayon-longue-duree (4/5, faible, 31 % de l'écran) : en vignette, ou une meilleure image _(1366×768 normal)_
- **photo faible affichée en grand** — `/` — section#mariage > figure.media.mariage-accueil-media > picture > img « Mariés sous un grand feu d’artifice doré » — grok/accueil-mariage (4/5, faible, 33 % de l'écran) : en vignette, ou une meilleure image _(1366×768 normal)_
- **photo faible affichée en grand** — `/` — section#commande > figure.media.commande-fond > picture > img « Colis en carton sur une table en bois près d'une f » — grok/accueil-commande (4/5, faible, 56 % de l'écran) : en vignette, ou une meilleure image _(1366×768 normal)_

### texte coupé (4)

- **texte coupé** — `/` — div.hero-texte.conteneur > h1.hero-titre > span.ligne-masque:nth-of-type(1) > span.hero-ligne « Le feu d’artifice » — coupé par section#debut > div.hero-texte.conteneur > h1.hero-titre > span.ligne-masque:nth-of-type(1) « Le feu d’artifice » _(1366×768 normal)_
- **texte coupé** — `/` — div.hero-texte.conteneur > h1.hero-titre > span.ligne-masque:nth-of-type(2) > span.hero-ligne.hero-ligne--or « à petits prix, » — coupé par section#debut > div.hero-texte.conteneur > h1.hero-titre > span.ligne-masque:nth-of-type(2) « à petits prix, » _(1366×768 normal)_
- **texte coupé** — `/` — div.hero-texte.conteneur > h1.hero-titre > span.ligne-masque:nth-of-type(3) > span.hero-ligne « dans les Ardennes » — coupé par section#debut > div.hero-texte.conteneur > h1.hero-titre > span.ligne-masque:nth-of-type(3) « dans les Ardennes » _(1366×768 normal)_
- **texte coupé** — `/` — li.rayon.rayon--4:nth-of-type(4) > a.rayon-lien > span.rayon-texte > span.rayon-nom:nth-of-type(1) « Fumigènes et torches » — coupé par div.conteneur > ul.rayons-grille > li.rayon.rayon--4:nth-of-type(4) > a.rayon-lien « Fumigènes et torches 9 articles · dès 5,00 € » _(320×568 sansJs)_

### premier écran : information clé hors de l’écran (1)

- **premier écran : information clé hors de l’écran** — `/` — section#debut > div.hero-texte.conteneur > p.hero-info:nth-of-type(3) « 18+ 85 articles · retrait à Autrecourt-et-Pourron » _(390×844 sansJs, 320×568 sansJs)_

### accessibilité (axe) : color-contrast (1)

- **accessibilité (axe) : color-contrast** — `/` — .composeur-resultat > .note — Elements must meet minimum color contrast ratio thresholds _(1366×768 normal, 390×844 normal)_

### accessibilité (axe) : link-name (1)

- **accessibilité (axe) : link-name** — `/` — .entete-logo — Links must have discernible text _(390×844 normal)_

### lien profond (1)

- **lien profond** — `/ → /contact?sujet=commande#formulaire` — section introuvable à l’arrivée _(1366×768 lien profond, 390×844 lien profond)_

## À regarder

### « à compléter » visible (1)

- **« à compléter » visible** — `contact.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)

### grille : effet signature qui ne se manipule pas (point 1) (1)

- **grille : effet signature qui ne se manipule pas (point 1)** — `/` — aucun élément data-grille="manipuler" sur l’accueil : objet à attraper, faire tourner ou glisser (module objet-a-faire-tourner, lumiere-au-pointeur…)

### grille : rien ne relie les sections (point 4) (1)

- **grille : rien ne relie les sections (point 4)** — sur aucune page : élément du métier qui relie les sections et les pages (fil dans la marge, objet unique qui change, lumière qui passe, carte, folio, frise), marqué data-grille="fil"

### grille : aucun titre ne fait l’événement (point 5) (1)

- **grille : aucun titre ne fait l’événement (point 5)** — sur aucune page : titre fabriqué par le métier, axe de police animé ou titre joué avec l’image (modules axes-au-defilement, titre-cousu, texte-grave-en-direct), marqué data-grille="typo"

### grille : galerie horizontale générique (point 6) (1)

- **grille : galerie horizontale générique (point 6)** — `/` — le métier a-t-il son geste (feuilleter un bac, empiler des planches, tourner les pages, ouvrir un tiroir) ? Modules bac-a-feuilleter, planches-empilees ; si la rangée qui défile est le geste du métier, ajouter data-grille="scene"

### grille : action principale sans retour physique (point 7) (1)

- **grille : action principale sans retour physique (point 7)** — ajout au panier, réservation, envoi ou filtre : quelque chose de l’objet part, se pose ou se transforme (module envol-vers-le-panier, tampon « reçu »), marqué data-grille="retour"

### section sans visuel (2)

- **section sans visuel** — `/` — section#acheter « Acheter chez Artifest Réservé aux majeurs Pas de v » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 1366×768 normal, 390×844 sansWebgl, 390×844 sansJs, 844×390 normal, 320×568 sansJs)_
- **section sans visuel** — `/` — section#composer « Composez votre feu Dites-nous l’occasion et le bud » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 sansJs, 320×568 sansJs)_

### texte de contenu sous 13 px (ordinateur) (8)

- **texte de contenu sous 13 px (ordinateur)** — `/` — section#debut > figure.media.hero-fond > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — li.rayon.rayon--1:nth-of-type(1) > a.rayon-lien > figure.media.rayon-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — li.rayon.rayon--2:nth-of-type(2) > a.rayon-lien > figure.media.rayon-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — li.rayon.rayon--3:nth-of-type(3) > a.rayon-lien > figure.media.rayon-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#vedettes > div.piste.vedettes-piste:nth-of-type(2) > article.carte-produit:nth-of-type(2) > span.badge « Spécial mariage » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#vedettes > div.piste.vedettes-piste:nth-of-type(2) > article.carte-produit:nth-of-type(8) > span.badge « Le plus puissant » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#mariage > figure.media.mariage-accueil-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#commande > figure.media.commande-fond > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_

### rechargement au milieu de la page (1)

- **rechargement au milieu de la page** — `/` — écran différent à la même position après rechargement (17.5 %), voir comparaisons/rechargement-*.png _(1366×768)_

### fluidité (1)

- **fluidité** — `/` — 3 % d'images de plus de 50 ms _(1366×768 défilement à la molette, processeur ralenti 4 fois)_

## Non lancé

- **Safari (WebKit)** : WebKit ne peut pas s’installer ici : vérification à faire dans Safari sur le Mac (liste dans le rapport)

### À vérifier dans Safari sur le Mac (WebKit indisponible ici)

- Ouverture de chaque page : rien qui clignote, intro complète au premier chargement et au rechargement.
- Changement de page : le voile couvre l’écran, pas de page blanche ; retour arrière sans intro ni voile resté.
- Défilement : fluide (natif), en-tête qui se cache et revient sans clignoter, sections épinglées entières.
- Menu sur iPhone (mode Responsive de Safari) : ouverture, fermeture, page bloquée derrière.
- Polices, images, mention « Illustration générée », formulaires et barre fixe du bas.

## Repères

- Numéro de version des fichiers : ?v=1
- Journal v1 : 2 étape(s) notée(s), 11 min de travail pour 30 min de budget, 1 min d’attente de l’utilisateur.
- Audit rapide : étapes lourdes sur /.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Balayage des largeurs : non fait en audit rapide.
- Ouverture / (1366×768) : 2875 ms depuis le premier octet
- Ouverture / (390×844) : 2901 ms depuis le premier octet
- Bords de l’écran : 60 images d’intro, 26 de voile et 35 de menu jugées (panneau immobile couvrant tout l’écran), barre de défilement classique de 15 px.
- Fluidité / 390×844 (doigt) : 0 % d'images lentes sur 1423, tâche la plus longue 0 ms
- Vitesse / : 0.91 s de calcul au chargement (téléphone ralenti).

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --rapide --seulement=fichiers,mesures,parcours
```
