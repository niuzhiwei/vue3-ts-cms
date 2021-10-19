<template>
  <el-dialog
    v-model="centerVisible"
    title="新建用户"
    width="30%"
    center
    destroy-on-close
  >
    <hy-form v-bind="modalConfig" v-model="formData"> </hy-form>
    <slot></slot>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="centerVisible = false">取消</el-button>
        <el-button type="primary" @click="handleConfirmClick">确定</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import { useStore } from '@/store'
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
    },
    otherInfo: {
      type: Object,
      default: () => ({})
    },
    pageName: {
      type: String,
      required: true
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

    const store = useStore()
    //点击确定按钮
    const handleConfirmClick = () => {
      centerVisible.value = false
      if (Object.keys(props.defaultInfo).length) {
        //编辑
        store.dispatch('system/editPageDataAction', {
          pageName: props.pageName,
          queryInfo: { ...formData.value, ...props.otherInfo },
          id: props.defaultInfo.id
        })
      } else {
        //新建
        store.dispatch('system/createPageDataAction', {
          pageName: props.pageName,
          queryInfo: { ...formData.value, ...props.otherInfo }
        })
      }
    }
    return { centerVisible, formData, handleConfirmClick }
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
