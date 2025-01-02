<template>
    <div class="base-echarts">
        <div
            class="echart"
            ref="echartRef"
        ></div>
    </div>
</template>

<script
    setup
    lang="ts"
    name="BaseEcharts"
>
    import {ref, onMounted, watchEffect} from 'vue'
    import * as echarts from 'echarts'
    import type {EChartsOption} from 'echarts'

    interface Iprops {
        option: EChartsOption
    }

    const props = defineProps<Iprops>()

    const echartRef = ref<HTMLElement>()
    onMounted(() => {
        const echartInstance = echarts.init(
            echartRef.value!,
            'light',
            {
                renderer: 'canvas'
            }
        )

        watchEffect(() => echartInstance.setOption(props.option))
    })
</script>

<style
    scoped
    lang="less"
>
    .base-echarts {}

    .echart {
        height: 300px;
    }
</style>