<template>
  <div class="user">
    <page-content
      :contentTableConfig="contentTableConfig"
      pageName="Department"
      ref="pageContentRef"
    >
    </page-content>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import { contentTableConfig } from './config/content.config'

import PageContent from '@/components/page-content'

export default defineComponent({
  name: 'department',
  components: { PageContent },
  setup() {
    return {
      contentTableConfig
    }
  }
})
</script>

<style lang="less" scoped></style>
