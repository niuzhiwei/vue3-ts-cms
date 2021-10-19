<template>
  <div class="pie-echart">
    <base-echart :options="options"></base-echart>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue'
import BaseEchart from '@/base-ui/echart'
import { IDataType } from '../types'

export default defineComponent({
  components: { BaseEchart },
  props: {
    pieData: {
      type: Array as PropType<IDataType[]>,
      required: true
    }
  },
  setup(props) {
    const options = computed(() => {
      return {
        tooltip: {
          trigger: 'item'
        },
        legend: {
          orient: 'horizontal',
          left: 'left'
        },
        series: [
          {
            name: '商品数量',
            type: 'pie',
            radius: [10, 100],
            center: ['50%', '50%'],
            roseType: 'area',
            itemStyle: {
              borderRadius: 8
            },
            data: props.pieData
          }
        ]
      }
    })

    return { options }
  }
})
</script>
<style lang="less" scoped></style>
