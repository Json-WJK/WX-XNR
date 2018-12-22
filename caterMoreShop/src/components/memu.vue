<template>
    <div class="memu" :style="{background:options.background}">
        <div class="box">
            <span v-for="(item,index) in options.ify" :key="index" class="items" @click="ify(index)" :style="index==highlight?{color:options.highlight}:''">{{item}}</span>
        </div>
    </div>
</template>
<script>
    export default{
        props:{
            // options:Object
        },
        data(){
            return{
                options:{
                    "name":"memu",
                    "ify":[
                        "全部",
                        "快餐",
                        "米面",
                        "麻辣烫",
                        "饺子",
                        "特色小吃",
                        "烧烤"
                    ],
                    "background":"#fff",
                    "highlight":"#f12e24"
                },
                highlight:0
            }
        },
        methods:{
            ify(i){
                this.highlight=i
            }
        }
    }
</script>
<style lang="scss" scoped>
    .memu{
        margin:0 0 10px 0;
        box-sizing: border-box;
        overflow-x: auto;
        height:70rpx;
        line-height:60rpx;
        .box{
            white-space:nowrap;
            height:100%;
            .items{
                display: inline-block;
                height:100%;
                padding:0 20rpx;
                font-size:17px;
                color:#333;
            }
        }
    }
    .memu::-webkit-scrollbar {
        display:none;
    }
</style>