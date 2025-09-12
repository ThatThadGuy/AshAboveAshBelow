import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://thatthadguy.github.io/AshAboveAshBelow',
  base: '/AshAboveAshBelow/',
  trailingSlash: 'always',
  integrations: [tailwind(), mdx()],
});
