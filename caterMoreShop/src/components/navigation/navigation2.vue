<template>
    <div class="navigation2">
        <div v-for="(item,index) in options.items" :key="index" class="box" @click="navigation(index)">
            <img :src="item.image" alt="" class="imgs">
            <div class="texts" :style="{color:item.color}">{{item.name}}</div>
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
            navigation(i){
                this.$router.push({path:'/pages/integral',isTab: true})
            }
        }
    }
</script>
<style lang="scss" scoped>
    .navigation2{
        width:100%;
        display: flex;
        justify-content: space-around;
        text-align:center;
        .box{
            width:20%;
            .imgs{
               width:100%;
               height:150rpx;
            }
            .texts{
                width:100%;
                color:#7F7F7F;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
        }
    }
</style>