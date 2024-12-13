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
    name="Person234"
>
    let name = '张三'
    let age = 18
    let tel = '13888888888'
    let address = '北京昌平区宏福苑·宏福科技园'

    
    // 方法
    function changeName() {
        name = 'zhang-san'
    }

    function changeAge() {
        age += 1
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
