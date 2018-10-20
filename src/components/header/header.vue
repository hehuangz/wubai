<template>
  <div class="header">
    <mt-header fixed :title="title">
      <div slot="left" @click="onBack">
        <mt-button icon="back"></mt-button>
      </div>
    </mt-header>
    <div class="place"></div>
  </div>
</template>

<script>
export default {
  name: 'CHeader',
  props: {
    title: String
  },
  methods: {
    onBack () {
      this.$router.go(-1)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  .header {
    // 重置mint header样式
    .mint-header {
      background-color: #fff;
      color: #ffaa22;
      height: 44px;
      font-size: 16px;
      border-bottom: 0.5px solid #ffaa22;
      /deep/ .mintui-back {
        color: #1f1f1f;
        font-size: 18px;
      }
    }
    .place {
      width: 100%;
      height: 44px;
    }
  }
</style>
