<template>
    <div class="user-modal">
        <el-dialog
            v-model="dialogVisble"
            title="新建用户"
            width="400"
        >
            <div class="form">
                <el-form
                    :model="formData"
                    label-width="80px"
                    size="large"
                >
                    <el-form-item
                        label="用户名"
                        prop="name"
                    >
                        <el-input
                            v-model="formData.name"
                            placeholder="请输入用户名"
                        />
                    </el-form-item>

                    <el-form-item
                        label="真实姓名"
                        prop="realname"
                    >
                        <el-input
                            v-model="formData.realname"
                            placeholder="请输入真实名"
                        />
                    </el-form-item>

                    <el-form-item
                        label="密码"
                        prop="password"
                    >
                        <el-input
                            v-model="formData.password"
                            placeholder="请输入密码"
                            show-password
                        />
                    </el-form-item>

                    <el-form-item
                        label="手机号码"
                        prop="cellphone"
                    >
                        <el-input
                            v-model="formData.cellphone"
                            placeholder="请输入手机号码"
                        />
                    </el-form-item>

                    <el-form-item
                        label="选择角色"
                        prop="roleId"
                    >
                        <el-select
                            v-model="formData.roleId"
                            placeholder="请选择角色"
                        >
                            <template
                                v-for="item in entireRoles"
                                :key="item.id"
                            >
                                <el-option
                                    :label="item.name"
                                    :value="item.id"
                                />
                            </template>
                        </el-select>
                    </el-form-item>

                    <el-form-item
                        label="选择部门"
                        prop="departmentId"
                    >
                        <el-select
                            v-model="formData.departmentId"
                            placeholder="请选择部门"
                        >
                            <template
                                v-for="item in entireDepartments"
                                :key="item.id"
                            >
                                <el-option
                                    :label="item.name"
                                    :value="item.id"
                                />
                            </template>
                        </el-select>
                    </el-form-item>
                </el-form>
            </div>

            <template #footer>
                <div class="dialog-footer">
                    <el-button
                        @click="dialogVisble = false"
                    >取消</el-button>

                    <el-button
                        type="primary"
                        @click="handleConfirmClick"
                    >确定</el-button>
                </div>
            </template>
        </el-dialog>
    </div>
</template>

<script
    setup
    lang="ts"
    name="UserModal"
>
    import {ref, reactive} from 'vue'
    import useMainStore from '@/store/main/main'
    import { storeToRefs } from 'pinia'
    import userSystemStore from '@/store/main/system/system'

    const mainStore = useMainStore()
    const systemStore = userSystemStore()
    const {entireRoles, entireDepartments} = storeToRefs(mainStore)

    const dialogVisble = ref(false)
    const formData = reactive({
        name: '',
        realname: '',
        password: '',
        cellphone: '',
        roleId: '',
        departmentId: ''
    })

    function setModalVisible() {
        dialogVisble.value = true
    }

    function handleConfirmClick() {
        dialogVisble.value = false

        systemStore.addUserDataActions(formData)
    }

    defineExpose({
        setModalVisible
    })
</script>

<style
    scoped
    lang="less"
>
    .user-modal {
        .form {
            padding: 0 20px;
        }
    }
</style>