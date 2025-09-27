import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { visualizer } from 'rollup-plugin-visualizer'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    visualizer({ open: true }) // optional: bundle analyzer report open karega
  ],
  build: {
    chunkSizeWarningLimit: 1000, // default 500, ab 1000 kB
  }
})
