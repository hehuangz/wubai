import Axios from "@/util/request"
// 个人中心数据
export const getData = data => Axios({
  method: 'post',
  url: '/api/tbanner/selectMyPage',
  data
})
// 我的消息列表
export const getMessageList = data => Axios({
  method: 'post',
  url: '/api/tmessage/selectList',
  params: data
})
// 消息详情
export const getMessageDetail = data => Axios({
  method: 'post',
  url: '/api/tmessage/selectOne',
  params: data
})
