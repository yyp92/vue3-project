<template>
    <div class="main">
        <h2>main: {{ counterStore.counter }}</h2>
    </div>
</template>

<script
    setup
    lang="ts"
    name="Main"
>
    import useCountStore from '@/store/counter'

    const counterStore = useCountStore()
</script>

<style
    scoped
    lang="less"
>
    .main {
        color: red;
    }
</style>