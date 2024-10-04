// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import { onMounted, watch, nextTick } from 'vue'
import { useRoute } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
// 引入样式
import './style/index.scss'
import './style/custom.css'

import MyLayout from './Layout.vue'

// 引入全局组件
import gloalComponemnts from './components/index.js'
// 引入自定义搜索框（应用于导航栏）
import slotSearch from './components/slot-search/index.vue'
// 引入文章前的信息组件
import myArticleInfo from './components/slot-articleInfo/index.vue'

import notFound from './components/not-found/index.vue'


import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import * as ElementPlusIconsVue from '@element-plus/icons-vue'
// 图片放大功能
import mediumZoom from 'medium-zoom'

// 代码预览插件
import DemoPreview, { useComponents } from '@vitepress-code-preview/container'
import '@vitepress-code-preview/container/dist/style.css'

// 代码组图标扩展
import 'virtual:group-icons.css'


/** @type {import('vitepress').Theme} */
export default {
  lastUpdated: true,
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      'nav-bar-content-before': () => h(slotSearch),
      'not-found': () => h(notFound),
      'doc-before': () => h(myArticleInfo)
    })
  },
  // 启用自定义布局
  // Layout: MyLayout,
  enhanceApp: async ({ app, router, siteData }) => {

    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      app.component(key, component)

    }
    // 全局组件的注册
    app.use(gloalComponemnts)
    // ElementPlus
    app.use(ElementPlus)
    // 代码预览插件
    useComponents(app, DemoPreview)

  },

  // medium-zoom 的配置
  setup() {
    const route = useRoute()
    const initZoom = () => {
      //mediumZoom('[data-zoomable]', { background: 'var(--vp-c-bg)' })
      mediumZoom('.main img', { background: 'var(--vp-c-bg)' })
    };
    onMounted(() => {
      initZoom()
    })
    watch(
      () => route.path,
      () => nextTick(() => initZoom())
    )
  }
}

