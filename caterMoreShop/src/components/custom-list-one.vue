<template>
    <div class="list-one">
        <div class="item" v-for="(item, index) in goods" :key="index">
            <div class="img"></div>
            <div class="name">{{ options.productName }}</div>
            <div class="bot">
                <div class="price" :style="{'font-size': options.size + 'rpx', color: options.color}">￥{{ options.price }}</div>
                <div class="icon"><wk-icon :type="'icon--'" :size="options.iconSize" :color="options.iconColor"></wk-icon></div>
            </div>
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
    .list-one{
        width: 100%;
        padding: 0 20rpx;
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        .item{
            width: 340rpx;
            background-color: white;
            margin-bottom: 20rpx;
            .img{
                width: 340rpx;
                height: 340rpx;
                background-color: red;
            }
            .name{
                width: 100%;
                font-size: 20rpx;
                line-height: 28rpx;
                padding: 10rpx 10rpx 30rpx 10rpx;
                box-sizing: border-box;
                color: #333333;
            }
            .bot{
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 0 20rpx 10rpx 10rpx;
            }
        }
    }
</style>
