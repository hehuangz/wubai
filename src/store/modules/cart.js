import * as types from './../mutation_types'
// import vue from 'vue'
import {
  addCart, updateCounselor
} from '@/api/cart'
const CODE = 1
export default {
  state: {
    serverInfo: {
      status: 'fail',
      message: '接口调用失败'
    }, // 服务信息
    cartNumber: ''
  },
  mutations: {
    [types.GLOBAL_RES] (state, {code, message, data}) {
      if (code !== CODE) {
        // vue.$vux.toast.text('网络出错')
        state.serverInfo = {
          status: 'fail',
          code,
          data,
          message

        }
        return false
      }
      state.serverInfo = {
        status: 'success',
        code,
        data,
        message
      }
    }
  },
  actions: {
    async addCart ({commit, state}, params) {
      const { data } = await addCart(params)
      commit('GLOBAL_RES', data)
      return state.serverInfo
    },
    async updateCounselor ({commit, state}, params) {
      const { data } = await updateCounselor(params)
      commit('GLOBAL_RES', data)
      return state.serverInfo
    }
  },
  getters: {}
}
