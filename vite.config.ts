import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  // This tells Vite to prefix all your file paths with your repo name
  base: '/Rajveer-4k.github.io/', 
  build: {
    outDir: 'dist',
  }
})
