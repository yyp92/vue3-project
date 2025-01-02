<template>
    <div class="rose-echart">
        <BaseEcharts :option="option" />
    </div>
</template>

<script
    setup
    lang="ts"
    name="RoseEchart"
>
    import BaseEcharts from './BaseEcharts.vue'
    import type {EChartsOption} from 'echarts'
    import {computed} from 'vue'
    import type { IEchartValueType } from '../types';

    interface Iprops {
        roesData: IEchartValueType[]
    }

    const props = defineProps<Iprops>()

    const option = computed<EChartsOption>(() => {
        return {
            toolbox: {
                show: true,
                feature: {
                    mark: {
                        show: true
                    },
                    dataView: {
                        show: true,
                        readOnly: false
                    },
                    restore: {
                        show: true
                    },
                    saveAsImage: {
                        show: true
                    }
                }
            },
            tooltip: {
                trigger: 'item'
            },
            series: [
                {
                    name: '访问来源',
                    type: 'pie',
                    // 内半径/外半径的大小
                    radius: [10, 160],
                    // 设置区域的位置
                    center: ['50%', '50%'],
                    bottom: '-15%',
                    // 圆心角一样，通过半径的不同表示大小
                    roseType: 'area',
                    itemStyle: {
                        borderRadius: 8
                    },
                    data: props.roesData,
                    label: {
                        show: false
                    }
                }
            ]
        }
    })
</script>

<style
    scoped
    lang="less"
>
    .rose-echart {}
</style>