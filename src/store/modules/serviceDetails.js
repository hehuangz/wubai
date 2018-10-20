// 售后订单详情渲染
import * as types from './../mutation_types'
export default {
  state: {
    // 售后订单详情数据
    serviceOrder: {}
  },
  mutations: {
    [types.GET_SERVICE_DETAILS] (state, obj) { // 获取售后订单详情的数据
      state.serviceOrder = obj
      // console.log(state.serviceOrder)
    },
    [types.REMOVE_SERVICE_DETAILS] (state) {
      state.serviceOrder = {}
    }
  }
}
