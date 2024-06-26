import './assets/main.css'
import 'primevue/resources/themes/aura-light-teal/theme.css'
import 'primevue/resources/primevue.min.css';
import 'primeflex/primeflex.css'
import 'primeicons/primeicons.css';

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config';

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue)

app.mount('#app')
