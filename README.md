# Artifest · maquette

Maquette du futur site d'Artifest, boutique de feux d'artifice pour particuliers dans les Ardennes (secteur Sedan et Mouzon).
Direction « Nuit de fête » : la nuit pour les feux, le jour pour la boutique et les outils, flamme orange pour les boutons, or pour un mot par titre.
Adresse de la maquette : https://artifest-maquette.vercel.app

## Pages

| Page | Ouverture | Contenu |
|---|---|---|
| Accueil `/` | Ciel de nuit, fusée et bouquet ; un clic dans le ciel tire une fusée | Réassurance, 5 rayons, best-sellers et nouveautés (galerie épinglée), spécial mariage, composeur de budget, feux de jour (fumée de couleur), commande en 3 étapes (mèche), appel final |
| Boutique `/boutique` | Grand titre, recherche, rayons avec leur nombre d'articles | 85 articles, filtres (rayon, sélection, budget), tri, recherche, aperçu rapide, panier en tiroir |
| Mariage `/mariage` | Plein cadre, mariés sous le bouquet | Trois moments, Full Emotion (349 €), feux longue durée, jour et scène |
| Conseils `/conseils` | Titre et photo côte à côte | Catégories F1 à F4, schéma des distances, bons gestes, questions sur la commande |
| Contact `/contact` | Numéro en très grand | Formulaire simulé, coordonnées, retrait, paiement, schéma du secteur |
| 404 | « Pétard mouillé » | Retour à l'accueil ou à la boutique |

Pages du site actuel non reprises : « Divers » et « Mon compte » (vides sur le site actuel), CGV (à fournir en page légale sur le site final).

## À fournir par le client (à compléter)

- Mentions légales : à compléter (éditeur, directeur de publication).
- Politique de confidentialité : à compléter (formulaire de contact et commande).
- Hébergeur : Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis (adresse à vérifier au moment de la mise en ligne).
- SIRET : deux numéros différents sur le site actuel (89037528000033 sur l'accueil, 89037528000025 dans les CGV) : lequel est le bon ?
- Assurance responsabilité civile professionnelle : à compléter si elle doit figurer.
- Crédits : les images marquées « Illustration générée » ont été créées avec Grok ; garder la mention sur le site final.
- Pour chaque article : catégorie (F1, F2, F3, T1…), âge minimum, nombre de coups, durée, calibre et une courte description. Le site actuel n'en donne aucune : l'aperçu rapide affiche « à compléter ».
- Photos manquantes (visuel dessiné à la place) : Wild Blast, Pyton, Tourbillon blanc rouge, Final rouge sifflant, Extreme, les 9 SPK, les 3 Éventail, FP3 S JC05, 5 fumigènes rouges / bleus / blancs, 20 jets argent (la photo actuelle annonce 99 € alors que le prix est 92 €), feu de jour rose et feu de jour bleu.
- Photos à vérifier : l'emballage de « Full Emotion » porte le nom « Full Energy » ; « Maître du feu » est montré avec la boîte « Mistrzowie Ognia ».
- Horaires de retrait : le site actuel n'en donne pas (« au moment convenu ensemble »).
- Rétractation : les CGV parlent de 31 jours après paiement ; à faire vérifier.
- Formulation « pas de déclaration à faire » pour le feu automatique F2 : affichée avec « selon Artifest » et un renvoi aux arrêtés de la commune.

## Ce qu'il faudra retirer à la mise en ligne définitive

- `noindex` (balise robots dans `source/gabarits/commun.mjs`, en-tête `X-Robots-Tag` dans `vercel.json`).
- Panier, paiement et formulaire simulés (à brancher sur la vraie boutique : Wix, SumUp ou autre).
- Les mentions « à compléter » du pied de page, une fois les pages légales écrites.
- Garder : la mention « Illustration générée » sur les images créées par IA.

## Technique

- Site statique généré : `node outils/generer.mjs` écrit les pages depuis `donnees/` (textes, catalogue `produits.json`, rayons) et `source/`.
- Images : pipeline de la bibliothèque des maquettes (`plan-images.json`, `node _biblio/images/produire.mjs plan-images.json`).
- Modules de la bibliothèque repris : panier en tiroir, envol vers le panier (habillé en fusée), catalogue filtré avec Flip.
- Effets propres : bouquet (canvas), mèche, fusée vers le panier, fumée de couleur.
- Audit : `node _audit/audit.mjs` (rapport dans `_audit/rapport/`).
