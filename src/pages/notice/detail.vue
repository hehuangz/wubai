<template>
  <div class="noticeList">
    <com-header :title="type==='system'?'系统消息':'活动消息'" />
    <div class="g-flex g-ai-c g-jc-c g-fw-w g-m-t-40">
    </div>
  </div>
</template>

<script>
// 传入query.type == system/active
import Debounce from '@/util/debounce'
import comHeader from '@/components/header/header'
import { getMessageList } from '@/api/user'
export default {
  name: 'noticeList',
  components: {
    comHeader
  },
  data () {
    return {
      type: 'system',
      list: [],
      limit: 20,
      page: 1,
      pages: 1
    }
  },
  beforeMount () {
    this.type = this.$route.query.type || 'system'
    this._onData()
  },
  methods: {
    async _onData () {
      let params = {
        limit: this.limit,
        page: this.page,
        type: this.type === 'system' ? 1 : 2 // 类型 1：系统；2：活动
      }
      getMessageList(params).then(({ data: { code, data = {}, msg } }) => {
        if (code === 1) {
          this.list = data.list
        }
      }).catch((error) => {
        console.log(error)
      })
    }
  }
}
</script>

<style lang="less">
.noticeList {

}

</style>
