import Axios from '@/util/request'
// 聚宝盆页面的数据
export const getData = data => Axios({
  url: '/api/tbanner/selectFinancing',
  method: 'post',
  data
})
export const getListData = data => Axios({
  url: '/api/tfinancing/selectList',
  method: 'post',
  params: data
})
export const getDetail = data => Axios({
  url: '/api/tfinancing/selectOne',
  method: 'post',
  params: data
})
export const getSureFinance = data => Axios({
  url: '/api/tcreditAccessRecord/updateFinancing',
  method: 'post',
  params: data
})
