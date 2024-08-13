<template>
  <div>
    <h1>关于我们:</h1>
    <div class="intro-text">这是一条介绍我们的文本</div>
  </div>
</template>

<script>
/* 导出组件 */
export default {
  name: "About",
  data() {
    return {};
  },
};
</script>

<style type="text/scss">
@keyframes fideIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.intro {
  font-family: "deyihei";

  font-size: 200%;
  text-align: left;
  opacity: 1;

  color: white;
  animation: fideIn 1s ease-in-out;
  .intro-text {
    font-size: 80%;
    text-align: center;
    animation: fideIn 1s ease-in-out;
  }
}

.home-container {
  height: 100vh;
  display: flex;
  color: azure;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
