import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://kianranjbar.dev',
  integrations: [tailwind()],
});
