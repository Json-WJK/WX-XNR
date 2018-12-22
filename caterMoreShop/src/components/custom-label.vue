<template>
    <div class="label" :style="{'font-size': options.size + 'rpx', color: options.color}">
        {{options.label}}
    </div>
</template>

<script>
    export default {
        props: {
            options: Object
        }
    }
</script>

<style scoped lang="scss">
    .label{
        width: 100%;
        height: 120rpx;
        background-color:  #F2F2F2;
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>
