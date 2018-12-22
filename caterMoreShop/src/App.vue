<script>
    export default {
        created () {
            // 调用API从本地缓存中获取数据
            const logs = wx.getStorageSync('logs') || []
            logs.unshift(Date.now())
            wx.setStorageSync('logs', logs)
            this.extConfig = wx.getExtConfigSync()
            //console.log(this.extConfig);

            //console.log('app created and cache logs by setStorageSync')
            console.log('小程序启动了')
        }
    }
</script>

<style lang="scss">
    /* this rule will be remove */
    /*page{
        background-color: white;
        
    }*/
    page {
        background-color: #f2f2f2;
        font-size: 24rpx;
        color: #333333;
        box-sizing: border-box;
    }
    * {
        transition: width 2s;
        -moz-transition: width 2s;
        -webkit-transition: width 2s;
        -o-transition: width 2s;
    }
</style>
