<template>
  <div class="new-post">
    <com-header title="新建帖子">
      <span @click="addPost">发布</span>
    </com-header>
    <div class="content g-bs">
      <mt-field label="发帖标题" placeholder="请输入帖子标题" v-model="title" />
      <mt-field label="输入内容" placeholder="请输入帖子正文" type="textarea" rows="4" v-model="content" />
    </div>
  </div>
</template>

<script>
  import comHeader from '@/components/header/header'

  export default {
    name: 'new-post',
    components: {comHeader},
    computed: {
      hasUnsaved () {
        return this.title || this.content
      }
    },
    data () {
      return {
        title: '',
        content: ''
      }
    },
    beforeRouteLeave (to, from, next) {
      if (this.hasUnsaved) {
        this.$vux.confirm.show({
          content: '您确定要放弃本篇帖子吗？',
          onCancel () {
            next(false)
          },
          onConfirm () {
            next()
          }
        })
      } else {
        next()
      }
    },
    methods: {
      // 发布帖子
      addPost () {
        this.$router.push({name: 'post-release'})
      }
    }
  }
</script>

<style scoped lang="less">
  .new-post {
    .content {
      width: 100%;
      margin-top: .2rem;
    }
    /deep/ .vux-confirm {
      .weui-dialog__bd {
        color: #ffaa22;
      }
    }
  }
</style>
