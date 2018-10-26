import axios from 'axios'
import utils from './utils'
import Vue from 'vue'
const service = axios.create({
  baseURL: process.env.BASE_API,
  timeout: 25000
})
// request拦截器
service.interceptors.request.use(config => {
  Vue.$vux.loading.show({
    text: '加载中'
  })
  return config
}, error => {
  Vue.$vux.loading.hide()
  // console.log('requestError: ', error)
  Promise.reject(error)
})

// respone拦截器
service.interceptors.response.use(
  response => {
    Vue.$vux.loading.hide()
    if (response.data && response.data.code === -1) {
      Vue.$vux.toast.text(response.data.msg)
    }
    if (response.data && response.data.code === 216) {
      Vue.$vux.toast.text('请先登录!')
      window.location.href = "/login"
    }
    return response
  },
  error => {
    if (error.response && error.response.status === 500) {
      Vue.$vux.toast.text('网络错误')
    }
    return Promise.reject(error)
  }
)

export default service
