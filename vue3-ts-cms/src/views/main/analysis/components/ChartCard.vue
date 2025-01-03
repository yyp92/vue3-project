<template>
    <div class="chart-card">
        <el-card>
            <template #header>统计图</template>
            
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