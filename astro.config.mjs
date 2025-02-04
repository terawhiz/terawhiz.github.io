// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://terawhiz.github.io/',
  integrations: [
    tailwind({
      applyBaseStyles: false,
    })
  ],
  trailingSlash: 'ignore',
  server: {
    port: 4321,
    host: true,
  },
  devToolbar: {
    enabled: false,
  },
});