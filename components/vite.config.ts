import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import federation from "@originjs/vite-plugin-federation";


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),federation({
    name: "components",
    filename: "remoteEntry.js",
    exposes: {
      "./List": "./src/components/List.tsx",
    },
    shared: ["react"],
  }),
],
build: {
  modulePreload: false,
  target: "esnext",
  minify: false,
  cssCodeSplit: false,
},
})
