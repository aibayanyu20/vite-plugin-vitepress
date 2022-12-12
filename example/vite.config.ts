import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Inspect from 'vite-plugin-inspect'
import VitePluginVitepress from '../src'
export default defineConfig({
  plugins: [
    VitePluginVitepress(),
    Inspect(),
    vue({
      include: [/\.vue$/, /\.md$/],
    }),
  ],
})
