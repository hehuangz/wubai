<template>
  <div class="tabFooter">
    <tabbar v-model="tabIndex">
      <div style="flex: 1;" v-for="(tabItem, index) in tabList" :key="index">
        <tabbar-item  @on-item-click="tabClick">
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
        { name: '发工资', imageNo: require('@/assets/images/tab_money.png'), imageOn: require('@/assets/images/tab_money_checked.png') },
        { name: '聚宝盆', imageNo: require('@/assets/images/tab_love.png'), imageOn: require('@/assets/images/tab_love_checked.png') },
        { name: '资讯', imageNo: require('@/assets/images/tab_tool.png'), imageOn: require('@/assets/images/tab_tool_checked.png') },
        { name: '我的', imageNo: require('@/assets/images/tab_my.png'), imageOn: require('@/assets/images/tab_my_checked.png') }
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
      if (this.$route.path === '/wages') {
        this.tabIndex = 0
      } else if (this.$route.path === '/bowl') {
        this.tabIndex = 1
      } else if (this.$route.path === '/consult') {
        this.tabIndex = 2
      } else if (this.$route.path === '/user') {
        this.tabIndex = 3
      }
      this.preTabIndex = this.tabIndex
    },
    tabClick (index) {
      switch (index) {
        case 0:
          this.preTabIndex = this.tabIndex
          this.$router.replace({ path: 'wages' })
          break
        case 1:
          this.preTabIndex = this.tabIndex
          this.$router.replace({ path: 'bowl' })
          break
        case 2:
          this.preTabIndex = this.tabIndex
          this.$router.replace({ path: 'consult' })
          break
        case 3:
          this.preTabIndex = this.tabIndex
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
    color: #666666;
  }
  .weui-tabbar {
    background: #fff;
  }
  .weui-tabbar__icon {
    width: 20px;
    height: 20px;
  }
  .weui-tabbar__icon > sup {
    top: -2px;
  }
}
</style>
