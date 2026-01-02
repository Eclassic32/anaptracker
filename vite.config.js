import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/anaptracker',
  plugins: [
    vue(),
        tailwindcss(),
    ],
    server: {
        allowedHosts: true,
        cors: true,
        headers: {
            'Access-Control-Allow-Origin': 'archipelago.gg',
        }
    },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
    build: {
        rollupOptions: {
            output: {
                assetFileNames: (assetInfo) => {
                    let extType = assetInfo.name.split('.').at(1);
                    if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
                        extType = 'img';
                    }
                    return `anaptracker/assets/${extType}/[name]-[hash][extname]`;
                },
                chunkFileNames: 'anaptracker/assets/js/[name]-[hash].js',
                entryFileNames: 'anaptracker/assets/js/[name]-[hash].js',
            }
        },
    }
})