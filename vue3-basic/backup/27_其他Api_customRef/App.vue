<template>
    <div class="app">
        <h2>{{ msg }}</h2>
        <input type="text" v-model="msg" />
    </div>
</template>

<script
    lang="ts"
    setup
    name="App"
>
    import {
        ref,
        reactive,
        customRef
    } from 'vue'
    import useMsgRef from './useMsgRef';

    // 使用 vue 提供的默认 ref 定义响应式数据，数据一变，页面就更新
    // let msg = ref('你好')


    // 使用 vue 提供的 customRef 定义响应式数据
    // let initValue = '你好'
    // let timer: number

    // // track: 跟踪， trigger: 触发
    // let msg = customRef((track, trigger) => {
    //     return {
    //         //  get 何时被调用： msg 被读取时
    //         get() {
    //             // 告诉 vue 数据 msg 很重要，你要对 msg 进行持续关注，一旦 msg 变化就去更新
    //             track()

    //             return initValue
    //         },

    //         //  set 何时被调用： msg 被修改时
    //         set(value) {
    //             clearInterval(timer)

    //             timer = setTimeout(() => {
    //                 initValue = value

    //                 // 通知 vue 一下，数据 msg 变化了
    //                 trigger()
    //             }, 1000)
    //         }
    //     }
    // })


    // 使用 useMsgRef 来定义一个响应式数据且有延迟效果
    let {msg} = useMsgRef('你好', 2000)
</script>

<style scoped>
    .app {
        background-color: #ddd;
        border-radius: 10px;
        box-shadow: 0 0 10px;
        padding: 10px;
        margin: 20px;
    }

    button {
        margin-right: 10px;
    }
</style>
