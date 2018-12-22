<template>
    <div class="seek3">
        <div>
            <input type="text" placeholder="输入搜索内容" @click="seekJump">
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
            seekJump(){
                console.log(1)
            }
        }
    }
</script>
<style lang="scss" scoped>
    .seek3{
        background:#fff;
        padding:10rpx 0;
        width:100%;
        font-size:15px;
        div{
            width:90%;
            margin:0 auto;
            input{
                background:#E5E5E5;
                border-radius: 25rpx;
                text-align: center;
            }
        }
        
    }
</style>