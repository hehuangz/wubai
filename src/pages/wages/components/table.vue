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
      <div class="show g-border-t-gray g-pd-tb-10">{{applyCondition}}</div>
    </div>
    <mt-cell title="所需材料"></mt-cell>
    <div class="g-pd-lr-15 g-c-666666 g-fs-16">
      <div class="show g-border-t-gray g-pd-tb-10">{{requestMaterial}}</div>
    </div>
    <mt-cell title="产品说明"></mt-cell>
    <div class="g-pd-lr-15 g-c-666666 g-fs-16">
      <div class="show g-border-t-gray g-pd-tb-10">{{platformDesc}}</div>
    </div>
    <div class="g-pd-tb-10 g-m-t-10 g-width g-bg-white g-flex g-jc-c g-fw-w">
      <button
        v-if="Number(state)"
        class="g-btn-orange-l"
        @click="handleGo"
      >立即贷款</button>
      <button v-else class="g-btn-gray-l g-fs-0">产品已下架</button>
      <div class="g-fs-14 g-c-999999 g-flex g-ai-c g-m-t-5">
        <input
          type="checkbox"
          v-model="isAllow"
          style="width: 16px;height: 16px"
        />免责声明
      </div>
      <p class="g-fs-12 g-c-a0a0a0 g-pd-lr-10 g-pd-tb-5 g-bs-bb g-tc">
        本平台自成立以来，本着与每位客户合作共赢的态度，以互惠互利为原则，真诚的为大家服务。贷款前，建议您与产品方沟通了解，对于贷款过程中，若遇到问题请与本平台客服联系沟通处理，欢迎大家监督！
      </p>
    </div>
    <divider class="g-width g-c-a0a0a0">贷款有风险，借款需谨慎</divider>
  </div>
</template>
<script>
import { getSureCredit } from '@/api/wages'
export default {
  name: 'cTable',
  props: [
    'id',
    'state',
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
      backMoney: '',
      isAllow: true
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
      this.$emit('emitData', {money: this.money, time: this.time})
    },
    handleGo () {
      const rules = {
        money: {
          name: "贷款金额",
          type: "validPrice",
          value: this.money,
          required: !0
        },
        time: {
          name: "贷款时间",
          type: "validInteger",
          value: this.time,
          required: !0
        }
      }
      if (!this.$utils.dataValidityCheck(rules)) return
      if (!this.isAllow) {
        return this.$vux.toast.text('请先同意免责声明!')
      }
      this._onSure()
    },
    async _onSure () {
      let params = {
        creditId: this.id,
        amount: this.money,
        creditDate: this.time
      }
      getSureCredit(params).then(({ data: { code, data = {}, msg } }) => {
        if (code === 1) {
          this.$router.push('/result?type=success')
        }
      }).catch((error) => {
        console.log(error)
      })
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
  .show {
    white-space: pre-wrap;
  }
}
</style>
