import { Module } from 'vuex'
import { ISystemState } from './types'
import { IRootState } from '../../types'
import { getPageListData } from '@/service/main/system/system'

const SystemModule: Module<ISystemState, IRootState> = {
  namespaced: true,
  state() {
    return {
      userList: [],
      userCount: 0
    }
  },
  getters: {},
  mutations: {
    changeUserList(state, userList: any[]) {
      state.userList = userList
    },
    changeUserCount(state, userCount: number) {
      state.userCount = userCount
    }
  },
  actions: {
    async getPageListAction({ commit }, payload: any) {
      const { pageUrl, queryInfo } = payload
      const result = await getPageListData(pageUrl, queryInfo)
      const { list, totalCount } = result.data
      commit('changeUserList', list)
      commit('changeUserCount', totalCount)
    }
  }
}

export default SystemModule
