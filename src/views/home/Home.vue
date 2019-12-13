<template>
  <div class="home">
    <nav-bar>
      <div slot="middle">购物街</div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navBar/NavBar";

import { getHomeData } from "network/home.js";
export default {
  data() {
    return {};
  },
  created() {
    this._getHomeData();
  },
  components: {
    NavBar
  },
  methods: {
    _getHomeData() {
      getHomeData().then(res => {
        console.log(res);
      });
    }
  }
};
</script>

<style scoped lang="less"></style>
