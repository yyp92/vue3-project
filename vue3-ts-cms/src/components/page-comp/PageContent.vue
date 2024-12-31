<template>
    <div class="content">
        <div class="header">
            <div class="title">部门列表</div>

            <el-button
                type="primary"
                @click="handleNewUserClick"
            >新建部门</el-button>
        </div>

        <div class="table">
            <el-table
                :data="pageList"
                style="width: 100%"
                border
            >
                <el-table-column
                    type="selection"
                    width="50"
                    align="center"
                />

                <el-table-column
                    type="index"
                    label="序号"
                    width="60"
                    align="center"
                />

                <el-table-column 
                    prop="name"
                    label="部门名称"
                    width="120"
                    align="center"
                />


                <el-table-column
                    prop="leader"
                    label="部门领导"
                    width="120"
                    align="center"
                />

                <el-table-column
                    prop="parentId"
                    label="上级部门"
                    width="120"
                    align="center"
                />

                <el-table-column
                    prop="createAt"
                    label="创建时间"
                    align="center"
                >
                    <template #default="scope">
                        {{ formatUTC(scope.row.createAt) }}
                    </template>
                </el-table-column>

                <el-table-column
                    prop="updateAt"
                    label="更新时间"
                    align="center"
                >
                    <template #default="scope">
                        {{ formatUTC(scope.row.updateAt) }}
                    </template>
                </el-table-column>

                <el-table-column
                    label="操作"
                    width="130"
                    align="center"
                >
                    <template #default="scope">
                        <el-button
                            size="small"
                            text
                            type="primary"
                            icon="Edit"
                            @click="handleEditBtnClick(scope.row)"
                        >编辑</el-button>

                        <el-button
                            size="small"
                            text
                            type="danger"
                            icon="Delete"
                            @click="handleDeleteBtnClick(scope.row.id)"
                        >删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>

        <div class="pagination">
            <el-pagination
                v-model:current-page="currentPage"
                v-model:page-size="pageSize"
                :page-sizes="[10, 20, 30]"
                background
                layout="total, prev, pager, next, sizes, jumper"
                :total="pageTotalCount"
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
            />
        </div>
    </div>
</template>

<script
    setup
    lang="ts"
    name="PageContent"
>
    import {storeToRefs} from 'pinia'
    import { ref } from 'vue'
    import useSystemStore from '@/store/main/system/system'
    import {formatUTC} from '@/utils/format'

    const emit = defineEmits(['newClick', 'editClick'])

    const systemStore = useSystemStore()

    const {pageList, pageTotalCount} = storeToRefs(systemStore)
    const currentPage = ref(1)
    const pageSize = ref(10)

    fetchPageListData()


    function handleSizeChange() {
        fetchPageListData()
    }

    function handleCurrentChange () {
        fetchPageListData()
    }

    function fetchPageListData(formData: any = {}) {
        const size = pageSize.value
        const offset = (currentPage.value - 1) * size
        const info = {
            size,
            offset,
            ...formData
        }

        systemStore.postPageListAction('department', info)
    }

    function handleDeleteBtnClick(id: number) {
        systemStore.deletePageByIdAction('department', id)
    }

    function handleNewUserClick() {
        emit('newClick')
    }

    function handleEditBtnClick(data: any) {
        emit('editClick', data)
    }

    defineExpose({
        fetchPageListData
    })
</script>

<style
    scoped
    lang="less"
>
    .content {
        background: #fff;
        margin-top: 20px;
        padding: 20px;

        .header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 12px;

            .title {
                font-size: 18px;
                font-weight: 600;
            }
        }

        .table {
            :deep(.el-table__cell) {
                padding: 12px 0 !important;
            }

            .el-button {
                margin-left: 0;
                padding: 0 4px;
            }
        }

        .pagination {
            margin-top: 12px;
            display: flex;
            justify-content: flex-end;
            align-items: center;
        }
    }
</style>