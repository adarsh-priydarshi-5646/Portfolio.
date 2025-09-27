import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

let plugins = [react()]

// Only include visualizer in development
if (process.env.NODE_ENV !== 'production') {
  const { visualizer } = await import('rollup-plugin-visualizer')
  plugins.push(visualizer())
}

export default defineConfig({
  plugins
})
