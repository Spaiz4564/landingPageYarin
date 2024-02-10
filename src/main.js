import { createApp } from 'vue';
import App from './App.vue';
import clickOutside from './clickOutside.js'; // Adjust the path accordingly
import './assets/styles/main.scss'

const app = createApp(App);

app.directive('click-outside', clickOutside);

app.mount('#app');






