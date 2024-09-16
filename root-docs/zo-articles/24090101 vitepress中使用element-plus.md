---
aside: left
tags: ['vitepress','elementPlus']
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

```js{4-8,15-16}
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


```js:line-numbers{9-10,20-23}
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







