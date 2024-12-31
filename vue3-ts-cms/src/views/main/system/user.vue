<template>
    <div class="user">
        <UserSearch
            @query-click="handleQueryClick"
            @reset-click="handleResetClick"
        />

        <UserContent
            ref="contentRef"
            @new-click="handleNewClick"
            @edit-click="handleEditClick"
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
        const modalRef = ref<InstanceType<typeof UserModal>>()


    function handleQueryClick(formData: any) {
        contentRef.value?.fetchUserListData(formData)
    }

    function handleResetClick() {
        contentRef.value?.fetchUserListData()
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
    .user {
        border-radius: 10px;
        overflow: hidden;
    }
</style>