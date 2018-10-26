<template>
  <div class="salary g-bg-white">
    <com-header title="我的工资"/>
    <c-top :topData="topData"/>
    <!-- <group v-if="bankList && bankList.length">
      <cell
        v-for="item in bankList"
        :key="item.id"
        title="收款账户"
        :value="`${item.bankName}${item.cardNo}`"
        is-link
        link="/notice/list"
      />
    </group> -->
    <group title="收款账户" v-if="account && account.length>0">
      <radio
        v-model="currentAccount"
        :options="account"
        @on-change="change"
      ></radio>
    <cell title="重新绑定账户" is-link link="/certification/bank"/>
    </group>
    <div class="g-flex g-jc-c g-pd-tb-20">
      <button class="g-btn-orange-l" @click="handleBtn">申请发放工资</button>
    </div>
    <c-table v-if="list && list.length">
      <tr slot="header" class="g-fs-16 g-c-666666">
        <th>申请金额</th>
        <th>申请时间</th>
        <th>申请状态</th>
      </tr>
      <tr slot="content" class="g-c-a0a0a0 g-fs-16" v-for="item in list" :key="item.id">
        <td class="g-c-orange">{{item.amount}}</td>
        <td>{{item.createTime}}</td>
        <td class="g-c-666666">{{state[item.state]}}</td>
      </tr>
    </c-table>
  </div>
</template>
<script>
import comHeader from '@/components/header/header'
import { getData, getDataList, getSureSarary } from '@/api/salary'
import cTop from './components/top'
import cTable from './components/table'
export default {
  name: 'salary',
  components: {
    comHeader,
    cTop,
    cTable
  },
  data () {
    return {
      topData: {},
      // bankList: [],
      list: [],
      limit: 10,
      page: 1,
      account: [],
      currentAccount: '',
      state: {
        '0': '提现申请中',
        '1': '提现中',
        '2': '提现成功',
        '3': '提现失败'
      }
    }
  },
  beforeMount () {
    this._onData()
    this._onDataList()
  },
  methods: {
    async _onData () {
      getData().then(({ data: { code, data, msg } }) => {
        if (code === 1 && data) {
          this.topData = data
          if (data.bankList && data.bankList.length > 0) {
            this.account = []
            data.bankList.forEach((item, index) => {
              if (index === 0) {
                this.currentAccount = item.id
              }
              let val = this.$utils.formatStr(item.cardNo)
              let obj = {key: item.id, value: `${item.bankName}${val}`}
              this.account.push(obj)
            })
            // this.bankList = data.bankList
            // this.bankList.forEach(item => {
            //   item.cardNo = this.$utils.formatStr(item.cardNo)
            // })
          }
        }
      }).catch((error) => {
        console.log(error)
      })
    },
    async _onDataList () {
      let params = {
        limit: this.limit,
        page: this.page
      }
      getDataList(params).then(({ data: { code, data = {}, msg } }) => {
        if (code === 1 && data.list && data.list.length) {
          this.list = data.list
        }
      }).catch((error) => {
        console.log(error)
      })
    },
    async handleBtn () {
      let params = {
        cardId: this.currentAccount
      }
      getSureSarary(params).then(({ data: { code, data, msg } }) => {
        if (code === 1) {
          // 申请发放工资
          this.$vux.toast.text('成功申请！')
        }
      }).catch((error) => {
        console.log(error)
      })
    },
    change (value, label) {
      this.currentAccount = value
    }
  }
}
</script>

<style lang="less" scoped>
.salary {
  /deep/ .weui-cells {
    margin-top: 0px;
  }
  /deep/ .weui-cells_radio .weui-check:checked + .weui-icon-checked:before {
    color: #ffaa22;
  }
}
</style>


