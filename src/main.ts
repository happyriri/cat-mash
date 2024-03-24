import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createWebHashHistory, createRouter } from 'vue-router'
import routes from './router/routes';
import './style.css'
import App from './App.vue'

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

const pinia = createPinia()

createApp(App)
.use(pinia)
.use(router)
.mount('#app')
