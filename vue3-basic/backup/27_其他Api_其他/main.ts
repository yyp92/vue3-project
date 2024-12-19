// 引入 createApp 用于创建应用
import {createApp} from 'vue'

// 引入 App 根组件
import App from './App.vue'
import Hello from './Hello.vue'

// 创建一个应用
const app = createApp(App)

app.component('Hello', Hello)

// 指令
app.directive('beauty', (element, {value}) => {
    element.innerText += value
    element.style.color = 'green'
    element.style.backgroundColor = 'yellow'
})

// 挂载整个应用到app容器中
app.mount('#app')
