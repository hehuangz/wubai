import Axios from '@/util/request'
// 获取页面数据
export const getData = data => Axios({
  url: '/api/tbanner/selectVipPage',
  method: 'post',
  params: data
})
export const getOpenVip = data => Axios({
  url: '/api/tvipPrice/payVipService',
  method: 'post',
  params: data
})
