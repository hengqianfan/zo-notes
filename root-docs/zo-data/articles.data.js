
import fs from 'node:fs'


import { createContentLoader } from 'vitepress'


import { reckonReadTime } from '../.vitepress/myscript/setArticleDatabase'


export default createContentLoader('zo-articles/*.md', {
    includeSrc: true, // 包含原始 markdown 源?
    excerpt: true,    // 包含摘录?
    transform(rawData) {
        // 追加 frontmatter 配置
        for (let i = 0; i < rawData.length; i++) {
            // 阅读时间
            let readTime = reckonReadTime(rawData[i].src)
            rawData[i].frontmatter.readTimeNum = readTime
            // 文章属性
            rawData[i].frontmatter.type = '文章'
            // 文件名称
            let filename = rawData[i].url
            filename = filename.split('les/')[1]
            filename = filename.split('.ht')[0]
            rawData[i].frontmatter.filename = filename
            // 文章标题
            rawData[i].frontmatter.title = filename.split(' ')[1]
            // 文章ID
            rawData[i].frontmatter.id = filename.split(' ')[0]
            // 文章链接

        }

        return rawData
    }
})