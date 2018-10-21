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
      v-model="realName"
      :attr="{ maxlength: 11 }"
    ></mt-field>
    <mt-field
      label="身份证号"
      placeholder="请输入您的身份证号"
      type="text"
      v-model="idNumber"
      :attr="{ maxlength: 18 }"
    ></mt-field>
    <div class="g-flex g-jc-c g-m-t-40 g-m-b-40">
      <button class="g-btn-orange-l">下一步</button>
    </div>
  </div>
</template>

<script>
import comHeader from '@/components/header/header'
export default {
  name: 'certificationIdCard',
  components: {
    comHeader
  },
  props: {},
  data () {
    return {
      realName: '',
      idNumber: ''
    }
  },
  methods: {

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
