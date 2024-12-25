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

export function mapMenusToRoutes(userMenus: any[]) {
    // 1.动态的添加所有路由，放到数组中
    const localRoutes = loadLocalRoutes()
   

    // 2. 根据菜单去匹配正确的路由
    const routes: RouteRecordRaw[] = []
    for (const menu of userMenus) {
        for (const submenu of menu.children) {
            const route = localRoutes.find((item) => item.path === submenu.url)

            if (route) {
                // router.addRoute('main', route)
                routes.push(route)
            }
        }
    }

    return routes
}