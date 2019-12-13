<template>
  <div class="nav-bar">
    <slot name="left"></slot>
    <slot name="middle"></slot>
    <slot name="right"></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style scoped lang="less">
.nav-bar {
  height: 44px;
  display: flex;
  background-color: @navColor;
  color: #fff;
  font-size: 20px;
  justify-content: center;
  line-height: 44px;
  .left,
  .right {
    width: 60px;
  }
  .middle {
    flex: 1;
  }
}
</style>
