<template>
    <div class="panel-account">
        <el-form
            label-width="60px"
            size="large"
            :model="account"
            :rules="accountRules"
        >
            <el-form-item
                label="账号"
                prop="name"
            >
                <el-input
                    v-model="account.name"
                />
            </el-form-item>

            <el-form-item
                label="密码"
                prop="password"
            >
                <el-input
                    v-model="account.password"
                    show-password
                />
            </el-form-item>
        </el-form>
    </div>
</template>

<script
    setup
    lang="ts"
    name="PanelAccount"
>
    import {reactive} from 'vue'
    import type {FormRules} from 'element-plus'

    const account = reactive({
        name: '',
        password: ''
    })

    // 检验规则
    const accountRules: FormRules = {
        name: [
            {
                required: true,
                message: '必须输入帐号信息',
                trigger: 'blur'
            },
            {
                // min: 6,
                // max: 20,
                pattern: /^[a-zA-Z0-9]{6,20}$/,
                message: '必须6~20位数字和字母组成',
                trigger: 'change'
            }
        ],
        password: [
            {
                required: true,
                message: '必须输入密码信息',
                trigger: 'blur'
            },
            {
                pattern: /^[a-zA-Z0-9]{3,}$/,
                message: '必须3位以上数字和字母组成',
                trigger: 'change'
            }
        ]
    }

</script>

<style
    scoped
    lang="less"
>
    .panel-account {}
</style>