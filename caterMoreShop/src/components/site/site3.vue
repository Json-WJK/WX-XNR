<template>
    <div class="site3" style="margin:10rpx;">
        <div class="body" @click="getLocation">
            <div class="body-l">
                <div class="">距离最近：店名(某某分店)</div>
                <div class="site">北京市大兴区中关村天华大街启航大厦3楼</div>
            </div>
            <div class="body-r">
                <span><wk-icon :type="options.items[1].icon" color="#CECECE" size="55"></wk-icon></span>
            </div>
        </div>
    </div>
</template>
<script>
import wkIcon from '../icon'
    export default{
        components:{
            wkIcon
        },
        props:{
            options:Object  
        },
        data(){
            return{
                
            }
        },
        methods:{
            getLocation(){
                wx.getLocation({
                    type: 'wgs84',
                    success(res) {
                        const latitude = res.latitude
                        const longitude = res.longitude
                        const speed = res.speed
                        const accuracy = res.accuracy
                        console.log(latitude,longitude,speed,accuracy)
                        wx.openLocation({
                            latitude,
                            longitude,
                            scale: 18
                        })
                    }
                })
            },
            
        }
    }
</script>
<style lang="scss" scoped>
    .site3{
        .body{
            background:#fff;
            width:99%;
            border-radius:8rpx;
            margin:0 auto;
            display: flex;
            justify-content: space-between;
            box-sizing:border-box;
            padding:0 50rpx 0 20rpx;
            align-items: center;
            .body-l{
                height:110rpx;
                line-height:55rpx;
                color:#222;
                .site{
                    color:#666;
                }
                :not(.site){
                    font-size:15px;
                }
            }
            .body-r{
                width:50rpx;
                height:50rpx;
                margin-top:-16rpx;
            }
        }
    }
</style>