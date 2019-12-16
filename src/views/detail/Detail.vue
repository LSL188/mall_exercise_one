<template>
  <div>
    <detail-nav-bar></detail-nav-bar>
    <detail-swiper :top-imgs="topImages"></detail-swiper>
  </div>
</template>

<script>
import DetailNavBar from "./childCpn/DetailNavBar";
import DetailSwiper from "./childCpn/DetailSwiper";

import { getDetailData } from "network/detail";
export default {
  name: "Detail",
  data() {
    return {
      iid: null,
      topImages: []
    };
  },
  created() {
    this.iid = this.$route.params.iid;
    this._getDetailData();
  },
  components: {
    DetailNavBar,
    DetailSwiper
  },
  methods: {
    _getDetailData() {
      getDetailData(this.iid).then(res => {
        console.log(res);
        this.topImages = res.result.itemInfo.topImages;
      });
    }
  }
};
</script>
