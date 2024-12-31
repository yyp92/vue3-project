<template>
    <div class="search">
        <el-form
            :label-width="searchConfig.labelWidth ?? '80px'"
            size="large"
            :model="searchForm"
            ref="formRef"
        >
            <el-row :gutter="20">
                <template
                    v-for="item in searchConfig.formItems"
                    :key="item.prop"
                >
                    <el-col :span="8">
                        <el-form-item
                            :label="item.label"
                            :prop="item.prop"
                        >
                            <template v-if="item.type === 'input'">
                                <el-input
                                    v-model="searchForm[item.prop]"
                                    :placeholder="item.placeholder"
                                />
                            </template>

                            <template v-if="item.type === 'date-picker'">
                                <el-date-picker
                                    type="daterange"
                                    range-separator="-"
                                    start-placeholder="开始时间"
                                    end-placeholder="结束时间"
                                    v-model="searchForm[item.prop]"
                                />
                            </template>

                            <template v-if="item.type === 'select'">
                                <el-select
                                    v-model="searchForm[item.prop]"
                                    :placeholder="item.placeholder"
                                >
                                    <template
                                        v-for="option in item.options"
                                        :key="option.value"
                                    >
                                        <el-option
                                            :label="option.label"
                                            :value="option.value"
                                        />
                                    </template>
                                </el-select>
                            </template>
                        </el-form-item>
                    </el-col>
                </template>
            </el-row>
        </el-form>

        <div class="btns">
            <el-button
                icon="Refresh"
                @click="handleReset"
            >重置</el-button>

            <el-button
                type="primary"
                icon="Search"
                @click="handleQuery"
            >查询</el-button>
        </div>
    </div>
</template>

<script
    setup
    lang="ts"
    name="PageSearch"
>
    import type { ElForm } from 'element-plus'
    import {reactive, ref} from 'vue'

    interface Iprops {
        searchConfig: {
            formItems: any[],
            labelWidth?: string
        },
    }

    const emit = defineEmits(['queryClick', 'resetClick']);
    const props = defineProps<Iprops>()

    // 定义 form 的数据
    const initiaForm: any = {}
    for (const item of props.searchConfig.formItems) {
        initiaForm[item.prop] = item?.initialValue ?? ''
    }

    const searchForm = reactive(initiaForm)
    const formRef = ref<InstanceType<typeof ElForm>>()
    

    function handleReset() {
        formRef.value?.resetFields()
        emit('resetClick')
    }

    function handleQuery() {
        emit('queryClick', searchForm)
    }
</script>

<style
    scoped
    lang="less"
>
    .search {
        background: #fff;
        padding: 20px;

        .el-form-item {
            padding: 12px 10px;
            margin-bottom: 0;
        }
    }

    .btns {
        text-align: right;
        padding: 0 50px 10px 0;
    }
</style>