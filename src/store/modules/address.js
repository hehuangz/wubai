import * as types from './../mutation_types'
// import vue from 'vue'
import {
  deleteAddress,
  getAddress,
  setDefaultAddress,
  addAddress,
  editAddress,
  getDefaultAddress
} from '@/api/address'
const CODE = 1
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
    async deleteAddressFn ({commit, state}, params) {
      let { data } = await deleteAddress(params)
      commit('GLOBAL_RES', data)
      return state.serverInfo
    },
    async getAddress ({commit, state}, params) {
      let { data } = await getAddress(params)
      commit('GLOBAL_RES', data)
      return state.serverInfo
    },
    async setDefaultAddress ({commit, state}, params) {
      let { data } = await setDefaultAddress(params)
      commit('GLOBAL_RES', data)
      return state.serverInfo
    },
    async addAddress ({commit, state}, params) {
      let { data } = await addAddress(params)
      commit('GLOBAL_RES', data)
      return state.serverInfo
    },
    async editAddress ({commit, state}, params) {
      let { data } = await editAddress(params)
      commit('GLOBAL_RES', data)
      return state.serverInfo
    },
    async getDefaultAddress ({commit, state}, params) {
      let { data } = await getDefaultAddress(params)
      commit('GLOBAL_RES', data)
      return state.serverInfo
    }
  },
  getters: {}
}
