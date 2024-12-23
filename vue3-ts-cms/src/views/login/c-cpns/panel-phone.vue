<template>
    <div class="panel-phone">
        <el-form
            label-width="60px"
            size="large"
            ref="formRef"
        >
            <el-form-item
                label="手机号"
                prop=""
            >
                <el-input
                /> 
            </el-form-item>

            <el-form-item
                label="验证码"
                prop="password"
            >
                <div class="verify-code">
                    <el-input
                        show-password
                    />
                    <el-button
                        class="get-btn"
                        type="primary"
                    >
                        获取验证码
                    </el-button>
                </div>
            </el-form-item>
        </el-form>
    </div>
</template>

<script
    setup
    lang="ts"
    name="PanelPhone"
>
</script>

<style
    scoped
    lang="less"
>
    .panel-phone {
        .verify-code {
            display: flex;
            align-items: center;

            .get-btn {
                margin-left: 8px;
            }
        }
    }
</style>