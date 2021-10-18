<template>
  <hy-form v-bind="formConfig" v-model="formData">
    <template #header>
      <div class="header">高级检索</div>
    </template>
    <template #footer>
      <div class="handle-btns">
        <el-button
          type="primary"
          icon="el-icon-refresh"
          @click="handleResetClick"
          >重置</el-button
        >
        <el-button
          type="primary"
          icon="el-icon-search"
          @click="handleQueryClick"
          >搜索</el-button
        >
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
  emits: ['resetBtnClick', 'queryBtnClick'],
  setup(props, { emit }) {
    //属性应该由配置文件来决定
    const formItems = props.formConfig?.formItems ?? []
    const formOriginData: any = {}
    for (const item of formItems) {
      formOriginData[item.field] = ''
    }
    const formData = ref(formOriginData)
    //重置清空
    const handleResetClick = () => {
      formData.value = formOriginData
      emit('resetBtnClick')
    }
    //搜索
    const handleQueryClick = () => {
      emit('queryBtnClick', formData.value)
    }
    return { formData, handleResetClick, handleQueryClick }
  }
})
</script>
<style lang="less" scoped>
.handle-btns {
  text-align: right;
  padding: 0 50px 20px 0;
}
.header {
  display: flex;
  height: 45px;
  padding: 0 5px;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: 700;
}
</style>
