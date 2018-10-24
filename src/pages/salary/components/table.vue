<template>
  <div class="table g-bg-white g-m-t-10">
    <x-table :cell-bordered="false" :content-bordered="false">
      <thead>
        <tr class="g-fs-16 g-c-666666">
          <th>申请金额</th>
          <th>申请时间</th>
          <th>申请状态</th>
        </tr>
      </thead>
      <tbody>
        <tr class="g-c-a0a0a0 g-fs-16" v-for="item in list" :key="item.id">
          <td class="g-c-orange">{{item.amount}}</td>
          <td>{{item.createTime}}</td>
          <td class="g-c-666666">{{state[item.state]}}</td>
        </tr>
      </tbody>
    </x-table>
  </div>
</template>
<script>
export default {
  name: 'cTable',
  props: ['list'],
  data () {
    return {
      state: {
        '0': '提现申请中',
        '1': '提现中',
        '2': '提现成功',
        '3': '提现失败'
      }
    }
  },
  methods: {
  }
}
</script>

<style lang="less" scoped>
.table {
  /deep/ .mint-cell-value input {
    text-align: right;
    margin-right: 10px;
    background: #ffffff
  }
  /deep/ .mint-cell-title {
    color: #a0a0a0;
  }
  .show {
    white-space: pre-wrap;
  }
}
</style>
