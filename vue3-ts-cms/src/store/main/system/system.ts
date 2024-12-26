import {defineStore} from 'pinia'
import { deleteUserById, postUsersListData } from '@/service/main/system/system'
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
            }
        }
    }
)

export default userSystemStore
