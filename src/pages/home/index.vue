<template>
  <div class="home g-flex g-fd-c g-ai-c">
    <com-header title="超市" />
    <c-swiper :bannerList="bannerList" :broadcastList="broadcastList"/>
    <div class="g-width g-flex g-jc-sb g-fw-w g-bg-white g-pd-tb-30">
      <div style="height: 38px" class="g-1of2 g-flex g-ai-c g-jc-c">
        <i class="icon-common icon-credit g-m-r-10" />
        <span class="g-c-666666 g-fs-16">最高10万</span>
      </div>
      <div style="height: 38px" class="g-1of2 g-flex g-ai-c g-jc-c">
        <i class="icon-common icon-qa g-m-r-10"/>
        <span class="g-c-666666 g-fs-16">专属客服</span>
      </div>
      <div class="line g-full"></div>
      <div style="height: 38px" class="g-1of2 g-flex g-ai-c g-jc-c">
        <i class="icon-common icon-money g-m-r-10"/>
        <span class="g-c-666666 g-fs-16">当天放款</span>
      </div>
      <div style="height: 38px" class="g-1of2 g-flex g-ai-c g-jc-c">
        <i class="icon-common icon-online g-m-r-10"/>
        <span class="g-c-666666 g-fs-16">在线客服</span>
      </div>
    </div>
    <router-link to="/login">
      <button class="g-btn-orange-l g-m-t-40">申请贷款</button>
    </router-link>
    <div class="g-fixed-bottom g-width g-m-tb-10 g-flex g-ai-c g-jc-c g-fs-14">
      <i class="icon-common icon-safe g-m-r-10"/>
      <span class="g-c-666666">银行级数据加密保护</span>
    </div>
  </div>
</template>
<script>
import { getData } from '@/api/home'
import Debounce from '@/util/debounce'
import cSwiper from './components/swiper'
import comHeader from '@/components/header/header'
export default {
  name: 'home',
  components: {
    cSwiper,
    comHeader
  },
  data () {
    return {
      bannerList: [],
      broadcastList: []
    }
  },
  mounted () {
    this._onData()
  },
  methods: {
    async _onData () {
      let params = {}
      getData(params).then(({ data: { code, data, msg } }) => {
        const {bannerList = [], broadcastList = []} = data
        if (code === 1) {
          this.bannerList = bannerList
          this.broadcastList = broadcastList
        } else {
          console.log(222, '!code1')
        }
      }).catch(() => {
        // console.log(333, 'catch')
      })
    }
  }
}
</script>
<style lang="less">
  .home {
    .icon-common {
      display: block;
      width: 22px;
      height: 22px;
    }
    .icon-notice {
      background: url(../../assets/images/icon_notice.png) no-repeat center;
      background-size: 100%;
    }
    .icon-credit {
      background: url(../../assets/images/icon_credit.png) no-repeat center;
      background-size: 95%;
    }
    .icon-qa {
      background: url(../../assets/images/icon_qa.png) no-repeat center;
      background-size: 110%;
    }
    .icon-money {
      background: url(../../assets/images/icon_money.png) no-repeat center;
      background-size: 100%;
    }
    .icon-online {
      background: url(../../assets/images/icon_online.png) no-repeat center;
      background-size: 100%;
    }
    .icon-safe {
      background: url(../../assets/images/icon_safe.png) no-repeat center;
      background-size: 100%;
    }
    .line {
      width: 100%;
      height: 56px;
      background: url(../../assets/images/home_line.png) no-repeat center;
      background-size: 100%;
    }
  }
</style>
