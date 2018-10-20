<template>
  <div class="contents">
    <com-header title="身份证认证" />
    <mt-cell
      v-for="(item) in list"
      :key="item.title"
      :title="item.title"
    >
      <span :class="item.value?'':'g-c-orange'">{{item.value?'已认证':'未认证'}}</span>
    </mt-cell>
    <div class="g-m-10">补充信息</div>
    <mt-cell
      v-for="(item) in listOther"
      :key="item.title"
      :title="item.title"
    >
      <span :class="item.value?'':'g-c-orange'">{{item.value?'已认证':'未认证'}}</span>
    </mt-cell>
    <div class="g-flex g-jc-c">
      <button class="g-btn-orange-l g-m-t-40">完成认证</button>
    </div>
  </div>
</template>

<script>
import comHeader from '@/components/header/header'
export default {
  name: 'certification',
  components: {
    comHeader
  },
  data () {
    return {
      isChecked: false,
      list: [
        {title: '身份证认证', value: true},
        {title: '芝麻分认证', value: false},
        {title: '银行卡认证', value: true},
        {title: '紧急联系人认证', value: true}
      ],
      listOther: [
        {title: '微信认证', value: true},
        {title: '淘宝账号认证', value: false}
      ]
    }
  },
  methods: {

  }
}
</script>
<style lang="less">
</style>
