<template>
  <div class="home">
    <div>home</div>
    <c-adviser />
  </div>
</template>
<script>
  import cAdviser from './components/adviser'
  // import { queryBindAssistant } from '@/api/adviser'
  export default {
    name: 'home',
    components: {
      cAdviser
    },
    data () {
      return {
      }
    },
    mounted () {
    },
    methods: {
    }
  }
</script>
<style lang="less">
  .home {
    background-color: #fff;
  }
</style>
