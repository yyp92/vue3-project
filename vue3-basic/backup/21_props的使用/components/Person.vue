<template>
    <div class="person">
        <ul>
            <li
                v-for="p in list"
                :key="p.id"
            >
                {{ p.name }} -- {{ p.age }}
            </li>
        </ul>
    </div>
</template>
 
<script
    setup
    lang="ts"
    name="Person"
>
    import {defineProps, withDefaults} from 'vue'
    import {
        type PersonInter,
        type Persons
    } from '../types'

    // 接收 list
    // defineProps(['list'])

    // 接收 list + 限制类型
    // defineProps<{list: Persons}>()

    // 接收 list + 限制类型 + 限制必要性 + 指定默认值
    withDefaults(
        // defineProps 可以不引入，凡是这种 define 开头的都可以不用引用
        defineProps<{list?: Persons}>(),
        {
            list: () => [
                {
                    id: '01',
                    name: '康师傅',
                    age: 10
                }
            ]
        }
    )

    // 接收 list, 同时将 props 保存起来
    // let x = defineProps(['list'])
    // console.log(x)
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
