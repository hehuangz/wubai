<template>
  <div class="offline">
    <div class="offline-tips">
      <i class="iconfont icon-duanwang offline-tips-icon"></i>
      <span class="offline-tips-txt">当前网络不稳定，请刷新重试</span>
      <button class="g-btn-orange-m g-m-t-30" @click="refresh">立即刷新</button>
    </div>
  </div>
</template>
<script>
export default {
  props: {},
  methods: {
    refresh () {
      if (navigator.onLine) this.$emit('online')
    }
  }
}
</script>
<style lang="less">
@r: 50rem;
@offline_bgColor: #f1f1f1; // 浮层的背景颜色
@offline_tips_btn_height: 40 / @r; // 按钮高度
@offline_tips_btn_width: 130 / @r; // 按钮宽度
@offline_tips_btn_bgColor: #FF4B2D; // 按钮的背景颜色
@offline_tips_btn_color: #fff; // 按钮的文字颜色
@offline_tips_txt_color: #3e3e3e; // 文字颜色
.offline {
  display: flex;
  align-items: center;
  justify-content: center;
  &-tips {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    &-icon.iconfont {
      margin-bottom: 32px;
      font-size: 100px;
      // background-image: url("./../assets/images/Artboard3.png");
    }
    &-btn {
      margin-top: 40px;
      color: @offline_tips_btn_color;
      width: @offline_tips_btn_width;
      height: @offline_tips_btn_height;
      background-color: @offline_tips_btn_bgColor;
    }
    &-txt {
      font-size: 14px;
      color: @offline_tips_txt_color;
    }
  }
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99999999;
  background-color: @offline_bgColor;
}
</style>

