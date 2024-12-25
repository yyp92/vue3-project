<template>
    <div class="main-header">
        <div
            class="menu-icon"
            @click="handleMenuIconClick"
        >
            <el-icon size="28">
                <component :is="isFold ? 'Expand' : 'Fold'" />
            </el-icon>
        </div>

        <div class="content">
            <HeaderCrumb />

            <HeaderInfo />
        </div>
    </div>
</template>

<script
    setup
    lang="ts"
    name="MainHeader"
>
    import {ref} from 'vue'
    import HeaderInfo from './HeaderInfo.vue'
    import HeaderCrumb from './HeaderCrumb.vue'

    const emit = defineEmits(['foldChange'])

    const isFold = ref(false)

    function handleMenuIconClick() {
        isFold.value = !isFold.value

        emit('foldChange', isFold.value)
    }
</script>

<style
    scoped
    lang="less"
>
    .main-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex: 1;
        height: 100%;

        .menu-icon {
            flex-shrink: 0;
            display: flex;
            align-items: center;
            cursor: pointer;
        }

        .content {
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex: 1;
            padding: 0 18px;
        }
    }
</style>