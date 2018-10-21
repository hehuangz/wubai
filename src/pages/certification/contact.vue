<template>
  <div class="contents g-bg-white">
    <comHeader title="银行卡认证"/>
    <mt-field
      label="持卡人"
      placeholder="请输入您的持卡人姓名"
      type="text"
      v-model="name"
      :attr="{ maxlength: 11 }"
    ></mt-field>
    <div class="g-line-gray"></div>
    <div class="g-bg-white g-width g-flex g-pd-15 g-bs-bb">
      <div style="width: 105px" class="g-fs-0">选择银行卡</div>
      <select class="select g-width g-block g-fs-16 g-pd-r-10 g-bs-bb">
        <option value="1">18-21</option>
        <option value="2">22-25</option>
        <option value="3">26-29</option>
        <option value="4">30-35</option>
        <option value="5">Over35</option>
      </select>
    </div>
    <mt-field
      label="银行卡号"
      placeholder="请输入您的银行卡号"
      type="number"
      v-model="bankNumber"
      :attr="{ maxlength: 18 }"
    ></mt-field>
    <mt-field
      label="手机号"
      placeholder="请输入您的手机号"
      type="number"
      v-model="phone"
      :attr="{ maxlength: 18 }"
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
    <div class="g-flex g-jc-c g-m-t-40 g-m-b-40">
      <button class="g-btn-orange-l">保存</button>
    </div>
  </div>
</template>

<script>
import comHeader from '@/components/header/header'

export default {
  name: 'contents',
  components: {
    comHeader
  },
  props: {},
  data () {
    return {
      name: '',
      bankNumber: '',
      phone: '',
      captcha: '',
      time: 59,
      isCaptcha: false
    }
  },
  methods: {
    handleCaptcha () {

    }
  }
}
</script>

<style lang="less">
  .contents {
    .btn-captcha {
      width: 86px;
      height: 30px;
      border-radius: 4px;
      line-height: 32px;
    }
    .select {
      border: none;
      outline: none;
      background: transparent
    }
  }
</style>
