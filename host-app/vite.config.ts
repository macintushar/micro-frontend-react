import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import federation from "@originjs/vite-plugin-federation";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),federation({
    name: "host-app",
    remotes: {
      components: "http://localhost:4173/assets/remoteEntry.js",
    },
    shared: ["react"],
  }),
],
  resolve: {
    alias: {
      "bunServer": "http://localhost:8005"
    }
  }
})
