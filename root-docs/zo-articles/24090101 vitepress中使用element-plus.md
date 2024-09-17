---
aside: left
tags: ['vitepress','elementPlus']
icon: 'vitepress'
---

###### 24090101

<br/>

# vitepress 中使用 ElementPlus

## 1. 安装 element-plus

::: code-group

```shell [npm]
npm install element-plus --save
```

```shell [yarn]
yarn add element-plus
```

```shell [pnpm]
pnpm install element-plus
```

:::

## 2. 进行代码配置 

**文件路径**： `docs/.vitepress/theme/index.js` 👈    

---

1. 导入 `elementplus` 

2. 导入 `elementplus` 的样式

3. 注册 `elementplus`

---

::: code-group

```js [纯净版]
import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.use(ElementPlus)
  },
}
```



```js{3-6,10-11} [说明版]
import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
// ⭐1. 导入 elementplus 
import ElementPlus from 'element-plus'
// ⭐2. 导入 elementplus 的样式
import 'element-plus/dist/index.css'
export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // ⭐3. 注册 elementplus
    app.use(ElementPlus)
  },
}
```

:::


## 3. 补充：使用elementplus图标 

<br/>


- 1️⃣ **先安装依赖**  <Badge type='danger'>注意图标是单独的包，所以要另外安装它</Badge>  

::: code-group

```shell [npm]
npm install @element-plus/icons-vue
```

```shell [yarn]
yarn add @element-plus/icons-vue
```

```shell [pnpm]
pnpm install @element-plus/icons-vue
```

:::

-  2️⃣ **然后配置代码**

---

<Badge type='info'>这个步骤是接前面的</Badge>   

<br/>

<Badge type='info'>如果你没有安装 elementplus 记得先安装前面的步骤 elementplus</Badge>

4. 导入 `elementplus-icon` 

5. 注册 `elementplus-iocn`

---

::: code-group

```js [纯净版]
import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.use(ElementPlus)
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      app.component(key, component)
    }
  },
}
```




```js:line-numbers{7-8,14-16} [说明版]
import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
//  1. 导入 elementplus 
import ElementPlus from 'element-plus'
//  2. 导入 elementplus 的样式
import 'element-plus/dist/index.css'
// ⭐ 4. 导入 elementplus-icon
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // 3. 注册 elementplus
    app.use(ElementPlus)
    // ⭐ 5. 注册 elementplus 图标
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      app.component(key, component)
    }
  },
}
```

:::






