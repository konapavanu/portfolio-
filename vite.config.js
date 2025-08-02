// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  root: '.', // project root (where index.html is now)
  publicDir: 'public', // optional, default is 'public'
  build: {
    outDir: 'dist', // output directory for Netlify
    emptyOutDir: true,
  },
});
