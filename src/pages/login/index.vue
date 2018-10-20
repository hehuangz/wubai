<template>
  <div class="login g-flex g-fd-c g-ai-c">
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
        @click="handleCheck"
        style="width: 16px;height: 16px"
      />
      登录并同意《用户协议》</div>
  </div>
</template>

<script>
import { getCode, toLoginIn } from '@/api/login'
import Debounce from '@/util/debounce'
let t = null // 发送验证码的60秒定时器
export default {
  name: 'login',
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
      getCode(params).then(({ data: { code, data, message } }) => {
        console.log(code, data, message)
        // if (code === 1) {
        //   console.log(111, 'code1')
        // } else {
        //   console.log(222, '!code1')
        // }
      }).catch(() => {
        console.log(333, 'catch')
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
    },
    handleCheck () {
      console.log(11, this.isAllow)
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
