<template>
    <div class="list-four">
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
    .list-four{
        width: 100%;
        .item{
            width: 100%;
            padding: 30rpx;
            box-sizing: border-box;
            .img{
                width: 690rpx;
                height: 690rpx;
                background-color: blue;
            }
            .name{
                width: 100%;
                line-height: 60rpx;
                padding: 20rpx 20rpx 40rpx 20rpx;
                box-sizing: border-box;
            }
            .bot{
                width: 100%;
                padding: 0 20rpx;
                box-sizing: border-box;
                display: flex;
                justify-content: space-between;
            }
        }
    }
</style>
