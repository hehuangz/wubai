// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import FastClick from 'fastclick'
import vueTap from 'v-tap'
import axios from 'axios'
import qs from 'qs'
import router from './router'
import store from './store'
import App from './App'
import networkListening from './util/networkListening'
import './assets/css/reset.less'
import './assets/css/common.less'
/* eslint-disable no-unused-vars */
// import VConsole from 'vconsole' // 移动端测试环境
import utils from './util/utils'
import {
  Actionsheet,
  ConfirmPlugin,
  AjaxPlugin,
  Popup,
  ToastPlugin,
  TransferDom,
  XHeader,
  XImg,
  Swiper,
  SwiperItem,
  Tab,
  TabItem,
  Group,
  Cell,
  Confirm,
  CellBox,
  XButton,
  XAddress,
  Tabbar,
  TabbarItem,
  XTextarea,
  XDialog,
  Countdown
} from 'vux'
import VueLazyload from 'vue-lazyload'
// 全局组建
Vue.component('x-header', XHeader)
Vue.component('x-img', XImg)
Vue.component('actionsheet', Actionsheet)
Vue.component('popup', Popup)
Vue.component('swiper', Swiper)
Vue.component('swiper-item', SwiperItem)
Vue.component('tab', Tab)
Vue.component('tab-item', TabItem)
Vue.component('x-dialog', XDialog)
Vue.component('group', Group)
Vue.component('cell', Cell)
Vue.component('x-button', XButton)
Vue.component('cell-box', CellBox)
Vue.component('tabbar', Tabbar)
Vue.component('tabbar-item', TabbarItem)
Vue.component('x-textarea', XTextarea)
Vue.component('x-address', XAddress)
Vue.component('confirm', Confirm)
Vue.component('Countdown', Countdown)
// 插件
Vue.use(ToastPlugin)
Vue.use(AjaxPlugin)
Vue.use(ConfirmPlugin)
Vue.use(networkListening)
Vue.use(vueTap)
// 指令
Vue.directive('transfer-dom', TransferDom)
// utils.localData.set('uid', 52)
// utils.localData.set('token', 'wtlifeeyJhbGciOiJIUzUxMiJ9.eyJ1aWQiOiI1MiIsInR5cGUiOiJ3dGxpZmVfYXBwIn0.DaEGRNmgWF34cvjKJ84oDhs3Mi1HIVa42BZ58oMeIQgThkkuS0IunqXbCXPlfY9ZKu1lWrSjgn4dcfmDXD6gCQ')
// utils.localData.set('userType', '2')   // 1顾问  2用户
Vue.prototype.$http = axios
Vue.prototype.$utils = utils
Vue.prototype.$qs = qs
Vue.config.productionTip = false
utils.rem(7.5)
window.onresize = function () {
  utils.rem(7.5)
}
// 懒加载
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: require('./assets/images/loading.png'),
  loading: require('./assets/images/loading.png'),
  attempt: 1,
  listenEvents: [ 'scroll' ]
})

// 全局过滤器  过滤时间
Vue.filter('formatTime', function (value) {
  let date = new Date(value)
  let year = date.getFullYear()
  let month = (date.getMonth() + 1) < 10 ? '0' + (date.getMonth() + 1) : date.getMonth()
  let getDate = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
  let hour = date.getHours() < 10 ? '0' + date.getHours() : date.getHours()
  let minute = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
  let second = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()
  return `${year}-${month}-${getDate} ${hour}:${minute}:${second}`
})
/* eslint-disable no-new */
// new VConsole()
var vm = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
