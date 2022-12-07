import type { PluginOption } from 'vite'

const VitePluginVitepress = (): PluginOption => {
  return {
    name: 'vite-plugin-vitepress',
  }
}

export {
  VitePluginVitepress,
}

export default VitePluginVitepress
