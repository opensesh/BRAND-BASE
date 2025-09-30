import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  server: {
    port: 5173,
    strictPort: false,
    open: false, // Don't auto-open browser
  },
  preview: {
    port: 5173,
    strictPort: false,
    open: false,
  },
})
