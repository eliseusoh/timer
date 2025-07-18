import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  //add this in 
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/setUpTests.js'
  },
})
