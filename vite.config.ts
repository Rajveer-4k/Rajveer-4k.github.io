import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  // This MUST be your exact repo name with slashes on both sides
  base: '/Rajveer-4k.github.io/', 
  build: {
    outDir: 'dist',
  }
})
