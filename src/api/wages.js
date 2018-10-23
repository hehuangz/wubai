import Axios from '@/util/request'
// 发工资页面的banner
export const getData = data => Axios({
  url: '/api/tbanner/selectIndexWages',
  method: 'post',
  data
})
// 发工资页面的列表
export const getList = data => Axios({
  url: '/api/tcreditShopItem/selectList',
  method: 'post',
  params: data
})
// 发工资的列表详情
export const getDataDetail = data => Axios({
  url: '/api/tcreditShopItem/selectOne',
  method: 'post',
  params: data
})
// 确定申请
export const getSureCredit = data => Axios({
  url: '/api/tcreditAccessRecord/update',
  method: 'post',
  params: data
})
