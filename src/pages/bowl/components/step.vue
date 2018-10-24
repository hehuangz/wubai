<template>
  <div class="step g-flex g-pd-10 g-bs-bb g-jc-c g-ai-c">
    <div
      class="g-1of3 g-flex g-fd-c g-ai-c g-bg-white g-pd-5 g-bs-bb"
      v-for="item of list"
      :key="item.id">
      <i class="g-circle">{{item.id}}</i>
      <p class="g-m-t-5 g-fs-12 g-c-666666 g-tc g-oneline">{{item.text}}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'cStep',
  data () {
    return {
      list: [
        {id: 1, text: '选择返利产品'},
        {id: 2, text: '按要求完成操作'},
        {id: 3, text: '领取一次返现奖励'}
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.step {
  width: 100%;
}
</style>
