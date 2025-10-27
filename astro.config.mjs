// @ts-check
import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: netlify(),
  site: 'https://example.com',
  build: {
    inlineStylesheets: 'never'
  },
  experimental: {
    fonts: [
      {
        name: 'Inter',
        src: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap',
        preloadFontSize: 'all'
      }
    ]
  }
});
