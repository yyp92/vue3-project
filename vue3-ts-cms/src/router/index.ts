import {createRouter, createWebHashHistory, createWebHistory} from 'vue-router'
import { LOGIN_TOKEN } from '@/global/constants'
import { localCache } from '@/utils/cache'
import { firstMenu } from '@/utils/map-menus'

const router = createRouter({
    history: createWebHistory(),
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

// 用户进行刷新：判断用户是否登录以及是否包含 userMenus 菜单

/**
 * * 导航守卫
 * 参数： to(跳转到的位置)，from(从哪里跳转过来的)
 * 返回值：返回值决定导航的路径(不返回或者返回 undefined, 默认跳转)
 */
router.beforeEach((to, from) => {
    // 只有登陆成功(token)，才能真正进入到 main 页面
    const token = localCache.getCache(LOGIN_TOKEN)
    
    if (to.path.startsWith('/main') && !token) {
        return '/login'
    }

    // 如果是进入到 main
    if (to.path === '/main') {
        return firstMenu?.url
    }
})

export default router
 