<template>
  <div class="user">
    <com-header title="我的" >
      <router-link to="/notice"><i class="icon-notice"/></router-link>
    </com-header>
    <c-top
      :userPerson="data.userPerson"
      :bannerList="data.bannerList"
    />
    <c-cell
      :userPerson="data.userPerson"
      :bannerList="data.bannerList"
    />
  </div>
</template>
<script>
  import comHeader from '@/components/header/header'
  import cTop from './components/top'
  import cCell from './components/cell'
  import { getData } from '@/api/user'
  export default {
    name: 'user',
    components: {
      cTop,
      comHeader,
      cCell
    },
    data () {
      return {
        data: {}
      }
    },
    beforeMount () {
      this._onData()
    },
    methods: {
      async _onData () {
        getData().then(({ data: { code, data = {}, msg } }) => {
          if (code === 1) {
            this.data = data
          }
        }).catch((error) => {
          console.log(error)
        })
      }
    }
  }
</script>

<style lang="less">
  .user {
    .icon-notice {
      width: 15px;
      height: 18px;
      display: inline-block;
      background: url(../../assets/images/user_notice.png) no-repeat center;
      background-size: cover;
    }
  }
</style>
