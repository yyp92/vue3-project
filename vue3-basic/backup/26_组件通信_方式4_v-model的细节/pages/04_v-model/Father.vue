<template>
    <div class="father">
        <h3>父组件</h3>

        <h4>{{ username }}</h4>
        <h4>{{ password }}</h4>

        <!-- v-model 用在 html 标签上 -->
        <!-- <input
            type="text"
            v-model="username"
        /> -->

        <!-- v-model 底层原理 -->
        <!-- <input
            type="text"
            :value="username"
            @input="username = (<HTMLInputElement>$event.target).value"
        /> -->


        <!-- 
            对于原生事件，$event 就是事件对象 ==> 能.target
            对于自定义事件，$event 就是触发事件时，所传递的数据 ==> 不能.target
        -->
        <!-- v-model 用在 组件 标签上 -->
        <!-- <AtguiguInput v-model="username" /> -->

        <!-- <AtguiguInput
            :modelValue="username"
            @update:modelValue="username = $event"
        /> -->

        <!-- 修改modelValue -->
        <AtguiguInput
            v-model:ming="username"
            v-model:mima="password"
        />
    </div>
</template>

<script
    setup
    lang="ts"
    name="Father"
>
    import {ref} from 'vue'
    import AtguiguInput from './AtguiguInput.vue'

    let username = ref('zhangsan')
    let password = ref('123456')
</script>

<style scoped>
    .father {
        background-color: rgb(165, 164, 164);
        padding: 20px;
        border-radius: 10px;
    }
</style>