<template>
    <div class="cn-all">




        <div class="cn-info">
            <a class="cn-title" :href="withBase(data.link)">{{ data.title }}</a>
            <div class="cn-intro">{{ data.intro }}</div>
        </div>


        <img :src="withBase(gainIcon(data.icon))" alt="" class="cn-icon">


    </div>

</template>

<script setup>
import { withBase } from 'vitepress';
import { ref } from 'vue';
const props = defineProps(['momo'])
let data = ref(props.momo)


const gainIcon = (momo) => {

    if (momo) {
        return `/icon/png/${momo}.png`
    }
    return `/icon/png/note.png`
}

const toPage = (momo) => {
    console.log(123);

    open(`${momo}`)
}


</script>

<style lang="scss" scoped>
@import '../../style/vars.scss';


.cn-all {
    width: 530px;
    height: 210px;
    background-color: $my_bg_color_02;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border-radius: 10px;
    box-shadow: 2px 2px 3px #c3cbc5,
        -2px -2px 3px #eff9f1;


    .cn-icon {
        // margin-left: 20px;
        margin-right: 20px;
        width: 150px;
        height: 150px;
        border-radius: 10px;
        padding: 10px;
        background-color: $my_bg_color_02;
        box-shadow: 2px 2px 3px #c3cbc5,
            -2px -2px 3px #eff9f1;

    }

    .cn-info {
        margin-left: 20px;
        // margin-right: 20px;
        width: 320px;
        height: 150px;

        padding: 8px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        background-color: #eff9f1;
        box-shadow: 2px 2px 3px #c3cbc5 inset,
            -2px -2px 3px #eff9f1 inset;


        .cn-title {

            min-width: 300px;
            height: 20px;
            line-height: 20px;
            text-align: center;


            padding: 0 10px;
            font-size: 20px;

            color: black;
            color: #2e8e93;
            font-family: "剑豪体";



        }

        .cn-title:hover {

            color: #2e8e93;
            color: rgb(190, 97, 34);

            box-shadow: none;

        }

        .cn-intro {
            margin-top: 10px;
            width: 300px;
            min-height: 100px;
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            align-items: flex-start;
            padding: 8px;
            font-size: 12px;
            text-indent: 18px;
            color: rgb(11, 67, 54);
            // box-shadow: 2px 2px 3px #c3cbc5,
            //     -2px -2px 3px #eff9f1;


        }
    }


}


@media (min-width: 0) and (max-width: 62.5rem) {
    .cn-all {
        width: 320px;
        height: 140px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        border-radius: 10px;




        .cn-icon {
            margin-right: 10px;
            width: 80px;
            height: 80px;
            border-radius: 10px;
            padding: 10px;

            box-shadow: 2px 2px 3px #c3cbc5,
                -2px -2px 3px #eff9f1;

        }

        .cn-info {
            margin-left: 15px;

            width: 200px;
            height: 100px;

            padding: 8px;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;
            background-color: #eff9f1;
            box-shadow: 2px 2px 3px #c3cbc5 inset,
                -2px -2px 3px #eff9f1 inset;


            .cn-title {

                min-width: 200px;
                height: 20px;
                line-height: 20px;
                text-align: center;

                padding: 0 10px;
                font-size: 12px;

                color: black;
                color: #2e8e93;
                font-family: "剑豪体";



            }

            .cn-title:hover {

                color: rgb(190, 97, 34);

                box-shadow: none;

            }

            .cn-intro {
                margin-top: 5px;
                width: 180px;
                min-height: 100px;
                display: flex;
                flex-direction: row;
                justify-content: flex-start;
                align-items: flex-start;
                padding: 4px;
                font-size: 9px;
                line-height: 12px;
                text-indent: 1.125rem;
                color: rgb(11, 67, 54);
                // box-shadow: 2px 2px 3px #c3cbc5,
                //     -2px -2px 3px #eff9f1;


            }
        }


    }
}
</style>