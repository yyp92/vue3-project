import {createRouter, createWebHashHistory} from 'vue-router'
import { LOGIN_TOKEN } from '@/global/constants'
import { localCache } from '@/utils/cache'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            redirect: '/main'
        },
        {
            path: '/login',
            component: () => import('../views/login/Login.vue')
        },
        {
            path: '/main',
            name: 'main',
            component: () => import('../views/main/Main.vue'),

        },
        {
            path: '/:pathMatch(.*)',
            component: () => import('../views/not-found/NotFound.vue')
        }
    ]
})


// * 导航守卫
router.beforeEach((to, from) => {
    // 只有登陆成功(token)，才能真正进入到 main 页面
    const token = localCache.getCache(LOGIN_TOKEN)
    
    if (to.path === '/main' && !token) {
        return '/login'
    }
})

export default router
 