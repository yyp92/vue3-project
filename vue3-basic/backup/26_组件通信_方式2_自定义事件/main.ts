// 引入 createApp 用于创建应用
import {createApp} from 'vue'

// 引入 App 根组件
import App from './App.vue'
// 第一步：引入pinia
import {createPinia} from 'pinia'
import router from './router'

// 创建一个应用
const app = createApp(App)

// 第二步：创建 pinia
const pinia = createPinia()
// 第三步：安装 pinia
app.use(pinia)
// 安装路由器
app.use(router)

// 挂载整个应用到app容器中
app.mount('#app')
