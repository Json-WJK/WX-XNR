<template>
    <div>
        <swiper
            :indicator-dots="options['indicator-dots']"
            :indicator-active-color="options['indicator-active-color']"
            :autoplay="options.autoplay"
            :interval="options.interval"
            :duration="1000"
            :circular="options.circular"
            :style="{height: options.height + 'rpx'}"
        >
            <swiper-item v-for="n in options.imgs" :key="n" @click="link">
                <img :src="n.url" class="slide-image" :style="{height: options.height + 'rpx', lineHeight: options.height + 'rpx'}">
            </swiper-item>
        </swiper>
    </div>
</template>

<script>
    export default {
        props: {
            options: Object
        },
        methods: {
            link() {
                this.$router.push({path: '/pages/logs', isTab: true})
            }
        },
        mounted() {
            console.log(this.options)
        }
    }
</script>

<style scoped>
    .slide-image {
        width: 100%;
        /*background: #ccc;*/
        /*text-align: center;*/
        /*color: #fff;*/
    }
</style>
