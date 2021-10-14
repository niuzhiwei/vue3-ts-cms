import { createApp } from 'vue'
import { registerApp } from './global'
import 'normalize.css'
import './assets/css/index.css'
import App from './App.vue'
import router from './router'
import store from './store'
import { setupStore } from './store/index'

const app = createApp(App)
app.use(registerApp)
app.use(store).use(router)
setupStore()
app.mount('#app')

// console.log(process.env.VUE_APP_BASE_NAME)

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

// interface DataType {
//   data: any
//   returnCode: string
//   success: boolean
// }
// hyRequest
//   .request<DataType>({
//     url: '/home/multidata',
//     method: 'GET'
//   })
//   .then((res) => {
//     console.log(res)
//   })
