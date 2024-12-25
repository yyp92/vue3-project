import type { RouteRecordRaw } from "vue-router"

function loadLocalRoutes() {
    const localRoutes: RouteRecordRaw[] = []
    // 1.1 读取 roter/main 所有的 ts 文件
    const files: Record<string, any> = import.meta.glob(
        '@/router/main/**/*.ts',
        {
            eager: true
        }
    )
    // 1.2 将加载的对象放到 localRoutes
    for (const key in files) {
        const module = files[key]
        localRoutes.push(module.default)
    }

    return localRoutes
}

export let firstMenu: any = null

export function mapMenusToRoutes(userMenus: any[]) {
    // 1.动态的添加所有路由，放到数组中
    const localRoutes = loadLocalRoutes()
   

    // 2. 根据菜单去匹配正确的路由
    const routes: RouteRecordRaw[] = []

    for (const menu of userMenus) {
        for (const submenu of menu.children) {
            const route = localRoutes.find((item) => item.path === submenu.url)

            if (route) {
                // 1. 给 route 的顶层菜单增加重定向功能(但是只需要添加一次即可)
                if (!routes.find((item) => item.path === menu.url)) {
                    routes.push({
                        path: menu.url,
                        redirect: route.path
                    })
                }
                
                // 2. 二级菜单路由
                routes.push(route)
            }

            // 记录第一个被匹配的菜单
            if (!firstMenu && route) {
                firstMenu = submenu
            }
        }
    }

    return routes
}

/**
 * 根据路径去匹配需要显示的菜单
 * @param path 需要匹配的路径
 * @param userMenus 所有的菜单
 */
export function mapPathToMenu(path: string, userMenus: any[]) {
    for (const menu of userMenus) {
        for (const submenu of menu.children) {
            if (submenu.url === path) {
                return submenu
            }
        }
    }
}

/**
 * 根据路径去匹配需要显示的菜单, 生成面包屑
 * @param path 需要匹配的路径
 * @param userMenus 所有的菜单
 */
interface Breadcrumbs {
    name: string
    path?: string
}
export function mapPathToBreadcrumbs(path: string, userMenus: any[]) {
    const breadcrumbs: Breadcrumbs[] = []

    for (const menu of userMenus) {
        for (const submenu of menu.children) {
            if (submenu.url === path) {
                breadcrumbs.push({
                    name: menu.name,
                    path: menu.url
                })
                breadcrumbs.push({
                    name: submenu.name,
                    path: submenu.url
                })
            }
        }
    }

    return breadcrumbs
}
