import { createWebHashHistory , createRouter } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../components/home.vue')
    },
     {
        path: '/sideBar',
        name: 'SideBar',
        component: () => import('../components/sideBar.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router