<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  data() {
    return {
      scroll: null
    };
  },
  props: {
    probeType: {
      type: Number,
      default: 0
    }
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      probeType: this.probeType
    });

    if (this.probeType === 2 || this.probeType === 3) {
      this.scroll.on("scroll", position => {
        //   console.log(position);
        this.$emit("scroll", position);
      });
    }
  },
  methods: {
    scrollTo(x, y, time = 500) {
      this.scroll && this.scroll.scrollTo(x, y, time);
    }
  }
};
</script>

<style scoped lang="less"></style>
