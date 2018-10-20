<template>
  <div class="p-login g-bg-f9f9f9">
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
  </div>
</template>

<script>
import { IMG_OSS_LOGO, IMG_OSS_PHONE, IMG_OSS_LOCK } from '@/constants/constants.js'
import { getCode, toLoginIn } from '@/api/login'
import Debounce from '@/util/debounce'
let t = null // 发送验证码的60秒定时器
export default {
  name: 'login',
  data () {
    return {
      IMG_OSS_LOGO,
      IMG_OSS_PHONE,
      IMG_OSS_LOCK,
      isInAppType: false,
      isGetCode: true,
      time: 59,
      tel: '',
      code: ''
    }
  },
  created () {
  },
  mounted () {
    window.onBack = this.onBack
  },
  methods: {
    onBack () {
      this.$router.go(-1)
    },
    closeTip () {
      this.isInAppType = true
    },
    handleCode () {
      const rules = {
        tel: {
          name: "手机号",
          type: "validMobile",
          value: this.tel,
          required: !0
        }
      }
      if (!this._onCheck(rules)) return
      Debounce(() => this._onCode(), 1000)
    },
    async _onCode () {
      this.isGetCode = false
      let params = {
        tel: this.tel
      }
      getCode(params).then(({ data: { code, data, message } }) => {
        if (code === 200) {
          this._onTime()
          this.isGetCode = false
          this.$vux.toast.text('验证码发送成功')
        } else {
          this.isGetCode = true
          this.$vux.toast.text(message)
        }
      }).catch(() => {
        this.isGetCode = true
        this.$vux.toast.text('网络出错,请稍后重试')
      })
    },
    handleLogin () {
      const rules = {
        tel: {
          name: "手机号",
          type: "validMobile",
          value: this.tel,
          required: !0
        },
        code: {
          name: "验证码",
          type: "validPostalCode",
          value: this.code,
          required: !0
        }
      }
      if (!this._onCheck(rules)) return
      this._onLogin()
    },
    _onTime () {
      t = setInterval(() => {
        this.time--
        if (this.time <= 0) {
          clearInterval(t)
          this.isGetCode = true
          this.time = 59
        }
      }, 1000)
    },
    async _onLogin () {
      let sid = this.$utils.localData.get('shopId')
      let localShareInfo = this.$utils.localData.get("shareInfo")
      let shareInfo = {}
      if (localShareInfo && localShareInfo !== 'undefined') {
        shareInfo = JSON.parse(localShareInfo) || {}
      }
      let params = {
        tel: this.tel,
        verifycode: this.code,
        foruid: shareInfo.uid || 0, // 分享者id
        gid: shareInfo.adviserId || null, // 顾问id，同分享者
        sid: sid && sid !== 'undefined' ? sid : null
      }
      toLoginIn(params).then(({ data: { code, data, message } }) => {
        if (code === 200) {
          this.$utils.localData.set("uid", data.uid)
          this.$utils.localData.set("tel", data.tel)
          this.$utils.localData.set("token", data.token)
          this.$utils.localData.set("userType", data.userType)
          this.$vux.toast.text('成功登录')
          this.$router.go(-1)
        } else {
          this.$vux.toast.text(message)
        }
      }).catch(() => {
        this.$vux.toast.text('网络出错，请稍后重试')
      })
    },
    handleToAgreement () {
      this.$router.push({ name: 'useragreement' })
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
.p-login {
  header {
    padding-bottom: 8px;
    position: absolute;
    top: 0;
    left: 0;
    .back {
      display: inline-block;
      width: 32px;
      height: 32px;
      line-height: 32px;
      border-radius: 16px;
      background-color: black;
      text-align: center;
      opacity: 0.3;
      position: fixed;
      z-index: 10;
      left: 0.16rem;
      top: 1rem;
      i.iconfont {
        color: white;
        font-size: 18/50rem;
      }
    }
  }
  ._avatar {
    width: 100px;
    height: 68px;
    overflow: hidden;
    margin: 20% auto 20px;
  }
  .center {
    height: 200px;
    padding: 30px 0;
    ._item {
      width: 295px;
      height: 48px;
      border-radius: 100px;
    }
    ._img {
      width: 48px;
      height: 48px;
    }
    .__input {
      height: 30px;
    }
  }
}
</style>
