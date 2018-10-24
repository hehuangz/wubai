<template>
   <div>
      <cell
        :title="`首次投资${data.amount}(${data.minDay}天及以上)`"
        :value="`${data.numUser}人已投`"
      />
      <x-table :cell-bordered="false" :content-bordered="false">
        <thead>
          <tr class="g-c-a0a0a0">
            <th>平台收益</th>
            <th></th>
            <th>平台红包</th>
            <th></th>
            <th>现金返利</th>
            <th></th>
            <th>总收益</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="g-c-orange">{{data.profit}}元</td>
            <td>+</td>
            <td class="g-c-orange">{{data.redPacket}}元</td>
            <td>+</td>
            <td class="g-c-orange">{{data.rebate}}元</td>
            <td>=</td>
            <td class="g-c-orange">{{total}}元</td>
          </tr>
        </tbody>
      </x-table>
   </div>
</template>
<script>
export default {
  name: 'cPain',
  props: ['data'],
  computed: {
    total () {
      return Number(this.data.profit) + Number(this.data.redPacket) + Number(this.data.rebate)
    }
  }
}
</script>

<style lang="less" scoped>
.cell {
  width: 100%;
  font-size: 14px;
}
</style>
