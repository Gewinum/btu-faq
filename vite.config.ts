/// <reference types="vite/client" />
/// <reference types="vitest" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import deno from "@deno/vite-plugin";

// https://vite.dev/config/
export default defineConfig({
  base: './',
  plugins: [
      react(),
      deno()
  ],
  test: {
    environment: "jsdom",
    globals: true
  }
})
