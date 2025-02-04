// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

import mdx from '@astrojs/mdx';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://terawhiz.github.io/',
  integrations: [tailwind({
    applyBaseStyles: false,
  }), mdx(), react()],
  markdown: {
    shikiConfig: {
      themes: {
        light: 'ayu-dark',
        dark: 'kanagawa-dragon'
      }
    }
  },
  trailingSlash: 'ignore',
  server: {
    port: 4321,
    host: "0.0.0.0",
  },
  devToolbar: {
    enabled: false,
  },
});