<template>
  <div class="post-release">
    <com-header title="发布确认" />
    <div class="content">
      <div class="info icon-success">
        <icon type="success" is-msg></icon>
      </div>
      <div class="info tips">发布帖子成功</div>
      <div class="info option-btn g-bs-bb">
        <button class="g-btn-gray-m">再来一篇</button>
        <button class="g-btn-orange-m">快速贷款</button>
      </div>
    </div>
  </div>
</template>

<script>
  import comHeader from '@/components/header/header'

  export default {
    name: 'post-release',
    components: {comHeader},
    data () {
      return {}
    }
  }
</script>

<style scoped lang="less">
  .post-release {
    .content {
      display: flex;
      flex-wrap: wrap;
      .info {
        width: 100%;
        text-align: center;
      }
      .icon-success {
        margin-top: 1.8rem;
      }
      .tips {
        margin: .24rem 0 .56rem;
        font-size: .36rem;
      }
      .option-btn {
        display: flex;
        justify-content: space-between;
        padding: 0 .68rem;
        .g-btn-orange-l {
          width: 2.74rem;
        }
      }
    }
    /deep/ .weui-icon-success {
      color: #ffaa22;
    }
  }
</style>
