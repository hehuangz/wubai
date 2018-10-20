export default {
  data: function () {
    return {
      isAdviser: false,
      shopId: 0
    }
  },
  created: function () {
    this.shopId = JSON.parse(this.$utils.localData.get('shopId')) * 1
    if (this.shopId) this._getAdviserInfo()
  },
  methods: {
    async _getAdviserInfo () {
      let { data, status, message } = await this.$store.dispatch('searchAssistantByShopId', { shopId: this.shopId })
      if (status === "fail") {
        this.$vux.toast.text(message)
        return false
      }
      this.isAdviser = Boolean(data.filter(item => {
        return item.uid === this.$utils.localData.get('uid') * 1
      })[0])
    },
    _setOrderShareInfo (orderData) {
      this.$utils.localData.set('productInfo', JSON.stringify([{
        counselorId: orderData.counselorId,
        counselorName: '',
        originPrice: '',
        salePrice: '',
        shopId: orderData.shopId,
        shopName: orderData.shopName,
        cartVoList: [{
          goodsId: orderData.goodsId,
          goodsImg: orderData.goodsImg,
          goodsName: orderData.goodsName,
          goodsPrice: orderData.amount,
          number: orderData.goodsNumber,
          originPrice: orderData.goodsPrice,
          skuDesc: orderData.skuDesc,
          skuId: orderData.skuId
        }]
      }]))
    }
  },
  beforeRouteLeave (to, from, next) {
    this.$refs['payType'] && clearInterval(this.$refs['payType'].timers)
    next()
  }
}
