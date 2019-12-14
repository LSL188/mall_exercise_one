<template>
  <div class="goodslist">
    <!-- {{ goodslists }} -->
    <goods-list-item v-for="(item, i) in goodslists" :key="i" :goods-item="item" class="goodslist-item"></goods-list-item>
  </div>
</template>

<script>
import GoodsListItem from './GoodsListItem'
export default {
  props: {
    goodslists: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  components: {
      GoodsListItem
  }
};
</script>

<style scoped lang="less">
.goodslist {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 5px;
    .goodslist-item {
        width: 48%;
    }
}
</style>
