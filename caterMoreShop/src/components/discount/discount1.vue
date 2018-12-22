<template>
    <div class="discount1" style="margin:10rpx 0;">
        <div class="body" :class="isgray?'gray':''">
            <div class="body-l">
                <div class="sum">
                    <span>50</span>元
                </div>
                <div class="condition">满100减50</div>
            </div>
            <div class="body-r">
                <div class="describe">优惠券</div>
                <div class="get"><span @click="getDiscount()">{{grayText}}</span></div>
                <div class="expire">期限：至2017/12/30</div>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                isgray:false,
                grayText:'立即领取'
            }
        },
        methods:{
            getDiscount(){
                if(this.isgray)
                wx.showToast({
                    title: '优惠券已领',
                    icon: 'none',
                    duration: 1500,
                    mask: false,
                });
                else
                wx.showToast({
                    title: '领取成功',
                    icon: 'none',
                    duration: 1500,
                    mask: false,
                    success: (res)=>{
                        this.isgray = true
                        this.grayText = '优惠券已领'
                    },
                });
            }
        }
    }
</script>
<style lang="scss" scoped>
    .discount1{
        width:100%;
        .body{
            width:712rpx;
            height:144rpx;
            background:#fff;
            border-radius:8rpx;
            font-size:15px;
            margin:0 auto;
            text-align:center;
            color:#fff;
            display: flex;
            justify-content: space-between;
            .body-l{
                box-sizing:border-box;
                border-top-left-radius: 8rpx;
                border-bottom-left-radius: 8rpx;
                padding-top:20rpx;
                background:linear-gradient(0deg,rgba(243,54,32,1),rgba(243,130,34,1));
                width:30%;
                height:100%;
                .sum{
                    span{
                        font-size:28px;
                    }
                }    
            }
            .body-r{
                width:70%;
                height:100%;
                text-align:left;
                box-sizing:border-box;
                padding:10rpx 32rpx;
                .describe{
                    color:#000;
                    font-size:18px;
                    margin-bottom:-15rpx;
                }
                .get{
                    display: flex;
                    justify-content:flex-end;
                    span{
                        height:65rpx;
                        width:160rpx;
                        font-size:15px;
                        line-height:65rpx;
                        text-align:center;
                        border-radius:30rpx;
                        background:linear-gradient(0deg,rgba(243,54,32,1),rgba(243,130,34,1));
                    }
                }
                .expire{
                    color:#666;
                    font-size:12px;
                    margin-left:5rpx;
                }
            }
            
        }
        .gray{
            -webkit-filter: grayscale(100%); 
            -moz-filter: grayscale(100%); 
            -ms-filter: grayscale(100%); 
            -o-filter: grayscale(100%); 
            filter:progid:DXImageTransform.Microsoft.BasicImage(grayscale=1);  
            _filter:none;
        }
    }
</style>