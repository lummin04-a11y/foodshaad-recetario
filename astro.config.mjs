import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://lummin04-a11y.github.io',
  base: '/foodshaad-recetario',
  integrations: [react()]
});
