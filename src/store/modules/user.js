// 用户
import * as types from './../mutation_types'
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

  }
}
