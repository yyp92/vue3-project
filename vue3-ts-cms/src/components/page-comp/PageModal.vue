<template>
    <div class="page-modal">
        <el-dialog
            v-model="dialogVisble"
            :title="isNewRef ? modalConfig.header.newTitle : modalConfig.header.editTitle"
            width="500"
        >
            <div class="form">
                <el-form
                    :model="formData"
                    label-width="80px"
                    size="large"
                >
                    <template
                        v-for="item in modalConfig.formItems"
                        :key="item.prop"
                    >
                        <el-form-item
                            :label="item.label"
                            :prop="item.prop"
                        >
                            <template v-if="item.type === 'input'">
                                <el-input
                                    v-model="formData[item.prop]"
                                    :placeholder="item.placeholder"
                                />
                            </template>

                            <template v-if="item.type === 'date-picker'">
                                <el-date-picker
                                    type="daterange"
                                    range-separator="-"
                                    start-placeholder="开始时间"
                                    end-placeholder="结束时间"
                                    v-model="formData[item.prop]"
                                />
                            </template>

                            <template v-if="item.type === 'select'">
                                <el-select
                                    v-model="formData[item.prop]"
                                    :placeholder="item.placeholder"
                                >
                                    <template
                                        v-for="option in item.options"
                                        :key="option.value"
                                    >
                                        <el-option
                                            :label="option.label"
                                            :value="option.value"
                                        />
                                    </template>
                                </el-select>
                            </template>

                            <template v-if="item.type === 'custom'">
                                <slot :name="item.slotName"></slot>
                            </template>
                        </el-form-item>
                    </template>
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
    name="PageModal"
>
    import {ref, reactive} from 'vue'
    import userSystemStore from '@/store/main/system/system'
    import type {IModalProps} from '@/components/page-comp/type'

    const props = defineProps<IModalProps>()

    // 定义 form 的数据
    const initiaForm: any = {}
    for (const item of props.modalConfig.formItems) {
        initiaForm[item.prop] = item?.initialValue ?? ''
    }

    const systemStore = userSystemStore()

    const dialogVisble = ref(false)
    const isNewRef = ref(true)
    const editData = ref()
    const formData = reactive<any>(initiaForm)

    function setModalVisible(isNew: boolean = true, data?: any) {
        dialogVisble.value = true
        isNewRef.value = isNew

        // 编辑
        if (!isNew && data) {
            editData.value = data

            for (const key in formData) {
                formData[key] = data[key]
            }
        }
        // 新建
        else {
            editData.value = null

            for (const key in formData) {
                const item = props.modalConfig.formItems.find(item => item.prop === key) as any

                formData[key] = item ? item?.initialValue : ''
            }
        }
    }

    function handleConfirmClick() {
        dialogVisble.value = false

        let infoData = {...formData}
        if (props?.otherInfo) {
            infoData = {
                ...infoData,
                ...props.otherInfo
            }
        }

        if (isNewRef.value) {
            systemStore.addPageDataActions(props.modalConfig.pageName, infoData)
        }
        else {
            systemStore.editPageDataActions(
                props.modalConfig.pageName,
                editData.value?.id,
                infoData
            )
        }
    }

    defineExpose({
        setModalVisible
    })
</script>

<style
    scoped
    lang="less"
>
    .page-modal {
        .form {
            padding: 0 20px;
        }
    }
</style>