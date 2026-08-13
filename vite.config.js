import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Production deploys to https://alinsharma.github.io/Portfolio/
export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === 'build' ? '/Portfolio/' : '/',
}))
