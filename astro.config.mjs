// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import compress from 'astro-compress';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Enhanced performance optimizations from technical specs
  output: 'static',
  compressHTML: true,
  build: {
    inlineStylesheets: 'always', // Inline critical CSS for better performance
    assets: '_astro'
  },
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
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            // Split Three.js into its own chunk for better caching
            'three': ['three'],
            // Split vendor libraries
            'vendor': ['@fontsource-variable/cinzel']
          },
          // Optimize chunk naming for better caching
          chunkFileNames: (chunkInfo) => {
            const facadeModuleId = chunkInfo.facadeModuleId ? chunkInfo.facadeModuleId.split('/').pop().replace('.js', '') : 'chunk';
            return `js/${facadeModuleId}-[hash].js`;
          },
          assetFileNames: (assetInfo) => {
            const info = assetInfo.name.split('.');
            const ext = info[info.length - 1];
            if (/\.(png|jpe?g|svg|gif|tiff|bmp|ico)$/i.test(assetInfo.name)) {
              return `images/[name]-[hash][extname]`;
            }
            if (/\.(css)$/i.test(assetInfo.name)) {
              return `css/[name]-[hash][extname]`;
            }
            if (/\.(woff2?|eot|ttf|otf)$/i.test(assetInfo.name)) {
              return `fonts/[name]-[hash][extname]`;
            }
            return `assets/[name]-[hash][extname]`;
          }
        }
      },
      // Optimize for performance
      target: 'es2020',
      cssCodeSplit: true,
      sourcemap: false, // Disable sourcemaps in production for smaller bundles
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true, // Remove console.logs in production
          drop_debugger: true,
          pure_funcs: ['console.log', 'console.info', 'console.debug']
        }
      }
    }
  },
  image: {
    // Research-aligned: Optimize images for performance
    service: {
      entrypoint: 'astro/assets/services/sharp'
    }
  },
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
      Image: false, // Disable image compression to avoid Sharp errors with unsupported formats
      Logger: 1,
    }),
  ]
});