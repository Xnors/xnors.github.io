<script setup>
import Home from './views/Home.vue'
</script>

<template>

  <div class="home">
    <Home />
  </div>
  <!-- <div class="home2">
    <Home />
  </div>
  <div class="home">
    <Home />
  </div>
  <div class="home2">
    <Home />
  </div> -->
</template>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
}

.home {
  min-height: 120vh;
  min-width: 100vw;
  background-color: #000;
  // scroll-snap-align: start; // 子元素滚动吸附到开始位置
}

.home2 {
  min-height: 120vh;
  min-width: 100vw;
  background-color: #ffffff;
  // scroll-snap-align: start; // 子元素滚动吸附到开始位置
}
</style>