<template>
  <div
    class="item g-bg-white g-pd-tb-10 g-pd-lr-15 g-bs-bb g-m-b-10 g-shadow-b"
    @click="handleTo(data.id)">
    <div class="g-c-orange g-fs-18 g-m-b-15">{{data.name}} {{data.viceName}}</div>
    <div class="g-border-t-gray g-border-b-gray g-pd-tb-10">
      <p class="g-c-orange g-fs-40 g-tc g-flex g-jc-c">
        <countup
          :start-val="0"
          :end-val="data.minProfit"
          :duration="2"
        /><span>-</span>
        <countup
          :start-val="0"
          :end-val="data.maxProfit"
          :duration="2"
        /><span>%</span>
      </p>
      <p class="g-tc g-m-t-05 g-c-a0a0a0 g-fs-16">预期年化收益</p>
      <p class="g-tr g-m-t-5 g-c-a0a0a0 g-fs-16">起投期限：{{data.beginInvestDay}}天</p>
    </div>
    <div class="g-fs-16 g-c-a0a0a0 g-pd-t-10">最高{{data.beginInvestMaxAmount}}元 首次投资返现</div>
  </div>
</template>
<script>
export default {
  name: 'cItem',
  props: {
    data: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  methods: {
    handleTo (id) {
      this.$router.push(`/bowl/detail?id=${id}`)
    }
  }
}
</script>

<style lang="less" scoped>
.item {
  width: 100%;
}
</style>
