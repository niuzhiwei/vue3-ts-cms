<template>
  <div class="user">
    <page-content
      :contentTableConfig="contentTableConfig"
      pageName="Goods"
      ref="pageContentRef"
    >
      <template #image="scope">
        <el-image
          style="width: 60px; height: 100px"
          :src="scope.row.imgUrl"
          :preview-src-list="[scope.row.imgUrl]"
        ></el-image>
      </template>
      <template #oldPrice="scope">
        {{ '￥' + scope.row.oldPrice }}
      </template>
      <template #status="scope">
        <el-button
          plain
          size="mini"
          :type="scope.row.status ? 'success' : 'danger'"
          >{{ scope.row.status ? '启用' : '禁用' }}</el-button
        >
      </template>
    </page-content>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import { contentTableConfig } from './config/content.config'

import PageContent from '@/components/page-content'

export default defineComponent({
  name: 'goods',
  components: { PageContent },
  setup() {
    return {
      contentTableConfig
    }
  }
})
</script>

<style lang="less" scoped></style>
