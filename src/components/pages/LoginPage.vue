<template>
    <div class="flex flex-col items-center justify-center main-wrapper px-4 py-12">
        <a href="/"><img :src="logo" class="logo"></a>
    
        <div v-if="!formSubmitted" class="flex flex-col gap-5">
            <div>
                <card>
                    <template #body>
                        <div class="max-w-4xl mx-auto flex flex-row sm:flex-col gap-2">
                            <LoginForm />
                        </div>
                    </template>
                </card>
            </div>
        </div>
    </div>
    </template>
    
    <script setup>
    import { ref } from "vue";
    import LoginForm from "../LoginForm.vue";
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
        font-family: "Julius Sans One", sans-serif;
        letter-spacing: 6px;
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