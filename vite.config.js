import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/', // Ensures the app works with relative paths
  build: {
    outDir: 'dist' // Output directory for production build
  },
  server: {
    historyApiFallback: true // Handles routes for development
  }
});
