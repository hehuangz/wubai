<template>
  <div class="tabFooter">
    <tabbar v-model="tabIndex">
      <div style="flex: 1;" v-for="(tabItem, index) in tabList" :key="index">
        <tabbar-item  @on-item-click="tabClick" v-if="index === 3 || index=== 2">
          <img slot="icon" :src="tabItem.imageNo">
          <img slot="icon-active" :src="tabItem.imageOn">
          <span slot="label">{{tabItem.name}}</span>
        </tabbar-item>
        <tabbar-item  @on-item-click="tabClick" v-else>
          <img slot="icon" :src="tabItem.imageNo">
          <img slot="icon-active" :src="tabItem.imageOn">
          <span slot="label">{{tabItem.name}}</span>
        </tabbar-item>
      </div>
    </tabbar>
  </div>
</template>
<script>
export default {
  name: 'tabFooter',
  props: {

  },
  data () {
    return {
      tabIndex: 2, // v-model
      preTabIndex: 2,
      tabList: [
        { name: '主页', imageNo: require('@/assets/images/home.png'), imageOn: require('@/assets/images/homeClick.png') },
        { name: '分类', imageNo: require('@/assets/images/classify.png'), imageOn: require('@/assets/images/classifyClick.png') },
        { name: '购物车', imageNo: require('@/assets/images/wutong_shopping cart_monocolour@2x.png'), imageOn: require('@/assets/images/wutong_shopping cart_colour@2x.png') },
        { name: '消息', imageNo: require('@/assets/images/message.png'), imageOn: require('@/assets/images/messageClick.png') },
        { name: '我的', imageNo: require('@/assets/images/my.png'), imageOn: require('@/assets/images/myClick.png') }
      ],
      uid: null,
      token: null,
      phone: null
    }
  },
  computed: {
  },
  created () {
    this.getRoute()
  },
  mounted () {
  },
  activated () {
    this.getRoute()
  },
  methods: {
    getRoute () {
      if (this.$route.path === '/') {
        this.tabIndex = 0
      } else if (this.$route.path === '/classify') {
        this.tabIndex = 1
      } else if (this.$route.path === '/cart') {
        this.tabIndex = 2
      } else if (this.$route.path === '/user') {
        this.tabIndex = 4
      }
      this.preTabIndex = this.tabIndex
    },
    tabClick (index) {
      this.$store.commit('SET_MORE_MENU', false)
      switch (index) {
        case 0:
          this.preTabIndex = this.tabIndex
          this.$utils.otherButton()
          this.$router.replace({path: '/', query: {shopId: this.$utils.localData.get('shopId'), shopName: this.$utils.localData.get('shopName')}})
          break
        case 1:
          this.preTabIndex = this.tabIndex
          this.$utils.otherButton()
          this.$router.replace({ path: 'classify' })
          break
        case 2:
          this.tabIndex = this.preTabIndex
          this.$utils.otherButton()
          if (!this.$utils.getUidAndToken()) {
            this.$utils.tokenInvalid()
            return false
          } else {
            this.tabIndex = 2
            this.$router.replace({ path: 'cart' })
          }
          break
        case 3:
          this.tabIndex = this.preTabIndex
          if (!this.$utils.getUidAndToken()) {
            this.$utils.tokenInvalid()
            return false
          } else {
            this.tabIndex = 3
            this.$utils.sendMessage()
          }
          break
        case 4:
          this.preTabIndex = this.tabIndex
          this.$utils.otherButton()
          this.$router.replace({ path: 'user' })
          break
      }
    }
  }
}
</script>
<style lang="less">
.tabFooter {
  bottom: 0;
  position: fixed;
  width: 100%;
  height: 0.98rem;
  .weui-tabbar__item.weui-bar__item_on .weui-tabbar__icon,
  .weui-tabbar__item.weui-bar__item_on .weui-tabbar__icon > i,
  .weui-tabbar__item.weui-bar__item_on .weui-tabbar__label {
    color: #FF4B2E;
  }
  .weui-tabbar__icon > sup {
    top: -2px;
  }
  .badge{
    color:red;
    position: absolute;
    top:0;
    left:0;
  }
  .vux-badge{
    margin-top:5px;
  }
}
</style>
