<template>
    <div class="bar-echart">
        <BaseEcharts :option="option" />
    </div>
</template>

<script
    setup
    lang="ts"
    name="BarEchart"
>
    import BaseEcharts from './BaseEcharts.vue'
    import type {EChartsOption} from 'echarts'
    import type { IEchartValueType } from '../types';
    import {computed} from 'vue'
    import * as echarts from 'echarts'

    const props = defineProps<{
        labels: string[]
        values: string[]
    }>()

    const option = computed<EChartsOption>(() => {
        return {
            title: {
                text: '支持鼠标滚动缩放'
            },
            grid: {
                bottom: '5%'
            },
            xAxis: {
                data: props.labels,
                axisLabel: {
                    inside: true,
                    color: '#fff',
                    interval: 0
                },
                z: 10
            },
            yAxis: {
                axisLabel: {
                    color: '#999'
                }
            },
            dataZoom: [
                {
                    type: 'inside'
                }
            ],
            series: [
                {
                    type: 'bar',
                    showBackground: true,

                    // 系列图形的样式
                    itemStyle: {
                        color: new echarts.graphic.LinearGradient(
                            0,
                            0,
                            0,
                            1,
                            [
                                {
                                    offset: 0,
                                    color: '#83bff6'
                                },
                                {
                                    offset: 0.5,
                                    color: '#188df0'
                                },
                                {
                                    offset: 1,
                                    color: '#188df0'
                                },
                            ]
                        )
                    },
                    // 图形的高亮： 鼠标悬浮时候的状态：hover
                    emphasis: {
                        itemStyle: {
                            color: new echarts.graphic.LinearGradient(
                            0,
                            0,
                            0,
                            1,
                            [
                                {
                                    offset: 0,
                                    color: '#2378f7'
                                },
                                {
                                    offset: 0.5,
                                    color: '#2378f7'
                                },
                                {
                                    offset: 1,
                                    color: '#83bff6'
                                },
                            ]
                        )
                        }
                    },
                    data: props.values
                }
            ]
        }
    })
</script>

<style
    scoped
    lang="less"
>
    .bar-echart {}
</style>