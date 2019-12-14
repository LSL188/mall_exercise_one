<template>
  <div class="tab-control">
    <div
      class="tab-item"
      v-for="(item, i) in title"
      :key="i"
      @click="itemClick(i)"
      :class="{ active: currentIndex === i }"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentIndex: 0
    };
  },
  props: {
    title: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
      this.$emit('tabControl', index)
    }
  }
};
</script>

<style scoped lang="less">
.tab-control {
  display: flex;
  text-align: center;
  padding: 10px;
  .tab-item {
    flex: 1;
    span {
      padding: 0px 10px 8px 10px;
    }
  }
  .active {
    color: @navColor;
    span {
      border-bottom: 2px solid @navColor;
    }
  }
}
</style>
