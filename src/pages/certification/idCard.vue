<template>
  <div class="contents">
    <com-header title="身份证认证"/>
    <figure class="g-m-tb-5 g-flex g-fw-w g-jc-c">
      <div class="check check-face g-m-b-20"></div>
      <div class="check check-id g-m-b-20"></div>
      <div class="check check-id-back"></div>
    </figure>
    <mt-field
      label="真实姓名"
      placeholder="请输入您的真实姓名"
      type="text"
      v-model="userReal"
      :attr="{ maxlength: 11 }"
    ></mt-field>
    <mt-field
      label="身份证号"
      placeholder="请输入您的身份证号"
      type="text"
      v-model="idCard"
      :attr="{ maxlength: 18 }"
    ></mt-field>
    <div class="g-flex g-jc-c g-m-t-40 g-m-b-40">
      <button class="g-btn-orange-l" @click="handleSave">保存</button>
    </div>
  </div>
</template>

<script>
import comHeader from '@/components/header/header'
import { getIdCard } from '@/api/certification'
import Debounce from '@/util/debounce'
export default {
  name: 'certificationIdCard',
  components: {
    comHeader
  },
  props: {},
  data () {
    return {
      userReal: '',
      idCard: '',
      faceImg: '',
      idCardImg: '',
      idCardBackImg: ''
    }
  },
  methods: {
    handleSave () {
      const rules = {
        userReal: {
          name: "真实姓名",
          type: "validName",
          value: this.userReal,
          required: !0
        },
        idCard: {
          name: "身份证号",
          type: "validId",
          value: this.idCard,
          required: !0
        }
      }
      if (!this.$utils.dataValidityCheck(rules)) return
      Debounce(() => this._onSave(), 1000)
    },
    async _onSave () {
      let params = {
        userReal: this.userReal,
        idCard: this.idCard,
        faceImg: this.faceImg,
        idCardImg: this.idCardImg,
        idCardBackImg: this.idCardBackImg
      }
      getIdCard(params).then(({ data: { code, data, msg } }) => {
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
  .contents {
    .check {
      width: 274px;
      height: 155px;
      &-face {
        background: url(../../assets/images/check_face.png) no-repeat center;
        background-size: 100%;
      }
      &-id {
        background: url(../../assets/images/check_id.png) no-repeat center;
        background-size: 100%;
      }
      &-id-back {
        background: url(../../assets/images/check_id_back.png) no-repeat center;
        background-size: 100%;
      }
    }
  }
</style>
