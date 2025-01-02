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
            :other-info="otherInfo"
        >
            <template #menuList>
                <el-tree
                    ref="treeRef"
                    :data="entireMenu"
                    show-checkbox
                    node-key="id"
                    :props="{children: 'children', label: 'name'}"
                    @check="handleElTreeCheck"
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
    import { storeToRefs } from 'pinia'
    import { ref, nextTick } from 'vue'
    import type { ElTree } from 'element-plus'
    import PageSearch from '@/components/page-comp/PageSearch.vue'
    import PageContent from '@/components/page-comp/PageContent.vue'
    import PageModal from '@/components/page-comp/PageModal.vue'
    import searchConfig from './config/role-search.config'
    import usePageContent from '@/hooks/usePageContent'
    import usePageModal from '@/hooks/usePageModal'
    import contentConfig from './config/role-content.config'
    import modalConfig from './config/role-modal.config'
    import useMainStore from '@/store/main/main'
    import {mapMenulistToIds} from '@/utils/map-menus'

    const mainStore = useMainStore()
    const {entireMenu} = storeToRefs(mainStore)
    const treeRef = ref<InstanceType<typeof ElTree>>()

    const {
        contentRef,
        handleQueryClick,
        handleResetClick
    } = usePageContent()

    const {
        modalRef,
        handleNewClick,
        handleEditClick
    } = usePageModal(editCallback)


    const otherInfo = ref({})
    function handleElTreeCheck(data1: any, data2: any) {
        const menuList = [
            ...data2.checkedKeys,
            ...data2.halfCheckedKeys
        ]

        otherInfo.value = {menuList}
    }

    function editCallback(itemData: any) {
        nextTick(() => {
            const menuIds = mapMenulistToIds(itemData.menuList)
            treeRef.value?.setCheckedKeys(menuIds)
        })
    }
</script>

<style
    scoped
    lang="less"
>
</style>