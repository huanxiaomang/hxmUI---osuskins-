<template>
    <div class="container">

        <div class="title">Button</div>
        <div class="list">
            <hxm-button type="yes">明白</hxm-button>
            <hxm-button type="no">拒绝 o/</hxm-button>
            <hxm-button type="default">默认</hxm-button>
        </div>


        <div class="title">Pic-Clip</div>
        <div class="list">
            <hxm-pic-clip class="pic1" mode="shadow" background="#95927E" :url="NSFW_img"
                href="https://www.pixiv.net/en/artworks/84697729"></hxm-pic-clip>
            <hxm-pic-clip class="pic2" mode="common" background="#1E2029" :url="PREPARE_img"
                href="https://www.pixiv.net/en/artworks/84697729"></hxm-pic-clip>
        </div>


        <div class="title">Dialog</div>
        <div class="list">
            <hxm-button type="default" @click="changeDgVisible">询问窗口</hxm-button>

            <hxm-dialog class="dialog" v-show="dgVisible">
                <hxm-pic-clip class="pic" mode="shadow" background="#95927E" :url="NSFW_img"
                    href="https://www.pixiv.net/en/artworks/84697729"></hxm-pic-clip>
                <div class="text">警告，NSFW 内容!</div>
                <div class="des">此皮肤包含可能会使人不安的敏感或成人内容</div>
                <template #footer>
                    <div class="f-btns">
                        <hxm-button type="yes" @click="changeDgVisible">了解</hxm-button>
                        <hxm-button type="no" @click="changeDgVisible">拜拜 o/</hxm-button>
                    </div>

                </template>
            </hxm-dialog>


            <hxm-button type="default" @click="changeDgVisible2">确认窗口</hxm-button>
            <hxm-dialog class="dialog" v-show="dgVisible2">
                <hxm-pic-clip class="pic" mode="shadow" background="#95927E" :url="PICA_img"
                    href="https://www.pixiv.net/en/artworks/84697729"></hxm-pic-clip>
                <div class="text">等等，前面是R18内容!</div>
                <div class="des">看了很可能会变成满脑子只有涩涩的笨蛋</div>
                <template #footer>
                    <div class="f-btns">
                        <hxm-button type="default" @click="changeDgVisible2">我要狠狠地看！</hxm-button>

                    </div>

                </template>
            </hxm-dialog>

        </div>

    </div>

</template>
<script setup lang="ts">
import { ref } from 'vue';
import NSFW_img from './assets/images/nsfw.png'
import PREPARE_img from './assets/images/prepare.png'
import PICA_img from './assets/images/pica.png'

const dgVisible = ref(false);
const dgVisible2 = ref(false);

const changeDgVisible = () => dgVisible.value = !dgVisible.value;
const changeDgVisible2 = () => dgVisible2.value = !dgVisible2.value;

</script>
<style scoped>
.container {
    padding: 40px;
    background: #59564A;
    background: #1E2029;
    height: 100vh;

    .title {
        color: #c6c4af;
        margin: 60px 0 30px 0;
        font-size: 40px;
        font-weight: bold;
    }

    .list {
        display: flex;
        gap: 40px;

        .pic2 {
            width: 150px;
        }

        .dialog {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            color: #95927E;
            font-weight: bold;

            .pic {
                width: 267px;
            }

            .text {
                font-size: 30px;
                margin-top: 25px;
            }

            .des {
                font-size: 20px;
                margin-top: 15px;
                margin-bottom: 20px;
                text-align: center;
                line-height: 26px;
                opacity: .8;
            }

            .f-btns {
                display: flex;
                justify-content: center;
                gap: 10px;
            }

        }
    }


}
</style>
