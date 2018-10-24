<template>
  <div class="noticeDetail g-pd-15 g-bs-bb g-bg-white">
    <com-header title="消息详情" />
    <p class="g-fs-16 g-c-orange g-m-b-5">{{detail.title}}</p>
    <p class="show g-fs-14 g-a0a0a0">{{detail.content}}</p>
  </div>
</template>

<script>
// 传入query.type == system/active
import Debounce from '@/util/debounce'
import comHeader from '@/components/header/header'
import { getMessageDetail } from '@/api/user'
export default {
  name: 'noticeDetail',
  components: {
    comHeader
  },
  data () {
    return {
      id: null,
      detail: {}
    }
  },
  beforeMount () {
    this.id = this.$route.query.id || 1
    this._onData()
  },
  methods: {
    async _onData () {
      let params = {
        id: this.id
      }
      getMessageDetail(params).then(({ data: { code, data = {}, msg } }) => {
        if (code === 1 && data && data.id) {
          this.detail = data
        }
      }).catch((error) => {
        console.log(error)
      })
    }
  }
}
</script>

<style lang="less">
.noticeDetail {
  .show {
    white-space: pre-wrap;
  }
}

</style>
