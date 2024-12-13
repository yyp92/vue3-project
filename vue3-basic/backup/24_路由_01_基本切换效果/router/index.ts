/**
 * * 创建一个路由器，并暴露出去
 */

// 第一步：引入 createRouter
import {createRouter, createWebHistory} from 'vue-router'
// 引入一个一个可能要呈现的组件
import Home from '../components/Home.vue'
import News from '../components/News.vue'
import About from '../components/About.vue'

// 第二步：创建路由器
const router = createRouter({
    // 路由器的工作模式
    history: createWebHistory(),

    // 路由规则
    routes: [
        {
            path: '/home',
            component: Home
        },
        {
            path: '/news',
            component: News
        },
        {
            path: '/about',
            component: About
        }
    ]
})

export default router
