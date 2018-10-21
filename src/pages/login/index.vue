<template>
  <div class="login g-flex g-fd-c g-ai-c">
    <com-header title="登录" />
    <div class="logo g-bg-orange">
      <img src="" alt="">
    </div>
    <div class="g-c-666666 g-fs-16 g-m-b-15">伍佰账单</div>
    <div class="g-width g-bs-bb">
      <mt-field
        label="手机号"
        placeholder="请输入您的手机号"
        type="number"
        v-model="phone"
        :attr="{ maxlength: 11 }"
      ></mt-field>
      <mt-field
        label="验证码"
        placeholder="请输入您的验证码"
        v-model="captcha"
        :attr="{ maxlength: 6 }"
      >
        <button
          v-if="!isCaptcha"
          class="btn-captcha g-btn g-bg-orange"
          @click="handleCaptcha"
        >获取验证码</button>
        <button
          v-else
          class="btn-captcha g-btn g-bg-cccccc"
        >重新获取({{time}})</button>
      </mt-field>
    </div>
    <button class="btn-login g-btn-orange-l" @click="handleLogin">登录</button>
    <div class="g-fs-14 g-c-999999 g-flex g-ai-c">
      <input
        type="checkbox"
        v-model="isAllow"
        style="width: 16px;height: 16px"
      />
      我已阅读并同意《用户协议》</div>
  </div>
</template>

<script>
import { getCode, toLoginIn } from '@/api/login'
import Debounce from '@/util/debounce'
import comHeader from '@/components/header/header'

let t = null // 发送验证码的60秒定时器
export default {
  name: 'login',
  components: {
    comHeader
  },
  data () {
    return {
      phone: '',
      captcha: '',
      isCaptcha: false, // 是否发送验证码
      time: 59,
      isAllow: true
    }
  },
  methods: {
    handleCaptcha () {
      const rules = {
        tel: {
          name: "手机号",
          type: "validMobile",
          value: this.phone,
          required: !0
        }
      }
      if (!this._onCheck(rules)) return
      this.isCaptcha = true
      this._onTime() // 重新获取倒计时开始
      Debounce(() => this._onCaptcha(), 1000)
    },
    async _onCaptcha () {
      let params = {
        phone: this.phone,
        smsType: '8805'
      }
      getCode(params).then(({ data: { code, data, msg } }) => {
        if (code === 1) {
          this.$vux.toast.text('验证码发送成功')
        }
      }).catch((error) => {
        console.log('error', error)
      })
    },
    handleLogin () {
      const rules = {
        tel: {
          name: "手机号",
          type: "validMobile",
          value: this.phone,
          required: !0
        },
        code: {
          name: "验证码",
          type: "validPostalCode",
          value: this.captcha,
          required: !0
        }
      }
      if (!this._onCheck(rules)) return
      if (!this.isAllow) {
        return this.$vux.toast.text('请先同意用户协议')
      }
      Debounce(() => this._onLogin(), 1000)
    },
    async _onLogin () {
      let params = {
        loginName: this.phone,
        code: this.captcha,
        source: '3'
      }
      toLoginIn(params).then(({ data: { code, data, msg } }) => {
        console.log(code, data, msg)
        // if (code === 1) {
        this.$router.push('/certification')
        // }
      }).catch(() => {
        this.$vux.toast.text('网络出错，请稍后重试')
      })
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
    },
    _onCheck (rules) {
      const resultValidity = this.$utils.dataValidity(rules)
      if (!resultValidity.status) {
        this.$vux.toast.text(resultValidity.error)
        return false
      }
      return true
    }
  }
}
</script>

<style lang="less">
  .login {
    .logo {
      width: 86px;
      height: 86px;
      border-radius: 2px;
      margin-top: 46px;
      margin-bottom: 10px;
      img {
        width: 100%;
        height: 100%;
        display: block;
      }
    }
    .btn-captcha {
      width: 86px;
      height: 30px;
      border-radius: 4px;
      line-height: 32px;
    }
    .btn-login {
      margin: 40px auto 10px;
    }
  }
</style>
