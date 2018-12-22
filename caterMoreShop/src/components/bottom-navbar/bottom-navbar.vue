
<style lang="scss">

    @font-face {
        font-family: "iconfont";
        src: url('//at.alicdn.com/t/font_766775_c7za81bb73c.ttf?t=1532685933581') format('truetype');
    }

        .iconfont {
            font-family:"iconfont" !important;
            font-size: 24px;
            font-style:normal;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
        }

        .icon-cart:before { content: "\e614"; }

        .icon-home:before { content: "\e648"; }

        .icon-goods:before { content: "\e635"; }

        .icon-member:before { content: "\e657"; }


    .bottom__navbar{
        &__wrap {
            height: 48px;
            &__radius{
                padding-bottom: 20px;
            }
        }
        &__contain{
            width: 100%;
            height: 48px;
            position: fixed;
            left: 0; bottom: 0;
            display: flex;
            background: #fff;
            border: 1px solid #eee;
            &__radius{
                padding-bottom: 20px;
            }
            li{
                flex: 1;
                height: 48px;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 10px;
                text-align: center;
                span{
                    width: 24px;
                    height: 24px;
                    display: inline-block;
                }
                .iconfont__wrap{
                    min-width: 50px;
                }
            }
        }
    }

</style>

<template>
    
    <div class="bottom__navbar__wrap" :class=" [ modelStatus ? 'bottom__navbar__wrap__radius' : '' ] ">
        <ul class="bottom__navbar__contain" :class=" [ modelStatus ? 'bottom__navbar__contain__radius' : '' ] ">
            <li
                v-for="(item, index) in navData.list"
                :key="index"
            >
                <div 
                    class="iconfont__wrap" 
                    :style=" { color: item.currentSelected ? navData.selectedColor : navData.color } "
                    @click.stop="currentBar(index, item.pageName)"
                >
                    <span><i class="iconfont" :class=" [ item.iconName ] "></i></span>
                    <p>{{item.text}}</p>
                </div>
            </li>
        </ul>
    </div>

</template>

<script>

    import { mapState, mapActions } from 'vuex'

    export default {
        props: {
            name: {
                type: String,
                default: ''
            },
            method: {
                type: String,
                default: 'replace'
            },
            reset: {
                type: Boolean,
                default: false
            }
        },
        data(){
            return {
                modelStatus: false
            }
        },
        computed: {
            ...mapState({
                navData: function (state) {
                    return state[this.name]
                },
            }),
        },
        methods: {
            ...mapActions([
                'setCurrentBar',
                'resetTab'
            ]),
            currentBar(index, link){
                console.log(index, link);
                
                if(this.$router.currentRoute.path !== `${link}`){

                    this.setCurrentBar({
                        name: this.name,
                        index
                    })
                    
                    this.$router[this.method]({
                        path: `${link}`
                    })
                    
                }

            }
        },
        mounted(){
            wx.getSystemInfo({
                success: (data) => {
                    if(data.model == 'iPhone X'){
                        this.modelStatus = true
                    }
                }
            })
        },
        onShow(){
            if(this.reset){
                this.resetTab({
                    name: this.name
                })
            }
        }
    }

</script>
