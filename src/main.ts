import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import '@/assets/style.scss'
import "@popperjs/core";
import "bootstrap";

const app = createApp(App)

app.use(router).mount('#app')


