import type { IconName } from '../components/Icon.astro';

const REPO = 'Benjpoirier/Morgane';

export interface Platform {
  title: string;
  detail: string;
  href: string;
  icon: IconName;
}

export interface Download {
  label: string;
  href: string;
}

export interface Release {
  version: string;
  tag: string;
  releaseUrl: string;
  platforms: Platform[];
  alt: Download[];
}

const FALLBACK_VERSION = '0.1.0';

function fallback(): Release {
  const tag = `v${FALLBACK_VERSION}`;
  const dl = `https://github.com/${REPO}/releases/download/${tag}`;

  return {
    version: FALLBACK_VERSION,
    tag,
    releaseUrl: `https://github.com/${REPO}/releases/tag/${tag}`,
    platforms: [
      { title: 'macOS', detail: 'universal · .dmg', icon: 'apple', href: `${dl}/Morgane_${FALLBACK_VERSION}_universal.dmg` },
      { title: 'Windows', detail: 'x64 · .msi', icon: 'windows', href: `${dl}/Morgane_${FALLBACK_VERSION}_x64_en-US.msi` },
      { title: 'Linux', detail: 'x86_64 · appimage', icon: 'linux', href: `${dl}/Morgane_${FALLBACK_VERSION}_amd64.AppImage` },
    ],
    alt: [
      { label: '.exe (installeur Windows)', href: `${dl}/Morgane_${FALLBACK_VERSION}_x64-setup.exe` },
      { label: '.deb', href: `${dl}/Morgane_${FALLBACK_VERSION}_amd64.deb` },
      { label: '.rpm', href: `${dl}/Morgane-${FALLBACK_VERSION}-1.x86_64.rpm` },
    ],
  };
}

interface Asset {
  name: string;
  browser_download_url: string;
}

async function fetchRelease(): Promise<Release> {
  const headers: Record<string, string> = {
    Accept: 'application/vnd.github+json',
    'User-Agent': 'hello-morgane-site',
  };

  const token = process.env.GITHUB_TOKEN;
  if (token) headers.Authorization = `Bearer ${token}`;

  const res = await fetch(`https://api.github.com/repos/${REPO}/releases/latest`, { headers });
  if (!res.ok) throw new Error(`API GitHub : ${res.status} ${res.statusText}`);

  const data = (await res.json()) as { tag_name: string; html_url: string; assets: Asset[] };

  const find = (suffix: string) => data.assets.find((a) => a.name.endsWith(suffix));
  const url = (suffix: string) => find(suffix)?.browser_download_url;

  const dmg = url('.dmg');
  const msi = url('.msi');
  const appimage = url('.AppImage');

  if (!dmg || !msi || !appimage) {
    throw new Error(`binaire manquant dans ${data.tag_name} (dmg/msi/appimage)`);
  }

  const alt: Download[] = [];
  const exe = url('-setup.exe');
  const deb = url('.deb');
  const rpm = url('.rpm');
  if (exe) alt.push({ label: '.exe (installeur Windows)', href: exe });
  if (deb) alt.push({ label: '.deb', href: deb });
  if (rpm) alt.push({ label: '.rpm', href: rpm });

  return {
    version: data.tag_name.replace(/^v/, ''),
    tag: data.tag_name,
    releaseUrl: data.html_url,
    platforms: [
      { title: 'macOS', detail: 'universal · .dmg', icon: 'apple', href: dmg },
      { title: 'Windows', detail: 'x64 · .msi', icon: 'windows', href: msi },
      { title: 'Linux', detail: 'x86_64 · appimage', icon: 'linux', href: appimage },
    ],
    alt,
  };
}

let cached: Promise<Release> | undefined;

export function getRelease(): Promise<Release> {
  cached ??= fetchRelease().catch((err: Error) => {
    console.warn(`[release] lecture de la dernière release impossible (${err.message}) — repli sur v${FALLBACK_VERSION}`);
    return fallback();
  });

  return cached;
}
