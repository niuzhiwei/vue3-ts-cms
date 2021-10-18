<template>
  <el-dialog
    v-model="centerVisible"
    title="新建用户"
    width="30%"
    center
    destroy-on-close
  >
    <hy-form v-bind="modalConfig" v-model="formData"> </hy-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="centerVisible = false">取消</el-button>
        <el-button type="primary" @click="centerVisible = false"
          >确定</el-button
        >
      </span>
    </template>
  </el-dialog>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import HyForm from '@/base-ui/form'
export default defineComponent({
  props: {
    modalConfig: {
      type: Object,
      required: true
    },
    defaultInfo: {
      type: Object,
      default: () => ({})
    }
  },
  components: { HyForm },
  setup(props) {
    const centerVisible = ref(false)

    const formData = ref<any>({})

    watch(
      () => props.defaultInfo,
      (newValue) => {
        for (const item of props.modalConfig.formItems) {
          formData.value[item.field] = newValue[item.field]
        }
      }
    )

    return { centerVisible, formData }
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
