<template>

    <div class="ps-all">

        <el-card style="min-width: 600px">
            <template #header>
                <div class="card-header">
                    <span>普通设置</span>
                </div>
            </template>

            <div class="row">
                <div class="name">是否关闭外链图标:</div>

                <br>

                <div class="option">

                    (该功能维护中)

                </div>

            </div>

            <div class="intro">默认情形下 , 菜单栏的外链会携带↗图标</div>

            <div class="row">
                <div class="name">评论区:</div>

                <br>
                <div class="option">

                    <el-radio-group v-model="CommentKind">

                        <el-radio :value="1">Giscus</el-radio>

                    </el-radio-group>

                </div>

            </div>

            <div class="row">
                <div class="name">站外搜索框:</div>
                <br>
                <div class="option">

                    <el-radio-group v-model="SearchVersion">

                        <el-radio :value="1" @click="theme.changeSearchVersion(1)">彩色风格</el-radio>

                        <el-radio :value="2" @click="theme.changeSearchVersion(2)">黑色风格</el-radio>
                    </el-radio-group>

                </div>

            </div>

            <div class="intro">彩色风格是废案，建议使用黑色风格</div>

        </el-card>

        <br>



        <el-card style="min-width: 600px">
            <template #header>
                <div class="card-header">
                    <span>文章区设置</span>
                </div>
            </template>

            <div class="row">
                <div class="name">显示模式:</div>

                <div class="option">

                    <el-radio-group v-model="ArticleShow">

                        <el-radio :value="1" @click="setArticleShow(1)">卡片模式</el-radio>
                        <el-radio :value="2" @click="setArticleShow(2)">列表模式</el-radio>

                    </el-radio-group>
                </div>
            </div>

            <div class="intro">卡片模式已停止维护,下面设置仅对列表模式生效</div>



        </el-card>

        <br>


        <el-card style="min-width: 600px">
            <template #header>
                <div class="card-header">
                    <span>隐私设置</span>
                </div>
            </template>

            <div class="row">
                <div class="name">管理员模式:</div>

                <div class="option">

                    <el-switch v-model="isAdministrator" class="ml-2"
                        style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949" />
                </div>
            </div>


            <hr class="hr-gray">



            <div class="row">
                <div class="name">开启测试页面:</div>

                <div class="option">

                    <el-button round size="small" @click="toTestPage()">开启</el-button>



                </div>
            </div>



        </el-card>



    </div>

</template>

<script setup>
import { ref, watch, reactive, onMounted } from 'vue'
import { admin_key } from '../../../../zo-data/key';
import { useRouter } from 'vitepress'
import { useThemeStore } from '../../../stores/router'

const theme = useThemeStore()

const SearchVersion = localStorage.getItem('searchVersion') ? ref(Number(localStorage.getItem('searchVersion'))) : ref(theme.searchVersion)


const ArticleShow = ref(2)


onMounted(() => {

    if (localStorage.getItem('ArticleShow')) {
        ArticleShow.value = Number(localStorage.getItem('ArticleShow'))
    }
})

const setArticleShow = (num) => {
    localStorage.setItem('ArticleShow', num)
}

const CommentKind = ref(1)

const SearchKind = ref(1)

// 默认管理员状态
let isAdministrator = ref(false)
// 获取本地权限状态
const getState = () => {
    let res = localStorage.getItem('admin')
    if (res == admin_key) {
        isAdministrator.value = true
    }
}

getState()


// 此处ref数据不用.value
watch(isAdministrator, (newValue, oldValue) => {
    if (newValue == true) {
        localStorage.setItem('admin', admin_key)
    } else {
        localStorage.setItem('admin', 0)
    }
})


const router = useRouter()

const toTestPage = () => {
    router.go('/zo-notes/zo-pages/test')
}




</script>

<style lang="scss" scoped>
.card-header {
    font-family: '优设标题黑';
}


.pic {
    width: 400px;
    height: 160px;
}

.intro {
    font-size: 12px;
    color: rgb(161, 157, 157);
}

.ps-all {
    width: 100%;
    min-height: 50vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding-top: 20px;

}

.row {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    font-size: 14px;

    .name {
        font-weight: 600;
    }

    .option {
        margin-left: 20px;
    }

}
</style>