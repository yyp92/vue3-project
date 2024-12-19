<template>
    <button @click="isShow = true">展示弹窗</button>

    <!-- teleport 传送门 -->
    <teleport to="body">
        <div
            class="modal1"
            v-show="isShow"
        >
            <h2>我是弹窗的标题</h2>
            <p>我是弹窗的内容</p>
            <button @click="isShow = false">关闭弹窗</button>
        </div>
    </teleport>
</template>

<script
    lang="ts"
    setup
    name="Modal"
>
    import {
        ref,
        reactive,
        customRef
    } from 'vue'

    let isShow = ref(false)
</script>

<style scoped>
    .modal1 {
        width: 200px;
        height: 150px;
        background-color: skyblue;
        border-radius: 10px;
        padding: 5px;
        box-shadow: 0 0 5px;
        text-align: conter;
        position: fixed;
        left: 50%;
        top: 20px;
        margin-left: -100px;
    }
</style>
