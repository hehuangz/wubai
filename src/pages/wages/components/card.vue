<template>
  <div class="card">
    <div class="g-flex g-ai-c g-jc-sb g-pd-tb-10" style="height: 40px">
      <div class="g-flex g-ai-c">
        <img :src="appIconUrl" alt="" class="img g-bg-orange g-m-r-10">
        <div class="g-pd-r-5">
          <p class="g-fs-16 g-c-666666">{{appName}}</p>
          <p class="g-oneline g-fs-12 g-c-a0a0a0">{{shortDesc}}</p>
        </div>
      </div>
      <button class="g-btn-origin-s g-fs-0">立即申请</button>
    </div>
    <div class="g-width g-fs-14 g-c-a0a0a0 g-oneline g-pd-tb-5 g-m-t-5 g-border-t-gray">{{subTitle}}</div>
  </div>
</template>
<script>
export default {
  name: 'cCard',
  props: ['appName', 'appIconUrl', 'shortDesc', 'subTitle']
}
</script>

<style lang="less" scoped>
.card {
  width: 100%;
  height: 100px;
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
