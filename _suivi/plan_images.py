import json, os
rec = {i['fichier']: i for i in json.load(open('recu/recuperation.json'))['images']}


def trouve(src):
    if src in rec:
        return src
    base = os.path.splitext(src)[0]
    for ext in ('.png', '.jpg', '.webp', '.jpeg'):
        if base + ext in rec:
            return base + ext
    raise KeyError(src)


def produit(nom, src, alt, beaute=3):
    src = trouve(src)
    i = rec[src]
    w, h = i['largeur'], i['hauteur']
    return {"source": "recu/" + src, "nom": "p-" + nom, "role": "produit", "alt": alt, "ratio": f"{w}:{h}", "largeurs": [320, 640], "beaute": beaute}


P = [
    ("macro-cosmos-2", "filtrer-22.jpg", "Emballage du compact Macro Cosmos II"),
    ("mars-firewolf", "filtrer-3.png", "Emballage du compact Mars Firewolf"),
    ("cracken", "filtrer-9.png", "Emballage du compact Cracken"),
    ("finale-effect-3", "filtrer-12.png", "Emballage du compact Finale Effect 3"),
    ("panther", "panther.png", "Emballage du compact Panther"),
    ("rainbow-pro", "filtrer-10.png", "Emballage du compact Rainbow Pro"),
    ("scorpion", "filtrer-2.jpg", "Emballage du compact Scorpion"),
    ("space-line-v", "filtrer-14.png", "Emballage du compact Space Line V"),
    ("marines", "marines.png", "Emballage du compact Marines"),
    ("blue-sky", "filtrer-18.jpg", "Emballage du compact Blue Sky"),
    ("douce-france", "filtrer-23.png", "Emballage du compact Douce France"),
    ("vita-bella", "filtrer.jpg", "Emballage du compact Vita Bella"),
    ("jorge-space-line-2", "vous-rencontrez-difficultes-commander-4.png", "Emballage du compact Jorge Space Line II"),
    ("rainbow", "filtrer-19.png", "Emballage du compact Rainbow"),
    ("tyrant", "filtrer-24.jpg", "Emballage du compact Tyrant"),
    ("generation-13", "filtrer-20.png", "Emballage du compact Generation 13"),
    ("show-box-titan", "vous-rencontrez-difficultes-commander-2.png", "Emballage du compact Show Box Titan"),
    ("jorge-super-show-100", "jorge-super-show-100.png", "Emballage du compact Jorge Super Show 100"),
    ("maitre-du-feu", "filtrer-15.jpg", "Emballage du compact Maître du feu"),
    ("bombaclac", "bombaclac.png", "Emballage du feu longue durée Bombaclac"),
    ("full-emotion", "full-emotion.png", "Emballage du feu automatique Full Emotion"),
    ("furioso", "furioso.png", "Emballage du feu longue durée Furioso"),
    ("alien", "alien.png", "Emballage du feu longue durée Alien"),
    ("big-bum", "big-bum.png", "Emballage du feu Big Bum"),
    ("marco-polo", "vous-rencontrez-difficultes-commander-5.png", "Emballage du feu Marco Polo"),
    ("gruba-berta", "vous-rencontrez-difficultes-commander-3.png", "Emballage du feu Gruba Berta"),
    ("20x-shark-fr", "20x-shark-fr.jpg", "Boîte de 20 pétards Shark"),
    ("100-petards-pirat", "100-petards-pirat.jpg", "Boîte de 100 pétards Pirat"),
    ("20x-p15-petards", "20x-p15-petards.jpg", "Paquet de 20 pétards P15"),
    ("fontaine-2", "fontaine-2.png", "Fontaine 2"),
    ("assortiments-cards", "assortiments-cards.jpg", "Assortiment Cards"),
    ("assortiment-giant", "assortiment-giant.jpg", "Assortiment Giant"),
    ("petards-f3-sustos-x10", "petards-f3-sustos-x.jpg", "Boîte de 10 pétards Sustos"),
    ("clac-doigt", "clac-doigt.jpg", "Claque-doigts"),
    ("petard-barbarossa-pt1", "petard-barbarossa-pt1.jpg", "Boîte de pétards Barbarossa"),
    ("20-petards-ex3fr", "20-petards-ex3fr.jpg", "Boîte de 20 pétards EX3"),
    ("pack-6-fusees", "pack-6-fusees.png", "Pack de 6 fusées"),
    ("dragon-fontaine", "dragon-fontaine.png", "Fontaine Dragon"),
    ("color-balls", "color-balls-30-12.jpg", "Lot de 12 Color Balls"),
    ("3-fumigenes-france", "3-fumigenes-france.jpg", "Trois fumigènes bleu, blanc, rouge"),
    ("torche-mr-light-rouge", "torche-stade-main-mr-2.jpg", "Torche à main rouge Mr Light"),
    ("5-fumigenes-verts", "5-fumigenes-verts.jpg", "Lot de 5 fumigènes verts"),
    ("support-1-8-feux-jour", "support-1-8-feux.jpg", "Support pour 1 à 8 feux de jour"),
    ("fumigene-bbr", "fumigene-bleu-blanc-rouge.jpg", "Fumée bleu, blanc, rouge sur une pelouse"),
    ("valise-2-bases-4-declencheurs", "valise-2-bases-4.png", "Valise de 2 bases et 4 déclencheurs"),
    ("valise-4-bases-8-declencheurs", "valise-4-bases-8.png", "Valise de 4 bases et 8 déclencheurs"),
    ("2-declencheurs-2-jets-de-jour", "2-declencheurs-2-jets-3.png", "Deux déclencheurs et leurs jets de couleur"),
    ("valise-4-declencheurs-scene-jour", "valise-4-declencheurs-jets.png", "Valise de 4 déclencheurs avec télécommandes"),
    ("valise-8-declencheurs-scene-jour", "valise-8-declencheurs-jets.jpg", "Valise de 8 déclencheurs avec télécommande"),
    ("2-declencheurs-scene-jour", "2-declencheurs-jets-scene.png", "Deux déclencheurs et deux télécommandes"),
    ("2-declencheurs-2-jets-argents", "2-declencheurs-2-jets.png", "Deux déclencheurs et deux jets argentés"),
    ("feu-jour-orange", "feu-jour-orange.webp", "Feu de jour orange et sa fumée"),
    ("feu-jour-blanc", "feu-jour-blanc.webp", "Feu de jour blanc et sa fumée"),
    ("feu-jour-vert", "feu-jour-vert.webp", "Feu de jour vert et sa fumée"),
    ("feu-jour-jaune", "feu-jour-jaune.webp", "Feu de jour jaune et sa fumée"),
    ("feu-jour-rouge", "feu-jour-rouge.webp", "Feu de jour rouge et sa fumée"),
    ("feu-jour-violet", "feu-jour-violet.webp", "Feu de jour violet et sa fumée"),
    ("5-jets-scene-3m-60s", "5-jets-scene-3.jpg", "Boîte de 5 jets de scène"),
    ("5-jets-scene-interieur-3m", "5-jets-scene-interieur-2.jpg", "Boîte de 5 jets de scène d'intérieur"),
    ("5-jets-interieur-2m", "5-jets-interieur-2.jpg", "Boîte de 5 jets d'intérieur"),
    ("support-1-4-feux-jour", "support-1-4-feux.jpg", "Support pour 1 à 4 feux de jour"),
]

plan = [{"source": "recu/logo-clair.png", "nom": "logo", "role": "logo", "alt": "Artifest, Ardennes artifices"}]
plan += [produit(*p) for p in P]
plan += [
    {"source": "recu/fumigene-bleu-blanc-rouge.jpg", "nom": "rayon-fumigenes", "role": "carte-service", "ratio": "4:5", "alt": "Fumée bleu, blanc, rouge qui monte d'une pelouse", "beaute": 4},
    {"source": "recu/artifices-jour-mariage-jets.jpg", "nom": "rayon-jour", "role": "carte-service", "ratio": "4:5", "alt": "Jets de fumée verte, orange et jaune dans un ciel bleu", "beaute": 4},
    {"source": "recu/2-declencheurs-2-jets-4.png", "nom": "mariage-bal", "role": "galerie", "ratio": "4:3", "alt": "Ouverture de bal entre deux jets d'étincelles froides, dans une salle de réception", "beaute": 3},
    {"source": "recu/2-declencheurs-2-jets-2.jpg", "nom": "fete-fumee-verte", "role": "galerie", "ratio": "2:3", "alt": "Deux jets de fumée verte lors d'une fête en plein air", "beaute": 3},
    {"source": "recu/torche-stade-main-mr.jpg", "nom": "torche-rouge", "role": "vignette", "ratio": "16:9", "cadrage": [50, 50], "largeurs": [480, 640], "alt": "Torche à main rouge allumée dans la nuit", "beaute": 3},
]

NOTES = {'grok/accueil-ouverture': 5, 'grok/rayon-compacts': 5, 'grok/rayon-longue-duree': 5, 'grok/rayon-petards': 5, 'grok/accueil-mariage': 5, 'grok/accueil-commande': 4, 'grok/boutique-ouverture': 5, 'grok/mariage-ouverture': 5, 'grok/conseils-ouverture': 4, 'grok/contact-ouverture': 4, 'grok/page-404': 4}
grok = [
    {"source": "recu/grok/accueil-ouverture.jpg", "source_mobile": "recu/grok/accueil-ouverture-mobile.jpg", "nom": "grok/accueil-ouverture", "role": "ouverture", "mobile": True, "zone_texte": "gauche", "page": "Accueil", "emplacement": "Ouverture, derrière le titre (ordinateur) et version téléphone", "priorite": "Indispensable", "alt": "Bouquet de feu d'artifice doré au-dessus d'une vallée boisée, la nuit", "beaute": 4,
     "consigne_scene": "Wide night view over rolling wooded hills and a calm river valley, one huge golden willow firework bursting high in the upper right third of the sky with a second smaller orange peony beside it, glittering trails falling slowly, the lower third a dark silhouette of trees and a few tiny backlit spectators far away, the left half of the sky kept dark and calm for a headline, no packaging, no firework boxes"},
    {"source": "recu/grok/rayon-compacts.jpg", "nom": "grok/rayon-compacts", "role": "carte-service", "ratio": "4:5", "largeurs": [480, 800, 1280], "page": "Accueil", "emplacement": "Carte du rayon Feux d'artifice compacts", "priorite": "Indispensable", "alt": "Gerbes multicolores qui éclatent en même temps dans la nuit", "beaute": 4,
     "consigne_scene": "Vertical night sky filled with a tight volley of multicolour firework bursts, red, gold, blue and green crossettes and comets rising from just below the frame, dense and joyful, black sky around, no ground visible, no packaging, no firework boxes"},
    {"source": "recu/grok/rayon-longue-duree.jpg", "nom": "grok/rayon-longue-duree", "role": "carte-service", "ratio": "4:5", "largeurs": [480, 800, 1280], "page": "Accueil", "emplacement": "Carte du rayon Feux longue durée", "priorite": "Indispensable", "alt": "Grand final de feu d'artifice doré qui remplit le ciel", "beaute": 4,
     "consigne_scene": "Vertical night sky during a long grand finale: dozens of golden brocade crowns and white glittering willows layered at different heights, long falling trails reaching the lower part of the frame, faint smoke lit in gold, no ground visible, no packaging, no firework boxes"},
    {"source": "recu/grok/rayon-petards.jpg", "nom": "grok/rayon-petards", "role": "carte-service", "ratio": "4:5", "largeurs": [480, 800, 1280], "page": "Accueil", "emplacement": "Carte du rayon Pétards, fusées et fontaines", "priorite": "Indispensable", "alt": "Fontaine d'étincelles dorées sur un chemin de gravier, le soir", "beaute": 4,
     "consigne_scene": "Vertical close view at dusk of a single golden spark fountain burning on a gravel path, a tall cone of crackling sparks and small white flashes, warm glow on the gravel and a little drifting smoke, dark garden behind, the device itself hidden by the sparks, no packaging, no box, no label"},
    {"source": "recu/grok/accueil-mariage.jpg", "nom": "grok/accueil-mariage", "role": "section-fond", "ratio": "3:2", "zone_texte": "gauche", "page": "Accueil", "emplacement": "Section Spécial mariage, grande image", "priorite": "Indispensable", "alt": "Mariés de dos, en silhouette, sous un bouquet de feu d'artifice doré", "beaute": 4,
     "consigne_scene": "A newly married couple seen from behind as dark silhouettes standing on the lawn of a countryside garden at night, the bride's long white dress catching a little golden light, warm string lights in the trees, a large golden willow firework bursting above them on the right, wedding guests as small backlit silhouettes further back, the left part of the frame kept calmer for text, no packaging"},
    {"source": "recu/grok/accueil-commande.jpg", "nom": "grok/accueil-commande", "role": "section-fond", "ratio": "3:2", "zone_texte": "droite", "page": "Accueil", "emplacement": "Section Commander, fond", "priorite": "Conseillée", "alt": "Colis en carton sur une table en bois près d'une fenêtre, un feu d'artifice au loin", "beaute": 4,
     "consigne_scene": "A plain brown cardboard parcel tied with string resting on an old wooden farmhouse table near a window at blue hour, through the window a small golden firework glowing far away over dark fields, warm lamp light from the left, quiet and cosy, the right part of the frame kept calm, plain parcel with no writing"},
    {"source": "recu/grok/boutique-ouverture.jpg", "nom": "grok/boutique-ouverture", "role": "ouverture", "mobile": True, "zone_texte": "gauche", "page": "Boutique", "emplacement": "Ouverture de la boutique, bandeau", "priorite": "Indispensable", "alt": "Ciel de nuit parsemé de petits bouquets de toutes les couleurs", "beaute": 4,
     "consigne_scene": "Wide night sky scattered with many small firework bursts of every colour at different distances, red, gold, blue, green, violet and silver, like a sampler of effects, thin smoke trails, the bursts gathered mostly in the centre and right side, the left side of the sky kept darker for a title, no ground, no packaging"},
    {"source": "recu/grok/mariage-ouverture.jpg", "source_mobile": "recu/grok/mariage-ouverture-mobile.jpg", "nom": "grok/mariage-ouverture", "role": "ouverture", "mobile": True, "zone_texte": "bas", "page": "Mariage et événements", "emplacement": "Ouverture plein cadre (ordinateur) et version téléphone", "priorite": "Indispensable", "alt": "Mariés en silhouette sur une terrasse, face à un immense feu d'artifice doré", "beaute": 4,
     "consigne_scene": "Cinematic wide shot of a bride and groom seen from behind as silhouettes on a stone terrace of a countryside venue at night, holding hands, facing an immense golden and white firework bursting across the whole upper sky, warm reflections on the stone, a few guests as distant silhouettes, the bottom band of the frame kept dark and calm for a headline, no packaging"},
    {"source": "recu/grok/conseils-ouverture.jpg", "nom": "grok/conseils-ouverture", "role": "ouverture", "mobile": True, "zone_texte": "gauche", "page": "Conseils et sécurité", "emplacement": "Ouverture, image à droite du titre", "priorite": "Indispensable", "alt": "Une fontaine d'étincelles au milieu d'un pré, une famille regarde de loin", "beaute": 4,
     "consigne_scene": "Wide open meadow at dusk, a single golden spark fountain burning on the short grass far from the viewer, a family of four standing well back as small dark silhouettes at a safe distance, a bucket of water near them, deep blue sky with the first stars, calm and reassuring, the left third kept empty, no packaging, no box"},
    {"source": "recu/grok/contact-ouverture.jpg", "nom": "grok/contact-ouverture", "role": "ouverture", "mobile": True, "zone_texte": "gauche", "page": "Contact et retrait", "emplacement": "Ouverture, bandeau derrière le numéro", "priorite": "Indispensable", "alt": "Toits d'un village au bord d'une rivière, un feu d'artifice éclate au-dessus", "beaute": 4,
     "consigne_scene": "Small generic village of north-eastern France at night seen from across a quiet river, slate roofs and a few warm windows, a modest golden and red firework bursting above the rooftops on the right and reflecting in the water, deep midnight blue sky, the left half kept dark and calm for large text, no recognisable landmark, no signage"},
    {"source": "recu/grok/404.jpg", "nom": "grok/page-404", "role": "404", "zone_texte": "gauche", "page": "Page introuvable", "emplacement": "Image de la page 404", "priorite": "Conseillée", "alt": "Un cierge magique éteint posé sur le sol, un mince filet de fumée", "beaute": 4,
     "consigne_scene": "A single spent sparkler wire lying on dark wet paving stones at night, its tip still glowing faintly orange, a thin curl of grey smoke rising, gentle humour, shallow depth of field, the left part of the frame empty and dark, nothing else"},
]
for e in grok:
    e['beaute'] = NOTES.get(e['nom'], e.get('beaute'))
plan += grok
json.dump(plan, open('plan-images.json', 'w'), ensure_ascii=False, indent=1)
print(len(plan), 'entrées')
