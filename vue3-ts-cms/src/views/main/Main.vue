<template>
    <div class="main">
        <el-container class="main-content">
            <el-aside :width="isCollapse ? '60px' : '210px'">
                <MainMenu :is-fold="isCollapse" />
            </el-aside>

            <el-container>
                <el-header height="50px">
                    <MainHeader @fold-change="handleFoldChange" />
                </el-header>

                <el-main>
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script
    setup
    lang="ts"
    name="Main"
>
    import {ref} from 'vue'
    import MainHeader from '@/components/main-header/MainHeader.vue'
    import MainMenu from '@/components/main-menu/MainMenu.vue' 

    const isCollapse = ref(false)

    function handleFoldChange(isFold: boolean) {
        isCollapse.value = isFold
    }
</script>

<style
    scoped
    lang="less"
>
    .main {
        height: 100%;
    }

    .main-content {
        height: 100%;

        .el-aside {
            overflow-x: hidden;
            overflow-y: auto;
            line-height: 200px;
            text-align: left;
            cursor: pointer;
            transition: width 0.3s linear;
            scrollbar-width: none;
            -ms-overflow-style: none;

            &::-webkit-scrollbar {
                display: none;
            }
        }

        .el-main {
            background-color: #f0f2f5;
        }
    }
</style>