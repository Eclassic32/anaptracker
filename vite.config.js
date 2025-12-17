import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
        tailwindcss(),
    ],
    server: {
        allowedHosts: true,
        cors: true,
        headers: {
            'Access-Control-Allow-Origin': '*',
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
                    return `hamanium/assets/${extType}/[name]-[hash][extname]`;
                },
                chunkFileNames: 'hamanium/assets/js/[name]-[hash].js',
                entryFileNames: 'hamanium/assets/js/[name]-[hash].js',
            },
        },
    }
})