<template>
  <div class="aboutus">
    <com-header title="关于我们" />
    <div class="g-flex g-ai-c g-jc-c g-fw-w g-m-t-40">
      <div class="g-flex g-jc-c g-fw-w g-fs-18 g-c-666666 g-tc">
        <i class="img logo"/>
        <p class="g-width g-m-t-10">伍佰账单1.0</p>
        <div class="g-tc g-m-t-5 g-c-a0a0a0 g-fs-14 g-pd-15 g-bs-bb">关于伍佰如果你无法简洁的表达你的想法，那只说明你还不够了解它。
  -- 阿尔伯特·爱因斯坦</div>
      </div>
    </div>
  </div>
</template>

<script>
import comHeader from '@/components/header/header'
export default {
  name: 'aboutus',
  components: {
    comHeader
  }
}
</script>

<style lang="less">
.aboutus {
  height: 100%;
  background: white;
  .img {
    width: 80px;
    height: 80px;
    display: block;
    border-radius: 4px;
  }
  .img.logo {
    background: #ffaa22 url(../../assets/images/success.png) no-repeat center;
    background-size: cover;
  }
}

</style>
