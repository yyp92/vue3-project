import { createApp } from 'vue'
import App from './App.vue'
import 'normalize.css'
import '@/assets/css/index.less'
import router from './router'
import pinia from './store'
import registerIcons from './global/register-icons'

const app = createApp(App)

// 注册图标全局组件
app.use(registerIcons)

app.use(router)
app.use(pinia)
app.mount('#app')
