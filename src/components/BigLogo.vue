<script setup>
import { onMounted, ref, onUnmounted } from 'vue';
// import { Cursor } from 'motion';

const box = ref(null);
const logo = ref(null);

function handleScroll() {
  const scrollPosition = window.scrollY;
  const viewportHeight = window.innerHeight;
  if (scrollPosition > viewportHeight) {
    logo.value.style.scale = 0;
    box.value.style.scale = 0;
  } else {
    logo.value.style.scale = 1;
    box.value.style.scale = 1;
  }

  // 动画范围：从顶部开始，到 100vh 的范围内触发动画
  const animationRange = viewportHeight;

  // 计算动画进度
  const progress = Math.min(1, Math.max(0, scrollPosition / animationRange));

  // 背景动画
  const bgOpacity = 1 - progress;
  box.value.style.opacity = bgOpacity;

  // Logo 动画
  const logoOpacity = 1 - progress;
  const logoScale = 1 + progress * 1.5;
  const logoRotation = progress * 180; // 从 0 到 180 度

  logo.value.style.opacity = logoOpacity;
  logo.value.style.transform = `rotate(${logoRotation}deg) scale(${logoScale})`;
}



onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  // window.addEventListener('scroll', () => {

  // });
});
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <div class="bg" id="box" ref="box">
    <img src="../assets/xlogo-mthin-white.svg" alt="Xnors!" class="big-logo" id="logo" ref="logo">
  </div>
</template>

<style scoped>
.bg {
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: #1f1f1f; */
  background-image: linear-gradient(to bottom, #030303 80%, #0a0a0a6c,#1d1d1d)
  /* transition: opacity 0.1s linear; */
}

.big-logo {
  width: calc(15vw + 10vh);
  height: auto;
  /* transition: opacity 0.1s linear, transform 0.1s linear; */
}

@media screen and (max-width: 768px) {
  .big-logo {
    width: 42vw;
  }
}
</style>