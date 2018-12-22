<template>
    <div class="ad">
        {{label}}
    </div>
</template>

<script>
    export default {
        props: {
            options: Object
        },
        data () {
            return {
                label: '广告位'
            }
        }
    }
</script>

<style>
    .ad {
        background: rgb(190, 21, 72);
        width: 100%;
        height: 200rpx;
        color: #fff;
        text-align: center;
        line-height: 200rpx;
    }
</style>
