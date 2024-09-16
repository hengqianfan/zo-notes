// 自动生成侧边栏的脚本文件
import { setAllSidebars } from '../myscript/autoSidebar'

import { myNav } from './nav'

export const themeConfig = {
    siteTitle: 'zo-notes',
    logo: '/icon/png/logo.png',
    nav: myNav,

    sidebar: setAllSidebars([
        ['/zo-repo/computer-init', 1],
        ['/zo-repo/build-site', 1],
        ['/zo-repo/computer', 1],
        ['/zo-repo/programming/html', 1],
        ['/zo-repo/programming/scss', 1],
        ['/zo-repo/programming/javascript', 0],
        ['/zo-repo/programming/typescript', 1],
        ['/zo-repo/programming/nodejs', 1],
        ['/zo-repo/programming/network-request', 1],
        ['/zo-repo/programming/react', 1],
        ['/zo-repo/programming/vue', 1],
        ['/zo-repo/programming/mysql', 1],
        ['/zo-repo/programming/sqlite', 1],
        ['/zo-repo/programming/electron', 1],
        ['/zo-repo/programming/uniapp', 1],
        ['/zo-repo/programming/docker', 1],
        ['/zo-repo/programming/express', 1],
        ['/zo-repo/vitepress', 1],
        ['/zo-repo/github', 1],
        ['/zo-repo/vscode', 1],
        ['/zo-repo/programming/python', 1],
        ['/zo-repo/cocos-creator', 1],
        ['/zo-repo/game', 1],
        ['/zo-repo/component-library', 1],
        ['/me-repo/records', 1]

    ]),

    // outline: [1, 6],
    outline: {
        label: "页面目录",
        // 因为要占用h1做网页副标题
        level: [2, 6],
    },

    // lastUpdated: true,
    search: {
        provider: 'local',
        // provider: 'algolia'
        options: {

            translations: {

                button: {
                    buttonText: "全站搜索",
                    buttonAriaLabel: "搜索文档",
                },

                modal: {
                    noResultsText: "无法找到相关结果",
                    resetButtonTitle: "清除查询条件",
                    footer: {
                        selectText: "选择",
                        navigateText: "切换",
                    },
                },

            }
        }
    },


    docFooter: {
        prev: '上一篇',
        next: '下一篇'
    },

    socialLinks: [
        { icon: 'github', link: 'https://github.com/hengqianfan/mo-notes' }
    ],
    backToTop: {
        text: "返回顶部",
    },

    returnToTopLabel: '回到顶部',

    lastUpdated: {
        text: '最后更新时间',
        formatOptions: {
            dateStyle: 'full',
            timeStyle: 'short'
        }

    },


    editLink: {
        pattern: 'https://github.com/hengqianfan/mo-notes/edit/main/root-docs/:path'

    }


}