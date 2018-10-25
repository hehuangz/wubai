<template>
  <div class="top g-flex g-jc-sa g-fw-w g-width g-bs-bb g-pd-lr-15 g-pd-t-15">
    <button class="gray-item g-flex g-fw-w g-ai-c g-jc-c">
      <p class="g-width g-tc g-c-orange g-m-b-5">已发工资</p>
      <countup
        :start-val="0"
        :end-val="Number(topData.countAlready)"
        :duration="2"
      /> 元
    </button>
    <button class="gray-item g-flex g-fw-w g-ai-c g-jc-c">
      <p class="g-width g-tc g-c-orange g-m-b-5">未发工资</p>
      <countup
        :start-val="0"
        :end-val="Number(topData.notCount)"
        :duration="2"
      /> 元
    </button>
    <router-link to="/salary/profit">
      <button class="gray-item g-flex g-fw-w g-ai-c g-jc-c">
        <p class="g-width g-tc g-c-orange g-m-b-5">累计收益</p>
        <countup
          :start-val="0"
          :end-val="Number(topData.countAll)"
          :duration="2"
        /> 元
      </button>
    </router-link>
    <router-link to="/salary/profit">
      <button class="gray-item g-flex g-fw-w g-ai-c g-jc-c">
        <p class="g-width g-tc g-c-orange g-m-b-5">今日收益</p>
        <countup
          :start-val="0"
          :end-val="Number(topData.countNow)"
          :duration="2"
        /> 元
      </button>
    </router-link>
  </div>
</template>
<script>
export default {
  name: 'cTop',
  props: {
    topData: {
      type: Object,
      default: () => {
        return {}
      }
    }
  }
}
</script>

<style lang="less" scoped>
.top {
  .gray-item {
    width: 140px;
    height: 85px;
    background: #e0e0e0;
    border-radius: 5px;
    font-size: 18px;
    margin-bottom: 15px;
  }
}
</style>
