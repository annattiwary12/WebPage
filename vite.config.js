import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/WebPage/', // Adjust this according to your GitHub Pages setup
  build: {
    outDir: 'docs' // Adjust the output directory to 'docs' for GitHub Pages
  }
});
