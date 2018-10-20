import Axios from "@/util/request"
export const searchAssistantByShopId = data => Axios({ // 根据店铺id查询顾问列表
  url: '/users/searchAssistantByShopId',
  method: 'post',
  data
})

export const viewAssistant = data => Axios({  // 根据uid查询某个顾问信息
  url: '/users/viewAssistant',
  method: 'post',
  data
})

export const usersView = data => Axios({  // 根据uid查询用户信息
  url: '/users/view',
  method: 'post',
  data
})

export const seachShopAssistant = data => Axios({  // 根据店铺id和顾问id获取 顾问id
  url: '/users/seachShopAssistant',
  method: 'post',
  data
})

// 店铺首页查询绑定的顾问
export const queryBindAssistant = data => Axios({  // 店铺首页查询绑定的顾问
  url: '/users/queryBindAssistant',
  method: 'post',
  data
})

// 店铺列表绑定为专属顾问
export const chooseAdviser = data => Axios({  // 店铺首页查询绑定的顾问
  url: '/users/bindAssistant',
  method: 'post',
  data
})

// 店铺列表解除绑定
export const relieveAdviser = data => Axios({  // 店铺首页查询绑定的顾问
  url: '/users/freeAssistant',
  method: 'post',
  data
})
