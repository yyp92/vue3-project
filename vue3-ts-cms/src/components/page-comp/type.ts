export interface ISearchConfig{
    pageName: string,
    formItems: any[],
    labelWidth?: string
}

export interface ISearchProps {
    searchConfig: ISearchConfig
}


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
    otherInfo?: any
}

export interface IContentConfig{
    pageName: string,
    header?: {
        title?: string
        btnTitle?: string
    },
    propsList: any[],
    childrenTree?: any
}

export interface IContentProps {
    contentConfig: IContentConfig
}