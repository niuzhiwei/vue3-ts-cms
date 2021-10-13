import { createApp } from 'vue'
import { registerApp } from './global'
import App from './App.vue'
import router from './router'
import store from './store'

const app = createApp(App)
app.use(registerApp)
app.use(store).use(router).mount('#app')
