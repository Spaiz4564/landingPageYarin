import { createApp } from 'vue';
import App from './App.vue';
import clickOutside from './clickOutside.js';
import VueGoogleMaps from '@fawmi/vue-google-maps'
import './assets/styles/main.scss'



const app = createApp(App);


app.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyB6JTqaFv8H1FDZx1l-nY3hF-qCCFmNJKg',
    },
})

app.directive('click-outside', clickOutside);


app.mount('#app');



// AIzaSyB6JTqaFv8H1FDZx1l-nY3hF-qCCFmNJKg

