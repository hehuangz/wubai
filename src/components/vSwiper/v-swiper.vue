<template>
  <div class="c-swiper">
    <swiper auto loop :aspect-ratio="300/800">
      <swiper-item class="item" v-for="(item) in bannerList" :key="item.id" show-dot>
        <router-link :to="item.pointUrl">
          <img :src="item.picUrl" alt="">
        </router-link>
      </swiper-item>
    </swiper>
    <swiper auto loop height="42px" direction="vertical" :interval=2000 :show-dots="false" v-if="broadcastList.length">
      <swiper-item v-for="(item) in broadcastList" :key="item.id">
        <div class="g-width g-pd-tb-10 g-pd-lr-20 g-bs-bb g-flex g-ai-c">
          <i class="icon-notice g-m-r-10" />
          <span class="g-c-666666">{{item.content}}</span>
        </div>
      </swiper-item>
    </swiper>
  </div>
</template>
<script>
  export default {
    name: 'cSwiper',
    props: {
      bannerList: {
        type: Array,
        default () {
          return []
        }
      },
      broadcastList: {
        type: Array,
        default () {
          return []
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  .c-swiper {
    width: 100%;
    height: auto;
    img {
      width: 100%;
      height: auto;
    }
    .icon-notice {
      display: block;
      width: 22px;
      height: 22px;
      background: url(../../assets/images/icon_notice.png) no-repeat center;
      background-size: 100%;
    }
  }
</style>
