<template>
  <div class="contents">
    <comHeader title="紧急联系人认证"/>
    <div class="g-m-t-10 g-fs-16 g-bg-white">
      <p class="g-title">紧急联系人1</p>
      <div class="g-bg-white g-width g-flex g-pd-lr-15 g-bs-bb g-fs-16 g-border-t-f0f0f0 g-height-48">
        <div style="width: 105px" class="g-fs-0">与本人关系</div>
        <select class="select g-width g-block g-fs-16 g-pd-r-10 g-bs-bb" v-model="relationship">
          <option v-for="(item) in relationList" :key="item" :value="item">{{item}}</option>
        </select>
      </div>
      <mt-field
        label="姓名"
        placeholder="请输入联系人姓名"
        type="text"
        v-model="name"
        :attr="{ maxlength: 10 }"
      ></mt-field>
      <mt-field
        label="手机号"
        placeholder="请输入联系人手机号"
        type="number"
        v-model="phone"
        :attr="{ maxlength: 11 }"
      ></mt-field>
    </div>

    <div class="g-m-t-10 g-bg-white">
      <p class="g-title g-fs-16">紧急联系人2</p>
      <div class="g-bg-white g-width g-flex g-pd-lr-15 g-bs-bb g-fs-16 g-border-t-f0f0f0 g-height-48">
        <div style="width: 105px" class="g-fs-0">与本人关系</div>
        <select class="select g-width g-block g-fs-16 g-pd-r-10 g-bs-bb" v-model="relationship1">
          <option v-for="(item) in relationList" :key="item" :value="item">{{item}}</option>
        </select>
      </div>
      <mt-field
        label="姓名"
        placeholder="请输入联系人姓名"
        type="text"
        v-model="name1"
        :attr="{ maxlength: 10 }"
      ></mt-field>
      <mt-field
        label="手机号"
        placeholder="请输入联系人手机号"
        type="number"
        v-model="phone1"
        :attr="{ maxlength: 11 }"
      ></mt-field>
    </div>

    <div class="g-flex g-jc-c g-m-t-40 g-m-b-40">
      <button class="g-btn-orange-l" @click="handleSave">保存</button>
    </div>
  </div>
</template>

<script>
import comHeader from '@/components/header/header'
import Debounce from '@/util/debounce'
import { getContact, getAll } from '@/api/certification'

export default {
  name: 'contents',
  components: {
    comHeader
  },
  data () {
    return {
      relationList: ['朋友', '同事', '配偶', '直系亲属'],
      relationship: '同事',
      name: '',
      phone: '',
      relationship1: '同事',
      name1: '',
      phone1: ''
    }
  },
  beforeMount () {
    this._onData()
  },
  methods: {
    async _onData () {
      getAll().then(({ data: { code, data, msg } }) => {
        if (code === 1 && data && data.userContacts) {
          this.relationship = data.userContacts.relationship
          this.name = data.userContacts.name
          this.phone = data.userContacts.phone
          this.relationship1 = data.userContacts.relationship1
          this.name1 = data.userContacts.name1
          this.phone1 = data.userContacts.phone1
        }
      }).catch(() => {
        this.$vux.toast.text('网络出错，请稍后重试')
      })
    },
    handleSave () {
      const rules = {
        name: {
          name: "紧急联系人1姓名",
          type: "validName",
          value: this.name,
          required: !0
        },
        phone: {
          name: "紧急联系人1手机号",
          type: "validMobile",
          value: this.phone,
          required: !0
        },
        name1: {
          name: "紧急联系人2姓名",
          type: "validName",
          value: this.name1,
          required: !0
        },
        phone1: {
          name: "紧急联系人2手机号",
          type: "validMobile",
          value: this.phone1,
          required: !0
        }
      }
      if (!this._onCheck(rules)) return
      Debounce(() => this._onSave(), 1000)
    },
    async _onSave () {
      let params = {
        relationship: this.relationship,
        name: this.name,
        phone: this.phone,
        relationship1: this.relationship1,
        name1: this.name1,
        phone1: this.phone1
      }
      getContact(params).then(({ data: { code, data, msg } }) => {
        if (code === 1) {
          this.$vux.toast.text('保存成功')
          this.$router.replace('/certification')
        }
      }).catch(() => {
        this.$vux.toast.text('网络出错，请稍后重试')
      })
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
  .contents {
    .select {
      border: none;
      outline: none;
      background: transparent
    }
  }
</style>
