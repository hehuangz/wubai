import * as types from './../mutation_types'
// import vue from 'vue'
import {
  getOrderList,
  searchOrderList,
  confirmOrder,
  deleteOrder,
  cancelOrder,
  createOrder,
  orderDetail,
  getExpressInfo,
  getOrderPrice,
  weixinpay,
  alipay,
  payResultStatus,
  freezeOrder,
  updateOrderPrice,
  orderListBycounselor,
  relationUid,
  counselorSend,
  orderCount,
  cancleOrderPrice,
  snsapiBaseForWx,
  wxgzhGetOpenId,
  wxWeiXinPay
} from '@/api/order'
const CODE = 200
export default {
  state: {
    orderTabIndex: '',
    shopOrderTabIndex: '',
    currentSn: '',
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
          message,
          code
        }
        return false
      }
      state.serverInfo = {
        status: 'success',
        data,
        code
      }
    },
    [types.SET_ORDER_TAB_INDEX] (state, orderTabIndex) {
      // console.log('全局状态中的tabIndex----------------------------', orderTabIndex)
      state.orderTabIndex = orderTabIndex
    },
    [types.SET_SHOP_ORDER_TAB_INDEX] (state, shopOrderTabIndex) {
      // console.log('全局状态中的tabIndex----------------------------', shopOrderTabIndex)
      state.shopOrderTabIndex = shopOrderTabIndex
    },
    [types.SET_CURRENT_SN] (state, currentSn) {
      // console.log('全局状态中的订单编号----------------------------', currentSn)
      state.currentSn = currentSn
    }
  },
  actions: {
    async getOrderList ({commit, state}, params) {
      let { data } = await getOrderList(params)
      commit('GLOBAL_RES', data)
      return state.serverInfo
    },
    async searchOrderList ({commit, state}, params) {
      let { data } = await searchOrderList(params)
      commit('GLOBAL_RES', data)
      return state.serverInfo
    },
    async confirmOrder ({commit, state}, params) {
      let { data } = await confirmOrder(params)
      commit('GLOBAL_RES', data)
      return state.serverInfo
    },
    async deleteOrder ({commit, state}, params) {
      let { data } = await deleteOrder(params)
      commit('GLOBAL_RES', data)
      return state.serverInfo
    },
    async cancelOrder ({commit, state}, params) {
      let { data } = await cancelOrder(params)
      commit('GLOBAL_RES', data)
      return state.serverInfo
    },
    async orderDetail ({commit, state}, params) {
      let { data } = await orderDetail(params)
      commit('GLOBAL_RES', data)
      return state.serverInfo
    },
    async getExpressInfo ({commit, state}, params) {
      let { data } = await getExpressInfo(params)
      commit('GLOBAL_RES', data)
      return state.serverInfo
    },
    async getOrderPrice ({commit, state}, params) {
      let { data } = await getOrderPrice(params)
      commit('GLOBAL_RES', data)
      return state.serverInfo
    },
    async createOrder ({commit, state}, params) {
      let { data } = await createOrder(params)
      commit('GLOBAL_RES', data)
      return state.serverInfo
    },
    async alipay ({commit, state}, params) {
      let { data } = await alipay(params)
      commit('GLOBAL_RES', data)
      return state.serverInfo
    },
    async weixinpay ({commit, state}, params) {
      let { data } = await weixinpay(params)
      commit('GLOBAL_RES', data)
      return state.serverInfo
    },
    async payResultStatus ({commit, state}, params) {
      let { data } = await payResultStatus(params)
      commit('GLOBAL_RES', data)
      return state.serverInfo
    },
    async freezeOrder ({commit, state}, params) {
      let { data } = await freezeOrder(params)
      commit('GLOBAL_RES', data)
      return state.serverInfo
    },
    async updateOrderPrice ({commit, state}, params) {
      let { data } = await updateOrderPrice(params)
      commit('GLOBAL_RES', data)
      return state.serverInfo
    },
    async cancleOrderPrice ({commit, state}, params) {
      let { data } = await cancleOrderPrice(params)
      commit('GLOBAL_RES', data)
      return state.serverInfo
    },
    async orderListBycounselor ({commit, state}, params) {
      let { data } = await orderListBycounselor(params)
      commit('GLOBAL_RES', data)
      return state.serverInfo
    },
    async relationUid ({commit, state}, params) {
      let { data } = await relationUid(params)
      commit('GLOBAL_RES', data)
      return state.serverInfo
    },
    async counselorSend ({commit, state}, params) {
      let { data } = await counselorSend(params)
      commit('GLOBAL_RES', data)
      return state.serverInfo
    },
    async orderCount ({commit, state}, params) {
      let { data } = await orderCount(params)
      commit('GLOBAL_RES', data)
      return state.serverInfo
    },
    async snsapiBaseForWx ({commit, state}, params) {
      let { data } = await snsapiBaseForWx(params)
      commit('GLOBAL_RES', data)
      return state.serverInfo
    },
    async wxgzhGetOpenId ({commit, state}, params) {
      let { data } = await wxgzhGetOpenId(params)
      commit('GLOBAL_RES', data)
      return state.serverInfo
    },
    async wxWeiXinPay ({commit, state}, params) {
      let { data } = await wxWeiXinPay(params)
      commit('GLOBAL_RES', data)
      return state.serverInfo
    }
  },
  getters: {}
}
