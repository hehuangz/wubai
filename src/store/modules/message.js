import * as types from './../mutation_types'
// import vue from 'vue'
import {getNewMessage} from '@/api/message'
const CODE = 1
export default {
  state: {
    // 列表索引
    i: 0,
    moreMenu: false,
    haveNewMessage: false,
    serverInfo: { // 服务端返回的信息
      status: 'fail',
      message: '接口调用失败'
    }
  },
  mutations: {
    [types.SET_MENU_INDEX] (state, i) {
      state.i = i
    },
    [types.SET_MORE_MENU] (state, moreMenu) {
      state.moreMenu = moreMenu
    },
    [types.SET_HAVE_NEW_MESSAGE] (state, haveNewMessage) {
      state.haveNewMessage = haveNewMessage
    },
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
    }
  },
  actions: {
    async getNewMessage ({commit, state}, params) {
      let {data} = await getNewMessage(params)
      commit('GLOBAL_RES', data)
      return state.serverInfo
    }
  },
  getters: {}
}
