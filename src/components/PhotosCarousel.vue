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
    autoplay: 4000,
    transition: 1000,
    pauseAutoplayOnHover: true
  };
  
  const photos = [
    { id: 1, url: img3240 },
    { id: 2, url: img3242 },
    { id: 3, url: img1269 },
    { id: 4, url: img4422 },
    { id: 5, url: img4120 },
    { id: 6, url: img5025 }
  ];
  </script>
  
  <style scoped>
  /* Ensures smoother transitions with various image aspect ratios */
  img {
    max-height: 400px;
    object-fit: cover;
    border-radius: 0.75rem;
  }
  </style>