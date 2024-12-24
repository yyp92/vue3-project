import {defineStore} from 'pinia'
import { accountLoginRequest, getUserInfoById, getUserMenusByRoleId } from '@/service/login/login'
import type {IAccount} from '@/types'
import {localCache} from '@/utils/cache'
import router from '@/router'
import { LOGIN_TOKEN } from '@/global/constants'

interface LoginState {
    token: string,
    userInfo: any,
    userMenus: any
}

const useLoginStore = defineStore(
    'login',
    {
        state: (): LoginState => ({
            token: localCache.getCache(LOGIN_TOKEN) ?? '',
            userInfo: {},
            userMenus: []
        }),
        actions: {
            async loginAccountAction(account: IAccount) {
                const loginResult = await accountLoginRequest(account)
                const {
                    id: newId,
                    token
                } = loginResult?.data ?? {}

                this.token = token
                const id = newId

                // 进行本地缓存
                localCache.setCache(LOGIN_TOKEN, this.token)

                // 获取登录用户的详细信息
                const userInfoResult = await getUserInfoById(id)
                this.userInfo = userInfoResult.data

                // 根据角色请求用户的权限（菜单 menus）
                const userMenusResult = await getUserMenusByRoleId(this.userInfo.role.id)
                this.userMenus = userMenusResult.data
                console.log(userMenusResult)

                // 页面跳转
                router.push('/main')
            }
        }
    }
)

export default useLoginStore
