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
                        label="用户名"
                        prop="name"
                    >
                        <el-input
                            placeholder="请输入用户名"
                            v-model="searchForm.name"
                        />
                    </el-form-item>
                </el-col>

                <el-col :span="8">
                    <el-form-item
                        label="真实姓名"
                        prop="realname"
                    >
                        <el-input
                            placeholder="请输入真实姓名"
                            v-model="searchForm.realname"
                        />
                    </el-form-item>
                </el-col>

                <el-col :span="8">
                    <el-form-item
                        label="手机号码"
                        prop="cellphone"
                    >
                        <el-input
                            placeholder="请输入手机号码"
                            v-model="searchForm.cellphone"
                        />
                    </el-form-item>
                </el-col>

                <el-col :span="8">
                    <el-form-item
                        label="状态"
                        prop="enable"
                    >
                        <el-select
                            placeholder="请选择状态"
                            v-model="searchForm.enable"
                        >
                            <el-option
                                label="启用"
                                :value="1"
                            />

                            <el-option
                                label="禁用"
                                :value="0"
                            />
                        </el-select>
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
    name="UserSearch"
>
    import type { ElForm } from 'element-plus'
    import {reactive, ref} from 'vue'

    const searchForm = reactive({
        name: '',
        realname: '',
        cellphone: '',
        enable: 1,
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