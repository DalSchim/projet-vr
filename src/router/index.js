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
            },
            {
                path: '/nosadmin',
                name: 'nosadmin',
                component: () => import('@/views/Site/Page/NosAdminView.vue')
            },
            {
                path:'nosmembre',
                name:'nosmembre',
                component:()=>import('@/views/Site/Page/NosMembreView.vue')
            }
        ]
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router