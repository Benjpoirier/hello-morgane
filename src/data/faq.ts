export const faq = [
  {
    q: 'Comment mettre ses propres podcasts sur une enceinte Merlin ?',
    a: "Installe Morgane sur ton ordinateur, abonne-toi au flux RSS du podcast et coche les épisodes voulus. Rejoins ensuite le Wi-Fi de l'enceinte : Morgane convertit les fichiers et les transfère directement sur la Merlin. Aucun passage par le catalogue officiel, aucun compte à créer.",
  },
  {
    q: "Peut-on ajouter n'importe quel flux RSS sur la Merlin ?",
    a: "Oui. Morgane accepte n'importe quel podcast public diffusé en RSS : histoires, contes, documentaires jeunesse. Les épisodes, les images et les métadonnées sont récupérés automatiquement. Tu dois en revanche détenir les droits du contenu que tu transfères.",
  },
  {
    q: 'Faut-il un compte ou un abonnement pour utiliser Morgane ?',
    a: "Non. Morgane est gratuite, libre (GPL-3.0) et fonctionne à 100 % en local : pas de compte, pas de cloud, pas de télémétrie. L'application parle directement à l'enceinte sur son réseau Wi-Fi, sans aucun serveur intermédiaire.",
  },
  {
    q: 'Morgane est-elle une application officielle Bayard ou Radio France ?',
    a: "Non. Morgane est un projet indépendant, non affilié à Bayard, Radio France ou La Chouette Radio, et non approuvé par eux. « Merlin » est une marque de ses détenteurs, citée uniquement à titre de compatibilité.",
  },
  {
    q: 'Est-ce que Morgane peut abîmer mon enceinte Merlin ?',
    a: "Morgane est en bêta et repose sur un protocole reconstitué : le contenu de l'enceinte peut être corrompu. Le matériel n'est pas modifié. En cas de souci, une resynchronisation avec l'application Merlin officielle remet l'enceinte d'aplomb — garde ta bibliothèque locale comme référence.",
  },
  {
    q: "Pourquoi macOS ou Windows bloque-t-il l'ouverture de Morgane ?",
    a: "Parce que les binaires ne sont pas signés. Sur macOS, fais un clic droit sur l'application puis choisis « Ouvrir ». Sur Windows, SmartScreen affiche un avertissement : clique sur « Informations complémentaires » puis « Exécuter quand même ».",
  },
  {
    q: 'Faut-il installer FFmpeg séparément ?',
    a: "Non. Si FFmpeg est absent de ton système, Morgane le télécharge toute seule au premier lancement. S'il est déjà présent dans ton PATH, elle le réutilise.",
  },
  {
    q: 'Sur quels systèmes Morgane fonctionne-t-elle ?',
    a: 'macOS (binaire universel Intel et Apple Silicon), Windows x64 et Linux x86_64. Les trois sont publiés sur la page des releases GitHub.',
  },
  {
    q: "Pourquoi certains titres d'épisodes sont-ils tronqués sur l'enceinte ?",
    a: "L'enceinte Merlin coupe les titres au-delà de 66 octets. Morgane te le signale avant le transfert avec un badge « 66+ » sur les épisodes concernés, pour que tu puisses raccourcir le titre toi-même.",
  },
] as const;
