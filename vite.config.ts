import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  // This tells Vite where the files actually live on GitHub's servers
  base: '/Rajveer-4k.github.io/', 
  build: {
    outDir: 'dist',
    emptyOutDir: true
  }
})
