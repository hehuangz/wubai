import Axios from "@/util/request"
export const getUser = data => Axios({
  method: 'post',
  url: '/users/view',
  data
})

// 获取短信验证码
export const createCode = data => Axios({
  method: 'post',
  url: '/users/createCode',
  data
})

// 修改用户信息
export const userinfoUpdate = data => Axios({
  method: 'post',
  url: '/users/userinfoUpdate',
  data
})
