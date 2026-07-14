---
title: 'Mettre ses propres podcasts sur une enceinte Merlin'
description: "Guide complet pour transférer n'importe quel podcast RSS sur l'enceinte pour enfants Merlin. Sans limite de nombre ni de durée, contrairement à l'app officielle."
heading: 'Comment mettre ses propres podcasts sur une enceinte Merlin'
lede: "L'application officielle plafonne à 10 histoires perso de 10 minutes, et ne gère aucun flux RSS. Voici comment transférer n'importe quel podcast RSS sur ta Merlin, sans limite."
updated: 2026-07-14
order: 1
---

## La réponse courte

Installe **Morgane** sur ton ordinateur, abonne-toi au flux RSS du podcast que tu veux, coche les épisodes, puis rejoins le Wi-Fi de l'enceinte pour les transférer. C'est gratuit, ça ne demande aucun compte, et l'enceinte n'est pas modifiée physiquement.

À noter : l'application officielle permet déjà d'ajouter du contenu perso, mais seulement **10 histoires de 10 minutes**, sans flux RSS. Morgane lève ces deux limites.

Le reste de cette page détaille chaque étape, et ce à quoi il faut faire attention.

## Ce que l'application officielle permet déjà

Autant être précis, parce que la nuance compte : **l'application Merlin officielle accepte du contenu personnel.** Tu peux enregistrer des histoires au micro ou importer des fichiers depuis ton téléphone — dans la limite de **10 histoires de 10 minutes chacune**.

C'est très bien pour un conte lu par un grand-parent. C'est insuffisant dès qu'on parle de podcasts : un seul épisode dépasse souvent les dix minutes, et un abonnement en produit un par semaine. Il n'existe pas non plus de gestion de **flux RSS** dans l'application officielle.

C'est ce vide que Morgane comble — pas un verrou à forcer, un usage qui n'est simplement pas couvert.

L'enceinte communique avec l'application officielle via son **propre réseau Wi-Fi**, sur un protocole réseau qui lui est spécifique. Morgane parle ce protocole — reconstitué par rétro-ingénierie — et s'adresse directement à l'enceinte, à l'adresse `192.168.4.1:50000`. Aucun serveur intermédiaire n'intervient : tout se passe entre ton ordinateur et la boîte.

## Ce qu'il te faut

- Une enceinte Merlin.
- Un ordinateur sous **macOS**, **Windows** ou **Linux**.
- L'URL du flux RSS du podcast qui t'intéresse (voir le guide sur [l'ajout d'un flux RSS](/ajouter-un-flux-rss-sur-la-merlin/)).

Tu n'as besoin ni de compte, ni d'abonnement. Morgane utilise ta connexion internet pour télécharger les flux et leurs fichiers, mais n'envoie rien nulle part : il n'existe aucun serveur Morgane.

## Le rituel en deux temps

Le point à comprendre avant tout : **le Wi-Fi de la Merlin ne donne pas accès à internet**. Et ton ordinateur ne peut être connecté qu'à un seul réseau à la fois. Tu ne peux donc pas télécharger les épisodes (ton Wi-Fi) et les transférer (celui de l'enceinte) en même temps. D'où l'aller-retour.

À cela s'ajoute une contrainte de l'enceinte elle-même : elle n'accepte **qu'un seul client à la fois**. Morgane sérialise donc ses opérations — jamais deux transferts en parallèle.

### 1. Repérer l'enceinte

Le Wi-Fi de la Merlin n'est pas allumé en permanence : il faut **maintenir le bouton de transfert enfoncé pendant 5 secondes** pour l'activer. Un réseau apparaît alors, dont le nom commence par `MERLIN` suivi de six caractères. Attention, il se **coupe tout seul au bout d'une minute** s'il ne se passe rien — si tu traînes, recommence l'appui.

Rejoins ce réseau. Morgane enregistre l'enceinte et lit ce qu'elle contient déjà. Tu peux nommer l'appareil — utile si tu en as plusieurs à la maison, l'application garde l'état « déjà synchronisé » séparément pour chacun.

### 2. Choisir les épisodes

Reviens sur ton Wi-Fi habituel. Abonne-toi aux flux RSS, coche les épisodes que tu veux envoyer. Morgane les télécharge et les convertit au format attendu par l'enceinte.

La conversion s'appuie sur **FFmpeg**. S'il n'est pas déjà présent sur ton système, Morgane le récupère toute seule au premier lancement — tu n'as rien à installer manuellement.

### 3. Se reconnecter à l'enceinte

Rejoins de nouveau le Wi-Fi de la Merlin. Morgane la retrouve et affiche le ping en direct.

### 4. Synchroniser

Morgane calcule un **diff** : elle compare ce qui est déjà sur l'enceinte avec ce que tu as sélectionné, et ne transfère que la différence. Rien n'est ré-envoyé inutilement. La progression s'affiche épisode par épisode.

## Ce à quoi il faut faire attention

**C'est une bêta.** Morgane repose sur un protocole reconstitué, pas sur une documentation officielle. Le contenu de l'enceinte **peut être corrompu**. Si le contenu de l'enceinte est abîmé, la seule procédure documentée par Merlin est la **réinitialisation** depuis l'application officielle. Elle n'est pas anodine : elle **efface tous les titres que tu as transférés** et restaure les contenus préchargés d'origine. Tu devras ensuite tout re-transférer. Garde ta bibliothèque locale comme référence.

**La garantie.** Les conditions de vente de La Chouette Radio excluent de la garantie les enceintes sur lesquelles un logiciel a été ajouté ou modifié sans leur accord. Utiliser Morgane est un choix qui t'appartient, en connaissance de cause.

**Les titres longs sont coupés.** Le format de la Merlin ne réserve que 66 octets par titre. Morgane te le signale avant le transfert — voir [le guide sur les titres tronqués](/titres-tronques-merlin-66-octets/).

**Les binaires ne sont pas signés.** Au premier lancement, macOS et Windows afficheront un avertissement. Sur macOS, fais un clic droit sur l'application puis « Ouvrir ». Sur Windows, clique sur « Informations complémentaires » puis « Exécuter quand même ».

**Les droits du contenu.** Transfère uniquement du contenu dont tu détiens les droits.

## Est-ce légal ?

Morgane ne contourne aucune protection et ne modifie pas le matériel : elle parle à l'enceinte sur son propre réseau, comme le fait l'application officielle. C'est un projet **indépendant** : ni affilié, ni approuvé, ni soutenu par Bayard, Radio France ou La Chouette Radio. « Merlin » est une marque de ses détenteurs, citée ici uniquement à titre de compatibilité.
