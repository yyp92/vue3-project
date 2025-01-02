<template>
    <div class="count-card">
        <div class="header">
            <span>{{ title }}</span>

            <el-tooltip
                :content="tips"
                placement="top"
                effect="dark"
            >
                <el-icon>
                    <Warning />
                </el-icon>
            </el-tooltip>
        </div>

        <div class="content">
            <!-- <span v-if="amount === 'saleroom'">￥</span> -->
            <span
                class="count"
                ref="count1Ref"
            >{{ number1 }}</span>
        </div>

        <div class="footer">
            <span>{{ subtitle }}</span>
            <!-- <span v-if="amount === 'saleroom'">￥</span> -->
            <span ref="count2Ref">{{ number2 }}</span>
        </div>
    </div>
</template>

<script
    setup
    lang="ts"
    name="CountCard"
>
    import {CountUp} from 'countup.js'
    import { ref, onMounted } from 'vue'

    interface Iprops {
        amount?: string
        title?: string
        tips?: string
        number1?: number
        number2?: number
        subtitle?: string
    }

    const props = withDefaults(
        defineProps<Iprops>(),
        {
            title: '商品总销量',
            tips: '所有的商品总销量',
            number1: 509989,
            number2: 509989,
            subtitle: '商品总销量'
        }
    )

    const count1Ref = ref<HTMLElement>()
    const count2Ref = ref<HTMLElement>()
    const countOption = {
        prefix: props.amount === 'saleroom' ? '￥' : ''
    }
    onMounted(() => {
        /**
         * 参数1: 执行动画的元素
         * 参数2: 数字增加到多少
         */
        const countup1 = new CountUp(
            count1Ref.value!,
            props.number1,
            countOption
        )
        countup1.start()

        const countup2 = new CountUp(
            count2Ref.value!,
            props.number2,
            countOption
        )
        countup2.start()
    })
    
</script>

<style
    scoped
    lang="less"
>
    .count-card {
        display: flex;
        flex-direction: column;
        padding: 0 20px;
        height: 130px;
        background: #fff;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }

    .header {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        height: 38px;
        font-size: 14px;
        color: rgba(0, 0, 0, 0.45);
    }

    .content {
        flex: 1;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin-left: 0;
        font-size: 26px;
        color: rgba(0, 0, 0, 0.85)
    }

    .footer {
        display: flex;
        height: 38px;
        line-height: 38px;
        font-size: 14px;
        letter-spacing: 1px;
        color: rgba(0, 0, 0, 0.85);
        border-top: 1px solid #f0f0f0;
    }
</style>