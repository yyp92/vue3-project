/// <reference types="vite/client" />

declare module "*.vue" {
    import {DefineComponent} from 'vue'
    const component: string
    export default component
}
