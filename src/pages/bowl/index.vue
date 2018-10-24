<template>
  <div class="bowl">
    <com-header title="聚宝盆" />
    <com-swiper :bannerList="bannerList"/>
    <c-step />
    <c-item
      v-for="item in list"
      :key="item.id"
      :data="item"
    />
  </div>
</template>
<script>
import comSwiper from '@/components/vSwiper/v-swiper'
import comHeader from '@/components/header/header'
import cStep from './components/step'
import cItem from './components/item'
import { getData, getListData } from '@/api/bowl'

export default {
  name: 'bowl',
  components: {
    comSwiper,
    comHeader,
    cStep,
    cItem
  },
  data () {
    return {
      bannerList: [],
      list: [],
      limit: 10,
      page: 1,
      pages: 1
    }
  },
  beforeMount () {
    this._onData()
    this._onListData()
  },
  methods: {
    async _onData () {
      // 获取banner数据
      getData().then(({ data: { code, data = {}, msg } }) => {
        if (code === 1 && data.bannerList) {
          this.bannerList = data.bannerList
        }
      }).catch((error) => {
        console.log(error)
      })
    },
    async _onListData () {
      let params = {
        limit: this.limit,
        page: this.page
      }
      getListData(params).then(({ data: { code, data = {}, msg } }) => {
        if (code === 1 && data.list) {
          this.list = data.list
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

