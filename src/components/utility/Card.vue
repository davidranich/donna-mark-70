<template>
    <div class="card px-4 py-2">
      <span v-if="header !== ''" class="header-title text-center block mb-4">
        <slot name="header"></slot>
      </span>
  
      <div class="card-content">
        <div class="text-center flex flex-row justify-center gap-25 styled-body">
          <slot name="body"></slot>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import EventMap from './../EventMap.vue'
  
  export default {
    name: 'Card',
    components: {
      EventMap
    },
    props: {
        header: {
            type: String,
            default: ""
        }
    }
  }
  </script>
  
  <style scoped>
  .styled-body {
    color: #FFFAF0;
    font-weight: 300;
    letter-spacing: 1px;
    border-radius: 0.35em;
  }
  
  .header-title {
    font-family: Mukta, sans-serif;
    letter-spacing: 5px;
    text-transform: uppercase;
    color: #FADA7A;
    font-style: normal;
    font-weight: 300;
  }
  
  .card {
    border-radius: 0.75em;
    background-color: #B1C29E !important;
  }
  </style>