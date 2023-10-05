import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://simmeringstew.github.io/language-flashcards/',
  plugins: [react()],
  // build: {
  //   assetsDir: '.'
  // }
})
