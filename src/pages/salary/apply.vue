<template>
  <div class="salaryApply g-bg-white">
    <com-header title="我的申请"/>
    <c-table v-if="list && list.length">
      <tr slot="header" class="g-fs-16 g-c-666666">
        <th>申请来源</th>
        <th>申请时间</th>
        <th>申请金额</th>
      </tr>
      <tr slot="content" class="g-c-a0a0a0 g-fs-16" v-for="item in list" :key="item.id">
        <td>{{item.creditName}}</td>
        <td>{{item.createTime}}</td>
        <td class="g-c-orange">{{Number(item.profitAmount)>0?`+${item.profitAmount}`:item.profitAmount}}元</td>
      </tr>
    </c-table>
  </div>
</template>
<script>
import comHeader from '@/components/header/header'
import { getApplyList } from '@/api/salary'
import cTable from './components/table'
export default {
  name: 'salaryApply',
  components: {
    comHeader,
    cTable
  },
  data () {
    return {
      list: [
        {
          "id": 20,
          "creditId": 3,
          "creditName": "fdg",
          "userId": "9",
          "userName": "18357250335",
          "isRegister": 1,
          "createTime": "2018-10-02 20:10:16",
          "profitUserId": "8",
          "profitUserName": "18357250336",
          "profitAmount": 3,
          "state": 2,
          "type": 2,
          "amount": 1000,
          "creditDate": 10
        }
      ],
      limit: 20,
      page: 1
    }
  },
  beforeMount () {
    this._onDataList()
  },
  methods: {
    async _onDataList () {
      let params = {
        limit: this.limit,
        page: this.page
      }
      getApplyList(params).then(({ data: { code, data = {}, msg } }) => {
        if (code === 1 && data.list && data.list.length) {
          this.list = data.list
        }
      }).catch((error) => {
        console.log(error)
      })
    }
  }
}
</script>

<style lang="less" scoped>
.salaryApply {

}
</style>


