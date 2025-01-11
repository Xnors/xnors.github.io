<script setup>
</script>

<template>
  <div class="bg" id="box">
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
    scale: 3.14;
  }
}

@keyframes bgAnimation {
  
  0% {
    opacity: 1;
    /* background-color: rgb(180, 180, 180); */

  }
  100% {
    opacity: 0;
    /* background-color: rgb(0, 0, 0); */
  }

}

.bg {
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  animation: bgAnimation 1s linear forwards;
  animation-timeline: scroll();
  animation-range: entry 0 100vh;

  background-color: rgb(0, 0, 0);
}

.big-logo {
  /* width: 20vw; */
  width: calc(15vw + 10vh);
  height: auto;

  animation: logoAnimation 1s linear forwards;
  animation-timeline: scroll();
  animation-range: entry 0 100vh;

}


@media screen and (max-width: 768px) {
  .big-logo {
    width: 42vw;
  }
}
</style>