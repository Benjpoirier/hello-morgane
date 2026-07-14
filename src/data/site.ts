export const INDEXNOW_KEY = 'e61b8b5577bdc95ede141cb8b4b725a9';

export const links = {
  github: 'https://github.com/Benjpoirier/Morgane',
  releases: 'https://github.com/Benjpoirier/Morgane/releases/latest',
  donate: 'https://liberapay.com/benjpoirier/donate',
} as const;

export const features = [
  {
    span: 3,
    title: 'Connexion Wi-Fi directe',
    body: "Morgane parle à l'enceinte sur son protocole réseau reverse-engineeré. Le transfert est direct : aucun serveur ne s'interpose entre ton ordinateur et la boîte.",
    chip: '192.168.4.1:50000',
    icon: 'wifi',
  },
  {
    span: 3,
    title: 'Flux RSS illimités',
    body: "Abonne-toi à autant de flux RSS publics que tu veux. Épisodes, images et métadonnées récupérés automatiquement.",
    chip: null,
    icon: 'rss',
  },
  {
    span: 2,
    title: 'Conversion automatique',
    body: "FFmpeg est téléchargé depuis GitHub au premier lancement s'il manque, empreinte vérifiée. Transcodage au bon format, progression en direct.",
    chip: null,
    icon: 'download',
  },
  {
    span: 2,
    title: 'Synchro par diff',
    body: "Un diff calcule quoi ajouter ou retirer. Rien n'est ré-envoyé inutilement.",
    chip: null,
    icon: 'refresh',
  },
  {
    span: 2,
    title: 'Aucun serveur Morgane',
    body: 'Pas de compte, pas de télémétrie, aucun backend. Rust + Tauri, GPL-3.0+, code ouvert et auditable.',
    chip: null,
    icon: 'lock',
  },
  {
    span: 6,
    title: 'Plusieurs enceintes, chacune son coucher',
    body: "Enregistre toutes tes Merlin, nomme-les (Morgane, Arthur…), et Morgane garde l'état « déjà synchronisé » par appareil.",
    chip: null,
    icon: 'devices',
  },
] as const;

export const steps = [
  {
    n: '01',
    net: 'wifi · merlin',
    moon: 9,
    title: 'Repère ta Merlin',
    body: "Une première fois, rejoins le Wi-Fi de l'enceinte : Morgane l'enregistre et lit ce qui est dessus.",
  },
  {
    n: '02',
    net: 'wifi · maison',
    moon: 20,
    title: 'Choisis & convertis',
    body: 'De retour sur ton réseau, abonne-toi aux flux RSS, coche les épisodes — Morgane prépare les fichiers.',
  },
  {
    n: '03',
    net: 'wifi · merlin',
    moon: 38,
    title: 'Reconnecte-toi',
    body: "Rejoins de nouveau le Wi-Fi de la Merlin. Morgane retrouve l'enceinte, ping en direct.",
  },
  {
    n: '04',
    net: 'wifi · merlin',
    moon: 60,
    title: 'Synchronise',
    body: "Le changeset est poussé vers l'enceinte, avec progression épisode par épisode.",
  },
] as const;
