<script setup>
function onGithubBtnClick() {
  console.log("点击了github按钮");
}
function onProjectBtnClick() {
  console.log("点击了项目按钮");
}
</script>

<template>
  <!-- SVG内容 -->
  <img src="./assets/svgs/LT-logo-name.svg" class="左上logo" alt="" />
  <img src="./assets/svgs/line.svg" class="分割线" alt="" />
  <div class="set-center">
    <img class="logo" src="./assets/svgs/CENTER-logo-name-motto.svg" />
    <div class="aboutus">
      <a href="/About.vue">Know More<br />↓</a>
      <!-- BUG!!! 这里要用路由 -->
    </div>
  </div>

</template>

<style type="text/css">
@font-face {
  font-family: "deyihei";
  src: url("./assets/SmileySans-Oblique.ttf") format("truetype"); /* 指定多种字体格式以兼容不同浏览器*/

  font-weight: normal;
  font-style: normal;
}

a {
  text-decoration: none;
  color: #ffffff8f;
  font-family: "deyihei";

  letter-spacing: 3px;
  font-size: auto;
}

body {
  /* 渐变背景 */
  background-image: linear-gradient(
    to right,
    rgba(0, 16, 23, 1),
    rgba(18, 0, 28, 1)
  );
}

.aboutus {
  text-align: center;
  margin-top: auto;

  height: auto;
  width: auto;
  max-width: 99%;
  max-height: 16vh;

  position: absolute;
  bottom: 4%;
  margin: auto;
}

.logo {
  margin-top: -2%;
  height: auto;
  width: auto;
  max-width: 42%;
  max-height: 42%;
}

.set-center {
  margin-top: 10%;
  display: flex; /* 使用flex布局 */
  flex-direction: column; /* 设置flex方向为垂直 */
  align-items: center; /* 水平居中 */
  justify-content: center; /* 垂直居中 */
  height: auto;
  width: auto;
  max-width: 100%;
  max-height: 100%;
}

.左上logo {
  margin: 1%;
  height: auto;
  width: auto;
  max-width: 20%;
  max-height: 16%;
}

.分割线 {
  width: 99%;
  height: auto;
  max-height: 4.8px;
  opacity: 0.4;
  margin-top: -500px;
}
</style>
