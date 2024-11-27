// 网址导航页面的网址数据
export const sites_data = [
    {
        value: '常用网址',
        children: [
            {
                value: '最近常用',
                children: [
                    {
                        value: 'bilibili',
                        link: 'https://www.bilibili.com/',
                        icon: 'bilibili3',
                        intro: '国内著名的长视频社区',
                        classone: '常用',
                        classtwo: '最近常用',
                    },
                    {
                        value: 'Github',
                        link: 'https://github.com/',
                        icon: 'github',
                        intro: '知名的代码托管平台',
                    },
                    {
                        value: 'Gmail',
                        link: 'https://mail.google.com/',
                        icon: 'gmail',
                        intro: '谷歌邮箱'
                    },
                    {
                        value: 'PP直连',
                        link: 'https://www.ppzhilian.com/',
                        icon: 'ppzl',
                        intro: '可跨端传送数据、剪切板'
                    },
                    {
                        value: 'WPS',
                        link: 'https://www.kdocs.cn/latest',
                        icon: 'wps',
                        intro: '在线文档编辑'
                    }
                ]
            },
            {
                value: '自媒体',
                children: [
                    {
                        value: '微信公众号',
                        icon: 'wechat',
                        intro: "老牌自媒体平台",
                        link: 'https://mp.weixin.qq.com/'
                    },
                    {
                        value: '小黑盒',
                        link: 'https://www.xiaoheihe.cn',
                        icon: 'xiaoheihe',
                        intro: "玩家社区"
                    }
                ]
            }
        ]

    },
    {
        value: '网络云盘',
        children: [
            {
                value: '云盘存储',
                children: [
                    {
                        value: '123网盘',
                        link: 'https://www.123pan.com',
                        icon: '123pan',
                        intro: '版本答案，可以做直链'
                    },
                    {
                        value: '蓝奏云盘',
                        link: 'https://pc.woozooo.com/mydisk.php',
                        icon: 'lzy',
                        intro: '不限容量，限大小',
                        words: '',

                    },
                    {
                        value: '阿里云盘',
                        link: 'https://www.aliyundrive.com/drive/file/backup',
                        icon: 'aliyunpan',
                        intro: '已经限速的不限速网盘'
                    },


                    {
                        value: '迅雷网盘',
                        link: 'https://pan.xunlei.com/',
                        icon: 'xunlei',
                        intro: '老牌网盘'
                    },
                    {
                        value: '百度网盘',
                        link: 'https://pan.baidu.com/disk/main#/index?category=all',
                        icon: 'baidupan',
                        intro: '越来越贵，越来越臃肿'
                    },
                    {
                        value: '夸克网盘',
                        link: 'https://pan.quark.cn/list#/list/all',
                        icon: 'quark',
                        intro: '不太了解'
                    },
                    {
                        value: 'PikPak',
                        link: 'https://mypikpak.com/drive/all',
                        icon: 'pikpak',
                        intro: '动作主题影院'
                    },
                    {
                        value: 'Alist',
                        link: 'http://127.0.0.1:5244/',
                        icon: 'alist',
                        intro: 'alist的浏览器本地端口地址'
                    },
                    {
                        value: 'Alist',
                        link: 'https://alist.nn.ci/zh/',
                        icon: 'alist',
                        intro: 'alist的官网与文档说明'
                    },
                    {
                        value: 'Alist',
                        link: 'https://github.com/alist-org/docs',
                        icon: 'alist',
                        intro: 'Alist的 Github 仓库地址'
                    },
                ]
            },
            {
                value: '下载与网络',
                children: [
                    {
                        value: 'v2',
                        link: 'https://github.com/2dust/v2rayN',
                        icon: 'v2',
                        intro: 'Github加速器'
                    },
                    {
                        value: '顶级',
                        link: 'https://xn--mes358a9urctx.com/#/dashboard',
                        icon: 'proxy',
                        intro: '🚀'
                    },
                    {
                        value: '稳连云',
                        link: 'https://xn--kbt152elqdgyu.com/',
                        icon: 'proxy',
                        intro: '🚀'
                    }
                ]
            }
        ]

    },
    {
        value: '服务器商',
        children: [
            {
                value: '国内厂商',
                children: [
                    {
                        value: '华为云',
                        link: 'https://www.huaweicloud.com/',
                        icon: 'huaweiyun',
                        intro: '遥遥领先'
                    },
                    {
                        value: '阿里云',
                        link: 'https://home.console.aliyun.com/home/dashboard/ProductAndService',
                        icon: 'aliyun',
                        intro: '99元一年'
                    },
                    {
                        value: '腾讯云',
                        link: 'https://console.cloud.tencent.com/',
                        icon: 'tencent',
                        intro: '企鹅的域名还是蛮便宜的'
                    },
                    {
                        value: '七牛云',
                        link: 'https://qmall.qiniu.com/',
                        icon: 'qiniu',
                        intro: '云服务器商家'
                    },
                    // {
                    //     value: '稳连云',
                    //     link: 'https://xn--9kqq77hqun.me/#/dashboard',
                    //     icon: 'proxy',
                    //     intro: '还可以，蛮稳定'
                    // },

                ]
            },
            {
                value: '国外厂商',
                children: [
                    {
                        value: 'vercel',
                        link: 'https://vercel.com/',
                        icon: 'vercel',
                        intro: '可以同步 Github Page 的平台'

                    }
                ]
            }
        ]

    },
    {
        value: '工具软件',
        children: [
            {
                value: '普通工具软件',
                children: [
                    {
                        value: 'geek',
                        link: 'https://geekuninstaller.com/download',
                        icon: 'tool',
                        intro: '卸载工具'
                    },


                    {
                        value: 'winrar',
                        link: 'https://www.win-rar.com/',
                        icon: 'winrar',
                        intro: '解压软件'
                    },

                    {
                        value: 'VMware',
                        link: 'https://www.vmware.com/products/workstation-pro/workstation-pro-evaluation.html',
                        icon: 'vmware',
                        intro: '虚拟机'
                    },
                    {
                        value: 'snipaste',
                        link: 'https://zh.snipaste.com/',
                        icon: 'snipaste',
                        intro: '好用的截图神器'
                    },
                    {
                        value: 'WPS',
                        link: 'https://www.wps.cn/',
                        icon: 'wps',
                        intro: '国产办公软件'
                    },


                    {
                        value: 'umi-ocr',
                        link: 'https://github.com/hiroi-sora/Umi-OCR/releases',
                        icon: 'github',
                        intro: '截图、OCR工具'
                    },

                    {
                        value: 'motrix',
                        link: 'https://motrix.app/',
                        icon: 'motrix',
                        intro: '下载器'
                    },


                    {
                        value: 'PicGo',
                        link: 'https://github.com/Molunerfinn/PicGo/releases/',
                        icon: 'picgo',
                        intro: '图床工具'
                    }

                ]
            },

            {
                value: '普通工具网站',
                children: [
                    {
                        value: '格式转换',
                        // link: 'https://convertio.co/zh/',
                        link: 'https://www.aconvert.com/cn/image/png-to-svg/',
                        icon: 'convert',
                        intro: 'PNG-SVG'
                    },
                    {
                        value: '格式转换',
                        link: 'https://convertio.co/zh/',
                        icon: 'convert',
                        intro: '字体格式转换'
                    },
                    {
                        value: 'GPT',
                        link: 'https://chatgpt.com/',
                        icon: 'gpt',
                        intro: '强大的AI大模型'
                    },
                ]
            },
            {
                value: '编程工具软件',
                children: [

                    {
                        value: 'Desktop',
                        link: 'https://desktop.github.com/',
                        icon: 'desktop',
                        intro: 'Git可视化，Github出品',
                        words: '',

                    },

                    {
                        value: 'hbuilderx',
                        link: 'https://www.dcloud.io/hbuilderx.html',
                        icon: 'hbuilderx',
                        intro: 'uniapp捆绑编辑器'
                    },
                    {
                        value: 'VS code',
                        link: 'https://code.visualstudio.com/',
                        icon: 'vscode',
                        intro: '前端必备编辑器'
                    },
                    {
                        value: 'heidisql',
                        link: 'https://www.heidisql.com/',
                        icon: 'heidisql',
                        intro: '好用的数据库管理工具'
                    },
                    {
                        value: 'navicat',
                        link: 'https://navicat.com.cn/download/navicat-premium',
                        icon: 'navicat',
                        intro: '知名的数据库管理工具'
                    },
                    {
                        value: 'xshell',
                        link: 'https://www.xshell.com/zh/free-for-home-school/',
                        icon: 'xshell',
                        intro: '名气很大的SHH客户机'
                    },
                    {
                        value: 'MobaXterm',
                        link: 'https://mobaxterm.mobatek.net/',
                        icon: 'mobaxterm',
                        intro: 'ssh客户机'
                    },
                ]
            },
            {
                value: '编程工具网站',
                children: [
                    {
                        value: 'shields',
                        link: 'https://shields.io/',
                        icon: 'shields',
                        intro: '徽章制作网站'
                    },
                    {
                        value: 'simpleicons',
                        link: "https://simpleicons.org/",
                        icon: 'img',
                        intro: '配合shields制作图标徽章'
                    },
                    {
                        value: '香蕉云编',
                        link: 'https://www.yunedit.com/',
                        icon: 'xjyb',
                        intro: '制作证书'

                    },
                    {
                        value: '表格生成器',
                        link: 'https://www.tablesgenerator.com/',
                        icon: 'tablesgenerator',
                        intro: '快速生成表格'

                    },
                    {
                        value: 'CSS工具网',
                        link: 'https://css.bqrdh.com/safety-color',
                        icon: 'tool',
                        intro: '解决CSS的各种需求'
                    },

                    {
                        value: '图司机',
                        link: 'https://www.tusij.com/color/palette',
                        icon: 'tool',
                        intro: '配色工具'

                    },
                    {
                        value: '零代码工具箱',
                        link: 'https://www.lingdaima.com/',
                        icon: 'tool',
                        intro: '拟态风CSS快速生成'
                    },

                ]
            },
            {
                value: '手机软件',
                children: [
                    {
                        value: 'gkd',
                        link: 'https://github.com/gkd-kit/gkd',
                        icon: 'tool',
                        intro: '跳过手机广告'
                    },
                    {
                        value: 'gkd-订阅',
                        link: "https://github.com/AIsouler/GKD_subscription",
                        icon: 'tool',
                        intro: 'gkd的订阅规则'
                    }
                ]
            }


        ]

    },
    {
        value: '社区资讯',
        children: [
            {
                value: '社交论坛',
                children: [
                    {
                        value: '知乎',
                        link: 'https://www.zhihu.com/',
                        icon: 'zhihu',
                        intro: '网络版故事会'

                    },

                    {
                        value: '百度贴吧',
                        link: 'https://tieba.baidu.com/index.html',
                        icon: 'tieba',
                        intro: '瘦死的骆驼'
                    },
                    {
                        value: 'twitter',
                        link: 'https://twitter.com/home',
                        icon: 'twitter',
                        intro: '国际版微博'
                    },
                    {
                        value: 'telegram',
                        link: 'https://web.telegram.org/k/',
                        icon: 'telegram',
                        intro: '国际版QQ群'
                    }
                ]
            },
            {
                value: '专业论坛',
                children: [
                    {
                        value: 'Github',
                        link: 'https://github.com/',
                        icon: 'github',
                        intro: '知名的代码托管平台',
                    },
                    {
                        value: 'Gitee',
                        link: 'https://gitee.com/',
                        icon: 'gitee',
                        intro: '国内版Gitee'
                    },
                    {
                        value: 'CSDN',
                        link: 'https://www.csdn.net/',
                        icon: 'csdn',
                        intro: '程序员版知乎'
                    },
                ]
            },
            {
                value: '游戏社区',
                children: [

                    {
                        value: '小黑盒',
                        link: 'https://www.xiaoheihe.cn',
                        icon: 'xiaoheihe',
                        intro: "玩家社区"
                    }

                ]
            }
        ]
    },
    {
        value: '视频网站',
        children: [
            {
                value: '国内',
                children: [
                    {
                        value: 'Bilibili',
                        link: 'https://www.bilibili.com/',
                        icon: 'bilibili',
                        intro: '水分越来越大的视频平台'
                    },
                    {
                        value: '腾讯视频',
                        link: 'https://v.qq.com/',
                        icon: 'txsp',
                        intro: '腾讯帝国'
                    },
                    {
                        value: '嗷呜动漫',
                        link: 'https://www.moedm.net/',
                        icon: 'video',
                        intro: '动漫资源网站'

                    }
                ]
            },
            {
                value: '国际',
                children: [
                    {
                        value: 'youtube',
                        link: 'https://www.youtube.com/',
                        icon: 'youtube',
                        intro: '世界上最大的视频分享平台'
                    },
                    {
                        value: '小白网',
                        link: 'https://m.xb84w.net/',
                        icon: 'xiaobai',
                        intro: '视频资源平台'
                    }
                ]
            },


        ]
    },
    {
        value: '图标图片',
        children: [
            {
                value: '图标类',
                children: [
                    {
                        value: 'iconfont',
                        link: 'https://www.iconfont.cn/',
                        icon: 'iconfont',
                        intro: '阿里旗下的图标库'
                    },
                    {
                        value: 'Emoji表情',
                        link: 'https://www.emojiall.com/zh-hans',
                        icon: 'emoji',
                        intro: 'emoji表情库'
                    },
                    {
                        value: 'shields',
                        link: 'https://www.shields.io/badges',
                        icon: 'shields',
                        intro: '徽章制作'
                    },
                    {
                        value: 'worldLogo',
                        link: 'https://worldvectorlogo.com',
                        icon: 'worldlogo',
                        intro: '世界知名的公司与产品标志'
                    },
                    {
                        value: '表情直链',
                        link: 'https://emotion.xiaokang.me/#/',
                        icon: 'publiclogo',
                        intro: '公益提供表情包直链的网站'
                    },
                ]
            },

            {
                value: '图片',
                children: [
                    {
                        value: '元气壁纸',
                        link: 'https://bizhi.cheetahfun.com/dn/c2d/',
                        icon: 'yuanqi',
                        intro: '壁纸网站'
                    },

                    {
                        value: '搜图神器',
                        link: 'https://www.soutushenqi.com/home',
                        icon: 'stsq',
                        intro: '高清壁纸网站'
                    },
                    {
                        value: '逗比拯救世界',
                        link: 'https://www.dbbqb.com/',
                        icon: 'img',
                        intro: '表情包网站'
                    }
                ]
            },

            {
                value: 'AI 绘画',
                children: [
                    {
                        value: 'playground',
                        link: 'https://playground.com/create',
                        icon: 'AI'
                    }
                ]
            }



        ]

    },

    {
        value: '编程文档',
        children: [
            {
                value: 'JS生态',
                children: [
                    {
                        value: 'Node.js',
                        link: 'https://nodejs.org/en',
                        icon: 'nodejs',
                        intro: 'JS大功臣'
                    },
                    {
                        value: 'npm',
                        link: 'https://www.npmjs.com/',
                        icon: 'npm',
                        intro: '包管理器'
                    },
                    {
                        value: 'axios',
                        link: 'https://axios-http.com/docs/intro',
                        icon: 'axios',
                        intro: '网络请求'
                    },
                    {
                        value: 'express中文网',
                        link: 'https://www.expressjs.com.cn/',
                        icon: 'express',
                        intro: 'web应用开发框架'
                    },
                    {
                        value: 'ejs',
                        link: 'https://ejs.co/',
                        icon: 'ejs',
                        intro: 'JS的模板引擎'
                    },
                    {
                        value: 'Vue',
                        link: 'https://cn.vuejs.org/',
                        icon: 'vue',
                        intro: '知名的前端框架'
                    },
                    {
                        value: 'naive-ui',
                        link: 'https://www.naiveui.com/zh-CN/light',
                        icon: 'naiveui',
                        intro: 'UI组件库'
                    },
                    {
                        value: 'element-plus',
                        link: 'https://element-plus.org/zh-CN/',
                        icon: 'elementplus',
                        intro: 'UI组件库'
                    },
                    {
                        value: 'electron',
                        link: 'https://www.electronjs.org/zh/docs/latest/',
                        icon: 'electron',
                        intro: '桌面应用程序js开发'
                    },
                    {
                        value: 'Expo',
                        link: 'https://expo.dev/',
                        icon: 'expo',
                        intro: 'react制作app'
                    },
                    {
                        value: 'uniapp',
                        link: 'https://uniapp.dcloud.net.cn/quickstart.html#',
                        icon: 'uniapp',
                        intro: 'bug不断，捆绑生态'
                    },
                    {
                        value: 'unicloud',
                        link: 'https://unicloud.dcloud.net.cn/',
                        icon: 'unicloud',
                        intro: 'uni的配套服务器'
                    }
                ]
            },
            {
                value: '其他',
                children: [

                    {
                        value: 'vxe-table',
                        link: 'https://vxetable.cn/',
                        icon: 'vxe',
                        intro: 'vue表格'
                    },
                    {
                        value: 'Markdown',
                        link: 'https://markdown.com.cn/basic-syntax/',
                        icon: 'markdown',
                        intro: '简单却实用的标记语言'
                    },
                    {
                        value: 'JS文档',
                        link: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript',
                        icon: 'javascript',
                        intro: '提供 JS 的api查询',
                    },
                    {
                        value: 'docker',
                        link: 'https://www.docker.com/',
                        icon: 'docker',
                        intro: '命令行版的虚拟机'
                    }
                ]
            }

        ]
    },
    {
        value: '资源网站',
        children: [
            {
                value: '影视资源',
                children: [
                    {
                        value: '猫狸盘搜',
                        link: 'https://www.alipansou.com/',
                        icon: 'maoli',
                        intro: '阿里云盘资源'
                    },
                ]
            },
            {
                value: '动漫资源',
                children: [
                    {
                        value: '动漫啦',
                        link: 'https://www.dongman.la/',
                        icon: 'dongman',
                        intro: '漫画资源'
                    },

                    {
                        value: 'AGE',
                        link: 'https://www.agedm.org/',
                        icon: 'dongman',
                        intro: '动漫资源网站'
                    },

                    {
                        value: 'AGE-仓库',
                        link: 'https://github.com/agefanscom/website',
                        icon: 'dongman',
                        intro: 'AGE 地址更新'
                    }
                ]
            },
            {
                value: '小说',
                children: [{
                    value: '天籁小说',
                    link: 'https://tianlai100.com',
                    icon: 'book',
                    intro: '本平台提供的新小说资源均是搜集自各个网络平台.'
                }]
            },

            {
                value: '电子书',
                children: [
                    {
                        value: 'Z-Library',
                        link: 'https://z-lib.io/',
                        icon: 'z-lib',
                        intro: '电子书图书馆'
                    },
                ]
            },
            {
                value: '电脑相关',
                children: [
                    {
                        value: 'KMS',
                        link: 'https://kms.cx/',
                        icon: 'kms',
                        intro: '激活系统'
                    },
                    {
                        value: 'MSDN',
                        link: 'https://msdn.itellyou.cn/',
                        icon: 'microsoft',
                        intro: '系统镜像站点'
                    },
                    {
                        value: '油叉',
                        link: 'https://greasyfork.org/zh-CN',
                        icon: 'greasyfork',
                        intro: '油猴脚本库'
                    },
                    {
                        value: '软件管家',
                        link: 'https://mp.weixin.qq.com/s/VfWKQ4WC2gsDGqdTC-wUkQ',
                        icon: 'wechat',
                        intro: '提供各种学习版软件'
                    },
                ]
            },
            {
                value: '其他',
                children: [

                    {
                        value: 'qwerty-learner',
                        link: 'https://gitee.com/KaiyiWing/qwerty-learner',
                        icon: 'qwertylearner',
                        intro: 'coder背单词的软件'
                    }
                ]
            }



        ]
    },
    {
        value: '游戏相关',
        children: [
            {
                value: '游戏平台',
                children: [
                    {
                        value: 'steam',
                        link: 'https://store.steampowered.com/',
                        icon: 'steam',
                        intro: '玩物丧志、快乐至上'
                    },
                    {
                        value: 'epic',
                        link: 'https://store.epicgames.com/en-US/',
                        icon: 'epic',
                        intro: '知名游戏白嫖平台'
                    },
                    {
                        value: 'humblebundle',
                        link: 'https://zh.humblebundle.com/',
                        icon: 'humblebundle',
                        intro: '慈善游戏月包平台'
                    }
                ]
            },

            {
                value: '游戏辅助',
                children: [
                    {
                        value: 'nexusmods',
                        link: 'https://www.nexusmods.com/',
                        icon: 'nexusmods',
                        intro: 'n网，MOD资源平台'
                    },
                    {
                        value: 'curseforge',
                        link: 'https://www.curseforge.com/',
                        icon: 'curseforge',
                        intro: '模组平台'
                    },

                    {
                        value: 'wemod',
                        link: 'https://www.wemod.com/zh',
                        icon: 'wemod',
                        intro: '比较好用的游戏修改器'
                    },

                    {
                        value: '风灵月影',
                        link: 'https://flingtrainer.com/',
                        icon: 'flyy',
                        intro: '国内知名的游戏修改器'
                    },
                    {
                        value: 'hmcl',
                        link: 'https://github.com/HMCL-dev/HMCL/releases',
                        icon: 'hmcl',
                        intro: '开源的MC启动器'
                    },
                    {
                        value: 'PCL2',
                        link: 'https://afdian.net/a/LTCat',
                        icon: 'pcl2',
                        intro: '我的世界启动器'
                    },



                ]
            },

            {
                value: '游戏资源',
                children: [
                    {
                        value: 'Game520',
                        link: 'https://www.gamer520.com',
                        icon: 'game',
                        intro: '官网'
                    },
                    {
                        value: 'Game520',
                        link: 'https://sway.cloud.microsoft/1zyVegf0n3cHdR8o',
                        icon: 'game',
                        intro: '防失联文档'
                    },
                ]
            },
            {
                value: '游戏攻略与资讯',
                children: [
                    {
                        value: 'MC百科',
                        link: 'https://www.mcmod.cn/',
                        icon: 'mcmod',
                        intro: 'MC的攻略网站'
                    },
                    {
                        value: '小黑盒',
                        link: 'https://www.xiaoheihe.cn/community/user/post_list',
                        icon: 'xiaoheihe',
                        intro: "玩家社区"
                    },
                    {
                        value: '挂刀行情网',
                        link: 'https://www.iflow.work/steam/',
                        icon: 'web',
                        intro: 'steam 倒余额'
                    },
                    {
                        value: '挂刀计算器',
                        link: 'https://www.csgola.com/calc/',
                        icon: 'web',
                        intro: '折扣比例计算'
                    }
                ]
            },
            {
                value: '加速器',
                children: [
                    {
                        value: 'steam++',
                        link: 'https://steampp.net/',
                        icon: 'steampp',
                        intro: '游戏加速器'
                    },
                    {
                        value: 'steam++',
                        link: 'https://github.com/BeyondDimension/SteamTools/releases',
                        icon: 'steampp',
                        intro: 'Github 地址'
                    },
                ]
            },
            {
                value: '游戏开发',
                children: [
                    {
                        value: 'Cocos Creator',
                        link: 'https://www.cocos.com/creator',
                        icon: 'cocoscreator',
                        intro: 'ts语言开发游戏'
                    },
                ]
            }

        ]
    },
    {
        value: '博客网站',
        children: [
            {
                value: '综合性博客',
                children: [
                    {
                        value: '30工具网',
                        link: '30aitool.com',
                        icon: 'tool',
                        intro: '工具合集'
                    },

                    {
                        value: '零度博客',
                        link: 'https://www.freedidi.com/',
                        icon: 'ldjs',
                        intro: '很多有用的内容'
                    },
                    {
                        value: '资源核',
                        link: 'https://www.onezyh.cn/',
                        icon: 'blog',
                        intro: '一般'
                    },
                    {
                        value: 'ShellRaining',
                        link: 'https://shellraining.github.io/',
                        icon: 'blog',
                        intro: 'shellRaining的博客'
                    },
                    {
                        value: '系统极客',
                        link: 'https://www.sysgeek.cn/windows/',
                        icon: 'xtjk',
                        intro: '关于电脑的网站'
                    },
                    {
                        value: '长乐未央',
                        link: 'https://clwy.cn/',
                        icon: 'blog',
                        intro: '买网课的，但是课程还行'
                    }
                ]
            },

            {
                value: '个人技术博客',
                children: [
                    {
                        value: '鑫空间',
                        link: 'https://www.zhangxinxu.com/',
                        icon: 'personal',
                        intro: '张鑫宇的博客，具有许多学习价值，存在干货。'
                    },
                    {
                        value: '阮一峰',
                        link: 'https://www.ruanyifeng.com/blog/',
                        icon: 'personal',
                        intro: '挺出名的前端大佬'
                    },
                    {
                        value: '茂茂物语',
                        link: 'https://notes.fe-mm.com/',
                        icon: 'vitepress',
                        intro: 'vitepress前端博客'
                    },
                    {
                        value: 'WL博客',
                        link: 'https://whlit.github.io/',
                        icon: 'vitepress',
                        intro: 'vitepress博客'
                    },

                    {
                        value: '子卿博客',
                        link: 'https://zichin.com/blog/',
                        icon: 'vitepress',
                        intro: 'vitepress博客'
                    },
                    {
                        value: '粥里有勺糖',
                        link: 'https://sugarat.top/',
                        icon: 'vitepress',
                        intro: '目前发现的，功能比较花哨的vitepress博客'
                    }


                ]
            },
            {
                value: '资源博客',
                children: [

                ]
            }


        ]
    },
    {
        value: '公众服务',
        children: [
            {
                value: '服务',
                children: [
                    {
                        value: '广州图书馆',
                        link: 'https://www.gzlib.org.cn/',
                        icon: 'gzlib',
                        intro: '周末小孩太多'
                    },
                    {
                        value: '法律法规数据库',
                        link: 'https://flk.npc.gov.cn/',
                        icon: 'book',
                        intro: '收录了以往与现行的法律法规，是权威性的官方网站。'
                    },

                    {
                        value: '国家开发银行',
                        link: 'https://sls.cdb.com.cn/',
                        icon: 'cdb',
                        intro: '国家的人文关怀'
                    }
                ]
            }
        ]

    }
]