import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createWebHistory, createRouter } from 'vue-router'
import routes from './router/routes';
import './style.css'
import App from './App.vue'

const router = createRouter({
    history: createWebHistory(),
    routes,
})

const pinia = createPinia()

createApp(App)
.use(pinia)
.use(router)
.mount('#app')
