const searchConfig = {
    pageName: 'role',
    formItems: [
        {
            type: 'input',
            prop: 'name',
            label: '角色名称',
            placeholder: '请输入角色名称',
            initialValue: 'bb'
        },
        {
            type: 'input',
            prop: 'leader',
            label: '权限介绍',
            placeholder: '请输入权限介绍'
        },
        {
            type: 'date-picker',
            prop: 'createAt',
            label: '创建时间',
        },
    ]
}

export default searchConfig
