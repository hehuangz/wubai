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
