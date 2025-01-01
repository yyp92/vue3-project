import {ref} from 'vue'
import type PageModal from '@/components/page-comp/PageModal.vue'

function usePageModal() {
    const modalRef = ref<InstanceType<typeof PageModal>>()

    function handleNewClick() {
        modalRef.value?.setModalVisible()
    }

    function handleEditClick(data: any) {
        modalRef.value?.setModalVisible(false, data)
    }

    return {
        modalRef,
        handleNewClick,
        handleEditClick
    }
}

export default usePageModal