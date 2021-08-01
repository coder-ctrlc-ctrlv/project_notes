import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Redactor from '@/views/Redactor.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/redactor-note',
            component: Redactor
        },
        {
            path: '/redactor-note/:id',
            component: Redactor,
            name: 'Redactor',
            props: true
        }
    ]
})

export default router