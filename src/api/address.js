import Axios from "@/util/request"

export const deleteAddress = data => Axios({ // 删除地址
  method: 'post',
  url: '/address/delete',
  data
})

export const getAddress = data => Axios({ // 获取地址列表
  method: 'post',
  url: '/address/list',
  data
})

export const setDefaultAddress = data => Axios({ // 设置默认地址
  method: 'post',
  url: '/address/api/address/set_default_address/',
  data
})

export const addAddress = data => Axios({ // 添加地址
  method: 'post',
  url: '/address/insert/',
  data
})

export const editAddress = data => Axios({ // 地址编辑
  method: 'post',
  url: '/address/api/address/get_shipping_address_one/',
  data
})

export const getDefaultAddress = data => Axios({ // 地址编辑
  url: '/address/api/address/get_default_address/',
  params: data
})
