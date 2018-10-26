<template>
  <div class="top">
    <div class="top g-flex g-jc-sb g-ai-c g-pd-15 g-bs-bb g-m-b-10">
      <div class="g-flex g-ai-c">
        <span class="g-fs-16 g-c-white g-m-r-10">{{userPerson.userNick}}</span>
        <i class="icon" :class="userPerson.gender !== '男'?'girl':'boy'"/>
      </div>
      <i class="grade" />
    </div>
    <v-swiper :bannerList="bannerList" :bannerHeight="200/800"/>
    <!-- <swiper auto loop :aspect-ratio="250/800" :show-dots="false">
      <swiper-item class="img" v-for="(item) in bannerList" :key="item.id">
        <router-link :to="item.pointUrl">
          <img :src="item.picUrl" alt="">
        </router-link>
      </swiper-item>
    </swiper> -->
  </div>
</template>
<script>
import vSwiper from '@/components/vSwiper/v-swiper'
export default {
  name: 'cTop',
  components: {
    vSwiper
  },
  props: {
    userPerson: {
      type: Object,
      default () {
        return {}
      }
    },
    bannerList: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>

<style lang="less" scoped>
.top {
  .top {
    width: 100%;
    height: 120px;
    background: url(../../../assets/images/bg.png) no-repeat center;
    background-size: cover;
  }
  .icon {
    width: 20px;
    height: 20px;
    display: block;
  }
  .icon.girl {
    background: url(../../../assets/images/girl.png) no-repeat center;
    background-size: cover;
  }
  .icon.boy {
    background: url(../../../assets/images/boy.png) no-repeat center;
    background-size: cover;
  }
  .grade {
    width: 26px;
    height: 26px;
    display: block;
    background: url(../../../assets/images/v.png) no-repeat center;
    background-size: cover;
  }
  .img {
    width: 100%;
    height: auto;
    img {
      width: 100%;
      height: auto;
      display: block;
    }
  }
}

</style>
