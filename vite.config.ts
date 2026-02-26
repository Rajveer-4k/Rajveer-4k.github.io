import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  // CRITICAL: Must have a slash at the start AND the end
  base: '/Rajveer-4k.github.io/', 
  build: {
    outDir: 'dist',
    emptyOutDir: true
  }
})
