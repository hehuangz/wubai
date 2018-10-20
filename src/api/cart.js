import Axios from '@/util/request'
export const addCart = data => Axios({
  url: '/carts/insert',
  method: 'post',
  data
})

// 购物车列表
export const getCartList = data => Axios({
  url: '/carts/list',
  // url: 'https://easy-mock.com/mock/5ad2ddd9eaf89e420be1643d/test/list',
  method: 'post',
  data
})

// 删除购物车
export const deleteCarts = data => Axios({
  url: '/carts/delete',
  method: 'post',
  data
})

// 编辑购物车
export const updateCarts = data => Axios({
  url: '/carts/update',
  method: 'post',
  data
})

// 购物车结算
export const settlement = data => Axios({
  url: '/carts/getNewStock',
  // url: 'https://easy-mock.com/mock/5ad2ddd9eaf89e420be1643d/test/pay',
  method: 'post',
  data
})

// 合并购物车
export const mergeCarts = data => Axios({
  url: '/carts/mergeCart',
  method: 'post',
  data
})

// 购物车中修改顾问
export const updateCounselor = data => Axios({
  url: '/carts/updateCounselor',
  method: 'post',
  data
})

// 购物车数量
export const getCartNumber = data => Axios({
  url: '/carts/getNum',
  method: 'post',
  data
})
