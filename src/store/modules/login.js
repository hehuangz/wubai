import * as types from './../mutation_types'
import {
  getCode, toLoginIn
} from '@/api/login'
const CODE = 200
export default {
  state: {
    // 用户id
    uid: 1,
    token: ''
  },
  mutations: {
    [types.USER_LOGIN] (state, user) {
      state.uid = user.uid
      state.token = user.token
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
