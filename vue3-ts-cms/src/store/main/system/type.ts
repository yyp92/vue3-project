export interface UserProps {
    id: number
    name: string
    realname: string
    cellphone: number
    enable: number
    departmentId: number
    roleId: number
    createAt: string
    updateAt: string
}

export interface SystemState {
    usersList: UserProps[],
    usersTotalCount: number
}