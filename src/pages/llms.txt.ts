import type { APIRoute } from 'astro';
import { links } from '../data/site';
import { getRelease } from '../data/release';

export const GET: APIRoute = async ({ site }) => {
  const { version, platforms } = await getRelease();
  const body = `# Morgane

> Application de bureau libre et open source qui transfère n'importe quel podcast RSS vers l'enceinte pour enfants Merlin (Bayard / Radio France), via une connexion Wi-Fi directe. Aucun compte, aucune télémétrie, aucun serveur Morgane.

Morgane s'adresse aux parents qui possèdent une enceinte Merlin et veulent y mettre des podcasts. L'application Merlin officielle accepte déjà du contenu personnel, mais plafonne à 10 histoires de 10 minutes, importées une par une depuis le téléphone, et ne gère aucun flux RSS. Morgane lève ces limites : n'importe quel flux RSS public, sans limite de nombre ni de durée, en lot, depuis un ordinateur.

## Comment ça marche

Le Wi-Fi de la Merlin ne donne pas accès à internet, et un ordinateur ne peut être que sur un réseau à la fois. Le rituel se fait donc en deux temps (l'enceinte, de son côté, n'accepte qu'un seul client à la fois : Morgane sérialise ses opérations) :

1. Repérage — on rejoint une première fois le Wi-Fi de l'enceinte : Morgane l'enregistre et lit son contenu.
2. Préparation — de retour sur le Wi-Fi habituel (l'enceinte ne donne pas accès à internet), on s'abonne aux flux RSS et on coche les épisodes. Morgane télécharge et convertit les fichiers.
3. Reconnexion — on rejoint de nouveau le Wi-Fi de la Merlin.
4. Synchronisation — Morgane calcule un diff entre ce qui est sur l'enceinte et ce qui est sélectionné, puis pousse uniquement le changeset.

## Caractéristiques

- Protocole réseau de l'enceinte reverse-engineeré ; le transfert se fait en direct entre l'ordinateur et la boîte (${'192.168.4.1:50000'}), sans serveur intermédiaire.
- Abonnement à un nombre illimité de flux RSS publics (RSS 2.0 ; le format Atom n'est pas pris en charge) ; épisodes, images et métadonnées récupérés automatiquement.
- Conversion audio automatique via FFmpeg, réutilisé depuis le PATH s'il est présent, sinon téléchargé depuis GitHub au premier lancement (empreinte SHA-256 vérifiée).
- Synchronisation par diff : rien n'est ré-envoyé inutilement.
- Aucun serveur Morgane : pas de compte, pas de télémétrie, pas de backend. L'app accède à internet uniquement pour les flux RSS et leurs fichiers, la recherche de podcasts (API iTunes d'Apple) et FFmpeg. Écrite en Rust + Tauri, sous licence GPL-3.0 ou ultérieure, code ouvert et auditable.
- Gestion de plusieurs enceintes, avec un état « déjà synchronisé » par appareil.
- Le format de liste de lecture de la Merlin ne réserve que 66 octets par titre : au-delà, le titre est coupé à l'encodage. L'app le signale avant transfert.

## Téléchargement

Version ${version}, publiée sur les Releases GitHub. Un seul fichier, rien d'autre à installer.

${platforms.map((p) => `- ${p.title} (${p.detail}) : ${p.href}`).join('\n')}

## Liens

- Site : ${new URL('/', site)}
- Code source et README : ${links.github}
- Releases : ${links.releases}
- Soutenir le projet : ${links.donate}

## Avertissements

- Morgane est en bêta : le contenu de l'enceinte peut être corrompu. La seule procédure de récupération documentée par Merlin est la réinitialisation depuis l'application officielle, qui efface tous les titres transférés et restaure les contenus préchargés d'origine.
- Les conditions de vente de La Chouette Radio excluent de la garantie les enceintes sur lesquelles un logiciel a été ajouté ou modifié sans leur accord. Utiliser Morgane relève donc de la responsabilité de l'utilisateur.
- Projet indépendant, non affilié à Bayard, Radio France ou La Chouette Radio. « Merlin » est une marque de ses détenteurs, citée à titre de compatibilité.
- L'utilisateur doit détenir les droits du contenu qu'il transfère.
- Les binaires ne sont pas signés : sur macOS, clic droit sur l'app puis « Ouvrir » ; sur Windows, SmartScreen puis « Informations complémentaires » puis « Exécuter quand même ».
- Le format de liste de lecture de la Merlin réserve 66 octets UTF-8 au titre de chaque piste ; au-delà, Morgane prévient (badge « 66+ ») puis coupe la fin à l'encodage.
`;

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
