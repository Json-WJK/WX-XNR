<template>
    <div class="site1" style="margin:10rpx;">
        <div class="body" @click="getLocation">
            <div class="icon">
                <span><wk-icon :type="options.items[1].icon" color="#333" size="50"></wk-icon></span>
            </div>
            <div class="body-l">
                <div class="">距离最近：店名(某某分店)</div>
                <div class="site">北京市大兴区中关村天华大街启航大厦3楼</div>
            </div>
            <div class="body-r">
                <span @click.stop="call"><wk-icon :type="options.items[0].icon" color="#CECECE" size="60"></wk-icon></span>
            </div>
        </div>
    </div>
</template>
<script>
import wkIcon from '../icon'
    export default{
        props:{
            options:Object  
        },
        components:{
            wkIcon
        },
        data(){
            return{
                getLocation(){
                    console.log(1)
                    wx.getLocation({
                        type: 'wgs84',
                        success(res) {
                            const latitude = res.latitude
                            const longitude = res.longitude
                            const speed = res.speed
                            const accuracy = res.accuracy
                            console.log(res)
                            wx.openLocation({
                                latitude,
                                longitude,
                                scale: 18
                            })
                        }
                    })
                },
                call(){
                    wx.makePhoneCall({
                        phoneNumber: this.options.items[0].phoneNum
                    })
                }
            }
        },
        created(){
            console.log(this.options)
        },
    }
</script>
<style lang="scss" scoped>
    .site1{
        .body{
            .icon{
                width:50rpx;
                height:50rpx;
            }
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
                margin-left:-60rpx;
                .site{
                    color:#666;
                }
                :not(.site){
                    font-size:14px;
                }
            }
            .body-r{
                width:50rpx;
                height:50rpx;
                margin-top:-18rpx;
                box-sizing: border-box;
                span{
                    height:100%;
                }
            }
        }
    }
</style>