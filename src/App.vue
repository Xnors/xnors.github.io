<script setup>
import Home from './views/Home.vue'
import About from './views/About.vue';
</script>

<template>
  <div class="home">
    <Home />
  </div>
  <!-- <div class="home2">
    <About />
  </div> -->

  <!-- <div class="home">
    <Home />
  </div>
  <div class="home2"> 
    <Home />
  </div> -->
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}

.home {
  background-color: #090b0d;
  height: auto;
}

.home2 {
  background-color: #fcfcfc;
  height: auto;
}

</style>