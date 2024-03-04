import { defineConfig } from 'vite';

export default defineConfig({
  base: '/digiturn/',
  build: {
    rollupOptions: {
      input: {
        main: 'index.html'
      }
    }
  }
});