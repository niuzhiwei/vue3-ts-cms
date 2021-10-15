<template>
  <div>
    <el-dropdown>
      <span class="el-dropdown-link">
        <el-avatar
          size="large"
          src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
        ></el-avatar>
        <span class="username">{{ name }}</span>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>退出登录</el-dropdown-item>
          <el-dropdown-item divided>用户信息</el-dropdown-item>
          <el-dropdown-item>系统管理</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from '@/store/index'
export default defineComponent({
  setup() {
    const store = useStore()
    const name = computed(() => store.state.login.userInfo.name)
    return { name }
  }
})
</script>
<style lang="less" scoped>
.el-dropdown-link {
  display: flex;
  align-items: center;
  cursor: pointer;
  .username {
    font-size: 20px;
    margin-left: 8px;
  }
}
</style>
