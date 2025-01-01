import { getEntireDepartments, getEntireMenu, getEntireRoles } from '@/service/main/main'
import {defineStore} from 'pinia' 

interface IMainState {
    entireRoles: any[]
    entireDepartments: any[],
    entireMenu: any[]
}

const useMainStore = defineStore(
    'main',
    {
        state: (): IMainState => ({
            entireRoles: [],
            entireDepartments: [],
            entireMenu: []
        }),

        actions: {
            async fetchEntireDataAction() {
                const rolesResult = await getEntireRoles()
                const departmentsResult = await getEntireDepartments()
                const menuResult = await getEntireMenu()

                this.entireRoles = rolesResult.data.list
                this.entireDepartments = departmentsResult.data.list
                this.entireMenu = menuResult.data.list
            }
        }
    }
)

export default useMainStore
