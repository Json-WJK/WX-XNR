<template>
    <div class="list-two">
        <div class="item" v-for="(item, index) in goods" :key="index">
            <div class="img"></div>
            <div class="name">{{ options.productName }}</div>
            <div class="price" :style="{'font-size': options.size + 'rpx', color: options.color}">￥22</div>
        </div>
    </div>
</template>

<script>
    import wkIcon from './icon'
    export default {
        components: {
            wkIcon
        },
        props: {
            options: Object
        },
        data() {
            return {
                goods: new Array(5).fill({})
            };
        }
    };
</script>

<style scoped lang="scss">
    .list-two{
        width: 100%;
        padding: 0 5rpx 0 25rpx;
        box-sizing: border-box;
        display: flex;
        flex-wrap: wrap;
        .item{
            width: 220rpx;
            background-color: white;
            margin-right: 20rpx;
            margin-bottom: 20rpx;
            .img{
                width: 220rpx;
                height: 220rpx;
                background-color: yellow;
            }
            .name{
                width: 100%;
                font-size: 20rpx;
                line-height: 28rpx;
                padding: 10rpx 10rpx 20rpx 10rpx;
                box-sizing: border-box;
                color: #333333;
            }
        }
    }
</style>
