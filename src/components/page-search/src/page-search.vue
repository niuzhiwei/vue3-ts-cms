<template>
  <hy-form v-bind="formConfig" v-model="formData">
    <template #header>
      <h2 class="header">高级检索</h2>
    </template>
    <template #footer>
      <div class="handle-btns">
        <el-button type="primary" icon="el-icon-refresh">重置</el-button>
        <el-button type="primary" icon="el-icon-search">搜索</el-button>
      </div>
    </template>
  </hy-form>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import HyForm from '@/base-ui/form'
export default defineComponent({
  props: {
    formConfig: {
      type: Object,
      required: true
    }
  },
  components: { HyForm },
  setup() {
    const formData = ref({
      id: '',
      name: '',
      password: '',
      sport: '',
      createTime: ''
    })
    return { formData }
  }
})
</script>
<style lang="less" scoped>
.handle-btns {
  text-align: right;
  padding: 0 50px 20px 0;
}
</style>
