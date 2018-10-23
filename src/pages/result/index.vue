<template>
  <div class="result">
    <com-header title="申请结果" />
    <div class="g-flex g-ai-c g-jc-c g-fw-w g-m-t-40">
      <div class="g-flex g-jc-c g-fw-w g-fs-18 g-c-666666 g-tc">
        <i class="img" :class="type"/>
        <p v-if="type === 'success'" class="g-width g-m-t-5">恭喜您，申请成功!</p>
        <p v-if="type === 'fail'" class="g-width g-m-t-5">哎哟，申请失败～</p>
        <p v-if="type === 'wait'" class="g-width g-m-t-5">请安心等待申请结果</p>
      </div>
      <router-link to="/wages" replace class="g-m-t-40">
        <button class="g-btn-orange-m">返回首页</button>
      </router-link>
    </div>
  </div>
</template>

<script>
// 传入query.type == success/fail/wait
import Debounce from '@/util/debounce'
import comHeader from '@/components/header/header'
export default {
  name: 'result',
  components: {
    comHeader
  },
  data () {
    return {
      type: 'success'
    }
  },
  beforeMount () {
    this.type = this.$route.query.type || 'success'
  }
}
</script>

<style lang="less">
.result {
  .img {
    width: 100px;
    height: 100px;
    display: block;
  }
  .img.success {
    background: url(../../assets/images/success.png) no-repeat center;
    background-size: cover;
  }
  .img.fail {
    background: url(../../assets/images/fail.png) no-repeat center;
    background-size: cover;
  }
  .img.wait {
    background: url(../../assets/images/wait.png) no-repeat center;
    background-size: cover;
  }
}

</style>
