import { createStore } from 'vuex'
import { IRootState } from './types'
import login from './login/login'

const store = createStore<IRootState>({
  state: () => {
    return {
      name: 'niuniu'
    }
  },
  mutations: {},
  actions: {},
  modules: { login }
})
export default store

export function setupStore() {
  store.dispatch('login/loadLocalLogin')
}
