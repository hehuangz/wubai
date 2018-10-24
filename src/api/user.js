import Axios from "@/util/request"

export const getData = data => Axios({
  method: 'post',
  url: '/api/tbanner/selectMyPage',
  data
})
