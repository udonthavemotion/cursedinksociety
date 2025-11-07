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
        overlay: false
      },
      watch: {
        usePolling: false,
        interval: 300
      },
      fs: {
        allow: ['../../']
      }
    },
    define: {
      __DEV__: true
    },
    build: {
      // PRODUCTION OPTIMIZATIONS
      rollupOptions: {
        output: {
          manualChunks: {
            // Critical chunks for better caching
            'three': ['three'],
            'vendor': ['@fontsource-variable/cinzel']
          },
          // Optimized chunk naming
          chunkFileNames: 'js/[name]-[hash].js',
          entryFileNames: 'js/[name]-[hash].js',
          assetFileNames: (assetInfo) => {
            const ext = assetInfo.name.split('.').pop();
            if (/\.(png|jpe?g|svg|gif|tiff|bmp|ico|webp)$/i.test(assetInfo.name)) {
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
        },
        // Tree-shaking optimizations
        treeshake: {
          moduleSideEffects: false,
          propertyReadSideEffects: false,
          tryCatchDeoptimization: false
        }
      },
      // Performance optimizations
      target: 'es2020',
      cssCodeSplit: true,
      cssMinify: true,
      sourcemap: false,
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true,
          pure_funcs: ['console.log', 'console.info', 'console.debug', 'console.warn'],
          passes: 2
        },
        mangle: {
          safari10: true
        },
        format: {
          comments: false
        }
      },
      // Chunk size optimization
      chunkSizeWarningLimit: 1000,
      assetsInlineLimit: 4096
    },
    // CSS optimization
    css: {
      devSourcemap: false,
      preprocessorOptions: {
        scss: {
          // Add any SCSS options here
        }
      }
    },
    // Enable optimizations
    optimizeDeps: {
      include: ['three'],
      exclude: []
    }
  },
  image: {
    // Research-aligned: Optimize images for performance
    service: {
      entrypoint: 'astro/assets/services/sharp'
    }
  },
  // SEO and accessibility optimizations
  site: 'https://cursedinksocietytattoo.com',
  trailingSlash: 'never',
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