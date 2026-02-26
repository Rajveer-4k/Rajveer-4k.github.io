import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  // The repo name MUST have a slash at the start and end
  base: '/Rajveer-4k.github.io/', 
  build: {
    outDir: 'dist',
  }
})
