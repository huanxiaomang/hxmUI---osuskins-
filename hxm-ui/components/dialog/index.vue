<template>
    <div class="full">
        <div class="container">
            <slot></slot>

            <div class="footer">
                <slot name="footer"></slot>
            </div>
        </div>
    </div>
</template>

<script setup lang='ts'>
</script>

<style lang="scss" scoped>
.full {
    width: 100vw;
    height: 100vh;
    backdrop-filter: blur(15px);
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;

    .container {
        width: 340px;
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: hsl(50, calc(15% - 5%), calc(21% + 4%));
        z-index: 500;
        border-radius: 10px;
        box-shadow: 0 1em 13em hsl(50, calc(15% - 5%), calc(21% + 4%));

        display: flex;
        flex-direction: column;
        padding: 18px;
        align-items: center;

        &::before {
            pointer-events: none;
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(0deg, transparent 0%, hsl(50, calc(15% - 5%), calc(50% + 4%), 0.3));
            border-radius: 10px;
        }

        .footer {
            width: 100%;
        }

    }



}
</style>