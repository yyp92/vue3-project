<template>
    <div class="header-info">
        <div class="operation">
            <span>
                <el-icon>
                    <Message />
                </el-icon>
            </span>

            <span>
                <span class="dot"></span>

                <el-icon>
                    <ChatDotRound />
                </el-icon>
            </span>

            <span>
                <el-icon>
                    <Search />
                </el-icon>
            </span>
        </div>

        <div class="info">
            <el-dropdown
                :hide-on-click="false"
            >
                <span class="user-info">
                    <el-avatar
                        :size="30"
                        src="https://upload.jianshu.io/users/upload_avatars/1102036/c3628b478f06.jpeg"
                    />

                    <span class="name">{{ userInfo.name }}</span>
                </span>

                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item @click="handleExitClick">
                            <el-icon>
                                <CircleCheck />
                            </el-icon>

                            <span>退出系统</span>
                        </el-dropdown-item>

                        <el-dropdown-item divided>
                            <el-icon>
                                <InfoFilled />
                            </el-icon>

                            <span>个人信息</span>
                        </el-dropdown-item>

                        <el-dropdown-item>
                            <el-icon>
                                <Lock />
                            </el-icon>

                            <span>修改密码</span>
                        </el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </div>
    </div>
</template>

<script
    setup
    lang="ts"
    name="HeaderInfo"
>
    import { useRouter } from 'vue-router';
    import { LOGIN_TOKEN, USER_INFO, USER_MENUS } from '@/global/constants';
    import { localCache } from '@/utils/cache';
    import useLoginStore from '@/store/login/login';

    const router = useRouter()
    const userStore = useLoginStore()
    const userInfo = userStore.userInfo

    function handleExitClick() {
        localCache.removeCache(LOGIN_TOKEN)
        localCache.removeCache(USER_INFO)
        localCache.removeCache(USER_MENUS)

        router.push('/login')
    }
</script>

<style
    scoped
    lang="less"
>
    .header-info {
        display: flex;
        align-items: center;
    }

    .operation {
        display: inline-flex;
        margin-right: 20px;

        span {
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 40px;
            height: 35px;

            &:hover {
                background: #f2f2f2;
            }

            i {
                font-size: 20px;
            }

            .dot {
                position: absolute;
                top: 3px;
                right: 3px;
                z-index: 10;
                width: 6px;
                height: 6px;
                background: red;
                border-radius: 100%;
            }
        }
    }

    .info {
        .user-info {
            display: flex;
            align-items: center;
            cursor: pointer;

            .name {
                margin-left: 5px;
            }
        }

        :global(.el-dropdown-menu__item) {
            line-height: 36px !important;
            padding: 6px 22px;
        }
    }

    
</style>