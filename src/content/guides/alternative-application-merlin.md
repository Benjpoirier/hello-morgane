---
title: "Une alternative libre à l'application Merlin officielle"
description: "Ce que Morgane fait que l'application Merlin officielle ne fait pas, et ce qu'elle ne remplace pas. Comparaison honnête, sans compte ni abonnement."
heading: "Morgane : alternative ou complément à l'application Merlin ?"
lede: "Complément, pas remplaçant. Morgane ne sait pas faire ce que l'app officielle fait, et réciproquement. Voici la frontière exacte, sans enrobage."
updated: 2026-07-14
order: 4
---

## Ce que fait déjà l'application officielle

Commençons par rétablir un fait, parce qu'on lit souvent le contraire : **l'application Merlin officielle accepte du contenu personnel.** Tu peux enregistrer des histoires au micro, ou importer des fichiers audio depuis ton téléphone.

Mais elle le fait dans un cadre étroit, et c'est là que se joue la différence :

| | Application officielle | Morgane |
|---|---|---|
| Contenu perso | **10 histoires maximum** | sans limite de nombre |
| Durée par histoire | **10 minutes maximum** | sans limite |
| Source | micro, ou fichiers du téléphone | n'importe quel **flux RSS public** |
| Ajout | une par une, à la main | par lot, en cochant des épisodes |
| Appareil | téléphone | ordinateur (macOS, Windows, Linux) |

Dix histoires de dix minutes, importées une par une depuis un téléphone, ça couvre le conte enregistré par une grand-mère. Ça ne couvre pas un abonnement à un podcast d'histoires qui publie un épisode de trente minutes chaque semaine.

Morgane répond à ce second besoin : **n'importe quel flux RSS public**, en lot, transféré directement sur l'enceinte.

## Ce que fait Morgane

- Abonnement à autant de **flux RSS publics** que tu veux, sans limite de nombre ni de durée.
- Transfert **en Wi-Fi direct**, d'ordinateur à enceinte, sans serveur intermédiaire.
- **Aucun compte, aucune télémétrie, aucun serveur Morgane.** Le transfert vers l'enceinte est direct. L'app va sur internet uniquement chercher les flux RSS et leurs fichiers, faire la recherche de podcasts (API iTunes d'Apple) et récupérer FFmpeg au premier lancement.
- **Conversion automatique** au bon format (FFmpeg, réutilisé depuis ton système ou téléchargé depuis GitHub s'il te manque).
- **Synchronisation par diff** : seuls les changements sont transférés.
- **Plusieurs enceintes** gérées séparément, chacune avec son état.
- Code **ouvert et auditable**, sous licence GPL-3.0 ou ultérieure.

## Ce que Morgane ne fait pas

Autant être clair, ça t'évitera une déception :

- **Elle ne remplace pas l'application officielle.** Tu en auras toujours besoin — ne serait-ce que pour remettre l'enceinte d'aplomb si quelque chose se passe mal.
- **Elle ne donne pas accès au catalogue officiel.** Ce catalogue n'est pas du RSS public ; Morgane ne le lit pas.
- **Elle ne remplace pas l'enregistrement au micro.** Pour capter la voix d'un grand-parent, l'application officielle reste l'outil le plus simple.
- **Elle ne tourne pas sur téléphone.** C'est une application de bureau : macOS, Windows, Linux. Le transfert exige de rejoindre le Wi-Fi de l'enceinte depuis un ordinateur.
- **Elle ne modifie pas l'enceinte.** Pas de firmware alternatif, pas de « jailbreak ». Morgane parle à l'enceinte sur son protocole réseau, comme le fait l'application officielle.

## Le vrai risque, dit franchement

Morgane est en **bêta** et s'appuie sur un protocole **reconstitué par rétro-ingénierie**, pas sur une documentation fournie par le fabricant. Conséquence directe : **le contenu de l'enceinte peut être corrompu**.

Si le contenu de l'enceinte est abîmé, la seule procédure documentée par Merlin est la **réinitialisation** depuis l'application officielle. Elle n'est pas anodine : elle **efface tous les titres que tu as transférés** et restaure les contenus préchargés d'origine. Tu devras ensuite tout re-transférer.

Et il faut le dire clairement : les conditions de vente de La Chouette Radio **excluent de la garantie** les enceintes sur lesquelles un logiciel a été ajouté ou modifié sans leur accord. Installer Morgane est un choix éclairé, pas un geste anodin. Garde ta bibliothèque locale comme référence.

## Gratuit, et pourquoi

Morgane est libre (GPL-3.0 ou ultérieure) et gratuite. Il n'y a ni abonnement, ni version payante, ni collecte de données — il n'existe aucun serveur Morgane vers lequel envoyer quoi que ce soit. Elle est développée sur du temps libre ; si elle t'est utile, tu peux [soutenir le projet](https://liberapay.com/benjpoirier/donate).

## Projet indépendant

Morgane n'est **ni affiliée, ni approuvée, ni soutenue** par Bayard, Radio France ou La Chouette Radio. « Merlin » est une marque de ses détenteurs, citée ici uniquement à titre descriptif, pour indiquer la compatibilité.

Pour commencer, le plus simple est de suivre le guide : [mettre ses propres podcasts sur une enceinte Merlin](/podcasts-sur-enceinte-merlin/).
