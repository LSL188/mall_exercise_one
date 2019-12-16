<template>
  <div>
    <swiper class="swiper-box">
      <swiper-item v-for="(item, i) in topImgs" :key="i">
        <img :src="item" alt="" />
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper";
export default {
  data() {
    return {};
  },
  props: {
    topImgs: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  components: {
    Swiper,
    SwiperItem
  }
};
</script>

<style scoped lang="less">
.swiper-box {
  height: 300px;
}
</style>
