<template>
  <div class="vip">
    <com-header title="购买会员" />
    <swiper auto loop :aspect-ratio="250/800" :show-dots="false" class="g-m-tb-10">
      <swiper-item class="img" v-for="(item) in bannerList" :key="item.id">
        <router-link :to="item.pointUrl">
          <img :src="item.picUrl" alt="">
        </router-link>
      </swiper-item>
    </swiper>
    <c-month
      :list="vipPrices"
      :current="current"
      @onCurrent="handleCurrent"
    />
    <group>
      <radio
        v-model="currentAccount"
        :options="account"
        :selected-label-style="{color: '#FF9900'}"
        @on-change="handleWay"
      ></radio>
    </group>
    <div class="g-pd-15 g-bs-bb g-bg-white g-m-b-10">
      <p class="g-fs-16 g-c-666666">温馨提示:</p>
      <p class="show g-fs-14 g-c-a0a0a0">在线支付成功后，服务自动开通。服务一经开通，不予退还，敬请谅解</p>
    </div>
    <!-- 8个权益icon -->
    <c-group />

    <div class="bottom g-bg-white g-flex g-jc-sb g-ai-c g-border-t-gray">
      <p class="g-m-l-15 g-c-a0a0a0 g-flex g-ai-c">
        <input
          type="checkbox"
          v-model="isAllow"
          style="width: 16px;height: 16px"
        />
        <span>我已经阅读并同意</span>
        <span class="g-c-orange">《会员服务协议》</span>
      </p>
      <button class="g-btn-orange-m" @click="handleOpen">确认开通</button>
    </div>
  </div>
</template>

<script>
import Debounce from '@/util/debounce'
import comHeader from '@/components/header/header'
import cMonth from './components/month'
import cGroup from './components/group'
import { getData, getOpenVip } from '@/api/vip'
export default {
  name: 'vip',
  components: {
    comHeader,
    cMonth,
    cGroup
  },
  data () {
    return {
      bannerList: [],
      vipPrices: [],
      current: 0,
      id: null,
      account: [
        {key: '1', value: '支付宝'},
        {key: '2', value: '微信'}
      ],
      currentAccount: '1',
      isAllow: false
    }
  },
  beforeMount () {
    this._onData()
  },
  methods: {
    async _onData () {
      getData().then(({data: {code, data = {}, msg}}) => {
        if (code === 1) {
          if (data.bannerList && data.bannerList.length) {
            this.bannerList = data.bannerList
          }
          if (data.vipPrices && data.vipPrices.length) {
            this.vipPrices = data.vipPrices
            this.id = data.vipPrices[0].id
          }
        }
      }).catch((error) => {
        console.log(error)
      })
    },
    handleCurrent (index, id) {
      this.current = index
      this.id = id
    },
    handleWay () {

    },
    handleOpen () {
      if (!this.isAllow) {
        return this.$vux.toast.text('请先同意会员服务协议!')
      }
      let params = {
        id: this.id
      }
      console.log(params)
      getOpenVip(params).then(({data: {code, data = {}, msg}}) => {
        if (code === 1) {
          this.$vux.toast.text('成功开通!')
          this.$router.push('/user')
        }
      }).catch((error) => {
        console.log(error)
      })
    }
  }
}
</script>

<style lang="less">
.vip {
  .img {
    width: 100%;
    height: auto;
    img {
      width: 100%;
      height: auto;
      display: block;
    }
  }
  /deep/ .weui-cells {
    margin-top: 0px;
  }
  .weui-cells_radio .weui-check:checked + .weui-icon-checked:before {
    color: #ffaa22;
  }
  .bottom {
    width: 100%;
    height: 44px;
    position: fixed;
    bottom: 0;
    left: 0;
  }
}

</style>
