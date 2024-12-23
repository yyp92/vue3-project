<template>
    <div class="panel-account">
        <el-form
            label-width="60px"
            size="large"
            :model="account"
            :rules="accountRules"
            ref="formRef"
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
    import {reactive, ref} from 'vue'
    import type {FormRules, ElForm} from 'element-plus'
    import {ElMessage} from 'element-plus'
    import useLoginStore from '@/store/login/login';
    import type {IAccount} from '@/types'
    import { localCache } from '@/utils/cache';

    const CHACHE_NAME = 'name'
    const CHACHE_PASSWORD = 'password'

    const account = reactive<IAccount>({
        name: localCache.getCache(CHACHE_NAME) ?? '',
        password: localCache.getCache(CHACHE_PASSWORD) ?? ''
    })
    const formRef = ref<InstanceType<typeof ElForm>>()
    const loginStore = useLoginStore()

    // 检验规则
    const accountRules: FormRules = {
        name: [
            {
                required: true,
                message: '必须输入帐号信息',
                trigger: 'blur'
            },
            {
                pattern: /^[a-zA-Z0-9]{6,20}$/,
                message: '必须6~20位数字和字母组成',
                trigger: 'blur'
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
                trigger: 'blur'
            }
        ]
    }

    // 执行登录逻辑
    function loginAction(isRememberPassword: boolean) {
        formRef.value?.validate((valid) => {
            if (valid) {
                const name = account.name
                const password = account.password

                loginStore.loginAccountAction({
                    name,
                    password
                }).then((res) => {
                    // 记住密码
                    if (isRememberPassword) {
                        localCache.setCache(CHACHE_NAME, name)
                        localCache.setCache(CHACHE_PASSWORD, password)
                    }
                    else {
                        localCache.removeCache(CHACHE_NAME)
                        localCache.removeCache(CHACHE_PASSWORD)
                    }
                })
            }
            else {
                ElMessage.error('请您输入正确的格式后在操作')
            }
        })
    }

    defineExpose({
        loginAction
    })
</script>

<style
    scoped
    lang="less"
>
    .panel-account {}
</style>