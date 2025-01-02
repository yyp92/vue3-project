import useLoginStore from "@/store/login/login"

function usePermissions(permissionId: string) {
    const loginStore = useLoginStore()
    const {permissions} = loginStore

    return !!permissions.find((item: any) => item.includes(permissionId))
}

export default usePermissions
