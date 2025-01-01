<template>
    <div class="menu">
        <PageContent
            :content-config="contentConfig"
        />
    </div>
</template>

<script
    setup
    lang="ts"
    name="Menu"
>
    import PageContent from '@/components/page-comp/PageContent.vue'
    import contentConfig from './config/menu-content.config'
</script>

<style
    scoped
    lang="less"
>
    .menu {}
</style>