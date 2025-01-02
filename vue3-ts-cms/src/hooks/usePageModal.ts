import {ref} from 'vue'
import type PageModal from '@/components/page-comp/PageModal.vue'

type EditCallbck = (data: any) => void

function usePageModal(editCallbck?: EditCallbck) {
    const modalRef = ref<InstanceType<typeof PageModal>>()

    function handleNewClick() {
        modalRef.value?.setModalVisible()
    }

    function handleEditClick(data: any) {
        modalRef.value?.setModalVisible(false, data)

        if (typeof editCallbck === 'function') {
            editCallbck(data)
        }
    }

    return {
        modalRef,
        handleNewClick,
        handleEditClick
    }
}

export default usePageModal