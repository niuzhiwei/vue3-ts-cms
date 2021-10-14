const rules = {
  name: [
    { required: true, message: '用户名是必填内容', trigger: 'blur' },
    {
      pattern: /^[a-z0-9]{5,10}$/,
      message: '用户名必须是5-10个字母或者数字',
      trigger: 'blur'
    }
  ],
  password: [
    { required: true, message: '密码是必填内容', trigger: 'blur' },
    {
      pattern: /^[a-z0-9]{3,}$/,
      message: '密码必须是3位以上的字母或者数字',
      trigger: 'blur'
    }
  ]
}

const phoneRules = {
  phone: [
    { required: true, message: '手机号码是必填内容', trigger: 'blur' },
    {
      pattern: /^1(3\d|4[5-9]|5[0-35-9]|6[567]|7[0-8]|8\d|9[0-35-9])\d{8}$/,
      message: '手机号码格式不正确',
      trigger: 'blur'
    }
  ],
  code: [
    { required: true, message: '验证码是必填内容', trigger: 'blur' },
    {
      pattern: /^[a-zA-Z0-9]{6}$/,
      message: '验证码必须是6位字母或者数组',
      trigger: 'blur'
    }
  ]
}
export { rules, phoneRules }
