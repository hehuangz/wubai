<template>
  <div class="my-post">
    <com-header title="每日帖子" />
    <ul class="my-post-ul">
      <li class="my-post-li g-bs" v-for="item in myPost.list">
        <img class="left-img" v-lazy="item.image" />
        <div class="right-text">
          <div class="g-width">
            <div class="title space_ellipsis">{{item.title}}</div>
            <div class="createTime">{{item.createTime}}</div>
          </div>
        </div>
      </li>
    </ul>
    <div class="g-fixed-bottom g-width g-m-tb-10 g-flex g-ai-c g-jc-c g-fs-14">
      <button class="g-btn-orange-l" @click="$router.push({name: 'new-post'})">新建帖子</button>
    </div>
  </div>
</template>

<script>
  import comHeader from '@/components/header/header'

  export default {
    name: 'mt-post',
    components: {comHeader},
    data () {
      return {
        myPost: {
          "pageNum": 1,
          "pageSize": 10,
          "total": 2,
          "pages": 1,
          "list": [
            {
              "id": 2,
              "userId": 8,
              "userName": "18357250336",
              "title": "我是标题",
              "content": "我是正文",
              "image": "http://pcxmz350k.bkt.clouddn.com/user/post/1537797200116.png",
              "createTime": "2018-09-24 21:53:20",
              "orderIndex": 0,
              "state": 1
            },
            {
              "id": 2,
              "userId": 8,
              "userName": "18357250336",
              "title": "我是标题我是标题我是标题我是标题我是标题",
              "content": "我是正文",
              "image": "http://pcxmz350k.bkt.clouddn.com/user/post/1537797200116.png",
              "createTime": "2018-09-24 21:53:20",
              "orderIndex": 0,
              "state": 1
            }
          ],
          "isFirstPage": true,
          "isLastPage": true,
          "hasPreviousPage": false,
          "hasNextPage": false
        }
      }
    }
  }
</script>

<style scoped lang="less">
  .my-post {
    height: 100%;
    color: #999;
    .my-post-ul {
      width: 100%;
      .my-post-li {
        display: flex;
        justify-content: space-between;
        padding: 0 .14rem;
        box-sizing: border-box;
        width: 100%;
        height: 1.6rem;
        margin: 10px 0;
        background-color: #fff;
        .left-img {
          width: 2.56rem;
          height: 1.58rem;
        }
        .right-text {
          display: flex;
          align-items: center;
          width: 60%;
          .title {
            font-size: .3rem;
            color: #666;
            font-weight: bold;
          }
          .createTime {
            font-size: .28rem;
          }
        }
      }
    }
  }
</style>
