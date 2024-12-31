<template>
    <div class="user">
        <UserSearch
            @query-click="handleQueryClick"
            @reset-click="handleResetClick"
        />

        <UserContent
            ref="contentRef"
            @new-click="handleNewBtnClick"
        />

        <UserModal
            ref="modalRef"
        />
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
    import UserModal from '@/components/user-comp/UserModal.vue'

    const contentRef = ref<InstanceType<typeof UserContent>>()


    function handleQueryClick(formData: any) {
        contentRef.value?.fetchUserListData(formData)
    }

    function handleResetClick() {
        contentRef.value?.fetchUserListData()
    }

    const modalRef = ref<InstanceType<typeof UserModal>>()
    function handleNewBtnClick() {
        modalRef.value?.setModalVisible()
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