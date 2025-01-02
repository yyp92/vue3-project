<template>
    <div class="line-echart">
        <BaseEcharts :option="option" />
    </div>
</template>

<script
    setup
    lang="ts"
    name="LineEchart"
>
    import BaseEcharts from './BaseEcharts.vue'
    import type {EChartsOption} from 'echarts'
    import type { IEchartValueType } from '../types';
    import {computed} from 'vue'

    const props = defineProps<{
        labels: string[]
        values: string[]
    }>()

    const option = computed<EChartsOption>(() => {
        return {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                    label: {
                        backgroundColor: '#6a7985'
                    }
                }
            },
            lagend: {},
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: props.labels
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    name: '分类销量统计',
                    type: 'line', 
                    stack: '总量',
                    areaStyle: {},
                    emphasis: {
                        focus: 'series'
                    },
                    data: props.values,
                }
            ]
        }
    })

</script>

<style
    scoped
    lang="less"
>
    .line-echart {}
</style>