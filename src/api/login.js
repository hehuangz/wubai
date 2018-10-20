import Axios from '@/util/request'
// 获取验证码
export const getCode = data => Axios({
  url: '/users/createCode',
  method: 'post',
  data
})
// 立即登录
export const toLoginIn = data => Axios({
  url: '/html/insert',
  method: 'post',
  params: data
})
