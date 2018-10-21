<template>
  <div class="contents">
    <comHeader title="银行卡认证"/>
    <mt-field
      label="持卡人"
      placeholder="请输入您的持卡人姓名"
      type="text"
      v-model="realName"
      :attr="{ maxlength: 11 }"
    ></mt-field>
    <div class="g-line-gray"></div>
    <div class="g-bg-white g-width g-flex g-pd-lr-15 g-bs-bb g-fs-16 g-height-48">
      <div style="width: 105px" class="g-fs-0">选择银行卡</div>
      <select class="select g-width g-block g-fs-16 g-pd-r-10 g-bs-bb" v-model="bankName">
        <option v-for="(item) in bankList" :key="item" :value="item">{{item}}</option>
      </select>
    </div>
    <mt-field
      label="银行卡号"
      placeholder="请输入您的银行卡号"
      type="number"
      v-model="cardNo"
      :attr="{ maxlength: 18 }"
    ></mt-field>
    <mt-field
      label="手机号"
      placeholder="请输入您的手机号"
      type="number"
      v-model="phone"
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
import { getBank } from '@/api/certification'
export default {
  name: 'contents',
  components: {
    comHeader
  },
  props: {},
  data () {
    return {
      realName: '',
      bankName: '中国银行',
      cardNo: '',
      phone: '',
      bankList: [
        '农业银行',
        '工商银行',
        '中国银行',
        '建设银行',
        '招商银行',
        '广发银行',
        '中信银行',
        '上海银行',
        '民生银行'
      ]
    }
  },
  methods: {
    handleSave () {
      const rules = {
        realName: {
          name: "持卡人姓名",
          type: "validName",
          value: this.realName,
          required: !0
        },
        tel: {
          name: "手机号",
          type: "validMobile",
          value: this.phone,
          required: !0
        },
        cardNo: {
          name: "银行卡号",
          type: "validBackNumber",
          value: this.cardNo,
          required: !0
        }
      }
      if (!this.$utils.dataValidityCheck(rules)) return
      Debounce(() => this._onSave(), 1000)
    },
    async _onSave () {
      let params = {
        realName: this.realName,
        bankName: this.bankName,
        cardNo: this.cardNo, // 6217730809694670
        phone: this.phone,
        type: '1'
      }
      getBank(params).then(({ data: { code, data, msg } }) => {
        if (code === 1) {
          this.$vux.toast.text('保存成功')
          this.$router.push('/certification')
        }
      }).catch(() => {
        this.$vux.toast.text('网络出错，请稍后重试')
      })
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
