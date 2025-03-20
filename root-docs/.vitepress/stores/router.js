import { defineStore } from 'pinia'

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
    state: () => ({ searchVersion: 2 }),
    actions: {
        changeSearchVersion(mo) {
            this.searchVersion = mo
            localStorage.setItem('searchVersion', mo)
            // 刷新页面
            location.reload();
        }
    }
})