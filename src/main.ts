import './assets/base.sass'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import MainFooter from './components/Layouts/MainFooter.vue'
import PageContainer from './components/Layouts/PageContainer.vue'

const app = createApp(App)

app.component('MainFooter', MainFooter)
app.component('PageContainer', PageContainer)

app.use(createPinia())
app.use(router)

app.mount('#app')
