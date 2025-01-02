<template>
    <div class="chart-card">
        <el-card>
            <template #header>Yummy hamburger</template>
            
            <slot></slot>
        </el-card>
    </div>
</template>

<script
    setup
    lang="ts"
    name="ChartCard"
>
</script>

<style
    scoped
    lang="less"
>
    .chart-card {}
</style>