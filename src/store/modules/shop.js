import * as types from './../mutation_types'
import { shopView } from '@/api/shop'
const CODE = 200
export default {
  state: {
    serverInfo: {
      status: 'fail',
      message: '接口调用失败'
    } // 服务信息
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
    async shopView ({commit, state}, params) {
      let { data } = await shopView(params)
      commit('GLOBAL_RES', data)
      return state.serverInfo
    }
  },
  getters: {}
}
