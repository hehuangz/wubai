import Axios from "@/util/request"
export const getOrderList = data => Axios({ // 获取订单列表
  url: '/orders/orderList',
  data,
  method: 'post'
})

export const searchOrderList = data => Axios({ // 搜索订单列表
  url: 'api/order/search',
  data,
  method: 'post'
})

export const confirmOrder = data => Axios({ // 确认收货
  method: 'post',
  url: '/orders/confirm',
  data
})

export const deleteOrder = data => Axios({ // 删除订单
  method: 'post',
  url: '/orders/delete',
  data
})

export const cancelOrder = data => Axios({ // 取消订单
  url: '/orders/cancle',
  data,
  method: 'post'
})

export const orderDetail = data => Axios({ // 订单详情
  method: 'post',
  url: '/orders/orderDetail',
  data
})

export const getExpressInfo = params => Axios({ // 获取物流信息
  url: 'rest/express/orderexpress',
  method: 'post',
  params
})

export const getOrderPrice = data => Axios({ // 获取订单价格
  url: '/api/order/getOrderPrice',
  method: 'post',
  data
})

export const createOrder = data => Axios({
  url: '/orders/createOrder',
  method: 'post',
  data
})

export const alipay = data => Axios({ // 支付宝APP 与扫码支付生成预支付订单
  url: '/orders/alipay',
  method: 'post',
  params: data
})

export const weixinpay = data => Axios({ // 支付宝APP 与扫码支付生成预支付订单
  url: '/orders/weixinpay',
  method: 'post',
  params: data
})

export const payResultStatus = data => Axios({ // 扫码支付结果
  url: '/orders/payback',
  method: 'post',
  params: data
})

// 修改价格的时候冻结订单
export const freezeOrder = data => Axios({
  url: '/orders/freezeOrder',
  method: 'post',
  data
})

// 订单中修改价格
export const updateOrderPrice = data => Axios({
  url: '/orders/updateOrderPrice',
  method: 'post',
  params: data
})

// 订单中取消修改价格
export const cancleOrderPrice = data => Axios({
  url: '/orders/cancleOrderPrice',
  method: 'post',
  data
})

// 关联买家
export const relationUid = data => Axios({
  url: '/orders/relationUid',
  method: 'post',
  data
})

// 顾问搜索订单列表
export const orderListBycounselor = data => Axios({
  url: '/orders/orderListBycounselor',
  method: 'post',
  data
})

// 物流消息
export const logistics = data => Axios({
  url: '/orderExpress/orderexpress',
  method: 'post',
  data
})

// 配送方式为到店取货的确认发货
export const counselorSend = data => Axios({
  url: '/orders/counselorSend',
  method: 'post',
  data
})

// 获取消息数量
export const orderCount = data => Axios({
  url: '/orders/orderCount',
  method: 'post',
  data
})

export const snsapiBaseForWx = data => Axios({
  url: '/html/weixin/snsapiBaseForWx',
  method: 'post',
  params: data
})

export const wxgzhGetOpenId = data => Axios({
  url: '/html/weixin/wxgzhGetOpenId',
  method: 'post',
  params: data
})

export const wxWeiXinPay = data => Axios({
  url: '/wxprogram/weixinpay',
  method: 'post',
  params: data
})
