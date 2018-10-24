<template>
  <div class="noticeList">
    <com-header :title="type==='system'?'系统消息':'活动消息'" />
    <router-link
      v-for="item in list"
      :key="item.id"
      :to="`/notice/detail?id=${item.id}`">
      <card class="g-pd-15 g-bs-bb">
        <div slot="content" class="card-padding">
          <p style="color:#999;font-size:12px;">{{item.createTime}}</p>
          <p class="g-fs-14 g-twoline g-m-t-5">
            <span class="g-c-orange">[{{item.title}}]</span> {{item.content}}
          </p>
        </div>
      </card>
    </router-link>
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
