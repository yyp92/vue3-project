<template>
    <div class="header-crumb">
        <el-breadcrumb separator-icon="ArrowRight">
            <template
                v-for="item in breadcrumbs"
                :key="item.name"
            >
                <el-breadcrumb-item :to="item.path">{{ item.name }}</el-breadcrumb-item>
            </template>

        </el-breadcrumb>
    </div>
</template>

<script
    setup
    lang="ts"
    name="HeaderCrumb"
>
    import useLoginStore from '@/store/login/login';
    import { mapPathToBreadcrumbs } from '@/utils/map-menus';
    import { computed } from 'vue';
    import { useRoute } from 'vue-router';

    const route = useRoute()
    const userMenus = useLoginStore().userMenus
    const breadcrumbs = computed(() => mapPathToBreadcrumbs(route.path, userMenus))
</script>

<style
    scoped
    lang="less"
>
    .header-crumb {}
</style>