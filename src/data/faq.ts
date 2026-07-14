export const faq = [
  {
    q: 'Comment mettre ses propres podcasts sur une enceinte Merlin ?',
    a: "Installe Morgane sur ton ordinateur, abonne-toi au flux RSS du podcast et coche les épisodes voulus. Rejoins ensuite le Wi-Fi de l'enceinte : Morgane convertit les fichiers et les transfère directement sur la Merlin. Sans limite de nombre ni de durée — là où l'application officielle plafonne à 10 histoires personnelles de 10 minutes.",
  },
  {
    q: "Peut-on ajouter n'importe quel flux RSS sur la Merlin ?",
    a: "Oui, dès lors que le podcast est diffusé en RSS et que ses épisodes portent un fichier audio joint — ce qui est le cas de l'immense majorité des podcasts publics. Morgane lit le RSS 2.0 ; les flux au format Atom ne sont pas pris en charge. Épisodes, images et métadonnées sont récupérés automatiquement. Tu dois détenir les droits du contenu que tu transfères.",
  },
  {
    q: 'Faut-il un compte ou un abonnement pour utiliser Morgane ?',
    a: "Non. Morgane est gratuite, libre (GPL-3.0 ou ultérieure), sans compte et sans télémétrie : il n'existe aucun serveur Morgane. Le transfert vers l'enceinte est direct, sans intermédiaire. L'application se connecte évidemment à internet pour ce qu'elle doit y chercher : les flux RSS et leurs fichiers, la recherche de podcasts (via l'API iTunes d'Apple) et FFmpeg au premier lancement.",
  },
  {
    q: 'Morgane est-elle une application officielle Bayard ou Radio France ?',
    a: "Non. Morgane est un projet indépendant : ni affiliée, ni approuvée, ni soutenue par Bayard, Radio France ou La Chouette Radio. « Merlin » est une marque de ses détenteurs, citée uniquement à titre de compatibilité.",
  },
  {
    q: 'Est-ce que Morgane peut abîmer mon enceinte Merlin ?',
    a: "Morgane est en bêta et repose sur un protocole reconstitué : le contenu de l'enceinte peut être corrompu. Le matériel, lui, n'est pas modifié. Si ça arrive, la seule procédure documentée par Merlin est la réinitialisation depuis l'application officielle — elle efface tous les titres que tu as transférés et restaure les contenus préchargés d'origine. Garde donc ta bibliothèque locale comme référence. À savoir aussi : les conditions de vente de La Chouette Radio excluent de la garantie les enceintes sur lesquelles un logiciel a été ajouté sans leur accord.",
  },
  {
    q: "Pourquoi macOS ou Windows bloque-t-il l'ouverture de Morgane ?",
    a: "Parce que les binaires ne sont pas signés. Sur macOS, fais un clic droit sur l'application puis choisis « Ouvrir ». Sur Windows, SmartScreen affiche un avertissement : clique sur « Informations complémentaires » puis « Exécuter quand même ».",
  },
  {
    q: 'Faut-il installer FFmpeg séparément ?',
    a: "Non. S'il est déjà présent dans ton PATH, Morgane le réutilise. Sinon elle le télécharge au premier lancement depuis GitHub (le projet ffmpeg-static) et en vérifie l'empreinte SHA-256 avant de s'en servir.",
  },
  {
    q: 'Sur quels systèmes Morgane fonctionne-t-elle ?',
    a: 'macOS (binaire universel Intel et Apple Silicon), Windows x64 et Linux x86_64. Les trois sont publiés sur la page des releases GitHub.',
  },
  {
    q: "Pourquoi certains titres d'épisodes sont-ils coupés sur l'enceinte ?",
    a: "Le format de liste de lecture de la Merlin ne réserve que 66 octets par titre. Au-delà, le titre est coupé au moment de l'encodage. Morgane te le signale avant le transfert avec un badge « 66+ » sur les épisodes concernés, pour que tu puisses raccourcir le titre toi-même.",
  },
] as const;
