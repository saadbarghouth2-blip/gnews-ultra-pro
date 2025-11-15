import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ESM Vite config compatible with Vite 5+
export default defineConfig({
  plugins: [react()],
  base: './',
  server: {
    port: 5173
  }
})
