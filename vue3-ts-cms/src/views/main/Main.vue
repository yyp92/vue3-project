<template>
    <div class="main">
        <h2>main</h2>

        <button @click="handleExitClick">退出登录</button>
    </div>
</template>

<script
    setup
    lang="ts"
    name="Main"
>
    import { LOGIN_TOKEN } from '@/global/constants';
    import { localCache } from '@/utils/cache';
    import { useRouter } from 'vue-router';

    const router = useRouter()

    function handleExitClick() {
        localCache.removeCache(LOGIN_TOKEN)
        router.push('/login')
    }
</script>

<style
    scoped
    lang="less"
>
    .main {
        color: red;
    }
</style>