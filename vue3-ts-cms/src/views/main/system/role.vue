<template>
    <div class="role">
        <PageSearch
            :search-config="searchConfig"
            @query-click="handleQueryClick"
            @reset-click="handleResetClick"
        />

        <PageContent
            ref="contentRef"
            :content-config="contentConfig"
            @new-click="handleNewClick"
            @edit-click="handleEditClick"
        />

        <PageModal
            ref="modalRef"
            :modal-config="modalConfig"
        >
            <template #menuList>
                <el-tree
                    :data="entireMenu"
                    show-checkbox
                    node-key="id"
                    :props="{children: 'children', label: 'name'}"
                />
            </template>
        </PageModal>
    </div>
</template>

<script
    setup
    lang="ts"
    name="Role"
>
    import PageSearch from '@/components/page-comp/PageSearch.vue'
    import PageContent from '@/components/page-comp/PageContent.vue'
    import PageModal from '@/components/page-comp/PageModal.vue'
    import searchConfig from './config/role-search.config'
    import usePageContent from '@/hooks/usePageContent'
    import usePageModal from '@/hooks/usePageModal'
    import contentConfig from './config/role-content.config'
    import modalConfig from './config/role-modal.config'
    import useMainStore from '@/store/main/main'
    import { storeToRefs } from 'pinia'

    const mainStore = useMainStore()
    const {entireMenu} = storeToRefs(mainStore)

    const {
        contentRef,
        handleQueryClick,
        handleResetClick
    } = usePageContent()

    const {
        modalRef,
        handleNewClick,
        handleEditClick
    } = usePageModal()
</script>

<style
    scoped
    lang="less"
>
</style>