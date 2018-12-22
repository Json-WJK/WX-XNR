<template>
    <div class="seek1">
        <span class="icon"><wk-icon :type="type" :color="color" :size="size"></wk-icon></span>
        <input type="text" placeholder="输入搜索内容">
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
                type:"sousuo",
                size:36,
                color:'#535353'
            }
        }
    }
</script>
<style lang="scss" scoped>
    .seek1{
        position: relative;
        background:#fff;
        padding:10rpx 0;
        width:100%;
        height:60rpx;
        font-size:15px;
        .icon{
            position: absolute;
            top:50%;
            margin-top:-20rpx;
            margin-left:70rpx;
            z-index:2;
        }
        input{
            position: absolute;
            top:0;bottom:0;left:0;right:0;
            margin:auto;
            width:90%;
            height:70%;
            background:#F5F5F5;
            border-radius: 25rpx;
            padding-left:80rpx;
            box-sizing: border-box;
        }
    }
</style>