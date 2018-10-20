import Axios from "@/util/request"

export const getMessageList = data => Axios({ // 获取消息列表
  url: '/message/list/',
  data,
  method: 'post'
})
export const isNewMessage = data => Axios({
  url: '/message/getNewMessage',
  data,
  method: 'post'
})

export const getNewMessage = data => Axios({
  url: '/message/getNewMessage',
  method: 'post',
  data
})
