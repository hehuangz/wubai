import Axios from "@/util/request"
// 每日帖子数据
export const getBannerData = data => Axios({
  method: 'post',
  url: '/api/tbanner/selectPost',
  data
})
// 每日帖子数据
export const getConsultData = data => Axios({
  method: 'post',
  url: '/api/tuserPost/selectList',
  params: data
})
