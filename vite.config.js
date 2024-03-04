import { defineConfig } from 'vite';

export default defineConfig({
  base: 'https://github.com/Litaash/digiturn.git',
  build: {
    rollupOptions: {
      input: {
        main: 'index.html'
      }
    }
  }
});