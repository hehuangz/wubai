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
      :creditMinLimit="detail.creditMinLimit"
      :creditMaxLimit="detail.creditMaxLimit"
      :creditMinTerm="detail.creditMinTerm"
      :creditMaxTerm="detail.creditMaxTerm"
      :dayInterest="detail.dayInterest"
      :applyCondition="detail.titemAttach && detail.titemAttach.applyCondition && detail.titemAttach.applyCondition.split(' ')"
      :requestMaterial="detail.titemAttach && detail.titemAttach.requestMaterial"
      :platformDesc="detail.titemAttach && detail.titemAttach.platformDesc"
    />
    <div class="g-pd-tb-10 g-m-t-10 g-width g-bg-white g-flex g-jc-c g-fw-w">
      <button class="g-btn-orange-l" @click="handleGo">立即贷款</button>
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
      },
      handleGo () {
        if (!this.isAllow) {
          return this.$vux.toast.text('请先同意免责声明!')
        }
        this._onSure()
      },
      async _onSure () {
        let params = {
          creditId: this.id
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
<style lang="less">
  .home {
  }
</style>
