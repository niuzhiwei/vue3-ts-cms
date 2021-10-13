import { createApp } from 'vue'
import { registerApp } from './global'
import App from './App.vue'
import router from './router'
import store from './store'
import './service/axios_demo'
import hyRequest from './service'

const app = createApp(App)
app.use(registerApp)
app.use(store).use(router).mount('#app')

console.log(process.env.VUE_APP_BASE_NAME)

// //单独请求拦截器
// hyRequest.request({
//   url: '/home/multidata',
//   method: 'GET',
//   interceptors: {
//     requestInterceptors: (config) => {
//       return config
//     }
//   }
// })

interface DataType {
  data: any
  returnCode: string
  success: boolean
}
hyRequest
  .request<DataType>({
    url: '/home/multidata',
    method: 'GET'
  })
  .then((res) => {
    console.log(res)
  })
