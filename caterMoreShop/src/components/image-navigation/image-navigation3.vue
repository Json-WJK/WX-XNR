<template>
    <div class="image-navigation3">
        <div class="box">
            <div class="box-l">
                <img :src="options.items[0].image" alt="" @click="navigation(index)">
            </div>
            <div class="box-r">
                <div><img :src="options.items[1].image" alt="" @click="navigation(index)"></div>
                <div><img :src="options.items[2].image" alt="" @click="navigation(index)"></div>
            </div>
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
    .image-navigation3{
        margin:10px 0;
        width:100%;
        .box{
            width:98%;
            margin:0 auto;
            display: flex;
            justify-content: space-around;
            height:150px;
            .box-l{
                height:100%;
                width:46%;
                img{
                    height:98%;
                    width:100%;
                }
            }
            .box-r{
                height:100%;
                width:46%;
                display: flex;
                flex-flow: column;
                justify-content: space-between;
                div{
                    height:48%;
                        width:100%;
                    img{
                        height:100%;
                        width:100%;
                    }
                }
            }
        }
    }
</style>