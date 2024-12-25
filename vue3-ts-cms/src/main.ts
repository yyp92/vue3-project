import { createApp } from 'vue'
import App from './App.vue'
import '@/assets/css/index.less'
import router from './router'
import pinia from './store'
import registerIcons from './global/register-icons'

// 针对 E了Message 和 ElLoading 等组件引入样式
// import 'element-plus/theme-chalk/el-message.css'

const app = createApp(App)

// 注册图标全局组件
app.use(registerIcons)

app.use(router)
app.use(pinia)
app.mount('#app')
