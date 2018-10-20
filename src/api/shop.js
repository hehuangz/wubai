import Axios from "@/util/request"
export const shopView = data => Axios({ // 根据店铺id查询店铺列表
  url: '/shop/view',
  method: 'post',
  data
})
