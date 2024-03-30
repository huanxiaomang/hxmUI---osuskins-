<template>
    <a :class="{ 'pic-clip-container': true, 'cover': mode === 'shadow' }" target="_blank" :href="href"
        :style="{ '--mask-image': `url(${url})`, '--bg': background }">
        <div class="mask">

            <img :src="url" alt="" srcset="">
            <svg t="1711628772905" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                p-id="5183">
                <path
                    d="M128 213.333333a85.333333 85.333333 0 0 1 85.333333-85.333333h298.666667a42.666667 42.666667 0 1 1 0 85.333333H213.333333v597.333334h597.333334v-298.666667a42.666667 42.666667 0 1 1 85.333333 0v298.666667a85.333333 85.333333 0 0 1-85.333333 85.333333H213.333333a85.333333 85.333333 0 0 1-85.333333-85.333333V213.333333zM853.333333 128a42.666667 42.666667 0 0 1 42.666667 42.666667v213.333333a42.666667 42.666667 0 1 1-85.333333 0V170.666667a42.666667 42.666667 0 0 1 42.666666-42.666667z"
                    p-id="5184"></path>
                <path
                    d="M896 170.666667a42.666667 42.666667 0 0 1-42.666667 42.666666h-213.333333a42.666667 42.666667 0 1 1 0-85.333333h213.333333a42.666667 42.666667 0 0 1 42.666667 42.666667z"
                    p-id="5185"></path>
                <path
                    d="M844.501333 179.498667a42.666667 42.666667 0 0 1 0 60.330666l-281.002666 281.002667a42.666667 42.666667 0 0 1-60.330667-60.330667l281.002667-281.002666a42.666667 42.666667 0 0 1 60.330666 0z"
                    p-id="5186"></path>
            </svg>
        </div>
    </a>
</template>

<script setup lang='ts'>

defineProps<{ url: string, href: string, mode: 'common' | 'shadow', background: 'dark' | 'bright' }>()
//             filter: drop-shadow(0.3em 0.3em 0em hsl(50, calc(var(15%) - 5%),
// calc(50 % + 4 %)));

</script>

<style lang="scss" scoped>
.pic-clip-container {
    width: 267px;
    transform: scale(1);
    transition: transform 0.4s ease;
    display: block;

    &.cover {
        filter: drop-shadow(0.3em 0.3em 0em #9e9a89);
    }

    img {
        width: 100%;
    }


    .mask {
        -webkit-mask-image: var(--mask-image);
        -webkit-mask-size: cover;
        -webkit-mask-repeat: no-repeat;
        position: relative;

        &::after {
            content: "";
            position: absolute;
            pointer-events: none;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: var(--bg);
            z-index: 50;
            opacity: .03;
            transition: opacity 0.4s ease;
        }

        &:hover::after {
            opacity: .8;
        }

        svg {
            width: 30px;
            height: 30px;
            fill: #b7b39c;
            display: block;
            z-index: 100;
            position: absolute;
            inset: 0px;
            margin: auto;
            transition: transform 0.4s ease;
            transform: scale(0);
            pointer-events: none;
            filter: brightness(1.2);

        }


        img {
            filter: saturate(0.4);
            opacity: .6;
            transition: transform 0.4s ease;
            transform: scale(1);

            &:hover {
                transform: scale(1.15);
            }



            &:hover::after {
                opacity: 1;
            }

            &:hover~svg {
                transform: scale(1);
            }
        }


    }

    &:hover {
        transform: scale(1.03);
    }
}
</style>