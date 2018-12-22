<template>
    <div class="container">
        <common v-for="(item, index) in config" :key="index" :options="item"></common>
        <tab-ber at=0></tab-ber>
    </div>
</template>

<script>
import common from '../components/common'
import tabBer from '../components/tabBer/tabBer'
import data from '../data.js'
export default {
    data () {
        return {
            config: []
        }
    },
    components: {
        common,
        tabBer
    },
    methods: {

    },

    mounted() {
        // wx.setNavigationBarTitle({
        //     title: '动态修改的页面'
        // }),
        this.config = wx.getExtConfigSync().config
        this.config = data
        console.log(this.config)
        //console.log(wx.getExtConfigSync())
    }
}
</script>

<style scoped lang="scss">
    .container{
        box-sizing: border-box;
        padding-bottom:96rpx;
    }
</style>
