import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import "dotenv/config";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    proxy: {
      '/chat-api': {
        target: 'http://localhost:' + (process.env.API_PORT || 3000),
        changeOrigin: true,
        secure: false
      }
    }
  },
})
