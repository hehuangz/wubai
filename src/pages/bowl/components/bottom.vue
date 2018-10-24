<template>
  <div class="bottom g-bg-white">
    <div class="g-pd-tb-10 g-m-t-10 g-width g-bg-white g-flex g-jc-c g-fw-w">
      <button
        v-if="Number(state)"
        class="g-btn-orange-l"
        @click="handleGo"
      >立即投资</button>
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
import {getSureFinance} from '@/api/bowl'
export default {
  name: 'cBottom',
  props: ['state', 'id'],
  data () {
    return {
      isAllow: true
    }
  },
  methods: {
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
      getSureFinance(params).then(({ data: { code, data = {}, msg } }) => {
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
.bottom {
}
</style>
