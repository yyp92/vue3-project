<template>
    <div class="main-menu">
        <div class="logo">
            <img
                class="img"
                src="@/assets/img/logo.svg"
                alt=""
            />
            
            <div
                v-show="!isFold"
                class="title"
            >后台管理系统</div>
        </div>

        <div class="menu">
            <el-menu
                :default-active="defaultActive"
                text-color="#b7bdc3"
                active-text-color="#fff"
                background-color="#0001529"
                :collapse="isFold"
            >
                <template
                    v-for="item in userMenus"
                    :key="item.id"
                >
                    <el-sub-menu
                        :index="item.id + ''"
                    >
                        <template #title>
                            <el-icon>
                                <!-- component 动态组件 -->
                                <component :is="item.icon.split('-icon-')[1]" />
                            </el-icon>
                            <span>{{ item.name }}</span>
                        </template>

                        <template
                            v-for="subItem in item.children"
                            :key="subItem.id"
                        >
                            <el-menu-item
                                :index="subItem.id + ''"
                                @click="handleItemClick(subItem)"
                            >{{ subItem.name }}</el-menu-item>
                        </template>
                    </el-sub-menu>
                </template>
            </el-menu>
        </div>
    </div>
</template>

<script
    setup
    lang="ts"
    name="MainMenu"
>
    import { computed } from 'vue';
    import { useRoute, useRouter } from 'vue-router';
    import useLoginStore from '@/store/login/login'
    import { mapPathToMenu } from '@/utils/map-menus';

    defineProps({
        isFold: {
            type: Boolean,
            default: false
        }
    })

    const router = useRouter()
    const loginStore = useLoginStore()
    const userMenus = loginStore.userMenus

    function handleItemClick(item: any) {
        router.push(item.url)
    }

    // menu 的默认菜单
    const route = useRoute()
    
    const defaultActive = computed(() => {
        const pathMenu = mapPathToMenu(route.path, userMenus)
        return pathMenu?.id + ''
    })
</script>

<style
    scoped
    lang="less"
>
    .main-menu {
        height: 100%;
        background-color: #001529;
    }

    .logo {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        height: 28px;
        padding: 12px 10px 8px 10px;
        overflow: hidden;

        .img {
            height: 100%;
            margin: 0 10px;
        }

        .title {
            font-size: 16px;
            font-weight: 700;
            color: white;
            white-space: nowrap;
        }
    }

    .el-menu {
        border-right: none;
        user-select: none;
    }

    .el-sub-menu {
        .el-menu-item {
            padding-left: 50px !important;
            background-color: #0c2135;
        }

        .el-menu-item:hover {
            color: #fff;
        }

        .el-menu-item.is-active {
            background-color: #0a60bd;
            color: #fff;
        }
    }
</style>