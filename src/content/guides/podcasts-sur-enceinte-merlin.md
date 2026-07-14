---
title: 'Mettre ses propres podcasts sur une enceinte Merlin'
description: "Guide complet pour transférer n'importe quel podcast RSS sur l'enceinte pour enfants Merlin, sans passer par le catalogue officiel et sans abonnement."
heading: 'Comment mettre ses propres podcasts sur une enceinte Merlin'
lede: "L'enceinte Merlin ne lit par défaut que le catalogue officiel. Voici comment y transférer n'importe quel podcast RSS, gratuitement, depuis ton ordinateur."
updated: 2026-07-14
order: 1
---

## La réponse courte

Installe **Morgane** sur ton ordinateur, abonne-toi au flux RSS du podcast que tu veux, coche les épisodes, puis rejoins le Wi-Fi de l'enceinte pour les transférer. C'est gratuit, ça ne demande aucun compte, et l'enceinte n'est pas modifiée physiquement.

Le reste de cette page détaille chaque étape, et ce à quoi il faut faire attention.

## Pourquoi ce n'est pas prévu par l'enceinte

La Merlin est conçue pour être remplie depuis l'application officielle, à partir d'un catalogue fermé. Il n'existe pas de bouton « ajouter mon podcast » : l'enceinte n'expose pas d'interface publique pour ça.

Elle communique en revanche avec l'application officielle via son **propre réseau Wi-Fi**, sur un protocole réseau qui lui est spécifique. Morgane parle ce protocole — reconstitué par rétro-ingénierie — et s'adresse directement à l'enceinte, à l'adresse `192.168.4.1:50000`. Aucun serveur intermédiaire n'intervient : tout se passe entre ton ordinateur et la boîte.

## Ce qu'il te faut

- Une enceinte Merlin.
- Un ordinateur sous **macOS**, **Windows** ou **Linux**.
- L'URL du flux RSS du podcast qui t'intéresse (voir le guide sur [l'ajout d'un flux RSS](/ajouter-un-flux-rss-sur-la-merlin/)).

Tu n'as besoin ni de compte, ni d'abonnement, ni de connexion à un cloud.

## Le rituel en deux temps

Le point à comprendre avant tout : **l'enceinte n'accepte qu'une seule connexion Wi-Fi à la fois**. Tu ne peux donc pas être sur ton Wi-Fi habituel (pour télécharger les épisodes) et sur celui de l'enceinte (pour les transférer) en même temps. D'où un aller-retour.

### 1. Repérer l'enceinte

Rejoins une première fois le Wi-Fi de la Merlin. Morgane enregistre l'enceinte et lit ce qu'elle contient déjà. Tu peux nommer l'appareil — utile si tu en as plusieurs à la maison, l'application garde l'état « déjà synchronisé » séparément pour chacun.

### 2. Choisir les épisodes

Reviens sur ton Wi-Fi habituel. Abonne-toi aux flux RSS, coche les épisodes que tu veux envoyer. Morgane les télécharge et les convertit au format attendu par l'enceinte.

La conversion s'appuie sur **FFmpeg**. S'il n'est pas déjà présent sur ton système, Morgane le récupère toute seule au premier lancement — tu n'as rien à installer manuellement.

### 3. Se reconnecter à l'enceinte

Rejoins de nouveau le Wi-Fi de la Merlin. Morgane la retrouve et affiche le ping en direct.

### 4. Synchroniser

Morgane calcule un **diff** : elle compare ce qui est déjà sur l'enceinte avec ce que tu as sélectionné, et ne transfère que la différence. Rien n'est ré-envoyé inutilement. La progression s'affiche épisode par épisode.

## Ce à quoi il faut faire attention

**C'est une bêta.** Morgane repose sur un protocole reconstitué, pas sur une documentation officielle. Le contenu de l'enceinte **peut être corrompu**. Ce n'est pas une perte définitive : une resynchronisation avec l'application Merlin officielle remet l'enceinte d'aplomb. Garde ta bibliothèque locale comme référence.

**Les titres longs sont coupés.** L'enceinte tronque les titres au-delà de 66 octets. Morgane te le signale avant le transfert — voir [le guide sur les titres tronqués](/titres-tronques-merlin-66-octets/).

**Les binaires ne sont pas signés.** Au premier lancement, macOS et Windows afficheront un avertissement. Sur macOS, fais un clic droit sur l'application puis « Ouvrir ». Sur Windows, clique sur « Informations complémentaires » puis « Exécuter quand même ».

**Les droits du contenu.** Transfère uniquement du contenu dont tu détiens les droits.

## Est-ce légal ?

Morgane ne contourne aucune protection et ne modifie pas le matériel : elle parle à l'enceinte sur son propre réseau, comme le fait l'application officielle. C'est un projet **indépendant**, non affilié à Bayard, Radio France ou La Chouette Radio, et non approuvé par eux. « Merlin » est une marque de ses détenteurs, citée ici uniquement à titre de compatibilité.
