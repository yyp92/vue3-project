<template>
    <div class="pie-echart">
        <BaseEcharts :option="option" />
    </div>
</template>

<script
    setup
    lang="ts"
    name="PieEchart"
>
    import BaseEcharts from './BaseEcharts.vue'
    import type {EChartsOption} from 'echarts'
    import type { IEchartValueType } from '../types';
    import {computed} from 'vue'

    interface Iprops {
        pieData: IEchartValueType[]
    }

    const props = defineProps<Iprops>()

    const option = computed<EChartsOption>(() => {
        return {
            // title: {
            //     text: 'text',
            //     subtext: 'fake',
            //     left: 'center'
            // },
            tooltips: {
                trigger:'item'
            },
            legend: {
                // orient: 'vertical',
                left: 'left',
            },
            series: [
                {
                    name: '111',
                    type: 'pie',
                    radius: '50%',
                    data: props.pieData,
                    emphasis: {
                        itemStyle: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(9, 0, 0, 0.5)'
                        }
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
    .pie-echart {}
</style>