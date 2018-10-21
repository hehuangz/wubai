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
      <li class="loan-list-li g-bs" v-for="item in posts.list">
        <div class="left-text">
          <div class="title space_ellipsis">{{item.title}}</div>
          <div class="content">{{item.content}}</div>
        </div>
        <div class="right-img">
          <img class="img" v-lazy="item.image" alt="">
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
  import comHeader from '@/components/header/header'
  import vSwiper from '@/components/vSwiper/v-swiper'

  export default {
    name: 'consult',
    components: {comHeader, vSwiper},
    data () {
      return {
        bannerList: [
          {
            "id": 60,
            "subTitle": "获得授",
            "titleDesc": "撒大苏打",
            "pointUrl": "http://gateway.51buding.cn/Api-App/page/generalize?source",
            "picUrl": "http://pcxmz350k.bkt.clouddn.com/banner/1534738122808.png",
            "created": "2018-08-20 12:08:44",
            "updated": "2018-09-23 20:14:04",
            "bannerType": 3
          }
        ],
        broadcastList: [
          {
            "id": 59,
            "bizType": "2",
            "content": "183****9632 成功借款1200",
            "bizStatus": 0,
            "createdAt": "2018-07-09 21:02:00",
            "createdBy": "sys",
            "updatedAt": "2018-09-24 19:20:55",
            "updatedBy": "123456"
          }
        ],
        cards: [
          {icon: require('@/assets/images/icon-expert.png'), name: '快速贷款', info: '额度高，速度快'},
          {icon: require('@/assets/images/icon-loan.png'), name: '理财专家', info: '月入过万不是梦'}
        ],
        posts: {
          pageNum: 1,
          pageSize: 10,
          total: 2,
          pages: 1,
          list: [
            {
              "id": 2,
              "userId": 8,
              "userName": "18357250336",
              "title": "我是标题我是标题我是标题我是标题我是标题我是标题",
              "content": "我是正文我是正文我是正文我是正文我是正文我是正文我是正文我是正文我是正文我是正文我是正文我是正文我是正文我是正文我是正文我是正文我是正文我是正文",
              "image": "http://pcxmz350k.bkt.clouddn.com/user/post/1537797200116.png",
              "createTime": "2018-09-24 21:53:20",
              "orderIndex": 0,
              "state": 1
            },
            {
              "id": 2,
              "userId": 8,
              "userName": "18357250336",
              "title": "我是标题",
              "content": "我是正文我是正文我是正文我是正文我是正文我是正文我是正文我是正文我是正文我是正文我是正文我是正文我是正文我是正文我是正文我是正文我是正文我是正文",
              "image": "http://pcxmz350k.bkt.clouddn.com/user/post/1537797200116.png",
              "createTime": "2018-09-24 21:53:20",
              "orderIndex": 0,
              "state": 1
            },
            {
              "id": 2,
              "userId": 8,
              "userName": "18357250336",
              "title": "我是标题",
              "content": "我是正文我是正文我是正文我是正文我是正文我是正文我是正文我是正文我是正文我是正文我是正文我是正文我是正文我是正文我是正文我是正文我是正文我是正文",
              "image": "http://pcxmz350k.bkt.clouddn.com/user/post/1537797200116.png",
              "createTime": "2018-09-24 21:53:20",
              "orderIndex": 0,
              "state": 1
            },
            {
              "id": 2,
              "userId": 8,
              "userName": "18357250336",
              "title": "我是标题",
              "content": "我是正文我是正文我是正文我是正文我是正文我是正文我是正文我是正文我是正文我是正文我是正文我是正文我是正文我是正文我是正文我是正文我是正文我是正文",
              "image": "http://pcxmz350k.bkt.clouddn.com/user/post/1537797200116.png",
              "createTime": "2018-09-24 21:53:20",
              "orderIndex": 0,
              "state": 1
            },
            {
              "id": 2,
              "userId": 8,
              "userName": "18357250336",
              "title": "我是标题",
              "content": "我是正文我是正文我是正文我是正文我是正文我是正文我是正文我是正文我是正文我是正文我是正文我是正文我是正文我是正文我是正文我是正文我是正文我是正文",
              "image": "http://pcxmz350k.bkt.clouddn.com/user/post/1537797200116.png",
              "createTime": "2018-09-24 21:53:20",
              "orderIndex": 0,
              "state": 1
            },
            {
              "id": 2,
              "userId": 8,
              "userName": "18357250336",
              "title": "我是标题",
              "content": "我是正文我是正文我是正文我是正文我是正文我是正文我是正文我是正文我是正文我是正文我是正文我是正文我是正文我是正文我是正文我是正文我是正文我是正文",
              "image": "http://pcxmz350k.bkt.clouddn.com/user/post/1537797200116.png",
              "createTime": "2018-09-24 21:53:20",
              "orderIndex": 0,
              "state": 1
            },
            {
              "id": 2,
              "userId": 8,
              "userName": "18357250336",
              "title": "我是标题",
              "content": "我是正文我是正文我是正文我是正文我是正文我是正文我是正文我是正文我是正文我是正文我是正文我是正文我是正文我是正文我是正文我是正文我是正文我是正文",
              "image": "http://pcxmz350k.bkt.clouddn.com/user/post/1537797200116.png",
              "createTime": "2018-09-24 21:53:20",
              "orderIndex": 0,
              "state": 1
            }
          ],
          isFirstPage: true,
          isLastPage: true,
          hasPreviousPage: false,
          hasNextPage: false
        }
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
          .img {
            width: 128/50rem;
            height: 84/50rem;
          }
        }
      }
    }
  }
</style>

