<template>
    <div class="app">
        <h2>我是APP组件</h2>
        <Hello />
        <Child />
    </div>
</template>

<script
    lang="ts"
    setup
    name="App"
>
    import {ref, Suspense} from 'vue'
    import Child from './Child.vue'
</script>

<style scoped>
    .app {
        background-color: #ddd;
        border-radius: 10px;
        box-shadow: 0 0 10px;
        padding: 10px;
    }

    button {
        margin-right: 10px;
    }
</style>
