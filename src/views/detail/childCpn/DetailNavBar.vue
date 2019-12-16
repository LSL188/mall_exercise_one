<template>
  <div>
    <nav-bar>
      <div slot="left" class="back" @click="back">
        <img src="~assets/img/common/back.svg" alt="" />
      </div>
      <div slot="middle" class="title">
        <div
          v-for="(item, i) in title"
          :key="i"
          class="title-item"
          @click="titleClick(i)"
          :class="{ active: currentIndex === i }"
        >
          {{ item }}
        </div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navBar/NavBar";
export default {
  data() {
    return {
      title: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0
    };
  },
  components: {
    NavBar
  },
  methods: {
    titleClick(index) {
      this.currentIndex = index;
    },
    back() {
      this.$router.go(-1);
    }
  }
};
</script>

<style scoped lang="less">
.back {
  img {
    margin-top: 10px;
  }
}

.title {
  display: flex;
  font-size: 12px;
  .title-item {
    flex: 1;
  }
}

.active {
  color: @navColor;
}
</style>
