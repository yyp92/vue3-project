<template>
    <h2 ref="title2">您好</h2>
    <!-- <button @click="showLog">点我输出h2这个元素</button> -->

    <button @click="showLog">测试</button>

    <Person ref="ren" />
</template>

<script lang="ts" setup name="App">
    import Person from './components/Person.vue'
    import {ref} from 'vue'

    // 普通dom元素是拿的标签
    const title2 = ref()
    // 组件是拿的实例
    const ren = ref()

    function showLog() {
        // console.log(title2.value)
        console.log(ren.value)
    }
</script>
