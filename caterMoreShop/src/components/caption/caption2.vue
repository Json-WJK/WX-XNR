
<template>
     <div class="caption2" :style="{fontSize:options.fontSize*2+'rpx',color:options.color,background:options.background}">
        <div class="box">
            <div class="long"></div>
            {{options.defaultValue}}
            <div class="arrow" :style="{color:options.linkColor}" @click="navigation">查看更多</div>
        </div>
    </div>
</template>
<script>
    export default{
        props:{
            options:Object
        },
        data(){
            return{

            }
        },
        methods:{
            navigation(){
                this.$router.push({path:'/pages/integral',isTab: true})
            }
        }
    }
</script>
<style lang="scss" scoped>
    .caption2{
        margin:10rpx 0;
        width:100%;
        height:70rpx;
        border-top:2rpx solid #eee;
        border-bottom:2rpx solid #eee;
        box-sizing: border-box;
        position: relative;
        .box{
            display: flex;
            width:95%;
            font-size:17px;
            height:60%;
            line-height:40rpx;
            position: absolute;
            left:0;top:0;right:0;bottom:0;
            margin:auto;
            .long{
                width:8rpx;
                height:100%;
                background:#FE0000;
                border-radius:10rpx;
                margin-right:10rpx;
            }
            .arrow{  
                font-size:13px;
                margin-left: auto;
                color:#8E8E8E;
            }
        }
    }
    
</style>
