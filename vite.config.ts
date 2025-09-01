import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  preview: {
    allowedHosts: [
      'sumanth-portfolio-onez.onrender.com', // Add your Render host
      'localhost' // Keep localhost for local dev
    ]
  }
});
