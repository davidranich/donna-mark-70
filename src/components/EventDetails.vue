<template>
    <div>
        <div class="flex flex-col">
            <strong class="body-title-text">When</strong> <span class="body-text">Saturday, June 28, 2025</span>
            <strong class="body-title-text">Where</strong> <span class="body-text"><a :href="mapLink" target="_blank">25003 Little Mack Ave, St Clair Shores, MI 48080</a></span>
            <strong class="body-title-text">Time</strong> <span class="body-text">4:00 PM</span>
            <strong class="body-title-text">What's Provided</strong> <span class="body-text">Dinner, drinks, and dessert</span>
        </div>
    </div>
</template>
      
<script setup>
import { formatMapLink } from './../utility/deviceDetection';
const address = "Knights of Columbus, 25003 Little Mack Ave, St Clair Shores, MI 48080";

const mapLink = formatMapLink(address);
</script>

<style scoped>
span {
    font-weight: 300;
}

.body-text {
    font-size: 1em;
    font-weight: 100;
    letter-spacing: 3px;
    font-family: Mukta, sans-serif;
}

.body-title-text {
    font-size: 1em;
    font-weight: 600;
    letter-spacing: 3px;
    font-family: Mukta, sans-serif;
}

hr {
    margin: 0.75rem 0;
    color: #d1d6b7;
}
</style>