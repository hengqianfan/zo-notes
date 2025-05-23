export const myNav = [
    { text: '首页', link: '/' },

    { text: '网站', link: '/zo-pages/all-sites' },


    { text: '文章', link: '/zo-pages/all-articles' },


    { text: '笔记', link: '/zo-pages/notes' },

    { text: '生活', link: '/zo-pages/life' },


    {
        text: '全栈', items: [

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
                    { text: 'TypeScript', link: '/zo-repo/typescript/00 简述', icon: 'typescript' },
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
        text: '专题', items: [
            // { text: '前端生态圈', link: '/zo-pages/topic-web-design' },
            { text: '建站专题', link: '/zo-repo/build-site/00 简述' }
        ]
    },

    {
        text: '更多', items: [
            { text: '关于本站 🎁', link: '/zo-pages/about' },
            // 带锚点示范
            // { text: '更新日志 📝', link: '/zo-pages/history-updated#momo' },
            { text: '更新日志 📝', link: '/zo-pages/history-updated' },

            { text: '主题设置 ⚙', link: '/zo-pages/setting' },


            { text: '游戏世界 🎮', link: '/zo-repo/game/00 简述' },
            // { text: '法律笔记 📓', link: 'https://zocv.github.io/mo-notes-for-law/' },

            { text: 'zo-start', link: 'https://hengqianfan.github.io/zo-start/' },
            {
                text: '暂未开放', items: [

                    // { text: '工作台 🛠', link: '/me-repo/workbench/00 简述' },

                    { text: '本站·仓库镜像', link: 'https://hengqianfan.github.io/zo-notes/' },

                    { text: '本站·本地地址', link: 'http://localhost:8081/zo-notes/' },

                ]
            }



        ]
    }



]

