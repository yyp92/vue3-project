<template>
    <div class="department">
        <PageSearch
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
    import PageSearch from '@/components/page-comp1/PageSearch.vue'
    import PageContent from '@/components/page-comp1/PageContent.vue'

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