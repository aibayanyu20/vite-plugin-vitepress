import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Inspect from 'vite-plugin-inspect'
import VitePluginVitepress from '../src'
export default defineConfig({
  plugins: [
    Inspect(),
    vue(),
    VitePluginVitepress(),
  ],
})
