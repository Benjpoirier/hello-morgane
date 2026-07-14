---
title: "Une alternative libre à l'application Merlin officielle"
description: "Ce que Morgane fait que l'application Merlin officielle ne fait pas, et ce qu'elle ne remplace pas. Comparaison honnête, sans compte ni abonnement."
heading: "Morgane, une alternative libre à l'application Merlin"
lede: "Morgane ne remplace pas l'application officielle : elle fait ce que celle-ci ne fait pas. Voici la frontière exacte, sans enrobage."
updated: 2026-07-14
order: 4
---

## Le manque auquel Morgane répond

L'application Merlin officielle te donne accès à un **catalogue fermé**. C'est parfait tant que ce que tu cherches y figure. Mais il n'y a pas de bouton « ajouter mon podcast » : si tu veux mettre sur l'enceinte un podcast d'histoires qui n'est pas au catalogue, un conte enregistré par un grand-parent, ou une série documentaire jeunesse trouvée ailleurs, tu es bloqué.

Morgane comble exactement ce trou : **n'importe quel flux RSS public**, transféré directement sur l'enceinte.

## Ce que fait Morgane

- Abonnement à **n'importe quel podcast public** diffusé en RSS, sans limite de nombre.
- Transfert **en Wi-Fi direct**, d'ordinateur à enceinte, sans serveur intermédiaire.
- **Aucun compte, aucun cloud, aucune télémétrie.** Rien ne sort de chez toi.
- **Conversion automatique** au bon format (FFmpeg, récupéré tout seul s'il te manque).
- **Synchronisation par diff** : seuls les changements sont transférés.
- **Plusieurs enceintes** gérées séparément, chacune avec son état.
- Code **ouvert et auditable**, sous licence GPL-3.0.

## Ce que Morgane ne fait pas

Autant être clair, ça t'évitera une déception :

- **Elle ne remplace pas l'application officielle.** Tu en auras toujours besoin — ne serait-ce que pour remettre l'enceinte d'aplomb si quelque chose se passe mal.
- **Elle ne donne pas accès au catalogue officiel.** Ce catalogue n'est pas du RSS public ; Morgane ne le lit pas.
- **Elle ne tourne pas sur téléphone.** C'est une application de bureau : macOS, Windows, Linux. Le transfert exige de rejoindre le Wi-Fi de l'enceinte depuis un ordinateur.
- **Elle ne modifie pas l'enceinte.** Pas de firmware alternatif, pas de « jailbreak ». Morgane parle à l'enceinte sur son protocole réseau, comme le fait l'application officielle.

## Le vrai risque, dit franchement

Morgane est en **bêta** et s'appuie sur un protocole **reconstitué par rétro-ingénierie**, pas sur une documentation fournie par le fabricant. Conséquence directe : **le contenu de l'enceinte peut être corrompu**.

Ce n'est pas irréversible — une resynchronisation avec l'application Merlin officielle remet l'enceinte en état. Mais tu dois accepter ce risque avant d'installer, et garder ta bibliothèque locale comme référence.

## Gratuit, et pourquoi

Morgane est libre (GPL-3.0) et gratuite. Il n'y a ni abonnement, ni version payante, ni collecte de données à revendre — l'application ne parle à aucun serveur. Elle est développée sur du temps libre ; si elle t'est utile, tu peux [soutenir le projet](https://liberapay.com/benjpoirier/donate).

## Projet indépendant

Morgane n'est **pas affiliée à Bayard, Radio France ou La Chouette Radio**, et n'est pas approuvée par eux. « Merlin » est une marque de ses détenteurs, citée ici uniquement à titre descriptif, pour indiquer la compatibilité.

Pour commencer, le plus simple est de suivre le guide : [mettre ses propres podcasts sur une enceinte Merlin](/podcasts-sur-enceinte-merlin/).
