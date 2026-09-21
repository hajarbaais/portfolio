import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://hajarbaais.github.io',
  base: '/portfolio',
  integrations: [tailwind()],
});