import axios from 'axios'
import utils from './utils'
import Vue from 'vue'
const service = axios.create({
  baseURL: process.env.BASE_API,
  timeout: 25000
})
// request拦截器
// service.interceptors.request.use(config => {
//   config.headers['token'] = utils.localData.get('token')
//   return config
// }, error => {
//   // console.log('requestError: ', error)
//   Promise.reject(error)
// })

// respone拦截器
service.interceptors.response.use(
  response => {
    return response
  },
  error => {
    // console.log('requestError: ', error)
    if (error.response && error.response.status === 500) {
      if (error.response.data.status === 4023) {
        utils.tokenInvalid()
      } else {
        Vue.$vux.toast.text('网络错误')
      }
    }
    return Promise.reject(error)
  }
)

export default service
