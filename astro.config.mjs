// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const SITE_URL = 'https://hello-morgane.fr';

const local = fontProviders.local();

export default defineConfig({
  site: SITE_URL,
  output: 'static',

  fonts: [
    {
      name: 'Inter Tight',
      cssVariable: '--font-sans',
      provider: local,
      fallbacks: ['system-ui', 'sans-serif'],
      options: {
        variants: [
          { weight: 400, style: 'normal', src: ['./src/assets/fonts/inter-tight-latin-400-normal.woff2'] },
          { weight: 500, style: 'normal', src: ['./src/assets/fonts/inter-tight-latin-500-normal.woff2'] },
          { weight: 600, style: 'normal', src: ['./src/assets/fonts/inter-tight-latin-600-normal.woff2'] },
          { weight: 700, style: 'normal', src: ['./src/assets/fonts/inter-tight-latin-700-normal.woff2'] },
        ],
      },
    },
    {
      name: 'Instrument Serif',
      cssVariable: '--font-serif',
      provider: local,
      fallbacks: ['Georgia', 'serif'],
      options: {
        variants: [
          { weight: 400, style: 'normal', src: ['./src/assets/fonts/instrument-serif-latin-400-normal.woff2'] },
          { weight: 400, style: 'italic', src: ['./src/assets/fonts/instrument-serif-latin-400-italic.woff2'] },
        ],
      },
    },
    {
      name: 'Cascadia Code',
      cssVariable: '--font-mono',
      provider: local,
      fallbacks: ['ui-monospace', 'monospace'],
      options: {
        variants: [
          { weight: 400, style: 'normal', src: ['./src/assets/fonts/cascadia-code-latin-400-normal.woff2'] },
        ],
      },
    },
  ],

  integrations: [sitemap({ filter: (page) => !page.endsWith('/404/') && !page.endsWith('/404') })],

  build: {
    inlineStylesheets: 'always',
  },
});
