---
layout: page
---

<ClientOnly>

<page-topic :momo='mymomo'></page-topic>

</ClientOnly>

<script setup>
    const mymomo = [

    {
        text: '基础部分', items: [
            { text: 'HTML', link: '/zo-repo/programming/html/00 简述', icon: 'html' },
            { text: 'SCSS', link: '/zo-repo/programming/scss/00 简述', icon: 'sass' },
            { text: 'JavaScript', link: '/zo-repo/programming/javascript/00 简述', icon: 'javascript' },
            { text: 'network-request', link: '/zo-repo/programming/network-request/01 axios/00 简述', icon: 'network' }

        ]
    },

    {
        text: '进阶知识', items: [
            { text: 'Node.js', link: '/zo-repo/programming/nodejs/00 简述', icon: 'nodejs' },
            { text: 'TypeScript', link: '/zo-repo/programming/typescript/01 基础内容/01 介绍与安装', icon: 'typescript' },
            { text: 'React', link: '/zo-repo/programming/react/00 简述', icon: 'react' },
            { text: 'Vue', link: '/zo-repo/programming/vue/00 简述', icon: 'vue' },
            {text:'组件库',link:'/zo-repo/component-library/00 简述',icon:'note'}

        ]
    },
    {
        text: '应用阶段', items: [
            { text: 'express', link: '/zo-repo/programming/express/00 简述', icon: 'express' },

            { text: 'Uniapp', link: '/zo-repo/programming/uniapp/00 简述', icon: 'uniapp' },
            { text: 'Electron', link: '/zo-repo/programming/electron/00 简述', icon: 'electron' },
            { text: 'Docker', link: '/zo-repo/programming/docker/00 简述', icon: 'docker' },
            { text: 'MySQL', link: '/zo-repo/programming/mysql/00 简述', icon: 'mysql' },
            { text:'Sqlite',link:'/zo-repo/programming/sqlite/00 简述' , icon:'sqlite'},
            { text: 'cocos', link: '/zo-repo/cocos-creator/00 简述', icon: 'cocoscreator' }

        ]
    }
]
</script>