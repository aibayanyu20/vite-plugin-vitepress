import { defineConfig } from 'tsup'

export default defineConfig({
  external: [
    'vite',
    'vitepress',
    /^vitepress/,
  ],
  entry: [
    'src/index.ts',
    'src/theme.ts',
  ],
  outDir: 'dist',
  dts: true,
  format: ['cjs', 'esm'],
})
