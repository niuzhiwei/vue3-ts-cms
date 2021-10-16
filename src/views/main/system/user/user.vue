<template>
  <div class="user">
    <page-search :formConfig="formConfig"></page-search>
    <div class="content">
      <hy-table
        :listData="userList"
        :propList="propList"
        :showIndexColumn="showIndexColumn"
        :showSelectColumn="showSelectColumn"
        @selectionChange="selectionChange"
        :title="title"
      >
        <template #enable="scope">
          <el-button
            plain
            size="mini"
            :type="scope.row.enable ? 'success' : 'danger'"
            >{{ scope.row.enable ? '启用' : '禁用' }}</el-button
          >
        </template>
        <template #createAt="scope">
          <span>{{ $filters.formatTime(scope.row.createAt) }}</span>
        </template>
        <template #updateAt="scope">
          <span>{{ $filters.formatTime(scope.row.updateAt) }}</span>
        </template>
        <template #handler>
          <div class="handle-btns">
            <el-button icon="el-icon-edit" size="mini" type="text"
              >编辑</el-button
            >
            <el-button icon="el-icon-delete" size="mini" type="text"
              >删除</el-button
            >
          </div>
        </template>
        <template #header-handler>
          <el-button @click="handleNewUser" type="primary" size="medium"
            >新建用户</el-button
          >
        </template>
      </hy-table>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useStore } from '@/store'
import { formConfig } from './config/search.config'
import PageSearch from '@/components/page-search'
import HyTable from '@/base-ui/table'

export default defineComponent({
  name: 'user',
  components: { PageSearch, HyTable },
  setup() {
    const store = useStore()
    store.dispatch('system/getPageListAction', {
      pageUrl: '/users/list',
      queryInfo: { offset: 0, size: 10 }
    })

    const userList = computed(() => store.state.system.userList)
    const userCount = computed(() => store.state.system.userCount)

    const propList = [
      {
        prop: 'name',
        label: '用户名',
        minWidth: '100'
      },
      {
        prop: 'realname',
        label: '真实姓名',
        minWidth: '100'
      },
      {
        prop: 'cellphone',
        label: '手机号码',
        minWidth: '100'
      },
      {
        prop: 'enable',
        label: '状态',
        minWidth: '100',
        slotName: 'enable'
      },
      {
        prop: 'createAt',
        label: '创建时间',
        minWidth: '250',
        slotName: 'createAt'
      },
      {
        prop: 'updateAt',
        label: '更新时间',
        minWidth: '250',
        slotName: 'updateAt'
      },
      { label: '操作', minWidth: '120', slotName: 'handler' }
    ]

    const showIndexColumn = true
    const showSelectColumn = true
    const title = '用户列表'

    const selectionChange = (value: any) => {
      console.log(value)
    }
    const handleNewUser = () => {
      console.log(1)
    }

    return {
      formConfig,
      userList,
      userCount,
      propList,
      showIndexColumn,
      showSelectColumn,
      selectionChange,
      title,
      handleNewUser
    }
  }
})
</script>

<style lang="less" scoped>
.content {
  padding: 20px;
  border-top: 20px solid #f5f5f5;
}
</style>
