import Axios from '@/util/request'
// 获取数据
export const getData = data => Axios({
  url: '/api/tbanner/selectIndexWages',
  method: 'post',
  data
})

export const getList = data => Axios({
  url: '/api/tcreditShopItem/selectList',
  method: 'post',
  params: data
})
