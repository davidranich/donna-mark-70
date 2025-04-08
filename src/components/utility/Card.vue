<template>
    <div class="card px-4 py-2 sm:px-6 sm:py-4 md:px-8 md:py-6">
      <span
        v-if="header !== ''"
        class="header-title text-center block mb-4 text-base sm:text-lg md:text-xl"
      >
        <slot name="header"></slot>
      </span>
  
      <div class="card-content">
        <div
          class="text-center flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-10 styled-body text-sm sm:text-base md:text-lg"
        >
          <slot name="body"></slot>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import EventMap from "./../EventMap.vue";
  
  export default {
    name: "Card",
    components: {
      EventMap,
    },
    props: {
      header: {
        type: String,
        default: "",
      },
    },
  };
  </script>
  
  <style scoped>
  .styled-body {
    color: #fffaf0;
    font-weight: 300;
    letter-spacing: 1px;
    border-radius: 0.35em;
  }
  
  .header-title {
    font-family: Mukta, sans-serif;
    letter-spacing: 5px;
    text-transform: uppercase;
    color: #fada7a;
    font-style: normal;
    font-weight: 300;
  }
  
  .card {
    border-radius: 0.75em;
    background-color: #b1c29e !important;
  }
  </style>