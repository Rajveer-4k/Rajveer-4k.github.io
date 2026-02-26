import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  // Change this from a specific name to just './' 
  // This tells Vite: "Look for assets relative to wherever index.html is"
  base: './', 
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  }
})
