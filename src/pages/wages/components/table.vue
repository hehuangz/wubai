<template>
  <div class="table g-bg-white g-m-t-10">
    <x-table :cell-bordered="false" :content-bordered="false">
      <thead>
        <tr class="g-fs-16 g-c-666666">
          <th width="40%">{{`${creditMinLimit}-${creditMaxLimit}元`}}</th>
          <th>{{`${creditMinTerm}-${creditMaxTerm}天`}}</th>
          <th>{{`${Number(dayInterest)*100}%`}}</th>
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
    <div class="g-flex g-jc-sa g-pd-tb-10">
      <button class="g-btn-orange-m">贷款详情</button>
      <button class="g-btn-orange-m">产品评价</button>
    </div>
    <!-- 底部cell -->
    <mt-field
      label="金额/元"
      :placeholder="`请输入借款金额,${creditMinLimit}-${creditMaxLimit}元`"
      type="number"
      v-model.number="money"
      :attr="{ min:1000, max: 2000 }"
      @change="handleChange('money')"
    ></mt-field>
    <mt-field
      label="时间/天"
      :placeholder="`请输入借款时间,${creditMinTerm}-${creditMaxTerm}天`"
      type="number"
      v-model.number="time"
      @change="handleChange('time')"
    ></mt-field>
    <mt-field
      label="应还款/元"
      placeholder="到期应归还的总金额"
      :disabled='true'
      type="number"
      v-model="backMoney"
    ></mt-field>
    <mt-cell title="申请条件"></mt-cell>
    <div class="g-pd-lr-15 g-c-666666 g-fs-16">
      <div class="g-border-t-gray g-pd-tb-10">
        <p v-for="item in applyCondition" :key="item">{{item}}</p>
      </div>
    </div>
    <mt-cell title="所需材料"></mt-cell>
    <div class="g-pd-lr-15 g-c-666666 g-fs-16">
      <div class="g-border-t-gray g-pd-tb-10">
        <p>{{requestMaterial}}</p>
      </div>
    </div>
    <mt-cell title="产品说明"></mt-cell>
    <div class="g-pd-lr-15 g-c-666666 g-fs-16">
      <div class="g-border-t-gray g-pd-tb-10">
        <p>{{platformDesc}}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'cTable',
  props: [
    'creditMinLimit',
    'creditMaxLimit',
    'creditMinTerm',
    'creditMaxTerm',
    'dayInterest',
    'applyCondition',
    'requestMaterial',
    'platformDesc'
  ],
  data () {
    return {
      money: '',
      time: '',
      backMoney: ''
    }
  },
  watch: {
    money: function (val) {
      let rise = (val * this.dayInterest) * this.time
      this.backMoney = Number(rise + val).toFixed(2)
    },
    time: function (val) {
      let rise = (this.money * this.dayInterest) * val
      this.backMoney = Number(rise + this.money).toFixed(2)
    }
  },
  methods: {
    handleChange (type) {
      if (type === 'money') {
        if (this.money < this.creditMinLimit) {
          this.money = this.creditMinLimit
        } else if (this.money > this.creditMaxLimit) {
          this.money = this.creditMaxLimit
        }
      } else if (type === 'time') {
        if (this.time < this.creditMinTerm) {
          this.time = this.creditMinTerm
        } else if (this.time > this.creditMaxTerm) {
          this.time = this.creditMaxTerm
        }
      }
    }
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
}
</style>
