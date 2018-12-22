<template>
    <div class="caption1" :style="{fontSize:options.fontSize*2+'rpx',color:options.color,background:options.background}">
        <div class="box">
            {{options.defaultValue}}
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
        }
    }
</script>
<style lang="scss" scoped>
    .caption1{
        margin:10rpx 0;
        width:100%;
        height:70rpx;
        border-top:2rpx solid #eee;
        border-bottom:2rpx solid #eee;
        box-sizing: border-box;
        .box{
            width:95%;
            text-align: center;
            font-size:18px;
            height:100%;
            line-height:70rpx;
        }
    }
    
</style>