import type { APIRoute } from 'astro';
import { links } from '../data/site';
import { getRelease } from '../data/release';

export const GET: APIRoute = async ({ site }) => {
  const { version, platforms } = await getRelease();
  const body = `# Morgane

> Application de bureau libre et open source qui transfère n'importe quel podcast RSS vers l'enceinte pour enfants Merlin (Bayard / Radio France), via une connexion Wi-Fi directe. Aucun compte, aucun cloud, aucune télémétrie.

Morgane s'adresse aux parents qui possèdent une enceinte Merlin et veulent y mettre autre chose que le catalogue officiel : n'importe quel flux RSS public (podcasts d'histoires, contes, documentaires jeunesse).

## Comment ça marche

L'enceinte Merlin n'accepte qu'une connexion à la fois. Le rituel se fait donc en deux temps :

1. Repérage — on rejoint une première fois le Wi-Fi de l'enceinte : Morgane l'enregistre et lit son contenu.
2. Préparation — de retour sur le Wi-Fi habituel, on s'abonne aux flux RSS et on coche les épisodes. Morgane télécharge et convertit les fichiers (FFmpeg est récupéré automatiquement au premier lancement s'il est absent du système).
3. Reconnexion — on rejoint de nouveau le Wi-Fi de la Merlin.
4. Synchronisation — Morgane calcule un diff entre ce qui est sur l'enceinte et ce qui est sélectionné, puis pousse uniquement le changeset.

## Caractéristiques

- Protocole réseau de l'enceinte reverse-engineeré ; communication directe entre l'ordinateur et la boîte (${'192.168.4.1:50000'}), sans serveur tiers.
- Abonnement à un nombre illimité de flux RSS publics ; épisodes, images et métadonnées récupérés automatiquement.
- Conversion audio automatique via FFmpeg, récupéré au premier lancement s'il est absent.
- Synchronisation par diff : rien n'est ré-envoyé inutilement.
- 100 % local : pas de compte, pas de télémétrie, pas de cloud. Écrit en Rust + Tauri, sous licence GPL-3.0, code ouvert et auditable.
- Gestion de plusieurs enceintes, avec un état « déjà synchronisé » par appareil.
- Les titres d'épisode au-delà de 66 octets sont tronqués par l'enceinte : l'app le signale avant transfert.

## Téléchargement

Version ${version}, publiée sur les Releases GitHub. Un seul fichier, rien d'autre à installer.

${platforms.map((p) => `- ${p.title} (${p.detail}) : ${p.href}`).join('\n')}

## Liens

- Site : ${new URL('/', site)}
- Code source et README : ${links.github}
- Releases : ${links.releases}
- Soutenir le projet : ${links.donate}

## Avertissements

- Morgane est en bêta : le contenu de l'enceinte peut être corrompu. Une resynchronisation avec l'application Merlin officielle remet l'enceinte d'aplomb.
- Projet indépendant, non affilié à Bayard, Radio France ou La Chouette Radio. « Merlin » est une marque de ses détenteurs, citée à titre de compatibilité.
- L'utilisateur doit détenir les droits du contenu qu'il transfère.
- Les binaires ne sont pas signés : sur macOS, clic droit sur l'app puis « Ouvrir » ; sur Windows, SmartScreen puis « Informations complémentaires » puis « Exécuter quand même ».
`;

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
