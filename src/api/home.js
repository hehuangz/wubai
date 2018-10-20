import Axios from '@/util/request'
// 获取页面数据
export const getData = data => Axios({
  url: '/api/tbanner/selectIndex',
  method: 'post',
  params: data
})
