<template>
  <div class="detail">
    <com-header :title="data.name" />
    <c-cell
      :name="data.name"
      :viceName="data.viceName"
      :rule="data.rule"
      :logo="data.logo"
      :planList="data.planList"
    />
    <c-bottom
      :id="data.id"
      :state="data.state"
    />
  </div>
</template>
<script>
import comHeader from '@/components/header/header'
import { getDetail } from '@/api/bowl'
import cCell from './components/cell'
import cBottom from './components/bottom'
export default {
  name: 'bowl',
  components: {
    comHeader,
    cCell,
    cBottom
  },
  data () {
    return {
      id: null,
      data: {}
    }
  },
  beforeMount () {
    this.id = this.$route.query.id || 3
    this._onData()
  },
  methods: {
    async _onData () {
      let params = {
        id: this.id
      }
      getDetail(params).then(({ data: { code, data = {}, msg } }) => {
        if (code === 1) {
          this.data = data
        }
      }).catch((error) => {
        console.log(error)
      })
    }
  }
}
</script>
<style lang="less" scoped>

</style>

