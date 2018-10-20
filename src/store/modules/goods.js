import * as types from './../mutation_types'
import {
  // getGoodsCategory,
  getAd,
  getGoodsList,
  searchGoods,
  goodsDetail,
  isInsale,
  hotGoods,
  recommentGoods,
  recommentGoodsByorderPid,
  getGoodsByShopId
} from '@/api/goods'
const CODE = 1
export default {
  state: {
    // 列表索引
    i: null,
    serverInfo: { // 服务端返回的信息
      status: 'fail',
      message: '接口调用失败'
    }
  },
  mutations: {
    [types.SET_MENU_INDEX] (state, i) {
      state.i = i
    },
    [types.SET_SHARE_INFO] (state, obj) {
      state.share_info = obj
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
    // async getGoodsCategory ({commit, state}) {
    //   let { data } = await getGoodsCategory()
    //   commit('GLOBAL_RES', data)
    //   return state.serverInfo
    // },
    async getAd ({commit, state}) {
      let { data } = await getAd()
      commit('GLOBAL_RES', data)
      return state.serverInfo
    },
    async getGoodsList ({commit, state}, params) {
      let { data } = await getGoodsList(params)
      commit('GLOBAL_RES', data)
      return state.serverInfo
    },
    async searchGoods ({commit, state}, params) {
      let { data } = await searchGoods(params)
      commit('GLOBAL_RES', data)
      return state.serverInfo
    },
    async goodsDetail ({commit, state}, params) {
      let { data } = await goodsDetail(params)
      commit('GLOBAL_RES', data)
      return state.serverInfo
    },
    async isInsale ({commit, state}, params) {
      let { data } = await isInsale(params)
      commit('GLOBAL_RES', data)
      return state.serverInfo
    },
    async hotGoods ({commit, state}) {
      let {data} = await hotGoods()
      commit('GLOBAL_RES', data)
      return state.serverInfo
    },
    async recommentGoods ({commit, state}, params) {
      let {data} = await recommentGoods(params)
      commit('GLOBAL_RES', data)
      return state.serverInfo
    },
    async recommentGoodsByorderPid ({commit, state}, params) {
      let {data} = await recommentGoodsByorderPid(params)
      commit('GLOBAL_RES', data)
      return state.serverInfo
    },
    async getGoodsByShopId ({commit, state}, params) {
      let {data} = await getGoodsByShopId(params)
      commit('GLOBAL_RES', data)
      return state.serverInfo
    }
  }
}
