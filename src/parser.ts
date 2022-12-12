import { relative } from 'path'
import type { ResolvedConfig } from 'vite'
import { normalizePath } from 'vite'
import type { MarkdownEnv } from 'vitepress'
import { createMarkdownRenderer } from 'vitepress'
import type { UserOptions } from './typing'

export class Parser {
  public md: Awaited<ReturnType<typeof createMarkdownRenderer>> | undefined
  constructor(public readonly config: ResolvedConfig, public readonly options: UserOptions) {
  }

  public async setupRenderer() {
    const srcDir = this.config.root
    const base = this.config.base ?? '/'
    this.md = await createMarkdownRenderer(srcDir, this.options?.markdown, base)
  }

  public async parseMarkdown(code: string, id: string) {
    const env: MarkdownEnv = {
      path: id,
      relativePath: normalizePath(relative(this.config.root, id)),
      cleanUrls: 'without-subfolders',
    }
    const html = this.md?.render(code, env)
    const { sfcBlocks } = env
    if (html) {
      return [
        sfcBlocks?.scriptSetup ? sfcBlocks?.scriptSetup?.content : '',
        `<template><div class="vp-doc">${html}</div></template>`,
        ...sfcBlocks?.styles.map(item => item.content) ?? [],
        ...sfcBlocks?.customBlocks?.map(item => item.content) ?? [],
      ].join('\n')
    }
    return `<template><div class="vp-doc">${html}</div></template>`
  }

  public async transform(code: string, id: string) {
    if (id.endsWith('.md'))
      return await this.parseMarkdown(code, id)
  }
}
