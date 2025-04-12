import { createApp } from 'vue';
import App from './App.vue';
import './style.css';
import VueGoogleMaps from '@fawmi/vue-google-maps';

const app = createApp(App);

app.use(VueGoogleMaps, {
    load: {
        key: import.meta.env.VITE_GOOGLE_MAPS_API_KEY
    },
});

app.mount('#app');