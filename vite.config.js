import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'


export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  base: "/carlos-portfolio",
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '@images': resolve(__dirname, './src/assets/images'),
      '@sections': resolve(__dirname, './src/sections'),
      '@components': resolve(__dirname, './src/components'),
    }
  }
})
