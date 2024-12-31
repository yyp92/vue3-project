import hyRequest from "@/service";

export function postUsersListData(queryInfo: any) {
    return hyRequest.post({
        url: '/users/list',
        data: queryInfo
    })
}

export function deleteUserById(id: number) {
    return hyRequest.delete({
        url: `/users/${id}`,
    })
}

export function addUserData(userInfo: any) {
    return hyRequest.post({
        url: '/users',
        data: userInfo
    })
}

export function editUserData(id: number, userInfo: any) {
    return hyRequest.patch({
        url: `/users/${id}`,
        data: userInfo
    })
}


export function postPageListData(pageName: string, queryInfo: any) {
    return hyRequest.post({
        url: `/${pageName}/list`,
        data: queryInfo
    })
}

export function deletePageById(pageName: string, id: number) {
    return hyRequest.delete({
        url: `/${pageName}/${id}`,
    })
}
