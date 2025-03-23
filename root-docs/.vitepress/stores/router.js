import { defineStore } from 'pinia'
import { data as postData } from '../../zo-data/posts.data'
import { data as articleData } from '../../zo-data/articles.data'
import { getALLTags } from '../myscript/getAllTags'
import { getALLTagsSorted } from '../myscript/getAllTags'

export const useCounterStore = defineStore('counter', {
    state: () => ({ count: 0 }),
    actions: {
        increment() {
            this.count++
        }
    }
})

export const useAdminerStore = defineStore('counter', {
    state: () => ({ count: 0 }),
    actions: {
        increment() {
            this.count++
        }
    }
})

export const useThemeStore = defineStore('theme', {
    state: () => ({ searchVersion: 2, SitesShowVersion: 2 }),
    actions: {
        changeSearchVersion(mo) {
            this.searchVersion = mo
            localStorage.setItem('searchVersion', mo)
            // 刷新页面
            location.reload();
        },
        changeSitesShowVersion(mo) {
            this.SitesShowVersion = mo
            localStorage.setItem('SitesShowVersion', mo)
            // 刷新页面
            location.reload();
        }
    }
})


export const usePostDataStore = defineStore(
    'postData', {
    state: () => ({ data: postData }),
    actions: {
        // changeSearchVersion(mo) {
        //     this.searchVersion = mo
        //     localStorage.setItem('searchVersion', mo)
        //     // 刷新页面
        //     location.reload();
        // }
    }
}
)





export const useArticlesDataStore = defineStore(
    'articleData', {
    state: () => ({ data: articleData, tags: getALLTags(articleData), tagsSorted: getALLTagsSorted(articleData) }),
    actions: {
        // changeSearchVersion(mo) {
        //     this.searchVersion = mo
        //     localStorage.setItem('searchVersion', mo)
        //     // 刷新页面
        //     location.reload();
        // }
    }
}
)


