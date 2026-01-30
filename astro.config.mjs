// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import alpinejs from '@astrojs/alpinejs';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  site: 'https://digitaljcb.github.io',
  base: '/portfolio',
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [
    alpinejs(),
    icon()
  ]
});