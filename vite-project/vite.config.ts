/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // base: "/React-rsschool/",
  plugins: [react()],
    test: {
      globals: true,
      environment: 'jsdom',
      coverage: {
        provider: 'istanbul', // or 'c8'
        all: true
      },
    }
})