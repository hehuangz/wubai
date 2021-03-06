import * as types from './../mutation_types'
import {
  getCode, toLoginIn
} from '@/api/login'
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
      console.log('GLOBAL_RES', code, message, data)
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
    async getCode ({commit, state}, params) {
      const { data } = await getCode(params)
      commit('GLOBAL_RES', data)
      return state.serverInfo
    },
    async toLoginIn ({commit, state}, params) {
      const { data } = await toLoginIn(params)
      commit('GLOBAL_RES', data)
      return state.serverInfo
    }
  },
  getters: {}
}
