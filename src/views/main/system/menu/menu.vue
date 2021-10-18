<template>
  <div class="user">
    <page-content
      :contentTableConfig="contentTableConfig"
      pageName="Menu"
      ref="pageContentRef"
    ></page-content>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import { formConfig } from './config/search.config'
import { contentTableConfig } from './config/content.config'

import PageContent from '@/components/page-content'

export default defineComponent({
  name: 'hy-menu',
  components: { PageContent },
  setup() {
    return {
      formConfig,
      contentTableConfig
    }
  }
})
</script>

<style lang="less" scoped></style>
