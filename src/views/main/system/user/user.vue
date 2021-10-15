<template>
  <div class="user">
    <hy-form v-bind="formConfig"></hy-form>
    <div class="content"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HyForm from '@/base-ui/form'
import { formConfig } from './config/search.config'
export default defineComponent({
  name: 'user',
  components: { HyForm },
  setup() {
    return {
      formConfig
    }
  }
})
</script>

<style lang="less" scoped></style>
