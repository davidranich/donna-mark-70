import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), tailwindcss()],
  optimizeDeps: {
    include: ['fast-deep-equal'], // 🛠️ tell Vite to properly handle this dependency
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  }
})
