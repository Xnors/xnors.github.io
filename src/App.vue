<script>
import Home from './views/Home.vue'
export default {
  components: {
    Home,
  },
}
</script>

<template>
  <div class="home">
    <Home />
  </div>
  <div class="home2">
    <Home />
  </div>
</template>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
}

.home {
  height: 100vh;
  width: 100vw;

  background-color: #000;
}

.home2 {
  height: 100vh;
  width: 100vw;

  background-color: #ffffff;
}
</style>