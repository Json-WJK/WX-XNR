<template>
    <div class="swiper1">
        <swiper
            :autoplay="options.autoplay"
            :interval="options.interval"
            duration="1000"
            circular
            :style="{height: options.height*2 + 'rpx'}"
            @change="current"
        >
            <block v-for="(item,index) in options.items[0].list" :key="index">
                <swiper-item>
                    <img :src="item.imageUrl" class="imgs" @click="navigation(index)">
                </swiper-item>    
            </block>    
        </swiper> 
        <div class="index">
            {{swiperCurrent+1}}/{{options.items[0].list.length}}
        </div>
    </div>
</template>
<script>
    export default{
        props: {
            options: Object
        },
        data(){
            return{
                swiperCurrent:0,      
            }
        },
        methods: {
            current(e){
                this.swiperCurrent=e.mp.detail.current
            },
            navigation(i){
                this.$router.push({path:'/pages/integral',isTab: true})
            }
        },
        mounted(){
            console.log(this.options)
        }
    }
</script>
<style scoped lang="scss">
    .swiper1{
        position: relative;
        width:100%;
        .index{
            position: absolute;
            bottom:60rpx;
            right:60rpx;
            color:#fff;
            background:#73808B60;
            width:60rpx;
            height:60rpx;
            border-radius:50%;
            font-size:30rpx;
            line-height:60rpx;
            text-align: center;
        }
        .imgs{
            width:100%;
            height:100%;
        }
    }
    
</style>