<template>
    <div class="space" :style="{background:options.background,height:height}">
        
    </div>
</template>
<script>
    export default{
        props:{
            options:Object
        },
        computed:{
            height(){
                let height = this.options.height
                return height*2+"rpx"
            }
        }
    }
</script>
<style lang="scss" scoped>
    .space{
        width:100%;
    }
</style>