// 用户
import * as types from './../mutation_types'
import {
  getUser, createCode, userinfoUpdate
} from '@/api/user'
const CODE = 1
export default {
  state: {
    serverInfo: {
      status: 'fail',
      message: '接口调用失败'
    }
  },
  mutations: {
    [types.GLOBAL_RES] (state, {code, message, data}) {
      if (code !== CODE) {
        state.serverInfo = {
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
    [types.GLOBAL_USERINFO] (state, opts) {
      state.userInfo = opts
    }
  },
  actions: {
    async getUser ({commit, state}, prarams) {
      // console.log(prarams)
      // // const Test = await getUser(prarams)
      // // console.log(Test)
      const { data } = await getUser(prarams)
      commit('GLOBAL_RES', data)
      return state.serverInfo
    },
    async createCode ({commit, state}, prarams) {
      const { data } = await createCode(prarams)
      commit('GLOBAL_RES', data)
      return state.serverInfo
    },
    async userinfoUpdate ({commit, state}, prarams) {
      const { data } = await userinfoUpdate(prarams)
      commit('GLOBAL_RES', data)
      return state.serverInfo
    }
  }
}
