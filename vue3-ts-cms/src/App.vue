<template>
    <div class="app">
        <el-config-provider :locale="zhCn">
            <router-view></router-view>
        </el-config-provider>
    </div>
</template>

<script
    setup
    lang="ts"
    name="App"
>
    import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
</script>

<style scoped>
    .app {
        width: 100vw;
        height: 100vh;
    }
</style>
