<template>
   <div>
    <!-- 页面视图 -->
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <!-- 底部标签 -->
    <div style="position:relative;height:0.98rem">
      <tab-footer></tab-footer>
    </div>
  </div>
</template>
<script>
import tabFooter from '@/components/base/tabFooter'
export default {
  name: 'tabbar',
  components: {
    tabFooter
  }
}
</script>

