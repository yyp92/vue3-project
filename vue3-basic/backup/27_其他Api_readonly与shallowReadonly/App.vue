<template>
    <div class="app">
        <h2>sum1求和为: {{ sum1 }}</h2>
        <h2>sum2求和为: {{ sum2 }}</h2>
        <h2>当前汽车 car1 为: {{ car1 }}</h2>
        <h2>当前汽车 car2 为: {{ car2 }}</h2>

        <button @click="changeSum1">sum1+1</button>
        <button @click="changeSum2">sum2+1</button>

        <hr/>

        <button @click="changeBrand1">修改品牌 car1</button>
        <button @click="changeColor1">修改颜色 car1</button>
        <button @click="changePrice1">修改价格 car1</button>

        <hr/>
        
        <button @click="changeBrand2">修改品牌 car2</button>
        <button @click="changeColor2">修改颜色 car2</button>
        <button @click="changePrice2">修改价格 car2</button>
    </div>
</template>

<script
    lang="ts"
    setup
    name="App"
>
    import {
        ref,
        readonly,
        reactive,
        shallowReadonly
    } from 'vue'

    let sum1 = ref(0)
    let sum2 = readonly(sum1)
    let car1 = reactive({
        brand: '奔驰',
        options: {
            color: '红色',
            price: 100
        }
    })
    let car2 = shallowReadonly(car1)
    

    function changeSum1() {
        sum1.value += 1
    }

    // sum2是不能修改的
    function changeSum2() {
        // sum2.value += 1
    }

    function changeBrand1() {
        car1.brand = '宝马'
    }
    function changeColor1() {
        car1.options.color = '绿色'
    }
    function changePrice1() {
        car1.options.price += 10
    }

    function changeBrand2() {
        // car2.brand = '宝马'
    }
    function changeColor2() {
        car2.options.color = '绿色'
    }
    function changePrice2() {
        car2.options.price += 10
    }
</script>

<style scoped>
    .app {
        background-color: #ddd;
        border-radius: 10px;
        box-shadow: 0 0 10px;
        padding: 10px;
        margin: 20px;
    }

    button {
        margin-right: 10px;
    }
</style>
