<template>
    <Person v-if="isShow" />
</template>

<script lang="ts" setup name="App">
    import Person from './components/Person.vue'
    import {ref, onBeforeMount, onMounted} from 'vue'

    let isShow = ref(true)


    // 创建
    console.log('父-创建')

    // 挂载前
    onBeforeMount(() => {
        console.log('父-挂载前')
    })

    // 挂载完毕
    onMounted(() => {
        console.log('父-挂载完毕')
    })
</script>
