<template>
    <div class="discount3" style="margin:10rpx 0;">
        <div class="box">
            <div class="body" v-for="item in traversal" :key="item">
                <div class="body-l">
                    <div class="sum">
                        <span>50</span>元
                    </div>
                </div>
                <div class="body-r">
                    <div class="condition">满100元使用</div>
                    <div class="get"><span @click="getDiscount()">立即领取</span></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                traversal:[1,2,3]
            }
        },
        methods:{
            getDiscount(){
                wx.showToast({
                    title: '领取成功',
                    icon: 'none',
                    duration: 1500,
                    mask: false,
                });
            }
        }
    }
</script>
<style lang="scss" scoped>
    .discount3{
        width:100%;
        font-family:PingFang-SC-Medium;
        padding:0 20rpx;
        box-sizing: border-box;
        .box{
            margin:0 auto;
            display: flex;
            overflow-x:auto;
            height:154rpx;
            border-radius:8rpx;
            .body{
                width:44%;
                height:144rpx;
                background:#fff;
                border-radius:8rpx;
                font-size:15px;
                text-align:center;
                color:#fff;
                display: flex;
                margin:0 10rpx;
                .body-l{
                    box-sizing:border-box;
                    border-top-left-radius: 8rpx;
                    border-bottom-left-radius: 8rpx;
                    background:linear-gradient(0deg,rgba(243,54,32,1),rgba(243,130,34,1));
                    width:128rpx;
                    height:100%;
                    line-height:144rpx;
                    .sum{
                        span{
                            font-size:28px;
                        }
                    }    
                }
                .body-r{
                    width:60%;
                    height:100%;
                    box-sizing:border-box;
                    padding:0 32rpx;
                    .get{
                        height:50%;
                        span{
                            display: inline-block;
                            height:56rpx;
                            width:148rpx;
                            font-size:14px;
                            line-height:56rpx;
                            text-align:center;
                            border-radius:30rpx;
                            background:linear-gradient(0deg,rgba(243,54,32,1),rgba(243,130,34,1));
                        }
                    }
                    .condition{
                        line-height:72rpx;
                        height:50%;
                        color:#666;
                        font-size:12px;
                    }
                }
            }
        }
        .box::-webkit-scrollbar {
            display: none;
        }
        .body:first-child{
            margin-left:0;
        }
    }
</style>