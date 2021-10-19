<template>
  <div class="user">
    <page-search
      :formConfig="formConfig"
      @resetBtnClick="handleResetClick"
      @queryBtnClick="handleQueryClick"
    ></page-search>
    <page-content
      :contentTableConfig="contentTableConfig"
      pageName="Role"
      ref="pageContentRef"
      @newBtnClick="handleNewData"
      @editBtnClick="handleEditData"
    ></page-content>
    <div class="page-model">
      <page-modal
        ref="pageModalRef"
        pageName="Role"
        :modalConfig="modalConfigRef"
        :defaultInfo="defaultInfo"
      ></page-modal>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'

import { formConfig } from './config/search.config'
import { contentTableConfig } from './config/content.config'
import { modalConfig } from './config/modal.config'

import PageModal from '@/components/page-modal'
import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'

import { usePageSearch } from '@/hooks/usePageSearch'
import { usePageModal } from '@/hooks/usePageModal'

export default defineComponent({
  name: 'role',
  components: { PageSearch, PageContent, PageModal },
  setup() {
    const [pageContentRef, handleResetClick, handleQueryClick] = usePageSearch()

    const modalConfigRef = computed(() => {
      return modalConfig
    })

    const [pageModalRef, defaultInfo, handleNewData, handleEditData] =
      usePageModal()

    return {
      formConfig,
      contentTableConfig,
      pageContentRef,
      handleResetClick,
      handleQueryClick,
      modalConfigRef,
      pageModalRef,
      defaultInfo,
      handleNewData,
      handleEditData
    }
  }
})
</script>

<style lang="less" scoped></style>
