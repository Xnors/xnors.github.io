<script>
import About from "./About.vue";

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
      let scrollTop = document.documentElement.scrollTop + 60;
      // 当页面滑动的距离大于页面高度时元素显示，否则不显示
      if (scrollTop >= this.pageHeight - window.innerHeight) {
        this.nav_show = true;
      } else {
        this.nav_show = false;
      }
    },
  },
  components: {
    About,
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
  <img
    src="../assets/svgs/LT-logo-name.svg"
    class="左上logo"
    alt=""
    style="height: 80%; width: 80%"
  />
  <img src="../assets/svgs/line.svg" class="分割线" alt="" />
  <div class="set-center">
    <img
      class="logo"
      src="../assets/svgs/CENTER-logo-name-motto.svg"
      style="width: 100%; height: 100%"
      alt=""
    />

    <div class="aboutus">
      <p href="/about">Know More<br />↓</p>
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
  </div>
</template>

<style type="text/scss" scoped>
@import url("../styles/home.scss");
@import url("../styles/bootstrap.css");
</style>
