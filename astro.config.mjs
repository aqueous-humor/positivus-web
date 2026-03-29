// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  fonts: [{
    provider: fontProviders.google(),
    name: 'Space Grotesk',
    cssVariable: '--font-space',
    subsets: ['latin'],
    weights: [400, 500, 600, 700]
  }]
});