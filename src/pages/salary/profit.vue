<template>
  <div class="salaryProfit g-bg-white">
    <com-header title="我的收益"/>
    <c-table v-if="list && list.length">
      <tr slot="header" class="g-fs-16 g-c-666666">
        <th>收益来源</th>
        <th>产生时间</th>
        <th>收益金额</th>
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
import { getProfitList } from '@/api/salary'
import cTable from './components/table'
export default {
  name: 'salaryProfit',
  components: {
    comHeader,
    cTable
  },
  data () {
    return {
      list: [],
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
      getProfitList(params).then(({ data: { code, data = {}, msg } }) => {
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
.salaryProfit {

}
</style>


