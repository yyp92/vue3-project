<template>
    <div class="person">
        <h2>姓名：{{ person.name }}</h2>

        <h2>年龄：{{ person.age }} {{ n1 }}</h2>

        <button
            @click="changeName"
        >修改姓名</button>

        <button
            @click="changeAge"
        >修改年龄</button>
    </div>
</template>

<script
    setup
    lang="ts"
    name="Person"
>
    import {reactive, toRef, toRefs} from 'vue'

    let person= reactive({
        name: '张三',
        age: 18
    })

    // 将一个响应式对象中的每一个属性，转换为ref对象。
    // toRef,toRefs 功能一致，但是 toRefs 可以批量转换 
    let {
        name,
        age
    } = toRefs(person)
    let n1 = toRef(person, 'age')


    function changeName() {
        name.value += '~'
    }

    function changeAge() {
        age.value += 1
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

    li {
        font-size: 20px;
    }
</style>
