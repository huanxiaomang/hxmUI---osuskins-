<template>
    <div class="btn-container" :style="{ background: `${type === 'no' ? '#5D4C54' : '#4C5D57'}` }">
        <template v-if="type === 'default'">
            <div class="text default">
                <slot></slot>
            </div>
        </template>
        <template v-if="type === 'yes'">
            <div class="icon">
                <svg viewBox="0 0 1024 1024" fill="#94A8A1">
                    <g>
                        <path d="M864 128l-480 480-224-224-160 160 384 384 640-640z"></path>
                    </g>
                </svg>
            </div>

            <div class="text common">
                <slot></slot>
            </div>
        </template>
        <template v-if="type === 'no'">
            <div class="icon">
                <svg viewBox="0 0 1024 1024" fill="#A8949E">
                    <g>
                        <path
                            d="M1014.662 822.66c-0.004-0.004-0.008-0.008-0.012-0.010l-310.644-310.65 310.644-310.65c0.004-0.004 0.008-0.006 0.012-0.010 3.344-3.346 5.762-7.254 7.312-11.416 4.246-11.376 1.824-24.682-7.324-33.83l-146.746-146.746c-9.148-9.146-22.45-11.566-33.828-7.32-4.16 1.55-8.070 3.968-11.418 7.31 0 0.004-0.004 0.006-0.008 0.010l-310.648 310.652-310.648-310.65c-0.004-0.004-0.006-0.006-0.010-0.010-3.346-3.342-7.254-5.76-11.414-7.31-11.38-4.248-24.682-1.826-33.83 7.32l-146.748 146.748c-9.148 9.148-11.568 22.452-7.322 33.828 1.552 4.16 3.97 8.072 7.312 11.416 0.004 0.002 0.006 0.006 0.010 0.010l310.65 310.648-310.65 310.652c-0.002 0.004-0.006 0.006-0.008 0.010-3.342 3.346-5.76 7.254-7.314 11.414-4.248 11.376-1.826 24.682 7.322 33.83l146.748 146.746c9.15 9.148 22.452 11.568 33.83 7.322 4.16-1.552 8.070-3.97 11.416-7.312 0.002-0.004 0.006-0.006 0.010-0.010l310.648-310.65 310.648 310.65c0.004 0.002 0.008 0.006 0.012 0.008 3.348 3.344 7.254 5.762 11.414 7.314 11.378 4.246 24.684 1.826 33.828-7.322l146.746-146.748c9.148-9.148 11.57-22.454 7.324-33.83-1.552-4.16-3.97-8.068-7.314-11.414z">
                        </path>
                    </g>
                </svg>
            </div>

            <div class="text common no">
                <slot></slot>
            </div>
        </template>
    </div>
</template>

<script setup lang='ts'>
import { PropType } from 'vue';
import { ButtonType } from './constants';




defineProps<{ type: ButtonType }>();



</script>

<style lang="scss" scoped>
svg {
    width: 20px;
    height: 20px;
}




.btn-container {
    width: 145px;
    height: 47px;
    user-select: none;
    border-radius: 10px;
    position: relative;
    display: flex;
    overflow: hidden;
    transition: all 0.3s ease;
    cursor: pointer;

    .icon {
        height: 100%;
        width: 40px;
        display: flex;
        justify-content: center;
        align-items: center;

    }

    .text {
        font-size: 18px;
        font-weight: bold;
        position: absolute;
        display: flex;

        width: 100%;
        height: 100%;
        background-color: #556861;
        z-index: 2;
        border-radius: 10px;
        align-items: center;

        &.default {
            justify-content: center;
            color: #A8B8B3;
        }

        &.common {
            left: 40px;
            padding-left: 12px;
            color: #A8B8B3;
        }

        &.no {
            background: #68555E;
            color: #B8A8B0;
        }

    }

    &:hover {
        filter: brightness(120%);
        transform: translateY(-1px);
    }

    &:active {
        filter: brightness(90%);
        transform: translateY(2px);
    }


}
</style>