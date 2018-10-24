<template>
  <div class="notice">
    <comHeader title="我的消息"/>
    <group style="marginTop: 0">
      <cell title="系统消息" is-link link="/notice/list?type=system" />
      <cell title="活动消息" is-link link="/notice/list?type=active"/>
    </group>
  </div>
</template>

<script>
import comHeader from '@/components/header/header'
export default {
  name: 'notice',
  components: {
    comHeader
  }
}
</script>

<style lang="less" scoped>
  .notice {
    /deep/ .weui-cells {
      margin-top: 0;
    }
  }
</style>


