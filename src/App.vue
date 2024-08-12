<script setup></script>

<template>
  <!-- SVG内容 -->
  <img src="./assets/svgs/LT-logo-name.svg" class="左上logo" alt="" />
  <img src="./assets/svgs/line.svg" class="分割线" alt="" />
  <div class="set-center">
    <img class="logo" src="./assets/svgs/CENTER-logo-name-motto.svg" />
    <div class="btn-group">
      <button class="btn-left">Github</button>
      <button class="btn-right">!!!</button>
    </div>
  </div>
</template>

<style type="text/sass">
@font-face {
  font-family: "deyihei";
  src:
  url("./assets/SmileySans-Oblique.ttf") format("truetype"); /* 指定多种字体格式以兼容不同浏览器*/

  font-weight: normal;
  font-style: normal;
}

body {
  /* 渐变背景 */
  background-image: linear-gradient(
    to right,
    rgba(0, 16, 23, 1),
    rgba(18, 0, 28, 1)
  );
}
.btn-group {
  display: flex;
  justify-content: center;
  margin-top: 2%;
  width: 400px; /* 元素宽度 */
  margin-left: auto;
  margin-right: auto;
}

.btn-left {
  /* 设置字体为 assets/deyihei.ttf */
  font-family: "deyihei";
  color: #000000;
  letter-spacing: 2px;

  background-image: linear-gradient(315deg, #886dffb4, #4aaeffa1);
  box-shadow: 0px 0px 10px #886dffb4;
  margin-right: 5vw;
  background-size: 100%;
  height: 30px;
  width: 100px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
}

.btn-right {
  /* 设置字体为 assets/deyihei.ttf */
  font-family: "deyihei";
  color: #ffffff;
  letter-spacing: 2px;

  background-image: linear-gradient(35deg, #7147b4, #341369, #0f3c61,#4dafff);
  box-shadow: 0px 0px 10px #ffffffb4;
  margin-left: 5vw;
  background-size: 100%;
  height: 30px;
  width: 100px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;

  width: auto;
  height: auto;
  max-height: 20%;
  max-width: 20%;
}
.logo {
  margin-top: -5%;
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
