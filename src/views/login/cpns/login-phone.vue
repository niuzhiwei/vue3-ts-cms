<template>
  <div class="login-account">
    <el-form label-width="65px" :rules="phoneRules" :model="account">
      <el-form-item label="手机号" prop="phone">
        <el-input v-model="account.phone"></el-input>
      </el-form-item>
      <el-form-item label="验证码" prop="code">
        <div class="get-code">
          <el-input v-model="account.code"></el-input>
          <el-button type="primary" class="get-btn">获取验证码</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import { phoneRules } from '../config/account-config'
export default defineComponent({
  setup() {
    const account = reactive({
      phone: '',
      code: ''
    })

    return {
      account,
      phoneRules
    }
  }
})
</script>
<style lang="less" scoped>
.login-account {
  width: 100%;
  .get-code {
    display: flex;
    align-items: center;
    .get-btn {
      margin-left: 8px;
    }
  }
}
</style>
