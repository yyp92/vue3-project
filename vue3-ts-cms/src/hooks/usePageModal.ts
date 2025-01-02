import {ref} from 'vue'
import type PageModal from '@/components/page-comp/PageModal.vue'

type EditCallbck = (data: any) => void
type NewCallbck = () => void

function usePageModal(newCallback?: NewCallbck, editCallbck?: EditCallbck) {
    const modalRef = ref<InstanceType<typeof PageModal>>()

    function handleNewClick() {
        modalRef.value?.setModalVisible()

        if (typeof newCallback === 'function') {
            newCallback()
        }
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