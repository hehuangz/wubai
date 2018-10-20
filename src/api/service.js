import Axios from "@/util/request"
export const getServiceList = data => Axios({ // 获取售后订单列表
  method: 'post',
  url: 'afterqueryorderList',
  data
})

export const searchService = data => Axios({ // 搜索接口
  method: 'post',
  url: 'refun_order_List',
  data
})

export const serviceOrderDetail = data => Axios({ // 售后订单详情
  method: 'post',
  url: 'refun_order_return_list',
  data
})

export const revokeService = data => Axios({ // 撤销申请
  method: 'post',
  url: 'refun_order_Cancel',
  data
})

export const returnPriceService = data => Axios({ // 仅退款
  method: 'post',
  url: 'after_order_return',
  data
})

export const returnGoodsService = data => Axios({ // 退货退款
  method: 'post',
  url: 'refun_order_return',
  data
})

export const returnExpressEdit = data => Axios({ // 退货物流填写
  method: 'post',
  url: 'refun_Information',
  data
})

// 确认发货
export const deliverGoods = data => Axios({
  method: 'post',
  url: '/orders/send',
  data
})
