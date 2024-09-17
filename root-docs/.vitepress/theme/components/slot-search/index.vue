<template>
    <div class="mysearch-all">


        <div class="search_box" @blur="reback()">
            <img class="search_engine" :src="withBase(gain_icon(now_engine.icon))" @click="show()">

            <input class="search_keyword" v-model="keyword" @keyup.enter="search_start" type="text" @blur="addKey"
                @focus="deleteKey">
        </div>

        <div class="engine_select" v-if="is_show" @click="closeSelectMenu" @mouseleave="reback">

            <img class="searchEngineIcon" :src="withBase(gain_icon(item.icon))" v-for="item in engine_list"
                @click="changeEngine(item)">


        </div>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { withBase, useData } from 'vitepress'
import { engine_list, default_engine } from '/zo-data/engine'

// 搜素引擎的选择菜单状态（出现与消失）
const is_show = ref(false)

// 打开引擎菜单
const show = () => {
    is_show.value = true
    // 为了修复BUG：站外搜索与引擎菜单同时激活悬浮样式
    let res = document.querySelector(`.mysearch-all`)
    res.classList.add('forbug')


}


// 关闭引擎菜单
const closeSelectMenu = () => {
    is_show.value = false
    // 为了修复BUG：站外搜索与引擎菜单同时激活悬浮样式
    let res = document.querySelector(`.mysearch-all`)
    res.classList.remove('forbug')
}


// 获取图标
const gain_icon = (momo) => {
    return `/icon/png/${momo}.png`
}


let now_engine = ref(default_engine)


const changeEngine = (mo) => {
    is_show.value = false
    now_engine.value = mo

}

// 实现搜索功能
const keyword = ref('站外搜索')

const search_start = () => {
    if (keyword.value == '') {
        alert('请输入')
    } else {
        window.open(`${now_engine.value.baseurl}` + `${keyword.value}`, '_blank')
        keyword.value = ''
    }
}


// 聚焦时删除提示词
const deleteKey = () => {
    if (keyword.value == '站外搜索') {
        keyword.value = ''
    }
    return
}

// 失去焦点后，提示词的恢复

const addKey = () => {
    if (keyword.value == '') {
        keyword.value = '站外搜索'
    }
    if (keyword.value == ' ') {
        keyword.value = '站外搜索'
    }


}


// 失去焦点后，将打开的引擎菜单恢回复原状

const reback = () => {


    console.log("ing");

}





</script>

<style lang="scss" scoped>
$search_max_height: 40px;
$search_max_width: 150px;


.mysearch-all {
    // 保证出现在最顶层
    z-index: 1;
    border: 1px solid aliceblue;
    margin-left: 100px;
    background-color: aliceblue;
    display: flex;
    position: relative;
    border-radius: 10px;


    .search_box {
        height: $search_max_height;
        width: $search_max_width;
        border-radius: 10px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;



        .search_engine {
            margin-left: 10px;
            width: 30px;
            height: 30px;
            border-radius: 15px;
            background-color: whitesmoke;
            padding: 2px;
        }

        .search_keyword {
            margin-right: 10px;
            background-color: white;
            width: 80px;
            height: 30px;
            border-radius: 10px;
            padding-left: 10px;
            color: gray;
        }

        .search_keyword:hover {
            color: black;
        }

        .search_icon {
            margin-right: 25px;
            width: 50px;
            height: 50px;
            border-radius: 25px;
            background-color: whitesmoke;
            padding: 2px;
        }
    }

    .engine_select {
        z-index: 1;

        position: absolute;
        height: $search_max_height;
        min-width: 500px;
        border-radius: 10px;
        background-color: #f6f6e7;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        border: 1px solid #6876e2;
        border: 2px dashed #7564e7;







        .searchEngineIcon {
            margin: 0 7px;
            // background-color: #f5dd65;
            width: 30px;
            height: 30px;
            padding: 2px;
            border-radius: 15px;
            border: 1px dashed #e1923e;
        }
    }

}

.mysearch-all:hover {
    border: 1px solid #2434ad;
}

.forbug {
    border: none !important;
}



// 屏幕小于1000px 去除外站搜索栏
@media (min-width: 0) and (max-width: 1000px) {
    .mysearch-all {
        height: 0;
        width: 0;
        display: none;

    }
}
</style>