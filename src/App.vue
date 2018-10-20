<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
    <offline v-show="isOffline" @online="onlineFn"></offline>
  </div>
</template>

<script>
import { Button } from 'mint-ui'
import offline from './pages/offline/index'
export default {
  name: 'app',
  data () {
    return {
      isOffline: false
    }
  },
  created () {
    window.addEventListener('load', () => {
      window.addEventListener('online', () => {
        this.isOffline = false
      })
      window.addEventListener('offline', () => {
        this.isOffline = true
      })
    })
  },
  computed: {
  },
  methods: {
    onlineFn () {
      this.isOffline = false
    }
  },
  components: {
    offline
  }
}
</script>

<style lang="less">
@import "~vux/src/styles/reset.less";

body {
  background-color: #fcfcfc;
  // background-color: #fbf9fe;
}
.vux-popup-dialog {
  overflow-y: auto;
}

</style>
