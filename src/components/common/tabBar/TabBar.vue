<template>
  <div class="tab-bar">
    <slot></slot>
  </div>
</template>

<style scoped lang="less">
.tab-bar {
  display: flex;
  text-align: center;
  background-color: #f6f6f6;
  box-shadow: 0 -1px 1px rgba(100, 100, 100, 0.15);
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 9;
}
</style>
