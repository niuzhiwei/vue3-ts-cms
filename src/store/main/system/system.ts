import { Module } from 'vuex'
import { ISystemState } from './types'
import { IRootState } from '../../types'
import { getPageListData } from '@/service/main/system/system'

const SystemModule: Module<ISystemState, IRootState> = {
  namespaced: true,
  state() {
    return {
      userList: [],
      userCount: 0,
      roleList: [],
      roleCount: 0,
      goodsList: [],
      goodsCount: 0
    }
  },
  getters: {
    pageListData(state) {
      return (pageName: string) => {
        switch (pageName) {
          case 'User':
            return state.userList
          case 'Role':
            return state.roleList
          case 'Goods':
            return state.goodsList
        }
      }
    },
    pageListCount(state) {
      return (pageName: string) => {
        switch (pageName) {
          case 'User':
            return state.userCount
          case 'Role':
            return state.roleCount
          case 'Goods':
            return state.goodsCount
        }
      }
    }
  },
  mutations: {
    changeUserList(state, userList: any[]) {
      state.userList = userList
    },
    changeUserCount(state, userCount: number) {
      state.userCount = userCount
    },
    changeRoleList(state, roleList: any[]) {
      state.roleList = roleList
    },
    changeRoleCount(state, roleCount: number) {
      state.roleCount = roleCount
    },
    changeGoodsList(state, goodsList: any[]) {
      state.goodsList = goodsList
    },
    changeGoodsCount(state, goodsCount: number) {
      state.goodsCount = goodsCount
    }
  },
  actions: {
    async getPageListAction({ commit }, payload: any) {
      const { pageName, queryInfo } = payload
      let pageUrl = ''
      switch (pageName) {
        case 'User':
          pageUrl = '/users/list'
          break
        case 'Role':
          pageUrl = '/role/list'
          break
        case 'Goods':
          pageUrl = '/goods/list'
          break
      }
      //发送请求
      const result = await getPageListData(pageUrl, queryInfo)
      const { list, totalCount } = result.data
      commit(`change${pageName}List`, list)
      commit(`change${pageName}Count`, totalCount)
    }
  }
}

export default SystemModule
