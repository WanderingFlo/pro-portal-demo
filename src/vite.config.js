import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000
  },
  // Add support for client-side routing
  resolve: {
    alias: {
      '@': '/src'
    }
  }
})