<template>
    <div class="login-panel">
        <h1 class="title">后台管理系统</h1>

        <div class="tabs">
            <el-tabs
                type="border-card"
                stretch
                v-model="activeName"
            >
                <el-tab-pane
                    name="account"
                >
                    <template #label>
                        <div class="label">
                            <el-icon>
                                <UserFilled />
                            </el-icon>

                            <span class="text">帐号登录</span>
                        </div>
                    </template>

                    <PanelAccount ref="accountRef" />
                </el-tab-pane>

                <el-tab-pane
                    name="phone"
                >
                    <template #label>
                        <div class="label">
                            <el-icon>
                                <Cellphone />
                            </el-icon>

                            <span class="text">手机登录</span>
                        </div>
                    </template>

                    <PanelPhone />
                </el-tab-pane>
            </el-tabs>
        </div>

        <div class="controls">
            <el-checkbox
                v-model="isRememberPassword"
                label="记住密码"
                size="large"
            />

            <el-link
                type="primary"
            >忘记密码</el-link>
        </div>

        <el-button
            class="login-btn"
            type="primary"
            size="large"
            @click="handleLoginAction"
        >立即登录</el-button>
    </div>
</template>

<script
    setup
    lang="ts"
    name="LoginPanel"
>
    import {ref, watch} from 'vue'
    import PanelAccount from './panel-account.vue'
    import PanelPhone from './panel-phone.vue'
import { localCache } from '@/utils/cache';

    const activeName = ref('account')
    const isRememberPassword = ref<boolean>(localCache.getCache('isRememberPassword') ?? false) 
    // InstanceType<typeof PanelAccount> -> 就是拿到 PanelAccount 这个实例的类型
    const accountRef = ref<InstanceType<typeof PanelAccount>>()

    
    watch(isRememberPassword, (value) => {
        localCache.setCache('isRememberPassword', value)
    })

    function handleLoginAction() {
        if (activeName.value === 'account') {
            accountRef.value?.loginAction(isRememberPassword.value)

            return
        }

        console.log('用户进行手机登录')
    }
</script>

<style
    scoped
    lang="less"
>
    h1 {
        margin: 0;
    }

    .login-panel {
        width: 330px;
        background: #fff;
        border-radius: 8px;
        padding: 16px 24px;
    }

    .title {
        text-align: center;
        margin-bottom: 15px;
    }

    .label {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .text {
            margin-left: 5px;
        }
    }

    .controls {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .login-btn {
        width: 100%;
        margin-top: 10px;
    }
</style>