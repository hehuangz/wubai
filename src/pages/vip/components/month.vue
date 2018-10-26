<template>
  <div class="month g-pd-b-10 g-bg-white">
    <div class="g-c-orange g-pd-lr-15 g-pd-tb-10 g-fs-14 g-bs-bb">
      请选择开通时常(首月{{list[current] && list[current].firstPrice}}元,续费{{list[current] && list[current].renewDiscount}}折)
    </div>
    <div class="g-flex g-jc-sa g-bg-white g-pd-10">
      <div
        class="item g-flex g-fd-c g-ai-c g-jc-c"
        v-for="(item, index) in list"
        :key="item.id"
        :class="{active: index === current}"
        @click="handleCurrent(index, item.id)"
        >
        <span class="_title">{{item.nowPrice}}元</span>
        <span class="_desc">{{item.monthNum}}个月</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'cMonth',
  props: {
    current: {
      type: Number,
      default: () => {
        return 0
      }
    },
    list: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  methods: {
    handleCurrent (index, id) {
      if (this.current !== index) {
        this.$emit('onCurrent', index, id)
      }
    }
  }
}
</script>

<style lang="less" scoped>
.month {
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

}

</style>
