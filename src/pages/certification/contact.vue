<template>
  <div class="contents">
    <comHeader title="紧急联系人认证"/>

    <div class="g-m-t-10 g-bg-white">
      <p class="g-title g-fs-16">紧急联系人1</p>
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
  methods: {
    handleSave () {
      console.log(this.relationship, this.name, this.phone)
      console.log(this.relationship1, this.name1, this.phone1)
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
