// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import compress from 'astro-compress';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    // Optimize dev server for better HMR and file watching
    server: {
      hmr: {
        overlay: false // Disable error overlay that might interfere with dev experience
      },
      watch: {
        usePolling: false, // Use native file watching for better performance
        interval: 300 // Check for changes every 300ms
      },
      // Prevent caching issues during development
      fs: {
        // Allow serving files from packages
        allow: ['../../']
      }
    },
    // Disable caching for development
    define: {
      __DEV__: true
    }
  },
  // Enhanced performance optimizations from technical specs
  output: 'static',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto'
  },
  image: {
    // Research-aligned: Optimize images for performance
    service: {
      entrypoint: 'astro/assets/services/sharp'
    }
  },
  // Experimental features removed - viewTransitions is deprecated
  // SEO and accessibility optimizations
  site: 'https://cursedingksociety.com',
  // Integrations for enhanced performance and SEO
  integrations: [
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
    }),
    compress({
      CSS: true,
      HTML: true,
      JavaScript: true,
      SVG: true,
      Image: true,
      Logger: 1,
    }),
  ]
});