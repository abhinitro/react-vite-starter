import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { ErrorOverlay } from 'vite-plugin-error-overlay'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),ErrorOverlay()],
  base: '/', 
})
