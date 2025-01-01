<template>
    <div class="department">
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
        >
            <!-- <template #leader="scope">我是领导: {{ scope.row[scope.prop] }}</template>
            <template #parent="scope">我是上级部门: {{ scope.row[scope.prop] }}</template> -->
        </PageContent>

        <PageModal
            :modal-config="modalConfigRef"
            ref="modalRef"
        />
    </div>
</template>

<script
    setup
    lang="ts"
    name="Department"
>
    import {ref, computed} from 'vue'
    import PageSearch from '@/components/page-comp/PageSearch.vue'
    import PageContent from '@/components/page-comp/PageContent.vue'
    import PageModal from '@/components/page-comp/PageModal.vue'
    import searchConfig from './config/department-search.config'
    import contentConfig from './config/department-content.config'
    import modalConfig from './config/department-modal.config'
    import useMainStore from '@/store/main/main'

    const contentRef = ref<InstanceType<typeof PageContent>>()
    const modalRef = ref<InstanceType<typeof PageModal>>()

    // 对 modalConfig 进行操作
    const modalConfigRef = computed(() => {
        const mainStore = useMainStore()
        const departments = mainStore.entireDepartments.map((item: any) => {
            return {
                label: item.name,
                value: item.id
            }
        })

        modalConfig.formItems.forEach((item: any) => {
            if (item.prop === 'parentId') {
                item.options.push(...departments)
            }
        })

        return modalConfig
    })

    function handleQueryClick(queryInfo: any) {
        contentRef.value?.fetchPageListData(queryInfo)
    }

    function handleResetClick() {
        contentRef.value?.fetchPageListData()
    }

    function handleNewClick() {
        modalRef.value?.setModalVisible()
    }

    function handleEditClick(data: any) {
        modalRef.value?.setModalVisible(false, data)
    }
</script>

<style
    scoped
    lang="less"
>
</style>