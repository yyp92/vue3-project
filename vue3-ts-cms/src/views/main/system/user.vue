<template>
    <div class="user">
        <UserSearch
            @query-click="handleQueryClick"
            @reset-click="handleResetClick"
        />

        <UserContent ref="contentRef" />
    </div>
</template>

<script
    setup
    lang="ts"
    name="User"
>
    import {ref} from 'vue'
    import UserSearch from '@/components/user-comp/UserSearch.vue'
    import UserContent from '@/components/user-comp/UserContent.vue'

    const contentRef = ref<InstanceType<typeof UserContent>>()


    function handleQueryClick(formData: any) {
        contentRef.value?.fetchUserListData(formData)
    }

    function handleResetClick() {
        contentRef.value?.fetchUserListData()
    }
</script>

<style
    scoped
    lang="less"
>
    .user {
        border-radius: 10px;
        overflow: hidden;
    }
</style>