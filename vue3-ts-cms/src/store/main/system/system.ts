import {defineStore} from 'pinia'
import { addUserData, deleteUserById, editUserData, postUsersListData } from '@/service/main/system/system'
import type { SystemState } from './type'
import {ElMessage} from 'element-plus'


const userSystemStore = defineStore(
    'system',
    {
        state: (): SystemState => ({
            usersList: [],
            usersTotalCount: 0
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
            }
        }
    }
)

export default userSystemStore
