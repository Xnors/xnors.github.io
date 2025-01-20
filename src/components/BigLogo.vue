<script setup>
import { onMounted, ref } from 'vue';

const box = ref(null);
const logo = ref(null);

function handleScroll() {
  const scrollPosition = window.scrollY;
  const viewportHeight = window.innerHeight;

  // 动画范围：从顶部开始，到 100vh 的范围内触发动画
  const animationRange = viewportHeight;

  // 计算动画进度
  const progress = Math.min(1, Math.max(0, scrollPosition / animationRange));

  // 背景动画
  const bgOpacity = 1 - progress;
  box.value.style.opacity = bgOpacity;

  // Logo 动画
  const logoOpacity = 1 - progress;
  const logoScale = 1 + progress * 2.14; // 从 1 到 3.14
  const logoRotation = progress * 180; // 从 0 到 180 度

  logo.value.style.opacity = logoOpacity;
  logo.value.style.transform = `rotate(${logoRotation}deg) scale(${logoScale})`;
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

</script>

<template>
  <div class="bg" id="box" ref="box">
    <img src="../assets/xlogo.svg" alt="Xnors!" class="big-logo" id="logo" ref="logo">
  </div>
</template>

<style scoped>
.bg {
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #030303;
  transition: opacity 0.1s linear;
}

.big-logo {
  width: calc(15vw + 10vh);
  height: auto;
  transition: opacity 0.1s linear, transform 0.1s linear;
}

@media screen and (max-width: 768px) {
  .big-logo {
    width: 42vw;
  }
}
</style>