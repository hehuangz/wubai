import Axios from '@/util/request'
// 获取验证码
export const getCode = data => Axios({
  url: '/api/tuserLoginInfo/sendSms',
  method: 'post',
  params: data
})
// 立即登录
export const toLoginIn = data => Axios({
  url: '/api/tuserLoginInfo/login',
  method: 'post',
  params: data
})
