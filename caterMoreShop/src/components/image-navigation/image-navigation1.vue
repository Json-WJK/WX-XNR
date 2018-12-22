<template>
    <div class="image-navigation1">
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
    .image-navigation1{
        margin:10px 0;
        width:100%;
        .box{
            width:95%;
            margin:0 auto;
            height:150px;
            img{
                width:100%;
                height:100%;
            }
        }
    }
</style>