import * as types from '../mutation_types'
export default {
  state: {
    addressId: '',
    chooseAddressId: '',
    userName: '',
    expressType: 1,
    mobile: '',
    address: '',
    isEditAddress: false, // 是否可以编辑地址,地址列表
    isEditAddressMakeOrder: false
  },
  mutations: {
    /* 修改收货地址 */
    [types.GET_ADDRESS] (state, addressObject) {
      state.addressId = addressObject.addressId
      state.userName = addressObject.username
      state.mobile = addressObject.mobile
      // state.address = addressObject.provinceName + addressObject.cityName + addressObject.districtName + addressObject.address
      state.address = addressObject.address
    },
    /* 判断地址列表是否可以点击 */
    [types.IS_EDITADDRESS] (state, isEditAddress) {
      state.isEditAddress = isEditAddress
    },
    [types.ORDER_EXPRESS_TYPE] (state, expressType) {
      state.expressType = expressType
    },
    [types.ORDER_ADDRESS_ID] (state, id) {
      state.chooseAddressId = id
    },
    /* 判断下单页地址是否已经点击过 */
    [types.IS_EDITMAKEORDERADDRESS] (state, isEdit) {
      state.isEditAddressMakeOrder = isEdit
    }
  }
}
