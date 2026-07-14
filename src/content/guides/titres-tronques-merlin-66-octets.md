---
title: "Pourquoi les titres d'épisodes sont tronqués sur la Merlin"
description: "L'enceinte Merlin coupe les titres au-delà de 66 octets — et les accents comptent double. Explication, et comment Morgane te prévient avant le transfert."
heading: "Titres tronqués sur la Merlin : la limite des 66 octets"
lede: "Ton épisode s'appelle « Jeanne d'Arc, la bergère devenue cheffe de guerre » et l'enceinte n'en affiche que la moitié. Ce n'est pas un bug de ton côté."
updated: 2026-07-14
order: 3
---

## La réponse courte

L'enceinte Merlin tronque les titres d'épisode **au-delà de 66 octets**. Ce n'est pas 66 caractères : en français, les accents en consomment deux. Un titre de 60 lettres avec six accents dépasse déjà la limite.

Morgane affiche un badge **`66+`** sur les épisodes concernés, avant le transfert, pour que tu puisses raccourcir le titre toi-même.

## Octets et caractères : pourquoi ce n'est pas pareil

Le texte est stocké en **UTF-8**. Dans cet encodage, une lettre non accentuée (`a`, `b`, `c`) occupe **1 octet**. Mais une lettre accentuée — `é`, `è`, `à`, `ê`, `ç` — en occupe **2**. Les caractères typographiques courants dans les titres de podcasts sont encore plus gourmands : l'apostrophe courbe `’`, le tiret cadratin `—` et les points de suspension `…` pèsent **3 octets chacun**.

Concrètement :

| Titre | Caractères | Octets |
|---|---|---|
| `Marco Polo sur la route de la soie` | 34 | 34 |
| `Cléopâtre, la dernière reine d'Égypte` | 37 | 41 |
| `Toutânkhamon, le pharaon oublié — épisode 2` | 43 | 50 |

Un titre français « pèse » donc systématiquement plus lourd que sa longueur apparente. C'est pour ça qu'un titre qui te semble court se fait quand même couper.

## Pourquoi cette limite existe

Elle vient de l'enceinte, pas de Morgane. Le format dans lequel la Merlin stocke sa liste de lecture réserve un espace fixe au titre de chaque piste. Au-delà, le texte est simplement coupé. Aucune application, officielle ou non, ne peut contourner cette limite : elle est dans l'appareil.

## Ce que fait Morgane

Morgane calcule la taille réelle du titre **en octets**, pas en caractères, et te prévient avant le transfert avec un badge `66+` sur la ligne de l'épisode. Tu vois donc immédiatement lesquels seront coupés, et tu peux corriger le titre avant d'envoyer.

## Comment raccourcir efficacement

Vu ce qui précède, tout ne se vaut pas :

- **Supprime les préfixes de série.** « Les Odyssées — Saison 3 — Épisode 12 : Ulysse… » : les 30 premiers octets ne t'apprennent rien, l'épisode est déjà rangé sous son podcast.
- **Remplace les caractères chers.** Une apostrophe droite `'` coûte 1 octet, la courbe `’` en coûte 3. Un tiret simple `-` coûte 1 octet, le cadratin `—` en coûte 3. Sur un titre serré, ça peut suffire.
- **Coupe la fin, pas le début.** L'enceinte tronque par la fin : ce que tu mets en premier est ce qui restera lisible.

Garde en tête que le titre affiché sur l'enceinte est ce que ton enfant verra. Un titre court et clair vaut mieux qu'un titre exhaustif coupé au milieu d'un mot.

## Et le reste des métadonnées ?

Seuls les titres sont concernés par cette limite. Les fichiers audio, eux, sont convertis au format attendu par l'enceinte et transférés intégralement — voir [comment transférer des podcasts sur la Merlin](/podcasts-sur-enceinte-merlin/).
