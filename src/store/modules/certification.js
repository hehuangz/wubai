import * as types from './../mutation_types'
import { getAll, getContact, getBank, getIdCard } from '@/api/certification'
const CODE = 1
export default {
  state: {
    serverInfo: { // 服务端返回的信息
      status: 'fail',
      message: '接口调用失败'
    }
  },
  mutations: {
    [types.GLOBAL_RES] (state, {code, message, data}) {
      if (code !== CODE) {
        // vue.$vux.toast.text('网络出错')
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
    }
  },
  actions: {
    async getAll ({commit, state}, params) {
      const { data } = await getAll(params)
      commit('GLOBAL_RES', data)
      return state.serverInfo
    },
    async getContact ({commit, state}, params) {
      const { data } = await getContact(params)
      commit('GLOBAL_RES', data)
      return state.serverInfo
    },
    async getBank ({commit, state}, params) {
      const { data } = await getBank(params)
      commit('GLOBAL_RES', data)
      return state.serverInfo
    },
    async etIdCard ({commit, state}, params) {
      const { data } = await etIdCard(params)
      commit('GLOBAL_RES', data)
      return state.serverInfo
    }
  },
  getters: {}
}
