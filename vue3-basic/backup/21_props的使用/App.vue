<template>
    <Person
        a="哈哈"
        :list="personList"
    />
</template>

<script lang="ts" setup name="App">
    import {reactive} from 'vue'
    import Person from './components/Person.vue'
    import {
        type Persons
    } from './types'

    let personList = reactive<Persons>([
        {
            id: '01',
            name: '张三',
            age: 18
        },
        {
            id: '02',
            name: '李四',
            age: 20
        },
        {
            id: '03',
            name: '王五',
            age: 22
        },
    ])
</script>
