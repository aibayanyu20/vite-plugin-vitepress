# vite-plugin-vitepress

一个实现了vitepress样式的vite插件。


## 安装

```bash
npm i -D vite-plugin-vitepress
```


## 使用

在 `vite.config.[t|j]s`增加如下配置：

```ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VitePluginVitepress from '../src'
export default defineConfig({
  plugins: [
    VitePluginVitepress(),
    vue({
      include: [/\.vue$/, /\.md$/],
    }),
  ],
})

```

同时你还需要导入`vitepress`的主题样式在`main.[t|j]s`文件中。

```ts
import "vite-plugin-vitepress/theme"
```


## 配合

* markdown: 与vitepress的配置项中的 [markdown](https://vitepress.vuejs.org/config/app-configs#markdown) 相同


## TypeScript配置

如果你使用的是Typescript，你需要在项目根目录下创建一个`shims.d.ts`文件，
用于帮助Typescript理解Vue SFC文件和Markdown文件的结构。
对于VueJS开发者，你可能已经为你的VueJS文件做了这个，但是你可以用一个单独的文件来包装它`shims.d.ts`在你的项目根目录下：


```ts
declare module '*.vue' {
  import type { ComponentOptions } from 'vue'
  const Component: ComponentOptions
  export default Component
}

declare module '*.md' {
  import type { ComponentOptions } from 'vue'
  const Component: ComponentOptions
  export default Component
}
```

## 示例

查看 [example](./example) 在当前的项目中。
