<template>
    <div class="image-navigation2">
        <div class="box">
            <block v-for="(item,index) in options.items" :key="index">
                <img :src="item.image" alt="" class="item" @click="navigation(index)">
            </block>
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
    .image-navigation2{
        margin:10px 0;
        width:100%;
        .box{
            width:98%;
            margin:0 auto;
            display: flex;
            justify-content: space-around;
            height:150px;
            .item{
                width:46%;
                height:100%;
            }
        }
    }
</style>