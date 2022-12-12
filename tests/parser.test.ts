import { fileURLToPath } from 'url'
import { resolve } from 'path'
import { normalizePath } from 'vite'
import { describe, expect, it } from 'vitest'
import { Parser } from '../src/parser'
// @ts-expect-error this is raw
import test from './fixtures/test.md?raw'

const srcDir = normalizePath(fileURLToPath(new URL('./fixtures', import.meta.url)))
const testPath = normalizePath(resolve(srcDir, 'test.md'))
describe('parser', async () => {
  const parser = new Parser({
    root: srcDir,
    base: '/',
  } as any, {})
  await parser.setupRenderer()
  it('should it parser', async () => {
    const source = await parser.parseMarkdown(test, testPath)
    expect(source).toMatchInlineSnapshot(`
      "<script lang=\\"ts\\" setup>

      </script>
      <template><div class=\\"vp-doc\\"><h1 id=\\"test\\" tabindex=\\"-1\\">Test <a class=\\"header-anchor\\" href=\\"#test\\" aria-hidden=\\"true\\">#</a></h1>
      <p>This Test markdown</p>
      <div class=\\"tip custom-block\\"><p class=\\"custom-block-title\\">这是一个提示</p>
      <p>这是一个提示信息</p>
      </div>
      <p><a href=\\"./a/b\\">test</a></p>
      </div></template>
      <style scoped>

      </style>"
    `)
  })
})
