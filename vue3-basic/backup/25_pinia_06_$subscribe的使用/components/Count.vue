<template>
    <div class="count">
        <h2>当前求和为：{{ sum }}, 放大10倍后:{{ bigSum }}</h2>

        <h3>欢迎来到：{{ school }}, 坐落于：{{ address }}, 大写：{{ upperSchool }}</h3>

        <select v-model.number="n">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>

        <button @click="add">加</button>
        <button @click="minus">减</button>
    </div>
</template>

<script
    lang="ts"
    setup
    name="Count"
>
    import {ref, toRefs} from 'vue'
    import {storeToRefs} from 'pinia'
    import { useCountStore } from '../store/count';

    const countStore = useCountStore()

    // 不推荐，因为会把store所有的属性都进行 ref 包裹
    // const {sum, school, address} = toRefs(countStore)

    // storeToRefs 只会关注 store 中数据，不会对方法进行 ref 包裹
    const {
        sum,
        school,
        address,
        bigSum,
        upperSchool
    } = storeToRefs(countStore)


    // 以下两种方式都可以拿到 state 中的数据
    // console.log('@@', countStore.sum)
    // console.log('@@', countStore.$state.sum)

    let n = ref(1)


    function add() {
        countStore.increment(n.value)
    }

    function minus() {
        countStore.sum -= n.value
    }
</script>

<style scoped>
    .count {
        background-color: skyblue;
        padding: 10px;
        border-radius: 10px;
        box-shadow: 0 0 10px;
    }

    select,
    button {
        margin: 0 5px;
        height: 25px;
    }
</style>
