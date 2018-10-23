<template>
  <div class="detail">
    <com-header title="产品详情"/>
    <c-top
      :appName="detail.appName"
      :subTitle="detail.subTitle"
      :appIconUrl="detail.appIconUrl"
      :sucessPayTime="detail.sucessPayTime"
    />
    <c-table
      :id="detail.id"
      :state="detail.state"
      :creditMinLimit="detail.creditMinLimit"
      :creditMaxLimit="detail.creditMaxLimit"
      :creditMinTerm="detail.creditMinTerm"
      :creditMaxTerm="detail.creditMaxTerm"
      :dayInterest="detail.dayInterest"
      :applyCondition="detail.titemAttach && detail.titemAttach.applyCondition && detail.titemAttach.applyCondition.split(' ')"
      :requestMaterial="detail.titemAttach && detail.titemAttach.requestMaterial"
      :platformDesc="detail.titemAttach && detail.titemAttach.platformDesc"
    />
  </div>
</template>
<script>
  import { getDataDetail, getSureCredit } from '@/api/wages'
  import comHeader from '@/components/header/header'
  import cTop from './components/top'
  import cTable from './components/table'
  // 上拉加载，下拉刷新以及保存上次浏览位置，之后使用vue-scroll实现
  export default {
    name: 'wagesDetail',
    components: {
      comHeader,
      cTop,
      cTable
    },
    data () {
      return {
        detail: {},
        isAllow: true,
        id: null
      }
    },
    beforeMount () {
      this.id = this.$route.query.id || 17
      this._onData()
    },
    methods: {
      async _onData () {
        let params = {
          id: this.id
        }
        getDataDetail(params).then(({ data: { code, data = {}, msg } }) => {
          if (code === 1) {
            this.detail = data
          }
        }).catch((error) => {
          console.log(error)
        })
      }
    }
  }
</script>
<style lang="less">
  .home {
  }
</style>
