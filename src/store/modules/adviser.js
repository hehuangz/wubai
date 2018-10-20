import * as types from './../mutation_types'
import { searchAssistantByShopId, viewAssistant, usersView, seachShopAssistant } from '@/api/adviser'
const CODE = 200
export default {
  state: {
    adviserId: '',
    serverInfo: {
      status: 'fail',
      message: '接口调用失败'
    } // 服务信息
  },
  mutations: {
    [types.GLOBAL_RES] (state, {code, message, data}) {
      if (code !== CODE) {
        state.serverInfo = {
          code,
          status: 'fail',
          message
        }
        return false
      }
      state.serverInfo = {
        status: 'success',
        data
      }
    },
    [types.SET_ADVISER_ID] (state, adviserId) {
      // console.log('.......', adviserId)
      state.adviserId = adviserId
    },
    [types.GLOBAL_ADVISER] (state, opts) {
      state.adviserId = opts.adviserId
      state.adviserName = opts.adviserName
      state.isForce = opts.isForce
    }
  },
  actions: {
    async searchAssistantByShopId ({commit, state}, params) {
      let { data } = await searchAssistantByShopId(params)
      commit('GLOBAL_RES', data)
      return state.serverInfo
    },
    async viewAssistant ({commit, state}, params) {
      let { data } = await viewAssistant(params)
      commit('GLOBAL_RES', data)
      return state.serverInfo
    },
    async usersView ({commit, state}, params) {
      let { data } = await usersView(params)
      commit('GLOBAL_RES', data)
      return state.serverInfo
    },
    async seachShopAssistant ({commit, state}, params) {
      let { data } = await seachShopAssistant(params)
      commit('GLOBAL_RES', data)
      return state.serverInfo
    }
  },
  getters: {}
}
