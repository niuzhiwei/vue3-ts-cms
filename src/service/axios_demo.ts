import axios from 'axios'

//Promise本身是可以有类型的
new Promise<string>((resolve) => {
  resolve('1233')
}).then((res) => {
  console.log(res)
})

//axios配置项
axios.defaults.baseURL = ''
axios.defaults.timeout = 10000

//axios拦截器
//fn1：请求发送成功执行的函数
axios.interceptors.request.use(
  (config) => {
    return config
  },
  (err) => {
    console.log(err)
    return err
  }
)
axios.interceptors.response.use(
  (res) => {
    return res.data
  },
  (err) => {
    console.log(err)
    return err
  }
)
