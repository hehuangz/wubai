<template>
  <div class="contents">
    <comHeader :title="`${typeObj[type]}认证`"/>
    <mt-field
      :label="typeObj[type]"
      :placeholder="`请输入您的${typeObj[type]}`"
      type="text"
      v-model="value"
      :attr="{ maxlength: 18 }"
    ></mt-field>
    <div class="g-flex g-jc-c g-m-t-40 g-m-b-40">
      <button class="g-btn-orange-l" @click="handleSave">保存</button>
    </div>
  </div>
</template>

<script>
import comHeader from '@/components/header/header'
import Debounce from '@/util/debounce'
import { getSesame, getWeChatAccount, getTbAccount } from '@/api/certification'
export default {
  name: 'contents',
  components: {
    comHeader
  },
  data () {
    return {
      typeObj: {
        'sesame': '芝麻分',
        'wechat': '微信账号',
        'taobao': '淘宝账号'
      },
      type: 'sesame',
      value: ''
    }
  },
  beforeMount () {
    this.type = this.$route.query.type || 'sesame'
  },
  methods: {
    handleSave () {
      if (!this.value) return this.$vux.toast.text(`${this.typeObj[this.type]}不能为空`)
      switch (this.type) {
        case 'sesame':
          return this._onSesame({sesame: this.value})
        case 'wechat':
          return this._onWeChatAccount({weChatAccount: this.value})
        case 'taobao':
          return this._onTbAccount({tbAccount: this.value})
        default:
          return this._onSesame({sesame: this.value})
      }
    },
    async _onSesame (params) {
      getSesame(params).then(({ data: { code, data, msg } }) => {
        if (code === 1) {
          this.$vux.toast.text('保存成功')
          this.$router.back(-1)
        }
      }).catch(() => {
        this.$vux.toast.text('网络出错，请稍后重试')
      })
    },
    async _onWeChatAccount (params) {
      getWeChatAccount(params).then(({ data: { code, data, msg } }) => {
        if (code === 1) {
          this.$vux.toast.text('保存成功')
          this.$router.back(-1)
        }
      }).catch(() => {
        this.$vux.toast.text('网络出错，请稍后重试')
      })
    },
    async _onTbAccount (params) {
      getTbAccount(params).then(({ data: { code, data, msg } }) => {
        if (code === 1) {
          this.$vux.toast.text('保存成功')
          this.$router.back(-1)
        }
      }).catch(() => {
        this.$vux.toast.text('网络出错，请稍后重试')
      })
    }
  }
}
</script>

<style lang="less">
</style>
