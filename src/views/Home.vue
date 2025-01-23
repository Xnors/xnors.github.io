<script setup>
import useCursor from "../scripts/cursor.js"
import BigLogo from "../components/BigLogo.vue";
import Intro from "../components/Intro.vue";
import Empty from "../components/Empty.vue";
import SideBar from "../components/SideBar.vue";
// import Members from '../components/Members.vue';

const { cursor } = useCursor();
</script>

<template>
  <div class="home">
    <div ref="cursor" class="cursor"></div>
    <div class="top"></div> 

    <SideBar style="max-width: 100vw" />

    <BigLogo style="position: fixed" />
    <Empty height_vh="100" />
    <Intro style="z-index: 999" />
    <Members />
    <!-- <section>Hi0</section>
    <section>Hi1</section>
    <section>Hi2</section>
    <section>Hi3</section>
    <section>Hi4</section> -->
  </div>
</template>

<style type="text/scss" lang="scss">
@import url("../styles/cursor.scss");

.top {
  width: 100%;
  height: 12vh;
  background-image: linear-gradient(to bottom, #000000, #00000000);
  position: fixed;
}
.home {
  min-height: 100vh;
}
section {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 5rem;
  text-align: center;
  position: relative;
  z-index: 1;
  background-image: linear-gradient(to bottom, #0000002a, #000000ff),
    url("../assets/bg.jpg");
  // background-blend-mode: multiply;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
