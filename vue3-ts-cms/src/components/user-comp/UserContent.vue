<template>
    <div class="content">
        <div class="header">
            <div class="title">用户列表</div>

            <el-button
                type="primary"
            >新建用户</el-button>
        </div>

        <div class="table">
            <el-table
                :data="usersList"
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
                    label="用户名"
                    width="120"
                    align="center"
                />


                <el-table-column
                    prop="realname"
                    label="真实姓名"
                    width="120"
                    align="center"
                />

                <el-table-column
                    prop="cellphone"
                    label="手机号码"
                    width="150"
                    align="center"
                />

                <el-table-column
                    prop="enable"
                    label="状态"
                    width="80"
                    align="center"
                >
                    <!-- 作用域插槽 -->
                    <template #default="scope">
                        <el-button
                            size="small"
                            :type="scope.row.enable ? 'primary' : 'danger'"
                            plain
                        >
                            {{ scope.row.enable ? '启用' : '禁用' }}
                        </el-button>
                    </template>
                </el-table-column>

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
                :total="usersTotalCount"
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
            />
        </div>
    </div>
</template>

<script
    setup
    lang="ts"
    name="UserContent"
>
    import {storeToRefs} from 'pinia'
    import { ref } from 'vue'
    import useSystemStore from '@/store/main/system/system'
    import {formatUTC} from '@/utils/format'

    const systemStore = useSystemStore()

    const {usersList, usersTotalCount} = storeToRefs(systemStore)
    const currentPage = ref(1)
    const pageSize = ref(10)

    fetchUserListData()


    function handleSizeChange() {
        fetchUserListData()
    }

    function handleCurrentChange () {
        fetchUserListData()
    }

    function fetchUserListData(formData: any = {}) {
        const size = pageSize.value
        const offset = (currentPage.value - 1) * size
        const info = {
            size,
            offset,
            ...formData
            // name: 'c'
        }

        systemStore.postUsersListAction(info)
    }

    function handleDeleteBtnClick(id: number) {
        systemStore.deleteUserByIdAction(id)
    }

    defineExpose({
        fetchUserListData
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