import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig, loadEnv } from 'vite';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, process.cwd(), '');

  return {
    // Set base to '/' for a custom domain or username.github.io
    base: '/',
    
    plugins: [react(), tailwindcss()],

    define: {
      // This allows you to use process.env.GEMINI_API_KEY in your code
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },

    resolve: {
      alias: {
        // Sets up '@' as a shortcut for your root directory
        '@': path.resolve(__dirname, './'),
      },
    },

    server: {
      // Ensures HMR (Hot Module Replacement) works correctly
      hmr: process.env.DISABLE_HMR !== 'true',
    },

    build: {
      // Ensures the build output is clean for GitHub Pages
      outDir: 'dist',
      assetsDir: 'assets',
    },
  };
});
