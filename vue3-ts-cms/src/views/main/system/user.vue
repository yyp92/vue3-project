<template>
    <div class="user">
        <UserSearch />

        <UserContent />
    </div>
</template>

<script
    setup
    lang="ts"
    name="User"
>
    import UserSearch from '@/components/user-comp/UserSearch.vue'
    import UserContent from '@/components/user-comp/UserContent.vue'
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