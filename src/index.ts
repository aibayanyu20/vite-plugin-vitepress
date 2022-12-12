import type { PluginOption } from 'vite'
import { Parser } from './parser'
import type { UserOptions } from './typing'

const VitePluginVitepress = (_options?: UserOptions): PluginOption => {
  let parser: Parser
  const options = _options || {}
  return {
    name: 'vite-plugin-vitepress',
    async configResolved(_config) {
      parser = new Parser(_config, options)
      await parser.setupRenderer()
    },
    transform(code, id) {
      return parser.transform(code, id)
    },
  }
}

export {
  VitePluginVitepress,
}

export default VitePluginVitepress
