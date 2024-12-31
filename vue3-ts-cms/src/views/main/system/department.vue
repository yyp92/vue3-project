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
        >
            <!-- <template #leader="scope">我是领导: {{ scope.row[scope.prop] }}</template>
            <template #parent="scope">我是上级部门: {{ scope.row[scope.prop] }}</template> -->
        </PageContent>
    </div>
</template>

<script
    setup
    lang="ts"
    name="Department"
>
    import {ref} from 'vue'
    import PageSearch from '@/components/page-comp/PageSearch.vue'
    import PageContent from '@/components/page-comp/PageContent.vue'
    import searchConfig from './config/department-search.config'
    import contentConfig from './config/department-content.config'

    const contentRef = ref<InstanceType<typeof PageContent>>()

    function handleQueryClick(queryInfo: any) {
        contentRef.value?.fetchPageListData(queryInfo)
    }

    function handleResetClick() {
        contentRef.value?.fetchPageListData()
    }
</script>

<style
    scoped
    lang="less"
>
</style>