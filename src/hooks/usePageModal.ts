import { ref } from 'vue'
import PageModal from '@/components/page-modal'
type CallbackType = () => void

export function usePageModal(
  newCallback?: CallbackType,
  editCallback?: CallbackType
) {
  const pageModalRef = ref<InstanceType<typeof PageModal>>()
  const defaultInfo = ref({})

  const handleNewData = () => {
    defaultInfo.value = {}
    if (pageModalRef.value) {
      pageModalRef.value.centerVisible = true
    }
    newCallback && newCallback()
  }
  const handleEditData = (item: any) => {
    defaultInfo.value = { ...item }
    if (pageModalRef.value) {
      pageModalRef.value.centerVisible = true
    }
    editCallback && editCallback()
  }
  return [pageModalRef, defaultInfo, handleNewData, handleEditData]
}
