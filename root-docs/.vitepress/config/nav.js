export const myNav = [
    { text: '网址导航', link: '/zo-pages/all-sites' },


    { text: '文章聚合', link: '/zo-pages/all-articles' },

    { text: '笔记聚合', link: '/zo-pages/notes' },

    {
        text: '全栈知识', items: [

            {
                text: '【基础部分】', items: [
                    { text: 'HTML', link: '/zo-repo/html/00 简述', icon: 'html' },
                    { text: 'SCSS', link: '/zo-repo/scss/00 简述', icon: 'sass' },
                    { text: 'JavaScript', link: '/zo-repo/javascript/00 简述', icon: 'javascript' },
                    { text: 'network-request', link: '/zo-repo/network-request/00 简述', icon: 'network' }

                ]
            },

            {
                text: '【进阶知识】', items: [
                    { text: 'Node.js', link: '/zo-repo/nodejs/00 简述', icon: 'nodejs' },
                    { text: 'TypeScript', link: '/zo-repo/typescript/01 基础内容/01 介绍与安装', icon: 'typescript' },
                    { text: 'React', link: '/zo-repo/react/00 简述', icon: 'react' },
                    { text: 'Vue', link: '/zo-repo/vue/00 简述', icon: 'vue' },
                    { text: 'Componement', link: '/zo-repo/component-library/00 简述', icon: 'note' }

                ]
            },
            {
                text: '【应用阶段】', items: [
                    { text: 'Express', link: '/zo-repo/express/00 简述', icon: 'express' },
                    { text: 'Uniapp', link: '/zo-repo/uniapp/00 简述', icon: 'uniapp' },
                    { text: 'Electron', link: '/zo-repo/electron/00 简述', icon: 'electron' },
                    { text: 'Docker', link: '/zo-repo/docker/00 简述', icon: 'docker' },
                    { text: 'MySQL', link: '/zo-repo/mysql/00 简述', icon: 'mysql' },
                    { text: 'Sqlite', link: '/zo-repo/sqlite/00 简述', icon: 'sqlite' },
                    { text: 'cocos', link: '/zo-repo/cocos-creator/00 简述', icon: 'cocoscreator' }

                ]
            }
        ]
    },



    {
        text: '专题区', items: [
            { text: '前端生态圈', link: '/zo-pages/topic-web-design' },
            { text: '建站专题', link: '/zo-repo/build-site/00 简述' }
        ]
    },

    {
        text: '其他杂项', items: [
            { text: '关于本站 🎁', link: '/zo-pages/about' },
            { text: '更新日志 📝', link: '/zo-pages/history-updated#momo' },
            { text: '游戏世界 🎮', link: '/zo-repo/game/00 简述' },
            { text: '法律笔记 📓', link: 'https://zocv.github.io/mo-notes-for-law/' },
            {
                text: '暂未开放', items: [
                    { text: '实验', link: '/zo-pages/test' },

                    { text: '我的任务', link: '/zo-pages/task' },
                    { text: '我的备忘录', link: '/me-repo/records/00 简述' },
                    { text: '本站GP镜像', link: 'https://zocv.github.io/zo-notes/' },

                    { text: '本站本地地址', link: 'http://localhost:8081/zo-notes/' },

                ]
            }

        ]
    },


]

