import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 5173,
    strictPort: false,
  },
  build: {
    cssCodeSplit: false,
    chunkSizeWarningLimit: 300,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes('node_modules')) return
          if (id.includes('gsap')) return 'vendor-gsap'
          if (id.includes('framer-motion') || id.includes('motion-')) return 'vendor-motion'
          if (id.includes('lenis')) return 'vendor-lenis'
          if (id.includes('react-dom') || id.includes('react/') || id.includes('scheduler'))
            return 'vendor-react'
        },
      },
    },
  },
})
