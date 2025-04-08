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
import 'vue3-carousel/carousel.css'
import { Carousel, Slide } from 'vue3-carousel'

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
        'url': 'src/assets/photos/IMG_3240.png'
    },
    {
        'id': 2,
        'url': 'src/assets/photos/IMG_3242.png'
    },
    {
        'id': 3,
        'url': 'src/assets/photos/IMG_1269.jpg'
    },
    {
        'id': 4,
        'url': 'src/assets/photos/IMG_4422.jpg'
    },
    {
        'id': 5,
        'url': 'src/assets/photos/IMG_4120.jpg'
    },
    {
        'id': 6,
        'url': 'src/assets/photos/IMG_5025.jpg'
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