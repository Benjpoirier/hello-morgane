---
title: "Ajouter un flux RSS à l'enceinte Merlin"
description: "Trouver l'URL du flux RSS d'un podcast et l'ajouter à l'enceinte Merlin avec Morgane. Fonctionne avec n'importe quel podcast public."
heading: "Ajouter un flux RSS à l'enceinte Merlin"
lede: "Un podcast public, c'est une URL. Voici comment la trouver, et ce que Morgane en fait une fois qu'elle est dans l'application."
updated: 2026-07-14
order: 2
---

## Ce qu'est un flux RSS, en une phrase

Un flux RSS est l'adresse technique d'un podcast : une URL qui liste ses épisodes, leurs titres, leurs dates, leurs images et les fichiers audio à télécharger. **Tout podcast public en possède un** — c'est ce qui permet à Spotify, Apple Podcasts ou Deezer de le diffuser sans accord particulier.

Morgane s'abonne directement à cette URL. C'est ce qui lui permet d'accepter **n'importe quel podcast public**, et pas seulement un catalogue choisi à l'avance.

## Trouver l'URL du flux

Selon l'endroit où tu écoutes le podcast :

- **Le site du podcast** — la plupart affichent une icône RSS, ou un lien « S'abonner » / « Flux RSS ». C'est la source la plus fiable.
- **Un annuaire de podcasts** — des sites comme Podcast Index ou ListenNotes affichent l'URL du flux sur la fiche du podcast.
- **Apple Podcasts** — l'application ne montre pas l'URL directement, mais des services en ligne la retrouvent à partir du lien de la fiche.
- **Spotify** — attention : les podcasts *exclusifs* à Spotify n'ont pas de flux RSS public. Ceux-là ne sont pas récupérables, par Morgane ni par quoi que ce soit d'autre.

Une URL de flux ressemble à `https://exemple.fr/podcast/rss` ou `https://feeds.exemple.com/12345.xml`. Elle affiche du XML brut dans le navigateur — c'est normal, c'est bon signe.

## L'ajouter dans Morgane

Dans la vue **Podcasts**, le bouton `+` ouvre l'ajout d'une source. Colle l'URL du flux. Morgane récupère alors automatiquement :

- la liste des épisodes, avec leurs titres et leurs dates ;
- les images (celle du podcast, et celles des épisodes quand elles existent) ;
- les métadonnées nécessaires au transfert.

Tu peux t'abonner à autant de flux que tu veux, sans limite.

## Ce que Morgane fait ensuite

Cocher un épisode ne le transfère pas immédiatement. Morgane le **télécharge** puis le **convertit** au format attendu par l'enceinte (via FFmpeg, récupéré automatiquement s'il te manque). Le transfert lui-même n'a lieu que lorsque tu es connecté au Wi-Fi de la Merlin — voir [le guide du transfert](/podcasts-sur-enceinte-merlin/).

Un détail qui compte : à chaque synchronisation, Morgane calcule un **diff** entre ce qui est sur l'enceinte et ce que tu as sélectionné. Un épisode déjà transféré n'est jamais renvoyé. Décocher un épisode, en revanche, demande sa suppression de l'enceinte.

## Une limite à connaître

L'enceinte tronque les titres d'épisode au-delà de **66 octets** — et les accents comptent double. Les titres à rallonge, fréquents dans les podcasts d'histoires, sont donc souvent coupés. Morgane te le signale avant le transfert : voir [pourquoi les titres sont tronqués](/titres-tronques-merlin-66-octets/).
