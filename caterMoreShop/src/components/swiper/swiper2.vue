<template>
    <div class="swiper2">
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
        <div class="present">
            <div v-for="(item,index) in options.items[0].list" :key="index" :class="swiperCurrent == index?'ify':''">{{index+1}}</div>
        </div>
    </div>
</template>
<script>
    export default{
        props: {
            options:Object
        },
        data(){
            return{
                swiperCurrent:0
            }
        },
        methods:{
            current(e){
                this.swiperCurrent=e.mp.detail.current
            },
            navigation(i){
                this.$router.push({path:'/pages/integral',isTab: true})
            }
        }
    }
</script>
<style scoped lang="scss">
    .swiper2{
        position: relative;
        .present{
            width:100%;
            position: absolute;
            bottom:20rpx;
            display: flex;
            justify-content: center;
            div{
                width:36rpx;
                height:30rpx;
                margin:0 4rpx;
                text-align:center;
                color:#000;
            }
        }
        .imgs{
            width:100%;
            height:100%;
        }
        .ify{
            background:#000 !important;
            color:#fff !important;
        }
    }
    
</style>