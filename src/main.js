/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */


import { registerPlugins } from '@/plugins'


import App from './App.vue'

import router from './router'

import { createPinia } from 'pinia'

// Composables
import { createApp } from 'vue'

const app = createApp(App)

registerPlugins(app)

app.use(createPinia())
app.use(router)
app.mount('#app')

