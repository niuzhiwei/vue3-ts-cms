<template>
  <div class="user">
    <page-search :formConfig="formConfig"></page-search>
    <div class="content"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useStore } from 'vuex'
import { formConfig } from './config/search.config'
import PageSearch from '@/components/page-search'

export default defineComponent({
  name: 'user',
  components: { PageSearch },
  setup() {
    const store = useStore()
    store.dispatch('system/getPageListAction', {
      pageUrl: '/user/list',
      queryInfo: { offset: 0, size: 10 }
    })

    return {
      formConfig
    }
  }
})
</script>

<style lang="less" scoped></style>
