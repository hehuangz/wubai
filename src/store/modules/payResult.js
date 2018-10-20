import * as types from './../mutation_types'
export default {
  state: {
    // 用户id
    resultShow: false,
    typeShow: false, // 支付类型显示(微信支付和支付宝支付弹框)
    payResult: {  //  支付结果弹框显示
      isShow: false,
      type: 1
    },
    payPage: {  //  支付结果显示
      status: 1,
      price: 1
    },
    orderId: null,
    orderPid: null
  },
  mutations: {
    [types.SET_PAY_RESULT] (state, obj) {
      state.payResult.isShow = obj.isShow
      state.payResult.type = obj.type
    },
    [types.SET_PAY_PAGE_RESULT] (state, obj) {
      state.payPage.status = obj.status
      state.payPage.price = obj.price
    },
    [types.SET_PAY_TYPE] (state, isShow) {
      state.typeShow = isShow
    },
    [types.SET_PAY_ID] (state, obj) {
      state.orderId = obj.orderId
      state.orderPid = obj.orderPid
    }

  },
  actions: {},
  getters: {
  }
}
