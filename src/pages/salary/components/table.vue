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
        <tr class="g-c-a0a0a0">
          <td>借款范围</td>
          <td>借款期限</td>
          <td>日利息</td>
        </tr>
      </tbody>
    </x-table>
  </div>
</template>
<script>
export default {
  name: 'cTable',
  props: [],
  data () {
    return {
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
