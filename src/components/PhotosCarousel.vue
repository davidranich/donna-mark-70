<template>
    <div class="flex flex-col items-center w-full">
      <Carousel v-bind="carouselConfig" class="w-full max-w-[90vw] sm:max-w-xl md:max-w-2xl">
        <Slide v-for="photo in photos" :key="photo.id" class="flex justify-center items-center">
          <img
            :src="photo.url"
            class="rounded-xl shadow-lg object-cover max-h-[400px] w-full sm:w-auto"
            alt="Party Photo"
          />
        </Slide>
      </Carousel>
    </div>
  </template>
  
  <script setup>
  import 'vue3-carousel/carousel.css';
  import { Carousel, Slide } from 'vue3-carousel';
  
  import img4120 from '@/assets/IMG_4120.jpg';
  import img5025 from '@/assets/IMG_5025.jpg';
  import img6011 from '@/assets/IMG_6011.png';
  import img6012 from '@/assets/IMG_6012.png';
  import img9980 from '@/assets/IMG_9980.png';
  import img1558 from '@/assets/IMG_1558_3.png';
  import img3608 from '@/assets/IMG_3608.png';
  
  const carouselConfig = {
    itemsToShow: 1,
    wrapAround: true,
    gap: 15,
    autoplay: 4000,
    transition: 1000,
    pauseAutoplayOnHover: true
  };
  
  const photos = [
    { id: 5, url: img4120 },
    { id: 7, url: img6011 },
    { id: 8, url: img6012 },
    { id: 9, url: img5025 },
    { id: 10, url: img9980 },
    { id: 11, url: img1558 },
    { id : 12, url: img3608 }
  ];
  </script>
  
  <style scoped>
  img {
    max-height: 400px;
    object-fit: cover;
    border-radius: 0.75rem;
  }
  </style>