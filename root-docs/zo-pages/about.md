# 关于本站



```md
![](https://img.shields.io/badge/微信号-12151-blue.svg?logo=wechat)

```


## 1. 建设原因

🔘 **从高中开始，我便想要一个属于自己的网站**，但是这条路是曲折的。刚上大学时的我，终于拥有了属于自己的电脑，但它对于我来说更像是一个大屏手机，我的电脑知识储备为 `0` 。  
🔘 建站早期，曾经多次碰壁与放弃，而建站商家铺天盖地的广告，**曾让我以为建站的成本是我负担不起的费用**，后来渐渐知道，有免费的`wordpress`，但是看上去，还是有QQ空间的既视感，为了建设一个从 `0` 开始的网站，我逐渐开始学习前端知识，没想到我一个纯文科专业的人，竟然也学的津津有味。  
🔘 最后，慢慢接触到了 `vitepress` ，**在我看来它的确是最好的建站方式，我十分喜欢这种自由度，像是上帝版的编辑与排版权限，这是任何笔记软件无法给予我的。**  
🔘 目前也在开发脱离 `vitepress` 的、基于`vue + nodejs + mysql` 的 个人博客网站，待内容完善后，本站或许会随着升级。

## 2. 更新日志 

::: details 💡 网站更新日志

[点击此处，跳转到【更新日志】 📝](./history-updated.md)

:::

## 3. 版权与引用说明

### 3.1 本站知识产权保护

- 假若，你用于自己的博客网站，对于本站的文章、笔记的转载，只要附上本站的原文链接，不商用就行。

- 假若，你将本站内容发布在第三方平台（包括不限于：Bilibili、抖音、小红书、百度、今日头条、知乎、小黑盒、CSDN等），**请在对应平台关注站长**，**并在文章末尾或评论区@站长的账号**。

|平台|站长的账号|ID|链接地址|
|---|---|---|---|
|Bilibili|数码猿猴|3546729108474211|https://space.bilibili.com/3546729108474211/|


### 3.2 争议解决

::: danger <Badge type='danger'>争议解决</Badge>
- 本站文章与笔记中出现的 `非技术性` 的配图，**图片一般情形下是通过AI生成的**。
- 本站文章中的 `技术性配图` ，一般是个人探索、实践、执行的截图。
- 本站中**若是出现您认为侵犯你权益的图片、资源等，请及时联系站长，核实后会在第一时间删除争议的内容**。
:::





## 4. 采用与依赖的技术与项目
 

### 4.1 技术依赖一览表

🏐🏐🏐  **`技术依赖一览表`**  🏐🏐🏐  

```json
{
  "devDependencies": {
    // 可以不安装vue，我单纯就想安装它
    "vue": "^3.4.21",
    // 本站的博客网站框架
    "vitepress": "1.0.0-rc.45",
    // 本站全面使用sass语法
    "sass": "^1.71.1"

  },
  "dependencies": {
    // el 图标库
    "@element-plus/icons-vue": "^2.3.1",
    // el 组件库
    "element-plus": "^2.8.0",
    // 文档扩展 - 脚注
    "markdown-it-footnote": "^4.0.0",
    // 文档扩展 - 流程图
    "markdown-it-mermaid": "^0.2.5",
    // 功能扩展 - 图片点击预览
    "medium-zoom": "^1.1.0",
    // 流程图的技术依赖
    "mermaid": "^11.1.1",
    // 为文章提供唯一标识符号
    "uuid": "^10.0.0"
  }
}
```

### 4.2 嵌入的字体

📣 **本站使用的字体皆为开源的免费字体**

```css

@font-face {
    font-family: "金刚体";
    src: url("/font/ChuangKeTieJinGangTi-2.otf");
}

@font-face {
    font-family: "剑豪体";
    src: url("/font/AaJianHaoTi-2.ttf");
}

@font-face {
    font-family: "zqk英文";
    src: url("/font/ZQKfreefont.ttf");
}

@font-face {
    font-family: '馒头黑体';
    src: url('/font/MantouSans-Regular.ttf');
}

@font-face {
    font-family: "站酷高端黑";
    src: url('/font/站酷高端黑.ttf');
}


@font-face {
    font-family: '胡晓波男神体';
    src: url('/font/HuXiaoBoNanShenTi-2.otf');
}

```


### 4.3 frontmatter 配置

```md
---
<!-- 关闭文章前的基本信息组件 -->
readTime: false

---
```


## 5. 功能实现

### 4.1 文章数据库

### 4.2 自动侧边栏

### 3.3 自定义搜索

### 3.4 流程图集成

### 3.5 图片小组件

### 3.6 预览图集成

### 3.7 视频小组件

参考文章： https://www.ivistang.tech/articles/167/

