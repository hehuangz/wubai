// 售后服务
import * as types from './../mutation_types'
import {
  getServiceList,
  searchService,
  serviceOrderDetail,
  revokeService,
  returnPriceService,
  returnGoodsService,
  returnExpressEdit,
  deliverGoods
} from '@/api/service'
const CODE = 1
export default {
  state: {
    serverInfo: { // 服务信息
      status: 'fail',
      message: '接口调用失败'
    },
    // 订单信息
    orderInfo: {
      orderId: null, // 订单ID,
      discountPrice: null, // 商品总价,
      id: null // ordersGoodsId 订单内的商品id
    },
    // 退货退款信息
    returnGoodsInfo: {
      orderId: '', // 退货退款的订单id
      id: '', // 退货退款的订单中的商品id
      cover: '', // 退货退款的商品图片
      name: '', // 退货退款的商品名称
      number: '', // 退货退款的商品数量
      skuDesc: '', // 退货退款的商品
      cause: '', // 退货退款原因
      context: '', // 退货退款说明
      image: [] // 图片列表
    },
    // 售后服务类型：0 ---> 仅退款, 1 ---> 退货退款
    serviceType: null
  },
  mutations: {
    [types.GET_ORDER_INFO] (state, obj) { // 获取订单相关信息
      state.orderInfo = obj
    },
    [types.GET_SERVICE_TYPE] (state, type) { // 获取售后服务类型
      state.serviceType = type
    },
    [types.GET_SERVICE_RETURN_GOODS] (state, obj) { // 获取退货退款信息
      state.returnGoodsInfo = obj
    },
    [types.GLOBAL_RES] (state, {code, message, data}) {
      if (code !== CODE) {
        // vue.$vux.toast.text('网络出错')
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
    async getServiceList ({commit, state}, params) { // 获取售后服务订单列表
      let { data } = await getServiceList(params)
      commit('GLOBAL_RES', data)
      return state.serverInfo
    },
    async searchService ({commit, state}, params) { // 售后服务订单的搜索
      let { data } = await searchService(params)
      commit('GLOBAL_RES', data)
      return state.serverInfo
    },
    async serviceOrderDetail ({commit, state}, params) { // 售后订单详情
      let { data } = await serviceOrderDetail(params)
      commit('GLOBAL_RES', data)
      return state.serverInfo
    },
    async revokeService ({commit, state}, params) { // 撤销申请
      let { data } = await revokeService(params)
      commit('GLOBAL_RES', data)
      return state.serverInfo
    },
    async returnPriceService ({commit, state}, params) { // 仅退款
      let { data } = await returnPriceService(params)
      commit('GLOBAL_RES', data)
      return state.serverInfo
    },
    async returnGoodsService ({commit, state}, params) { // 退货退款
      let { data } = await returnGoodsService(params)
      commit('GLOBAL_RES', data)
      return state.serverInfo
    },
    async returnExpressEdit ({commit, state}, params) { // 退货物流填写
      let { data } = await returnExpressEdit(params)
      commit('GLOBAL_RES', data)
      return state.serverInfo
    },
    async deliverGoods ({commit, state}, params) { // 退货物流填写
      let { data } = await deliverGoods(params)
      commit('GLOBAL_RES', data)
      return state.serverInfo
    }
  }
}
