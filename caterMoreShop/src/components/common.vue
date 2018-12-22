<template>
    <div>
        <!-- <tab-ber :options="options.options" v-if="options.type === 'navBottom'"></tab-ber> -->
        <memu v-if="options.type === 'carousel' && options.options.styles === '1'"></memu>
        <site1 :options="options.options" v-if="options.type === 'contactInformation' && options.options.styles === '1'"></site1>
        <site2 :options="options.options" v-if="options.type === 'contactInformation' && options.options.styles === '2'"></site2>
        <site3 :options="options.options" v-if="options.type === 'contactInformation' && options.options.styles === '3'"></site3>
        <discount1 :options="options" v-if="options.type === 'carousel' && options.options.styles === '1'"></discount1>
        <discount2 :options="options" v-if="options.type === 'carousel' && options.options.styles === '1'"></discount2>
        <discount3 :options="options" v-if="options.type === 'carousel' && options.options.styles === '1'"></discount3>
        <space :options="options.options" v-if="options.type === 'componentDistance'"></space>
        <navigation2 :options="options.options" v-if="options.type === 'navigation' && options.options.styles === '2'"></navigation2>
        <navigation1 :options="options.options" v-if="options.type === 'navigation' && options.options.styles === '1'"></navigation1>
        <seek4 :options="options.options" v-if="options.type === 'search' && options.options.styles === '4'"></seek4>
        <seek3 :options="options.options" v-if="options.type === 'search' && options.options.styles === '3'"></seek3>
        <seek2 :options="options.options" v-if="options.type === 'search' && options.options.styles === '2'"></seek2>
        <seek1 :options="options.options" v-if="options.type === 'search' && options.options.styles === '1'"></seek1>
        <caption3 :options="options.options" v-if="options.type === 'componentTitle' && options.options.styles === '3'"></caption3>
        <caption2 :options="options.options" v-if="options.type === 'componentTitle' && options.options.styles === '2'"></caption2>
        <caption1 :options="options.options" v-if="options.type === 'componentTitle' && options.options.styles === '1'"></caption1>
        <image-navigation6 :options="options.options" v-if="options.type === 'imageNavigation' && options.options.styles === '6'"></image-navigation6>
        <image-navigation5 :options="options.options" v-if="options.type === 'imageNavigation' && options.options.styles === '5'"></image-navigation5>
        <image-navigation4 :options="options.options" v-if="options.type === 'imageNavigation' && options.options.styles === '4'"></image-navigation4> 
        <image-navigation3 :options="options.options" v-if="options.type === 'imageNavigation' && options.options.styles === '3'"></image-navigation3>
        <image-navigation2 :options="options.options" v-if="options.type === 'imageNavigation' && options.options.styles === '2'"></image-navigation2>
        <image-navigation1 :options="options.options" v-if="options.type === 'imageNavigation' && options.options.styles === '1'"></image-navigation1>
        <custom-swiper4 :options="options.options" v-if="options.type === 'carousel' && options.options.styles === '4'"></custom-swiper4>
        <custom-swiper3 :options="options.options" v-if="options.type === 'carousel' && options.options.styles === '3'"></custom-swiper3>
        <custom-swiper2 :options="options.options" v-if="options.type === 'carousel' && options.options.styles === '2'"></custom-swiper2>
        <custom-swiper1 :options="options.options" v-if="options.type === 'carousel' && options.options.styles === '1'"></custom-swiper1>
        <ad :options="options" v-if="options.name === 'ad'"></ad>
        <ad :options="options.options" v-if="options.type === 'carousel' && options.options.styles === '1'"></ad>
        <custom-label :options="options.options" v-if="options.type === 'carousel' && options.options.styles === '1'"></custom-label>
        <custom-list-one :options="options.options" v-if="options.type === 'carousel' && options.options.styles === '1'"></custom-list-one>
        <custom-list-two :options="options.options" v-if="options.type === 'carousel' && options.options.styles === '1'"></custom-list-two>
        <custom-list-three :options="options.options" v-if="options.type === 'carousel' && options.options.styles === '1'"></custom-list-three>
        <custom-list-four :options="options.options" v-if="options.type === 'carousel' && options.options.styles === '1'"></custom-list-four>
        <custom-list-five :options="options.options" v-if="options.type === 'carousel' && options.options.styles === '1'"></custom-list-five>
    </div>
</template>

<script>
    import tabBer from './tabBer/tabBer.vue'
    import site1 from './site/site1.vue'
    import site2 from './site/site2.vue'
    import site3 from './site/site3.vue'
    import discount1 from './discount/discount1.vue'
    import discount2 from './discount/discount2.vue'
    import discount3 from './discount/discount3.vue'
    import space from './space.vue'
    import memu from './memu.vue'
    import navigation2 from './navigation/navigation2.vue'
    import navigation1 from './navigation/navigation1.vue'
    import seek4 from './seek/seek4.vue'
    import seek3 from './seek/seek3.vue'
    import seek2 from './seek/seek2.vue'
    import seek1 from './seek/seek1.vue'
    import caption3 from './caption/caption3.vue'
    import caption2 from './caption/caption2.vue'
    import caption1 from './caption/caption1.vue'
    import imageNavigation6 from './image-navigation/image-navigation6.vue'
    import imageNavigation5 from './image-navigation/image-navigation5.vue'
    import imageNavigation4 from './image-navigation/image-navigation4.vue'
    import imageNavigation3 from './image-navigation/image-navigation3.vue'
    import imageNavigation2 from './image-navigation/image-navigation2.vue'
    import imageNavigation1 from './image-navigation/image-navigation1.vue'
    import customSwiper1 from './swiper/swiper1.vue'
    import customSwiper2 from './swiper/swiper2.vue'
    import customSwiper3 from './swiper/swiper3.vue'
    import customSwiper4 from './swiper/swiper4.vue'
    import ad from './ad.vue'
    import customListOne from './custom-list-one.vue'
    import customListTwo from './custom-list-two.vue'
    import customListThree from './custom-list-three.vue'
    import customListFour from './custom-list-four.vue'
    import customListFive from './custom-list-five.vue'
    import customLabel from './custom-label.vue'
    

    export default {
        components: {
            ad,
            customListOne,
            customListTwo,
            customListThree,
            customListFour,
            customListFive,
            customLabel,
            customSwiper1,
            customSwiper2,
            customSwiper3,
            customSwiper4,
            imageNavigation1,
            imageNavigation2,
            imageNavigation3,
            imageNavigation4,
            imageNavigation5,
            imageNavigation6,
            caption1,
            caption2,
            caption3,
            seek1,
            seek2,
            seek3,
            seek4,
            navigation1,
            navigation2,
            memu,
            space,
            discount1,
            discount2,
            discount3,
            site1,
            site2,
            site3,
            tabBer
        },
        props: {
            options: Object
        },
        mounted(){
            
        }
    }
</script>

<style>
    .card {
        padding: 20px;
    }
</style>
