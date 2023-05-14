import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHashHistory(),
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