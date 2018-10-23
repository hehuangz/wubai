<template>
  <div class="home"
    v-infinite-scroll="loadMore"
    infinite-scroll-disabled="loading"
    infinite-scroll-distance="10">
    <com-header title="发工资" />
    <v-swiper :bannerList="bannerList" :broadcastList="[]"/>
    <c-card
      v-for="item in list"
      :key="item.id"
      :id="item.id"
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
  // 上拉加载，下拉刷新以及保存上次浏览位置，之后使用vue-scroll实现
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
        page: 1,
        pages: 1 // 总页数
      }
    },
    beforeMount () {
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
        console.log('loadingLists')
         // 获取底下列表
        let params = {
          'limit': this.limit,
          'page': this.page
        }
        getList(params).then(({ data: { code, data = [], msg } }) => {
          if (code === 1 && data.list) {
            this.list = data.list
            this.pages = data.pages
          }
        }).catch((error) => {
          console.log(error)
        })
      },
      loadMore () {
        if (this.pages > this.page) {
          this.loading = true
          this.page = this.page + 1
          setTimeout(() => {
            let params = {
              'limit': this.limit,
              'page': this.page
            }
            getList(params).then(({ data: { code, data = [], msg } }) => {
              if (code === 1) {
                this.list.push(data.list)
              }
            }).catch((error) => {
              console.log(error)
            })
            this.loading = false
          }, 2500)
        } else {
          console.log('没有更多数据')
        }
      }
    }
  }
</script>
<style lang="less">
  .home {
  }
</style>
