# Rapport d’audit

Projet : `artifest-maquette` · 16/11/2026 17:00:16 · 7 min · 6 page(s) · audit complet (étapes : mesures, ecran)

## Résumé

- Statut : **1 échec(s)**
- Passe : `20261116-155255-complet-partiel` · version ?v=1
- Échecs : **1**
- À regarder : **6**
- Non lancé : **0**
- Contrôles passés : mesures (234), balayage (5), tient dans l’écran (8), films des épinglages (1)

## Passes de cette version (?v=1)

Chaque passe garde son rapport dans `_audit/passes/` : une relance ciblée ne fait pas disparaître la preuve d’une passe plus large.

| Passe | Niveau | Pages | Étapes | Échecs | À regarder | Non lancé | Statut |
|---|---|---|---|---:|---:|---:|---|
| 20261116-145125-rapide | rapide | toutes | toutes | 34 | 18 | 1 | échecs |
| 20261116-150512-standard | standard | toutes | toutes | 57 | 37 | 1 | échecs |
| 20261116-153000-standard-cible-partiel | standard | /,/404,/boutique,/conseils,/contact,/mariage | fichiers, mesures, parcours, mouvement | 10 | 31 | 0 | échecs |
| 20261116-154353-standard-cible-partiel | standard | /,/404,/contact,/boutique,/mariage | fichiers, mesures, parcours | 0 | 9 | 0 | complet |
| **20261116-155255-complet-partiel** (celle-ci) | complet | toutes | mesures, ecran | 1 | 6 | 0 | échecs |

## Échecs

### premier écran : information clé hors de l’écran (1)

- **premier écran : information clé hors de l’écran** — `/` — section#debut > div.hero-texte.conteneur > p.hero-info:nth-of-type(3) « 18+ 85 articles · retrait à Autrecourt-et-Pourron » _(1000×560 sansJs, 1280×720 sansJs)_

## À regarder

### section sans visuel (5)

- **section sans visuel** — `/` — section#acheter « Acheter chez Artifest Réservé aux majeurs Pas de v » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 375×667 normal, 320×568 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/` — section#composer « Composez votre feu Dites-nous l’occasion et le bud » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 sansJs, 375×667 sansJs, 390×844 sansJs, 844×390 sansJs, 768×1024 sansJs, 1024×768 sansJs, +7)_
- **section sans visuel** — `/conseils` — section#categories « Les catégories Quatre catégories, quatre âges F1 1 » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 375×667 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/conseils` — section#gestes « Les bons gestes Avant, pendant, après 1 Avant Lise » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 375×667 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/contact` — section#formulaire « Écrire Votre message Nom Téléphone E-mail Sujet Un » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 375×667 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_

### texte de contenu sous 13 px (ordinateur) (1)

- **texte de contenu sous 13 px (ordinateur)** — `/contact` — section#secteur > div.conteneur.secteur-grille > svg.secteur-carte > text — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_

## Non lancé

Tout a été lancé.


## Repères

- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Tient dans l'écran /boutique : aucune section épinglée ou plein écran.
- Tient dans l'écran /conseils : aucune section épinglée ou plein écran.
- Tient dans l'écran /contact : aucune section épinglée ou plein écran.
- Tient dans l'écran /mariage : aucune section épinglée ou plein écran.

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --complet --pages=/ --seulement=fichiers,mesures
```
