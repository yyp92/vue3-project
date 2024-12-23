import {defineStore} from 'pinia'
import { accountLoginRequest, getUserInfoById } from '@/service/login/login'
import type {IAccount} from '@/types'
import {localCache} from '@/utils/cache'
import router from '@/router'
import { LOGIN_TOKEN } from '@/global/constants'



const useLoginStore = defineStore('login', {
    state: () => ({
        token: localCache.getCache(LOGIN_TOKEN) ?? '',
        userInfo: {}
    }),
    actions: {
        async loginAccountAction(account: IAccount) {
            const loginResult = await accountLoginRequest(account)
            const {
                id: newId,
                name: newName,
                token
            } = loginResult?.data ?? {}

            this.token = token
            const name = newName
            const id = newId

            localCache.setCache(LOGIN_TOKEN, this.token)

            const userInfoResult = await getUserInfoById(id)
            this. userInfo = userInfoResult.data

            router.push('/main')
        }
    }
})

export default useLoginStore
