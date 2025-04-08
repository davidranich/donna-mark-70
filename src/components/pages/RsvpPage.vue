<template>
<div class="flex flex-col items-center justify-center main-wrapper px-4 py-12">
    <img :src="logo" class="logo">

    <span class="subtitle"><em>(SURPRISE)</em> 70th Birthday Party</span>

    <div class="max-w-4xl mx-auto p-8 flex flex-row sm:flex-col gap-2">
         <!-- <img src="./../../assets/photos/IMG_4422.jpg" class="rounded shadow-xl"> -->
          <PhotosCarousel />
    </div>

    <div v-if="!formSubmitted" class="flex flex-col gap-5">
        <div>
            <card>
                <template #body>
                    <div class="max-w-4xl mx-auto p-8 flex flex-row sm:flex-col gap-2 justify-center items-center" id="description">
                        <EventDescription />
                    </div>
                </template>
            </card>
        </div>

        <div class="max-w-4xl mx-auto p-8 flex flex-row sm:flex-col gap-2 justify-center items-center" id="map">
            <EventMap />
        </div>

        <div>
            <card>
                <template #body>
                    <div class="maxx-w-4xl xmx-auto p-8 flex flex-row sm:flex-col gap-2 justify-cexnter items-centxer" id="details">
                        <EventDetails />
                    </div>
                </template>
            </card>
        </div>

        <div>
            <card>
                <template #body>
                    <div class="max-w-4xl mx-auto p-8 flex flex-row sm:flex-col gap-2 justify-center items-center" id="rsvp-form">
                        <RsvpForm @submitted="formSubmitted = true" />
                    </div>
                </template>
            </card>
        </div>
    </div>

    <div v-else>
        <card>
            <template #body>
                <div class="max-w-4xl mx-auto p-8 flex flex-row sm:flex-col gap-2 justify-center items-center" id="description">
                    <Confirmation />
                </div>
            </template>
        </card>
    </div>
</div>
</template>

<script setup>
import { ref } from "vue";
import RsvpForm from './../RsvpForm.vue';
import EventDetails from './../EventDetails.vue';
import EventDescription from '../EventDescription.vue';
import EventMap from '../EventMap.vue';
import Confirmation from "../Confirmation.vue";
import PhotosCarousel from "../PhotosCarousel.vue";
import Card from '../utility/Card.vue';

import logo from '@/assets/donna-mark-vintage-02-70th-transparent.png';

const formSubmitted = ref(false);
</script>

<style scoped>
.leaflet-control-attribution {
  display: none !important;
}
.logo {
    width: 350px;
    height: 350px;
}

.subtitle {
    font-family: Mukta, sans-serif;
    letter-spacing: 6px;
    padding-top: 14px;
    padding-bottom: 14px;
    font-weight: 300;
    color: #B1C29E;
}

.card {
    padding: 15px;
    border-radius: 0.75em;
    background-color: #dadfe1;
}

hr {
    margin: 0.75rem 0;
    color: #000;
}
</style>