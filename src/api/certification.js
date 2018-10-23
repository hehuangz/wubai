import Axios from '@/util/request'
// 获取所有认证信息
export const getAll = data => Axios({
  url: '/api/tuserLoginInfo/selectLoginIng',
  method: 'post',
  data
})
// 保存紧急联系人
export const getContact = data => Axios({
  url: '/api/tuserContacts/authContacts',
  method: 'post',
  params: data
})
// 保存银行卡信息
export const getBank = data => Axios({
  url: '/api/tuserBank/authBankCard',
  method: 'post',
  params: data
})
// 保存身份证信息
export const getIdCard = data => Axios({
  url: '/api/tuserPersonInfo/authIdCard',
  method: 'post',
  params: data
})
// 保存芝麻分信息
export const getSesame = data => Axios({
  url: '/api/tuserPersonInfo/update',
  method: 'post',
  params: data
})
// 保存微信账号信息
export const getWeChatAccount = data => Axios({
  url: '/api/tuserPersonInfo/update',
  method: 'post',
  params: data
})
// 保存淘宝账号信息
export const getTbAccount = data => Axios({
  url: '/api/tuserPersonInfo/update',
  method: 'post',
  params: data
})
