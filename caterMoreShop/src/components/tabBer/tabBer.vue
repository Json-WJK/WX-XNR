<template>
    <div class="tabBer">
        <div v-for="(item,index) in navData.items" :key="index" :style="at==index?{color:navData.selectColor}:{color:navData.color,background:navData.background}" class="el" @click="currentBar(index,item.link)">
            <span><wk-icon :type="item.icon" size="48"></wk-icon></span>
            <div>{{item.name}}</div>
        </div>
    </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
import wkIcon from '../icon'
    export default{
        components:{
            wkIcon
        },
        props:{
            options:Object,
            at:Number
        },
        data(){
            return{
                
            }
        },
        computed: {
            ...mapState({
                navData(state) {
                    console.log(state)
                    for(let item in state){
                        if(state[item].type=="navBottom"){
                            console.log(state[item])
                            return state[item].options
                        }
                    }
                    // console.log(this.$state.)
                },
            }),
        },
        methods:{
            ...mapActions([
                'setCurrentBar'
            ]),
            currentBar(index, url){
                console.log(index, url);
                if(this.$router.currentRoute.path !== `${url}`){

                    this.setCurrentBar({
                        type:'navBottom',
                        index
                    })
                    this.$router.replace({
                        path: `${url}`
                    })
                }

            }
        },
        created(){
            console.log(this.at)
        }
    }
</script>
<style lang="scss" scoped>
    .tabBer{
        margin-top:96rpx;
        position:fixed;
        bottom:0;
        z-index:999;
        background:#fff;
        width:100%;
        height:96rpx;
        display:flex;
        text-align:center;
        justify-content: space-around;
        align-self: center;
        .el{
            width:100rpx;
            height:100%;
            padding:10rpx 0;
            box-sizing:border-box;
            font-size:10px;
            span{
                height:48rpx;
                width:48rpx;
            }
        }
    }
</style>