import { createStore, Store, useStore as useVuexStore } from 'vuex'
import { IRootState, IStoreType } from './types'
import login from './login/login'
import system from './main/system/system'
import { getPageListData } from '@/service/main/system/system'

const store = createStore<IRootState>({
  state: () => {
    return {
      name: 'niuniu',
      entireDepartment: [],
      entireRole: [],
      entireMenu: []
    }
  },
  mutations: {
    changeEntireDepartment(state, list) {
      state.entireDepartment = list
    },
    changeEntireRole(state, list) {
      state.entireRole = list
    },
    changeEntireMenu(state, list) {
      state.entireMenu = list
    }
  },
  actions: {
    async getInitialDataAction({ commit }) {
      const departmentRes = await getPageListData('/department/list', {
        offset: 0,
        size: 1000
      })
      const { list: department } = departmentRes.data
      const roleRes = await getPageListData('/role/list', {
        offset: 0,
        size: 1000
      })
      const { list: role } = roleRes.data
      const menuRes = await getPageListData('/menu/list', {})
      const { list: menu } = menuRes.data
      commit('changeEntireDepartment', department)
      commit('changeEntireRole', role)
      commit('changeEntireMenu', menu)
    }
  },
  modules: { login, system }
})
export default store

export function useStore(): Store<IStoreType> {
  return useVuexStore()
}
export function setupStore() {
  store.dispatch('login/loadLocalLogin')
}
