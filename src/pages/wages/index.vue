<template>
  <div class="home">
    <com-header title="发工资" />
    <div>home</div>
    <c-adviser />
  </div>
</template>
<script>
  import cAdviser from './components/adviser'
  import { getData } from '@/api/wages'
  import comHeader from '@/components/header/header'

  export default {
    name: 'wages',
    components: {
      cAdviser,
      comHeader
    },
    data () {
      return {
      }
    },
    mounted () {
      this._onData()
    },
    methods: {
      async _onData () {
        getData().then(({ data: { code, data, msg } }) => {
          console.log(code, data, msg)
        // if (code === 1) {
        //   console.log(111, 'code1')
        // } else {
        //   console.log(222, '!code1')
        // }
        }).catch(() => {
        // console.log(333, 'catch')
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
