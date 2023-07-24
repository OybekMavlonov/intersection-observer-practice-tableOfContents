import {createRouter, createWebHistory} from 'vue-router';
import AppLayout from '../layouts/AppLayout.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: AppLayout,
            children: [
                {
                    path: '/',
                },
                {
                    path: '/information',
                    name: 'information',
                    component: () => import('../views/pages/Information.vue')
                },
                {
                    path: '/applications',
                    name: 'applications',
                    component: () => import('../views/pages/Applications.vue')
                },
                {
                    path: '/settings/setting1',
                    name: 'setting1',
                    component: () => import('../views/pages/settings/Setting1.vue')
                },
                {
                    path: '/settings/setting2',
                    name: 'setting2',
                    component: () => import('../views/pages/settings/Setting2.vue')
                },
                {
                    path: '/settings/setting3',
                    name: 'setting3',
                    component: () => import('../views/pages/settings/Setting3.vue')
                },
            ]
        }
    ]
});

// router.beforeEach((to, from, next) => {
//     const {can} = useAccessStore()
//     console.log(can('d'));
//     const isPublic = !!to.meta.isPublic
//     if(isPublic) return next()
//
//     const isAuthenticated = !!TokenService.getToken()
//     if (to.name !== 'login' && !isAuthenticated) next({ name: 'login' })
//     else next()
// })

export default router;