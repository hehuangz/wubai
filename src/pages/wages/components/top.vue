<template>
  <div class="top">
    <div class="g-flex g-ai-c g-pd-t-10">
      <img :src="appIconUrl" alt="" class="img g-bg-orange g-m-r-10">
      <p class="g-fs-16 g-c-666666 g-pd-r-10">{{appName}}</p>
      <div class="g-border-orange g-fs-0 g-pd-5 g-fs-12 g-c-a0a0a0">
        {{sucessPayTime}}放款
      </div>
    </div>
    <div class="g-width g-fs-14 g-c-a0a0a0 g-oneline g-pd-tb-5 g-pd-l-40 g-bs-bb">
      {{subTitle}}
    </div>
  </div>
</template>
<script>
export default {
  name: 'cTop',
  props: ['appName', 'appIconUrl', 'subTitle', 'sucessPayTime']
}
</script>

<style lang="less" scoped>
.top {
  width: 100%;
  height: auto;
  margin-top: 10px;
  background: #ffffff;
  padding: 0px 15px;
  box-sizing: border-box;
  .img {
    width: 30px;
    height: 30px;
    display: inline-block;
    border-radius: 2px;
  }
}
</style>
