import * as types from './../mutation_types'
import { getData } from '@/api/wages'
const CODE = 1
export default {
  state: {
    // 用户id
    uid: 1,
    token: '',
    serverInfo: { // 服务端返回的信息
      status: 'fail',
      message: '接口调用失败'
    }
  },
  mutations: {
    [types.GLOBAL_RES] (state, {code, message, data}) {
      console.log('err', code, message, data)
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
    },
    [types.USER_LOGIN] (state, user) {
      state.uid = user.uid
      state.token = user.token
    }
  },
  actions: {
    async getData ({commit, state}, params) {
      const { data } = await getData(params)
      commit('GLOBAL_RES', data)
      return state.serverInfo
    }
  },
  getters: {}
}
