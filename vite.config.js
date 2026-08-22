import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/brainwaystech-website/',
  plugins: [react()],
})
