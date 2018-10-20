import * as types from './../mutation_types'
// import vue from 'vue'
import {
  getAllFQA,
  getIssueList,
  getFQADetail,
  search
} from '@/api/fqa'
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
          status: 'fail',
          code,
          data,
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
    async getAllFqa ({commit, state}) {
      const { data } = await getAllFQA()
      commit('GLOBAL_RES', data)
      return state.serverInfo
    },
    async getIssueList ({commit, state}, params) {
      const { data } = await getIssueList(params)
      commit('GLOBAL_RES', data)
      return state.serverInfo
    },
    async getFqaDetail ({commit, state}, params) {
      const { data } = await getFQADetail(params)
      commit('GLOBAL_RES', data)
      return state.serverInfo
    },
    async search ({commit, state}, params) {
      const { data } = await search(params)
      commit('GLOBAL_RES', data)
      return state.serverInfo
    }
  },
  getters: {}
}
