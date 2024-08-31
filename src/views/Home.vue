<script>
import About from "./About.vue";
import AboutNext from "./Projects.vue";

export default {
  name: "Home",
  data() {
    return {
      nav_show: false,
    };
  },

  methods: {
    handleScroll() {
      // 获取页面高度
      this.pageHeight = document.documentElement.scrollHeight;
      // 页面滑动的距离
      let scrollTop = document.documentElement.scrollTop + 76;
      // 当页面滑动的距离大于页面高度时元素显示，否则不显示
      if (scrollTop >= this.pageHeight - window.innerHeight) {
        this.nav_show = true;
      } /* else {
        this.nav_show = false;
      } */

      // 当滚动到顶部时，元素不显示
      if (scrollTop <= 0) {
        this.nav_show = false;
      }
    },
  },
  components: {
    About,
    AboutNext,
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  // 组件销毁前
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<template>
  <!-- SVG内容 -->
  <img src="../assets/svgs/LT-logo-name.svg" class="左上logo" alt="" style="height: 80%; width: 80%" />
  <img src="../assets/svgs/line.svg" class="分割线" alt="" />
  <div class="set-center">
    <img class="logo" src="../assets/svgs/CENTER-logo-name-motto.svg" alt="" />

    <div class="btns">
      <a href="https://github.com/orgs/Xnors/repositories">
        <img src="../assets/svgs/btns/分组 2.svg" class="btn-left">
      </a>

      <a href="https://xnors.github.io/docs/">
        <img src="../assets/svgs/btns/分组 3.svg" class="btn-right">
      </a>

    </div>

    <div class="aboutus">
      <p href="/about">↓</p>
    </div>
    <!--     <a href="https://github.com/xnors/" class="github-link">
      <img src="../assets/gh-icon-and-text.svg" alt="" />
    </a> -->
  </div>
  <br />

  <div class="home-container">
    <div class="intro" v-if="nav_show">
      <About />
    </div>
    <!--     <AboutNext /> -->
  </div>
</template>

<style type="text/scss" scoped>
@import url("../styles/home.scss");
@import url("../styles/bootstrap.css");
</style>
