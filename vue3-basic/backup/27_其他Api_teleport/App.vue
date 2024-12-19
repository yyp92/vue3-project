<template>
    <div class="app">
        <h2>我是app组件</h2>

        <img
            src="http://www.atguigu.com/images/index_new/logo.png"
            alt=""
        />

        <br/>

        <Modal />
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
    import Modal from './Modal.vue'
</script>

<style scoped>
    .app {
        background-color: #ddd;
        border-radius: 10px;
        box-shadow: 0 0 10px;
        padding: 10px;
        margin: 20px;
        width: 400px;
        height: 400px;
        filter: saturate(200%);
    }

    img {
        width: 270px;
    }

    button {
        margin-right: 10px;
    }
</style>
