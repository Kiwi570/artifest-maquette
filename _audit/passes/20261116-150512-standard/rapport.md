# Rapport d’audit

Projet : `artifest-maquette` · 16/11/2026 16:26:41 · 21 min · 6 page(s) · audit standard

## Résumé

- Statut : **57 échec(s)**
- Passe : `20261116-150512-standard` · version ?v=1
- Échecs : **57**
- À regarder : **37**
- Non lancé : **1**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), grille wouahou (2), mesures (66), balayage (5), films d’ouverture (10), films de transition (10), bords de l’écran (6), intro accélérable et passable (7), menu (1), clavier (6), liens et boutons (6), liens profonds (12), liens vers la page en cours (5), changements de hauteur (5), parcours du projet (1), tient dans l’écran (5), films des épinglages (1), fluidité (10), défilement selon l’appareil (5), mouvement (10), effets du plan (4), souris immobile (6), vitesse (5), captures (1)

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

## Passes de cette version (?v=1)

Chaque passe garde son rapport dans `_audit/passes/` : une relance ciblée ne fait pas disparaître la preuve d’une passe plus large.

| Passe | Niveau | Pages | Étapes | Échecs | À regarder | Non lancé | Statut |
|---|---|---|---|---:|---:|---:|---|
| 20261116-145125-rapide | rapide | toutes | toutes | 34 | 18 | 1 | échecs |
| **20261116-150512-standard** (celle-ci) | standard | toutes | toutes | 57 | 37 | 1 | échecs |

## Échecs

### contraste insuffisant (12)

- **contraste insuffisant** — `/` — div.entete-rangee > div.entete-actions > a.bouton.entete-panier:nth-of-type(2) > span.pet-compte.est-vide:nth-of-type(2) « 0 » — 2.77:1 (minimum 4.5:1) _(768×1024 normal, 844×390 normal, 1366×768 normal, 1920×1080 normal, 1366×768 sansWebgl)_
- **contraste insuffisant** — `/` — body#haut > div:nth-of-type(4) > a.bouton:nth-of-type(2) > span.pet-compte.est-vide « 0 » — 2.77:1 (minimum 4.5:1) _(390×844 normal, 320×568 normal, 390×844 sansWebgl)_
- **contraste insuffisant** — `/404` — body#haut > div.barre-masquee:nth-of-type(4) > a.bouton:nth-of-type(2) > span.pet-compte.est-vide « 0 » — 2.77:1 (minimum 4.5:1) _(320×568 normal, 390×844 normal, 390×844 sansWebgl)_
- **contraste insuffisant** — `/404` — div.entete-rangee > div.entete-actions > a.bouton.entete-panier:nth-of-type(2) > span.pet-compte.est-vide:nth-of-type(2) « 0 » — 2.77:1 (minimum 4.5:1) _(844×390 normal, 768×1024 normal, 1366×768 normal, 1920×1080 normal, 1366×768 sansWebgl)_
- **contraste insuffisant** — `/boutique` — div.entete-rangee > div.entete-actions > a.bouton.entete-panier:nth-of-type(2) > span.pet-compte.est-vide:nth-of-type(2) « 0 » — 2.77:1 (minimum 4.5:1) _(768×1024 normal, 844×390 normal, 1366×768 normal, 1920×1080 normal, 1366×768 sansWebgl)_
- **contraste insuffisant** — `/boutique` — body#haut > div.barre-masquee:nth-of-type(4) > a.bouton:nth-of-type(2) > span.pet-compte.est-vide « 0 » — 2.77:1 (minimum 4.5:1) _(390×844 normal, 320×568 normal, 390×844 sansWebgl)_
- **contraste insuffisant** — `/conseils` — body#haut > div:nth-of-type(4) > a.bouton:nth-of-type(2) > span.pet-compte.est-vide « 0 » — 2.77:1 (minimum 4.5:1) _(320×568 normal, 390×844 normal, 390×844 sansWebgl)_
- **contraste insuffisant** — `/conseils` — div.entete-rangee > div.entete-actions > a.bouton.entete-panier:nth-of-type(2) > span.pet-compte.est-vide:nth-of-type(2) « 0 » — 2.77:1 (minimum 4.5:1) _(844×390 normal, 768×1024 normal, 1366×768 normal, 1920×1080 normal, 1366×768 sansWebgl)_
- **contraste insuffisant** — `/contact` — body#haut > div:nth-of-type(4) > a.bouton:nth-of-type(2) > span.pet-compte.est-vide « 0 » — 2.77:1 (minimum 4.5:1) _(390×844 normal, 320×568 normal, 390×844 sansWebgl)_
- **contraste insuffisant** — `/contact` — div.entete-rangee > div.entete-actions > a.bouton.entete-panier:nth-of-type(2) > span.pet-compte.est-vide:nth-of-type(2) « 0 » — 2.77:1 (minimum 4.5:1) _(844×390 normal, 768×1024 normal, 1366×768 normal, 1920×1080 normal, 1366×768 sansWebgl)_
- **contraste insuffisant** — `/mariage` — body#haut > div:nth-of-type(4) > a.bouton:nth-of-type(2) > span.pet-compte.est-vide « 0 » — 2.77:1 (minimum 4.5:1) _(390×844 normal, 320×568 normal, 390×844 sansWebgl)_
- **contraste insuffisant** — `/mariage` — div.entete-rangee > div.entete-actions > a.bouton.entete-panier:nth-of-type(2) > span.pet-compte.est-vide:nth-of-type(2) « 0 » — 2.77:1 (minimum 4.5:1) _(768×1024 normal, 844×390 normal, 1366×768 normal, 1920×1080 normal, 1366×768 sansWebgl)_

### textes qui se chevauchent (5)

- **textes qui se chevauchent** — `/` — div.hero-texte.conteneur > h1.hero-titre > span.ligne-masque:nth-of-type(1) > span.hero-ligne « Le feu d’artifice » — avec div.hero-texte.conteneur > h1.hero-titre > span.ligne-masque:nth-of-type(2) > span.hero-ligne.hero-ligne--or « à petits prix, » _(1920×1080 normal)_
- **textes qui se chevauchent** — `/` — div.hero-texte.conteneur > h1.hero-titre > span.ligne-masque:nth-of-type(2) > span.hero-ligne.hero-ligne--or « à petits prix, » — avec div.hero-texte.conteneur > h1.hero-titre > span.ligne-masque:nth-of-type(3) > span.hero-ligne « dans les Ardennes » _(1920×1080 normal)_
- **textes qui se chevauchent** — `/404` — section#debut > div.conteneur.introuvable-texte > p.introuvable-code:nth-of-type(1) « 404 » — avec section#debut > div.conteneur.introuvable-texte > h1 « Pétard mouillé » _(320×568 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **textes qui se chevauchent** — `/conseils` — section#debut > div.conseils-ouverture-texte > h1.conseils-titre > span.bloc-ligne:nth-of-type(1) « Tirer en toute » — avec section#debut > div.conseils-ouverture-texte > h1.conseils-titre > span.bloc-ligne.or:nth-of-type(2) « sécurité » _(1366×768 normal, 1366×768 sansJs, 1920×1080 normal, 1366×768 sansWebgl)_
- **textes qui se chevauchent** — `/mariage` — div.conteneur.mariage-ouverture-corps > h1.mariage-titre > span.ligne-masque:nth-of-type(1) > span « Le bouquet final » — avec div.conteneur.mariage-ouverture-corps > h1.mariage-titre > span.ligne-masque:nth-of-type(2) > span.or « de votre mariage » _(1920×1080 normal)_

### premier écran : information clé hors de l’écran (3)

- **premier écran : information clé hors de l’écran** — `/404` — section#debut > div.conteneur.introuvable-texte > p.note:nth-of-type(4) « 06 98 64 45 43 » _(844×390 normal, 320×568 sansJs)_
- **premier écran : information clé hors de l’écran** — `/contact` — section#debut > div.conteneur.contact-ouverture-corps > p.contact-info:nth-of-type(4) « Secteur Sedan et Mouzon · Pas de vente aux mineurs » _(320×568 sansJs)_
- **premier écran : information clé hors de l’écran** — `/mariage` — section#debut > div.conteneur.mariage-ouverture-corps > p.mariage-info:nth-of-type(3) « Full Emotion, feu automatique F2 : 349 € » _(320×568 normal, 390×844 normal, 390×844 sansJs, 390×844 sansWebgl, 1366×768 sansJs, 320×568 sansJs)_

### titres dans l’ordre (1)

- **titres dans l’ordre** — `/boutique` — div.conteneur > div.grille-produits:nth-of-type(2) > article.cff__fiche.carte-produit:nth-of-type(1) > h3.carte-produit-nom « Macro Cosmos II » — h1 suivi de h3 _(390×844 normal, 1366×768 normal, 390×844 sansJs, 1366×768 sansJs)_

### photo faible affichée en grand (24)

- **photo faible affichée en grand** — `/boutique` — div.grille-produits:nth-of-type(2) > article.cff__fiche.carte-produit:nth-of-type(3) > div.vignette:nth-of-type(1) > img « Emballage du compact Cracken » — p-cracken (3/5, faible, 44 % de l'écran) : en vignette, ou une meilleure image _(390×844 normal)_
- **photo faible affichée en grand** — `/boutique` — div.grille-produits:nth-of-type(2) > article.cff__fiche.carte-produit:nth-of-type(5) > div.vignette:nth-of-type(1) > img « Emballage du compact Finale Effect 3 » — p-finale-effect-3 (3/5, faible, 44 % de l'écran) : en vignette, ou une meilleure image _(390×844 normal)_
- **photo faible affichée en grand** — `/boutique` — div.grille-produits:nth-of-type(2) > article.cff__fiche.carte-produit:nth-of-type(6) > div.vignette:nth-of-type(1) > img « Emballage du compact Panther » — p-panther (3/5, faible, 44 % de l'écran) : en vignette, ou une meilleure image _(390×844 normal)_
- **photo faible affichée en grand** — `/boutique` — div.grille-produits:nth-of-type(2) > article.cff__fiche.carte-produit:nth-of-type(10) > div.vignette:nth-of-type(1) > img « Emballage du compact Rainbow Pro » — p-rainbow-pro (3/5, faible, 44 % de l'écran) : en vignette, ou une meilleure image _(390×844 normal)_
- **photo faible affichée en grand** — `/boutique` — div.grille-produits:nth-of-type(2) > article.cff__fiche.carte-produit:nth-of-type(12) > div.vignette:nth-of-type(1) > img « Emballage du compact Space Line V » — p-space-line-v (3/5, faible, 44 % de l'écran) : en vignette, ou une meilleure image _(390×844 normal)_
- **photo faible affichée en grand** — `/boutique` — div.grille-produits:nth-of-type(2) > article.cff__fiche.carte-produit:nth-of-type(22) > div.vignette:nth-of-type(1) > img « Emballage du compact Marines » — p-marines (3/5, faible, 44 % de l'écran) : en vignette, ou une meilleure image _(390×844 normal)_
- **photo faible affichée en grand** — `/boutique` — div.grille-produits:nth-of-type(2) > article.cff__fiche.carte-produit:nth-of-type(23) > div.vignette:nth-of-type(1) > img « Emballage du compact Blue Sky » — p-blue-sky (3/5, faible, 41 % de l'écran) : en vignette, ou une meilleure image _(390×844 normal)_
- **photo faible affichée en grand** — `/boutique` — div.grille-produits:nth-of-type(2) > article.cff__fiche.carte-produit:nth-of-type(35) > div.vignette:nth-of-type(1) > img « Emballage du compact Maître du feu » — p-maitre-du-feu (3/5, faible, 44 % de l'écran) : en vignette, ou une meilleure image _(390×844 normal)_
- **photo faible affichée en grand** — `/boutique` — div.grille-produits:nth-of-type(2) > article.cff__fiche.carte-produit:nth-of-type(47) > div.vignette:nth-of-type(1) > img « Fontaine 2 » — p-fontaine-2 (3/5, faible, 44 % de l'écran) : en vignette, ou une meilleure image _(390×844 normal)_
- **photo faible affichée en grand** — `/boutique` — div.grille-produits:nth-of-type(2) > article.cff__fiche.carte-produit:nth-of-type(60) > div.vignette:nth-of-type(1) > img « Lot de 5 fumigènes verts » — p-5-fumigenes-verts (3/5, faible, 36 % de l'écran) : en vignette, ou une meilleure image _(390×844 normal)_
- **photo faible affichée en grand** — `/boutique` — div.grille-produits:nth-of-type(2) > article.cff__fiche.carte-produit:nth-of-type(65) > div.vignette:nth-of-type(1) > img « Fumée bleu, blanc, rouge sur une pelouse » — p-fumigene-bbr (3/5, faible, 41 % de l'écran) : en vignette, ou une meilleure image _(390×844 normal)_
- **photo faible affichée en grand** — `/boutique` — div.grille-produits:nth-of-type(2) > article.cff__fiche.carte-produit:nth-of-type(67) > div.vignette:nth-of-type(1) > img « Valise de 2 bases et 4 déclencheurs » — p-valise-2-bases-4-declencheurs (3/5, faible, 36 % de l'écran) : en vignette, ou une meilleure image _(390×844 normal)_
- **photo faible affichée en grand** — `/boutique` — div.grille-produits:nth-of-type(2) > article.cff__fiche.carte-produit:nth-of-type(69) > div.vignette:nth-of-type(1) > img « Deux déclencheurs et leurs jets de couleur » — p-2-declencheurs-2-jets-de-jour (3/5, faible, 45 % de l'écran) : en vignette, ou une meilleure image _(390×844 normal)_
- **photo faible affichée en grand** — `/boutique` — div.grille-produits:nth-of-type(2) > article.cff__fiche.carte-produit:nth-of-type(71) > div.vignette:nth-of-type(1) > img « Valise de 8 déclencheurs avec télécommande » — p-valise-8-declencheurs-scene-jour (3/5, faible, 39 % de l'écran) : en vignette, ou une meilleure image _(390×844 normal)_
- **photo faible affichée en grand** — `/boutique` — div.grille-produits:nth-of-type(2) > article.cff__fiche.carte-produit:nth-of-type(82) > div.vignette:nth-of-type(1) > img « Boîte de 5 jets de scène » — p-5-jets-scene-3m-60s (3/5, faible, 44 % de l'écran) : en vignette, ou une meilleure image _(390×844 normal)_
- **photo faible affichée en grand** — `/boutique` — div.grille-produits:nth-of-type(2) > article.cff__fiche.carte-produit:nth-of-type(83) > div.vignette:nth-of-type(1) > img « Boîte de 5 jets de scène d'intérieur » — p-5-jets-scene-interieur-3m (3/5, faible, 44 % de l'écran) : en vignette, ou une meilleure image _(390×844 normal)_
- **photo faible affichée en grand** — `/boutique` — div.grille-produits:nth-of-type(2) > article.cff__fiche.carte-produit:nth-of-type(84) > div.vignette:nth-of-type(1) > img « Boîte de 5 jets d'intérieur » — p-5-jets-interieur-2m (3/5, faible, 44 % de l'écran) : en vignette, ou une meilleure image _(390×844 normal)_
- **photo faible affichée en grand** — `/mariage` — div.grille-produits.fx-fini:nth-of-type(2) > article.carte-produit:nth-of-type(1) > div.vignette:nth-of-type(1) > img « Emballage du compact Panther » — p-panther (3/5, faible, 44 % de l'écran) : en vignette, ou une meilleure image _(390×844 normal)_
- **photo faible affichée en grand** — `/mariage` — div.grille-produits.fx-fini:nth-of-type(2) > article.carte-produit:nth-of-type(2) > div.vignette:nth-of-type(1) > img « Emballage du compact Marines » — p-marines (3/5, faible, 44 % de l'écran) : en vignette, ou une meilleure image _(390×844 normal)_
- **photo faible affichée en grand** — `/mariage` — div.grille-produits.fx-fini:nth-of-type(2) > article.carte-produit:nth-of-type(2) > div.vignette:nth-of-type(1) > img « Boîte de 5 jets de scène » — p-5-jets-scene-3m-60s (3/5, faible, 44 % de l'écran) : en vignette, ou une meilleure image _(390×844 normal)_
- **photo faible affichée en grand** — `/mariage` — div.grille-produits.fx-fini:nth-of-type(2) > article.carte-produit:nth-of-type(3) > div.vignette:nth-of-type(1) > img « Boîte de 5 jets d'intérieur » — p-5-jets-interieur-2m (3/5, faible, 44 % de l'écran) : en vignette, ou une meilleure image _(390×844 normal)_
- **photo faible affichée en grand** — `/mariage` — div.grille-produits.fx-fini:nth-of-type(2) > article.carte-produit:nth-of-type(4) > div.vignette:nth-of-type(1) > img « Valise de 8 déclencheurs avec télécommande » — p-valise-8-declencheurs-scene-jour (3/5, faible, 39 % de l'écran) : en vignette, ou une meilleure image _(390×844 normal)_
- **photo faible affichée en grand** — `/mariage` — div.grille-produits.fx-fini:nth-of-type(2) > article.carte-produit:nth-of-type(5) > div.vignette:nth-of-type(1) > img « Deux déclencheurs et leurs jets de couleur » — p-2-declencheurs-2-jets-de-jour (3/5, faible, 45 % de l'écran) : en vignette, ou une meilleure image _(390×844 normal)_
- **photo faible affichée en grand** — `/mariage` — div.conteneur.vedette-grille > div.vedette-visuel:nth-of-type(1) > div.vignette.vedette-vignette > img « Emballage du feu automatique Full Emotion » — p-full-emotion (3/5, faible, 30 % de l'écran) : en vignette, ou une meilleure image _(1366×768 normal)_

### zone tactile sous 44 px (1)

- **zone tactile sous 44 px** — `/contact` — input#f-majeur — 24 × 24 px _(390×844 normal, 320×568 normal, 844×390 normal, 768×1024 normal, 390×844 sansJs, 390×844 sansWebgl, +1)_

### texte coupé (1)

- **texte coupé** — `/contact` — section#debut > div.conteneur.contact-ouverture-corps > p.contact-numero:nth-of-type(1) > a « 06 98 64 45 43 » — coupé par section#debut « Illustration générée Une question, une commande ?  » _(390×844 normal, 320×568 normal, 390×844 sansJs, 390×844 sansWebgl, 320×568 sansJs)_

### élément recouvert (1)

- **élément recouvert** — `/contact` — section#secteur > div.conteneur.secteur-grille > svg.secteur-carte > g:nth-of-type(1) — par section#secteur > div.conteneur.secteur-grille > svg.secteur-carte > path:nth-of-type(1) _(390×844 normal, 768×1024 normal, 1366×768 normal, 1920×1080 normal)_

### premier écran : bouton principal hors de l’écran (1)

- **premier écran : bouton principal hors de l’écran** — `/mariage` — section#debut > div.conteneur.mariage-ouverture-corps > p.mariage-actions:nth-of-type(2) > a.bouton:nth-of-type(1) « Composer mon mariage » _(1366×768 sansJs)_

### lien vers la page en cours (1)

- **lien vers la page en cours** — `/boutique` — la page se recharge au lieu de défiler

### positions non recalculées après un changement de hauteur (6)

- **positions non recalculées après un changement de hauteur** — `/boutique` — Longue durée12 — décalage de 1282 px _(1366×768)_
- **positions non recalculées après un changement de hauteur** — `/boutique` — Pétards et fusées14 — décalage de 1249 px _(1366×768)_
- **positions non recalculées après un changement de hauteur** — `/boutique` — Jour et scène21 — décalage de 1332 px _(1366×768)_
- **positions non recalculées après un changement de hauteur** — `/boutique` — Tous21 — décalage de 2198 px _(1366×768)_
- **positions non recalculées après un changement de hauteur** — `/boutique` — Nouveautés et best-sellers1 — décalage de 402 px _(1366×768)_
- **positions non recalculées après un changement de hauteur** — `/boutique` — Prix en baisse3 — décalage de 422 px _(1366×768)_

### section sans effet au défilement (1)

- **section sans effet au défilement** — `/boutique` — section#catalogue.catalogue.jour — aucun élément data-effet (bibliothèque : data-anime="lignes|mots|lettres|cascade|rideau", data-fx ; ou effet du projet marqué data-effet) _(1366×768 normal, 390×844 normal)_

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

### grille : objet d’ouverture hors du premier écran (1)

- **grille : objet d’ouverture hors du premier écran** — `/contact` — 358 × 43 px visibles : l’intro et le voile s’ouvrent depuis le centre de l’écran à cette taille _(390×844)_

### section sans visuel (5)

- **section sans visuel** — `/` — section#acheter « Acheter chez Artifest Réservé aux majeurs Pas de v » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(768×1024 normal, 390×844 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **section sans visuel** — `/` — section#composer « Composez votre feu Dites-nous l’occasion et le bud » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 sansJs, 1366×768 sansJs, 320×568 sansJs)_
- **section sans visuel** — `/conseils` — section#categories « Les catégories Quatre catégories, quatre âges F1 1 » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **section sans visuel** — `/conseils` — section#gestes « Les bons gestes Avant, pendant, après 1 Avant Lise » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **section sans visuel** — `/contact` — section#formulaire « Écrire Votre message Nom Téléphone E-mail Sujet Un » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 320×568 normal, 844×390 normal, 768×1024 normal, 390×844 sansJs, 1366×768 normal, +5)_

### texte de contenu sous 13 px (ordinateur) (21)

- **texte de contenu sous 13 px (ordinateur)** — `/boutique` — div.grille-produits:nth-of-type(2) > article.cff__fiche.carte-produit:nth-of-type(8) > div.vignette.vignette--dessin:nth-of-type(1) > span « Tourbillon blanc rouge » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/boutique` — div.grille-produits:nth-of-type(2) > article.cff__fiche.carte-produit:nth-of-type(9) > div.vignette.vignette--dessin:nth-of-type(1) > span « Final rouge sifflant » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/boutique` — div.grille-produits:nth-of-type(2) > article.cff__fiche.carte-produit:nth-of-type(13) > div.vignette.vignette--dessin:nth-of-type(1) > span « SPK éventail rouge » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/boutique` — div.grille-produits:nth-of-type(2) > article.cff__fiche.carte-produit:nth-of-type(14) > div.vignette.vignette--dessin:nth-of-type(1) > span « SPK éventail crépitant » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/boutique` — div.grille-produits:nth-of-type(2) > article.cff__fiche.carte-produit:nth-of-type(15) > div.vignette.vignette--dessin:nth-of-type(1) > span « SPK éventail blanc scintillant » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/boutique` — div.grille-produits:nth-of-type(2) > article.cff__fiche.carte-produit:nth-of-type(16) > div.vignette.vignette--dessin:nth-of-type(1) > span « SPK éventail bleu » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/boutique` — div.grille-produits:nth-of-type(2) > article.cff__fiche.carte-produit:nth-of-type(17) > div.vignette.vignette--dessin:nth-of-type(1) > span « SPK rouge scintillant » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/boutique` — div.grille-produits:nth-of-type(2) > article.cff__fiche.carte-produit:nth-of-type(18) > div.vignette.vignette--dessin:nth-of-type(1) > span « SPK blanc scintillant » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/boutique` — div.grille-produits:nth-of-type(2) > article.cff__fiche.carte-produit:nth-of-type(19) > div.vignette.vignette--dessin:nth-of-type(1) > span « SPK bleu blanc rouge » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/boutique` — div.grille-produits:nth-of-type(2) > article.cff__fiche.carte-produit:nth-of-type(26) > div.vignette.vignette--dessin:nth-of-type(1) > span « Éventail bleu blanc rouge » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/boutique` — div.grille-produits:nth-of-type(2) > article.cff__fiche.carte-produit:nth-of-type(27) > div.vignette.vignette--dessin:nth-of-type(1) > span « Éventail rouge » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/boutique` — div.grille-produits:nth-of-type(2) > article.cff__fiche.carte-produit:nth-of-type(28) > div.vignette.vignette--dessin:nth-of-type(1) > span « Éventail bleu » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/boutique` — div.grille-produits:nth-of-type(2) > article.cff__fiche.carte-produit:nth-of-type(61) > div.vignette.vignette--dessin:nth-of-type(1) > span « 5 fumigènes rouges » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/boutique` — div.grille-produits:nth-of-type(2) > article.cff__fiche.carte-produit:nth-of-type(62) > div.vignette.vignette--dessin:nth-of-type(1) > span « 5 fumigènes bleus » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/boutique` — div.grille-produits:nth-of-type(2) > article.cff__fiche.carte-produit:nth-of-type(63) > div.vignette.vignette--dessin:nth-of-type(1) > span « 5 fumigènes blancs » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/boutique` — div.grille-produits:nth-of-type(2) > article.cff__fiche.carte-produit:nth-of-type(66) > div.vignette.vignette--dessin:nth-of-type(1) > span « 20 jets argent » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/boutique` — div.grille-produits:nth-of-type(2) > article.cff__fiche.carte-produit:nth-of-type(78) > div.vignette.vignette--dessin:nth-of-type(1) > span « Feu de jour rose » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/boutique` — div.grille-produits:nth-of-type(2) > article.cff__fiche.carte-produit:nth-of-type(81) > div.vignette.vignette--dessin:nth-of-type(1) > span « Feu de jour bleu » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/contact` — section#secteur > div.conteneur.secteur-grille > svg.secteur-carte > text — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/mariage` — div.grille-produits.fx-fini:nth-of-type(2) > article.carte-produit:nth-of-type(1) > div.vignette.vignette--dessin:nth-of-type(1) > span « 20 jets argent » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/mariage` — div.grille-produits:nth-of-type(2) > article.carte-produit:nth-of-type(1) > div.vignette.vignette--dessin:nth-of-type(1) > span « 20 jets argent » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 sansJs)_

### ouverture : changement brusque (1)

- **ouverture : changement brusque** — `/boutique` — à 2443 ms (différence 22 %) (films/ouverture-boutique-1366.png) _(1366×768 film)_

### rechargement au milieu de la page (3)

- **rechargement au milieu de la page** — `/` — écran différent à la même position après rechargement (19.7 %), voir comparaisons/rechargement-*.png _(1366×768)_
- **rechargement au milieu de la page** — `/contact` — écran différent à la même position après rechargement (7.4 %), voir comparaisons/rechargement-contact-*.png _(1366×768)_
- **rechargement au milieu de la page** — `/mariage` — écran différent à la même position après rechargement (11.2 %), voir comparaisons/rechargement-mariage-*.png _(1366×768)_

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
- Journal v1 : 5 étape(s) notée(s), 66 min de travail pour 115 min de budget, 24 min d’attente de l’utilisateur.
- Audit standard : étapes lourdes sur /, /boutique, /conseils, /contact, /mariage.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Ouverture / (1366×768) : 2888 ms depuis le premier octet
- Ouverture /boutique (1366×768) : 2894 ms depuis le premier octet
- Ouverture /conseils (1366×768) : 2907 ms depuis le premier octet
- Ouverture /contact (1366×768) : 2883 ms depuis le premier octet
- Ouverture /mariage (1366×768) : 2883 ms depuis le premier octet
- Ouverture / (390×844) : 2884 ms depuis le premier octet
- Ouverture /boutique (390×844) : 2899 ms depuis le premier octet
- Ouverture /conseils (390×844) : 2903 ms depuis le premier octet
- Ouverture /contact (390×844) : 2887 ms depuis le premier octet
- Ouverture /mariage (390×844) : 2898 ms depuis le premier octet
- Bords de l’écran : 453 images d’intro, 90 de voile et 198 de menu jugées (panneau immobile couvrant tout l’écran), barre de défilement classique de 15 px.
- Tient dans l'écran /boutique : aucune section épinglée ou plein écran.
- Tient dans l'écran /conseils : aucune section épinglée ou plein écran.
- Tient dans l'écran /contact : aucune section épinglée ou plein écran.
- Tient dans l'écran /mariage : aucune section épinglée ou plein écran.
- Fluidité / 1366×768 (molette) : 1 % d'images lentes sur 352, tâche la plus longue 88 ms
- Fluidité /boutique 1366×768 (molette) : 0 % d'images lentes sur 451, tâche la plus longue 0 ms
- Fluidité /conseils 1366×768 (molette) : 0 % d'images lentes sur 237, tâche la plus longue 0 ms
- Fluidité /contact 1366×768 (molette) : 0 % d'images lentes sur 179, tâche la plus longue 0 ms
- Fluidité /mariage 1366×768 (molette) : 0 % d'images lentes sur 296, tâche la plus longue 0 ms
- Fluidité / 390×844 (doigt) : 0 % d'images lentes sur 1429, tâche la plus longue 0 ms
- Fluidité /boutique 390×844 (doigt) : 0 % d'images lentes sur 1353, tâche la plus longue 0 ms
- Fluidité /conseils 390×844 (doigt) : 0 % d'images lentes sur 1347, tâche la plus longue 0 ms
- Fluidité /contact 390×844 (doigt) : 0 % d'images lentes sur 1349, tâche la plus longue 0 ms
- Fluidité /mariage 390×844 (doigt) : 0 % d'images lentes sur 1340, tâche la plus longue 0 ms
- Vitesse / : 0.69 s de calcul au chargement (téléphone ralenti).
- Vitesse /boutique : 0.84 s de calcul au chargement (téléphone ralenti).
- Vitesse /conseils : 0.35 s de calcul au chargement (téléphone ralenti).
- Vitesse /contact : 0.32 s de calcul au chargement (téléphone ralenti).
- Vitesse /mariage : 0.53 s de calcul au chargement (téléphone ralenti).

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --pages=/,/404,/boutique,/conseils,/contact,/mariage --seulement=fichiers,mesures,parcours,mouvement
```
