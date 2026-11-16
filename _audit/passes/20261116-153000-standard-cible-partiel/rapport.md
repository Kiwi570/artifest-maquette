# Rapport d’audit

Projet : `artifest-maquette` · 16/11/2026 16:40:05 · 10 min · 6 page(s) · audit standard ciblé sur /,/404,/boutique,/conseils,/contact,/mariage (étapes : fichiers, mesures, parcours, mouvement)

## Résumé

- Statut : **10 échec(s)**
- Passe : `20261116-153000-standard-cible-partiel` · version ?v=1
- Échecs : **10**
- À regarder : **31**
- Non lancé : **0**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), mesures (66), balayage (5), intro accélérable et passable (7), menu (1), clavier (6), liens et boutons (6), liens profonds (12), liens vers la page en cours (5), changements de hauteur (5), parcours du projet (1), mouvement (10), effets du plan (4), souris immobile (6)

## Passes de cette version (?v=1)

Chaque passe garde son rapport dans `_audit/passes/` : une relance ciblée ne fait pas disparaître la preuve d’une passe plus large.

| Passe | Niveau | Pages | Étapes | Échecs | À regarder | Non lancé | Statut |
|---|---|---|---|---:|---:|---:|---|
| 20261116-145125-rapide | rapide | toutes | toutes | 34 | 18 | 1 | échecs |
| 20261116-150512-standard | standard | toutes | toutes | 57 | 37 | 1 | échecs |
| **20261116-153000-standard-cible-partiel** (celle-ci) | standard | /,/404,/boutique,/conseils,/contact,/mariage | fichiers, mesures, parcours, mouvement | 10 | 31 | 0 | échecs |

## Échecs

### premier écran : information clé hors de l’écran (1)

- **premier écran : information clé hors de l’écran** — `/404` — section#debut > div.conteneur.introuvable-texte > p.note:nth-of-type(2) « Besoin d’un conseil ? 06 98 64 45 43 » _(844×390 normal, 390×844 sansJs, 1366×768 sansJs, 320×568 sansJs)_

### zone tactile sous 44 px (1)

- **zone tactile sous 44 px** — `/contact` — section#debut > div.conteneur.contact-ouverture-corps > p.contact-numero:nth-of-type(1) > a « 06 98 64 45 43 » — 258 × 36 px _(320×568 normal, 320×568 sansJs)_

### débordement horizontal (2)

- **débordement horizontal** — `/boutique` — page large de 332 px — largeurs : 320 px _(balayage 320–1920 normal)_
- **débordement horizontal** — `/mariage` — page large de 332 px — largeurs : 320 px _(balayage 320–1920 normal)_

### positions non recalculées après un changement de hauteur (6)

- **positions non recalculées après un changement de hauteur** — `/boutique` — Longue durée12 — décalage de 1282 px _(1366×768)_
- **positions non recalculées après un changement de hauteur** — `/boutique` — Pétards et fusées14 — décalage de 1249 px _(1366×768)_
- **positions non recalculées après un changement de hauteur** — `/boutique` — Fumigènes9 — décalage de 866 px _(1366×768)_
- **positions non recalculées après un changement de hauteur** — `/boutique` — Jour et scène21 — décalage de 2198 px _(1366×768)_
- **positions non recalculées après un changement de hauteur** — `/boutique` — Nouveautés et best-sellers1 — décalage de 402 px _(1366×768)_
- **positions non recalculées après un changement de hauteur** — `/boutique` — Prix en baisse3 — décalage de 422 px _(1366×768)_

## À regarder

### « à compléter » visible (1)

- **« à compléter » visible** — `contact.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)

### section sans visuel (5)

- **section sans visuel** — `/` — section#acheter « Acheter chez Artifest Réservé aux majeurs Pas de v » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(768×1024 normal, 390×844 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **section sans visuel** — `/` — section#composer « Composez votre feu Dites-nous l’occasion et le bud » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 sansJs, 1366×768 sansJs, 320×568 sansJs)_
- **section sans visuel** — `/conseils` — section#categories « Les catégories Quatre catégories, quatre âges F1 1 » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 320×568 normal, 768×1024 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **section sans visuel** — `/conseils` — section#gestes « Les bons gestes Avant, pendant, après 1 Avant Lise » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 320×568 normal, 768×1024 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **section sans visuel** — `/contact` — section#formulaire « Écrire Votre message Nom Téléphone E-mail Sujet Un » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 390×844 normal, 768×1024 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_

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

### lien vers la page en cours (1)

- **lien vers la page en cours** — `/boutique` — adresse non mise à jour ( au lieu de #catalogue)

### rechargement au milieu de la page (3)

- **rechargement au milieu de la page** — `/` — écran différent à la même position après rechargement (19.7 %), voir comparaisons/rechargement-*.png _(1366×768)_
- **rechargement au milieu de la page** — `/contact` — écran différent à la même position après rechargement (7.3 %), voir comparaisons/rechargement-contact-*.png _(1366×768)_
- **rechargement au milieu de la page** — `/mariage` — écran différent à la même position après rechargement (10.4 %), voir comparaisons/rechargement-mariage-*.png _(1366×768)_

## Non lancé

Tout a été lancé.


## Repères

- Numéro de version des fichiers : ?v=1
- Journal v1 : 5 étape(s) notée(s), 66 min de travail pour 115 min de budget, 24 min d’attente de l’utilisateur.
- Audit standard : étapes lourdes sur /, /boutique, /conseils, /contact, /mariage.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --pages=/,/404,/contact,/boutique,/mariage --seulement=fichiers,mesures,parcours
```
