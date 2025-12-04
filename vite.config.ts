import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  define: {
    // Polyfill process.env for the codebase that references it
    'process.env': {
      API_KEY: JSON.stringify("AIzaSyByAK40yJQMIUfKl_BZMKW5eOzrVshNktc")
    }
  },
  build: {
    outDir: 'dist',
    sourcemap: false
  }
});