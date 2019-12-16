<template>
  <div id="app">
    <main-tab-bar></main-tab-bar>
    <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import MainTabBar from "components/content/mainTabBar/MainTabBar";
export default {
  components: {
    MainTabBar
  }
};
</script>

<style lang="less" scoped>
@import "./assets/css/base.css";
</style>
