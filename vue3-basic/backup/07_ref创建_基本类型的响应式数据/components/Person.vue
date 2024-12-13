<template>
    <div class="person">
        <h2>姓名：{{name}}</h2>
        <h2>年龄：{{age}}</h2>
        <h2>地址： {{address}}</h2>

        <button @click="changeName">修改名字</button>
        <button @click="changeAge">修改年龄</button>
        <button @click="showTel">查看联系方式</button>
    </div>
</template>

<!-- <script lang="ts">
    export default {
        name: 'Person',
    }
</script> -->

<script
    lang="ts"
    setup
    name="Person"
>
    import {ref} from 'vue'

    let name = ref('张三')
    let age = ref(18)
    let tel = '13888888888'
    let address = '北京昌平区宏福苑·宏福科技园'

    console.log('name', name)
    console.log('age', age)
    console.log('tel', tel)
    console.log('address', address)

    
    // 方法
    function changeName() {
        name.value = 'zhang-san'
    }

    function changeAge() {
        age.value += 1
    }

    function showTel() {
        alert(tel)
    }
</script>

<style scoped>
    .person {
        background-color: skyblue;
        box-shadow: 0 0 10px;
        border-radius: 10px;
        padding: 20px
    }

    button {
        margin: 0 5px;
    }
</style>
