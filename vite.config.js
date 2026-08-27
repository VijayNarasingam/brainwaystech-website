import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // Vercel + local dev serve from "/". GitHub Pages needs "/brainwaystech-website/"
  // The GitHub workflow sets GITHUB_PAGES=true so both targets work from one branch.
  base: process.env.GITHUB_PAGES === 'true' ? '/brainwaystech-website/' : '/',
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
})
