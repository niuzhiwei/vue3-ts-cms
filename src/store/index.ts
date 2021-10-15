import { createStore, Store, useStore as useVuexStore } from 'vuex'
import { IRootState, IStoreType } from './types'
import login from './login/login'
import system from './main/system/system'

const store = createStore<IRootState>({
  state: () => {
    return {
      name: 'niuniu'
    }
  },
  mutations: {},
  actions: {},
  modules: { login, system }
})
export default store

export function useStore(): Store<IStoreType> {
  return useVuexStore()
}
export function setupStore() {
  store.dispatch('login/loadLocalLogin')
}
