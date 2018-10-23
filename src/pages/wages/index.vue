<template>
  <div class="home">
    <com-header title="发工资" />
    <v-swiper :bannerList="bannerList" :broadcastList="[]"/>
    <c-card
      v-for="item in list"
      :key="item.id"
      :appIconUrl="item.appIconUrl"
      :appName="item.appName"
      :shortDesc="item.shortDesc"
      :subTitle="item.subTitle"
    />
  </div>
</template>
<script>
  import cCard from './components/card'
  import { getData, getList } from '@/api/wages'
  import comHeader from '@/components/header/header'
  import vSwiper from '@/components/vSwiper/v-swiper'

  export default {
    name: 'wages',
    components: {
      cCard,
      comHeader,
      vSwiper
    },
    data () {
      return {
        bannerList: [],
        list: [],
        limit: 10,
        page: 1
      }
    },
    mounted () {
      this._onData()
      this._onListData()
    },
    methods: {
      async _onData () {
        // 获取banner数据
        getData().then(({ data: { code, data = [], msg } }) => {
          if (code === 1 && data.bannerList) {
            this.bannerList = data.bannerList
          }
        }).catch((error) => {
          console.log(error)
        })
      },
      async _onListData () {
         // 获取底下列表
        let params = {
          'limit': this.limit,
          'page': this.page
        }
        getList(params).then(({ data: { code, data = [], msg } }) => {
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
<style lang="less">
  .home {
  }
</style>
