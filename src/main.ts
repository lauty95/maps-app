import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
 
mapboxgl.accessToken = 'pk.eyJ1IjoibGF1dHk5NSIsImEiOiJjbG5sc3lzdTcwZWx4MnJueW8zcGdibXo1In0.0LpOWAQ1xw2rT2Ks8AS3Eg';

if (!navigator.geolocation) {
    alert("Tu navegador no soporta el GeoLocation")
    throw new Error("Tu navegador no soporta el GeoLocation")
}

createApp(App).use(store).use(router).mount('#app')
