import Axios from '@/util/request'
// 我的工资顶部数据
export const getData = data => Axios({
  url: '/api/tcreditAccessRecord/selectSumGroup',
  method: 'post',
  params: data
})
// 工资发放记录
export const getDataList = data => Axios({
  url: '/api/twithdraw/selectList',
  method: 'post',
  params: data
})
// 申请发放工资
export const getSureSarary = data => Axios({
  url: '/api/twithdraw/add',
  method: 'post',
  params: data
})
// 我的收益
export const getProfitList = data => Axios({
  url: '/api/tcreditAccessRecord/selectListProfit',
  method: 'post',
  params: data
})
// 我的申请
export const getApplyList = data => Axios({
  url: '/api/tcreditAccessRecord/selectList',
  method: 'post',
  params: data
})
