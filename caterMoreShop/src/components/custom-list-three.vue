<template>
    <div class="list-three">
        <div class="item" v-for="(item, index) in goods" :key="index">
            <div class="img"></div>
            <div class="right">
                <div class="name">{{ options.productName }}</div>
                <div class="bot">
                    <div class="price" :style="{'font-size': options.size + 'rpx', color: options.color}">￥{{ options.price }}</div>
                    <div class="icon"><wk-icon :type="'icon--'" :size="options.iconSize" :color="options.iconColor"></wk-icon></div>
                </div>
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
    .list-three{
        width: 100%;
        padding: 30rpx;
        box-sizing: border-box;
        .item{
            width: 100%;
            background-color: white;
            margin-bottom: 20rpx;
            display: flex;
            align-items: center;
            .img{
                width: 220rpx;
                height: 220rpx;
                background-color: green;
                margin-right: 20rpx;
            }
            .right{
                flex: 1;
                display: flex;
                height: 220rpx;
                flex-direction: column;
                justify-content: space-between;
                .name{
                    width: 100%;
                    line-height: 50rpx;
                    font-size: 28rpx;
                    text-overflow: -o-ellipsis-lastline;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    line-clamp: 2;
                    -webkit-box-orient: vertical;
                }
                .bot{
                    display: flex;
                    justify-content: space-between;
                }
            }
        }

    }
</style>
