<template>
    <div class="app">
        <h1>你好</h1>

        <Person />
    </div>
</template>

<script lang="ts">
    import Person from './components/Person.vue'

    export default {
        // 组件名
        name: 'App',

        // 注册组件
        components: {
            Person
        }
    }
</script>

<style>
    .app {
        background-color: #ddd;
        box-shadow: 0 0 10px;
        border-radius: 10px;
        padding: 20px
    }
</style>
