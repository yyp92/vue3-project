import {defineStore} from 'pinia'
import { addPageData, addUserData, deletePageById, deleteUserById, editPageData, editUserData, postPageListData, postUsersListData } from '@/service/main/system/system'
import type { SystemState } from './type'
import {ElMessage} from 'element-plus'
import useMainStore from '../main'


const userSystemStore = defineStore(
    'system',
    {
        state: (): SystemState => ({
            usersList: [],
            usersTotalCount: 0,
            pageList: [],
            pageTotalCount: 0
        }),
        actions: {
            async postUsersListAction(queryInfo: any) {
                const usersListResult = await postUsersListData(queryInfo)
                const {totalCount, list} = usersListResult.data
                this.usersTotalCount = totalCount
                this.usersList = list
            },
            async deleteUserByIdAction(id: number) {
                await deleteUserById(id)

                ElMessage({
                    message: '删除成功',
                    type: 'success',
                })

                this.postUsersListAction({
                    offset: 0,
                    size: 10
                })
            },
            async addUserDataActions(userInfo: any) {
                const newResult = await addUserData(userInfo)

                if (newResult.code === 0) {
                    ElMessage({
                        message: '创建成功',
                        type: 'success',
                    })

                    this.postUsersListAction({
                        offset: 0,
                        size: 10
                    })
                }
                else {
                    ElMessage({
                        message: '创建失败',
                        type: 'error',
                    })
                }
            },
            async editUserDataActions(id: number, userInfo: any) {
                const editResult = await editUserData(id, userInfo)

                if (editResult.code === 0) {
                    ElMessage({
                        message: '编辑成功',
                        type: 'success',
                    })

                    this.postUsersListAction({
                        offset: 0,
                        size: 10
                    })
                }
                else {
                    ElMessage({
                        message: '编辑失败',
                        type: 'error',
                    })
                }
            },

            // 针对页面的数据
            async postPageListAction(pageName: string, queryInfo: any) {
                const pageListResult = await postPageListData(pageName, queryInfo)
                const {totalCount, list} = pageListResult.data

                this.pageTotalCount = totalCount
                this.pageList = list
            },
            async deletePageByIdAction(pageName: string, id: number) {
                const deleteResult = await deletePageById(pageName, id)
                const {code} = deleteResult

                if (code === 0) {
                    ElMessage({
                        message: '删除成功',
                        type: 'success',
                    })
    
                    this.postPageListAction(
                        pageName,
                        {
                            offset: 0,
                            size: 10
                        }
                    )
                    // 获取完整数据
                    const mainStore = useMainStore()
                    mainStore.fetchEntireDataAction()
                }
                else {
                    ElMessage({
                        message: '删除失败',
                        type: 'error',
                    })
                }
            },
            async addPageDataActions(pageName: string, data: any) {
                const newResult = await addPageData(pageName, data)

                if (newResult.code === 0) {
                    ElMessage({
                        message: '创建成功',
                        type: 'success',
                    })

                    this.postPageListAction(
                        pageName,
                        {
                            offset: 0,
                            size: 10
                        }
                    )

                    // 获取完整数据
                    const mainStore = useMainStore()
                    mainStore.fetchEntireDataAction()
                }
                else {
                    ElMessage({
                        message: '创建失败',
                        type: 'error',
                    })
                }
            },
            async editPageDataActions(pageName: string, id: number, userInfo: any) {
                const editResult = await editPageData(pageName, id, userInfo)

                if (editResult.code === 0) {
                    ElMessage({
                        message: '编辑成功',
                        type: 'success',
                    })

                    this.postPageListAction(
                        pageName,
                        {
                            offset: 0,
                            size: 10
                        }
                    )
                    // 获取完整数据
                    const mainStore = useMainStore()
                    mainStore.fetchEntireDataAction()
                }
                else {
                    ElMessage({
                        message: '编辑失败',
                        type: 'error',
                    })
                }
            },
        }
    }
)

export default userSystemStore
