<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import BigLogo from "../components/BigLogo.vue";
import Intro from "../components/Intro.vue";
import Empty from "../components/Empty.vue";
import SideBar from "../components/SideBar.vue";
// import Members from '../components/Members.vue';

const cursor = ref(null);

// 鼠标移动事件
const handleMouseMove = (e) => {
  cursor.value.style.top = `${e.pageY - 15}px`;
  cursor.value.style.left = `${e.pageX - 15}px`;
};

// 鼠标点击事件
const handleClick = () => {
  cursor.value.classList.add("expand");
  setTimeout(() => {
    cursor.value.classList.remove("expand");
  }, 400);
};

// 鼠标进入 <a> 标签时触发动画
const handleMouseEnter = (e) => {
  if (e.target.tagName === "A") {
    cursor.value.classList.add("when-meet-a");
  }
};

// 鼠标离开 <a> 标签时移除动画
const handleMouseLeave = (e) => {
  if (e.target.tagName === "A") {
    cursor.value.classList.remove("when-meet-a");
  }
};

// 在组件挂载时添加事件监听
onMounted(() => {
  document.addEventListener("mousemove", handleMouseMove);
  document.addEventListener("click", handleClick);
  document.addEventListener("mouseover", handleMouseEnter);
  document.addEventListener("mouseout", handleMouseLeave);
});

// 在组件卸载时移除事件监听
onUnmounted(() => {
  document.removeEventListener("mousemove", handleMouseMove);
  document.removeEventListener("click", handleClick);
  document.removeEventListener("mouseover", handleMouseEnter);
  document.removeEventListener("mouseout", handleMouseLeave);
});
</script>

<template>
  <div class="home">
    <div ref="cursor" class="cursor"></div>
    <div class="top"></div>

    <SideBar style="max-width: 100vw" />

    <BigLogo style="position: fixed" />
    <Empty height_vh="100" />
    <Intro style="z-index: 999" />
    <!-- <Members /> -->
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
  background-image: linear-gradient(to bottom, #0000002a, #000000ff),
    url("../assets/bg.jpg");
  // background-blend-mode: multiply;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
