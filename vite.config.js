import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// import dotenv from 'dotenv';

// dotenv.config();

export default defineConfig({
  plugins: [react()],
  // define: {
  //   'process.env': process.env, // Expose process.env to the frontend
  // },
  build: {
    outDir: 'dist/frontend',
    emptyOutDir: true,
  },
  esbuild: {
    jsx: 'automatic', // Ensure the new JSX runtime is used
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});
