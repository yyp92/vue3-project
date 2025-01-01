import type { IContentConfig } from "@/components/page-comp/type"

const contentConfig: IContentConfig = {
    pageName: 'menu',
    header: {
        title: '菜单列表',
        btnTitle: '新建菜单'
    },
    propsList: [
        {
            label: '菜单名称',
            prop: 'name',
            width: '180px',
            fixed: 'left'
        },
        {
            label: '级别',
            prop: 'type',
            width: '120px'
        },
        {
            label: '菜单url',
            prop: 'url',
            width: '150px'
        },
        {
            label: '菜单icon',
            prop: 'icon',
            width: '200px'
        },
        {
            label: '排序',
            prop: 'sort',
            width: '120px'
        },
        {
            label: '权限',
            prop: 'permission',
            width: '150px'
        },
        


        {
            type: 'timer',
            label: '创建时间',
            prop: 'createAt',
            width: '180px'
        },
        {
            type: 'timer',
            label: '更新时间',
            prop: 'updateAt',
            width: '180px'
        },

        {
            type: 'handle',
            label: '操作',
            width: '150px',
            fixed: 'right'
        },
    ],
    childrenTree: {
        rowKey: 'id',
        treePorps: {
            children: 'children'
        }
    }
}

export default contentConfig
