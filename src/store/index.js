import Vue from 'vue'
import Vuex from 'vuex'
// 登陆、登出
import login from './modules/login'
// 收货地址
import makeOrder from './modules/makeOrder'
import service from './modules/service'// 售后服务模块
// 图片上传
import upload from './modules/upload'
// 支付结果
import payResult from './modules/payResult'
// 售后订单详情
import serviceDetails from './modules/serviceDetails'
// 顾问模块
import adviser from './modules/adviser'
// 店铺模块
import shop from './modules/shop'
// 商品列表
import goods from './modules/goods' // 商品模块
import fqa from './modules/fqa' // fqa 模块
import address from './modules/address' // 地址模块
import order from './modules/order' // 订单模块
import message from './modules/message' // 消息模块
import user from './modules/user' // 用户模块
import cart from './modules/cart' // 购物车模块
Vue.use(Vuex)

// 判断是不是生产环境 production ===> 生产环境
// const debug = process.env.NOOE_ENV !== 'production'

export default new Vuex.Store({
  // strict: debug,
  modules: {
    message,
    order,
    address,
    fqa,
    login,
    makeOrder,
    service,
    upload,
    payResult,
    serviceDetails,
    adviser,
    shop,
    goods,
    user,
    cart
  }
})
