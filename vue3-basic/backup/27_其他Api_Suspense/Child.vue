<template>
    <div class="child">
        <h2>我是Child组件</h2>

        <h3>当前求和为: {{ sum }}</h3>
    </div>
</template>

<script
    lang="ts"
    setup
    name="Child"
>
    import {ref} from 'vue'
    import axios from 'axios';

    let sum = ref(0)

    // @ts-ignore
    let {data: {content}} = await axios.get('https://api.uomg.com/api/rand.qinghua?format=json')
</script>

<style scoped>
    .child {
        background-color: skyblue;
        border-radius: 10px;
        box-shadow: 0 0 10px;
        padding: 10px;
    }
</style>