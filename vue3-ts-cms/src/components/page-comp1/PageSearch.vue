<template>
    <div class="search">
        <el-form
            label-width="80px"
            size="large"
            :model="searchForm"
            ref="formRef"
        >
            <el-row :gutter="20">
                <el-col :span="8">
                    <el-form-item
                        label="部门名称"
                        prop="name"
                    >
                        <el-input
                            placeholder="请输入部门名称"
                            v-model="searchForm.name"
                        />
                    </el-form-item>
                </el-col>

                <el-col :span="8">
                    <el-form-item
                        label="部门领导"
                        prop="leader"
                    >
                        <el-input
                            placeholder="请输入部门领导"
                            v-model="searchForm.leader"
                        />
                    </el-form-item>
                </el-col>

                <el-col :span="8">
                    <el-form-item
                        label="创建时间"
                        prop="createAt"
                    >
                        <el-date-picker
                            type="daterange"
                            range-separator="-"
                            start-placeholder="开始时间"
                            end-placeholder="结束时间"
                            v-model="searchForm.createAt"
                        />
                    </el-form-item>
                </el-col>
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

    const searchForm = reactive({
        name: '',
        leader: '',
        createAt: ''
    })
    const formRef = ref<InstanceType<typeof ElForm>>()
    const emit = defineEmits(['queryClick', 'resetClick']);
    

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