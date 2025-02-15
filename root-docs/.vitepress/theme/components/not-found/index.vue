<template>


    <div class="nf-all">

        <div class="nf-tip">

            <div class="nf-tip-title">
                🚫 抱歉，页面错误，可能的原因有：
            </div>


            <div class="nf-tip-content">
                <ul>
                    <li> 1️⃣ 路径错误，请检查页面路径。</li>
                    <br>
                    <li> 2️⃣ 该页面是隐私页面，您并未获得授权。</li>
                    <br>
                    <li> 3️⃣ 该页面属于本地页面，未上传在线服务器，仅能本地阅览。</li>
                    <br>
                    <li> 4️⃣ 页面已被管理员删除。</li>
                </ul>
            </div>




        </div>

    </div>


    <!-- <hr>


    -->
</template>

<script setup>
</script>

<style lang="scss" scoped>
.nf-all {
    min-height: 90vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    .nf-tip {
        width: 50%;
        height: 50%;
        z-index: 10;

        .nf-tip-title {
            height: 80px;
            width: 800px;
            text-align: center;

            background-color: white;
            line-height: 80px;
            padding: 0 10px;
            border-radius: 20px;
            font-size: 30px;
            font-family: '剑豪体';

            border: 2px dashed rgb(75, 172, 168);

        }

        .nf-tip-content {
            margin-top: 20px;
            padding: 20px;

            width: 800px;
            border: 2px dashed rgb(75, 172, 168);

            background-color: white;
            line-height: 20px;
            border-radius: 20px;
            font-size: 20px;
            font-family: '楷体';
        }

    }
}

.nf-all::after {
    content: "";
    background-image: url('/others/ai-海浪背景.png');
    background-position: center center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    opacity: 0.3;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;

}
</style>