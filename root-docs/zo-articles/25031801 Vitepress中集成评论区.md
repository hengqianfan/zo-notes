---
aside: left
tags: ['vitepress','vue']
icon: ''
open: false
id: 25031801
---
 
######  {{ $frontmatter.id? $frontmatter.id : $frontmatter.zoid }}
 
<br/>
 
## 1. 集成 Giscus 

**`官网`**： https://giscus.app/zh-CN

### 1.1 创建代码仓库

> 在 GitHub 上创建或者拥有一个 `vitepress` 项目仓库

### 1.2 开启 Discussions 功能

> 开启 Github 仓库的 Discussions 功能 

在仓库的 settings  -> General ->  **勾选 Discussions✅** 

![](/image/202503190007.png)

![](/image/202503190009.png)

### 1.3 安装 Giscus app 

> 在 Github 网页中安装 Giscus app （类似插件）  

**`点击安装`** ：https://github.com/apps/giscus  


- **进入页面安装**

![](/image/202503182344.png)

- **根据自己情况，选择已建的 `vitepress` 的仓库，还是全部仓库**

![](/image/202503182346.png)


- **后续，也可以通过 Github 网站中的设置随时修改  Giscus 的配置范围**

![](/image/202503182353.png)


### 1.4 创建评论区组件

```vue
<script setup>
import Giscus from '@giscus/vue';
</script>

<template>
    <div class="comment-container">
        <ClientOnly>
            <Giscus repo="hengqianfan/zo-notes" repoId="R_kgDOMySUhw" category="General"
                categoryId="DIC_kwDOMySUh84CoL58" mapping="pathname" reactionsEnabled="1" emitMetadata="0"
                theme="preferred_color_scheme" />
        </ClientOnly>
    </div>
</template>
```

### 1.5 注册组件

### 1.6 使用组件


