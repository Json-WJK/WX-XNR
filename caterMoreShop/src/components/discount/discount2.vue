<template>
    <div class="discount2" style="margin:10rpx 0;">
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
                traversal:[1,2]
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
    .discount2{
        width:100%;
        height:144rpx;
        font-family:PingFang-SC-Medium;
        .box{
            width:712rpx;
            margin:0 auto;
            .body{
                width:48%;
                height:144rpx;
                background:#fff;
                border-radius:8rpx;
                font-size:15px;
                margin:0 auto;
                text-align:center;
                color:#fff;
                display: flex;
                .body-l{
                    box-sizing:border-box;
                    border-top-left-radius: 8rpx;
                    border-bottom-left-radius: 8rpx;
                    background:linear-gradient(0deg,rgba(243,54,32,1),rgba(243,130,34,1));
                    width:37.2%;
                    height:100%;
                    line-height:144rpx;
                    .sum{
                        span{
                            font-size:28px;
                        }
                    }    
                }
                .body-r{
                    width:62.8%;
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
            .body:nth-child(1){
                float:left;
            }
            .body:nth-child(2){
                float:right;
            }
        }
    }
</style>