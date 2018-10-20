import Axios from "@/util/request"

export const getFirstCategoryByShopId = data => Axios({ // 根据店铺的iD获取所有的一级分类
  method: 'post',
  url: '/goods/getFirstCategoryByShopId',
  params: data
})

export const getCategoryListByShopId = data => Axios({ // 根据店铺iD获取分类的全部信息
  method: 'post',
  url: '/goodsCategory/getCategoryListByShopId',
  data
})

export const getGoodsByShopAndThirdId = data => Axios({  // 根据三级分类的id获取商品列表
  method: 'post',
  url: '/goods/getGoodsByShopAndThirdId',
  data
})

export const getGoodsByShopAndFirstId = data => Axios({ // 获取当前一级分类下面的商品
  method: 'post',
  url: '/goods/getGoodsByShopAndFirstId',
  data
})
export const getAd = () => Axios({ // 广告位获取
  url: 'api/ad/get_sort_adInfo/'
})

export const getGoodsList = data => Axios({ // 获取商品分类列表
  method: 'post',
  url: 'api/goods/listAppGoods',
  data
})

export const searchGoods = data => Axios({ // 商品搜素
  method: 'post',
  url: '/goods/searcheGoods',
  data
})

export const goodsDetail = data => Axios({
  method: 'post',
  url: 'goods/getGodDetail',
  data
})

export const isInsale = data => Axios({ // 是否有货
  method: 'post',
  url: 'api/goods/getIfGoodsMessage',
  data
})

export const hotGoods = () => Axios({ // 热品
  method: 'post',
  url: 'api/goods/sellHotGoods'
})
export const recommentGoods = data => Axios({ // 推荐商品，商品详情
  method: 'post',
  url: 'api/goods/getRecommend',
  data
})
export const recommentGoodsByorderPid = data => Axios({ // 推荐商品，生成订单
  method: 'post',
  url: 'api/goods/getRecommendByOrderPid',
  data
})

// 通过店铺Id 获取商品列表
export const getGoodsByShopId = data => Axios({
  method: 'post',
  url: '/goods/getGoodsByShopId',
  data
})

// 获取商品快照
export const getGoodsSnapshot = data => Axios({
  method: 'post',
  url: '/orders/orderGoodsDetail',
  data
})
