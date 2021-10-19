<template>
  <div class="base-echart">
    <div ref="echartDivRef" :style="{ width, height }"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref, onMounted, watchEffect } from 'vue'
import { EChartsOption } from 'echarts'

import useEchart from '../hooks/useEchart'

export default defineComponent({
  props: {
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '400px'
    },
    options: {
      type: Object as PropType<EChartsOption>,
      required: true
    }
  },
  setup(props) {
    const echartDivRef = ref<HTMLElement>()

    onMounted(() => {
      const { setOptions } = useEchart(echartDivRef.value!)
      watchEffect(() => {
        setOptions(props.options)
      })
    })

    return { echartDivRef }
  }
})
</script>
<style lang="less" scoped></style>
