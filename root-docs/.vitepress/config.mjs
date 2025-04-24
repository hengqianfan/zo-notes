import { fileURLToPath, URL } from 'node:url'
// vitepress 的配置项
import { defineConfig } from 'vitepress'
// 主题的配置项
// ⭐特意拆分到这个文件中的，为了代码的可读性
import { themeConfig } from './config/theme'

// markdown 插件
import markdownItFootnote from 'markdown-it-footnote'
// import markdownItTaskLists from 'markdown-it-task-lists'
import mermaidPlugin from './myscript/myMermaid';

// 代码预览插件
import { demoPreviewPlugin } from '@vitepress-code-preview/plugin'

// 代码组-增加图标
import { groupIconMdPlugin, groupIconVitePlugin } from 'vitepress-plugin-group-icons'
// @ts-ignore
// import { onlyTest } from 'fans-tools-for-vitepress';


import { base } from '../zo-data/key';



export default defineConfig({
  lang: 'cn',
  title: "ZONOTES",
  description: "A VitePress Site",
  // srcExclude: ['**/', '**/TODO.md'],
  base: base,
  // 标签页的LOGO
  head: [
    ['link', { rel: 'icon', href: './icon/png/logo.png' }]
  ],
  outDir: './.vitepress/dist',
  // 关闭深色模式
  appearance: false,
  // 开启显示更新时间
  lastUpdated: true,
  themeConfig: themeConfig,
  markdown: {
    config: (md) => {
      // 增加脚注语法的支持
      md.use(markdownItFootnote)
      // 增加任务列表语法的支持
      // md.use(markdownItTaskLists)
      // 增加mermaid语法的支持
      md.use(mermaidPlugin)
      // 代码预览插件
      const docRoot = fileURLToPath(new URL('../', import.meta.url))
      md.use(demoPreviewPlugin, { docRoot })
      // 代码组图标扩展
      md.use(groupIconMdPlugin)

    },

    Math: true
  },
  // 给公告插件预留的
  vite: {
    plugins: [
      groupIconVitePlugin()
    ],
    ssr: {
      noExternal: ["@antv/g2plot"]
    },
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler', // or 'modern'
        },
      },
    }
  }
})
