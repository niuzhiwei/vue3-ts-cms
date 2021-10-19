import { Module } from 'vuex'
import { ISystemState } from './types'
import { IRootState } from '../../types'
import {
  getPageListData,
  deletePageData,
  createPageData,
  editPageData
} from '@/service/main/system/system'

const SystemModule: Module<ISystemState, IRootState> = {
  namespaced: true,
  state() {
    return {
      userList: [],
      userCount: 0,
      roleList: [],
      roleCount: 0,
      goodsList: [],
      goodsCount: 0,
      menuList: [],
      menuCount: 0,
      departmentList: [],
      departmentCount: 0
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
          case 'Menu':
            return state.menuList
          case 'Department':
            return state.departmentList
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
          case 'Department':
            return state.departmentCount
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
    },
    changeMenuList(state, menuList: any[]) {
      state.menuList = menuList
    },
    changeMenuCount(state, menuCount: number) {
      state.menuCount = menuCount
    },
    changeDepartmentList(state, departmentList: any[]) {
      state.departmentList = departmentList
    },
    changeDepartmentCount(state, departmentCount: number) {
      state.departmentCount = departmentCount
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
        case 'Menu':
          pageUrl = '/menu/list'
          break
        case 'Department':
          pageUrl = '/department/list'
          break
      }
      //发送请求
      const result = await getPageListData(pageUrl, queryInfo)
      const { list, totalCount } = result.data
      commit(`change${pageName}List`, list)
      commit(`change${pageName}Count`, totalCount)
    },
    async deletePageDataAction({ dispatch }, payload: any) {
      const { pageName, id } = payload
      let pageUrl = ''
      switch (pageName) {
        case 'User':
          pageUrl = '/users/' + id
          break
        case 'Role':
          pageUrl = '/role/' + id
          break
        case 'Goods':
          pageUrl = '/goods/' + id
          break
        case 'Menu':
          pageUrl = '/menu/' + id
          break
        case 'Department':
          pageUrl = '/department/' + id
      }
      await deletePageData(pageUrl)
      dispatch('getPageListAction', {
        pageName,
        queryInfo: {
          offset: 0,
          size: 10
        }
      })
    },
    async createPageDataAction({ dispatch }, payload: any) {
      const { pageName, queryInfo } = payload
      let pageUrl = ''
      switch (pageName) {
        case 'User':
          pageUrl = '/users'
          break
        case 'Role':
          pageUrl = '/role'
          break
        case 'Goods':
          pageUrl = '/goods'
          break
        case 'Menu':
          pageUrl = '/menu'
          break
        case 'Department':
          pageUrl = '/department'
      }
      await createPageData(pageUrl, queryInfo)
      dispatch('getPageListAction', {
        pageName,
        queryInfo: {
          offset: 0,
          size: 10
        }
      })
    },
    async editPageDataAction({ dispatch }, payload: any) {
      const { pageName, queryInfo, id } = payload
      let pageUrl = ''
      switch (pageName) {
        case 'User':
          pageUrl = '/users/' + id
          break
        case 'Role':
          pageUrl = '/role/' + id
          break
        case 'Goods':
          pageUrl = '/goods/' + id
          break
        case 'Menu':
          pageUrl = '/menu/' + id
          break
        case 'Department':
          pageUrl = '/department/' + id
      }
      await editPageData(pageUrl, queryInfo)
      dispatch('getPageListAction', {
        pageName,
        queryInfo: {
          offset: 0,
          size: 10
        }
      })
    }
  }
}

export default SystemModule
