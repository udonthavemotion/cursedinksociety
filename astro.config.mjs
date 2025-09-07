// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import compress from 'astro-compress';
import vue from '@astrojs/vue';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss('./tailwind.config.mjs')],
    // Optimize dev server for better HMR and file watching
    server: {
      hmr: {
        overlay: false // Disable error overlay that might interfere with dev experience
      },
      watch: {
        usePolling: false, // Use native file watching for better performance
        interval: 300 // Check for changes every 300ms
      }
    }
  },
  // Enhanced performance optimizations from technical specs
  output: 'static',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
    // Optimize bundle size
    rollupOptions: {
      output: {
        manualChunks: {
          // Separate vendor chunks for better caching
          'three-vendor': ['three'],
          'astro-vendor': ['astro'],
        }
      }
    }
  },
  image: {
    // Research-aligned: Optimize images for performance
    service: {
      entrypoint: 'astro/assets/services/sharp'
    },
    // Optimize image formats and quality
    formats: ['avif', 'webp', 'png', 'jpg'],
    defaultQuality: 85
  },
  // Experimental features removed - viewTransitions not available in Astro 5.x
  // SEO and accessibility optimizations
  site: 'https://cursedingksociety.com',
  // Integrations for enhanced performance and SEO
  integrations: [
    vue(),
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