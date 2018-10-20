<template>
  <div class="user">
    <com-header title="我的" />
    user
    <c-content />
  </div>
</template>
<script>
import comHeader from '@/components/header/header'
import cContent from './components/content'
export default {
  name: 'user',
  components: {
    cContent,
    comHeader
  }
}
</script>

<style lang="less">
.user {

}
</style>
