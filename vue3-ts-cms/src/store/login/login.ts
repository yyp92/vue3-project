import {defineStore} from 'pinia'
import { accountLoginRequest, getUserInfoById, getUserMenusByRoleId } from '@/service/login/login'
import type {IAccount} from '@/types'
import {localCache} from '@/utils/cache'
import router from '@/router'
import { LOGIN_TOKEN, USER_INFO, USER_MENUS } from '@/global/constants'
import { mapMenusToRoutes } from '@/utils/map-menus'
import useMainStore from '../main/main'

interface LoginState {
    token: string,
    userInfo: any,
    userMenus: any
}

const useLoginStore = defineStore(
    'login',
    {
        state: (): LoginState => ({
            token: '',
            userInfo: {},
            userMenus: [],
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
                localCache.setCache(LOGIN_TOKEN, token)

                // 获取登录用户的详细信息
                const userInfoResult = await getUserInfoById(id)
                const userInfo = userInfoResult.data
                this.userInfo = userInfo

                // 根据角色请求用户的权限（菜单 menus）
                const userMenusResult = await getUserMenusByRoleId(this.userInfo.role.id)
                const userMenus = userMenusResult.data
                this.userMenus = userMenus

                // 进行本地缓存
                localCache.setCache(USER_INFO, userInfo)
                localCache.setCache(USER_MENUS, userMenus)

                // 请求所有的 roles/departments 数据
                const mainStore = useMainStore()
                mainStore.fetchEntireDataAction()

                // 动态的添加路由
                const routes = mapMenusToRoutes(userMenus)
                routes.forEach((route) => router.addRoute('main', route))

                // 页面跳转
                router.push('/main')
            },

            // 用户进行刷新默认加载数据
            loadLocalCacheAction() {
                const token = localCache.getCache(LOGIN_TOKEN)
                const userInfo = localCache.getCache(USER_INFO)
                const userMenus = localCache.getCache(USER_MENUS)

                if (token && userInfo && userMenus) {
                    this.token = token
                    this.userInfo = userInfo
                    this.userMenus = userMenus

                    // 请求所有的 roles/departments 数据
                    const mainStore = useMainStore()
                    mainStore.fetchEntireDataAction()

                    // 动态的添加路由
                    const routes = mapMenusToRoutes(userMenus)
                    routes.forEach((route) => router.addRoute('main', route))
                }
            }
        }
    }
)

export default useLoginStore
