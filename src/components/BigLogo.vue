<script setup>
</script>

<template>
  <div style="height: 100vh; width: 100%; display: flex; justify-content: center; align-items: center;" id="box">
    <img src="../assets/xlogo.svg" alt="Xnors!" class="big-logo">
  </div>
</template>

<style scoped>
@keyframes logoAnimation {
  0% {
    transform: rotate(0deg);
    opacity: 1;
    scale: 1;
  }
  100% {
    transform: rotate(180deg);
    opacity: 0;
    scale: 2;
  }
}
.big-logo {
  width: 20vw;
  height: auto;

  animation: logoAnimation 1s linear forwards;
  animation-timeline: scroll();
  animation-range: entry 0 80vh;

}


@media screen and (max-width: 768px) {
  .big-logo {
    width: 50vw;
  }
}
</style>