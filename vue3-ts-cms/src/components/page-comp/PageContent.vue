<template>
    <div class="content">
        <div class="header">
            <div class="title">{{ contentConfig?.header?.title ?? '数据列表' }}</div>

            <el-button
                type="primary"
                @click="handleNewUserClick"
            >{{ contentConfig?.header?.btnTitle ?? '新建数据' }}</el-button>
        </div>

        <div class="table">
            <el-table
                :data="pageList"
                style="width: 100%"
                border
            >
                <template
                    v-for="item in contentConfig.propsList"
                    :key="item.prop"
                >
                    <template v-if="item.type === 'timer'">
                        <el-table-column
                            align="center"
                            v-bind="item"
                        >
                            <template #default="scope">
                                {{ formatUTC(scope.row[item.prop]) }}
                            </template>
                        </el-table-column>
                    </template>

                    <template v-else-if="item.type === 'handle'">
                        <el-table-column
                            align="center"
                            v-bind="item"
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
                    </template>

                    <template v-else-if="item.type === 'custom'">
                        <el-table-column
                            align="center"
                            v-bind="item"
                        >
                            <template #default="scope">
                                <slot
                                    :name="item.slotName"
                                    v-bind="scope"
                                    :prop="item.prop"
                                ></slot>
                            </template>
                        </el-table-column>
                    </template>

                    <template v-else>
                        <el-table-column
                            align="center"
                            v-bind="item"
                        />
                    </template>
                </template>
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

    interface IProps {
        contentConfig: {
            pageName: string,
            header?: {
                title?: string
                btnTitle?: string
            },
            propsList: any[]
        }
    }

    const props = defineProps<IProps>()

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

        systemStore.postPageListAction(props.contentConfig.pageName, info)
    }

    function handleDeleteBtnClick(id: number) {
        systemStore.deletePageByIdAction(props.contentConfig.pageName, id)
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