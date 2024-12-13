/**
 * * 创建一个路由器，并暴露出去
 */

// 第一步：引入 createRouter
import {createRouter, createWebHistory} from 'vue-router'
// 引入一个一个可能要呈现的组件
import Home from '../pages/Home.vue'
import News from '../pages/News.vue'
import About from '../pages/About.vue'
import Detail from '../pages/Detail.vue'

// 第二步：创建路由器
const router = createRouter({
    // 路由器的工作模式
    history: createWebHistory(),

    // 路由规则
    routes: [
        {
            name: 'zhuye',
            path: '/home',
            component: Home
        },
        {
            name: 'xinwen',
            path: '/news',
            component: News,
            children: [
                {
                    name: 'xiangqing',
                    path: 'detail',
                    // :content? 就是可传可不传
                    // path: 'detail/:id/:title/:content?',
                    component: Detail,


                    // 第一种写法：将路由收到的所有 params 参数作为 props 传给路由组件
                    // props: true,

                    // 第二种写法：函数写法：可以自己决定将什么作为 props 给路由组件
                    props(route) {
                        return route.query
                    },

                    // 第二种写法：对象写法：可以自己决定将什么作为 props 给路由组件
                    // props: {
                    //     a: 100,
                    //     b: 100,
                    //     c: 100
                    // }
                }
            ]
        },
        {
            name: 'guanyu',
            path: '/about',
            component: About
        },
        {
            path: '/',
            redirect: '/home'
        },
    ]
})

export default router
