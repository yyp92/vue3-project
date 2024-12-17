<template>
    <div class="father">
        <h3>父组件</h3>

        <h4>房产：{{ house }}</h4>

        <button @click="changeToy">修改 Child1 的玩具</button>
        <button @click="changeComputer">修改 Child2 的电脑</button>
        <button @click="getAllChild($refs)">让所有孩子的书变多</button>

        <Child1 ref="c1" />
        <Child2 ref="c2" />
    </div>
</template>

<script
    setup
    lang="ts"
    name="Father"
>
    import {ref, reactive} from 'vue'
    import Child1 from './Child1.vue'
    import Child2 from './Child2.vue'

    // $refs: 用于 父 --> 子
    // $parent: 用于 子 --> 父

    let house = ref(4)
    let c1 = ref()
    let c2 = ref()

    // 注意点：当访问 obj.c 的时候，底层会自动读取 value 属性，因为 c 是在 obj 这个响应式对象中
    // let obj = reactive({
    //     a: 1,
    //     b: 2,
    //     c: ref(3)
    // })
    // let x = ref(4)
    // console.log(obj.a)
    // console.log(obj.b)
    // console.log(obj.c)
    // console.log(x.value)


    function changeToy() {
        c1.value.toy = "小猪佩奇"
    }

    function changeComputer() {
        c2.value.computer = "华为"
    }

    function getAllChild(refs: {[key: string]: any}) {
        for (let key in refs) {
            refs[key].book += 3
        }
    }


    // 把数据交给外部
    defineExpose({
        house
    })
</script>

<style scoped>
    .father {
        background-color: rgb(165, 164, 164);
        padding: 20px;
        border-radius: 10px;
    }

    button {
        margin-right: 12px;
    }
</style>