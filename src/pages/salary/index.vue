<template>
  <div class="salary g-bg-white">
    <com-header title="我的工资"/>
    <c-top :topData="topData"/>
    <group v-if="bankList && bankList.length">
      <cell
        v-for="item in bankList"
        :key="item.id"
        title="收款账户"
        :value="`${item.bankName}${item.cardNo}`"
        is-link
        link="/notice/list"
      />
    </group>
    <div class="g-flex g-jc-c g-m-tb-20">
      <button class="g-btn-orange-l" @click="handleBtn">申请发放工资</button>
    </div>
    <c-table :list="list"/>
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
      bankList: [],
      list: [],
      limit: 10,
      page: 1
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
            this.bankList = data.bankList
            this.bankList.forEach(item => {
              item.cardNo = this.$utils.formatStr(item.cardNo)
            })
            console.log(this.bankList)
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
        if (code === 1 && data && data.list) {
          this.list = data.list
        }
      }).catch((error) => {
        console.log(error)
      })
    },
    async handleBtn () {
      getSureSarary().then(({ data: { code, data, msg } }) => {
        if (code === 1 && data) {

        }
      }).catch((error) => {
        console.log(error)
      })
    }
  }
}
</script>

<style lang="less" scoped>
.salary {
  /deep/ .weui-cells {
    margin-top: 0px;
  }
}
</style>


