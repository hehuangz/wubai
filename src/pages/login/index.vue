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
        <div
          v-if="!isCaptcha"
          class="btn-captcha g-btn g-bg-orange"
          @click="handleCaptcha"
        >获取验证码</div>
        <div
          v-else
          class="btn-captcha g-btn g-bg-cccccc"
        >重新获取{{time}}</div>
      </mt-field>
    </div>
    <div class="btn-login g-btn-orange-l" @click="handleLogin">登录</div>
    <div class="g-fs-14 g-c-999999 g-flex g-ai-c">
      <input
        type="checkbox"
        v-model="isAllow"
        @click="handleCheck"
        style="width: 16px;height: 16px"
      />
      登录并同意《用户协议》</div>
  </div>
  <!-- <div class="p-login g-bg-f9f9f9">
    <img class="_avatar g-flex g-jc-c" :src="IMG_OSS_LOGO"/>
    <main class="center g-width g-flex g-jc-c g-fw-w">
      <div class="_item g-bg-white g-flex g-jc-fs g-ai-c">
        <img :src="IMG_OSS_PHONE" class="_img g-fs-0"/>
        <input
          class="__input g-width-80p g-fs-16"
          type="number"
          v-model="tel"
          maxlength="11"
          placeholder="请输入手机号"
        />
      </div>
      <div class="_item g-bg-white g-flex g-jc-fs g-ai-c g-m-t-10">
        <img :src="IMG_OSS_LOCK" class="_img g-fs-0"/>
        <input
          class="__input g-width-80p g-fs-16"
          type="number"
          v-model="code"
          maxlength="4"
          placeholder="验证码"
        />
        <div class="g-bt-orange-s g-m-r-10" @click="handleCode" v-if="isGetCode">发送验证码</div>
        <div class="g-bt-gray-s g-m-r-10" v-if="!isGetCode">重新获取({{time}})</div>
      </div>
      <div class="g-bt-orange-l g-m-t-30" @click="handleLogin">登录</div>
      <div class="g-m-t-10 g-fs-12">登录即同意
        <span class="g-c-orange" @click="handleToAgreement">《吾同用户协议》</span>
      </div>
    </main>
  </div> -->
</template>

<script>
import { getCode, toLoginIn } from '@/api/login'
import Debounce from '@/util/debounce'
import { Toast } from 'mint-ui'
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
  created () {
  },
  mounted () {
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
    _onCaptcha () {
      let params = {
        phone: this.phone,
        smsType: '8805'
      }
      // getCode(params).then(({ data: { code, data, message } }) => {
      //   if (code === 1) {
      //     console.log(111,'code1')
      //   } else {
      //     console.log(222,'!code1')
      //   }
      // }).catch(() => {
      //   console.log(333, 'catch')
      // })
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
    _onLogin () {

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
        Toast({
          message: resultValidity.error,
          position: 'top'
        })
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
