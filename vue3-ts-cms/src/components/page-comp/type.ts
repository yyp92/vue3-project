export interface IModalConfig{
    pageName: string,
    header: {
        newTitle: string,
        editTitle: string
    },
    formItems: any[]
}

export interface IModalProps {
    modalConfig: IModalConfig
}

export interface IContentConfig{
    pageName: string,
    header?: {
        title?: string
        btnTitle?: string
    },
    propsList: any[]
}

export interface IContentProps {
    contentConfig: IContentConfig
}