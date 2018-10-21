import Axios from '@/util/request'
// 获取页面数据
export const getData = data => Axios({
  url: '/api/tbanner/selectPost',
  method: 'post',
  params: data
})
