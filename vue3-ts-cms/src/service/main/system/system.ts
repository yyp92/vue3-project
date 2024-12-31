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
