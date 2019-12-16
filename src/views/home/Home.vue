<template>
  <div class="home">
    <nav-bar class="home-nav">
      <div slot="middle">购物街</div>
    </nav-bar>
    <tab-control
      :title="['流行', '新款', '精选']"
      @tabControl="homeTabClick"
      ref="tabControlOne"
      v-show="isTabFixed"
      class="tab-control-one"
    ></tab-control>
    <scroll
      class="scrollWrapper"
      ref="scroll"
      :probe-type="3"
      @scroll="wrapperScroll"
      :pull-up-load="true"
      @pullingUp="wrapperPullUp"
    >
      <home-swiper
        :banner="banners"
        @swiperImgLoad="homeSwiperImgLoad"
      ></home-swiper>
      <home-recommend :recommend="recommends"></home-recommend>
      <home-week></home-week>
      <tab-control
        :title="['流行', '新款', '精选']"
        @tabControl="homeTabClick"
        ref="tabControl"
      ></tab-control>
      <goods-list :goodslists="showGoodsType"></goods-list>
    </scroll>
    <back-top
      class="back-top"
      @click.native="backTop"
      v-show="isShowBackTop"
    ></back-top>
  </div>
</template>

<script>
import NavBar from "components/common/navBar/NavBar";

import HomeSwiper from "./childCpn/HomeSwiper";
import HomeRecommend from "./childCpn/HomeRecommend";
import HomeWeek from "./childCpn/HomeWeek";
import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/goods/GoodsList";
import Scroll from "components/common/scroll/Scroll";
import BackTop from "components/content/backtop/BackTop";

import { getHomeData, getHomeGoods } from "network/home.js";

import { debounce } from "common/utils";
export default {
  data() {
    return {
      banners: [],
      recommends: [],
      goodslist: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      currentType: "pop",
      isShowBackTop: false,
      tabOffsetTop: 0,
      isTabFixed: false,
      saveY: 0
    };
  },
  created() {
    this._getHomeData();
    this._getHomeGoods("pop");
    this._getHomeGoods("new");
    this._getHomeGoods("sell");
  },
  mounted() {
    const newRefresh = debounce(this.$refs.scroll.refresh, 1000);
    this.$bus.$on("imgLoad", () => {
      newRefresh();
    });
  },
  deactivated() {
    this.saveY = this.$refs.scroll.getScrollY();
  },
  activated() {
    this.saveY = this.$refs.scroll.scrollTo(0, this.saveY, 0);
    this.$refs.scroll.refresh();
  },
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommend,
    HomeWeek,
    TabControl,
    GoodsList,
    Scroll,
    BackTop
  },
  methods: {
    // 获取轮播图和推荐的数据
    _getHomeData() {
      getHomeData().then(res => {
        // console.log(res);
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    // 获取商品列表的数据
    _getHomeGoods(type) {
      const page = this.goodslist[type].page + 1;
      getHomeGoods(type, page).then(res => {
        // console.log(res)
        this.goodslist[type].list.push(...res.data.list);
        // console.log(this.goodslist[type].list)
        this.goodslist[type].page + 1;
        this.$refs.scroll.finishPullUp();
      });
    },
    // 点击了子组件的tabControl
    homeTabClick(index) {
      // console.log(index)
      if (index === 0) {
        this.currentType = "pop";
      } else if (index === 1) {
        this.currentType = "new";
      } else {
        this.currentType = "sell";
      }
      // console.log(this.currentType)
      this.$refs.tabControl.currentIndex = index;
      this.$refs.tabControlOne.currentIndex = index;
    },
    // 回到顶部
    backTop() {
      // console.log('11')
      this.$refs.scroll.scrollTo(0, 0);
    },
    // 显示/隐藏
    wrapperScroll(position) {
      // console.log(position)
      this.isShowBackTop = -position.y > 1000;
      this.isTabFixed = -position.y > this.tabOffsetTop;
    },
    // 上拉加载
    wrapperPullUp() {
      this._getHomeGoods(this.currentType);
    },
    // 监听轮播图图片加载完毕
    homeSwiperImgLoad() {
      // console.log(this.$refs.tabControl.$el.offsetTop)
      this.tabOffsetTop = this.$refs.tabControl.$el.offsetTop;
    }
  },
  computed: {
    showGoodsType() {
      return this.goodslist[this.currentType].list;
    }
  }
};
</script>

<style scoped lang="less">
.home {
  // padding-top: 44px;
  position: relative;
  .home-nav {
    background-color:@navColor;
    color: #fff;
    position: relative;
    z-index: 9;
  }
  .scrollWrapper {
    position: absolute;
    top: 44px;
    bottom: 49px;
  }
  .back-top {
    position: fixed;
    right: 8px;
    bottom: 55px;
  }
  .tab-control-one {
    position: relative;
    z-index: 2;
  }
}
</style>
