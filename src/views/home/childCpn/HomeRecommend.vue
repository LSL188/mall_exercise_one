<template>
  <div class="home-recommend">
    <a :href="item.link" v-for="(item, i) in recommend" :key="i">
      <img :src="item.image" alt="" />
      <p>{{ item.title }}</p>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    recommend: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>

<style scoped lang="less">
.home-recommend {
    display: flex;
    padding: 10px;
    justify-content: space-around;
    text-align: center;
    font-size: 12px;
    border-bottom: 10px solid #eee;
    img {
        width: 70px;
        height: 70px;
    }
}
</style>
