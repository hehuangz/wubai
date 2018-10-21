import Axios from '@/util/request'
// 获取验证码
export const getAll = data => Axios({
  url: '/api/tuserLoginInfo/selectLoginIng',
  method: 'post',
  data
})
