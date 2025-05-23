import hyRequest from ".."

export function getEntireRoles() {
    return hyRequest.post({
        url: '/role/list'
    })
}

export function getEntireDepartments() {
    return hyRequest.post({
        url: '/department/list'
    })
}

export function getEntireMenu() {
    return hyRequest.post({
        url: '/menu/list'
    })
}
