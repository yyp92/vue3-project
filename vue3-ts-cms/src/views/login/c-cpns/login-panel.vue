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

                    <PanelAccount />
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
    import {ref} from 'vue'
    import PanelAccount from './panel-account.vue'
    import PanelPhone from './panel-phone.vue'

    const activeName = ref('account')
    const isRememberPassword = ref(false)

    function handleLoginAction() {
        if (activeName.value === 'account') {
            console.log('用户进行账号登录')
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