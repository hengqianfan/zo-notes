// 自动生成侧边栏的脚本文件
import { setAllSidebars } from '../myscript/autoSidebar'

import { myNav } from './nav'

export const themeConfig = {
    // 导航栏的网站标题
    siteTitle: 'ZONOTES',
    logo: '/icon/png/logo.png',
    nav: myNav,

    sidebar: setAllSidebars([
        ['/zo-repo/computer-init', 1],
        ['/zo-repo/build-site', 1],
        ['/zo-repo/computer', 1],
        ['/zo-repo/html', 1],
        ['/zo-repo/scss', 1],
        ['/zo-repo/javascript', 0],
        ['/zo-repo/typescript', 1],
        ['/zo-repo/nodejs', 1],
        ['/zo-repo/network-request', 1],
        ['/zo-repo/react', 1],
        ['/zo-repo/vue', 1],
        ['/zo-repo/mysql', 1],
        ['/zo-repo/sqlite', 1],
        ['/zo-repo/electron', 1],
        ['/zo-repo/uniapp', 1],
        ['/zo-repo/docker', 1],
        ['/zo-repo/express', 1],
        ['/zo-repo/vitepress', 0],
        ['/zo-repo/github', 1],
        ['/zo-repo/vscode', 1],
        ['/zo-repo/python', 1],
        ['/zo-repo/cocos-creator', 1],
        ['/zo-repo/game', 1],
        ['/zo-repo/component-library', 1],
        ['/me-repo/records', 1],
        ['/me-repo/workbench', 1]


    ]),

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
        { icon: 'github', link: 'https://github.com/zocv/zo-notes' }
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
        pattern: 'https://github.com/zocv/zo-notes/edit/main/root-docs/:path'
    }

}