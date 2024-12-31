<template>
    <div class="department">
        <PageSearch
            :search-config="searchConfig"
            @query-click="handleQueryClick"
            @reset-click="handleResetClick"
        />

        <PageContent
            ref="contentRef"
        />
    </div>
</template>

<script
    setup
    lang="ts"
    name="Department"
>
    import {ref} from 'vue'
    import PageSearch from '@/components/page-comp/PageSearch.vue'
    import PageContent from '@/components/page-comp1/PageContent.vue'
    import searchConfig from './config/department-search.config'

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