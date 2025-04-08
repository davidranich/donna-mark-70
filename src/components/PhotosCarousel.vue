<template>
<div class="flex-col flex">
    <Carousel v-bind="carouselConfig">
    <Slide v-for="photo in photos" :key="photo.id">
        <img class="photo rounded-md shadow-md mxx-auto mxax-w-full sm:w-60 lg:w-1660 md:w-560"  :src="photo.url" />
    </Slide>
    </Carousel>
</div>
</template>

<script setup>
import 'vue3-carousel/carousel.css';
import { Carousel, Slide } from 'vue3-carousel';

import img3240 from './../assets/IMG_3240.png';
import img3242 from './../assets/IMG_3242.png';
import img1269 from './../assets/IMG_1269.jpg';
import img4422 from './../assets/IMG_4422.jpg';
import img4120 from './../assets/IMG_4120.jpg';
import img5025 from './../assets/IMG_5025.jpg';

const carouselConfig = {
  itemsToShow: 1,
  wrapAround: true,
  gap: 15,
  slideEffect: 'fade',
  autoplay: 1,
  transition: 10000
};

const photos = [
    {
        'id': 1,
        'url': img3240
    },
    {
        'id': 2,
        'url': img3242
    },
    {
        'id': 3,
        'url': img1269
    },
    {
        'id': 4,
        'url': img4422
    },
    {
        'id': 5,
        'url': img4120
    },
    {
        'id': 6,
        'url': img5025
    }
];
</script>

<style scoped>
.photo {
    wixdth: 500px;
    hxeight: 500px;

    wixdth: 10em;
    bxorder: 1px solid black;
}
</style>