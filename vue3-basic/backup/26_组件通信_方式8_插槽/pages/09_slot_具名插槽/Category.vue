<template>
    <div class="category">
        <h2>{{title}}</h2>

        <!-- 默认插槽 -->
        <!-- <slot>默认内容</slot> -->

        <!-- 具名插槽 -->
        <slot name="s1">默认内容1</slot>
        <slot name="s2">默认内容2</slot>
    </div>
</template>

<script
    setup
    lang="ts"
    name="Category"
>
    defineProps(['title'])
</script>

<style scoped>
    .category {
        width: 200px;
        height: 300px;
        background-color: skyblue;
        padding: 10px;
        border-radius: 10px;
        box-shadow: 0 0 10px;
    }
</style>