import {defineStore} from 'pinia'
import { postUsersListData } from '@/service/main/system/system'
import type { SystemState } from './type'


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
            }
        }
    }
)

export default userSystemStore
