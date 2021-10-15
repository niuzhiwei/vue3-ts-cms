import { Module } from 'vuex'
import { ISystemState } from './types'
import { IRootState } from '../../types'
// import { } from '@/service/login/login'

const SystemModule: Module<ISystemState, IRootState> = {
  namespaced: true,
  state() {
    return {
      userList: [],
      userCount: 0
    }
  },
  getters: {},
  mutations: {},
  actions: {
    getPageListAction({ commit }, payload: any) {
      console.log(payload)
    }
  }
}

export default SystemModule
