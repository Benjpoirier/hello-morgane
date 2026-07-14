# hello-morgane.fr

Site vitrine de [Morgane](https://github.com/Benjpoirier/Morgane) — l'application de bureau qui transfère des podcasts RSS vers l'enceinte pour enfants Merlin.

Astro 7, sortie statique, **zéro JavaScript** hormis 1,3 Ko inlinés pour la démo interactive du hero.

## Développer

```sh
pnpm install
pnpm dev        # http://localhost:4321
pnpm check      # typecheck
pnpm build      # génère dist/
pnpm preview    # sert dist/
```

## Déploiement

Un push sur `main` déclenche `.github/workflows/deploy.yml` : build, envoi de `dist/` en FTPS sur l'hébergement OVH, puis ping IndexNow.

Secrets requis (Settings → Secrets and variables → Actions) :

| Secret | Exemple |
|---|---|
| `FTP_SERVER` | `ftp.clusterXXX.hosting.ovh.net` |
| `FTP_USERNAME` | login FTP OVH |
| `FTP_PASSWORD` | mot de passe FTP OVH |
| `FTP_SERVER_DIR` | `./www/` |

## Structure

```
src/
  components/        composants de la landing
    app/             les vues de la fenêtre d'app du hero
  content/guides/    les pages d'intention, en markdown
  data/              contenu et liens — la source unique
  layouts/           BaseLayout : head, SEO, JSON-LD
  pages/             index, 404, guides, robots.txt, llms.txt
```

Le domaine est défini **à un seul endroit** : `SITE_URL` dans `astro.config.mjs`. Canonical, Open Graph, sitemap et robots.txt en découlent.

## SEO

- HTML entièrement rendu au build : le contenu ne dépend d'aucun JS.
- JSON-LD `SoftwareApplication` + `FAQPage` sur l'accueil, `Article` + `BreadcrumbList` sur les guides.
- `sitemap-index.xml` et `robots.txt` générés depuis la config.
- Polices auto-hébergées (aucun appel à Google Fonts), 4 préchargements.
- `.htaccess` : compression et cache immuable sur les assets fingerprintés.
- `llms.txt` : résumé du projet pour les crawlers d'IA.

## Licence

GPL-3.0-or-later, comme l'application.
