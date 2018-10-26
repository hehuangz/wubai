<template>
  <div class="cell g-m-t-10">
    <group>
      <div class="g-bg-white g-fs-14 g-c-a0a0a0 g-m-b-10">
        <cell is-link value="去开通" link="/vip">
          <span slot="title" style="color:#ffaa22;">
            <span style="vertical-align:middle;" class="g-fs-16">会员特权</span>
          </span>
        </cell>
        <grid :show-lr-borders="false" :show-vertical-dividers="false">
          <grid-item
            :label="item.text"
            v-for="item in iconList"
            :key="item.id"
            @on-item-click="handleGrid(item.url)">
            <i slot="icon" class="icon" :class="item.icon" />
          </grid-item>
        </grid>
      </div>
      <div class="g-fs-16 g-bg-white g-m-b-40">
        <cell title="我的资料" link="/certification" is-link></cell>
        <cell title="我的申请" link="/salary/apply" is-link></cell>
        <cell title="我的帖子" link="/user/myPost" is-link></cell>
        <cell title="关于伍佰账单" link="/aboutus" is-link></cell>
        <cell title="客服电话" is-link :value="serviceTel" @click.native="handleCall"></cell>
      </div>
    </group>
  </div>
</template>
<script>
export default {
  name: 'cCell',
  props: {
    userPerson: {
      type: Object,
      default () {
        return {}
      }
    },
    bannerList: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      iconList: [
        {id: 1, text: '我的工资', icon: 'user_pig', url: '/salary'},
        {id: 2, text: '专属客服', icon: 'user_qa', url: '#'},
        {id: 3, text: '收益明细', icon: 'user_money', url: '#'},
        {id: 4, text: '我的超市', icon: 'user_market', url: '#'}
      ],
      serviceTel: '121-43534646'
    }
  },
  methods: {
    handleCall () {
      console.log('call')
      window.location.href = `tel:${this.serviceTel}`
    },
    handleGrid (url) {
      this.$router.push(url)
    }
  }
}
</script>

<style lang="less" scoped>
.cell {
  .icon {
    width: 24px;
    height: 24px;
    display: inline-block
  }
  .icon.user_pig {
    background: url(../../../assets/images/user_pig.png) no-repeat center;
    background-size: 100%;
  }
  .icon.user_qa {
    background: url(../../../assets/images/user_qa.png) no-repeat center;
    background-size: 100%;
  }
  .icon.user_money {
    background: url(../../../assets/images/user_money.png) no-repeat center;
    background-size: 100%;
  }
  .icon.user_market {
    background: url(../../../assets/images/user_market.png) no-repeat center;
    background-size: 100%;
  }
}

</style>
