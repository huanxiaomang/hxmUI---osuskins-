<template>
    <Transition>
        <div class="container mes" v-if="isShow">
            <svg t="1711771029961" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                p- id="4251">
                <path
                    d="M512 64a448 448 0 1 1 0 896A448 448 0 0 1 512 64z m0 64a384 384 0 1 0 0 768A384 384 0 0 0 512 128z m204.8 224l51.2 50.304L460.8 704 256 502.848l51.2-50.304L460.8 603.52l256-251.456z"
                    p-id="4252"></path>
            </svg>
            {{ msg }}
        </div>
    </Transition>
</template>

<script setup lang='ts'>
import { onMounted, ref } from 'vue';
const props = defineProps({
    msg: {
        type: String,
        required: true
    },
    delay: {
        type: Number,
        default: 1500
    }
})
const isShow = ref(false);



onMounted(() => {
    isShow.value = true;
    setTimeout(() => {
        isShow.value = false;
    }, props.delay);
})
</script>

<style lang="scss" scoped>
.container.mes {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 45px;
    background-color: #adbbb6;
    color: #46685b;
    filter: brightness(120%);
    border-radius: 5px;
    padding: 10px;
    position: absolute;
    z-index: 500;
    top: 30px;
    left: 50%;
    user-select: none;

    svg {
        height: 80%;
        fill: #46685b;
        margin-right: 6px;
        vertical-align: baseline;
        transform: translateY(calc(8%));
    }
}

.v-enter-active,
.v-leave-active {
    transition: all 0.5s ease;
}

.v-enter-from,
.v-leave-to {
    transform: translateY(-100%);
    opacity: 0;
}
</style>
