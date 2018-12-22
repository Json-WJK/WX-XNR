<template>
    <div class="swiper3">
        <swiper
            :current="swiperCurrent"
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
        <div class="last" @click="ify('last')">
            <div class="arrow-l"></div>
        </div>
        <div class="next" @click="ify('next')">
            <div class="arrow-r"></div>
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
                swiperCurrent:'0',
            }
        },
        methods:{
            current(e){
                this.swiperCurrent=e.mp.detail.current
            },
            ify(move){
                let index = this.swiperCurrent
                let length = this.options.items[0].list.length-1
                if(move == "last"){
                    if(this.swiperCurrent == 0)
                    this.swiperCurrent = length
                    else
                    this.swiperCurrent=index-1
                    console.log(this.swiperCurrent)
                }
                else if(move == "next"){
                    if(this.swiperCurrent == length)
                    this.swiperCurrent = 0
                    else
                    this.swiperCurrent = index+1
                    console.log(this.swiperCurrent)
                }  
            },
            navigation(i){
                this.$router.push({path:'/pages/integral',isTab: true})
            }
        }
    }
</script>
<style scoped lang="scss">
     .swiper3{
        position: relative;
        .imgs{
            width:100%;
            height:100%;
        }
        .last,.next{
            position: absolute;
            background:#73808B60;
            width:60rpx;
            height:60rpx;
            border-radius:50%;
            box-sizing: border-box;
            margin-top:-30rpx;
        }
        .last{
            top:50%;left:30rpx;
            .arrow-l{  
                width: 24rpx;
                height: 24rpx;
                border-top: 2rpx solid #fff;
                border-left: 2rpx solid #fff;
                transform:rotate(-45deg);
                margin-top:18rpx;
                margin-left:20rpx;
            }
        }
        .next{
            top:50%;right:30rpx;
            .arrow-r{  
                width: 24rpx;
                height: 24rpx;
                border-top: 2rpx solid #fff;
                border-right: 2rpx solid #fff;
                transform:rotate(45deg);
                margin-top:18rpx;
                margin-left:10rpx;
            }
        } 
    }
</style>