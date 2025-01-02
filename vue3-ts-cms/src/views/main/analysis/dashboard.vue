<template>
    <div class="dashBoard">
        <el-row :gutter="10">
            <template
                v-for="item in amountList"
                :key="item.amount"
            >
                <el-col :span="6">
                    <CountCard v-bind="item"/>
                </el-col>
            </template>
        </el-row>

        <el-row :gutter="10">
            <el-col :span="7">
                <ChartCard>
                    <PieEchart :pie-data="showGoodsCategoryCount" />
                </ChartCard>
            </el-col>

            <el-col :span="10">
                <ChartCard>
                    
                </ChartCard>
            </el-col>

            <el-col :span="7">
                <ChartCard>
                    <RoseEchart :roes-data="showGoodsCategoryCount" />
                </ChartCard>
            </el-col>
        </el-row>

        <el-row :gutter="10">
            <el-col :span="12">
                <ChartCard>
                    <LineEchart
                        v-bind="showGoodsCategorySale"
                    />
                </ChartCard>
            </el-col>

            <el-col :span="12">
                <ChartCard>
                    <BarEchart
                        v-bind="showGoodsCategoryFavor"
                    />
                </ChartCard>
            </el-col>
        </el-row>
    </div>
</template>

<script
    setup
    lang="ts"
    name="DashBoard"
>
    import useAnalysisStore from '@/store/main/analysis/analysis';
    import CountCard from './components/CountCard.vue'
    import ChartCard from './components/ChartCard.vue'
    import {PieEchart, LineEchart, RoseEchart, BarEchart} from '@/components/page-echarts'
    import { storeToRefs } from 'pinia';
    import {computed} from 'vue'

    const analysisStore = useAnalysisStore()
    analysisStore.fetchAnalysisDataAction()

    const {
        amountList,
        goodsCategoryCount,
        goodsCategorySale,
        goodsCategoryFavor
    } = storeToRefs(analysisStore)

    const showGoodsCategoryCount = computed(() => {
        return goodsCategoryCount.value.map((item) => ({
            name: item.name,
            value: item.goodsCount
        }))
    })

    const showGoodsCategorySale = computed(() => {
        const labels = goodsCategorySale.value.map((item) => item.name)
        const values = goodsCategorySale.value.map((item) => item.goodsCount)

        return {
            labels,
            values
        }
    })

    const showGoodsCategoryFavor = computed(() => {
        const labels = goodsCategoryFavor.value.map((item) => item.name)
        const values = goodsCategoryFavor.value.map((item) => item.goodsFavor)

        return {
            labels,
            values
        }
    })
</script>

<style
    scoped
    lang="less"
>
    .dashBoard {}

    .el-row {
        margin-bottom: 12px;
    }
</style>