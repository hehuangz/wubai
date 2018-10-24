<template>
  <div class="cell g-bg-white">
    <div class="g-width g-bs-bb g-pd-15 g-flex g-jc-sb g-ai-c">
      <div class="g-flex g-ai-c">
        <img :src="logo" alt="" class="img g-bg-orange g-m-r-10">
        <span class="g-c-orange g-fs-16">{{name}}</span>
      </div>
      <div class="g-fs-16 g-c-a0a0a0">{{viceName}}</div>
    </div>
    <cell :title="`${name}平台`" value="了解平台" is-link />
    <cell title="新手教程" value="一看就懂：如何领取投资返现" is-link />
    <cell-box>首次投资返现(任选一方案)</cell-box>
    <div v-for="item in planList" :key="item.id">
      <c-plan :data="item"/>
    </div>
    <div class="g-bg-f4f4f4 g-height-10 g-width" />
    <div class="g-pd-15 g-bs-bb">
      <p class="g-fs-16 g-c-666666">活动规则说明:</p>
      <p class="show g-fs-14 g-c-a0a0a0">{{rule}}</p>
    </div>
    <div class="g-bg-f4f4f4 g-height-10 g-width" />
  </div>
</template>
<script>
import cPlan from './plan'
export default {
  name: 'cCell',
  components: {
    cPlan
  },
  props: ['name', 'viceName', 'logo', 'planList', 'rule']
}
</script>

<style lang="less" scoped>
.cell {
  width: 100%;
  font-size: 14px;
  .img {
    width: 30px;
    height: 30px;
    display: inline-block;
    border-radius: 2px;
  }
  .show {
    white-space: pre-wrap;
  }
}
</style>
