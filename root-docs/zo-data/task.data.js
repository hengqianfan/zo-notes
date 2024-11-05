import fs from 'node:fs'

import { createContentLoader } from 'vitepress'


const now_time = new Date().getTime()



export default createContentLoader('zo-articles/*.md', {
    includeSrc: true, // 包含原始 markdown 源?
    excerpt: true,    // 包含摘录?
    transform(rawData) {
        return rawData
    }
})