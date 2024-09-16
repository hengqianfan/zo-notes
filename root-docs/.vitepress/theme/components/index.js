
import MySearch from './slot-search/index.vue'

import MyArticleInfo from './slot-articleInfo/index.vue'

import PageTopic from './page-of-topic/index.vue'

import PageNotes from './page-of-notes/index.vue'

import PageArticles from './page-articles/index.vue'

import PageSites from './page-of-sites/index.vue'

import PageTask from './page-task/index.vue'


import ZoNav from './zo-nav/index.vue'

import ZoHome from './zo-home/index.vue'

import ZoDoc from './zo-doc/index.vue'

import ZoImg from './zo-img/index.vue'

import ZoVideo from './zo-video/index.vue'



import CardNote from './card-note/index.vue'

import CardSite from './card-site/index.vue'

import CardEvaluation from './card-evaluation/index.vue'


import Mermaid from './zo-mermaid/index.vue'


import ZoTest from './zo-test/index.vue'



const allGlobalComponents = {
    PageSites, MySearch, MyArticleInfo, PageTopic, PageNotes, PageArticles, ZoImg,


    ZoNav,
    ZoDoc,
    ZoHome,
    ZoVideo,

    CardNote,
    CardSite,
    CardEvaluation,
    PageTask,
    Mermaid,
    ZoTest,
}

export default {
    install(app) {
        Object.keys(allGlobalComponents).forEach(key => {
            app.component(key, allGlobalComponents[key])
        })

    }
}

