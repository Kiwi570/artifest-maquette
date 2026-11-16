# Rapport d’audit

Projet : `artifest-maquette` · 16/11/2026 16:50:31 · 7 min · 5 page(s) · audit standard ciblé sur /,/404,/contact,/boutique,/mariage (étapes : fichiers, mesures, parcours)

## Résumé

- Statut : **tout a tourné, aucun échec**
- Passe : `20261116-154353-standard-cible-partiel` · version ?v=1
- Échecs : **0**
- À regarder : **9**
- Non lancé : **0**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), mesures (55), balayage (4), intro accélérable et passable (7), menu (1), clavier (5), liens et boutons (5), liens profonds (12), liens vers la page en cours (4), changements de hauteur (4), parcours du projet (1)

## Passes de cette version (?v=1)

Chaque passe garde son rapport dans `_audit/passes/` : une relance ciblée ne fait pas disparaître la preuve d’une passe plus large.

| Passe | Niveau | Pages | Étapes | Échecs | À regarder | Non lancé | Statut |
|---|---|---|---|---:|---:|---:|---|
| 20261116-145125-rapide | rapide | toutes | toutes | 34 | 18 | 1 | échecs |
| 20261116-150512-standard | standard | toutes | toutes | 57 | 37 | 1 | échecs |
| 20261116-153000-standard-cible-partiel | standard | /,/404,/boutique,/conseils,/contact,/mariage | fichiers, mesures, parcours, mouvement | 10 | 31 | 0 | échecs |
| **20261116-154353-standard-cible-partiel** (celle-ci) | standard | /,/404,/contact,/boutique,/mariage | fichiers, mesures, parcours | 0 | 9 | 0 | complet |

## Échecs

Aucun.

## À regarder

### « à compléter » visible (1)

- **« à compléter » visible** — `contact.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)

### section sans visuel (3)

- **section sans visuel** — `/` — section#acheter « Acheter chez Artifest Réservé aux majeurs Pas de v » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(768×1024 normal, 390×844 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **section sans visuel** — `/` — section#composer « Composez votre feu Dites-nous l’occasion et le bud » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 sansJs, 1366×768 sansJs, 320×568 sansJs)_
- **section sans visuel** — `/contact` — section#formulaire « Écrire Votre message Nom Téléphone E-mail Sujet Un » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 320×568 normal, 768×1024 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_

### texte de contenu sous 13 px (ordinateur) (1)

- **texte de contenu sous 13 px (ordinateur)** — `/contact` — section#secteur > div.conteneur.secteur-grille > svg.secteur-carte > text — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_

### lien vers la page en cours (1)

- **lien vers la page en cours** — `/boutique` — adresse non mise à jour ( au lieu de #catalogue)

### rechargement au milieu de la page (3)

- **rechargement au milieu de la page** — `/` — écran différent à la même position après rechargement (19.7 %), voir comparaisons/rechargement-*.png _(1366×768)_
- **rechargement au milieu de la page** — `/contact` — écran différent à la même position après rechargement (7.3 %), voir comparaisons/rechargement-contact-*.png _(1366×768)_
- **rechargement au milieu de la page** — `/mariage` — écran différent à la même position après rechargement (10.2 %), voir comparaisons/rechargement-mariage-*.png _(1366×768)_

## Non lancé

Tout a été lancé.


## Repères

- Numéro de version des fichiers : ?v=1
- Journal v1 : 5 étape(s) notée(s), 66 min de travail pour 115 min de budget, 24 min d’attente de l’utilisateur.
- Audit standard : étapes lourdes sur /, /boutique, /contact, /mariage.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`
