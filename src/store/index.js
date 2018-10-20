import Vue from 'vue'
import Vuex from 'vuex'
// 登陆、登出
import login from './modules/login'
import home from './modules/home'
// 图片上传
import upload from './modules/upload'
import user from './modules/user' // 用户模块
import cart from './modules/cart' // 购物车模块
import wages from './modules/wages'
Vue.use(Vuex)

// 判断是不是生产环境 production ===> 生产环境
// const debug = process.env.NOOE_ENV !== 'production'

export default new Vuex.Store({
  // strict: debug,
  modules: {
    login,
    home,
    upload,
    user,
    cart,
    wages
  }
})
