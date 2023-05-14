import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            component: () => import('@/views/index.vue')
        }, {
            path: '/service',
            component: () => import('@/views/service/index.vue')
        }, {
            path: '/monitor',
            component: () => import('@/views/monitor/index.vue')
        }
    ]
})

export default router