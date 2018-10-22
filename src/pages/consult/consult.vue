<template>
  <div class="consult">
    <com-header title="每日帖子" />
    <v-swiper :bannerList="bannerList" :broadcastList="broadcastList" />
    <ul class="card-ul">
      <li class="card-li g-bs" v-for="item in cards" :key="item.name">
        <div class="card">
          <img class="left-icon" :src="item.icon" />
          <div class="right-desc">
            <div class="name">{{item.name}}</div>
            <div class="info">{{item.info}}</div>
          </div>
        </div>
      </li>
    </ul>
    <ul class="loan-list-ul">
      <li class="loan-list-li g-bs" v-for="item in posts.list" :key="item.id">
        <div class="left-text">
          <div class="title space_ellipsis">{{item.title}}</div>
          <div class="content">{{item.content}}</div>
        </div>
        <div class="right-img">
          <div></div>
          <img class="img" v-lazy="item.image" alt="">
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
  import {getBannerData, getConsultData} from '@/api/posts'
  import comHeader from '@/components/header/header'
  import vSwiper from '@/components/vSwiper/v-swiper'

  export default {
    name: 'consult',
    components: {comHeader, vSwiper},
    data () {
      return {
        bannerList: [],
        broadcastList: [],
        cards: [
          {icon: require('@/assets/images/icon-expert.png'), name: '快速贷款', info: '额度高，速度快'},
          {icon: require('@/assets/images/icon-loan.png'), name: '理财专家', info: '月入过万不是梦'}
        ],
        posts: {
          limit: 10,
          page: 1,
          list: []
        }
      }
    },
    mounted () {
      this._onConsultData()
      this._onData()
    },
    methods: {
      async _onConsultData () {
        let param = {limit: this.posts.limit, page: this.posts.page}
        getConsultData(param).then(({data: {code, data, msg}}) => {
          const {list = []} = data
          if (code === 1) {
            this.posts.list = list
          }
        }).catch((error) => {
          console.log(error)
        })
      },
      async _onData () {
        let params = {}
        getBannerData(params).then(({data: {code, data, msg}}) => {
          const {bannerList = [], broadcastList = []} = data
          if (code === 1) {
            this.bannerList = bannerList
            this.broadcastList = broadcastList
          }
        }).catch((error) => {
          console.log(error)
        })
      }
    }
  }
</script>
<style scoped lang="less">
  .consult {
    width: 100%;
    height: auto;
    color: #999;
    .card-ul {
      display: flex;
      justify-content: space-between;
      padding: 0 30/50rem;
      .card-li {
        display: flex;
        align-items: center;
        width: 150/50rem;
        height: 90/50rem;
        border-radius: 4px;
        background-color: #fff;
        .card {
          display: flex;
          align-items: center;
          width: 100%;
          height: 46/50rem;
          .left-icon {
            width: 24/50rem;
            height: 24/50rem;
            margin: 0 7/50rem 0 15/50rem;
          }
          .right-desc {
            display: flex;
            flex-wrap: wrap;
            align-content: space-between;
            height: 100%;
            .name {
              flex: 0 0 100%;
              font-size: 15/50rem;
              font-weight: 600;
              color: #666;
            }
            .info {
              flex: 0 0 100%;
              font-size: 14px;
            }
          }
        }
      }
    }
    .loan-list-ul {
      width: 100%;
      .loan-list-li {
        display: flex;
        justify-content: space-between;
        width: 100%;
        height: 110/50rem;
        padding: 10/50rem 22/50rem;
        margin: 10/50rem 0;
        box-sizing: border-box;
        overflow: hidden;
        background: #fff;
        .left-text {
          width: 60%;
          overflow: hidden;
          margin-right: 32/50rem;
          .title {
            width: 100%;
            font-size: 15/50rem;
            color: #666;
            font-weight: bold;
          }
          .content {
            font-size: 14/50rem;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 3;
            overflow: hidden;
          }
        }
        .right-img {
          width: 128/50rem;
          height: 84/50rem;
          overflow: hidden;
          .img {
            width: 100%;
            height: auto;
          }
        }
      }
    }
  }
</style>

