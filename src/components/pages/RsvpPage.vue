<template>
<div class="flex flex-col items-center justify-center main-wrapper px-4 py-12">
    <a href="/"><img :src="logo" class="logo"></a>

    <div class="flex flex-col gap-0">
        <span class="subtitle text-sm md:text-xl text-center subtitle-surprise">(SURPRISE)</span>
        <span class="subtitle text-sm md:text-md">70th Birthday Party</span>
    </div>

    <div class="max-w-4xl w-full mx-auto px-4 sm:px-6 md:px-8 py-6 sm:py-8 flex flex-col gap-4 sm:gap-6">
          <PhotosCarousel />
    </div>

    <div v-if="!formSubmitted" class="flex flex-col gap-5">
        <div>
            <card>
                <template #body>
                    <div class="max-w-4xl mx-auto flex flex-row sm:flex-col gap-2 justify-center items-center">
                        <EventDescription />
                    </div>
                </template>
            </card>
        </div>

        <div class="max-w-4xl mx-auto p-4 flex flex-row sm:flex-col gap-2 justify-center items-center">
            <EventMap />
        </div>

        <div>
            <card>
                <template #body>
                    <div class="flex flex-row sm:flex-col gap-2">
                        <EventDetails />
                    </div>
                </template>
            </card>
        </div>

        <div>
            <card>
                <template #body>
                    <div class="max-w-4xl mx-auto flex flex-row sm:flex-col gap-2">
                        <RsvpForm @submitted="formSubmitted = true" />
                    </div>
                </template>
            </card>
        </div>
    </div>

    <div v-else>
        <card>
            <template #body>
                <div class="max-w-4xl mx-auto p-8 flex flex-row sm:flex-col gap-2 justify-center items-center">
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
.logo {
    width: 350px;
    height: 350px;
}

.subtitle {
    fxont-family: Mukta, sans-serif;
    font-family: "Julius Sans One", sans-serif;
    letter-spacing: 6px;
    paddxing-top: 14px;
    paddinxg-bottom: 14px;
    font-weight: 300;
    color: #B1C29E;
}

.subtitle-surprise {
    color: #edaa38;
}

.card {
    border-radius: 0.75em;
    background-color: #dadfe1;
}
</style>