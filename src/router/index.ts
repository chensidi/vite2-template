import { createRouter, createWebHashHistory, RouteRecordRaw, } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        component: () => import('@/views/Home.vue'),
        name: 'Home',
        meta: {
            title: '首页'
        }
    },
    {
        path: '/about',
        component: () => import('@/views/About.vue'),
        name: 'About',
        meta: {
            title: '关于我们'
        },
        children: [
            {
                path: 'child',
                component: () => import('@/views/Child.vue'),
                name: 'Child',
                meta: {
                    title: '子页面'
                }
            }
        ]
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})

router.afterEach((to, from) => {
    // console.log(to, from);
    let title: string = <string>to.meta.title;
    document.title = title;
})

export default router;