import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  // This must match your repo name exactly
  base: '/Rajveer-4k.github.io/', 
  build: {
    outDir: 'dist',
  }
})
