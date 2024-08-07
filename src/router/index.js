import {createRouter, createWebHistory} from 'vue-router'
import webPage from "@/views/Site/WebPageLayout.vue";



const routes = [
    {
        path: '/',
        component: webPage,
        redirect: '/home',
        children: [
            {
                path: '/home',
                name: 'home',
                component: () => import('@/views/Site/Page/HomeView.vue')
            },
            {
                path: '/about',
                name: 'about',
                component: () => import('@/views/Site/Page/AboutView.vue')
            }
        ]
    },


]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
