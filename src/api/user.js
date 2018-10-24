import Axios from "@/util/request"

export const getData = data => Axios({
  method: 'post',
  url: '/api/tbanner/selectMyPage',
  data
})
// 我的消息
export const getMessageList = data => Axios({
  method: 'post',
  url: '/api/tmessage/selectList',
  params: data
})
