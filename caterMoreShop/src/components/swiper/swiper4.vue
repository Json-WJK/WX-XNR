<template>
    <div class="custom-swiper4">
        <swiper
            :autoplay="options.autoplay"
            :interval="options.interval"
            :duration="1000"
            :style="{height: options.height*2 + 'rpx'}"
            indicator-active-color="#fff"
            indicator-dots
            circular
        >
            <block v-for="(item,index) in options.items[0].list" :key="index">
                <swiper-item>
                    <img :src="item.imageUrl" class="imgs" @click="navigation(index)">
                </swiper-item>    
            </block>    
        </swiper>
    </div>
</template>

<script>
    export default {
        props: {
            options: Object
        },
        methods: {
            navigation(i){
                this.$router.push({path:'/pages/integral',isTab: true})
            }
        },
        mounted() {
            console.log(this.options)
        },
    }
</script>

<style scoped lang="scss">
    .custom-swiper4 {
        width: 100%;
        .imgs{
            height:100%;
            width:100%;
        }
    }
</style>
