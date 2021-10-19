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
    xLabels: {
      type: Array as PropType<string[]>,
      required: true
    },
    values: {
      type: Array as PropType<any[]>,
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
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: props.xLabels
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: props.values,
            type: 'line',
            areaStyle: {}
          }
        ]
      }
    })

    return { options }
  }
})
</script>
<style lang="less" scoped></style>
