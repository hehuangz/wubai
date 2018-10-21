<template>
  <div class="home">
    <com-header title="发工资" />
    <v-swiper :bannerList="bannerList" :broadcastList="[]"/>
  </div>
</template>
<script>
  import cAdviser from './components/adviser'
  import { getData } from '@/api/wages'
  import comHeader from '@/components/header/header'
  import vSwiper from '@/components/vSwiper/v-swiper'

  export default {
    name: 'wages',
    components: {
      cAdviser,
      comHeader,
      vSwiper
    },
    data () {
      return {
        bannerList: []
      }
    },
    mounted () {
      this._onData()
    },
    methods: {
      async _onData () {
        getData().then(({ data: { code, data = [], msg } }) => {
          if (code === 1 && data.bannerList) {
            this.bannerList = data.bannerList
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
    background-color: #fff;
  }
</style>
