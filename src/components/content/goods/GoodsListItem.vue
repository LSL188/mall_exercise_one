<template>
  <div class="goods-item">
      <!-- {{goodsItem}} -->
    <img :src="goodsItem.show.img" alt="" @load="imgLoad"/>
    <div class="item-box">
      <p>{{ goodsItem.title }}</p>
      <span>{{ goodsItem.price }}</span>
      <span>{{ goodsItem.cfav }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  methods: {
    imgLoad() {
      // console.log('img')
      this.$bus.$emit('imgLoad')
    }
  }
};
</script>

<style scoped lang="less">
.goods-item {
    position: relative;
    padding-bottom: 40px;
    img {
        width: 100%;
        border-radius: 5px
    }
    .item-box {
        position: absolute;
        bottom: 5px;
        left: 0;
        right: 0;
        text-align: center;
        font-size: 12px;
        overflow: hidden;
    }
    p {
        overflow: hidden;
        text-overflow: ellipsis;
        margin-bottom: 3px;
        white-space: nowrap;
    }
    span {
        margin: 0 5px;
    }
}
</style>
