<template>
    <div class="flex flex-col md:items-center">
        <a href="/"><img :src="logo" class="logo"></a>
        <div class="text-center">
            <span class="subtitle text-lg md:text-md">List Of Guests ({{ guestCount }})</span> <span id="guest-refresh" @click="refreshGuests"><i class="fa-solid fa-rotate"></i></span>
            <GuestsTable ref="guestsTableRef" @loaded="handleGuestLoad" />
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import GuestsTable from "../GuestsTable.vue";

const guestCount = ref(0);
const handleGuestLoad = (count) => {
  guestCount.value = count;
};

// create reference to GuestsTable to get access to re-running 'getGuests' function
const guestsTableRef = ref(null);
const refreshGuests = () => {
    guestsTableRef.value.getGuests();
};

import logo from '@/assets/donna-mark-vintage-02-70th-transparent.png';
</script>

<style scoped>
.logo {
    width: 350px;
    height: 350px;
}

.subtitle {
    font-family: "Julius Sans One", sans-serif;
    letter-spacing: 6px;
    font-weight: 500;
    color: #B1C29E;
}

.fa-rotate:hover {  
    -webkit-animation: infinite-spinning 1s ease-out 0s infinite normal;
    animation: infinite-spinning 1s ease-out 0s infinite normal;
    cursor: pointer;
}

@keyframes infinite-spinning {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

#guest-refresh {
    color: #f2b847;
}
</style>