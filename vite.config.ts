import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  // Use the exact repo name with slashes
  base: '/Rajveer-4k.github.io/', 
  build: {
    outDir: 'dist',
    emptyOutDir: true
  }
})
