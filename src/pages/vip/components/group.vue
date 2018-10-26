<template>
  <div class="group">
    <div class="g-bg-white g-c-orange g-fs-16 g-pd-lr-15 g-pd-tb-5">会员享受权益</div>
    <group>
      <grid :cols="4" :show-lr-borders="false" :show-vertical-dividers="false">
        <grid-item
          :label="item.text"
          v-for="item in iconList"
          :key="item.id">
          <i slot="icon" class="icon" :class="item.icon" />
        </grid-item>
      </grid>
    </group>
  </div>
</template>
<script>
export default {
  name: 'cMonth',
  data () {
    return {
      iconList: [
        {id: 1, text: '高额工资', icon: 'user_money'},
        {id: 2, text: '专属客服', icon: 'user_qa'},
        {id: 3, text: '免征查信', icon: 'user_zx'},
        {id: 4, text: '随时提现', icon: 'user_out'},
        {id: 5, text: '收益明细', icon: 'user_profit'},
        {id: 6, text: '产品齐全', icon: 'user_product'},
        {id: 7, text: '网贷技巧', icon: 'user_tips'},
        {id: 8, text: '拒就赔', icon: 'user_refuse'}
      ]
    }
  },
  methods: {
  }
}
</script>

<style lang="less" scoped>
.group {
  margin-bottom: 60px;
  .item {
    width: 120px;
    height: 70px;
    text-align: center;
    border: 1px solid #666666;
    background: #ffffff;
    ._title {
      color: #ffaa22;
      font-size: 18px;
    }
    ._desc {
      color: #a0a0a0;
      font-size: 15px;
    }
  }
  .item.active {
    background: #ffaa22;
    border: 1px solid #ffaa22;
    ._title {
      color: #ffffff;
    }
    ._desc {
      color: #ffffff;
    }
  }
  .icon {
    width: 20px;
    height: 20px;
    display: inline-block
  }
  .icon.user_money {
    background: url(../../../assets/images/user_money.png) no-repeat center;
    background-size: 100%;
  }
  .icon.user_qa {
    background: url(../../../assets/images/user_qus.png) no-repeat center;
    background-size: 100%;
  }
  .icon.user_zx {
    background: url(../../../assets/images/user_zx.png) no-repeat center;
    background-size: 100%;
  }
  .icon.user_out {
    background: url(../../../assets/images/user_out.png) no-repeat center;
    background-size: 100%;
  }
  .icon.user_profit {
    background: url(../../../assets/images/user_profit.png) no-repeat center;
    background-size: 100%;
  }
  .icon.user_product {
    background: url(../../../assets/images/user_product.png) no-repeat center;
    background-size: 100%;
  }
  .icon.user_tips {
    background: url(../../../assets/images/user_tips.png) no-repeat center;
    background-size: 100%;
  }
  .icon.user_refuse {
    background: url(../../../assets/images/user_refuse.png) no-repeat center;
    background-size: 100%;
  }

}

</style>
