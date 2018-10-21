<template>
  <div class="captcha">
    <button
      v-if="!isCaptcha"
      class="btn-captcha g-btn g-bg-orange"
      @click="handleCaptcha"
    >获取验证码</button>
    <button
      v-else
      class="btn-captcha g-btn g-bg-cccccc"
    >重新获取({{time}})</button>
  </div>
</template>

<script>
export default {
  name: 'comCaptcha',
  props: {
  },
  data () {
    return {
      isCaptcha: false, // 是否已经发送验证码
      time: 59
    }
  },
  methods: {
    handleCaptcha () {
      this.isCaptcha = true
    },
    _onTime () {
      let t = setInterval(() => {
        this.time--
        if (this.time <= 0) {
          clearInterval(t)
          this.isCaptcha = false
          this.time = 59
        }
      }, 1000)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .header {
    // 重置mint header样式
    .mint-header {
      background-color: #fff;
      color: #ffaa22;
      height: 44px;
      font-size: 16px;
      border-bottom: 0.5px solid #ffaa22;
      /deep/ .mintui-back {
        color: #1f1f1f;
        font-size: 18px;
      }
    }
    .place {
      width: 100%;
      height: 44px;
    }
  }
</style>
